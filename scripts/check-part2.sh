#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

required_paths=(
  "apps/web/package.json"
  "apps/web/src/app/page.tsx"
  "services/platform/pom.xml"
  "services/platform/mvnw"
  "services/platform/src/main/resources/application.yml"
  "services/platform/src/main/resources/db/migration/V1__create_system_status_table.sql"
  ".env.example"
  "docker-compose.yml"
)

echo "Checking TraceDefend AI Part 2 structure..."

for path in "${required_paths[@]}"; do
  if [[ ! -e "$path" ]]; then
    echo "MISSING: $path"
    exit 1
  fi
  echo "OK: $path"
done

if [[ -d "apps/web/apps" ]]; then
  echo "WARNING: apps/web/apps exists. It is usually an accidental nested folder."
else
  echo "OK: no accidental apps/web/apps folder"
fi

if git check-ignore .env >/dev/null 2>&1; then
  echo "OK: root .env is ignored"
else
  echo "WARNING: root .env is not ignored or does not exist yet"
fi

if git check-ignore apps/web/.env.local >/dev/null 2>&1; then
  echo "OK: frontend .env.local is ignored"
else
  echo "WARNING: apps/web/.env.local is not ignored or does not exist yet"
fi

echo "Structure check finished."
