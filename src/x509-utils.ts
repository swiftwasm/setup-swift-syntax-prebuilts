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

function parseName(rdnSequence: string): CertName {
  // @peculiar/x509 returns DN strings like:
  // "CN=Test (RSA) leaf, O=Test (RSA) org, OU=Test (RSA) org unit"
  const parts = new Map<string, string>();

  // Parse the DN string - handle commas within values carefully
  // The format is: KEY=VALUE, KEY=VALUE, ...
  const regex = /([A-Z.]+)=([^,]*(?:,(?![A-Z.]+\s*=)[^,]*)*)/g;
  let match;
  while ((match = regex.exec(rdnSequence)) !== null) {
    parts.set(match[1].trim(), match[2].trim());
  }

  return {
    commonName: parts.get("CN") ?? "",
    organization: parts.get("O") ?? "",
    organizationalUnit: parts.get("OU") ?? "",
    userID: parts.get("UID") ?? null,
  };
}

export function parseCertificate(derBuffer: Buffer): CertInfo {
  const cert = new X509Certificate(derBuffer);
  return {
    subject: parseName(cert.subject),
    issuer: parseName(cert.issuer),
  };
}
