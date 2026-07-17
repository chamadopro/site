import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const flowDir = path.join(root, 'public', 'images', 'flow');
const outFile = path.join(root, 'src', 'lib', 'phoneFlowCache.generated.ts');

const pattern = /^chama\.ai-(\d+)\.png$/i;

function scanFlowImages() {
  if (!fs.existsSync(flowDir)) {
    return { version: '0', files: [] };
  }

  const files = fs
    .readdirSync(flowDir)
    .filter((name) => pattern.test(name))
    .sort((a, b) => {
      const na = Number(a.match(pattern)[1]);
      const nb = Number(b.match(pattern)[1]);
      return na - nb;
    });

  let version = 0;
  for (const file of files) {
    const { mtimeMs } = fs.statSync(path.join(flowDir, file));
    version = Math.max(version, Math.floor(mtimeMs));
  }

  return { version: String(version), files };
}

const { version, files } = scanFlowImages();

const contents = `/** Gerado por scripts/phone-flow-cache.mjs — não editar manualmente */
export const phoneFlowCacheVersion = '${version}';
export const phoneFlowDiscoveredFiles = ${JSON.stringify(files, null, 2)} as const;
`;

fs.writeFileSync(outFile, contents, 'utf8');
console.log(`phone-flow-cache: v=${version}, ${files.length} arquivo(s)`);
