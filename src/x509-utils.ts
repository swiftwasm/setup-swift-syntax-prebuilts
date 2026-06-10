import { X509Certificate } from "@peculiar/x509";

export interface CertName {
  commonName: string;
  organization: string;
  organizationalUnit: string;
  userID: string | null;
}

export interface CertInfo {
  subject: CertName;
  issuer: CertName;
}

function parseDN(dn: string): Map<string, string> {
  // @peculiar/x509 returns DN strings like:
  // "CN=Test (RSA) leaf, O=Test (RSA) org, OU=Test (RSA) org unit, C=US, E=test@localhost"
  //
  // Strategy: find all positions of "ATTR=" patterns, then extract values between them.
  const knownAttrs = ["CN", "O", "OU", "C", "E", "UID", "L", "ST", "DC"];
  const result = new Map<string, string>();

  // Find all attribute start positions
  const starts: Array<{ attr: string; pos: number; valueStart: number }> = [];
  for (const attr of knownAttrs) {
    const pattern = attr + "=";
    let searchFrom = 0;
    while (true) {
      const idx = dn.indexOf(pattern, searchFrom);
      if (idx === -1) break;
      // Must be at start of string or preceded by ", "
      if (idx === 0 || (dn[idx - 2] === "," && dn[idx - 1] === " ")) {
        starts.push({ attr, pos: idx, valueStart: idx + pattern.length });
      }
      searchFrom = idx + 1;
    }
  }

  // Sort by position
  starts.sort((a, b) => a.pos - b.pos);

  // Extract values
  for (let i = 0; i < starts.length; i++) {
    const entry = starts[i];
    const valueEnd = i + 1 < starts.length ? starts[i + 1].pos - 2 : dn.length;
    const value = dn.substring(entry.valueStart, valueEnd);
    result.set(entry.attr, value);
  }

  return result;
}

function dnToCertName(dn: string): CertName {
  const parts = parseDN(dn);
  return {
    commonName: parts.get("CN") || "",
    organization: parts.get("O") || "",
    organizationalUnit: parts.get("OU") || "",
    userID: parts.get("UID") || null,
  };
}

export function parseCertificate(derBuffer: Buffer): CertInfo {
  const cert = new X509Certificate(derBuffer);
  return {
    subject: dnToCertName(cert.subject),
    issuer: dnToCertName(cert.issuer),
  };
}
