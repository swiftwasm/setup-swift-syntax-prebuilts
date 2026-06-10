import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { generateMainManifest, generateV1Manifest } from "../src/manifest";
import { sortKeysDeep } from "../src/sign";

const CHECKSUM = "abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890";

describe("generateMainManifest", () => {
  it("generates correct structure", () => {
    const manifest = generateMainManifest(CHECKSUM);
    assert.equal(manifest.libraries.length, 1);
    assert.equal(manifest.libraries[0].name, "MacroSupport");
    assert.equal(manifest.libraries[0].checksum, CHECKSUM);
    assert.ok(manifest.libraries[0].products.includes("SwiftSyntax"));
    assert.ok(manifest.libraries[0].products.includes("SwiftCompilerPlugin"));
    assert.ok(manifest.libraries[0].includePath.length >= 1);
  });

  it("has no version field (main branch format)", () => {
    const manifest = generateMainManifest(CHECKSUM) as any;
    assert.equal(manifest.version, undefined);
  });

  it("produces sorted JSON matching Swift encoder", () => {
    const manifest = generateMainManifest(CHECKSUM);
    const sorted = sortKeysDeep(manifest);
    const json = JSON.stringify(sorted, null, 2);
    // Keys within libraries[0] should be alphabetical
    const keysOrder = ["checksum", "includePath", "name", "products"];
    let lastIndex = -1;
    for (const key of keysOrder) {
      const idx = json.indexOf(`"${key}"`);
      assert.ok(idx > lastIndex, `"${key}" should appear after previous key`);
      lastIndex = idx;
    }
  });
});

describe("generateV1Manifest", () => {
  it("generates correct v1 structure", () => {
    const manifest = generateV1Manifest(CHECKSUM, "ubuntu_noble_x86_64");
    assert.equal(manifest.version, 1);
    assert.equal(manifest.libraries.length, 1);
    assert.equal(manifest.libraries[0].name, "MacroSupport");
    assert.equal(manifest.libraries[0].artifacts.length, 1);
    assert.equal(manifest.libraries[0].artifacts[0].checksum, CHECKSUM);
    assert.equal(manifest.libraries[0].artifacts[0].platform, "ubuntu_noble_x86_64");
  });

  it("includes same products as main manifest", () => {
    const main = generateMainManifest(CHECKSUM);
    const v1 = generateV1Manifest(CHECKSUM, "ubuntu_noble_x86_64");
    assert.deepEqual(main.libraries[0].products, v1.libraries[0].products);
  });

  it("has cModules instead of includePath", () => {
    const v1 = generateV1Manifest(CHECKSUM, "ubuntu_noble_x86_64");
    assert.ok(v1.libraries[0].cModules.length > 0);
    assert.ok(v1.libraries[0].cModules.includes("_SwiftSyntaxCShims"));
    assert.equal((v1.libraries[0] as any).includePath, undefined);
  });
});
