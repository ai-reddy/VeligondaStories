# VeligondaStories
## Complete Software Development Specification
### Public Development, Village History, Displacement, Rehabilitation & Evidence Platform

**Project Name:** VeligondaStories
**Suggested brand:** VeligondaStories
**Primary language:** Telugu + English
**Primary focus:** Veligonda Project, affected villages, people, development, displacement, rehabilitation, evidence and live updates
**Flagship village:** Gundancharla (గుండంచర్ల)
**Document status:** Product + Technical Specification

---

# 1. Product Vision

VeligondaStories is a public, bilingual, mobile-first digital archive and live information platform documenting the complete story around the Poola Subbaiah Veligonda Project.

The platform should show both:

### Development
- Project history
- Reservoir
- Tunnels
- Canals
- Water flow
- Irrigation
- Drinking-water objectives
- Construction milestones
- Inauguration
- Official announcements
- Development photographs and videos

### People
- Affected/submerged villages
- Village histories
- Homes and livelihoods
- Agriculture
- Temples and cultural landmarks
- Displacement
- Rehabilitation and resettlement
- Pattas
- House sites
- Housing
- Basic amenities
- Family stories
- Current ground-level information

### Evidence
- Government Orders
- Official announcements
- Government documents
- CAG reports
- Court documents
- Representations
- Acknowledgements
- Government responses
- Media reports
- Photographs
- Videos
- Community reports
- Field verification

Core principle:

> **Show the development. Document the sacrifice. Preserve the evidence. Keep the stories alive.**

---

# 2. Brand

## Name

# VeligondaStories

## Suggested tagline

### English
**Every Village. Every Story. Every Record.**

Alternative:

**Development • People • Reality • Evidence**

### Telugu
**ప్రతి ఊరు • ప్రతి కథ • ప్రతి ఆధారం**

Alternative:

**అభివృద్ధి • ప్రజలు • వాస్తవం • ఆధారాలు**

---

# 3. Product Positioning

VeligondaStories should NOT be positioned as:

- a political party website
- a protest website
- an anti-government website
- a news organization unless formally operated as one
- a site that declares allegations to be facts

It should be positioned as:

> **A public-interest documentation platform preserving the development story, village histories, displacement experience, rehabilitation information, evidence and continuing updates related to the Veligonda Project.**

The platform should distinguish:

1. Officially verified information
2. Document-verified information
3. Field-verified information
4. Media reporting
5. Community-reported information
6. Unverified information

Never silently convert one category into another.

---

# 4. Current Project Context

The official Markapuram District website identifies the Poola Subbaiah Veligonda Project as consisting of the Nallamala Sagar Reservoir, three gaps in the Nallamala Hill Ranges — Sunkesula, Gottipadia and Kakarla — twin tunnels, a feeder canal and three canals: Teegaleru, Gottipadia and Eastern Main Canal. It states that the project was declared in 2005 and 2008 and lists submerged habitations including Kalanuthala, Gundamcherla, Chintalamudipi, Katamraju Thanda, Sunkesula, Sairam Nagar and Ramalingeswarapuram/Mettugondi. The full official list should be retrieved and maintained as source data rather than manually invented.

Recent 2026 reporting described substantial R&R disbursement and continuing rehabilitation concerns. Different reports give different beneficiary and payment figures at different dates, so the website must preserve the date and source for every number rather than displaying one number as timeless truth.

The CAG has an official Compliance Audit Report on the Poola Subbaiah Veligonda Project with separate sections covering financial/environmental aspects, tunnels and feeder canal, Nallamala Sagar reservoir/link canal, and canal/distribution systems. The CAG report should form part of the site's primary-document library.

---

# 5. Primary Objectives

## Objective 1
Create a permanent digital archive of affected villages.

## Objective 2
Document project development and benefits.

## Objective 3
Document displacement and rehabilitation.

## Objective 4
Preserve original photographs, videos and documents.

## Objective 5
Create a searchable public evidence trail.

## Objective 6
Publish live updates through an editorial workflow.

## Objective 7
Integrate YouTube and Instagram content.

## Objective 8
Create a controlled workflow for WhatsApp/community submissions.

## Objective 9
Provide bilingual Telugu/English access.

## Objective 10
Build a trustworthy public record that can be updated over many years.

---

# 6. Information Architecture

```text
VeligondaStories
│
├── Home
│
├── Project
│   ├── Overview
│   ├── History
│   ├── Reservoir
│   ├── Tunnels
│   ├── Canals
│   ├── Water
│   ├── Development
│   └── Milestones
│
├── Villages
│   ├── Gundancharla
│   ├── Kalanuthala
│   ├── Chintalamudipi
│   ├── Katamraju Thanda
│   ├── Sunkesula
│   ├── Sairam Nagar
│   ├── Ramalingeswarapuram / Mettugondi
│   ├── Krishna Nagar
│   ├── Lakshmipuram / Pottibasavayapalli
│   ├── Akkacheruvu
│   └── Gottipadiya
│
├── Displacement
│   ├── Timeline
│   ├── Before
│   ├── Transition
│   └── After
│
├── Rehabilitation
│   ├── R&R
│   ├── Pattas
│   ├── House Sites
│   ├── Housing
│   ├── Amenities
│   └── Issues
│
├── Ground Reality
│   ├── Issues
│   ├── Family Stories
│   ├── Field Reports
│   └── Before & After
│
├── Evidence
│   ├── Documents
│   ├── Photos
│   ├── Videos
│   ├── Government Records
│   ├── Court Records
│   └── Media Archive
│
├── Updates
│   ├── Blog
│   ├── YouTube
│   ├── Instagram
│   └── Community Updates
│
└── About
    ├── Methodology
    ├── Editorial Policy
    ├── Evidence Policy
    ├── Privacy
    └── Contact
```

---

# 7. Homepage Wireframe

```text
┌──────────────────────────────────────────────┐
│ VELIGONDASTORIES             తెలుగు | EN     │
│ Home Project Villages Stories Evidence       │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│                                              │
│       VELIGONDASTORIES                       │
│                                              │
│  Every Village. Every Story. Every Record.   │
│                                              │
│  [Explore Project] [Explore Villages]        │
│                                              │
│      HERO VIDEO / PROJECT IMAGES             │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ THE PROJECT                                  │
│ Water • Reservoir • Tunnels • Canals         │
│ [Explore Development]                        │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ AFFECTED VILLAGES                             │
│ [Gundancharla] [Kalanuthala] [Sunkesula] ... │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ BEFORE → DISPLACEMENT → TODAY                │
│ Interactive story / photo slider              │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ LATEST STORIES                               │
│ Blog | YouTube | Instagram | Community       │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ R&R / REHABILITATION                         │
│ Pattas | House Sites | Housing | Amenities   │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ DOCUMENTS & EVIDENCE                         │
│ Government | CAG | Court | Community         │
└──────────────────────────────────────────────┘
```

---

# 8. Home Page Requirements

The home page must communicate the entire concept in under five minutes.

Required sections:

1. Hero
2. Project overview
3. Development dashboard
4. Affected villages
5. Latest updates
6. Before/after story
7. Rehabilitation summary
8. Ground reality
9. Latest videos
10. Latest photographs
11. Documents
12. Call-to-action to explore village stories

Do not use unverified statistics in hero counters.

---

# 9. Project Page

## URL

`/en/project`

`/te/project`

Sections:

### Project Overview
- official project name
- purpose
- water source
- reservoir
- tunnels
- canals
- irrigation
- drinking-water objectives

### History
- historical milestones
- government orders
- construction milestones

### Development
- engineering
- water
- reservoir
- canals
- inauguration
- official announcements

### Documents
- official sources
- CAG
- government documents

Every important statement must carry a source/date.

---

# 10. Village Directory

Each village receives a permanent SEO-friendly page.

Example:

`/en/villages/gundancharla`

`/te/villages/gundancharla`

Each page:

```text
Village Header
↓
About
↓
History
↓
Before Displacement
↓
Displacement Timeline
↓
R&R
↓
New Layout
↓
Current Status
↓
Photos
↓
Videos
↓
Documents
↓
Issues
↓
Family Stories
↓
Latest Updates
```

---

# 11. Gundancharla Flagship Page

## Title

**Gundancharla (గుండంచర్ల) — Veligonda Project Village Story**

SEO title:

**Gundancharla Village | Veligonda Project, Displacement, R&R & Ground Reality**

Sections:

### 11.1 Village History
- history
- people
- agriculture
- livelihoods
- temple
- community life

### 11.2 Before
- old photographs
- homes
- farms
- streets
- public buildings
- festivals
- cultural memories

### 11.3 Displacement
- notices
- compensation
- R&R
- evacuation
- transition
- village closure/submergence

### 11.4 New Layout
- map
- house sites
- houses
- roads
- water
- electricity
- lighting
- drainage
- safety
- temple
- public facilities

### 11.5 Current Reality
- verified status
- family survey
- issues
- evidence

### 11.6 Stories
- elders
- farmers
- women
- families
- children
- livelihoods

All stories require consent.

---

# 12. Displacement Timeline

Interactive timeline:

```text
Project Decision
      ↓
Land / Acquisition
      ↓
R&R Process
      ↓
Compensation
      ↓
Communication
      ↓
Village Transition
      ↓
Evacuation
      ↓
Water / Submergence
      ↓
New Layout
      ↓
Current Status
```

Each event:

```text
date
title
description
village
authority/source
document
photographs
video
verification status
```

Never infer an exact date when the evidence does not establish one.

---

# 13. Before / During / After

Create a visual storytelling system.

### BEFORE
Village life.

### DURING
Displacement and transition.

### AFTER
New layouts and present situation.

Image cards should show:

- date
- village
- location if safe
- photographer/source
- description

---

# 14. Development Dashboard

The site must document positive project achievements as well.

Categories:

- Reservoir
- Water
- Tunnels
- Canals
- Irrigation
- Drinking Water
- Engineering
- Project Milestones
- Inauguration

Status labels:

- Completed
- Operational
- Under Construction
- Announced
- Reported
- Verification Pending

Do not create arbitrary completion percentages.

---

# 15. Water Story

Create:

`/project/water`

Sections:

- Water source
- Tunnel journey
- Feeder canal
- Reservoir
- Water inflow
- Reservoir filling
- Water release
- Irrigation

Timeline:

```text
SOURCE
 ↓
TUNNEL
 ↓
FEEDER CANAL
 ↓
NALLAMALA SAGAR
 ↓
CANALS
 ↓
AYACUT
```

Add date-stamped photographs and videos.

---

# 16. Latest Updates

This is the live content engine.

URL:

`/updates`

Filters:

- All
- Project
- Village
- R&R
- Ground Reality
- Government
- Documents
- YouTube
- Instagram
- Community

Each post:

```text
Title
Date
Village
Category
Author
Summary
Body
Images
Videos
Sources
Evidence
Related issue
Related village
```

---

# 17. Content Types

```text
BLOG
YOUTUBE
INSTAGRAM
PHOTO
VIDEO
DOCUMENT
NEWS
GOVERNMENT_UPDATE
COMMUNITY_UPDATE
FIELD_REPORT
FAMILY_STORY
TIMELINE_EVENT
PROJECT_MILESTONE
```

---

# 18. YouTube Integration

Admin provides:

`https://youtube.com/watch?v=...`

System:

1. Parse video ID
2. Fetch permitted metadata through YouTube Data API
3. Store video ID
4. Store title
5. Store thumbnail
6. Store channel
7. Store published date
8. Store URL
9. Associate village/category
10. Create draft content
11. Admin reviews
12. Publish

Never automatically publish imported videos.

---

# 19. YouTube Channel Sync

Optional scheduled process:

```text
YouTube Channel
      ↓
API
      ↓
Scheduled Sync
      ↓
New Video?
      ↓
YES
      ↓
Create Draft
      ↓
Admin Review
      ↓
Publish
```

Use environment variables:

```text
YOUTUBE_API_KEY
YOUTUBE_CHANNEL_ID
```

Do not commit keys to Git.

---

# 20. Instagram Integration

Use two modes.

## Mode A — Link Import

Admin pastes:

`https://www.instagram.com/reel/...`

Store:

- original URL
- caption
- date
- source
- village
- category
- description
- embed/reference where supported

## Mode B — Manual Upload

Admin uploads the actual media and stores the original Instagram URL.

Do not scrape private Instagram content.

Do not assume every Instagram URL can be programmatically downloaded.

Use supported Meta/Instagram mechanisms where available.

---

# 21. WhatsApp Integration

Do not scrape private WhatsApp groups.

Use WhatsApp as a community input channel.

Workflow:

```text
WhatsApp Group
      ↓
Community Member
      ↓
Admin receives media/link/document
      ↓
Upload to VeligondaStories
      ↓
Review
      ↓
Evidence classification
      ↓
Publish
```

Create a:

**Submit an Update**

button.

---

# 22. Content Inbox

Admin dashboard:

```text
CONTENT INBOX

YouTube          3
Instagram        5
WhatsApp        12
Photos          18
Videos           7
Documents        4

[Review Queue]
```

---

# 23. Admin Dashboard

```text
------------------------------------------------
VELIGONDASTORIES ADMIN
------------------------------------------------

Posts                 248
Drafts                 21
Pending Review         14
Verified Evidence      96
Open Issues             43
Representations         18
Government Responses     6
Villages                11
------------------------------------------------

CONTENT INBOX

YouTube                 3
Instagram               5
Community              12
------------------------------------------------
```

---

# 24. Admin Roles

## Super Admin
Everything.

## Editor
Create/edit/publish content.

## Evidence Reviewer
Verify evidence.

## Village Coordinator
Manage one or more village pages.

## Contributor
Submit content only.

## Viewer
Read-only administrative access.

---

# 25. Content Review Workflow

```text
SUBMITTED
   ↓
DRAFT
   ↓
UNDER REVIEW
   ↓
EVIDENCE CHECK
   ↓
APPROVED
   ↓
PUBLISHED
   ↓
UPDATED
```

Rejected content remains archived internally with reason.

---

# 26. Evidence Classification

### Officially Verified
Direct official source.

### Document Verified
Supporting document reviewed.

### Field Verified
Field evidence reviewed.

### Multiple Community Reports
Multiple independent reports.

### Community Report
Individual report.

### Media Report
Published by media.

### Verification Pending
Insufficient evidence.

The UI must visibly display this status.

---

# 27. Evidence Model

Every important claim can connect to:

```text
Claim
 ↓
Evidence
 ├── Document
 ├── Photo
 ├── Video
 ├── Official URL
 ├── Media URL
 └── Field Report
```

---

# 28. Reality vs Public Information

Avoid labels such as “fake government information” unless independently established.

Use:

# Public Information vs Ground Evidence

Example:

```text
PUBLIC INFORMATION
Source:
Official / Media

GROUND EVIDENCE
Source:
Family / Field / Document

STATUS
Verified / Partial / Disputed / Pending
```

This is more defensible and more useful.

---

# 29. Issues Tracker

URL:

`/issues`

Categories:

- Pattas
- Housing
- House Sites
- Water
- Electricity
- Roads
- Lighting
- Safety
- Livelihood
- Agriculture
- Transport
- Temple
- Education
- Health
- R&R
- Compensation
- Eligibility

Issue record:

```text
Issue ID
Village
Category
Title
Description
Reported Date
Evidence
Status
Last Verified
Official Response
Related Representation
```

Statuses:

```text
Reported
Under Verification
Verified
Submitted
Response Received
Action Pending
Resolved
Closed
Disputed
```

---

# 30. Family Information

Maintain family-level information privately.

Public site should show aggregate statistics only.

Private fields can include:

```text
Family ID
Village
Family Head
Members
Displaced Status
R&R Status
Patta Status
House Status
House Site
Amenities
Livelihood
Compensation
Issue IDs
Consent
```

Never publish:

- Aadhaar
- bank details
- signatures
- OTP
- private documents
- private phone numbers
- children's personal information

unless there is explicit lawful consent and a compelling reason.

---

# 31. Family Stories

Create narrative pages only with consent.

Example:

**A Farmer's Story — Gundancharla**

Include:

- photograph
- person's own words
- village
- occupation
- old home
- transition
- present situation
- hopes/concerns

Clearly label:

**First-person account**

Do not rewrite a person's words in a way that changes their meaning.

---

# 32. Representations

Create a public tracking system.

```text
Representation
      ↓
Submitted
      ↓
Acknowledgement
      ↓
Department
      ↓
Response
      ↓
Action
      ↓
Current Status
```

Public record:

```text
Representation ID
Date
Submitted To
Subject
Villages
Document
Acknowledgement
Response
Status
```

Private personal details remain restricted.

---

# 33. Government Response

Dedicated section:

# Official Responses

If an authority provides a response, publish it accurately.

If there is no response:

**No response recorded as of [date].**

Do not state:

**“Government ignored us.”**

unless supported by documented facts and appropriate context.

---

# 34. Documents

Categories:

- Government Orders
- Gazette
- R&R
- Land Acquisition
- Pattas
- House Sites
- Project Documents
- CAG
- Court Orders
- Representations
- Acknowledgements
- Government Responses
- Media

Document metadata:

```text
Title
Document Number
Date
Authority
Category
Villages
Source URL
PDF
Summary
Related Issues
```

---

# 35. CAG Library

Create a dedicated:

`/documents/cag`

The official CAG portal has a Compliance Audit Report on the Poola Subbaiah Veligonda Project, including chapters on financial/environmental aspects, tunnels/feeder canal, Nallamala Sagar reservoir/link canal and canal/distribution systems.

Store the official source URL and PDF.

Do not alter the original document.

---

# 36. Search Engine Architecture

Primary pillar:

`/veligonda-project`

Village clusters:

```text
/villages/gundancharla
/villages/kalanuthala
/villages/sunkesula
...
```

Topic clusters:

```text
/rehabilitation
/rehabilitation/pattas
/rehabilitation/housing
/displacement
/project/water
/project/tunnels
/project/reservoir
/ground-reality
```

Content:

```text
/updates/...
/stories/...
/videos/...
/documents/...
```

Every page links to related pages.

---

# 37. SEO Metadata

Homepage:

**Title:**
VeligondaStories | Veligonda Project, Villages, People & Stories

**Description:**
VeligondaStories documents the Poola Subbaiah Veligonda Project, affected villages, development, displacement, rehabilitation, R&R, pattas, housing, photographs, videos, documents and ground-level stories.

Gundancharla:

**Title:**
Gundancharla Village | Veligonda Project, Displacement, R&R & Stories

R&R:

**Title:**
Veligonda R&R | Rehabilitation, Pattas, Housing & Affected Families

Project:

**Title:**
Veligonda Project | Poola Subbaiah Project, Water, Villages & Development

---

# 38. SEO Keyword Groups

## Project
- Veligonda Project
- Poola Subbaiah Veligonda Project
- Veligonda Project 2026
- Veligonda Phase 1
- Veligonda water
- Veligonda reservoir
- Veligonda tunnels
- Veligonda irrigation project

## People
- Veligonda affected families
- Veligonda displaced families
- Veligonda oustees
- Veligonda villages
- Veligonda project affected villages

## R&R
- Veligonda R&R
- Veligonda rehabilitation
- Veligonda rehabilitation and resettlement
- Veligonda compensation
- Veligonda pattas
- Veligonda house sites
- Veligonda displaced villages

## Gundancharla
- Gundancharla
- Gundancharla village
- Gundamcherla
- Gundancharla Veligonda Project
- Gundancharla displacement
- Gundancharla rehabilitation
- Gundancharla pattas
- Gundancharla new layout
- Gundancharla village history

Use natural language. Do not keyword-stuff.

---

# 39. Telugu SEO

Examples:

- వెలిగొండ ప్రాజెక్టు
- పూల సుబ్బయ్య వెలిగొండ ప్రాజెక్టు
- వెలిగొండ నిర్వాసితులు
- వెలిగొండ పునరావాసం
- వెలిగొండ ఆర్ అండ్ ఆర్
- వెలిగొండ పట్టాలు
- వెలిగొండ ప్రభావిత గ్రామాలు
- గుండంచర్ల
- గుండంచర్ల గ్రామం
- గుండంచర్ల పునరావాసం
- గుండంచర్ల నిర్వాసితులు

---

# 40. Social Sharing

Every article must have:

- WhatsApp
- Instagram share/copy link
- Facebook
- X
- Telegram
- Copy link

Generate Open Graph:

```text
Title
Description
Village
Hero Image
Date
```

Create separate Telugu/English social cards.

---

# 41. YouTube Content Page

URL:

`/videos/veligonda-water-release`

Contains:

- embedded video
- title
- date
- channel
- description
- transcript where legally/technically appropriate
- related photos
- related village
- related timeline event
- related documents
- related articles

---

# 42. Instagram Content Page

URL:

`/social/gundancharla-new-layout`

Contains:

- original Instagram URL/embed where supported
- caption
- description
- village
- date
- related photographs
- related issue
- evidence status

---

# 43. Media Gallery

Filters:

```text
Village
Year
Category
Before
During
After
Project
Water
Displacement
Housing
R&R
People
```

Image cards:

```text
Photo
Caption
Village
Date
Source
Verification
```

---

# 44. Video Library

Filters:

- Project
- Village
- Water
- Inauguration
- Displacement
- R&R
- Family Stories
- Ground Reality
- Government
- Media

Sources:

- YouTube
- Instagram
- Uploaded
- Community

---

# 45. Map

Map layers:

```text
Affected Villages
Old Villages
New Layouts
Reservoir
Tunnels
Canals
Photographs
Issues
Public Facilities
```

Do not expose exact private family locations.

---

# 46. Data Dashboard

Possible cards:

```text
Affected Villages
Official Project Figures
R&R Figures
Patta Status
Housing Status
Amenities
Open Issues
Representations
Government Responses
```

Every number needs:

**Source + Date + Definition**

For example:

> Affected families: 7,321<br />
> Source: report dated 9 Aug 2026<br />
> Definition: project-affected families identified by district authorities in that report.

If another source later says 7,500, show both with dates rather than silently replacing one.

---

# 47. Database Schema

Core tables:

```text
User
Role
Village
Project
ProjectMilestone
Content
Category
Tag
Media
SocialPost
YouTubeVideo
InstagramPost
Document
Evidence
Claim
Issue
Family
FamilyIssue
RREntitlement
HousingRecord
Amenity
Representation
GovernmentResponse
TimelineEvent
WaterEvent
Story
Source
Consent
AuditLog
```

Relationships:

```text
Project
 ├── Villages
 ├── Milestones
 ├── WaterEvents
 └── Documents

Village
 ├── Content
 ├── Families
 ├── Issues
 ├── Media
 ├── Stories
 ├── TimelineEvents
 └── Documents

Content
 ├── Media
 ├── SocialPost
 ├── Evidence
 ├── Sources
 └── Issues
```

---

# 48. Prisma Model Direction

Example:

```prisma
model Village {
  id          String   @id @default(cuid())
  slug        String   @unique
  nameEn      String
  nameTe      String
  descriptionEn String?
  descriptionTe String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  contents    Content[]
  issues      Issue[]
  media       Media[]
  stories     Story[]
  documents   Document[]
  timeline    TimelineEvent[]
}
```

Additional models should follow the same normalized structure.

Do not store all content as one giant JSON document.

---

# 49. API Specification

## Public

```http
GET /api/v1/villages
GET /api/v1/villages/:slug
GET /api/v1/content
GET /api/v1/content/:slug
GET /api/v1/issues
GET /api/v1/issues/:id
GET /api/v1/documents
GET /api/v1/evidence/:id
GET /api/v1/timeline
GET /api/v1/media
GET /api/v1/videos
```

## Admin

```http
POST /api/v1/admin/content
PATCH /api/v1/admin/content/:id

POST /api/v1/admin/media
POST /api/v1/admin/documents

POST /api/v1/admin/evidence
PATCH /api/v1/admin/evidence/:id

POST /api/v1/admin/issues
PATCH /api/v1/admin/issues/:id

POST /api/v1/admin/representations
PATCH /api/v1/admin/representations/:id
```

## Social

```http
POST /api/v1/admin/social/youtube/import
POST /api/v1/admin/social/instagram/import
POST /api/v1/admin/social/sync/youtube
```

---

# 50. API Security

Requirements:

- Authentication
- Authorization
- CSRF protection where applicable
- Rate limiting
- Input validation
- File type validation
- File size limits
- Malware scanning where available
- Signed object-storage URLs
- Audit logging
- Admin MFA
- No secrets in source control

---

# 51. File Storage

Recommended:

- S3-compatible object storage
- Cloudflare R2 or AWS S3

Structure:

```text
media/
  villages/
    gundancharla/
  project/
  water/
  displacement/
  documents/
  videos/
```

Generate thumbnails.

Keep original files private where appropriate.

---

# 52. Content Delivery

Use CDN for:

- images
- thumbnails
- public documents
- video thumbnails

Use optimized image formats:

- AVIF
- WebP

Preserve original upload separately.

---

# 53. Admin Content Editor

Use a rich editor supporting:

- headings
- paragraphs
- quotes
- images
- galleries
- YouTube
- Instagram
- documents
- tables
- evidence cards
- timeline events
- related stories

Every embedded media item should retain source metadata.

---

# 54. Content Versioning

Never overwrite important historical content without history.

Store:

```text
Content
ContentVersion
```

Each update:

```text
Version 1
Version 2
Version 3
```

Admin can view:

**What changed?**

---

# 55. Audit Log

Record:

```text
Who
What
When
Old Value
New Value
IP/session metadata where appropriate
```

Examples:

- Published article
- Changed issue status
- Verified evidence
- Deleted media
- Changed source
- Updated village data

---

# 56. Editorial Policy

Publish this on the website:

> VeligondaStories documents project development, affected villages, displacement, rehabilitation, community experiences and supporting evidence. Information is classified according to its source and verification status. Official statements, media reports, documents and community reports are not automatically treated as equivalent. Where information is disputed or incomplete, the website identifies that status. Personal information is protected and published only where appropriate consent and public-interest justification exist.

---

# 57. Correction Policy

If something is wrong:

1. Do not silently delete the record.
2. Mark it as corrected.
3. Explain the correction.
4. Preserve the source/version history.
5. Update the date.

Example:

> **Correction — 18 Sep 2026:** The earlier article stated X based on source Y. The official document subsequently confirmed Z. The article has been updated.

---

# 58. Right of Reply

Create:

# Official Responses

If an authority or public body responds to an issue:

- publish the response
- link the original issue
- preserve the date
- do not edit the response's substantive meaning

If no response exists:

> **No official response recorded as of [date].**

---

# 59. Privacy

Never publicly display:

- Aadhaar
- bank account
- OTP
- signatures
- private identity documents
- children's sensitive details
- private phone numbers
- exact vulnerable-family locations

Family information should be aggregate unless explicit consent exists.

---

# 60. AI-Generated Media Policy

This is especially important because the project will contain many generated visual materials.

If an image is AI-generated:

> **Illustration — AI Generated**

If a photograph is real:

> **Photograph — Source / Date**

Never present an AI reconstruction as historical evidence.

---

# 61. Search

Global search:

```text
Search VeligondaStories...
```

Search:

- Telugu
- English
- villages
- people stories
- issues
- documents
- videos
- timeline
- project terms

Recommended search engine:

- PostgreSQL full-text initially
- Meilisearch / OpenSearch later

---

# 62. SEO Technical Requirements

Implement:

- SSR/SSG where appropriate
- canonical URLs
- sitemap.xml
- robots.txt
- Open Graph
- Twitter/X cards
- Schema.org
- BreadcrumbList
- Article schema
- VideoObject
- ImageObject
- Organization
- WebSite
- SearchAction where applicable

Each village page should be indexable.

Each story should have a canonical URL.

---

# 63. Structured Data

For a village story:

```json
{
  "@type": "Article",
  "headline": "...",
  "datePublished": "...",
  "dateModified": "...",
  "author": "...",
  "image": "...",
  "about": "Gundancharla"
}
```

For videos:

```json
{
  "@type": "VideoObject",
  "name": "...",
  "thumbnailUrl": "...",
  "uploadDate": "...",
  "embedUrl": "..."
}
```

Only generate structured data from real values.

---

# 64. Performance

Targets:

- Lighthouse 90+
- mobile-first
- optimized images
- lazy-load galleries
- streaming/embedded videos
- CDN
- caching
- incremental static regeneration where useful

Do not load every photograph/video on the homepage.

---

# 65. Accessibility

Support:

- keyboard navigation
- screen readers
- proper heading hierarchy
- alt text
- captions
- Telugu font rendering
- sufficient contrast
- video captions/transcripts where available

---

# 66. Analytics

Track aggregate analytics only:

- page views
- popular villages
- popular stories
- video clicks
- document downloads
- search terms
- traffic source
- language preference

Do not collect unnecessary personal information.

---

# 67. Sitemap Strategy

Generate:

```text
/sitemap.xml

/villages/gundancharla
/villages/kalanuthala
...

/updates/...
/stories/...
/documents/...
/videos/...
```

New posts automatically enter sitemap after publication.

---

# 68. Social Distribution

When an article is published:

```text
Website
   ↓
Generate social card
   ↓
Admin copies share link
   ↓
WhatsApp
Instagram
Facebook
Telegram
YouTube description
```

Automatic posting should be added only where platform APIs and account permissions support it.

---

# 69. Recommended Homepage Sections

Final order:

1. Hero
2. Latest Update
3. Project Development
4. Water Story
5. Affected Villages
6. Gundancharla Featured Story
7. Before / Displacement / Today
8. R&R Dashboard
9. Ground Reality
10. Latest Videos
11. Latest Photos
12. Documents
13. Timeline
14. Official Responses
15. About VeligondaStories

---

# 70. First MVP

Do not build everything immediately.

### MVP-1

Build:

- Home
- Project
- Villages
- Gundancharla
- Updates
- Photos
- Videos
- Documents
- Admin
- Telugu/English
- YouTube URL import
- Instagram URL storage/embed
- basic SEO

### MVP-2

Add:

- Issues
- Evidence
- Timeline
- Representations
- Government responses
- Map

### MVP-3

Add:

- Family survey
- contributor system
- WhatsApp submission
- verification workflow
- advanced dashboard

---

# 71. Initial Content to Prepare

For launch, collect:

## Project
- inauguration video
- water-release videos
- reservoir photographs
- tunnel photographs
- canal photographs
- government project information

## Villages
For each affected village:
- old photos
- village photos
- temple
- farms
- roads
- houses
- people/community life

## Displacement
- notices
- photographs
- dates
- videos
- R&R documents

## New Layout
- photographs
- houses
- roads
- water
- electricity
- lighting
- public facilities

## Gundancharla
Create the largest initial story.

---

# 72. First 20 Articles

Recommended launch content:

1. What is the Veligonda Project?
2. History of Veligonda
3. Why Nallamala Sagar matters
4. How the tunnels bring water
5. Phase-I inauguration — 31 August 2026
6. The affected villages
7. Gundancharla — village history
8. Gundancharla before displacement
9. The displacement timeline
10. Gundancharla new layout
11. R&R explained
12. Pattas and house sites — status tracker
13. Before and after photographs
14. Voices from Gundancharla
15. Veligonda water journey
16. Project development photographs
17. Official documents archive
18. CAG Veligonda Project audit archive
19. Current rehabilitation issues — evidence-based
20. Latest Veligonda updates

---

# 73. Coding-Agent Master Prompt

```text
You are the senior principal full-stack engineer building
VeligondaStories.

Do not start coding blindly.

First inspect the repository and report:

1. framework
2. package manager
3. existing dependencies
4. database
5. authentication
6. UI system
7. deployment
8. environment configuration
9. existing routes
10. reusable components

Do not replace working architecture without justification.

Product:

VeligondaStories is a bilingual Telugu/English public documentation
platform for the Poola Subbaiah Veligonda Project.

It documents:
- project development
- water
- reservoir
- tunnels
- canals
- affected villages
- Gundancharla
- displacement
- rehabilitation
- R&R
- pattas
- housing
- amenities
- family stories
- photographs
- videos
- documents
- representations
- government responses
- YouTube
- Instagram
- community updates

Core rules:

1. Never invent facts.
2. Preserve source metadata.
3. Separate official information from community reports.
4. Never publish private personal information.
5. Every major factual number must have a source/date.
6. Imported social content must go through review.
7. Do not scrape private WhatsApp groups.
8. Do not scrape private Instagram content.
9. Preserve content history.
10. Support Telugu and English.
11. Mobile-first.
12. SEO-first.
13. Accessibility-first.
14. Security-first.

Build:

Public:
- Home
- Project
- Villages
- Gundancharla
- Displacement
- Rehabilitation
- Ground Reality
- Evidence
- Documents
- Photos
- Videos
- Updates
- Timeline
- About

Admin:
- Dashboard
- Content
- Social Inbox
- Media
- Villages
- Issues
- Evidence
- Documents
- Representations
- Government Responses
- Users
- Audit Log

Integrations:

YouTube:
- URL import
- metadata
- thumbnail
- external ID
- duplicate detection
- channel sync
- review queue

Instagram:
- URL import/reference
- supported embed/API mechanism
- manual upload fallback
- review queue

WhatsApp:
- community submission workflow
- no private-group scraping

Database:
Use PostgreSQL + Prisma.

Create normalized entities for:
Village
Project
Content
Media
SocialPost
Document
Evidence
Issue
Family
RREntitlement
HousingRecord
Amenity
Representation
GovernmentResponse
TimelineEvent
WaterEvent
Story
Source
Consent
AuditLog

Create API routes with authorization.

Create:
docs/PRD.md
docs/ARCHITECTURE.md
docs/API.md
docs/DATABASE.md
docs/CONTENT_POLICY.md
docs/EVIDENCE_POLICY.md
docs/SOCIAL_INTEGRATION.md

Testing:
- unit tests
- API tests
- authorization tests
- import tests
- duplicate tests
- content workflow tests
- bilingual tests
- media tests
- accessibility tests

Do not perform destructive migrations without approval.

After every implementation phase report:
- changed files
- migrations
- environment variables
- tests
- remaining work
- risks
```

---

# 74. Recommended Development Sequence

```text
STEP 1
Repository analysis

        ↓

STEP 2
Architecture + database

        ↓

STEP 3
Public UI shell

        ↓

STEP 4
Home + Project

        ↓

STEP 5
Village system

        ↓

STEP 6
Gundancharla page

        ↓

STEP 7
Content CMS

        ↓

STEP 8
YouTube

        ↓

STEP 9
Instagram

        ↓

STEP 10
Evidence + Issues

        ↓

STEP 11
Documents + R&R

        ↓

STEP 12
Timeline + Map

        ↓

STEP 13
SEO + performance

        ↓

STEP 14
Security + testing

        ↓

STEP 15
Production deployment
```

---

# 75. Launch Standard

Before public launch:

### Content
- no fabricated numbers
- no unsupported allegations
- sources attached
- Telugu checked
- English checked

### Privacy
- no Aadhaar
- no bank information
- no private signatures
- consent verified

### Technical
- HTTPS
- secure headers
- rate limits
- backups
- database migrations
- admin MFA
- audit logs

### SEO
- sitemap
- robots
- canonical
- metadata
- OG images
- structured data
- Search Console

### Media
- image optimization
- video embeds
- copyright/source attribution

---

# 76. Long-Term Vision

VeligondaStories should eventually become:

```text
                 VELIGONDASTORIES
                       │
        ┌──────────────┼──────────────┐
        │              │              │
    PROJECT         VILLAGES        PEOPLE
        │              │              │
     Water         Gundancharla      Stories
     Tunnels       Kalanuthala       Families
     Canals        Sunkesula         Memories
        │              │              │
        └──────────────┼──────────────┘
                       │
                    EVIDENCE
                       │
          ┌────────────┼────────────┐
          │            │            │
       Documents      Photos       Videos
          │            │            │
       Govt/CAG      Field        YouTube
       Court         Evidence     Instagram
          │            │            │
          └────────────┼────────────┘
                       │
                 PUBLIC ARCHIVE
```

The most important principle:

> **The website should not simply tell people what to think. It should give them enough documented information to understand what happened, what has changed, what remains unresolved, and what the affected communities themselves are saying.**

---

# 77. Final Brand Statement

## VeligondaStories

### **Every Village. Every Story. Every Record.**

**వెలిగొండ ప్రాజెక్టు — అభివృద్ధి, ప్రజలు, త్యాగం, పునరావాసం మరియు వాస్తవాల డిజిటల్ ఆర్కైవ్.**

**Development should be documented.<br />
Sacrifice should be remembered.<br />
Stories should be preserved.<br />
Evidence should remain accessible.**

<!-- End of VeligondaStories specification -->

