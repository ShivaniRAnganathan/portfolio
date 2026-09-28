import { SHOW_PENDING_BADGES, USE_CONFIDENTIAL_FALLBACKS, type Copy } from '../data/site';

export function resolveCopy(copy: Copy): { text: string; pending: boolean } {
  const fallback = copy.fallback?.trim();
  const usingFallback = USE_CONFIDENTIAL_FALLBACKS && Boolean(fallback);
  return {
    text: (usingFallback ? fallback : copy.primary).trim(),
    pending: Boolean(copy.pending) && !usingFallback && SHOW_PENDING_BADGES,
  };
}
