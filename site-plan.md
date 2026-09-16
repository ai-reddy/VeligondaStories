# VeligondaStories

> **Canonical Site Plan and Product Authority**
>
> This file is the core product specification for VeligondaStories. When another
> planning document conflicts with this file, this file takes precedence.
> `veligondastories.md` is a supporting requirements catalogue whose compatible
> details—especially privacy, evidence, SEO, accessibility, and operations—should
> be incorporated during implementation.

VeligondaStories is a **living public archive + live content hub**, not a static website.

The website becomes the central source, while **YouTube, Instagram, WhatsApp and your own uploaded photographs/videos** become content channels feeding that source.

One important technical distinction: **YouTube is straightforward to integrate for public video metadata and embeds through the YouTube Data API.** Google documents channel/video retrieval, playlists, thumbnails, publication dates and statistics through the API. ([Google for Developers][1]) Instagram and WhatsApp should be designed with a hybrid/manual ingestion approach rather than assuming that every WhatsApp group or Instagram Reel can simply be scraped. That avoids depending on unsupported access patterns.

# VeligondaStories

## Complete Software Development Specification — V1

### Working concept

**Development. Sacrifice. Rehabilitation. Reality. Evidence.**

Telugu:

> **అభివృద్ధి • త్యాగం • పునరావాసం • వాస్తవం • ఆధారాలు**

English:

> **Development • Sacrifice • Rehabilitation • Reality • Evidence**

---

# 1. What the website should become

Think of the system as:

```text
                VELIGONDASTORIES
                       │
        ┌──────────────┼──────────────┐
        │              │              │
     PROJECT        PEOPLE         EVIDENCE
        │              │              │
   Water           Villages       Documents
   Reservoir       Families       Photos
   Tunnels         Displacement   Videos
   Canals          R&R            Govt records
   Inauguration    Pattas         Media
        │              │              │
        └──────────────┼──────────────┘
                       │
                 LIVE CONTENT HUB
                       │
       ┌───────────────┼───────────────┐
       │               │               │
    YouTube        Instagram       WhatsApp
       │               │               │
    Videos          Reels/posts     Community
```

The website remains the **master record**.

---

# 2. Homepage

### Hero

**వెలిగొండ ప్రాజెక్టు — అభివృద్ధి, త్యాగం, పునరావాసం**

> **The story of a major development project — and the people whose lives changed because of it.**

Hero video:

* reservoir/water
* inauguration
* tunnels
* village photographs
* displaced families
* new layouts

Use a documentary-style video, not an aggressive political video.

---

# 3. Live Updates

This becomes one of the most important features.

### Homepage section

## 🔴 Latest Updates

Cards:

```text
[PHOTO]

Gundancharla — Current Ground Reality
16 Sep 2026

Read More
```

```text
[VIDEO]

Veligonda Water Release
31 Aug 2026

▶ Watch
```

```text
[REEL]

Life in the New Layout
15 Sep 2026

Instagram
```

```text
[DOCUMENT]

R&R Representation Submitted
15 Sep 2026

View Document
```

---

# 4. Content Sources

Every content item has a source.

### Source types

```text
WEBSITE
YOUTUBE
INSTAGRAM
WHATSAPP
FACEBOOK
NEWS
GOVERNMENT
COMMUNITY
FIELD REPORT
UPLOADED PHOTO
UPLOADED VIDEO
DOCUMENT
```

Each card should show:

**Source: YouTube**

**Source: Instagram**

**Source: Community submission**

This makes the origin transparent.

---

# 5. YouTube Integration

This should be fully integrated.

You provide:

```text
https://youtube.com/watch?v=...
```

The admin system automatically extracts:

* video ID
* title
* description
* thumbnail
* channel
* published date
* duration
* statistics where available
* embed URL

The YouTube Data API supports video/channel/playlist retrieval and provides metadata such as titles, descriptions, thumbnails, publication dates and statistics. ([Google for Developers][1])

### Admin workflow

```text
Paste YouTube URL
       ↓
Extract Video ID
       ↓
Fetch metadata
       ↓
Admin edits Telugu/English title
       ↓
Select village
       ↓
Select category
       ↓
Add description
       ↓
Verify
       ↓
Publish
```

### Categories

* Project
* Water
* Inauguration
* Village
* Displacement
* R&R
* Pattas
* Housing
* Ground Reality
* Family Story
* Government Statement
* News
* Community Update

---

# 6. Instagram Integration

For Instagram, build two modes.

### Mode A — URL Import

You paste a Reel/post URL:

```text
https://www.instagram.com/reel/...
```

System stores:

* URL
* shortcode/identifier where available
* title
* caption entered by admin
* village
* category
* date
* source
* thumbnail/preview where permitted

Then display it as an embedded/link card subject to Instagram's platform capabilities.

### Mode B — Manual Media Upload

If API access isn't available for a particular piece of content:

```text
Upload Reel/video
+
Instagram original URL
+
Creator/source
+
Caption
```

This gives you a reliable fallback.

**Important:** Don't build the system around scraping Instagram. Use Meta-supported APIs/embeds where available and retain the original Instagram link.

---

# 7. WhatsApp Integration

This should be treated differently.

You will probably receive:

* photographs
* videos
* voice messages
* documents
* family updates
* village information
* links

through WhatsApp groups.

Don't attempt to scrape private WhatsApp groups.

Instead:

### WhatsApp → Website workflow

```text
WhatsApp Group
      ↓
Admin receives content
      ↓
Admin forwards/uploads
      ↓
Content Review
      ↓
Village selected
      ↓
Evidence classification
      ↓
Publish
```

Add a button:

### **Submit an Update**

It can open WhatsApp with a prefilled message/instruction.

For example:

> Send village name + issue + photo/video + date.

---

# 8. Content Management System

Your admin dashboard should be the heart of the application.

## Dashboard

```text
------------------------------------------------
VELIGONDA ADMIN
------------------------------------------------

Total Posts                 248
Pending Review               12
Published Today               7
Evidence Pending              9
Open Issues                  43
Government Responses          3

------------------------------------------------
LATEST CONTENT

[Review] Gundancharla video
[Review] Instagram Reel
[Published] Water update
[Review] Family document
------------------------------------------------
```

---

# 9. Content Creation

Admin clicks:

### `+ New Content`

Select:

```text
Content Type

○ Blog
○ YouTube
○ Instagram
○ Photo
○ Video
○ Document
○ News
○ Government Update
○ Community Update
○ Family Story
○ Timeline Event
```

---

# 10. Blog Post

Fields:

```text
Title – English
Title – Telugu

Short Summary – English
Short Summary – Telugu

Content – English
Content – Telugu

Village
Category
Date
Author
Sources
Evidence
Related Videos
Related Photos

Publish Status
Draft / Review / Published
```

---

# 11. One Story Can Combine Everything

This is extremely important.

For example:

## **Gundancharla — From Our Village to the New Layout**

A single article can contain:

```text
Story
 ↓
Old village photos
 ↓
Google/Map location
 ↓
Displacement timeline
 ↓
Government document
 ↓
Family photographs
 ↓
YouTube video
 ↓
Instagram Reel
 ↓
Current layout photos
 ↓
Current issues
 ↓
Related representation
```

This creates a **complete story**, rather than disconnected social-media posts.

---

# 12. Village Page

Each village gets its own permanent page.

### Example

# గుండంచర్ల

## Gundancharla

```text
ABOUT
HISTORY
OLD VILLAGE
DISPLACEMENT
R&R
NEW LAYOUT
CURRENT STATUS
PHOTOS
VIDEOS
DOCUMENTS
ISSUES
TIMELINE
STORIES
UPDATES
```

---

# 13. Seven/Affected Villages Dashboard

Create a map and cards.

```text
AFFECTED VILLAGES

┌─────────────┐
│ GUNDANCHARLA│
│ 124 families│
│ 18 issues   │
└─────────────┘

┌─────────────┐
│ KALANUTHALA │
│ ...         │
└─────────────┘
```

Only show family counts after verification.

---

# 14. Project Development Dashboard

This prevents the site from becoming one-sided.

### Project Progress

```text
WATER
████████████████

RESERVOIR
████████████████

TUNNELS
████████████████

CANALS
████████████████

IRRIGATION
████████████░░░░
```

But don't invent percentages.

Instead use:

**Completed / Under Construction / Operational / Reported**

with source/date.

---

# 15. Water Timeline

This can become a visually impressive page.

```text
PROJECT
   ↓
TUNNELS
   ↓
WATER FLOW
   ↓
RESERVOIR
   ↓
FILLING
   ↓
RELEASE
   ↓
IRRIGATION
```

Every stage can have:

* date
* photographs
* videos
* official source
* community photographs

---

# 16. “Before → During → After”

This should be a signature feature.

### Before

Village life.

### During

Displacement.

### After

New layouts/current situation.

Example:

```text
┌─────────────┬─────────────┬─────────────┐
│ BEFORE      │ TRANSITION  │ NOW         │
│             │             │             │
│ Old village │ Evacuation  │ New layout  │
│ Farms       │ Moving      │ Houses      │
│ Homes       │ Demolition  │ Amenities   │
└─────────────┴─────────────┴─────────────┘
```

Every image should have its date.

---

# 17. Ground Reality

Separate this from opinion.

### Categories

**Housing**

**Pattas**

**Water**

**Electricity**

**Roads**

**Livelihood**

**Safety**

**Transport**

**Agriculture**

**Temple**

**Education**

**Healthcare**

Each issue:

```text
ISSUE #GC-023

Village:
Gundancharla

Category:
Patta

Reported:
15 Sep 2026

Evidence:
3 documents
6 photographs
12 family reports

Status:
Verification / Open

Official response:
None recorded
```

---

# 18. Evidence Viewer

This is critical.

When somebody reads:

> “Families are still waiting for pattas.”

They should be able to click:

### `View Evidence`

and see:

* source document
* date
* village
* photograph
* representation
* acknowledgement
* response

This makes the website defensible.

---

# 19. Content Status

Every post gets a status.

### Draft

Not public.

### Under Review

Admin checking.

### Published

Approved for public display.

### Verified

Evidence checked.

### Community Report

Published as a community statement.

### Disputed

Conflicting information exists.

### Updated

Original content changed with history preserved.

---

# 20. Government Response

Create a dedicated area.

```text
ISSUE
   ↓
REPRESENTATION
   ↓
ACKNOWLEDGEMENT
   ↓
OFFICIAL RESPONSE
   ↓
ACTION
   ↓
STATUS
```

This is much stronger than simply criticizing authorities.

---

# 21. Data Model

### `Village`

```ts
Village {
  id
  nameEn
  nameTe
  slug
  descriptionEn
  descriptionTe
  location
  status
  createdAt
  updatedAt
}
```

### `Content`

```ts
Content {
  id
  type
  titleEn
  titleTe
  summaryEn
  summaryTe
  bodyEn
  bodyTe
  villageId
  categoryId
  publishedAt
  status
  authorId
  createdAt
  updatedAt
}
```

### `SocialPost`

```ts
SocialPost {
  id
  platform
  url
  externalId
  title
  description
  thumbnailUrl
  publishedAt
  metadata
  contentId
}
```

Platforms:

```ts
YOUTUBE
INSTAGRAM
FACEBOOK
WHATSAPP
OTHER
```

### `Media`

```ts
Media {
  id
  type
  storageKey
  originalUrl
  thumbnailUrl
  villageId
  captionEn
  captionTe
  capturedAt
  uploadedAt
  verificationStatus
  consentStatus
}
```

### `Issue`

```ts
Issue {
  id
  villageId
  category
  titleEn
  titleTe
  descriptionEn
  descriptionTe
  status
  priority
  reportedAt
  verifiedAt
  createdBy
}
```

### `Evidence`

```ts
Evidence {
  id
  type
  title
  sourceUrl
  documentId
  mediaId
  issueId
  verificationStatus
  verifiedBy
  verifiedAt
}
```

### `Representation`

```ts
Representation {
  id
  villageId
  title
  submittedTo
  submittedAt
  acknowledgementNo
  documentId
  responseStatus
  responseDate
}
```

### `GovernmentResponse`

```ts
GovernmentResponse {
  id
  representationId
  authority
  responseDate
  responseText
  documentId
  status
}
```

### `TimelineEvent`

```ts
TimelineEvent {
  id
  villageId
  projectId
  date
  titleEn
  titleTe
  descriptionEn
  descriptionTe
  sourceUrl
  evidenceId
}
```

---

# 22. API

### Content

```http
GET /api/content
GET /api/content/:slug
POST /api/admin/content
PATCH /api/admin/content/:id
DELETE /api/admin/content/:id
```

### Villages

```http
GET /api/villages
GET /api/villages/:slug
```

### Social

```http
POST /api/admin/social/import
GET /api/social/youtube
GET /api/social/instagram
```

### Media

```http
POST /api/admin/media/upload
GET /api/media
DELETE /api/admin/media/:id
```

### Issues

```http
GET /api/issues
GET /api/issues/:id
POST /api/issues
PATCH /api/admin/issues/:id
```

### Evidence

```http
POST /api/admin/evidence
GET /api/evidence/:id
PATCH /api/admin/evidence/:id
```

### Representations

```http
GET /api/representations
POST /api/admin/representations
PATCH /api/admin/representations/:id
```

---

# 23. Automatic YouTube Sync

Recommended architecture:

```text
YouTube Channel
      ↓
YouTube API
      ↓
Scheduled Sync
      ↓
Compare video IDs
      ↓
New video?
      ↓ YES
Create pending content
      ↓
Admin review
      ↓
Publish
```

Don't automatically publish every discovered video.

Use:

**Auto-import → Human review → Publish**

The YouTube API supports retrieving channel uploads through channel/playlist resources, making this architecture practical. ([Google for Developers][2])

---

# 24. Social Content Aggregator

Create one admin screen:

# Content Inbox

```text
NEW CONTENT

🔴 YouTube
3 new videos

🟣 Instagram
5 submitted links

🟢 WhatsApp
12 submissions

📷 Uploaded
18 photographs

📄 Documents
4 files
```

Admin can process everything from one location.

---

# 25. Admin Content Review

For each item:

```text
SOURCE
YouTube

TITLE
Veligonda Water Release

VILLAGE
Project-wide

CATEGORY
Development

LANGUAGE
Telugu + English

EVIDENCE
Official video

[ Edit ]
[ Verify ]
[ Publish ]
[ Reject ]
```

---

# 26. Search

Global search:

```text
Search:
"గుండంచర్ల"

Results:
Articles
Videos
Photos
Documents
Issues
Timeline
Representations
```

Search both Telugu and English.

---

# 27. Multilingual Architecture

Don't store Telugu and English as separate pages.

Use:

```text
titleTe
titleEn

bodyTe
bodyEn
```

URL:

```text
/te/villages/gundancharla
/en/villages/gundancharla
```

---

# 28. Folder Structure

```text
veligonda-portal/
│
├── app/
│   ├── [locale]/
│   │   ├── page.tsx
│   │   ├── project/
│   │   ├── villages/
│   │   ├── timeline/
│   │   ├── development/
│   │   ├── rehabilitation/
│   │   ├── reality/
│   │   ├── evidence/
│   │   ├── documents/
│   │   ├── updates/
│   │   └── issues/
│   │
│   ├── admin/
│   │   ├── dashboard/
│   │   ├── content/
│   │   ├── social/
│   │   ├── media/
│   │   ├── villages/
│   │   ├── issues/
│   │   ├── evidence/
│   │   ├── representations/
│   │   └── users/
│   │
│   └── api/
│       ├── content/
│       ├── villages/
│       ├── social/
│       ├── media/
│       ├── issues/
│       ├── evidence/
│       └── representations/
│
├── components/
│   ├── home/
│   ├── village/
│   ├── project/
│   ├── timeline/
│   ├── social/
│   ├── media/
│   ├── evidence/
│   ├── issues/
│   └── admin/
│
├── lib/
│   ├── db/
│   ├── youtube/
│   ├── instagram/
│   ├── media/
│   ├── verification/
│   └── search/
│
├── prisma/
│   └── schema.prisma
│
├── public/
│   ├── logos/
│   └── icons/
│
└── docs/
    ├── PRD.md
    ├── ARCHITECTURE.md
    ├── CONTENT_POLICY.md
    ├── EVIDENCE_POLICY.md
    └── API.md
```

---

# 29. Development Phases

## Phase 1 — Foundation

* Next.js
* TypeScript
* Tailwind
* PostgreSQL
* Prisma
* authentication
* admin
* bilingual framework

## Phase 2 — Public portal

* homepage
* project
* villages
* Gundancharla
* timeline
* development dashboard

## Phase 3 — Content

* blog
* photos
* videos
* documents
* YouTube integration
* Instagram URL ingestion

## Phase 4 — Evidence

* issues
* evidence
* representations
* government responses
* verification

## Phase 5 — Community

* submissions
* family surveys
* WhatsApp workflow
* contributor accounts

## Phase 6 — Live system

* scheduled YouTube synchronization
* notifications
* search
* analytics
* PWA

---

# 30. Coding-Agent Prompt

Give your coding agent this as the master instruction:

```text
You are the senior full-stack engineer responsible for building
VeligondaStories.

Build a production-grade, bilingual Telugu/English, mobile-first
Next.js application using TypeScript.

The platform documents:
- Veligonda Project development
- water and infrastructure
- affected villages
- Gundancharla
- displacement
- rehabilitation
- pattas
- housing
- amenities
- community issues
- photographs
- videos
- documents
- representations
- government responses
- YouTube content
- Instagram content
- community submissions

Core principles:

1. Never invent data.
2. Every factual claim should have a source where practical.
3. Clearly distinguish official information from community reports.
4. Never publish private personal information.
5. Preserve historical versions of content.
6. Do not automatically publish imported social content.
7. Imported content must enter an admin review queue.
8. Support Telugu and English throughout.
9. Design mobile-first because WhatsApp sharing is a primary traffic source.
10. Keep the architecture modular and scalable.

Technical stack:

Next.js
TypeScript
Tailwind CSS
PostgreSQL
Prisma
Object storage
MapLibre
OAuth/admin authentication
GitHub Actions

Implement the project incrementally.

First inspect the repository and existing architecture.

Before modifying code:
- identify current framework
- identify package manager
- identify database setup
- identify authentication
- identify existing design system
- identify deployment configuration
- identify environment variables

Do not replace an existing working architecture unnecessarily.

Create:
- public portal
- admin portal
- database schema
- API layer
- media system
- content system
- evidence system
- village system
- issue system
- representation system
- social content ingestion
- bilingual routing

YouTube:
- support URL import
- extract video ID
- fetch public metadata through YouTube Data API
- store external ID
- avoid duplicate imports
- schedule channel synchronization
- place new items in review queue
- never auto-publish without configuration

Instagram:
- support URL submission/import
- use supported Meta/Instagram mechanisms where available
- do not scrape private content
- provide manual media-upload fallback
- preserve original Instagram URL
- put imported content into review queue

WhatsApp:
- do not scrape private groups
- support admin/community submission workflow
- allow photos/videos/documents to be uploaded to the portal
- store source as WhatsApp/community submission
- require review before publication

Create automated tests for:
- duplicate social imports
- village relationships
- content publishing
- evidence status
- bilingual content
- permissions
- media uploads
- API authorization
- admin workflows

Create:
docs/PRD.md
docs/ARCHITECTURE.md
docs/API.md
docs/DATABASE.md
docs/CONTENT_POLICY.md
docs/EVIDENCE_POLICY.md
docs/SOCIAL_INTEGRATION.md

Do not proceed to destructive database migrations without explicit approval.

After implementation, provide:
- files changed
- migrations
- environment variables required
- API endpoints
- tests
- known limitations
- deployment steps
```

---

# 31. Your Content Workflow

Once the system exists, **you don't need to be a developer to keep it alive**.

You can send me or your admin:

> YouTube: `[link]`
> Instagram: `[link]`
> Village: Gundancharla
> Category: Ground Reality
> Date: 16 Sep 2026
> Description: Families waiting for pattas in the new layout.
> Photos: `[files]`

The admin system turns that into:

```text
Article
+
YouTube
+
Instagram
+
Photos
+
Village page update
+
Timeline event
+
Issue
```

That is the key difference between a normal website and the **living public archive** you're describing.

---

## One architectural decision I strongly recommend

**Don't make social media the source of truth.**

Make the website the source of truth and social media the **distribution layer**:

```text
                    WEBSITE
                 MASTER RECORD
                       ↑
        ┌──────────────┼──────────────┐
        │              │              │
     YouTube       Instagram       WhatsApp
        │              │              │
      reach          reach          community
```

That way, if an Instagram Reel disappears, a YouTube video changes, or a WhatsApp message gets buried, **the underlying story, evidence, photographs, dates and documents remain in your archive.**

And because you're going to provide the actual inauguration videos, village photographs, videos of current layouts, old village photographs, social-media links and documents, we can build each story around **real source material rather than generic content**.

### Sources for the integration design

* [YouTube Data API documentation](https://developers.google.com/youtube/v3/docs?utm_source=chatgpt.com) — official API reference. ([Google for Developers][1])
* [YouTube Data API getting started](https://developers.google.com/youtube/v3/getting-started?utm_source=chatgpt.com) — API credentials, OAuth and setup. ([Google for Developers][3])
* [YouTube video resources](https://developers.google.com/youtube/v3/docs/videos?utm_source=chatgpt.com) — video metadata, thumbnails, publication information and statistics. ([Google for Developers][4])

[1]: https://developers.google.com/youtube/v3/docs?utm_source=chatgpt.com "API Reference  |  YouTube Data API  |  Google for Developers"
[2]: https://developers.google.com/youtube/v3/guides/implementation/videos?utm_source=chatgpt.com "Implementation: Videos  |  YouTube Data API  |  Google for Developers"
[3]: https://developers.google.com/youtube/v3/getting-started?utm_source=chatgpt.com "YouTube Data API Overview  |  Google for Developers"
[4]: https://developers.google.com/youtube/v3/docs/videos?utm_source=chatgpt.com "Videos  |  YouTube Data API  |  Google for Developers"
