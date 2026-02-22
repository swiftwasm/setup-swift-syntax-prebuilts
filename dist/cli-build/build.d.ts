export interface BuildResult {
    checksum: string;
    artifactPath: string;
}
export declare function buildPrebuilt(syntaxVersion: string, compilerTag: string, hostPlatform: string, prebuiltsDir: string): Promise<BuildResult>;
