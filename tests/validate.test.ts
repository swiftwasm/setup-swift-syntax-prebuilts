import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  mkdtempSync,
  mkdirSync,
  rmSync,
  writeFileSync,
} from "fs";
import { tmpdir } from "os";
import { dirname, join } from "path";
import { execFileSync } from "child_process";
import { validatePrebuilts } from "../src/validate";
import { encodeSwiftPrettyJSON } from "../src/sign";

const SYNTAX_VERSION = "603.0.2";
const COMPILER_TAG = "swift-DEVELOPMENT-SNAPSHOT-2026-05-27-a";
const HOST_PLATFORM = "ubuntu_jammy_x86_64";

function writeFile(path: string, contents = ""): void {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, contents);
}

const MANIFEST = {
  libraries: [
    {
      name: "MacroSupport",
      checksum: "unused",
      includePath: [],
      products: [
        "SwiftBasicFormat",
        "SwiftCompilerPlugin",
        "SwiftParser",
        "SwiftSyntax",
        "SwiftSyntaxBuilder",
        "SwiftSyntaxMacros",
        "SwiftSyntaxMacroExpansion",
      ],
    },
  ],
};

function fakeJWS(payload: string): string {
  return [
    Buffer.from("{}").toString("base64url"),
    Buffer.from(payload).toString("base64url"),
    Buffer.from("signature").toString("base64url"),
  ].join(".");
}

function writeManifest(prebuiltsDir: string, payload = encodeSwiftPrettyJSON(MANIFEST)): void {
  writeFile(
    join(
      prebuiltsDir,
      "swift-syntax",
      SYNTAX_VERSION,
      `${COMPILER_TAG}-${HOST_PLATFORM}.json`
    ),
    JSON.stringify({
      manifest: MANIFEST,
      signature: {
        signature: fakeJWS(payload),
      },
    })
  );
}

function writeArchive(prebuiltsDir: string, entries: string[]): void {
  const stageDir = mkdtempSync(join(tmpdir(), "validate-stage-"));
  try {
    mkdirSync(join(stageDir, "lib"), { recursive: true });
    mkdirSync(join(stageDir, "Modules"), { recursive: true });
    for (const entry of entries) {
      writeFile(join(stageDir, entry));
    }
    const archivePath = join(
      prebuiltsDir,
      "swift-syntax",
      SYNTAX_VERSION,
      `${COMPILER_TAG}-${HOST_PLATFORM}-MacroSupport.tar.gz`
    );
    mkdirSync(dirname(archivePath), { recursive: true });
    execFileSync("tar", ["-C", stageDir, "-czf", archivePath, "lib", "Modules"]);
  } finally {
    rmSync(stageDir, { recursive: true, force: true });
  }
}

describe("prebuilt validation", () => {
  it("accepts restored prebuilts with required manifest products and modules", () => {
    const prebuiltsDir = mkdtempSync(join(tmpdir(), "validate-prebuilts-"));

    try {
      writeFile(join(prebuiltsDir, ".certs", "root-ca.cer"));
      writeManifest(prebuiltsDir);
      writeArchive(prebuiltsDir, [
        "lib/libMacroSupport.a",
        "Modules/SwiftBasicFormat.swiftmodule",
        "Modules/SwiftCompilerPlugin.swiftmodule",
        "Modules/SwiftParser.swiftmodule",
        "Modules/SwiftSyntax.swiftmodule",
        "Modules/SwiftSyntaxBuilder.swiftmodule",
        "Modules/SwiftSyntaxMacros.swiftmodule",
        "Modules/SwiftSyntaxMacroExpansion.swiftmodule",
      ]);

      assert.deepEqual(
        validatePrebuilts(
          prebuiltsDir,
          SYNTAX_VERSION,
          COMPILER_TAG,
          HOST_PLATFORM
        ),
        { ok: true }
      );
    } finally {
      rmSync(prebuiltsDir, { recursive: true, force: true });
    }
  });

  it("rejects restored prebuilts missing Swift module artifacts", () => {
    const prebuiltsDir = mkdtempSync(join(tmpdir(), "validate-prebuilts-"));

    try {
      writeFile(join(prebuiltsDir, ".certs", "root-ca.cer"));
      writeManifest(prebuiltsDir);
      writeArchive(prebuiltsDir, ["lib/libMacroSupport.a"]);

      const result = validatePrebuilts(
        prebuiltsDir,
        SYNTAX_VERSION,
        COMPILER_TAG,
        HOST_PLATFORM
      );

      assert.equal(result.ok, false);
      assert.match(result.reason ?? "", /SwiftSyntax\.swiftmodule/);
    } finally {
      rmSync(prebuiltsDir, { recursive: true, force: true });
    }
  });

  it("rejects restored prebuilts with a non-SwiftPM manifest payload", () => {
    const prebuiltsDir = mkdtempSync(join(tmpdir(), "validate-prebuilts-"));

    try {
      writeFile(join(prebuiltsDir, ".certs", "root-ca.cer"));
      writeManifest(prebuiltsDir, JSON.stringify(MANIFEST, null, 2));
      writeArchive(prebuiltsDir, [
        "lib/libMacroSupport.a",
        "Modules/SwiftBasicFormat.swiftmodule",
        "Modules/SwiftCompilerPlugin.swiftmodule",
        "Modules/SwiftParser.swiftmodule",
        "Modules/SwiftSyntax.swiftmodule",
        "Modules/SwiftSyntaxBuilder.swiftmodule",
        "Modules/SwiftSyntaxMacros.swiftmodule",
        "Modules/SwiftSyntaxMacroExpansion.swiftmodule",
      ]);

      const result = validatePrebuilts(
        prebuiltsDir,
        SYNTAX_VERSION,
        COMPILER_TAG,
        HOST_PLATFORM
      );

      assert.equal(result.ok, false);
      assert.match(result.reason ?? "", /canonical manifest encoding/);
    } finally {
      rmSync(prebuiltsDir, { recursive: true, force: true });
    }
  });
});
