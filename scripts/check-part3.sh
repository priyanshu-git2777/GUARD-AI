#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

required_paths=(
  "apps/web/src/config/site.ts"
  "apps/web/src/components/layout/SiteHeader.tsx"
  "apps/web/src/components/layout/SiteFooter.tsx"
  "apps/web/src/components/landing/HeroSection.tsx"
  "apps/web/src/components/landing/FeatureSection.tsx"
  "apps/web/src/components/landing/WorkflowSection.tsx"
  "apps/web/src/components/landing/SecuritySection.tsx"
  "apps/web/src/components/landing/ArchitectureSection.tsx"
  "apps/web/src/components/landing/CallToActionSection.tsx"
)

for path in "${required_paths[@]}"; do
  test -f "$path" || { echo "MISSING: $path"; exit 1; }
  echo "OK: $path"
done

if grep -q "YOUR_USERNAME" apps/web/src/config/site.ts; then
  echo "Replace YOUR_USERNAME in apps/web/src/config/site.ts"
  exit 1
fi

echo "Part 3 file check passed."
