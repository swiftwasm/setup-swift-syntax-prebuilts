import { join } from "path";

/**
 * Absolute path to the project root directory.
 *
 * When compiled by tsc (outDir: lib-test/, rootDir: .), this file lives at
 * lib-test/tests/helpers.js, so project root is two levels up.
 * When run directly from source (e.g. via tsx), it's at tests/helpers.ts,
 * so project root is one level up.
 *
 * We detect which case by checking if __dirname contains 'lib-test'.
 */
export const PROJECT_ROOT = __dirname.includes("lib-test")
  ? join(__dirname, "..", "..")
  : join(__dirname, "..");

export const CERTS_DIR = join(PROJECT_ROOT, "certs");
export const FIXTURES_DIR = join(PROJECT_ROOT, "fixtures");
