/**
 * CLI entry point for building SwiftSyntax prebuilt artifacts.
 *
 * This is used by the build-prebuilts workflow to build artifacts for a single
 * platform, producing:
 *   - Main branch manifest + artifact ({compilerTag}-{platform}.*)
 *   - V1 manifest + artifact ({majorMinor}-*) if swiftMajorMinor is provided
 *
 * Usage:
 *   node dist/cli-build.js \
 *     --syntax-version 600.0.1 \
 *     --compiler-tag swift-6.1-RELEASE \
 *     --swift-major-minor 6.1 \
 *     --platform ubuntu_noble_x86_64 \
 *     --output-dir ./output
 *
 * Outputs a JSON summary to stdout with the list of generated files.
 */

import { execSync } from "child_process";
import {
  mkdtempSync,
  appendFileSync,
  cpSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
  existsSync,
} from "fs";
import { tmpdir } from "os";
import { join, resolve } from "path";
import { createHash } from "crypto";
import { generateMainManifest, generateV1Manifest } from "./manifest";
import { signManifest, defaultCertPaths, SigningCerts } from "./sign";

interface CliArgs {
  syntaxVersion: string;
  compilerTag: string;
  swiftMajorMinor: string;
  platform: string;
  outputDir: string;
  certsDir?: string;
}

function parseArgs(): CliArgs {
  const args = process.argv.slice(2);
  const parsed: Record<string, string> = {};

  for (let i = 0; i < args.length; i += 2) {
    const key = args[i].replace(/^--/, "");
    const value = args[i + 1];
    if (!value) {
      console.error(`Missing value for --${key}`);
      process.exit(1);
    }
    parsed[key] = value;
  }

  const required = ["syntax-version", "compiler-tag", "platform", "output-dir"];
  for (const key of required) {
    if (!parsed[key]) {
      console.error(`Missing required argument: --${key}`);
      console.error(
        "Usage: node dist/cli-build.js --syntax-version VERSION --compiler-tag TAG --platform PLATFORM --output-dir DIR [--swift-major-minor X.Y] [--certs-dir DIR]"
      );
      process.exit(1);
    }
  }

  return {
    syntaxVersion: parsed["syntax-version"],
    compilerTag: parsed["compiler-tag"],
    swiftMajorMinor: parsed["swift-major-minor"] || "",
    platform: parsed["platform"],
    outputDir: resolve(parsed["output-dir"]),
    certsDir: parsed["certs-dir"] ? resolve(parsed["certs-dir"]) : undefined,
  };
}

function exec(command: string, options?: { cwd?: string }): void {
  console.error(`$ ${command}`);
  execSync(command, { stdio: "inherit", ...options });
}

function execCapture(command: string, options?: { cwd?: string }): string {
  return execSync(command, { encoding: "utf-8", ...options }).trim();
}

async function buildPrebuilt(
  syntaxVersion: string,
  compilerTag: string,
  platform: string,
  outputDir: string
): Promise<{ checksum: string; artifactPath: string }> {
  const workdir = mkdtempSync(join(tmpdir(), "swift-syntax-build-"));
  const repoDir = join(workdir, "swift-syntax");
  const stageDir = join(workdir, "stage");

  console.error(`Working directory: ${workdir}`);

  // 1. Clone swift-syntax at the resolved tag
  console.error(`Cloning swift-syntax@${syntaxVersion}...`);
  exec(
    `git clone --depth=1 --branch ${syntaxVersion} https://github.com/swiftlang/swift-syntax.git ${repoDir}`
  );

  // 2. Append MacroSupport product
  console.error("Patching Package.swift...");
  const patch = `
// Added by setup-swiftsyntax-prebuilts
package.products += [
    .library(name: "MacroSupport", type: .static, targets:
        package.targets.filter { $0.type == .regular || $0.type == .system }.map { $0.name }
    )
]
`;
  appendFileSync(join(repoDir, "Package.swift"), patch);

  // 3. Build release
  console.error("Building swift-syntax (release)...");
  exec("swift build -c release -debug-info-format none --product MacroSupport", {
    cwd: repoDir,
  });

  // 4. Stage artifacts
  console.error("Staging artifacts...");
  const buildDir = join(repoDir, ".build", "release");

  mkdirSync(join(stageDir, "lib"), { recursive: true });
  cpSync(
    join(buildDir, "libMacroSupport.a"),
    join(stageDir, "lib", "libMacroSupport.a")
  );
  cpSync(join(buildDir, "Modules"), join(stageDir, "Modules"), {
    recursive: true,
  });

  // 5. Create archive
  mkdirSync(outputDir, { recursive: true });
  const artifactName = `${compilerTag}-${platform}-MacroSupport.tar.gz`;
  const artifactPath = join(outputDir, artifactName);

  exec(`tar -C ${stageDir} -czf ${artifactPath} lib Modules`);

  // 6. Compute checksum
  const data = readFileSync(artifactPath);
  const checksum = createHash("sha256").update(data).digest("hex");
  console.error(`Checksum: ${checksum}`);
  console.error(`Size: ${(data.length / 1024 / 1024).toFixed(1)} MB`);

  return { checksum, artifactPath };
}

async function main() {
  const args = parseArgs();
  const {
    syntaxVersion,
    compilerTag,
    swiftMajorMinor,
    platform,
    outputDir,
  } = args;

  // Resolve signing certs
  const certsDir = args.certsDir || join(__dirname, "..", "certs");
  const signingCerts: SigningCerts = defaultCertPaths(certsDir);

  // Build
  const { checksum, artifactPath } = await buildPrebuilt(
    syntaxVersion,
    compilerTag,
    platform,
    outputDir
  );

  const outputFiles: string[] = [artifactPath];

  // Generate & sign main branch manifest
  const mainManifest = generateMainManifest(checksum);
  const mainManifestPath = join(
    outputDir,
    `${compilerTag}-${platform}.json`
  );
  await signManifest(mainManifest, mainManifestPath, signingCerts);
  outputFiles.push(mainManifestPath);
  console.error(`Main manifest: ${mainManifestPath}`);

  // Generate & sign V1 manifest (if swiftMajorMinor provided)
  if (swiftMajorMinor) {
    const v1Manifest = generateV1Manifest(checksum, platform);
    const v1ManifestPath = join(
      outputDir,
      `${swiftMajorMinor}-manifest.json`
    );
    await signManifest(v1Manifest, v1ManifestPath, signingCerts);
    outputFiles.push(v1ManifestPath);
    console.error(`V1 manifest: ${v1ManifestPath}`);

    // Copy artifact with V1 naming
    const v1ArtifactPath = join(
      outputDir,
      `${swiftMajorMinor}-MacroSupport-${platform}.tar.gz`
    );
    cpSync(artifactPath, v1ArtifactPath);
    outputFiles.push(v1ArtifactPath);
    console.error(`V1 artifact: ${v1ArtifactPath}`);
  }

  // Copy root cert
  const rootCertDest = join(outputDir, "root-ca.cer");
  cpSync(signingCerts.rootCertPath, rootCertDest);
  outputFiles.push(rootCertDest);

  // Output summary as JSON to stdout
  const summary = {
    syntaxVersion,
    compilerTag,
    swiftMajorMinor,
    platform,
    checksum,
    files: outputFiles,
  };
  console.log(JSON.stringify(summary, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
