# Deployment and submission retention

## Authoritative live site

`https://veligondastories.netlify.app` is the authoritative dynamic deployment.
It owns the submission API, the latest-updates feed, and uploaded media.

The GitHub Pages deployment is a static mirror under `/VeligondaStories`. Its
repository root uses a static landing redirect to `/te/`, because static
exports cannot execute the server-side root redirect used by Netlify. Static
exports cannot run POST route handlers, so its form sends submissions to the
Netlify origin configured by `NEXT_PUBLIC_LIVE_ORIGIN`.

## Persistent records

Production submission JSON is stored in the named Netlify Blob store
`veligonda-submissions`. Uploaded files are stored in `veligonda-media`. These
stores are independent of `.next` build output and survive normal code updates,
builds, and deploys. The application never clears either store.

Do not delete or replace the Netlify site without first exporting its Blob data.
Before a site transfer or destructive storage operation, download both named
stores from Netlify and verify the submission count and media keys. The checked-in
`data/submissions.json` file is seed/archive data; it is merged with, but does not
overwrite, live Blob records.

## Required configuration

- Netlify: `NEXT_PUBLIC_SITE_URL=https://veligondastories.netlify.app`
- Netlify: `PUBLIC_SUBMISSION_ORIGINS=https://ai-reddy.github.io`
- GitHub Pages build: `NEXT_PUBLIC_BASE_PATH=/VeligondaStories`
- GitHub Pages build: `NEXT_PUBLIC_LIVE_ORIGIN=https://veligondastories.netlify.app`

An origin contains only scheme, host, and optional port. Do not append
`/VeligondaStories` to `PUBLIC_SUBMISSION_ORIGINS`.

## Verification after every deployment

1. Open `/en/submit` on Netlify and confirm the form renders.
2. Open `/en/updates` and confirm previous submissions are still present.
3. From the GitHub Pages mirror, confirm **Submit an update** reaches the Netlify
   API and then redirects to the live update/gallery page.
4. Confirm an existing uploaded image or video still opens.

If GitHub Pages returns 404 for the repository root, inspect the **Deploy GitHub
Pages** workflow and verify Pages is configured to use **GitHub Actions**. A clean
checkout intentionally has no raw source-media archive; media validation must use
the committed generated public media in that environment.