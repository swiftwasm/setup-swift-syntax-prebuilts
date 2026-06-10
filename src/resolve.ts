import { existsSync, readFileSync, rmSync } from "fs";
import { dirname, resolve } from "path";
import { exec } from "@actions/exec";
import * as core from "@actions/core";

/**
 * Resolve the swift-syntax version to prebuild.
 *
 * @param inputVersion  Explicit version string (returned as-is if non-empty).
 * @param packageResolvedPath  Optional path to Package.resolved. When empty,
 *   falls back to `Package.resolved` in cwd. If the file doesn't exist and no
 *   explicit path was given, runs `swift package resolve` to generate it.
 */
export async function resolveSyntaxVersion(
  inputVersion: string,
  packageResolvedPath?: string
): Promise<string | null> {
  if (inputVersion) {
    core.info(`Using explicit swift-syntax version: ${inputVersion}`);
    return inputVersion;
  }

  const resolvedPath = packageResolvedPath
    ? resolve(packageResolvedPath)
    : "Package.resolved";

  if (!existsSync(resolvedPath)) {
    if (packageResolvedPath) {
      // User gave an explicit path that doesn't exist — don't guess.
      core.warning(
        `Specified Package.resolved not found: ${resolvedPath}`
      );
      return null;
    }

    core.info("No Package.resolved found. Running swift package resolve...");
    await exec("swift", ["package", "resolve"]);

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

  // Handle v1/v2/v3 Package.resolved formats
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

  const version = pin.state?.version;
  if (!version) {
    core.warning("swift-syntax pin found but no version in state");
    return null;
  }

  core.info(`Auto-detected swift-syntax version: ${version}`);
  return version;
}
