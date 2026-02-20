export interface ToolchainInfo {
    compilerTag: string;
    swiftMajorMinor: string;
    platform: string;
}
export declare function detectToolchain(): Promise<ToolchainInfo>;
