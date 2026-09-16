# Media Review and Publication Register

Reviewed: 2026-09-16

## Inventory

- 45 source images (`.jfif`)
- 8 source videos (`.mp4`, 1280×720)
- 2 bilingual journey documents (`.md`)
- 1 signed representation (`.pdf`)

Raw assets remain under `src/assets/source-media/`, are excluded from Git, and are not web-accessible. Public derivatives are generated under `public/media/` using `content/media-manifest.json`.

## Public derivatives

All 44 byte-unique photographs were converted to WebP with metadata stripped and
maximum dimensions bounded to 1600×1200. The one exact duplicate was omitted.
All eight supplied 720p MP4 videos were copied without quality loss and received
generated WebP poster frames.

The supplied archive is assigned to the Gundancharla gallery and is also visible
in the main gallery. Items remain labelled **Community submission**, **Community
report**, and **Date pending confirmation** until source/date/location details
are supplied.

## Published items requiring follow-up review

### People and children

Images/videos showing identifiable villagers, officials, children, homes’ interiors,
or vehicle registration plates are currently published at the owner’s direction.
Obtain and record consent, and redact or blur any item where consent is not confirmed.

### Signed representation

`Collector representation for relocation arrengements.pdf` is approximately 10 MB and contains villagers’ signatures. It is source evidence, not a public download. Before publication:

1. review every page;
2. remove signatures, phone numbers, addresses, identity numbers and other personal identifiers;
3. preserve the original privately;
4. generate a separate redacted PDF;
5. attach title, submission date, recipient authority, acknowledgement number, issue relationship and response status;
6. have a second reviewer approve the redaction.

### News and social screenshots

Screenshots are published as community-submitted media references. Add their
original URLs, publisher, publication date and reuse basis; remove or replace a
screenshot with a citation if rights are not confirmed.

### Generated/community graphics

Advocacy and infographic-style images are published as community-submitted
graphics while the creator confirms:

- whether the image is AI-generated;
- the underlying factual sources;
- publication rights;
- whether political/personality imagery is appropriate for the non-partisan archive.

Approved AI-generated assets must display **Illustration — AI Generated** and can never be evidence.

## Duplicate handling

`shared image (9).jfif` and `shared image (10).jfif` have the same SHA-256 checksum. Both originals remain untouched, but only one derivative should ever be generated.

## Reproducible processing

- `node scripts/process-media.mjs` creates approved WebP derivatives and `content/generated-media.json`.
- `node scripts/review-videos.mjs` creates temporary first-frame review images under `.media-review/`.
- `.media-review/` and all source media are ignored by Git.

## Details still required per item

- captured/published date;
- village and safe location;
- photographer/creator and attribution preference;
- consent and reuse permission;
- source URL for externally published material;
- whether graphics are AI-generated;
- verification reviewer and status;
- relationship to a journey stage, issue, representation or official response.
