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
  const cleaned = cleanContent(copy.primary ?? '');
  const flagged = Boolean(copy.pending) || cleaned.pending;
  if (flagged && hasUnapprovedFigure(cleaned.text)) {
    if (!fallback) return null;
    const safe = cleanContent(fallback);
    if (!safe.text || hasUnapprovedFigure(safe.text)) return null;
    return { text: safe.text, pending: false };
  }
  const usingFallback = USE_CONFIDENTIAL_FALLBACKS && Boolean(fallback);
  const published = cleanContent((usingFallback ? fallback : copy.primary) ?? '');
  return {
    text: published.text,
    pending: !usingFallback && SHOW_PENDING_BADGES && flagged,
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

const plainNonMetrics = [
  /\b\d{1,2}\s+(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{4}\b/gi,
  /\b(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{4}\b/gi,
  /\b(?:19|20)\d{2}\b/g,
  /\b\d+\s+hours\b/gi,
  /₹\s?1\.25\s+lakh/gi,
  /\bpriority\s+0\b/gi,
  /\b15[–-]20\b/g,
];

/** A performance figure that is not a date, a year, or one of the plain non-metrics. */
export function hasUnapprovedFigure(text: string) {
  let rest = text;
  for (const pattern of plainNonMetrics) rest = rest.replace(pattern, ' ');
  return /\d/.test(rest);
}

/** A pending line that still contains a performance figure, ignoring calendar years. */
export function countsAsPendingFigure(text: string, pending: boolean): boolean {
  if (!pending) return false;
  return hasUnapprovedFigure(text);
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
