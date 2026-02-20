/**
 * Deep-sort all object keys recursively. Required to match Swift's
 * JSONEncoder.sortedKeys behavior.
 */
export declare function sortKeysDeep(obj: any): any;
export declare function signManifest(manifest: object, outputPath: string, certsDir: string): Promise<void>;
