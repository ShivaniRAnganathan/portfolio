# Shivani Ranganathan

Personal portfolio. Static Astro site. Nothing in this repo publishes automatically.

The built pages send `noindex`, and `public/robots.txt` disallows all crawlers. Remove both before a real launch.

## Edit the copy

| What | Where |
| --- | --- |
| Positioning, intro, hero metrics, how I work, experience, education, contact | `src/data/site.ts` |
| Case studies | `src/content/case-studies/*.md` |
| Writing links | `src/content/writing/*.md` |
| Internship card, take-homes, proposal | `src/content/links/*.md` |
| Resume PDF | `public/resume.pdf` (placeholder today) |

Layout lives under `src/layouts`, `src/components`, `src/pages`, and `src/styles`. You should not need to touch those to change words.

## Pending figures

In `src/data/site.ts`:

- `SHOW_PENDING_BADGES` — `true` shows an Unconfirmed badge on every figure marked `pending: true`. Set it to `false` to remove them all.
- `USE_CONFIDENTIAL_FALLBACKS` — `true` swaps FundsIndia figures, and the Wealth Spectrum name, for the safer wording stored as `fallback` next to each claim. Fallback lines are not badged.

Hero metrics (37% GMV growth, −18% churn, 210M+ visits) are resume figures. They stay pending until a source confirms them. They have no fallback line.

## Develop

```bash
npm install
npm run dev
npm run build
```

`npm run build` writes `dist/`.

Hosting is not wired up. For a later deploy, set:

- `SITE` — origin, for example `https://example.com`
- `BASE` — `/` on Vercel or a user site, or `/repository-name/` on GitHub Pages project sites

`.github/workflows/pages.yml` deploys to GitHub Pages only when someone runs it by hand (`workflow_dispatch`). It does not run on push.

## Pages

- `/` home
- `/work` shipped work, then proposals and take-homes
- `/work/<slug>` one case study
- `/writing`
- `/about`
- `/resume.pdf`
