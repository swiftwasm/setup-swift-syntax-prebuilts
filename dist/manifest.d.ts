/**
 * Generate PrebuiltsManifest JSON for both main-branch and 6.1/6.2 SwiftPM formats.
 *
 * Main branch: per-platform manifest, flat checksum
 * 6.1/6.2: single manifest with per-platform artifacts array
 */
export declare const PRODUCTS: string[];
export interface MainBranchManifest {
    libraries: Array<{
        checksum: string;
        includePath: string[];
        name: string;
        products: string[];
    }>;
}
export interface V1Manifest {
    libraries: Array<{
        artifacts: Array<{
            checksum: string;
            platform: string;
        }>;
        cModules: string[];
        name: string;
        products: string[];
    }>;
    version: number;
}
/**
 * Generate a main-branch format manifest (per-platform file, flat checksum).
 */
export declare function generateMainManifest(checksum: string): MainBranchManifest;
/**
 * Generate a 6.1/6.2 format manifest (single file, per-platform artifacts array).
 */
export declare function generateV1Manifest(checksum: string, hostPlatform: string): V1Manifest;
