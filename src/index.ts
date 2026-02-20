import * as core from "@actions/core";
import * as cache from "@actions/cache";
import { existsSync, mkdirSync, rmSync, cpSync } from "fs";
import { join, resolve } from "path";
import { detectToolchain } from "./toolchain";
import { resolveSyntaxVersion } from "./resolve";
import { buildPrebuilt } from "./build";
import { generateMainManifest, generateV1Manifest } from "./manifest";
import { signManifest } from "./sign";

const PREBUILTS_DIR = "/tmp/swift-syntax-prebuilts";

async function run() {
  // Warn if .build/prebuilts/ already exists (poisoning risk)
  if (existsSync(".build/prebuilts")) {
    core.warning(
      ".build/prebuilts/ already exists. This may cause SwiftPM to skip " +
        "our prebuilts. Run this action before any swift commands."
    );
    // Clean it to avoid poisoning
    rmSync(".build/prebuilts", { recursive: true, force: true });
    core.info("Cleaned .build/prebuilts/ to avoid cache poisoning.");
  }

  // 1. Detect toolchain
  const { compilerTag, platform: hostPlatform } = await detectToolchain();
  core.info(`Compiler tag: ${compilerTag}`);
  core.info(`Host platform: ${hostPlatform}`);

  // 2. Resolve swift-syntax version
  const inputVersion = core.getInput("swift-syntax-version");
  const syntaxVersion = await resolveSyntaxVersion(inputVersion);
  if (!syntaxVersion) {
    core.info("No swift-syntax dependency found. Skipping prebuilt setup.");
    core.setOutput("swift-flags", "");
    core.setOutput("cache-hit", "false");
    return;
  }
  core.setOutput("swift-syntax-version", syntaxVersion);

  // 3. Cache restore
  const cacheKey = `swift-syntax-prebuilt-v1-${compilerTag}-${hostPlatform}-${syntaxVersion}`;
  core.info(`Cache key: ${cacheKey}`);

  let cacheHit = false;
  const cacheBackend = core.getInput("cache-backend") || "github";

  if (cacheBackend === "github") {
    try {
      const restoredKey = await cache.restoreCache([PREBUILTS_DIR], cacheKey);
      cacheHit = restoredKey === cacheKey;
      if (cacheHit) {
        core.info("Cache hit! Restored prebuilt artifacts.");
      } else {
        core.info("Cache miss. Will build from source.");
      }
    } catch (e: any) {
      core.warning(`Cache restore failed: ${e.message}`);
    }
  }

  core.setOutput("cache-hit", String(cacheHit));

  if (!cacheHit) {
    // 4. Build
    core.startGroup("Build prebuilt SwiftSyntax");
    const { checksum } = await buildPrebuilt(
      syntaxVersion,
      compilerTag,
      hostPlatform,
      PREBUILTS_DIR
    );
    core.endGroup();

    // 5. Generate & sign manifests
    const outDir = join(PREBUILTS_DIR, "swift-syntax", syntaxVersion);

    // Main branch manifest (nightly toolchains)
    core.startGroup("Generate and sign manifests");
    const certsDir = join(__dirname, "..", "certs");

    const mainManifest = generateMainManifest(checksum);
    const mainManifestPath = join(
      outDir,
      `${compilerTag}-${hostPlatform}.json`
    );
    await signManifest(mainManifest, mainManifestPath, certsDir);
    core.info(`Main manifest: ${mainManifestPath}`);

    // V1 manifest (6.1/6.2 SwiftPM)
    const v1Manifest = generateV1Manifest(checksum, hostPlatform);
    const v1ManifestPath = join(outDir, `${compilerTag}-manifest.json`);
    await signManifest(v1Manifest, v1ManifestPath, certsDir);
    core.info(`V1 manifest: ${v1ManifestPath}`);

    // Also generate the v1 artifact name (symlink or copy)
    // v1 artifact format: {compilerTag}-MacroSupport-{platform}.tar.gz
    const mainArtifactName = `${compilerTag}-${hostPlatform}-MacroSupport.tar.gz`;
    const v1ArtifactName = `${compilerTag}-MacroSupport-${hostPlatform}.tar.gz`;
    const mainArtifactPath = join(outDir, mainArtifactName);
    const v1ArtifactPath = join(outDir, v1ArtifactName);
    if (mainArtifactName !== v1ArtifactName && existsSync(mainArtifactPath)) {
      cpSync(mainArtifactPath, v1ArtifactPath);
      core.info(`V1 artifact (copy): ${v1ArtifactPath}`);
    }

    core.endGroup();

    // Copy root cert into prebuilts dir for self-contained distribution
    const certsDest = join(PREBUILTS_DIR, ".certs");
    mkdirSync(certsDest, { recursive: true });
    cpSync(join(certsDir, "TestRootCA.cer"), join(certsDest, "TestRootCA.cer"));

    // 6. Save cache
    if (cacheBackend === "github") {
      try {
        await cache.saveCache([PREBUILTS_DIR], cacheKey);
        core.info("Saved prebuilt artifacts to cache.");
      } catch (e: any) {
        core.warning(`Cache save failed: ${e.message}`);
      }
    }
  }

  // 7. Export outputs
  const rootCert = join(PREBUILTS_DIR, ".certs", "TestRootCA.cer");
  // If cert doesn't exist in prebuilts (e.g. cache restored without it), use bundled one
  const certPath = existsSync(rootCert)
    ? rootCert
    : join(__dirname, "..", "certs", "TestRootCA.cer");

  const flags = [
    `--experimental-prebuilts-download-url`,
    `file://${PREBUILTS_DIR}`,
    `--experimental-prebuilts-root-cert`,
    certPath,
  ].join(" ");

  core.setOutput("swift-flags", flags);
  core.setOutput("prebuilts-path", PREBUILTS_DIR);

  core.info(`\n✅ SwiftSyntax prebuilts ready!`);
  core.info(`   Version: ${syntaxVersion}`);
  core.info(`   Flags: ${flags}`);
}

run().catch((err) => core.setFailed(err.message));
