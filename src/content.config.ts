import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const copy = z.object({
  primary: z.string(),
  fallback: z.string().optional(),
  pending: z.boolean().optional(),
  resumeOnly: z.boolean().optional(),
  href: z.string().optional(),
});

const section = z.object({
  heading: z.string(),
  paragraphs: z.array(copy).optional(),
  items: z.array(copy).optional(),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    role: z.string(),
    timeline: z.string(),
    featured: z.boolean(),
    order: z.number(),
    outcome: copy,
    resumeOutcome: copy.optional(),
    dek: z.string(),
    scale: copy,
    sections: z.array(section),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    outlet: z.string(),
    date: z.string().optional(),
    summary: z.string(),
    metric: copy.optional(),
    href: z.string(),
    order: z.number(),
  }),
});

const links = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/links' }),
  schema: z.object({
    title: z.string(),
    label: z.string(),
    group: z.enum(['shipped', 'proposal']),
    summary: z.string(),
    metric: copy.optional(),
    href: z.string(),
    order: z.number(),
    when: z.string().optional(),
  }),
});

const pieces = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pieces' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    /** Optional label, for example a life slot id. Not a fixed list. */
    slot: z.string().optional(),
    date: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { caseStudies, writing, links, pieces };
