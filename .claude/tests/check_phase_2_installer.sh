#!/usr/bin/env bash
# check_phase_2_installer.sh — verify scripts/install.sh end-to-end.
#
# Runs in <30s. Self-cleaning. Tests --from-local only (offline).
# The network --version path is exercised by the release workflow.

set -u

REPO_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$REPO_ROOT"

TMP="/tmp/vcro-installer-check-$$"
trap 'rm -rf "$TMP"' EXIT

pass=0
fail=0
PASS() { printf '  \033[32mPASS\033[0m %s\n' "$1"; pass=$((pass+1)); }
FAIL() { printf '  \033[31mFAIL\033[0m %s\n' "$1"; fail=$((fail+1)); }

echo "=== phase 2: installer ==="

# Precondition: install.sh exists and is executable-ish.
if [ -f scripts/install.sh ]; then PASS "scripts/install.sh exists"; else FAIL "scripts/install.sh missing"; fi
if [ -f scripts/install.ps1 ]; then PASS "scripts/install.ps1 exists"; else FAIL "scripts/install.ps1 missing"; fi

# Fresh install from local checkout.
if bash scripts/install.sh --target "$TMP" --from-local "$REPO_ROOT" >/dev/null 2>&1; then
  PASS "install.sh --from-local exits 0"
else
  FAIL "install.sh --from-local exits 0"
fi

# Required files present.
for f in bin/vcro scripts/pmc_convert.py .claude/agents .claude/skills .claude/rules .claude/commands .claude/hooks CLAUDE.md; do
  if [ -e "$TMP/$f" ]; then PASS "installed: $f"; else FAIL "installed: $f"; fi
done

# Wiki skeleton (default, no --skills-only).
if [ -d "$TMP/store/wiki/cohorts" ]; then PASS "wiki skeleton: cohorts/"; else FAIL "wiki skeleton: cohorts/"; fi
if [ -f "$TMP/store/wiki/index/master.md" ]; then PASS "wiki skeleton: index/master.md"; else FAIL "wiki skeleton: index/master.md"; fi

# bin/vcro runs out of the installed dir.
if python3 "$TMP/bin/vcro" --help >/dev/null 2>&1; then
  PASS "installed bin/vcro --help exits 0"
else
  FAIL "installed bin/vcro --help exits 0"
fi

# Hooks kept executable after copy.
if [ -x "$TMP/.claude/hooks/pre-write-entity.sh" ] 2>/dev/null || [ -x "$TMP/.claude/hooks/pre-write-entity.py" ]; then
  PASS "hooks executable after copy"
else
  FAIL "hooks executable after copy"
fi

# Re-run without --force must refuse.
if bash scripts/install.sh --target "$TMP" --from-local "$REPO_ROOT" >/dev/null 2>&1; then
  FAIL "re-run without --force refuses"
else
  PASS "re-run without --force refuses (exit != 0)"
fi

# Re-run with --force must succeed.
if bash scripts/install.sh --target "$TMP" --from-local "$REPO_ROOT" --force >/dev/null 2>&1; then
  PASS "re-run with --force succeeds"
else
  FAIL "re-run with --force succeeds"
fi

# --skills-only: wiki skeleton must be absent.
TMP2="/tmp/vcro-installer-check-skillsonly-$$"
if bash scripts/install.sh --target "$TMP2" --from-local "$REPO_ROOT" --skills-only >/dev/null 2>&1; then
  PASS "install.sh --skills-only exits 0"
else
  FAIL "install.sh --skills-only exits 0"
fi
if [ ! -d "$TMP2/store" ]; then PASS "--skills-only: no store/ dir"; else FAIL "--skills-only: no store/ dir"; fi
if [ -d "$TMP2/.claude/skills" ]; then PASS "--skills-only: .claude/skills present"; else FAIL "--skills-only: .claude/skills present"; fi
rm -rf "$TMP2"

# Bogus flag must fail fast with a useful message.
if bash scripts/install.sh --frobnicate 2>/dev/null; then
  FAIL "bogus flag rejected"
else
  PASS "bogus flag rejected"
fi

echo
echo "=== summary ==="
echo "  $pass passed, $fail failed"
[ "$fail" -eq 0 ]
