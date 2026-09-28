import {
  SHOW_PENDING_BADGES,
  SHOW_RESUME_ONLY_CLAIMS,
  USE_CONFIDENTIAL_FALLBACKS,
  type Copy,
} from '../data/site';

export type ResolvedCopy = { text: string; pending: boolean };

/** Null when a resume-only claim is switched off. */
export function visibleCopy(copy: Copy | undefined): ResolvedCopy | null {
  if (!copy) return null;
  if (copy.resumeOnly && !SHOW_RESUME_ONLY_CLAIMS) return null;
  const fallback = copy.fallback?.trim();
  const usingFallback = USE_CONFIDENTIAL_FALLBACKS && Boolean(fallback);
  return {
    text: (usingFallback ? fallback : copy.primary).trim(),
    pending: Boolean(copy.pending) && !usingFallback && SHOW_PENDING_BADGES,
  };
}

export function resolveCopy(copy: Copy): ResolvedCopy {
  return visibleCopy(copy) ?? { text: copy.primary.trim(), pending: false };
}

export function caseHeadline(data: { outcome: Copy; resumeOutcome?: Copy }): ResolvedCopy {
  return visibleCopy(data.resumeOutcome) ?? visibleCopy(data.outcome) ?? {
    text: data.outcome.primary.trim(),
    pending: false,
  };
}
