import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const rules = [
  { label: 'inferred - confirm', re: /inferred\s*-\s*confirm/i },
  { label: 'GAPS', re: /\bGAPS\b/ },
  { label: 'resume only', re: /resume only/i },
  { label: 'html comment', re: /<!--/ },
];

async function htmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await htmlFiles(full)));
    else if (entry.name.endsWith('.html')) files.push(full);
  }
  return files;
}

const files = await htmlFiles('dist');
const failures = [];
for (const file of files) {
  const html = await readFile(file, 'utf8');
  for (const rule of rules) {
    if (rule.re.test(html)) failures.push(`${file}: found ${rule.label}`);
  }
}

if (failures.length > 0) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Rendered HTML check passed (${files.length} files).`);
