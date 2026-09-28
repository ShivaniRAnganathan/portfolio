import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const rules = [
  { label: 'inferred - confirm', re: /inferred\s*-\s*confirm/i },
  { label: 'GAPS', re: /\bGAPS\b/ },
  { label: 'resume only', re: /resume only/i },
  { label: 'html comment', re: /<!--/ },
  { label: 'editor note', re: /EDITOR\s+NOTES?/i },
];

/** Figures Shivani has approved. Anything else with a digit stays gated. */
const approvedFigures = [
  /about\s+6%\s+to\s+9\.5%/gi,
  /8\.5%\s+to\s+14\.6%/gi,
  /1\.1\s+to\s+6\.1/g,
  /18%/g,
  /12%/g,
  /47%/g,
  /45%/g,
  /60%/g,
  /more than 40/gi,
  /\b600\b/g,
  /\b4 people\b/gi,
];

function unapprovedDigits(text) {
  let rest = text;
  for (const pattern of approvedFigures) rest = rest.replace(pattern, ' ');
  return /\d/.test(rest);
}

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

const failures = [];

const figureFiles = [
  'src/content/case-studies/redemption-tax-exit-load.md',
  'src/content/case-studies/wealth-spectrum-one-view.md',
  'src/content/case-studies/rm-dashboard.md',
  'src/content/case-studies/voice-of-the-rm.md',
];

function unquote(raw) {
  const trimmed = raw.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function copiesIn(text) {
  const lines = text.split('\n');
  const copies = [];
  for (let i = 0; i < lines.length; i++) {
    const match = lines[i].match(/^(\s*)primary:\s*(.*)$/);
    if (!match) continue;
    const indent = match[1].length;
    const primary = unquote(match[2]);
    let fallback = null;
    let pending = false;
    let approved = false;
    for (let j = i + 1; j < lines.length; j++) {
      const line = lines[j];
      if (line.trim() === '') continue;
      const inner = line.match(/^(\s*)/)[1].length;
      const sibling = /^\s*(fallback|pending|resumeOnly|href|approved):/.test(line);
      if (inner < indent || (inner === indent && !sibling)) break;
      const fallbackMatch = line.match(/^\s*fallback:\s*(.*)$/);
      if (fallbackMatch) fallback = unquote(fallbackMatch[1]);
      if (/^\s*pending:\s*true\s*$/.test(line)) pending = true;
      if (/^\s*approved:\s*true\s*$/.test(line)) approved = true;
    }
    copies.push({ primary, fallback, pending, approved, line: i + 1 });
  }
  return copies;
}

for (const file of figureFiles) {
  const text = await readFile(file, 'utf8');
  for (const rule of rules) {
    if (rule.re.test(text)) failures.push(`${file}: found ${rule.label}`);
  }
  for (const key of ['title', 'dek', 'role']) {
    const plain = text.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
    if (plain && unapprovedDigits(unquote(plain[1]))) {
      failures.push(`${file}: ${key} has an unapproved number`);
    }
  }
  for (const copy of copiesIn(text)) {
    const where = `${file}:${copy.line}`;
    const gated = unapprovedDigits(copy.primary);
    if (copy.approved) {
      if (gated) failures.push(`${where}: approved line still has an unapproved number`);
      if (copy.pending) failures.push(`${where}: approved line is marked pending`);
      if (copy.fallback) failures.push(`${where}: approved line has a fallback`);
    } else if (gated) {
      if (!copy.fallback) failures.push(`${where}: figure has no fallback`);
      if (!copy.pending) failures.push(`${where}: figure is not marked pending`);
    }
    if (copy.fallback != null && unapprovedDigits(copy.fallback)) {
      failures.push(`${where}: fallback still has a number`);
    }
  }
}

const files = await htmlFiles('dist');
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
