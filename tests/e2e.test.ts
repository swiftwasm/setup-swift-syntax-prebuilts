/**
 * End-to-end test: build swift-syntax prebuilts and verify SwiftPM consumes them.
 *
 * Requires: Swift toolchain, git, ~5 minutes for first run.
 * Run with: npx tsx --test tests/e2e.test.ts
 */
import { describe, it, before, after } from "node:test";
import assert from "node:assert/strict";
import {
  existsSync,
  mkdirSync,
  writeFileSync,
  readFileSync,
  rmSync,
  mkdtempSync,
  cpSync,
} from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { exec, getExecOutput } from "@actions/exec";
import { detectToolchain } from "../src/toolchain";
import { buildPrebuilt } from "../src/build";
import { generateMainManifest } from "../src/manifest";
import { signManifest, defaultCertPaths } from "../src/sign";

const SYNTAX_VERSION = "600.0.1";
const certsDir = join(__dirname, "..", "certs");
const certs = defaultCertPaths(certsDir);

let prebuiltsDir: string;
let projectDir: string;
let compilerTag: string;
let hostPlatform: string;
let checksum: string;

describe("e2e: build and consume prebuilts", () => {
  before(async () => {
    // Detect toolchain
    const info = await detectToolchain();
    compilerTag = info.compilerTag;
    hostPlatform = info.platform;

    prebuiltsDir = mkdtempSync(join(tmpdir(), "prebuilts-e2e-"));

    // Build prebuilts
    const result = await buildPrebuilt(
      SYNTAX_VERSION,
      compilerTag,
      hostPlatform,
      prebuiltsDir
    );
    checksum = result.checksum;

    // Sign manifest
    const outDir = join(prebuiltsDir, "swift-syntax", SYNTAX_VERSION);
    const manifest = generateMainManifest(checksum);
    const manifestPath = join(
      outDir,
      `${compilerTag}-${hostPlatform}.json`
    );
    await signManifest(manifest, manifestPath, certs);

    // Copy root cert
    const certsDest = join(prebuiltsDir, ".certs");
    mkdirSync(certsDest, { recursive: true });
    cpSync(certs.rootCertPath, join(certsDest, "root-ca.cer"));

    // Create test Swift project
    projectDir = mkdtempSync(join(tmpdir(), "swift-project-e2e-"));
    writeFileSync(
      join(projectDir, "Package.swift"),
      `// swift-tools-version: 6.0
import PackageDescription
let package = Package(
    name: "TestProject",
    dependencies: [
        .package(url: "https://github.com/swiftlang/swift-syntax.git", from: "600.0.1"),
    ],
    targets: [
        .target(name: "TestLib", dependencies: [
            .product(name: "SwiftSyntax", package: "swift-syntax"),
        ]),
    ]
)
`
    );
    mkdirSync(join(projectDir, "Sources", "TestLib"), { recursive: true });
    writeFileSync(
      join(projectDir, "Sources", "TestLib", "Lib.swift"),
      'import SwiftSyntax\npublic func hello() -> String { "Hello" }\n'
    );
  });

  after(() => {
    if (prebuiltsDir) rmSync(prebuiltsDir, { recursive: true, force: true });
    if (projectDir) rmSync(projectDir, { recursive: true, force: true });
  });

  it("produces a signed manifest", () => {
    const manifestPath = join(
      prebuiltsDir,
      "swift-syntax",
      SYNTAX_VERSION,
      `${compilerTag}-${hostPlatform}.json`
    );
    assert.ok(existsSync(manifestPath), "Manifest should exist");
    const signed = JSON.parse(readFileSync(manifestPath, "utf-8"));
    assert.ok(signed.manifest);
    assert.ok(signed.signature?.signature);
    assert.equal(signed.signature.signature.split(".").length, 3);
  });

  it("SwiftPM consumes prebuilts via file:// URL", async () => {
    const rootCert = join(prebuiltsDir, ".certs", "root-ca.cer");

    // Clean any poisoned prebuilt cache
    const prebuiltsCache = join(projectDir, ".build", "prebuilts");
    if (existsSync(prebuiltsCache)) {
      rmSync(prebuiltsCache, { recursive: true });
    }

    const { exitCode } = await getExecOutput(
      "swift",
      [
        "build",
        "--experimental-prebuilts-download-url",
        `file://${prebuiltsDir}`,
        "--experimental-prebuilts-root-cert",
        rootCert,
      ],
      {
        cwd: projectDir,
        ignoreReturnCode: true,
      }
    );

    assert.equal(exitCode, 0, "swift build should succeed with prebuilts");
  });
});
