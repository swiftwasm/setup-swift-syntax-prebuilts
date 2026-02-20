/**
 * Deep-sort all object keys recursively. Required to match Swift's
 * JSONEncoder.sortedKeys behavior.
 */
export declare function sortKeysDeep(obj: any): any;
export interface SigningCerts {
    leafCertPath: string;
    intermediateCertPath: string;
    rootCertPath: string;
    privateKeyPath: string;
}
/** Default bundled certificate paths. */
export declare function defaultCertPaths(certsDir: string): SigningCerts;
export declare function signManifest(manifest: object, outputPath: string, certs: SigningCerts): Promise<void>;
