import { getExecOutput } from "@actions/exec";
import { readFileSync } from "fs";
import { platform, arch } from "os";

export interface ToolchainInfo {
  compilerTag: string;
  platform: string;
}

export async function detectToolchain(): Promise<ToolchainInfo> {
  const { stdout } = await getExecOutput("swift", ["-print-target-info"]);
  const info = JSON.parse(stdout);

  // Prefer swiftCompilerTag, fall back to parsing compilerVersion
  let compilerTag: string = info.swiftCompilerTag ?? "";
  if (!compilerTag) {
    const versionStr: string = info.compilerVersion ?? "";
    // Try Xcode format: "Apple Swift version 6.2 (swiftlang-6.2.1.4.8 clang-...)"
    const xcodeMatch = versionStr.match(/swiftlang-([\w.-]+)/);
    // Try open-source release: "Swift version 6.1.3 (swift-6.1.3-RELEASE)"
    const releaseMatch = versionStr.match(/(swift-[\w.-]+-RELEASE)/);
    // Try snapshot: "Swift version 6.3-dev (LLVM ..., Swift ...)"
    // with version like "Swift version X.Y-dev" -> construct tag
    const devMatch = versionStr.match(/Swift version ([\d.]+)-dev/);

    if (xcodeMatch) {
      compilerTag = `swiftlang-${xcodeMatch[1]}`;
    } else if (releaseMatch) {
      compilerTag = releaseMatch[1];
    } else if (devMatch) {
      // For dev builds without swiftCompilerTag, construct a best-effort tag
      compilerTag = `swift-${devMatch[1]}-DEVELOPMENT-SNAPSHOT`;
    } else {
      throw new Error(
        `Cannot determine Swift compiler tag from target-info: ${JSON.stringify(info)}`
      );
    }
  }

  const hostArch = arch() === "arm64" || arch() === "arm" ? "aarch64" : "x86_64";

  let hostPlatform: string;
  if (platform() === "darwin") {
    hostPlatform = "macos_universal";
  } else {
    // Parse /etc/os-release
    const osRelease = parseOsRelease();
    const distro = osRelease.ID ?? "linux";
    const codename = osRelease.VERSION_CODENAME ?? "unknown";
    hostPlatform = `${distro}_${codename}_${hostArch}`;
  }

  return { compilerTag, platform: hostPlatform };
}

function parseOsRelease(): Record<string, string> {
  try {
    const content = readFileSync("/etc/os-release", "utf-8");
    const result: Record<string, string> = {};
    for (const line of content.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eqIdx = trimmed.indexOf("=");
      if (eqIdx === -1) continue;
      const key = trimmed.substring(0, eqIdx);
      let value = trimmed.substring(eqIdx + 1);
      // Strip quotes
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      result[key] = value;
    }
    return result;
  } catch {
    return {};
  }
}
