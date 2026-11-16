#!/usr/bin/env bash
# Regenerates public/CV_Pushty_Shrimankar.pdf from the /cv print stylesheet,
# so the downloadable CV always matches the site data (no phone number, etc.).
# Usage: npm run build && scripts/make-cv-pdf.sh
set -euo pipefail
cd "$(dirname "$0")/.."
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
PORT=4010
OUT=public/CV_Pushty_Shrimankar.pdf

npx --yes serve out -p $PORT >/dev/null 2>&1 &
SERVER=$!
trap 'kill $SERVER 2>/dev/null || true' EXIT

# Wait (up to ~60s) for the server instead of guessing with a fixed sleep.
for _ in $(seq 1 120); do
  curl -sf "http://localhost:$PORT/cv" >/dev/null 2>&1 && break
  sleep 0.5
done
curl -sf "http://localhost:$PORT/cv" >/dev/null || { echo "Server never came up on :$PORT" >&2; exit 1; }

rm -f "$OUT"
"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$OUT" "http://localhost:$PORT/cv" 2>/dev/null || true

[ -s "$OUT" ] || { echo "PDF was not created" >&2; exit 1; }
echo "Wrote $OUT"
