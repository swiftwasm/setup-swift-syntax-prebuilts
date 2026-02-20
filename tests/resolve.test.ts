import { describe, it, beforeEach, afterEach } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, cpSync, existsSync, rmSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { resolveSyntaxVersion } from "../src/resolve";

const fixturesDir = join(__dirname, "..", "fixtures");

// resolveSyntaxVersion reads Package.resolved from cwd, so we chdir into a temp dir
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
});
