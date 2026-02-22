#!/usr/bin/env tsx
/**
 * CLI entry point for building SwiftSyntax prebuilt artifacts.
 *
 * This is used by the build-prebuilts workflow to build artifacts for a single
 * platform, producing:
 *   - Main branch manifest + artifact ({compilerTag}-{platform}.*)
 *   - V1 manifest + artifact ({majorMinor}-*) if swiftMajorMinor is provided
 *
 * Usage:
 *   npx tsx src/cli-build.ts \
 *     --syntax-version 600.0.1 \
 *     --compiler-tag swift-6.1-RELEASE \
 *     --swift-major-minor 6.1 \
 *     --platform ubuntu_noble_x86_64 \
 *     --output-dir ./output
 *
 * Outputs a JSON summary to stdout with the list of generated files.
 */
export {};
