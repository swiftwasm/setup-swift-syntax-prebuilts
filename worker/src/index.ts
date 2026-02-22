/**
 * Cloudflare Worker that proxies SwiftSyntax prebuilt artifact requests
 * to GitHub Releases via 302 redirects.
 *
 * URL scheme:
 *   {worker-url}/swift-syntax/{syntaxVersion}/{filename}
 *
 * Maps to GitHub Release download:
 *   https://github.com/{owner}/{repo}/releases/download/{releaseTag}/{filename}
 *
 * Release tag format: prebuilt-{syntaxVersion}-{compilerTag}
 *
 * Two manifest formats are supported:
 *
 * 1. Main branch format (SwiftPM >= 6.3-dev):
 *    Manifest:  {compilerTag}-{platform}.json
 *    Artifact:  {compilerTag}-{platform}-MacroSupport.tar.gz
 *    compilerTag is extracted by stripping the platform suffix from the filename.
 *
 * 2. V1 format (SwiftPM 6.1/6.2):
 *    Manifest:  {major.minor}-manifest.json
 *    Artifact:  {major.minor}-MacroSupport-{platform}.tar.gz
 *    compilerTag is derived as swift-{major.minor}-RELEASE.
 */

export interface Env {
  GITHUB_OWNER: string;
  GITHUB_REPO: string;
}

/**
 * Platform regex pattern.
 * Matches platform identifiers at the end of a stem:
 *   - macos_universal
 *   - {distro}_{codename}_{arch}  where arch is x86_64 or aarch64
 */
const PLATFORM_PATTERN = "(macos_universal|[a-z]+_[a-z]+_(?:x86_64|aarch64))";
const PLATFORM_RE = new RegExp(`^${PLATFORM_PATTERN}$`);

/**
 * V1 manifest pattern: {major.minor}-manifest.json
 * Example: 6.1-manifest.json
 */
const V1_MANIFEST_RE = /^(\d+\.\d+)-manifest\.json$/;

/**
 * V1 artifact pattern: {major.minor}-MacroSupport-{platform}.tar.gz
 * Example: 6.1-MacroSupport-ubuntu_noble_x86_64.tar.gz
 */
const V1_ARTIFACT_RE = new RegExp(
  `^(\\d+\\.\\d+)-MacroSupport-${PLATFORM_PATTERN}\\.tar\\.gz$`
);

/**
 * Main branch manifest pattern: {compilerTag}-{platform}.json
 * Example: swift-6.1-RELEASE-ubuntu_noble_x86_64.json
 */
const MAIN_MANIFEST_RE = new RegExp(
  `^(.+)-${PLATFORM_PATTERN}\\.json$`
);

/**
 * Main branch artifact pattern: {compilerTag}-{platform}-MacroSupport.tar.gz
 * Example: swift-6.1-RELEASE-ubuntu_noble_x86_64-MacroSupport.tar.gz
 */
const MAIN_ARTIFACT_RE = new RegExp(
  `^(.+)-${PLATFORM_PATTERN}-MacroSupport\\.tar\\.gz$`
);

/**
 * Extract the compiler tag from a filename.
 *
 * Returns the compilerTag string, or null if the filename doesn't match
 * any recognized pattern.
 */
function extractCompilerTag(filename: string): string | null {
  // Try V1 manifest: {major.minor}-manifest.json
  let match = V1_MANIFEST_RE.exec(filename);
  if (match) {
    const majorMinor = match[1];
    return `swift-${majorMinor}-RELEASE`;
  }

  // Try V1 artifact: {major.minor}-MacroSupport-{platform}.tar.gz
  match = V1_ARTIFACT_RE.exec(filename);
  if (match) {
    const majorMinor = match[1];
    return `swift-${majorMinor}-RELEASE`;
  }

  // Try main branch manifest: {compilerTag}-{platform}.json
  match = MAIN_MANIFEST_RE.exec(filename);
  if (match) {
    const compilerTag = match[1];
    const platform = match[2];
    // Validate that the platform part actually looks like a platform
    if (PLATFORM_RE.test(platform)) {
      return compilerTag;
    }
  }

  // Try main branch artifact: {compilerTag}-{platform}-MacroSupport.tar.gz
  match = MAIN_ARTIFACT_RE.exec(filename);
  if (match) {
    const compilerTag = match[1];
    const platform = match[2];
    if (PLATFORM_RE.test(platform)) {
      return compilerTag;
    }
  }

  return null;
}

/**
 * Build the GitHub Release download URL for a given request.
 */
function buildGitHubUrl(
  owner: string,
  repo: string,
  syntaxVersion: string,
  compilerTag: string,
  filename: string
): string {
  const releaseTag = `prebuilt-${syntaxVersion}-${compilerTag}`;
  return `https://github.com/${owner}/${repo}/releases/download/${releaseTag}/${filename}`;
}

/** Standard CORS headers applied to all responses. */
const CORS_HEADERS: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
  "Access-Control-Allow-Headers": "*",
};

/** Create a JSON response with CORS headers. */
function jsonResponse(
  body: Record<string, unknown>,
  status: number = 200
): Response {
  return new Response(JSON.stringify(body, null, 2) + "\n", {
    status,
    headers: {
      "Content-Type": "application/json",
      ...CORS_HEADERS,
    },
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const method = request.method.toUpperCase();

    // Handle CORS preflight
    if (method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: CORS_HEADERS,
      });
    }

    // Root path: info response
    if (url.pathname === "/" || url.pathname === "") {
      return jsonResponse({
        service: "swiftsyntax-prebuilts",
        description:
          "Proxy for SwiftSyntax prebuilt artifacts stored in GitHub Releases",
        usage: "/{prefix}/swift-syntax/{syntaxVersion}/{filename}",
      });
    }

    // Parse the path: /swift-syntax/{syntaxVersion}/{filename}
    // The path may also have a prefix segment (e.g. from a route), so we
    // look for the "swift-syntax" segment anywhere in the path.
    const segments = url.pathname.split("/").filter((s) => s.length > 0);
    const swiftSyntaxIdx = segments.indexOf("swift-syntax");

    if (swiftSyntaxIdx === -1 || swiftSyntaxIdx + 2 >= segments.length) {
      return jsonResponse(
        {
          error: "Not Found",
          message:
            "Expected URL format: /swift-syntax/{syntaxVersion}/{filename}",
          received: url.pathname,
          hint: "The filename should be a manifest (.json) or artifact (.tar.gz) file",
        },
        404
      );
    }

    const syntaxVersion = segments[swiftSyntaxIdx + 1];
    // The filename may contain slashes in theory, but in practice it's a
    // single segment. Join the remaining segments just in case.
    const filename = segments.slice(swiftSyntaxIdx + 2).join("/");

    // Extract the compiler tag from the filename
    const compilerTag = extractCompilerTag(filename);
    if (!compilerTag) {
      return jsonResponse(
        {
          error: "Unrecognized filename format",
          message: `Could not extract compiler tag from filename: ${filename}`,
          syntaxVersion,
          filename,
          hint: "Expected formats: " +
            "{compilerTag}-{platform}.json, " +
            "{compilerTag}-{platform}-MacroSupport.tar.gz, " +
            "{major.minor}-manifest.json, or " +
            "{major.minor}-MacroSupport-{platform}.tar.gz",
        },
        404
      );
    }

    const owner = env.GITHUB_OWNER;
    const repo = env.GITHUB_REPO;
    const downloadUrl = buildGitHubUrl(
      owner,
      repo,
      syntaxVersion,
      compilerTag,
      filename
    );

    // Both GET and HEAD return a 302 redirect.
    // SwiftPM follows redirects, so the chain is:
    //   SwiftPM → Worker (302) → GitHub (302) → CDN
    return new Response(null, {
      status: 302,
      headers: {
        Location: downloadUrl,
        ...CORS_HEADERS,
      },
    });
  },
};
