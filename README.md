# setup-swiftsyntax-prebuilts

A GitHub Action that builds and caches prebuilt SwiftSyntax for nightly and non-Xcode Swift toolchains, eliminating the 3–5 minute rebuild penalty on every CI run.

## Problem

Apple only publishes prebuilt SwiftSyntax binaries for specific Xcode compiler tags. If you use a nightly toolchain (`swift-DEVELOPMENT-SNAPSHOT-*`) or open-source release (`swift-6.1-RELEASE`), SwiftPM falls back to building swift-syntax from source every time.

## Solution

This action:
1. Detects your Swift compiler tag and host platform
2. Resolves the swift-syntax version from `Package.resolved`
3. Restores from GitHub Actions cache (or builds on miss)
4. Signs the manifest with SwiftPM-compatible JWS certificates
5. Exports flags for `swift build` to use local prebuilts

## Usage

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: swiftwasm/setup-swiftsyntax-prebuilts@v1
        id: prebuilts

      - name: Build
        run: swift build ${{ steps.prebuilts.outputs.swift-flags }}
```

### With explicit version

```yaml
      - uses: swiftwasm/setup-swiftsyntax-prebuilts@v1
        id: prebuilts
        with:
          swift-syntax-version: '600.0.1'
```

## Inputs

| Input | Required | Default | Description |
|---|---|---|---|
| `swift-syntax-version` | No | *(auto-detect)* | swift-syntax version to prebuild. Auto-detected from `Package.resolved` if omitted. |
| `cache-backend` | No | `github` | `github` or `s3` |
| `s3-bucket` | No | | S3 bucket name (when `cache-backend=s3`) |
| `s3-prefix` | No | `swift-syntax-prebuilts` | S3 key prefix |

## Outputs

| Output | Description |
|---|---|
| `swift-flags` | Flags to pass to `swift build` |
| `prebuilts-path` | Filesystem path to the prebuilts directory |
| `swift-syntax-version` | The resolved version that was prebuilt |
| `cache-hit` | `true` if restored from cache |

## How It Works

### Cache Lifecycle

- **First run** with a new toolchain snapshot: cache miss → build swift-syntax (~4 min) → save cache
- **Subsequent runs** (same snapshot): cache hit → restore (~10 sec)
- **New snapshot**: cache miss → rebuild → save. Old entries auto-evict after 7 days.

### Cache Key

```
swift-syntax-prebuilt-v1-{compiler_tag}-{platform}-{syntax_version}
```

This ensures prebuilts are never reused across incompatible toolchains.

### Manifest Formats

The action generates manifests for both SwiftPM versions:
- **Main branch** (nightly ≥ 6.3-dev): per-platform manifest files
- **6.1/6.2** (stable releases): v1 format with per-platform artifact entries

### Signing

Manifests are signed using JWS (RFC 7515) with SwiftPM's test certificates. The `--experimental-prebuilts-root-cert` flag tells SwiftPM to trust our test CA.

## Important Notes

- **Run before any `swift` commands.** If SwiftPM runs without prebuilt flags first, it creates sentinel files that prevent later prebuilt discovery.
- The action cleans `.build/prebuilts/` if it exists to avoid this poisoning.
- macOS builds use `macos_universal`; Linux uses `{distro}_{codename}_{arch}` (e.g. `ubuntu_noble_x86_64`).

## Development

```bash
npm install
npm run build      # Compile with ncc
npm run typecheck  # Type-check only
```

The compiled `dist/index.js` must be committed to the repository.

## License

MIT
