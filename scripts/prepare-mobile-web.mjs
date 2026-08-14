import { cp, mkdir, readdir, rm } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const sourceRoot = join(repoRoot, 'public');
const outputRoot = join(repoRoot, 'mobile-web');
const excludedRootEntries = new Set(['og', 'robots.txt', 'sitemap.xml']);

async function copyTree(sourceDir, outputDir) {
  await mkdir(outputDir, { recursive: true });

  for (const entry of await readdir(sourceDir, { withFileTypes: true })) {
    const sourcePath = join(sourceDir, entry.name);
    const relativePath = relative(sourceRoot, sourcePath);
    const rootEntry = relativePath.split(/[\\/]/, 1)[0];

    if (excludedRootEntries.has(rootEntry)) continue;

    const outputPath = join(outputDir, entry.name);
    if (entry.isDirectory()) {
      await copyTree(sourcePath, outputPath);
    } else if (entry.isFile()) {
      await cp(sourcePath, outputPath);
    }
  }
}

await rm(outputRoot, { recursive: true, force: true });
await copyTree(sourceRoot, outputRoot);

console.log(`Prepared Capacitor web assets in ${outputRoot}`);
