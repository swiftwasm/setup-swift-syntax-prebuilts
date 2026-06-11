import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { releaseDownloadUrl } from "../src/release";

describe("releaseDownloadUrl", () => {
  it("builds GitHub release asset URLs from syntax and compiler tags", () => {
    assert.equal(
      releaseDownloadUrl(
        "swiftwasm",
        "setup-swift-syntax-prebuilts",
        "603.0.0",
        "swift-DEVELOPMENT-SNAPSHOT-2026-03-09-a",
        "swift-DEVELOPMENT-SNAPSHOT-2026-03-09-a-ubuntu_jammy_x86_64.json"
      ),
      "https://github.com/swiftwasm/setup-swift-syntax-prebuilts/releases/download/prebuilt-603.0.0-swift-DEVELOPMENT-SNAPSHOT-2026-03-09-a/swift-DEVELOPMENT-SNAPSHOT-2026-03-09-a-ubuntu_jammy_x86_64.json"
    );
  });
});
