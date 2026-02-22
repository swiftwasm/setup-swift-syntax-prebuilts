import { describe, it, beforeEach, afterEach } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, cpSync, existsSync, rmSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { resolveSyntaxVersion } from "../src/resolve";
import { FIXTURES_DIR } from "./helpers";

const fixturesDir = FIXTURES_DIR;

// resolveSyntaxVersion reads Package.resolved from cwd when no path is given,
// so we chdir into a temp dir for those tests.
let origCwd: string;
let tempDir: string;

beforeEach(() => {
  origCwd = process.cwd();
  tempDir = mkdtempSync(join(tmpdir(), "resolve-test-"));
  process.chdir(tempDir);
});

afterEach(() => {
  process.chdir(origCwd);
  rmSync(tempDir, { recursive: true, force: true });
});

describe("resolveSyntaxVersion", () => {
  it("returns explicit version when provided", async () => {
    const result = await resolveSyntaxVersion("510.0.3");
    assert.equal(result, "510.0.3");
  });

  it("parses v3 Package.resolved", async () => {
    cpSync(join(fixturesDir, "Package.resolved.v3"), join(tempDir, "Package.resolved"));
    const result = await resolveSyntaxVersion("");
    assert.equal(result, "600.0.1");
  });

  it("parses v2 Package.resolved", async () => {
    cpSync(join(fixturesDir, "Package.resolved.v2"), join(tempDir, "Package.resolved"));
    const result = await resolveSyntaxVersion("");
    assert.equal(result, "600.0.1");
  });

  it("parses v1 Package.resolved", async () => {
    cpSync(join(fixturesDir, "Package.resolved.v1"), join(tempDir, "Package.resolved"));
    const result = await resolveSyntaxVersion("");
    assert.equal(result, "600.0.1");
  });

  it("returns null when swift-syntax not in Package.resolved", async () => {
    cpSync(join(fixturesDir, "Package.resolved.no-syntax"), join(tempDir, "Package.resolved"));
    const result = await resolveSyntaxVersion("");
    assert.equal(result, null);
  });

  // --- packageResolvedPath parameter ---

  it("reads from explicit packageResolvedPath", async () => {
    // File is NOT in cwd — only reachable via the explicit path
    const result = await resolveSyntaxVersion(
      "",
      join(fixturesDir, "Package.resolved.v3")
    );
    assert.equal(result, "600.0.1");
  });

  it("reads v1 from explicit packageResolvedPath", async () => {
    const result = await resolveSyntaxVersion(
      "",
      join(fixturesDir, "Package.resolved.v1")
    );
    assert.equal(result, "600.0.1");
  });

  it("returns null when explicit path has no swift-syntax", async () => {
    const result = await resolveSyntaxVersion(
      "",
      join(fixturesDir, "Package.resolved.no-syntax")
    );
    assert.equal(result, null);
  });

  it("returns null when explicit path does not exist", async () => {
    const result = await resolveSyntaxVersion(
      "",
      "/tmp/nonexistent/Package.resolved"
    );
    assert.equal(result, null);
  });

  it("explicit version takes priority over packageResolvedPath", async () => {
    const result = await resolveSyntaxVersion(
      "510.0.3",
      join(fixturesDir, "Package.resolved.v3")
    );
    assert.equal(result, "510.0.3");
  });
});
