import {
  SHOW_PENDING_BADGES,
  SHOW_RESUME_ONLY_CLAIMS,
  USE_CONFIDENTIAL_FALLBACKS,
  type Copy,
} from '../data/site';
import { cleanContent } from './content';

export type ResolvedCopy = { text: string; pending: boolean };

/** Null when a resume-only claim is switched off. */
export function visibleCopy(copy: Copy | undefined): ResolvedCopy | null {
  if (!copy) return null;
  if (copy.resumeOnly && !SHOW_RESUME_ONLY_CLAIMS) return null;
  const fallback = copy.fallback?.trim();
  const usingFallback = USE_CONFIDENTIAL_FALLBACKS && Boolean(fallback);
  const cleaned = cleanContent((usingFallback ? fallback : copy.primary) ?? '');
  return {
    text: cleaned.text,
    pending: !usingFallback && SHOW_PENDING_BADGES && (Boolean(copy.pending) || cleaned.pending),
  };
}

export function resolveCopy(copy: Copy): ResolvedCopy {
  return visibleCopy(copy) ?? { text: copy.primary.trim(), pending: false };
}

type OutcomeValue = string | Copy | Copy[];

function asCopies(value: OutcomeValue | undefined): Copy[] {
  if (!value) return [];
  if (typeof value === 'string') return [{ primary: value }];
  if (Array.isArray(value)) return value;
  return [value];
}

/** One resolved line per outcome sentence, so an approved figure is not badged with its neighbours. */
export function caseParts(data: { outcome: OutcomeValue; resumeOutcome?: Copy }): ResolvedCopy[] {
  const resume = visibleCopy(data.resumeOutcome);
  if (resume) return [resume];
  return asCopies(data.outcome).flatMap((part) => {
    const visible = visibleCopy(part);
    return visible ? [visible] : [];
  });
}

export function caseHeadline(data: { outcome: OutcomeValue; resumeOutcome?: Copy }): ResolvedCopy {
  const parts = caseParts(data);
  if (parts.length === 0) {
    const outcome = asCopies(data.outcome)[0];
    return { text: outcome?.primary.trim() ?? '', pending: false };
  }
  return {
    text: parts.map((part) => part.text).join(' '),
    pending: parts.some((part) => part.pending),
  };
}
