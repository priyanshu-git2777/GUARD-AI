#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

echo "Running backend tests..."
cd "$ROOT_DIR/services/platform"
chmod +x mvnw
./mvnw test

echo "Running frontend lint..."
cd "$ROOT_DIR/apps/web"
npm run lint

echo "Running frontend production build..."
npm run build

echo "All Part 2 checks passed."
