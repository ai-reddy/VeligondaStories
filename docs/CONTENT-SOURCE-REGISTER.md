# VeligondaStories Content and Source Register

## Purpose

This register is the intake checklist for real-world facts, media, and documents. It prevents placeholders or unsourced claims from becoming published facts.

Rules:

- Record the exact source URL/document, publisher/authority, publication date, retrieval date, language, and relevant page/section.
- Store each number as a dated claim with its definition; do not maintain one timeless “current” total.
- Record spelling variants as aliases until an authoritative spelling is selected.
- Verify reuse rights, attribution, consent, privacy, and redaction before publication.
- Keep source files unchanged; generate derivatives separately.

## Verified technical sources

| Area | Authority | Source | Verified capability | Checked |
|---|---|---|---|---|
| YouTube API | Google for Developers | https://developers.google.com/youtube/v3/docs | Public reads require an API key or OAuth; resources include videos, channels, playlists, and playlist items | 2026-09-16 |
| YouTube metadata | Google for Developers | https://developers.google.com/youtube/v3/docs/videos | Video resources expose IDs, title, description, thumbnails, channel, publication time, duration, status/embeddability, and available statistics | 2026-09-16 |
| Channel sync | Google for Developers | https://developers.google.com/youtube/v3/guides/implementation/videos | Resolve `contentDetails.relatedPlaylists.uploads`, then page through `playlistItems.list` | 2026-09-16 |
| API setup/quota | Google for Developers | https://developers.google.com/youtube/v3/getting-started | Enable the API in a Google Cloud project, restrict credentials, request only required parts/fields, and monitor quota | 2026-09-16 |
| Repository | GitHub | https://github.com/ai-reddy/VeligondaStories | Public repository; initial remote contains Apache-2.0 license and no application code | 2026-09-16 |

## Primary factual sources to obtain

These are required before factual project/village claims are published.

| Source family | Required artifact/details | Status |
|---|---|---|
| District administration | Current official project overview and complete affected/submerged habitation list | Needed |
| Water Resources Department | Project DPR/administrative approvals, reservoir/tunnel/canal details, status reports | Needed |
| Government Orders/Gazette | R&R, land acquisition, compensation, pattas, house sites, project decisions | Needed |
| CAG | Official Poola Subbaiah Veligonda Project compliance audit landing page, report PDF, chapters, report number/date | Needed |
| Courts | Orders/judgments from official court repositories; case numbers and dates | Needed where applicable |
| Legislature/official releases | Questions, answers, press releases, inauguration and water-release records | Needed |
| District/R&R authorities | Dated beneficiary, payment, eligibility, layout, amenity, and grievance figures with definitions | Needed |
| Survey/maps | Public, licensed project/village boundaries and coordinates safe for publication | Needed |
| Media | Dated reports retained as media claims, not promoted to official facts | Ongoing |
| Community/field | Signed/recorded consent, capture date, village, contributor, description, verification notes | Ongoing |

## Canonical village-name research

The specifications contain potential name/spelling variants, including `Gundancharla` and `Gundamcherla`. Before seed data is approved, build a source-backed alias table for every habitation.

For each village collect:

- official English name;
- official Telugu name;
- common English/Telugu variants;
- village/habitation code where available;
- mandal and district as of the source date;
- old-village and rehabilitation-layout names;
- safe public centroid, not household coordinates;
- authoritative source and effective date;
- whether it is affected, submerged, relocated, a rehabilitation layout, or otherwise related.

Do not publish the current candidate list as authoritative until reconciled against official source data.

## Project content inventory

### Project and development

- Official project name and alternate historical names
- Purpose and beneficiary definitions
- Water source and route
- Nallamala Sagar reservoir
- Sunkesula, Gottipadia/Gottipadiya, and Kakarla gaps
- Twin tunnels and feeder canal
- Teegaleru, Gottipadia, and Eastern Main Canal
- Irrigation and drinking-water objectives
- Administrative approvals and dated milestones
- Construction, commissioning, inauguration, filling, and release records
- Dated official status for each component
- Official maps/diagrams with reuse permission

### Every village

- Name/aliases and administrative identity
- History and oral-history source
- Population/family figures by dated definition
- Agriculture, livelihoods, temples, schools, public buildings, and cultural life
- Land acquisition and R&R chronology
- Old-village photographs and map
- Transition/displacement records
- New-layout map and public amenities
- Current issues, evidence, representations, responses, and last verification date
- Consented family/community stories
- Before/during/after media with capture dates and attribution

### Flagship Gundancharla collection

Prioritize a complete source-backed package:

- village history and name authority;
- old village, farms, homes, streets, temple, festivals, and landmarks;
- notices, compensation/R&R documents, transition and displacement dates;
- new-layout house sites, housing, roads, drainage, water, electricity, lighting, transport, safety, temple, education, and healthcare;
- current patta, livelihood, agriculture, amenity, and eligibility issues;
- representations, acknowledgements, official responses, and current status;
- interviews/stories with explicit consent;
- original photos/videos plus source, capture date, location sensitivity, and rights.

## Launch media intake

For every asset collect:

- original file (never edited in place);
- title/caption in Telugu and English;
- content type and source type;
- creator/contributor and public attribution preference;
- original URL when sourced externally;
- captured/published/received dates (kept distinct);
- village/project category and safe location;
- rights/license and consent status;
- verification class and reviewer notes;
- privacy/redaction review;
- checksum and technical metadata;
- related content, issue, claim, event, document, or representation;
- derivative thumbnails/crops and alt text.

Priority launch assets:

- project inauguration and water-release videos;
- reservoir, tunnel, canal, and development photographs;
- each affected village’s historical photographs;
- displacement/transition material;
- rehabilitation-layout and amenities material;
- government project documents and R&R records;
- CAG report and chapter metadata;
- Gundancharla flagship story package.

## Social account details needed

### YouTube

- Official/approved channel URL and immutable channel ID
- Whether the portal owns the channel
- Videos/playlists in launch scope
- Google Cloud project owner and API-key custodian
- Sync cadence and reviewer
- Whether statistics should be shown and how stale values are labeled

### Instagram

- Account/profile URL and ownership type
- Approved post/reel URLs
- Meta app/business-account availability, if any
- Creator attribution and media reuse permission
- Manual-upload originals where permitted

### WhatsApp

- Public submission number (prefer a dedicated business number)
- Approved Telugu/English prefilled message
- Submission terms, privacy notice, consent wording, and expected response time
- Admin intake owners and escalation path
- Prohibited/sensitive content handling procedure

## Editorial and governance inputs needed

- Legal/operator name and contact details
- Editorial lead and backup
- Evidence reviewers and village coordinators
- Privacy/contact/takedown addresses
- Correction, appeal, right-of-reply, and emergency-unpublish process owners
- Publication threshold for each verification class
- Translation reviewer names/workflow
- Child/vulnerable-person media policy
- Copyright/licensing policy
- Data retention and deletion schedule
- Incident response and breach notification procedure

## Launch acceptance checklist

- [ ] Canonical village names and aliases approved from official sources
- [ ] Every launch number includes source, date, and definition
- [ ] Every factual narrative has claim/source mapping where practical
- [ ] Telugu and English reviewed by humans
- [ ] Media rights, attribution, consent, and privacy checks complete
- [ ] Sensitive documents redacted and restricted originals protected
- [ ] No private family data appears in public API responses or metadata
- [ ] Official and community information are visually distinguishable
- [ ] Conflicts/disputes are labeled without unsupported conclusions
- [ ] Correction and right-of-reply contact paths are live
- [ ] Social imports enter review rather than publishing automatically
- [ ] Backups, monitoring, restore test, and administrative access controls verified
