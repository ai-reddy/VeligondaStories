# VeligondaStories Build Brief

## 1. Scope and authority

This brief translates the canonical [`site-plan.md`](../site-plan.md) and compatible detail from [`veligondastories.md`](../veligondastories.md) into a build baseline. It does not replace either document. When requirements conflict, `site-plan.md` wins.

Product name: **VeligondaStories**
Tagline: **Every Village. Every Story. Every Record.**
Languages: Telugu (`te`) and English (`en`)
Primary experience: mobile-first public archive, live updates, evidence viewer, and editorial CMS.

## 2. Product outcomes

VeligondaStories must let a visitor:

- understand the project, water system, milestones, and documented benefits;
- explore each affected village through a permanent bilingual page;
- follow before → transition/displacement → present-day stories;
- inspect sources and evidence behind factual claims;
- distinguish official statements from community or media reports;
- find updates, photos, videos, documents, issues, representations, and official responses;
- share stable canonical links through WhatsApp and other social channels.

Administrators must be able to ingest, classify, review, verify, publish, correct, and version all content from one content inbox.

## 3. Delivery scope

### MVP 1 — public archive and publishing

- Bilingual shell and `/[locale]` routing
- Home, Project, Villages, Gundancharla, Updates, Photos, Videos, Documents, About
- Content CMS, media library, village management, users/RBAC, audit trail
- YouTube URL import and duplicate prevention
- Instagram URL/reference ingestion with manual upload fallback
- Draft → review → publish workflow
- SEO, sitemap, structured data, accessibility, responsive design

### MVP 2 — accountability and evidence

- Issues, claims, evidence viewer, verification workflow
- Timeline and before/during/after narratives
- Representations, acknowledgements, official responses
- Project-development and rehabilitation status dashboards
- MapLibre map with privacy-safe layers

### MVP 3 — community operations

- Community submissions and consent capture
- WhatsApp click-to-chat intake instructions; no group scraping
- Private family records and aggregate public reporting
- Village coordinator/contributor workflows
- Search, notifications, analytics, PWA, scheduled YouTube channel sync

## 4. Recommended architecture

Use a modular monolith first. It minimizes operational cost while preserving clean domain boundaries and allows extraction later if scale requires it.

### Application

- Next.js App Router, TypeScript, React Server Components where appropriate
- Tailwind CSS with reusable design tokens and accessible components
- Locale-prefixed public URLs: `/en/...` and `/te/...`
- Admin routes under `/admin`; admin UI is not locale-indexed publicly
- Route handlers/server actions call a service layer; UI does not access Prisma directly

### Data and storage

- PostgreSQL as system of record
- Prisma migrations and typed database access
- S3-compatible object storage behind a provider-neutral adapter
- Originals retained separately from derived thumbnails/previews
- Signed URLs for private/restricted assets
- PostgreSQL full-text search initially; add a dedicated search engine only when justified

### Security

- Auth.js-compatible authentication
- Server-enforced RBAC: Super Admin, Editor, Evidence Reviewer, Village Coordinator, Contributor, Viewer
- MFA required for privileged production accounts through the chosen identity provider
- Zod validation at every trust boundary
- CSRF protection where relevant, secure cookies, rate limiting, upload allowlists/size limits, malware-scanning hook, security headers, least privilege, and audit events
- Secrets only in environment/secret management; never in source control or browser bundles

### Quality

- Unit/domain tests with Vitest
- Integration tests against a disposable PostgreSQL database
- Playwright for critical public/admin journeys and accessibility checks
- ESLint, TypeScript strict mode, formatting, dependency/security scans, migration checks, build, and tests in GitHub Actions

## 5. Domain model

Build normalized models around these aggregates:

- Identity: `User`, `Role`, role assignments, village assignments
- Geography/project: `Project`, `Village`, `ProjectMilestone`, `WaterEvent`, `Amenity`
- Publishing: `Content`, `ContentVersion`, `Category`, `Tag`, translations/localized fields
- Media/social: `Media`, `SocialPost`, `YouTubeVideo`, `InstagramPost`
- Evidence: `Claim`, `Evidence`, `Source`, `Document`, verification events
- Accountability: `Issue`, `Representation`, `GovernmentResponse`
- Community/private: `Family`, `FamilyIssue`, `RREntitlement`, `HousingRecord`, `Consent`
- History/security: `TimelineEvent`, `AuditLog`

Use join tables where records can relate to multiple villages, contents, issues, documents, or evidence items. Do not model those relationships as comma-separated values or giant JSON documents. JSON is appropriate only for external provider metadata snapshots and non-queryable supplemental fields.

## 6. Required classifications

### Source type

`WEBSITE`, `YOUTUBE`, `INSTAGRAM`, `WHATSAPP`, `FACEBOOK`, `NEWS`, `GOVERNMENT`, `COMMUNITY`, `FIELD_REPORT`, `UPLOADED_PHOTO`, `UPLOADED_VIDEO`, `DOCUMENT`, `OTHER`

### Evidence/verification class

`OFFICIALLY_VERIFIED`, `DOCUMENT_VERIFIED`, `FIELD_VERIFIED`, `MULTIPLE_COMMUNITY_REPORTS`, `COMMUNITY_REPORT`, `MEDIA_REPORT`, `VERIFICATION_PENDING`, `DISPUTED`

### Editorial workflow

`SUBMITTED` → `DRAFT` → `UNDER_REVIEW` → `EVIDENCE_CHECK` → `APPROVED` → `PUBLISHED`

Terminal/secondary states: `REJECTED`, `UPDATED`, `CORRECTED`, `ARCHIVED`, `DISPUTED`.

Transitions must be permission-checked and audited. Published content must reference an immutable version. Corrections create a new version and public correction note rather than silently rewriting history.

### Issue workflow

`REPORTED`, `UNDER_VERIFICATION`, `VERIFIED`, `SUBMITTED`, `RESPONSE_RECEIVED`, `ACTION_PENDING`, `RESOLVED`, `CLOSED`, `DISPUTED`

## 7. Bilingual rules

- Store Telugu and English in one domain record, not duplicate pages.
- Allow a translation to be missing while in draft, but require configured launch languages before publication unless explicitly marked as single-language source material.
- Track translation status and reviewer separately from factual verification.
- Preserve names exactly as supported by sources; aliases and spelling variants belong in dedicated fields.
- Use human-reviewed Telugu for navigation, legal/privacy text, and launch content.
- Emit `hreflang`, canonical URLs, localized metadata, OG cards, and sitemaps.

## 8. Source and evidence rules

Every factual number must include source, source date, definition, and observed/published date. Conflicting figures coexist as dated claims; one does not silently replace another.

Each claim can link to one or more evidence items. Evidence stores provenance, custody/upload information, verification class, reviewer, dates, source URL, related document/media, visibility, and redaction status.

Public documents are immutable copies or stable links with checksums where lawful. Redacted derivatives never replace originals. Restricted originals require authorization.

## 9. Privacy and consent

Default family/person records to private. Public pages use aggregates and consented stories only.

Never expose Aadhaar numbers, bank details, OTPs, signatures, private phone numbers, private identity documents, children's sensitive data, or precise vulnerable-family locations. Add redaction review before any document becomes public.

Consent records must capture subject/scope, purpose, media/content covered, granted date, expiry/withdrawal where applicable, evidence of consent, and reviewer. Withdrawal must unpublish affected public material without erasing the internal audit record where retention is lawful.

AI-generated visuals must be labeled **Illustration — AI Generated** and must never appear as historical evidence.

## 10. Social integrations

### YouTube

- Accept standard watch, Shorts, embed, and `youtu.be` URLs and normalize the external video ID.
- Enforce a unique platform/external-ID constraint.
- Retrieve only needed fields using `videos.list`: snippet, content details, status, statistics as configured.
- Store title, description, thumbnails, channel, publication time, duration, embeddable/privacy status, selected statistics, URL, retrieval time, and raw metadata snapshot.
- Public metadata reads use a restricted server-side API key; OAuth is needed only for owner/private/write operations.
- Channel sync resolves the channel uploads playlist, pages through playlist items, compares IDs, and creates drafts only.
- Respect quota, ETags/caching, unavailable/deleted videos, region restrictions, embed restrictions, and changing statistics.

### Instagram

- Store normalized original URL and admin-entered attribution/caption.
- Use supported Meta APIs or public embed behavior only when permitted.
- Provide manual upload/reference fallback.
- Never scrape private content or assume media can be downloaded.
- Preserve creator attribution, consent/licensing status, and original URL.

### WhatsApp

- Provide a click-to-chat submission CTA with village, issue, date, and consent instructions.
- Admin uploads received files/links into the review inbox.
- Record source as WhatsApp/community submission without exposing sender identity publicly.
- Never automate access to private groups.

## 11. API baseline

Version public/admin endpoints under `/api/v1`.

Public read areas: villages, content, issues, documents, evidence, timeline, media, videos, representations, official responses, search.

Admin write areas: content/workflow, media, documents, evidence/verification, issues, villages, representations/responses, users/roles, social imports/sync, audit-log access.

All list endpoints require pagination, deterministic sorting, bounded filters, and explicit public visibility rules. All mutations require authentication, authorization, validation, idempotency where retries are possible, and audit logging.

## 12. Homepage order

1. Hero
2. Latest update
3. Project development
4. Water story
5. Affected villages
6. Gundancharla featured story
7. Before → displacement → today
8. R&R summary
9. Ground reality
10. Latest videos
11. Latest photos
12. Documents/evidence
13. Timeline
14. Official responses
15. About and submit-update CTA

No unverified counters or invented progress percentages.

## 13. Operational requirements

- Automated database backups and tested restore procedure
- Object versioning/lifecycle rules and backup policy
- Error monitoring, structured logs, uptime checks, and audit retention
- Image thumbnail pipeline and metadata stripping where privacy requires it
- CDN caching with deliberate invalidation after publication/correction
- Data export and deletion workflows consistent with policy and law
- Content moderation, takedown, correction, and right-of-reply procedures
- Staging environment and approval gate before production deployment

## 14. Environment contract

Create `.env.example` during scaffolding. Expected categories (exact provider names are chosen in ADRs):

- `DATABASE_URL`
- application URL and auth secret/provider credentials
- `YOUTUBE_API_KEY`, optional `YOUTUBE_CHANNEL_ID`
- object-storage endpoint, region, bucket, access key, secret key, public/CDN base URL
- scheduled-job secret
- rate-limit store credentials if externalized
- email/notification provider credentials if enabled
- analytics/error-monitoring identifiers if enabled

No real secrets belong in `.env.example` or Git.

## 15. Definition of done

A feature is complete only when:

- authorization and privacy rules are enforced server-side;
- Telugu and English behavior is tested;
- source, verification, and dates are visible where required;
- keyboard, screen-reader, contrast, and mobile behavior are checked;
- loading, empty, unavailable-source, and error states exist;
- tests cover happy paths and abuse/permission failures;
- audit events and version history are created for material changes;
- relevant documentation and environment contract are updated;
- build, lint, type-check, tests, and security scans pass.

## 16. Decisions required before scaffolding

Record these in architecture decision records rather than burying them in code:

1. package manager and supported Node.js LTS version;
2. deployment provider and region;
3. managed PostgreSQL provider;
4. identity provider and account-recovery/MFA policy;
5. S3-compatible storage/CDN provider and upload limits;
6. Telugu font family and visual design direction;
7. rich-text editor and portable content representation;
8. initial village list and spelling/alias authority;
9. public-domain name and canonical URL;
10. analytics, email, monitoring, malware scanning, and scheduled-job providers;
11. retention periods for submissions, rejected content, private family data, logs, and backups;
12. named editorial, evidence-review, privacy, and incident-response owners.

Provider-independent interfaces can be built first, but production launch is blocked until these decisions and policies are approved.
