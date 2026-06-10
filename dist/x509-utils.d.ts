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
export declare function parseCertificate(derBuffer: Buffer): CertInfo;
