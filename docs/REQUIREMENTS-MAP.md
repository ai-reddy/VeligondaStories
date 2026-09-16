# VeligondaStories Requirements Map

This map identifies where each major requirement is governed. `site-plan.md` remains authoritative.

| Requirement area | Canonical detail | Supporting detail | Build baseline |
|---|---|---|---|
| Vision, homepage, live hub | `site-plan.md` §§1–4 | `veligondastories.md` §§1–8, 69 | `BUILD-BRIEF.md` §§1–3, 12 |
| YouTube/Instagram/WhatsApp | `site-plan.md` §§5–7, 23–24 | `veligondastories.md` §§18–22 | `BUILD-BRIEF.md` §10 |
| CMS and review | `site-plan.md` §§8–11, 19, 25 | `veligondastories.md` §§23–26, 53–55 | `BUILD-BRIEF.md` §§5–6 |
| Villages/Gundancharla | `site-plan.md` §§12–13 | `veligondastories.md` §§10–11 | `CONTENT-SOURCE-REGISTER.md` |
| Development/water | `site-plan.md` §§14–15 | `veligondastories.md` §§9, 14–15 | `BUILD-BRIEF.md` §§2–3 |
| Before/during/after | `site-plan.md` §16 | `veligondastories.md` §§12–13 | MVP 2 |
| Issues/evidence | `site-plan.md` §§17–18 | `veligondastories.md` §§26–29 | `BUILD-BRIEF.md` §§5–8 |
| Representations/responses | `site-plan.md` §20 | `veligondastories.md` §§32–33, 58 | MVP 2 |
| Data/API | `site-plan.md` §§21–22 | `veligondastories.md` §§47–50 | `BUILD-BRIEF.md` §§5, 11 |
| Search/i18n | `site-plan.md` §§26–27 | `veligondastories.md` §§36–39, 61 | `BUILD-BRIEF.md` §§4, 7 |
| Privacy/consent | Core principles in `site-plan.md` | `veligondastories.md` §§30–31, 56–60 | `BUILD-BRIEF.md` §9 |
| SEO/sharing/accessibility | Mobile/bilingual principles in `site-plan.md` | `veligondastories.md` §§36–45, 62–65, 67–68 | MVP 1 |
| Performance/analytics | Scalable/mobile principles in `site-plan.md` | `veligondastories.md` §§64, 66 | `BUILD-BRIEF.md` §§4, 13 |
| Delivery phases | `site-plan.md` §29 | `veligondastories.md` §§70, 74–75 | `BUILD-BRIEF.md` §3 |

## Conflict resolutions

- Product/site name is **VeligondaStories**, not “Veligonda Portal” or “Veligonda People & Development Portal.” Descriptive phrases remain positioning copy only.
- `site-plan.md` is the core authority. The longer specification augments it but cannot silently override it.
- Public API endpoints are versioned as `/api/v1/...`; compatibility aliases, if ever needed, are implementation decisions.
- Family-level records are private by default. Public pages expose aggregates or explicitly consented narratives only.
- Social media is never the master record. Imported items are source records attached to reviewed VeligondaStories content.
- Progress uses sourced status labels, not invented percentages.
- Potential village spelling/list differences remain unresolved source-data tasks, not seed facts.

## Explicitly deferred from MVP 1

- Automated YouTube channel synchronization
- Family survey/entitlement workflows
- Advanced geospatial layers
- Notifications and PWA
- Dedicated search engine
- Automatic social posting
- Advanced analytics dashboards

The architecture should leave seams for these features without implementing speculative infrastructure prematurely.
