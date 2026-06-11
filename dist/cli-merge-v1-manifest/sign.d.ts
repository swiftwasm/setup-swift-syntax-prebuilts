/**
 * Deep-sort all object keys recursively. Required to match Swift's
 * JSONEncoder.sortedKeys behavior.
 */
export declare function sortKeysDeep(obj: any): any;
/**
 * Encode a manifest object to match Swift's
 * JSONEncoder.makeWithDefaults(prettified: true). Foundation's pretty JSON
 * format uses spaces around colons (`"key" : value`), unlike JSON.stringify.
 */
export declare function encodeSwiftPrettyJSON(value: any, indent?: number): string;
export interface SigningCerts {
    leafCertPath: string;
    intermediateCertPath: string;
    rootCertPath: string;
    privateKeyPath: string;
}
/** Default bundled certificate paths. */
export declare function defaultCertPaths(certsDir: string): SigningCerts;
export declare function signManifest(manifest: object, outputPath: string, certs: SigningCerts): Promise<void>;
