/**
 * Deep-sort all object keys recursively. Required to match Swift's
 * JSONEncoder.sortedKeys behavior.
 */
export declare function sortKeysDeep(obj: any): any;
/**
 * Encode a manifest object to match Swift's JSONEncoder.makeWithDefaults(prettified: true).
 * Swift uses: sortedKeys, prettyPrinted (2-space indent), withoutEscapingSlashes.
 *
 * CRITICAL: Swift's prettyPrinted format uses `"key" : "value"` (space-colon-space)
 * while JSON.stringify uses `"key": "value"` (colon-space). We must match Swift's
 * format exactly because SwiftPM re-encodes the manifest and compares bytes.
 */
export declare function encodeManifestPayload(manifest: object): Uint8Array;
export interface SigningCerts {
    leafCertPath: string;
    intermediateCertPath: string;
    rootCertPath: string;
    privateKeyPath: string;
}
/** Default bundled certificate paths. */
export declare function defaultCertPaths(certsDir: string): SigningCerts;
export declare function signManifest(manifest: object, outputPath: string, certs: SigningCerts): Promise<void>;
