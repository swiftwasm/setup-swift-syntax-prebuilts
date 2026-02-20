/**
 * Generate PrebuiltsManifest JSON for both main-branch and 6.1/6.2 SwiftPM formats.
 *
 * Main branch: per-platform manifest, flat checksum
 * 6.1/6.2: single manifest with per-platform artifacts array
 */

// Products included in the MacroSupport prebuilt library
const PRODUCTS = [
  "SwiftBasicFormat",
  "SwiftCompilerPlugin",
  "SwiftDiagnostics",
  "SwiftIDEUtils",
  "SwiftOperators",
  "SwiftParser",
  "SwiftParserDiagnostics",
  "SwiftRefactor",
  "SwiftSyntax",
  "SwiftSyntaxBuilder",
  "SwiftSyntaxMacros",
  "SwiftSyntaxMacroExpansion",
  "SwiftSyntaxMacrosTestSupport",
  "SwiftSyntaxMacrosGenericTestSupport",
  "_SwiftCompilerPluginMessageHandling",
  "_SwiftLibraryPluginProvider",
];

// Include paths for C shim headers (main branch format: relative paths)
const INCLUDE_PATHS = [
  "Sources/_SwiftSyntaxCShims/include",
  "Sources/_SwiftLibraryPluginProviderCShims/include",
];

// C module target names (v1/6.1 format: target names, not paths)
const C_MODULES = [
  "_SwiftSyntaxCShims",
  "_SwiftLibraryPluginProviderCShims",
];

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
export function generateMainManifest(checksum: string): MainBranchManifest {
  return {
    libraries: [
      {
        checksum,
        includePath: INCLUDE_PATHS,
        name: "MacroSupport",
        products: PRODUCTS,
      },
    ],
  };
}

/**
 * Generate a 6.1/6.2 format manifest (single file, per-platform artifacts array).
 */
export function generateV1Manifest(
  checksum: string,
  hostPlatform: string
): V1Manifest {
  return {
    libraries: [
      {
        artifacts: [
          {
            checksum,
            platform: hostPlatform,
          },
        ],
        cModules: C_MODULES,
        name: "MacroSupport",
        products: PRODUCTS,
      },
    ],
    version: 1,
  };
}
