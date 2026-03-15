#!/usr/bin/env bash
set -euo pipefail

WEBFLOW_URL="http://brandos-radical-site.webflow.io/"
REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUT="$REPO_ROOT/public/index.html"

echo "Fetching $WEBFLOW_URL..."

curl -sL "$WEBFLOW_URL" \
  | sed 's/<!-- This site was created in Webflow\. https:\/\/webflow\.com -->//g' \
  | sed 's/<meta content="Webflow" name="generator"\/>//g' \
  | sed 's/ data-wf-domain="[^"]*"//g' \
  | sed 's/ data-wf-page="[^"]*"//g' \
  | sed 's/ data-wf-site="[^"]*"//g' \
  | sed 's/ data-wf-status="[^"]*"//g' \
  > "$OUT"

echo "Saved to $OUT"
echo "Deploying to Firebase..."

cd "$REPO_ROOT" && firebase deploy --only hosting
