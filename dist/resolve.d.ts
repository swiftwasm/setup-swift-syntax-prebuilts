/**
 * Resolve the swift-syntax version to prebuild.
 *
 * @param inputVersion  Explicit version string (returned as-is if non-empty).
 * @param packageResolvedPath  Optional path to Package.resolved. When empty,
 *   falls back to `Package.resolved` in cwd. If the file doesn't exist and no
 *   explicit path was given, runs `swift package resolve` to generate it.
 */
export declare function resolveSyntaxVersion(inputVersion: string, packageResolvedPath?: string): Promise<string | null>;
