import { exec } from "@actions/exec";
import * as core from "@actions/core";
import {
  mkdtempSync,
  appendFileSync,
  cpSync,
  mkdirSync,
  readFileSync,
} from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { createHash } from "crypto";
import { findBuildArtifacts } from "./artifacts";

export interface BuildResult {
  checksum: string;
  artifactPath: string;
}

export async function buildPrebuilt(
  syntaxVersion: string,
  compilerTag: string,
  hostPlatform: string,
  prebuiltsDir: string
): Promise<BuildResult> {
  const workdir = mkdtempSync(join(tmpdir(), "swift-syntax-"));
  const repoDir = join(workdir, "swift-syntax");
  const stageDir = join(workdir, "stage");

  core.info(`Working directory: ${workdir}`);

  // 1. Clone swift-syntax at the resolved tag
  core.startGroup("Clone swift-syntax");
  await exec("git", [
    "clone",
    "--depth=1",
    "--branch",
    syntaxVersion,
    "https://github.com/swiftlang/swift-syntax.git",
    repoDir,
  ]);
  core.endGroup();

  // 2. Append MacroSupport product containing all library targets
  core.info("Patching Package.swift to add MacroSupport product...");
  const patch = `
// Added by setup-swift-syntax-prebuilts
package.products += [
    .library(name: "MacroSupport", type: .static, targets:
        package.targets.filter { $0.type == .regular || $0.type == .system }.map { $0.name }
    )
]
`;
  appendFileSync(join(repoDir, "Package.swift"), patch);

  // 3. Build release
  core.startGroup("Build swift-syntax (release)");
  await exec(
    "swift",
    [
      "build",
      "-c",
      "release",
      "-debug-info-format",
      "none",
      "--product",
      "MacroSupport",
    ],
    { cwd: repoDir }
  );
  core.endGroup();

  // 4. Stage lib/ and Modules/
  core.info("Staging build artifacts...");
  const { libraryPath, modulesDir } = findBuildArtifacts(repoDir, {
    info: (message) => core.info(message),
    warning: (message) => core.warning(message),
  });
  core.info(`Using MacroSupport library from ${libraryPath}`);
  core.info(`Using Swift modules from ${modulesDir}`);

  mkdirSync(join(stageDir, "lib"), { recursive: true });
  cpSync(
    libraryPath,
    join(stageDir, "lib", "libMacroSupport.a")
  );

  // Copy Modules directory (contains .swiftmodule files)
  cpSync(modulesDir, join(stageDir, "Modules"), { recursive: true });

  // 5. Create archive
  const outDir = join(prebuiltsDir, "swift-syntax", syntaxVersion);
  mkdirSync(outDir, { recursive: true });

  const artifactName = `${compilerTag}-${hostPlatform}-MacroSupport.tar.gz`;
  const artifactPath = join(outDir, artifactName);

  core.startGroup("Create archive");
  await exec("tar", ["-C", stageDir, "-czf", artifactPath, "lib", "Modules"]);
  core.endGroup();

  // 6. Compute SHA-256
  const data = readFileSync(artifactPath);
  const checksum = createHash("sha256").update(data).digest("hex");
  core.info(`Archive checksum: ${checksum}`);
  core.info(`Archive size: ${(data.length / 1024 / 1024).toFixed(1)} MB`);

  return { checksum, artifactPath };
}
