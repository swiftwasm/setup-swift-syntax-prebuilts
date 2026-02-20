import { existsSync, readFileSync, rmSync } from "fs";
import { exec } from "@actions/exec";
import * as core from "@actions/core";

export async function resolveSyntaxVersion(
  inputVersion: string
): Promise<string | null> {
  if (inputVersion) {
    core.info(`Using explicit swift-syntax version: ${inputVersion}`);
    return inputVersion;
  }

  const resolvedPath = "Package.resolved";
  let didResolve = false;

  if (!existsSync(resolvedPath)) {
    core.info("No Package.resolved found. Running swift package resolve...");
    await exec("swift", ["package", "resolve"]);
    didResolve = true;

    // Clean poisoned prebuilt cache from default download.swift.org attempt
    if (existsSync(".build/prebuilts")) {
      core.info("Cleaning .build/prebuilts/ to avoid cache poisoning");
      rmSync(".build/prebuilts", { recursive: true, force: true });
    }
  }

  if (!existsSync(resolvedPath)) {
    core.warning("Package.resolved not found after resolve");
    return null;
  }

  const resolved = JSON.parse(readFileSync(resolvedPath, "utf-8"));

  // Handle both v2/v3 Package.resolved format
  // v2/v3: { "pins": [...], "version": 2|3 }
  // v1 (legacy): { "object": { "pins": [...] }, "version": 1 }
  let pins: any[];
  if (resolved.version === 1) {
    pins = resolved.object?.pins ?? [];
  } else {
    pins = resolved.pins ?? [];
  }

  const pin = pins.find(
    (p: any) =>
      p.identity === "swift-syntax" ||
      p.package === "swift-syntax" ||
      (p.repositoryURL ?? p.location ?? "").includes("swift-syntax")
  );

  if (!pin) {
    core.info("swift-syntax not found in Package.resolved -- nothing to do");
    return null;
  }

  // v2/v3: state.version, v1: state.version
  const version = pin.state?.version;
  if (!version) {
    core.warning("swift-syntax pin found but no version in state");
    return null;
  }

  core.info(`Auto-detected swift-syntax version: ${version}`);
  return version;
}
