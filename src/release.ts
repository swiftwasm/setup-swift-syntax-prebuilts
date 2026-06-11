import { createWriteStream, existsSync, mkdirSync, renameSync, rmSync } from "fs";
import { get as httpGet } from "http";
import { get as httpsGet } from "https";
import { basename, dirname, join } from "path";
import * as core from "@actions/core";

export interface ReleaseRestoreOptions {
  owner: string;
  repo: string;
  syntaxVersion: string;
  compilerTag: string;
  swiftMajorMinor: string;
  platform: string;
  prebuiltsDir: string;
}

export interface ReleaseRestoreResult {
  restored: boolean;
  files: string[];
}

function releaseTag(syntaxVersion: string, compilerTag: string): string {
  return `prebuilt-${syntaxVersion}-${compilerTag}`;
}

export function releaseDownloadUrl(
  owner: string,
  repo: string,
  syntaxVersion: string,
  compilerTag: string,
  filename: string
): string {
  const tag = releaseTag(syntaxVersion, compilerTag);
  return `https://github.com/${owner}/${repo}/releases/download/${tag}/${filename}`;
}

function getRequiredAssets(
  compilerTag: string,
  swiftMajorMinor: string,
  platform: string
): string[] {
  const assets = [
    `${compilerTag}-${platform}.json`,
    `${compilerTag}-${platform}-MacroSupport.tar.gz`,
    "root-ca.cer",
  ];

  if (swiftMajorMinor) {
    assets.push(
      `${swiftMajorMinor}-manifest.json`,
      `${swiftMajorMinor}-MacroSupport-${platform}.tar.gz`
    );
  }

  return assets;
}

function download(url: string, destination: string, redirects = 5): Promise<void> {
  const client = url.startsWith("https:") ? httpsGet : httpGet;

  return new Promise((resolve, reject) => {
    const request = client(url, (response) => {
      const status = response.statusCode ?? 0;
      const location = response.headers.location;

      if (status >= 300 && status < 400 && location && redirects > 0) {
        response.resume();
        const redirected = new URL(location, url).toString();
        download(redirected, destination, redirects - 1).then(resolve, reject);
        return;
      }

      if (status !== 200) {
        response.resume();
        reject(new Error(`HTTP ${status}`));
        return;
      }

      mkdirSync(dirname(destination), { recursive: true });
      const tmp = `${destination}.tmp-${process.pid}`;
      const file = createWriteStream(tmp);

      response.pipe(file);
      file.on("finish", () => {
        file.close(() => {
          renameSync(tmp, destination);
          resolve();
        });
      });
      file.on("error", (err) => {
        rmSync(tmp, { force: true });
        reject(err);
      });
    });

    request.on("error", reject);
  });
}

export async function restoreFromRelease(
  options: ReleaseRestoreOptions
): Promise<ReleaseRestoreResult> {
  const outDir = join(
    options.prebuiltsDir,
    "swift-syntax",
    options.syntaxVersion
  );
  const certsDir = join(options.prebuiltsDir, ".certs");
  const files: string[] = [];

  for (const asset of getRequiredAssets(
    options.compilerTag,
    options.swiftMajorMinor,
    options.platform
  )) {
    const destination =
      asset === "root-ca.cer" ? join(certsDir, asset) : join(outDir, asset);
    const url = releaseDownloadUrl(
      options.owner,
      options.repo,
      options.syntaxVersion,
      options.compilerTag,
      asset
    );

    try {
      core.info(`Downloading ${asset} from ${releaseTag(options.syntaxVersion, options.compilerTag)}`);
      await download(url, destination);
      files.push(destination);
    } catch (err: any) {
      core.info(`Release asset not available: ${asset} (${err.message})`);
      rmSync(outDir, { recursive: true, force: true });
      if (existsSync(join(certsDir, "root-ca.cer"))) {
        rmSync(join(certsDir, "root-ca.cer"), { force: true });
      }
      return { restored: false, files: [] };
    }
  }

  core.info(`Restored ${files.length} files from GitHub Release.`);
  for (const file of files) {
    core.info(`  ${basename(file)}`);
  }

  return { restored: true, files };
}
