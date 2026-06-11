import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, rmSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import {
  defaultCertPaths,
  encodeSwiftPrettyJSON,
  signManifest,
  sortKeysDeep,
} from "../src/sign";
import { generateMainManifest, generateV1Manifest } from "../src/manifest";
import { CERTS_DIR } from "./helpers";

const certs = defaultCertPaths(CERTS_DIR);
const CHECKSUM = "abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890";

describe("sortKeysDeep", () => {
  it("sorts top-level keys", () => {
    const input = { z: 1, a: 2, m: 3 };
    const result = sortKeysDeep(input);
    assert.deepEqual(Object.keys(result), ["a", "m", "z"]);
  });

  it("sorts nested keys", () => {
    const input = { b: { z: 1, a: 2 }, a: 1 };
    const result = sortKeysDeep(input);
    assert.deepEqual(Object.keys(result), ["a", "b"]);
    assert.deepEqual(Object.keys(result.b), ["a", "z"]);
  });

  it("handles arrays", () => {
    const input = { items: [{ z: 1, a: 2 }] };
    const result = sortKeysDeep(input);
    assert.deepEqual(Object.keys(result.items[0]), ["a", "z"]);
  });

  it("handles null values", () => {
    const input = { b: null, a: 1 };
    const result = sortKeysDeep(input);
    assert.deepEqual(Object.keys(result), ["a", "b"]);
    assert.equal(result.b, null);
  });

  it("preserves primitives", () => {
    assert.equal(sortKeysDeep(42), 42);
    assert.equal(sortKeysDeep("hello"), "hello");
    assert.equal(sortKeysDeep(null), null);
    assert.equal(sortKeysDeep(true), true);
  });
});

describe("encodeSwiftPrettyJSON", () => {
  it("matches Foundation JSONEncoder pretty colon spacing", () => {
    assert.equal(
      encodeSwiftPrettyJSON({
        libraries: [
          {
            checksum: "abc",
            includePath: [
              "Sources/_SwiftSyntaxCShims/include",
              "Sources/_SwiftLibraryPluginProviderCShims/include",
            ],
            name: "MacroSupport",
            products: ["SwiftBasicFormat", "SwiftCompilerPlugin"],
          },
        ],
      }),
      `{
  "libraries" : [
    {
      "checksum" : "abc",
      "includePath" : [
        "Sources/_SwiftSyntaxCShims/include",
        "Sources/_SwiftLibraryPluginProviderCShims/include"
      ],
      "name" : "MacroSupport",
      "products" : [
        "SwiftBasicFormat",
        "SwiftCompilerPlugin"
      ]
    }
  ]
}`
    );
  });
});

describe("signManifest", () => {
  it("signs a main-branch manifest with valid JWS", async () => {
    const manifest = generateMainManifest(CHECKSUM);
    const tempDir = mkdtempSync(join(tmpdir(), "sign-test-"));
    const outputPath = join(tempDir, "manifest.json");

    await signManifest(manifest, outputPath, certs);

    const signed = JSON.parse(readFileSync(outputPath, "utf-8"));

    // Check structure
    assert.ok(signed.manifest);
    assert.ok(signed.signature);
    assert.ok(signed.signature.signature);
    assert.ok(signed.signature.certificate);

    // JWS should have 3 dot-separated parts
    const jwsParts = signed.signature.signature.split(".");
    assert.equal(jwsParts.length, 3, "JWS should have header.payload.signature");

    // Verify JWS header contains x5c
    const header = JSON.parse(
      Buffer.from(jwsParts[0], "base64url").toString("utf-8")
    );
    assert.equal(header.alg, "RS256");
    assert.ok(Array.isArray(header.x5c));
    assert.equal(header.x5c.length, 3, "x5c should contain leaf, intermediate, root");

    // Verify payload matches manifest
    const payload = JSON.parse(
      Buffer.from(jwsParts[1], "base64url").toString("utf-8")
    );
    assert.deepEqual(payload, sortKeysDeep(manifest));

    // Verify certificate metadata
    assert.ok(signed.signature.certificate.subject.commonName);
    assert.ok(signed.signature.certificate.issuer.commonName);

    rmSync(tempDir, { recursive: true, force: true });
  });

  it("signs a v1 manifest with valid JWS", async () => {
    const manifest = generateV1Manifest(CHECKSUM, "ubuntu_noble_x86_64");
    const tempDir = mkdtempSync(join(tmpdir(), "sign-test-"));
    const outputPath = join(tempDir, "v1-manifest.json");

    await signManifest(manifest, outputPath, certs);

    const signed = JSON.parse(readFileSync(outputPath, "utf-8"));
    const jwsParts = signed.signature.signature.split(".");
    assert.equal(jwsParts.length, 3);

    // Payload should include version field
    const payload = JSON.parse(
      Buffer.from(jwsParts[1], "base64url").toString("utf-8")
    );
    assert.equal(payload.version, 1);

    rmSync(tempDir, { recursive: true, force: true });
  });

  it("manifest in wrapper matches manifest in JWS payload", async () => {
    const manifest = generateMainManifest(CHECKSUM);
    const tempDir = mkdtempSync(join(tmpdir(), "sign-test-"));
    const outputPath = join(tempDir, "manifest.json");

    await signManifest(manifest, outputPath, certs);

    const signed = JSON.parse(readFileSync(outputPath, "utf-8"));
    const jwsParts = signed.signature.signature.split(".");
    const payload = JSON.parse(
      Buffer.from(jwsParts[1], "base64url").toString("utf-8")
    );

    // The manifest in the wrapper and the JWS payload must be identical
    assert.deepEqual(signed.manifest, payload);

    rmSync(tempDir, { recursive: true, force: true });
  });
});
