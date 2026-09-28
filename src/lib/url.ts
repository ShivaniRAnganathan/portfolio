/** Prefix an internal path with Astro's configured base. External URLs pass through. */
export function url(path: string): string {
  if (/^(https?:|mailto:)/.test(path)) return path;
  const base = import.meta.env.BASE_URL || '/';
  const normalized = path.replace(/^\//, '');
  if (!normalized) return base;
  return `${base}${normalized}`;
}
