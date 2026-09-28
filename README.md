# Shivani Ranganathan

Personal portfolio. Static Astro site. Nothing in this repo publishes automatically.

The built pages send `noindex`, and `public/robots.txt` disallows all crawlers. Remove both before a real launch.

## Edit the copy

| What | Where |
| --- | --- |
| Front-page headline (`hook`), intro, experience, education, contact | `src/data/site.ts` |
| Case studies | `src/content/case-studies/*.md` |
| AI Desk dispatches | `src/content/ai/*.md` |
| Writing | `src/content/writing/*.md` (Medium posts use her original title, plus `byline`, `date`, `summary` as the deck, and the excerpt as the markdown body) |
| Life slots (names only until real copy arrives) | `src/data/site.ts` (`life`) |
| Personal pieces | `src/content/pieces/*.md` |
| Internship card, take-homes, proposal | `src/content/links/*.md` |
| Resume PDF | `public/resume.pdf` |

Layout lives under `src/layouts`, `src/components`, `src/pages`, and `src/styles`. You should not need to touch those to change words.

## Pending figures

In `src/data/site.ts`:

- `SHOW_PENDING_BADGES` — `true` shows an Unconfirmed badge on every figure marked `pending: true`. Set it to `false` to remove them all.
- `USE_CONFIDENTIAL_FALLBACKS` — `true` swaps FundsIndia figures, and the Wealth Spectrum name, for the safer wording stored as `fallback` next to each claim. Fallback lines are not badged.
- `SHOW_RESUME_ONLY_CLAIMS` — `true` shows resume-only lines (hero metrics, the 18% / 12% / 15% redemption claims, the Ketto app and 37% / 210M+ claims, and the recognition lines) with an Unconfirmed badge. `false` removes those lines. Empty sections are omitted, and the hero metric row hides.

Hero metrics stay in `src/data/site.ts` and are resume-only. The front page does not render that row. The same switch still shows or hides resume-only lines inside case studies and on About.

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

- `/` home. Headline is `hook` in `src/data/site.ts`.
- `/work` shipped work, then proposals and take-homes
- `/work/<slug>` one case study
- `/ai` — AI Desk. A dispatch has optional `date`, `autonomy` (`Assist`, `Delegate`, or `End-to-end`), `problem`, `principles`, `system`, `stillDecide`, and `outcome`. Until those fields are filled, the page shows the title and “Filed soon.”
- `/writing`
- `/life` — Off the clock. Slots for Roll & Wear, board gaming, and fitness. New pieces are markdown files in `src/content/pieces/` with `title`, `summary`, optional `slot` (such as `roll-and-wear`, `gaming`, or `fitness`), optional `date`, and `order`.
- `/about`
- `/resume.pdf`
