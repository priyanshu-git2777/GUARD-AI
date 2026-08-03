#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR/apps/web"

if [[ ! -f .env.local ]]; then
  echo "Missing apps/web/.env.local. Run: cp apps/web/.env.example apps/web/.env.local"
  exit 1
fi

npm run dev
