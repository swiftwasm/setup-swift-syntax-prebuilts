import { existsSync, readFileSync } from "fs";
import { join } from "path";
import { spawnSync } from "child_process";

const REQUIRED_PRODUCTS = [
  "SwiftBasicFormat",
  "SwiftCompilerPlugin",
  "SwiftParser",
  "SwiftSyntax",
  "SwiftSyntaxBuilder",
  "SwiftSyntaxMacros",
  "SwiftSyntaxMacroExpansion",
];

const REQUIRED_ARCHIVE_ENTRIES = [
  "lib/libMacroSupport.a",
  "Modules/SwiftBasicFormat.swiftmodule",
  "Modules/SwiftCompilerPlugin.swiftmodule",
  "Modules/SwiftParser.swiftmodule",
  "Modules/SwiftSyntax.swiftmodule",
  "Modules/SwiftSyntaxBuilder.swiftmodule",
  "Modules/SwiftSyntaxMacros.swiftmodule",
  "Modules/SwiftSyntaxMacroExpansion.swiftmodule",
];

export interface ValidationResult {
  ok: boolean;
  reason?: string;
}

function validateManifest(path: string): ValidationResult {
  if (!existsSync(path)) {
    return { ok: false, reason: `missing manifest ${path}` };
  }

  let manifest: any;
  try {
    const signedManifest = JSON.parse(readFileSync(path, "utf-8"));
    manifest = signedManifest.manifest ?? signedManifest;
  } catch (error: any) {
    return { ok: false, reason: `invalid manifest JSON: ${error.message}` };
  }

  const products = manifest.libraries?.[0]?.products;
  if (!Array.isArray(products)) {
    return { ok: false, reason: "manifest does not contain library products" };
  }

  const missing = REQUIRED_PRODUCTS.filter(
    (product) => !products.includes(product)
  );
  if (missing.length > 0) {
    return {
      ok: false,
      reason: `manifest is missing products: ${missing.join(", ")}`,
    };
  }

  return { ok: true };
}

function validateArchive(path: string): ValidationResult {
  if (!existsSync(path)) {
    return { ok: false, reason: `missing archive ${path}` };
  }

  const result = spawnSync("tar", ["-tzf", path], {
    encoding: "utf-8",
    maxBuffer: 16 * 1024 * 1024,
  });
  if (result.status !== 0) {
    return {
      ok: false,
      reason: `archive listing failed: ${result.stderr || result.stdout}`,
    };
  }

  const entries = new Set(result.stdout.split(/\r?\n/).filter(Boolean));
  const missing = REQUIRED_ARCHIVE_ENTRIES.filter(
    (entry) => !entries.has(entry)
  );
  if (missing.length > 0) {
    return {
      ok: false,
      reason: `archive is missing entries: ${missing.join(", ")}`,
    };
  }

  return { ok: true };
}

export function validatePrebuilts(
  prebuiltsDir: string,
  syntaxVersion: string,
  compilerTag: string,
  hostPlatform: string
): ValidationResult {
  const outDir = join(prebuiltsDir, "swift-syntax", syntaxVersion);
  const manifestPath = join(outDir, `${compilerTag}-${hostPlatform}.json`);
  const archivePath = join(
    outDir,
    `${compilerTag}-${hostPlatform}-MacroSupport.tar.gz`
  );
  const rootCert = join(prebuiltsDir, ".certs", "root-ca.cer");

  if (!existsSync(rootCert)) {
    return { ok: false, reason: `missing root certificate ${rootCert}` };
  }

  for (const result of [
    validateManifest(manifestPath),
    validateArchive(archivePath),
  ]) {
    if (!result.ok) {
      return result;
    }
  }

  return { ok: true };
}
