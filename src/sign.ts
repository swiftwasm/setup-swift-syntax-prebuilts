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
 * Encode a manifest object to match Swift's JSONEncoder.makeWithDefaults(prettified: true).
 * Swift uses: sortedKeys, prettyPrinted (2-space indent), withoutEscapingSlashes
 */
function encodeManifestPayload(manifest: object): Uint8Array {
  const sorted = sortKeysDeep(manifest);
  // Swift's prettyPrinted uses 2-space indent and adds a trailing newline
  const json = JSON.stringify(sorted, null, 2);
  return new TextEncoder().encode(json);
}

export async function signManifest(
  manifest: object,
  outputPath: string,
  certsDir: string
): Promise<void> {
  // Load certificates (DER format)
  const leaf = readFileSync(join(certsDir, "Test_rsa.cer"));
  const intermediate = readFileSync(join(certsDir, "TestIntermediateCA.cer"));
  const root = readFileSync(join(certsDir, "TestRootCA.cer"));

  // Load private key (may be PKCS#1 or PKCS#8 format)
  const privateKeyPem = readFileSync(
    join(certsDir, "Test_rsa_key.pem"),
    "utf-8"
  );
  let privateKey;
  if (privateKeyPem.includes("BEGIN RSA PRIVATE KEY")) {
    // PKCS#1 format - convert to PKCS#8 via Node.js crypto
    const keyObj = createPrivateKey({ key: privateKeyPem, format: "pem" });
    const pkcs8Pem = keyObj.export({ type: "pkcs8", format: "pem" }) as string;
    privateKey = await importPKCS8(pkcs8Pem, "RS256");
  } else {
    privateKey = await importPKCS8(privateKeyPem, "RS256");
  }

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
