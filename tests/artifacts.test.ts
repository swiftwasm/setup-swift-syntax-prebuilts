import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  existsSync,
  mkdtempSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "fs";
import { tmpdir } from "os";
import { dirname, join } from "path";
import { copyModuleArtifacts, findBuildArtifacts } from "../src/artifacts";

function writeFile(path: string, contents = ""): void {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, contents);
}

describe("build artifact discovery", () => {
  it("stages module artifacts from all per-target Modules directories", () => {
    const repoDir = mkdtempSync(join(tmpdir(), "artifact-test-"));
    const messages: string[] = [];

    try {
      writeFile(
        join(repoDir, ".build", "out", "Products", "Release-linux", "libMacroSupport.a"),
        "archive"
      );
      writeFile(
        join(
          repoDir,
          ".build",
          "out",
          "Intermediates.noindex",
          "swift-syntax.build",
          "Release-linux",
          "SwiftBasicFormat-t.build",
          "Objects-normal",
          "x86_64",
          "Modules",
          "SwiftBasicFormat.swiftmodule"
        ),
        "basic"
      );
      writeFile(
        join(
          repoDir,
          ".build",
          "out",
          "Intermediates.noindex",
          "swift-syntax.build",
          "Release-linux",
          "SwiftSyntax-t.build",
          "Objects-normal",
          "x86_64",
          "Modules",
          "SwiftSyntax.swiftmodule"
        ),
        "syntax"
      );

      const artifacts = findBuildArtifacts(repoDir, {
        info: (message) => messages.push(message),
        warning: (message) => messages.push(message),
      });

      assert.equal(artifacts.moduleDirs.length, 2);

      const stagedModules = join(repoDir, "stage", "Modules");
      copyModuleArtifacts(artifacts.moduleDirs, stagedModules);

      assert.equal(
        readFileSync(join(stagedModules, "SwiftBasicFormat.swiftmodule"), "utf-8"),
        "basic"
      );
      assert.equal(
        readFileSync(join(stagedModules, "SwiftSyntax.swiftmodule"), "utf-8"),
        "syntax"
      );
      assert.ok(
        messages.some((message) => message.includes("SwiftBasicFormat"))
      );
      assert.ok(messages.some((message) => message.includes("SwiftSyntax")));
    } finally {
      if (existsSync(repoDir)) {
        rmSync(repoDir, { recursive: true, force: true });
      }
    }
  });
});
