import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "fs";
import { join } from "path";
import { parseCertificate } from "../src/x509-utils";
import { CERTS_DIR } from "./helpers";

const certsDir = CERTS_DIR;

describe("parseCertificate", () => {
  it("parses leaf certificate subject", () => {
    const leaf = readFileSync(join(certsDir, "leaf.cer"));
    const info = parseCertificate(leaf);
    assert.ok(
      info.subject.commonName.includes("SwiftSyntax Prebuilts"),
      `Expected CN to contain 'SwiftSyntax Prebuilts', got: ${info.subject.commonName}`
    );
    assert.ok(
      info.subject.organization.includes("setup-swiftsyntax-prebuilts"),
      `Expected O to contain 'setup-swiftsyntax-prebuilts', got: ${info.subject.organization}`
    );
  });

  it("parses leaf certificate issuer", () => {
    const leaf = readFileSync(join(certsDir, "leaf.cer"));
    const info = parseCertificate(leaf);
    assert.ok(
      info.issuer.commonName.includes("Intermediate"),
      `Expected issuer CN to contain 'Intermediate', got: ${info.issuer.commonName}`
    );
  });

  it("parses root CA (self-signed)", () => {
    const root = readFileSync(join(certsDir, "root-ca.cer"));
    const info = parseCertificate(root);
    assert.ok(info.subject.commonName.includes("Root CA"));
    // Self-signed: subject == issuer
    assert.equal(info.subject.commonName, info.issuer.commonName);
  });

  it("returns null for missing UID", () => {
    const leaf = readFileSync(join(certsDir, "leaf.cer"));
    const info = parseCertificate(leaf);
    assert.equal(info.subject.userID, null);
  });
});
