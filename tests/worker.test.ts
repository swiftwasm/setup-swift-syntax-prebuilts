import { describe, it } from "node:test";
import assert from "node:assert/strict";

/**
 * Test the Cloudflare Worker's URL routing logic.
 *
 * Since the worker runs in a Cloudflare Workers runtime, we test the
 * core logic (extractCompilerTag + URL mapping) by reimplementing the
 * regex patterns here. This validates our routing assumptions.
 */

// Copy of the regex patterns from worker/src/index.ts
const PLATFORM_PATTERN = "(macos_universal|[a-z]+_[a-z]+_(?:x86_64|aarch64))";
const PLATFORM_RE = new RegExp(`^${PLATFORM_PATTERN}$`);
const V1_MANIFEST_RE = /^(\d+\.\d+)-manifest\.json$/;
const V1_ARTIFACT_RE = new RegExp(
  `^(\\d+\\.\\d+)-MacroSupport-${PLATFORM_PATTERN}\\.tar\\.gz$`
);
const MAIN_MANIFEST_RE = new RegExp(`^(.+)-${PLATFORM_PATTERN}\\.json$`);
const MAIN_ARTIFACT_RE = new RegExp(
  `^(.+)-${PLATFORM_PATTERN}-MacroSupport\\.tar\\.gz$`
);

function extractCompilerTag(filename: string): string | null {
  let match = V1_MANIFEST_RE.exec(filename);
  if (match) return `swift-${match[1]}-RELEASE`;

  match = V1_ARTIFACT_RE.exec(filename);
  if (match) return `swift-${match[1]}-RELEASE`;

  match = MAIN_MANIFEST_RE.exec(filename);
  if (match && PLATFORM_RE.test(match[2])) return match[1];

  match = MAIN_ARTIFACT_RE.exec(filename);
  if (match && PLATFORM_RE.test(match[2])) return match[1];

  return null;
}

function buildReleaseTag(
  syntaxVersion: string,
  compilerTag: string
): string {
  return `prebuilt-${syntaxVersion}-${compilerTag}`;
}

function buildGitHubUrl(
  syntaxVersion: string,
  compilerTag: string,
  filename: string
): string {
  const tag = buildReleaseTag(syntaxVersion, compilerTag);
  return `https://github.com/swiftwasm/setup-swift-syntax-prebuilts/releases/download/${tag}/${filename}`;
}

describe("Worker: extractCompilerTag", () => {
  it("extracts from main branch manifest", () => {
    assert.equal(
      extractCompilerTag("swift-6.1-RELEASE-ubuntu_noble_x86_64.json"),
      "swift-6.1-RELEASE"
    );
  });

  it("extracts from main branch artifact", () => {
    assert.equal(
      extractCompilerTag(
        "swift-6.1-RELEASE-ubuntu_noble_x86_64-MacroSupport.tar.gz"
      ),
      "swift-6.1-RELEASE"
    );
  });

  it("extracts from nightly snapshot manifest", () => {
    assert.equal(
      extractCompilerTag(
        "swift-DEVELOPMENT-SNAPSHOT-2025-06-01-a-macos_universal.json"
      ),
      "swift-DEVELOPMENT-SNAPSHOT-2025-06-01-a"
    );
  });

  it("extracts from nightly snapshot artifact", () => {
    assert.equal(
      extractCompilerTag(
        "swift-DEVELOPMENT-SNAPSHOT-2025-06-01-a-ubuntu_jammy_x86_64-MacroSupport.tar.gz"
      ),
      "swift-DEVELOPMENT-SNAPSHOT-2025-06-01-a"
    );
  });

  it("extracts from V1 manifest", () => {
    assert.equal(
      extractCompilerTag("6.1-manifest.json"),
      "swift-6.1-RELEASE"
    );
  });

  it("extracts from V1 artifact", () => {
    assert.equal(
      extractCompilerTag("6.1-MacroSupport-ubuntu_noble_aarch64.tar.gz"),
      "swift-6.1-RELEASE"
    );
  });

  it("handles macos_universal platform", () => {
    assert.equal(
      extractCompilerTag("swift-6.2-RELEASE-macos_universal.json"),
      "swift-6.2-RELEASE"
    );
  });

  it("handles patch version compiler tags", () => {
    assert.equal(
      extractCompilerTag(
        "swift-6.1.2-RELEASE-ubuntu_noble_x86_64.json"
      ),
      "swift-6.1.2-RELEASE"
    );
  });

  it("returns null for unrecognized filenames", () => {
    assert.equal(extractCompilerTag("random-file.txt"), null);
    assert.equal(extractCompilerTag(""), null);
  });
});

describe("Worker: URL routing", () => {
  it("routes main branch manifest to correct release", () => {
    const filename = "swift-6.1-RELEASE-ubuntu_noble_x86_64.json";
    const tag = extractCompilerTag(filename)!;
    const url = buildGitHubUrl("600.0.1", tag, filename);
    assert.equal(
      url,
      "https://github.com/swiftwasm/setup-swift-syntax-prebuilts/releases/download/prebuilt-600.0.1-swift-6.1-RELEASE/swift-6.1-RELEASE-ubuntu_noble_x86_64.json"
    );
  });

  it("routes V1 manifest to correct release", () => {
    const filename = "6.1-manifest.json";
    const tag = extractCompilerTag(filename)!;
    const url = buildGitHubUrl("600.0.1", tag, filename);
    assert.equal(
      url,
      "https://github.com/swiftwasm/setup-swift-syntax-prebuilts/releases/download/prebuilt-600.0.1-swift-6.1-RELEASE/6.1-manifest.json"
    );
  });

  it("routes nightly artifact to correct release", () => {
    const filename =
      "swift-DEVELOPMENT-SNAPSHOT-2025-06-01-a-ubuntu_noble_x86_64-MacroSupport.tar.gz";
    const tag = extractCompilerTag(filename)!;
    const url = buildGitHubUrl("600.0.1", tag, filename);
    assert.equal(
      url,
      "https://github.com/swiftwasm/setup-swift-syntax-prebuilts/releases/download/prebuilt-600.0.1-swift-DEVELOPMENT-SNAPSHOT-2025-06-01-a/swift-DEVELOPMENT-SNAPSHOT-2025-06-01-a-ubuntu_noble_x86_64-MacroSupport.tar.gz"
    );
  });
});
