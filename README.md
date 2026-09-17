# VeligondaStories

**Every Village. Every Story. Every Record.**

VeligondaStories is a bilingual Telugu/English, mobile-first public archive and live content hub for the Poola Subbaiah Veligonda Project, affected villages, development, displacement, rehabilitation, community stories, and supporting evidence.

## Product authority

1. [`site-plan.md`](site-plan.md) is the canonical product specification.
2. [`veligondastories.md`](veligondastories.md) is the supporting requirements catalogue.
3. [`docs/BUILD-BRIEF.md`](docs/BUILD-BRIEF.md) converts those specifications into an implementation baseline.
4. [`docs/CONTENT-SOURCE-REGISTER.md`](docs/CONTENT-SOURCE-REGISTER.md) tracks factual sources and launch content without inventing data.

If documents conflict, `site-plan.md` takes precedence.

## Current status

The first public archive slice is implemented with Telugu/English homepages,
a 25-stage displacement journey, a reviewed photograph gallery, evidence and
video-review pages, a durable community-submission feed with social-media source
links, SEO metadata, crawl controls, and a privacy-safe media processing
workflow. Database-backed editorial administration remains a later phase.

Latest published updates are available at `/en/updates` and `/te/updates` on
the authoritative Netlify deployment. Submission records and uploaded media are
stored in named Netlify Blob stores, so application redeployments do not replace
or erase them. See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) before changing the
production site or its storage.

## Local development

Install dependencies with npm, then run the `dev` script. The default entry
redirects to Telugu at `/te`; English is available at `/en`.

Useful checks:

- `npm run lint`
- `npm run typecheck`
- `npm run build`
- `npm run media:validate`

Raw media under `src/assets/source-media/` is intentionally ignored by Git and
never served directly. See [`docs/MEDIA-REVIEW.md`](docs/MEDIA-REVIEW.md).

## Proposed stack

- Next.js App Router and TypeScript
- Tailwind CSS
- PostgreSQL and Prisma
- Auth.js-compatible authentication with role-based access control
- S3-compatible object storage
- MapLibre
- `next-intl`-style locale routing
- Zod validation
- Vitest and Playwright
- GitHub Actions

Final provider choices are recorded as architecture decisions before implementation.

## Non-negotiable principles

- Never invent facts, dates, totals, percentages, translations, or source attribution.
- Keep official, document-verified, field-verified, media, community, disputed, and pending information visibly distinct.
- Imported social content always enters human review; it is never auto-published.
- Do not scrape private WhatsApp groups or private Instagram content.
- Protect personal and family information; publish aggregates unless valid consent and a documented public-interest basis exist.
- Preserve corrections, content versions, evidence provenance, and audit history.
- Treat the website as the master record and social platforms as source/distribution channels.

## Repository

Remote: <https://github.com/ai-reddy/VeligondaStories>

License: Apache-2.0
