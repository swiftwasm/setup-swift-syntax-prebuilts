import * as core from "@actions/core";
import * as cache from "@actions/cache";
import { existsSync, mkdirSync, rmSync, cpSync } from "fs";
import { join } from "path";
import { tmpdir } from "os";
import { detectToolchain } from "./toolchain";
import { resolveSyntaxVersion } from "./resolve";
import { buildPrebuilt } from "./build";
import { generateMainManifest, generateV1Manifest } from "./manifest";
import { signManifest, defaultCertPaths, SigningCerts } from "./sign";
import { restoreFromRelease } from "./release";
import { validatePrebuilts } from "./validate";

/**
 * Determine the base directory for prebuilt artifacts.
 *
 * In GitHub Actions, RUNNER_TEMP provides a per-job temporary directory
 * that persists across steps and is cleaned up after the job completes.
 * Outside GitHub Actions (local testing), falls back to os.tmpdir().
 */
function getPrebuiltsDir(): string {
  const base = process.env.RUNNER_TEMP || tmpdir();
  return join(base, "swift-syntax-prebuilts");
}

/**
 * Resolve signing certificate paths. Uses user-provided paths if any
 * input is set, otherwise falls back to the bundled default certificates.
 */
function resolveSigningCerts(): SigningCerts {
  const leafInput = core.getInput("signing-leaf-cert");
  const intermediateInput = core.getInput("signing-intermediate-cert");
  const rootInput = core.getInput("signing-root-cert");
  const keyInput = core.getInput("signing-private-key");

  const bundledCertsDir = join(__dirname, "..", "certs");
  const defaults = defaultCertPaths(bundledCertsDir);

  return {
    leafCertPath: leafInput || defaults.leafCertPath,
    intermediateCertPath: intermediateInput || defaults.intermediateCertPath,
    rootCertPath: rootInput || defaults.rootCertPath,
    privateKeyPath: keyInput || defaults.privateKeyPath,
  };
}

async function run() {
  const prebuiltsDir = getPrebuiltsDir();
  core.info(`Prebuilts directory: ${prebuiltsDir}`);

  // Warn if .build/prebuilts/ already exists (poisoning risk)
  if (existsSync(".build/prebuilts")) {
    core.warning(
      ".build/prebuilts/ already exists. This may cause SwiftPM to skip " +
        "our prebuilts. Run this action before any swift commands."
    );
    rmSync(".build/prebuilts", { recursive: true, force: true });
    core.info("Cleaned .build/prebuilts/ to avoid cache poisoning.");
  }

  // 1. Detect toolchain
  const { compilerTag, swiftMajorMinor, platform: hostPlatform } =
    await detectToolchain();
  core.info(`Compiler tag: ${compilerTag}`);
  core.info(`Swift version: ${swiftMajorMinor}`);
  core.info(`Host platform: ${hostPlatform}`);

  // 2. Resolve swift-syntax version
  const inputVersion = core.getInput("swift-syntax-version");
  const packageResolvedPath = core.getInput("package-resolved-path");
  const syntaxVersion = await resolveSyntaxVersion(
    inputVersion,
    packageResolvedPath || undefined
  );
  if (!syntaxVersion) {
    core.info("No swift-syntax dependency found. Skipping prebuilt setup.");
    core.setOutput("swift-flags", "");
    core.setOutput("cache-hit", "false");
    return;
  }
  core.setOutput("swift-syntax-version", syntaxVersion);

  // 3. Resolve signing certs
  const signingCerts = resolveSigningCerts();

  // 4. Cache restore
  const cacheKey = `swift-syntax-prebuilt-v4-${compilerTag}-${hostPlatform}-${syntaxVersion}`;
  core.info(`Cache key: ${cacheKey}`);

  let cacheHit = false;
  const cacheBackend = core.getInput("cache-backend") || "github";

  if (cacheBackend === "github") {
    try {
      const restoredKey = await cache.restoreCache([prebuiltsDir], cacheKey);
      cacheHit = restoredKey === cacheKey;
      if (cacheHit) {
        const validation = validatePrebuilts(
          prebuiltsDir,
          syntaxVersion,
          compilerTag,
          hostPlatform
        );
        if (validation.ok) {
          core.info("Cache hit! Restored prebuilt artifacts.");
        } else {
          core.warning(
            `Cache hit, but restored prebuilts are not usable: ${validation.reason}`
          );
          rmSync(prebuiltsDir, { recursive: true, force: true });
          cacheHit = false;
          core.info(
            "Discarded restored prebuilts. Falling back to release restore or local build."
          );
        }
      } else {
        core.info("Cache miss.");
      }
    } catch (e: any) {
      core.warning(`Cache restore failed: ${e.message}`);
    }
  }

  core.setOutput("cache-hit", String(cacheHit));
  let restoreSource = cacheHit ? "github-cache" : "none";

  if (!cacheHit && core.getInput("restore-from-release") !== "false") {
    const releaseOwner = core.getInput("release-owner") || "swiftwasm";
    const releaseRepo =
      core.getInput("release-repo") || "setup-swift-syntax-prebuilts";

    core.startGroup("Restore from GitHub Release");
    const releaseResult = await restoreFromRelease({
      owner: releaseOwner,
      repo: releaseRepo,
      syntaxVersion,
      compilerTag,
      swiftMajorMinor,
      platform: hostPlatform,
      prebuiltsDir,
    });
    core.endGroup();

    if (releaseResult.restored) {
      restoreSource = "github-release";
    } else {
      core.info("No matching release assets found. Will build from source.");
    }
  }

  if (restoreSource === "none") {
    // 5. Build
    core.startGroup("Build prebuilt SwiftSyntax");
    const { checksum } = await buildPrebuilt(
      syntaxVersion,
      compilerTag,
      hostPlatform,
      prebuiltsDir
    );
    core.endGroup();

    // 6. Generate & sign manifests
    //
    // SwiftPM main branch (>= 6.3-dev):
    //   manifest: {compilerTag}-{platform}.json
    //   artifact: {compilerTag}-{platform}-MacroSupport.tar.gz
    //
    // SwiftPM 6.1/6.2 (release branches):
    //   manifest: {major.minor}-manifest.json      (e.g. "6.1-manifest.json")
    //   artifact: {major.minor}-MacroSupport-{platform}.tar.gz
    //
    const outDir = join(prebuiltsDir, "swift-syntax", syntaxVersion);

    core.startGroup("Generate and sign manifests");

    // Main branch manifest
    const mainManifest = generateMainManifest(checksum);
    const mainManifestPath = join(
      outDir,
      `${compilerTag}-${hostPlatform}.json`
    );
    await signManifest(mainManifest, mainManifestPath, signingCerts);
    core.info(`Main manifest: ${mainManifestPath}`);

    // Main branch artifact is already at the right name from buildPrebuilt:
    //   {compilerTag}-{platform}-MacroSupport.tar.gz
    const mainArtifactName = `${compilerTag}-${hostPlatform}-MacroSupport.tar.gz`;
    const mainArtifactPath = join(outDir, mainArtifactName);

    // V1 manifest and artifact (for SwiftPM 6.1/6.2)
    if (swiftMajorMinor) {
      const v1Manifest = generateV1Manifest(checksum, hostPlatform);
      const v1ManifestPath = join(
        outDir,
        `${swiftMajorMinor}-manifest.json`
      );
      await signManifest(v1Manifest, v1ManifestPath, signingCerts);
      core.info(`V1 manifest: ${v1ManifestPath}`);

      const v1ArtifactName = `${swiftMajorMinor}-MacroSupport-${hostPlatform}.tar.gz`;
      const v1ArtifactPath = join(outDir, v1ArtifactName);
      if (existsSync(mainArtifactPath)) {
        cpSync(mainArtifactPath, v1ArtifactPath);
        core.info(`V1 artifact: ${v1ArtifactPath}`);
      }
    }

    core.endGroup();

    // Copy root cert into prebuilts dir for self-contained output
    const certsDest = join(prebuiltsDir, ".certs");
    mkdirSync(certsDest, { recursive: true });
    cpSync(signingCerts.rootCertPath, join(certsDest, "root-ca.cer"));

    restoreSource = "local-build";
  }

  // 7. Save cache. Release restores are cached in the consuming repository
  // too, so later jobs do not need to hit GitHub Releases again.
  if (!cacheHit && cacheBackend === "github") {
    try {
      await cache.saveCache([prebuiltsDir], cacheKey);
      core.info("Saved prebuilt artifacts to cache.");
    } catch (e: any) {
      core.warning(`Cache save failed: ${e.message}`);
    }
  }
  core.setOutput("restore-source", restoreSource);

  // 8. Export outputs
  const rootCert = join(prebuiltsDir, ".certs", "root-ca.cer");
  const certPath = existsSync(rootCert)
    ? rootCert
    : signingCerts.rootCertPath;

  const flags = [
    "--enable-experimental-prebuilts",
    "--experimental-prebuilts-download-url",
    `file://${prebuiltsDir}`,
    "--experimental-prebuilts-root-cert",
    certPath,
  ].join(" ");

  core.setOutput("swift-flags", flags);
  core.setOutput("prebuilts-path", prebuiltsDir);

  core.info(`\n\u2705 SwiftSyntax prebuilts ready!`);
  core.info(`   Version: ${syntaxVersion}`);
  core.info(`   Restore source: ${restoreSource}`);
  core.info(`   Flags: ${flags}`);
}

run().catch((err) => core.setFailed(err.message));
