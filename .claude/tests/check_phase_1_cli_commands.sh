#!/bin/bash
# check_phase_1_cli_commands.sh — verify bin/vcro CLI + 5 slash commands.
# Run from repo root: bash .claude/tests/check_phase_1_cli_commands.sh

set -u
REPO_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$REPO_ROOT"
PASS=0
FAIL=0
FAILED=()

ok()  { PASS=$((PASS+1)); printf "  \033[32mPASS\033[0m %s\n" "$1"; }
bad() { FAIL=$((FAIL+1)); FAILED+=("$1"); printf "  \033[31mFAIL\033[0m %s\n" "$1"; }

echo "=== bin/vcro --help ==="
HELP=$(bin/vcro --help 2>&1); RC=$?
if [ $RC -eq 0 ]; then ok "bin/vcro --help exits 0"; else bad "bin/vcro --help exit=$RC"; fi

for kw in "query" "bounty" "onboard" "lint" "ingest" "compile" "wiki" "version" \
          "CORE WORKFLOWS" "OPERATOR COMMANDS" "UTILITY"; do
  if echo "$HELP" | grep -qF "$kw"; then
    ok "help mentions '$kw'"
  else
    bad "help missing '$kw'"
  fi
done

echo
echo "=== bin/vcro version ==="
VER=$(bin/vcro version 2>&1); RC=$?
if [ $RC -eq 0 ]; then ok "bin/vcro version exits 0"; else bad "bin/vcro version exit=$RC"; fi
if echo "$VER" | grep -Eq "vcro [0-9]+\.[0-9]+\.[0-9]+"; then
  ok "version is semver: $VER"
else
  bad "version string malformed: $VER"
fi

echo
echo "=== per-subcommand --help ==="
for sub in "query" "bounty" "onboard" "lint" "ingest" "compile" "wiki"; do
  OUT=$(bin/vcro $sub --help 2>&1); RC=$?
  if [ $RC -eq 0 ]; then ok "bin/vcro $sub --help exits 0"; else bad "bin/vcro $sub --help exit=$RC"; fi
done

echo
echo "=== bogus subcommand rejected ==="
bin/vcro frobnicate 2>/dev/null 1>/dev/null; RC=$?
if [ $RC -ne 0 ]; then ok "bogus subcommand exits non-zero"; else bad "bogus subcommand wrongly exit=0"; fi

echo
echo "=== slash command files ==="
CMDS=("query" "bounty" "onboard" "lint" "compile")
for c in "${CMDS[@]}"; do
  F=".claude/commands/$c.md"
  if [ ! -f "$F" ]; then
    bad "$F missing"
    continue
  fi
  # Extract frontmatter block
  FM=$(awk '/^---$/{f++;next} f==1' "$F")
  if echo "$FM" | grep -qE "^name: ${c}$"; then
    ok "$F has name:${c}"
  else
    bad "$F name mismatch (expected name:${c})"
  fi
  if echo "$FM" | grep -qE "^description: .+"; then
    ok "$F has non-empty description"
  else
    bad "$F missing description"
  fi
  if echo "$FM" | grep -qE "^argument_hint: .+"; then
    ok "$F has argument_hint"
  else
    bad "$F missing argument_hint"
  fi
  # Body must reference at least one real .claude/agents or .claude/skills path
  if grep -qE "\.claude/(agents|skills)/[A-Za-z0-9/_.-]+\.md" "$F"; then
    REF=$(grep -oE "\.claude/(agents|skills)/[A-Za-z0-9/_.-]+\.md" "$F" | head -1)
    if [ -f "$REF" ]; then
      ok "$F references real path: $REF"
    else
      bad "$F references missing path: $REF"
    fi
  else
    bad "$F does not reference any .claude/agents/ or .claude/skills/ path"
  fi
done

echo
echo "=== commands dir hygiene ==="
# Exactly 5 command md files + README.md
COUNT=$(find .claude/commands -maxdepth 1 -name "*.md" | wc -l | tr -d ' ')
EXPECTED=6
if [ "$COUNT" -eq "$EXPECTED" ]; then
  ok ".claude/commands/ has exactly $EXPECTED md files (5 commands + README)"
else
  bad ".claude/commands/ has $COUNT md files, expected $EXPECTED"
fi

echo
echo "=== bin/vcro is executable ==="
if [ -x bin/vcro ]; then ok "bin/vcro is executable"; else bad "bin/vcro not executable"; fi

echo
echo "=== summary ==="
printf "  %d passed, %d failed\n" "$PASS" "$FAIL"
if [ "$FAIL" -gt 0 ]; then
  printf "  failures:\n"
  for t in "${FAILED[@]}"; do printf "    - %s\n" "$t"; done
  exit 1
fi
exit 0
