/**
 * Cloudflare Worker that proxies SwiftSyntax prebuilt artifact requests
 * to GitHub Releases.
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
 *
 * 2. V1 format (SwiftPM 6.1/6.2):
 *    Manifest:  {major.minor}-manifest.json
 *    Artifact:  {major.minor}-MacroSupport-{platform}.tar.gz
 *    compilerTag is derived as swift-{major.minor}-RELEASE.
 *
 * Authentication:
 *   If GITHUB_TOKEN is set, the worker authenticates with GitHub to
 *   obtain a pre-signed CDN URL and redirects the client there.
 *   This is required for private repositories.
 *   Without a token, the worker issues a plain 302 to the GitHub
 *   download URL (works only for public repos).
 */

export interface Env {
  GITHUB_OWNER: string;
  GITHUB_REPO: string;
  /** Optional GitHub token for private repo access. Set as a Worker secret. */
  GITHUB_TOKEN?: string;
}

// ── Filename parsing ────────────────────────────────────────────────

const PLATFORM_PATTERN = "(macos_universal|[a-z]+_[a-z]+_(?:x86_64|aarch64))";
const PLATFORM_RE = new RegExp(`^${PLATFORM_PATTERN}$`);

const V1_MANIFEST_RE = /^(\d+\.\d+)-manifest\.json$/;
const V1_ARTIFACT_RE = new RegExp(
  `^(\\d+\\.\\d+)-MacroSupport-${PLATFORM_PATTERN}\\.tar\\.gz$`
);
const MAIN_MANIFEST_RE = new RegExp(`^(.+)-${PLATFORM_PATTERN}\\.json$`);
const MAIN_ARTIFACT_RE = new RegExp(
  `^(.+)-${PLATFORM_PATTERN}-MacroSupport\\.tar\\.gz$`
);

/**
 * Extract the compiler tag from a filename.
 * Returns null if the filename doesn't match any recognized pattern.
 */
function extractCompilerTag(filename: string): string | null {
  let match = V1_MANIFEST_RE.exec(filename);
  if (match) return `swift-${match[1]}-RELEASE`;

  match = V1_ARTIFACT_RE.exec(filename);
  if (match) return `swift-${match[1]}-RELEASE`;

  match = MAIN_MANIFEST_RE.exec(filename);
  if (match && PLATFORM_RE.test(match[2])) return match[1];

  match = MAIN_ARTIFACT_RE.exec(filename);
  if (match && PLATFORM_RE.test(match[2])) return match[1];

  return null;
}

// ── URL building ────────────────────────────────────────────────────

function buildGitHubDownloadUrl(
  owner: string,
  repo: string,
  syntaxVersion: string,
  compilerTag: string,
  filename: string
): string {
  const releaseTag = `prebuilt-${syntaxVersion}-${compilerTag}`;
  return `https://github.com/${owner}/${repo}/releases/download/${releaseTag}/${filename}`;
}

// ── GitHub authenticated resolution ─────────────────────────────────

/**
 * Resolve a release asset to a pre-signed CDN URL via the GitHub API.
 *
 * For private repos, the browser download URL doesn't work with tokens.
 * Instead we:
 *   1. GET /repos/{owner}/{repo}/releases/tags/{tag} → find asset by name
 *   2. GET /repos/{owner}/{repo}/releases/assets/{id}
 *      with Accept: application/octet-stream → 302 to pre-signed CDN URL
 *
 * The CDN URL is time-limited but publicly accessible, so the client
 * can fetch it directly. No data flows through the worker.
 */
async function resolveAuthenticatedUrl(
  owner: string,
  repo: string,
  releaseTag: string,
  filename: string,
  token: string
): Promise<{ status: number; location?: string }> {
  // Step 1: Find the asset ID from the release
  const releaseResp = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/releases/tags/${releaseTag}`,
    {
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github+json",
        "User-Agent": "swiftsyntax-prebuilts-worker",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  if (!releaseResp.ok) {
    return { status: releaseResp.status };
  }

  const release = (await releaseResp.json()) as {
    assets: Array<{ name: string; id: number }>;
  };

  const asset = release.assets.find((a) => a.name === filename);
  if (!asset) {
    return { status: 404 };
  }

  // Step 2: Request the asset with octet-stream accept to get redirect
  const assetResp = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/releases/assets/${asset.id}`,
    {
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/octet-stream",
        "User-Agent": "swiftsyntax-prebuilts-worker",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      redirect: "manual",
    }
  );

  if (assetResp.status >= 300 && assetResp.status < 400) {
    const location = assetResp.headers.get("Location");
    if (location) {
      return { status: 302, location };
    }
  }

  return { status: assetResp.status };
}

// ── Response helpers ────────────────────────────────────────────────

const CORS_HEADERS: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
  "Access-Control-Allow-Headers": "*",
};

function jsonResponse(
  body: Record<string, unknown>,
  status: number = 200
): Response {
  return new Response(JSON.stringify(body, null, 2) + "\n", {
    status,
    headers: { "Content-Type": "application/json", ...CORS_HEADERS },
  });
}

function redirectResponse(location: string): Response {
  return new Response(null, {
    status: 302,
    headers: { Location: location, ...CORS_HEADERS },
  });
}

// ── Main handler ────────────────────────────────────────────────────

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const method = request.method.toUpperCase();

    if (method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    if (url.pathname === "/" || url.pathname === "") {
      return jsonResponse({
        service: "swiftsyntax-prebuilts",
        description:
          "Proxy for SwiftSyntax prebuilt artifacts stored in GitHub Releases",
        usage: "/swift-syntax/{syntaxVersion}/{filename}",
        authenticated: !!env.GITHUB_TOKEN,
      });
    }

    // Parse: /swift-syntax/{syntaxVersion}/{filename}
    const segments = url.pathname.split("/").filter((s) => s.length > 0);
    const idx = segments.indexOf("swift-syntax");

    if (idx === -1 || idx + 2 >= segments.length) {
      return jsonResponse(
        {
          error: "Not Found",
          message:
            "Expected URL format: /swift-syntax/{syntaxVersion}/{filename}",
          received: url.pathname,
        },
        404
      );
    }

    const syntaxVersion = segments[idx + 1];
    const filename = segments.slice(idx + 2).join("/");

    const compilerTag = extractCompilerTag(filename);
    if (!compilerTag) {
      return jsonResponse(
        {
          error: "Unrecognized filename",
          message: `Could not extract compiler tag from: ${filename}`,
          syntaxVersion,
          filename,
        },
        404
      );
    }

    const downloadUrl = buildGitHubDownloadUrl(
      env.GITHUB_OWNER,
      env.GITHUB_REPO,
      syntaxVersion,
      compilerTag,
      filename
    );

    // ── Without token: plain redirect (public repos only) ───────────
    if (!env.GITHUB_TOKEN) {
      return redirectResponse(downloadUrl);
    }

    // ── With token: resolve to a pre-signed CDN URL ─────────────────
    const releaseTag = `prebuilt-${syntaxVersion}-${compilerTag}`;
    const resolved = await resolveAuthenticatedUrl(
      env.GITHUB_OWNER,
      env.GITHUB_REPO,
      releaseTag,
      filename,
      env.GITHUB_TOKEN
    );

    if (resolved.location) {
      return redirectResponse(resolved.location);
    }

    // GitHub returned a non-redirect status (404, 403, etc.)
    return jsonResponse(
      {
        error: "Upstream error",
        message: `GitHub returned ${resolved.status} for this asset`,
        downloadUrl,
        hint:
          resolved.status === 404
            ? "The release or asset does not exist. Check the swift-syntax version and compiler tag."
            : "Check the GITHUB_TOKEN permissions.",
      },
      resolved.status === 404 ? 404 : 502
    );
  },
};
