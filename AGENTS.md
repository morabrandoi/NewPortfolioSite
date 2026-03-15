# Portfolio Site — Agent Context

This repo hosts a personal portfolio site on Firebase Hosting with a custom domain.

## How it works

The site content is authored in Webflow (starter plan). Since the starter plan doesn't allow custom domains, the workflow is:

1. Fetch the static HTML from the Webflow-hosted URL (e.g. with `wget`)
2. Strip Webflow branding/badges from the HTML
3. Drop `index.html` into the `public/` directory
4. Deploy to Firebase: `firebase deploy --only hosting`

Static assets (images, fonts, etc.) don't need to be downloaded — they're loaded directly from Webflow's CDN via the links already in the HTML.

## Webflow URL

`http://brandos-radical-site.webflow.io/`

## Repo structure

```
public/              # Firebase hosting root — index.html lives here
firebase.json        # Firebase config (hosting target: "www", public dir: "public")
scripts/publish.sh   # One-shot publish script (fetch + strip + deploy)
```

## Publishing

To update and deploy the site, run:

```bash
bash scripts/publish.sh
```

This script:
1. Fetches `index.html` from the Webflow URL via `curl`
2. Strips Webflow branding with `sed`:
   - Removes the `<!-- This site was created in Webflow -->` HTML comment
   - Removes `<meta content="Webflow" name="generator"/>`
   - Removes `data-wf-domain`, `data-wf-page`, `data-wf-site`, `data-wf-status` attributes from `<html>` (the last one prevents Webflow's JS from injecting the badge)
3. Writes cleaned HTML to `public/index.html`
4. Runs `firebase deploy --only hosting`

No arguments needed — the Webflow URL is hardcoded in the script.
