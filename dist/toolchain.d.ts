export interface ToolchainInfo {
    compilerTag: string;
    platform: string;
}
export declare function detectToolchain(): Promise<ToolchainInfo>;
