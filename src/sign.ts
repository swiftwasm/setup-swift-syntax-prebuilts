import { CompactSign, importPKCS8 } from "jose";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { createPrivateKey } from "crypto";
import { parseCertificate } from "./x509-utils";

/**
 * Deep-sort all object keys recursively. Required to match Swift's
 * JSONEncoder.sortedKeys behavior.
 */
export function sortKeysDeep(obj: any): any {
  if (Array.isArray(obj)) return obj.map(sortKeysDeep);
  if (obj !== null && typeof obj === "object") {
    return Object.keys(obj)
      .sort()
      .reduce((acc: any, key) => {
        acc[key] = sortKeysDeep(obj[key]);
        return acc;
      }, {});
  }
  return obj;
}

/**
 * Encode a manifest object to match Swift's
 * JSONEncoder.makeWithDefaults(prettified: true). Foundation's pretty JSON
 * format uses spaces around colons (`"key" : value`), unlike JSON.stringify.
 */
export function encodeSwiftPrettyJSON(value: any, indent = 0): string {
  const pad = " ".repeat(indent);
  const nextPad = " ".repeat(indent + 2);

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return "[]";
    }
    return [
      "[",
      value.map((item) => `${nextPad}${encodeSwiftPrettyJSON(item, indent + 2)}`).join(",\n"),
      `${pad}]`,
    ].join("\n");
  }

  if (value !== null && typeof value === "object") {
    const keys = Object.keys(value).sort();
    if (keys.length === 0) {
      return "{}";
    }
    return [
      "{",
      keys
        .map(
          (key) =>
            `${nextPad}${JSON.stringify(key)} : ${encodeSwiftPrettyJSON(
              value[key],
              indent + 2
            )}`
        )
        .join(",\n"),
      `${pad}}`,
    ].join("\n");
  }

  return JSON.stringify(value);
}

function encodeManifestPayload(manifest: object): Uint8Array {
  return new TextEncoder().encode(encodeSwiftPrettyJSON(manifest));
}

export interface SigningCerts {
  leafCertPath: string;
  intermediateCertPath: string;
  rootCertPath: string;
  privateKeyPath: string;
}

/** Default bundled certificate paths. */
export function defaultCertPaths(certsDir: string): SigningCerts {
  return {
    leafCertPath: join(certsDir, "leaf.cer"),
    intermediateCertPath: join(certsDir, "intermediate-ca.cer"),
    rootCertPath: join(certsDir, "root-ca.cer"),
    privateKeyPath: join(certsDir, "leaf-key.pem"),
  };
}

/**
 * Import a PEM private key, handling both PKCS#1 and PKCS#8 formats.
 */
async function loadPrivateKey(pemPath: string) {
  const pem = readFileSync(pemPath, "utf-8");
  if (pem.includes("BEGIN RSA PRIVATE KEY")) {
    // PKCS#1 → convert to PKCS#8 via Node.js crypto
    const keyObj = createPrivateKey({ key: pem, format: "pem" });
    const pkcs8Pem = keyObj.export({ type: "pkcs8", format: "pem" }) as string;
    return importPKCS8(pkcs8Pem, "RS256");
  }
  return importPKCS8(pem, "RS256");
}

export async function signManifest(
  manifest: object,
  outputPath: string,
  certs: SigningCerts
): Promise<void> {
  // Load certificates (DER format)
  const leaf = readFileSync(certs.leafCertPath);
  const intermediate = readFileSync(certs.intermediateCertPath);
  const root = readFileSync(certs.rootCertPath);

  const privateKey = await loadPrivateKey(certs.privateKeyPath);

  // x5c: DER certs as standard base64 (NOT base64url)
  const x5c = [leaf, intermediate, root].map((c) => c.toString("base64"));

  // Payload must match Swift's JSONEncoder output exactly
  const payloadBytes = encodeManifestPayload(manifest);

  // JWS Compact Serialization
  const jws = await new CompactSign(payloadBytes)
    .setProtectedHeader({ alg: "RS256", x5c })
    .sign(privateKey);

  // Parse leaf cert for subject/issuer metadata
  const certInfo = parseCertificate(leaf);

  const signed = sortKeysDeep({
    manifest: sortKeysDeep(manifest),
    signature: {
      signature: jws,
      certificate: {
        subject: {
          userID: certInfo.subject.userID,
          commonName: certInfo.subject.commonName,
          organizationalUnit: certInfo.subject.organizationalUnit,
          organization: certInfo.subject.organization,
        },
        issuer: {
          userID: certInfo.issuer.userID,
          commonName: certInfo.issuer.commonName,
          organizationalUnit: certInfo.issuer.organizationalUnit,
          organization: certInfo.issuer.organization,
        },
      },
    },
  });

  writeFileSync(outputPath, JSON.stringify(signed, null, 2));
}
