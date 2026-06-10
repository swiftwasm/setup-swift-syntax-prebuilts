/**
 * Merge per-platform V1 manifests into a single multi-platform V1 manifest.
 *
 * The build workflow produces one V1 manifest per platform, each with a single
 * artifact entry. This script merges them into a single manifest with all
 * platform artifacts, then re-signs it.
 *
 * Usage:
 *   node dist/cli-merge-v1-manifest.js \
 *     --swift-major-minor 6.1 \
 *     --input-dir ./platform-outputs \
 *     --output-dir ./merged \
 *     [--certs-dir ./certs]
 *
 * Expects the input-dir to contain per-platform subdirectories, each with:
 *   - {majorMinor}-manifest.json (single-platform V1 manifest)
 *   - summary.json (output from cli-build.ts)
 */
export {};
