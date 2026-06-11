import {
  existsSync,
  readdirSync,
  statSync,
} from "fs";
import { dirname, join, relative, sep } from "path";

export interface BuildArtifacts {
  libraryPath: string;
  modulesDir: string;
}

export interface ArtifactLogger {
  info(message: string): void;
  warning(message: string): void;
}

interface Discovery {
  libraries: string[];
  moduleDirs: string[];
  moduleFiles: string[];
  archives: string[];
}

const MODULE_EXTENSIONS = [
  ".swiftmodule",
  ".swiftinterface",
  ".swiftdoc",
  ".abi.json",
];

function isDescendantOrSelf(parent: string, child: string): boolean {
  const rel = relative(parent, child);
  return rel === "" || (!rel.startsWith("..") && !rel.startsWith(sep));
}

function containsModuleArtifact(dir: string): boolean {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    const stat = statSync(path);
    if (stat.isDirectory()) {
      if (containsModuleArtifact(path)) return true;
      continue;
    }

    if (MODULE_EXTENSIONS.some((suffix) => entry.endsWith(suffix))) {
      return true;
    }
  }

  return false;
}

function discoverArtifacts(buildRoot: string): Discovery {
  const discovery: Discovery = {
    libraries: [],
    moduleDirs: [],
    moduleFiles: [],
    archives: [],
  };

  function visit(dir: string): void {
    for (const entry of readdirSync(dir)) {
      const path = join(dir, entry);
      const stat = statSync(path);

      if (stat.isDirectory()) {
        if (entry === "Modules" && containsModuleArtifact(path)) {
          discovery.moduleDirs.push(path);
        }
        visit(path);
        continue;
      }

      if (entry === "libMacroSupport.a") {
        discovery.libraries.push(path);
      }
      if (entry.endsWith(".a")) {
        discovery.archives.push(path);
      }
      if (MODULE_EXTENSIONS.some((suffix) => entry.endsWith(suffix))) {
        discovery.moduleFiles.push(path);
      }
    }
  }

  visit(buildRoot);

  discovery.libraries.sort();
  discovery.moduleDirs.sort();
  discovery.moduleFiles.sort();
  discovery.archives.sort();

  return discovery;
}

function commonPrefixLength(a: string, b: string): number {
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) {
    i++;
  }
  return i;
}

function findNearestModulesDir(libraryPath: string, moduleDirs: string[]): string | undefined {
  const libraryDir = dirname(libraryPath);
  const sibling = join(libraryDir, "Modules");
  if (moduleDirs.includes(sibling)) {
    return sibling;
  }

  const sorted = [...moduleDirs].sort((a, b) => {
    const aUnderLibraryDir = isDescendantOrSelf(libraryDir, a) ? 0 : 1;
    const bUnderLibraryDir = isDescendantOrSelf(libraryDir, b) ? 0 : 1;
    if (aUnderLibraryDir !== bUnderLibraryDir) {
      return aUnderLibraryDir - bUnderLibraryDir;
    }

    return commonPrefixLength(libraryDir, b) - commonPrefixLength(libraryDir, a);
  });

  return sorted[0];
}

function formatList(title: string, buildRoot: string, values: string[], limit = 80): string {
  if (values.length === 0) {
    return `${title}: none`;
  }

  const shown = values.slice(0, limit).map((path) => `  - ${relative(buildRoot, path)}`);
  const remaining = values.length - shown.length;
  if (remaining > 0) {
    shown.push(`  ... ${remaining} more`);
  }

  return `${title}:\n${shown.join("\n")}`;
}

function logDiagnostics(
  logger: ArtifactLogger,
  buildRoot: string,
  discovery: Discovery
): void {
  logger.warning("Could not pair MacroSupport library and Swift module artifacts.");
  logger.info(formatList("MacroSupport libraries", buildRoot, discovery.libraries));
  logger.info(formatList("Archives", buildRoot, discovery.archives));
  logger.info(formatList("Modules directories", buildRoot, discovery.moduleDirs));
  logger.info(formatList("Swift module files", buildRoot, discovery.moduleFiles));
}

export function findBuildArtifacts(repoDir: string, logger: ArtifactLogger): BuildArtifacts {
  const buildRoot = join(repoDir, ".build");
  if (!existsSync(buildRoot)) {
    throw new Error(`SwiftPM build directory does not exist: ${buildRoot}`);
  }

  const discovery = discoverArtifacts(buildRoot);
  const libraryPath = discovery.libraries[0];
  const modulesDir = libraryPath
    ? findNearestModulesDir(libraryPath, discovery.moduleDirs)
    : undefined;

  if (!libraryPath || !modulesDir) {
    logDiagnostics(logger, buildRoot, discovery);
    throw new Error(
      `Could not find MacroSupport build artifacts under ${buildRoot}`
    );
  }

  return { libraryPath, modulesDir };
}
