import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { detectToolchain } from "../src/toolchain";

describe("detectToolchain", () => {
  it("returns a non-empty compiler tag", async () => {
    const { compilerTag } = await detectToolchain();
    assert.ok(compilerTag.length > 0, "compilerTag should be non-empty");
    // Should be a recognizable format
    assert.ok(
      compilerTag.startsWith("swift-") || compilerTag.startsWith("swiftlang-"),
      `compilerTag should start with 'swift-' or 'swiftlang-', got: ${compilerTag}`
    );
  });

  it("returns a valid platform string", async () => {
    const { platform } = await detectToolchain();
    assert.ok(platform.length > 0, "platform should be non-empty");
    // Should contain arch
    assert.ok(
      platform.includes("x86_64") ||
        platform.includes("aarch64") ||
        platform.includes("universal"),
      `platform should contain arch, got: ${platform}`
    );
  });

  it("detects Linux platform with distro and codename", async () => {
    const { platform } = await detectToolchain();
    if (process.platform === "linux") {
      // Should be like ubuntu_noble_x86_64
      const parts = platform.split("_");
      assert.ok(
        parts.length >= 3,
        `Linux platform should have distro_codename_arch, got: ${platform}`
      );
    }
  });
});
