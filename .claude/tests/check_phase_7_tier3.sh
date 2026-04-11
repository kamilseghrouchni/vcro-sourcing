#!/usr/bin/env bash
# check_phase_7_tier3.sh — Tier 3: CHANGELOG + verification labels +
# release workflow + contributing/jobs skills.

set -u

REPO_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$REPO_ROOT"

pass=0
fail=0
PASS() { printf '  \033[32mPASS\033[0m %s\n' "$1"; pass=$((pass+1)); }
FAIL() { printf '  \033[31mFAIL\033[0m %s\n' "$1"; fail=$((fail+1)); }

echo "=== phase 7: tier 3 ==="

# 1. CHANGELOG.md promoted to repo root.
if [ -f CHANGELOG.md ]; then PASS "CHANGELOG.md exists at repo root"; else FAIL "CHANGELOG.md at repo root"; fi
if grep -qE '^## 2026-' CHANGELOG.md; then
  PASS "CHANGELOG.md has at least one 2026 dated section"
else
  FAIL "CHANGELOG.md dated sections"
fi

# 2. Assumption log demoted to a short pointer.
if [ -f .claude/assumption-log.md ]; then
  sz=$(wc -c < .claude/assumption-log.md | tr -d ' ')
  if [ "$sz" -le 500 ]; then
    PASS "assumption-log.md demoted to ≤500 bytes"
  else
    FAIL "assumption-log.md demoted (size=$sz)"
  fi
  if grep -q "CHANGELOG.md" .claude/assumption-log.md; then
    PASS "assumption-log.md points at CHANGELOG.md"
  else
    FAIL "assumption-log.md points at CHANGELOG.md"
  fi
else
  FAIL "assumption-log.md exists"
fi

# 3. Verification labels in query/deliver SKILL.
DELIVER=".claude/skills/query/deliver/SKILL.md"
for lbl in "\[verified\]" "\[inferred\]" "\[open_question\]" "\[blocked\]"; do
  if grep -q "$lbl" "$DELIVER"; then
    PASS "deliver SKILL mentions $lbl"
  else
    FAIL "deliver SKILL mentions $lbl"
  fi
done

# 4. Release workflow.
WF=".github/workflows/release.yml"
if [ -f "$WF" ]; then PASS "$WF exists"; else FAIL "$WF"; fi
if grep -q "^on:" "$WF" && grep -q "^jobs:" "$WF"; then
  PASS "release.yml has on:/jobs: top-level keys"
else
  FAIL "release.yml top-level keys"
fi
if grep -q "run_all_checks.sh" "$WF"; then
  PASS "release.yml runs the full phase-check harness"
else
  FAIL "release.yml runs run_all_checks.sh"
fi

# 5. Contributing + jobs skills.
for s in .claude/skills/contributing/SKILL.md .claude/skills/jobs/SKILL.md; do
  if [ -f "$s" ]; then PASS "$s exists"; else FAIL "$s"; continue; fi
  if awk '/^---$/{n++; next} n==1{print}' "$s" | grep -q "^name:"; then
    PASS "$s has name: frontmatter"
  else
    FAIL "$s name: frontmatter"
  fi
  if awk '/^---$/{n++; next} n==1{print}' "$s" | grep -q "^description:"; then
    PASS "$s has description: frontmatter"
  else
    FAIL "$s description: frontmatter"
  fi
done

# 6. Lockfile absorbs the new stub skills.
if python3 scripts/skills_lock.py --check >/dev/null 2>&1; then
  PASS "skills_lock --check green after stub skills"
else
  FAIL "skills_lock --check green after stub skills"
fi
COUNT=$(python3 -c "import json; print(json.load(open('vcro-skills-lock.json'))['skill_count'])")
if [ "$COUNT" -ge 19 ]; then
  PASS "lockfile has ≥19 skills (contributing+jobs added)"
else
  FAIL "lockfile has ≥19 skills (got $COUNT)"
fi

echo
echo "=== summary ==="
echo "  $pass passed, $fail failed"
[ "$fail" -eq 0 ]
