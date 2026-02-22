#!/usr/bin/env tsx
/**
 * Merge per-platform V1 manifests into a single multi-platform V1 manifest.
 *
 * The build workflow produces one V1 manifest per platform, each with a single
 * artifact entry. This script merges them into a single manifest with all
 * platform artifacts, then re-signs it.
 *
 * Usage:
 *   npx tsx src/cli-merge-v1-manifest.ts \
 *     --swift-major-minor 6.1 \
 *     --input-dir ./platform-outputs \
 *     --output-dir ./merged \
 *     [--certs-dir ./certs]
 *
 * Expects the input-dir to contain per-platform subdirectories, each with:
 *   - {majorMinor}-manifest.json (single-platform V1 manifest)
 *   - summary.json (output from cli-build.ts)
 */

import { readFileSync, readdirSync, mkdirSync } from "fs";
import { join, resolve } from "path";
import { signManifest, defaultCertPaths, SigningCerts } from "./sign";
import type { V1Manifest } from "./manifest";

interface CliArgs {
  swiftMajorMinor: string;
  inputDir: string;
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

  const required = ["swift-major-minor", "input-dir", "output-dir"];
  for (const key of required) {
    if (!parsed[key]) {
      console.error(`Missing required argument: --${key}`);
      process.exit(1);
    }
  }

  return {
    swiftMajorMinor: parsed["swift-major-minor"],
    inputDir: resolve(parsed["input-dir"]),
    outputDir: resolve(parsed["output-dir"]),
    certsDir: parsed["certs-dir"] ? resolve(parsed["certs-dir"]) : undefined,
  };
}

async function main() {
  const args = parseArgs();
  const { swiftMajorMinor, inputDir, outputDir } = args;
  const manifestFilename = `${swiftMajorMinor}-manifest.json`;

  // Collect all per-platform summaries to gather checksums and platforms
  const platformDirs = readdirSync(inputDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  if (platformDirs.length === 0) {
    console.error(`No platform directories found in ${inputDir}`);
    process.exit(1);
  }

  // Read per-platform summaries to get checksums
  const artifacts: Array<{ checksum: string; platform: string }> = [];

  for (const dir of platformDirs) {
    const summaryPath = join(inputDir, dir, "summary.json");
    const summary = JSON.parse(readFileSync(summaryPath, "utf-8"));
    artifacts.push({
      checksum: summary.checksum,
      platform: summary.platform,
    });
    console.error(`  ${summary.platform}: ${summary.checksum.slice(0, 12)}...`);
  }

  // Read any single-platform V1 manifest as template to get products/cModules
  const templatePath = join(inputDir, platformDirs[0], manifestFilename);
  const templateSigned = JSON.parse(readFileSync(templatePath, "utf-8"));
  const templateManifest: V1Manifest = templateSigned.manifest;

  // Build merged manifest
  const mergedManifest: V1Manifest = {
    libraries: [
      {
        artifacts: artifacts.sort((a, b) =>
          a.platform.localeCompare(b.platform)
        ),
        cModules: templateManifest.libraries[0].cModules,
        name: templateManifest.libraries[0].name,
        products: templateManifest.libraries[0].products,
      },
    ],
    version: 1,
  };

  // Sign and write
  mkdirSync(outputDir, { recursive: true });
  const certsDir = args.certsDir || join(__dirname, "..", "certs");
  const signingCerts: SigningCerts = defaultCertPaths(certsDir);

  const mergedPath = join(outputDir, manifestFilename);
  await signManifest(mergedManifest, mergedPath, signingCerts);

  console.error(`Merged V1 manifest: ${mergedPath}`);
  console.error(`  Platforms: ${artifacts.map((a) => a.platform).join(", ")}`);
  console.log(JSON.stringify({ path: mergedPath, platforms: artifacts.map(a => a.platform) }));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
