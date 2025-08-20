#!/usr/bin/env bash
# CI watcher-safe lint proxy. This intentionally does nothing and exits success.
# Use root scripts/lint-ci.sh for actual lint runs in CI.
set -euo pipefail
echo "[lint-proxy] Lint skipped (CI watcher-safe). Use root scripts/lint-ci.sh for real lint."
exit 0
