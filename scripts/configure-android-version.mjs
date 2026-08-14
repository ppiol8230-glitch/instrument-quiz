import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const buildFile = join(repoRoot, 'android', 'app', 'build.gradle');
const [versionCodeInput = '1', versionNameInput = '1.0.0'] = process.argv.slice(2);
const versionCode = Number(versionCodeInput);

if (!Number.isSafeInteger(versionCode) || versionCode < 1) {
  throw new Error(`Invalid Android version code: ${versionCodeInput}`);
}
if (!/^[0-9A-Za-z][0-9A-Za-z._-]{0,49}$/.test(versionNameInput)) {
  throw new Error(`Invalid Android version name: ${versionNameInput}`);
}

let source = await readFile(buildFile, 'utf8');
const original = source;

source = source.replace(/versionCode\s*(?:=\s*)?\d+/, `versionCode ${versionCode}`);
source = source.replace(/versionName\s*(?:=\s*)?["'][^"']+["']/, `versionName "${versionNameInput}"`);

if (source === original || !source.includes(`versionCode ${versionCode}`) || !source.includes(`versionName "${versionNameInput}"`)) {
  throw new Error('Could not update versionCode/versionName in generated Android project.');
}

await writeFile(buildFile, source, 'utf8');
console.log(`Configured Android version ${versionNameInput} (${versionCode}).`);
