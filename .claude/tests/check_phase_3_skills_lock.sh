#!/usr/bin/env bash
# check_phase_3_skills_lock.sh — verify scripts/skills_lock.py.

set -u

REPO_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$REPO_ROOT"

pass=0
fail=0
PASS() { printf '  \033[32mPASS\033[0m %s\n' "$1"; pass=$((pass+1)); }
FAIL() { printf '  \033[31mFAIL\033[0m %s\n' "$1"; fail=$((fail+1)); }

echo "=== phase 3: skills lockfile ==="

# Backup the current lockfile so we can restore after mutation tests.
LOCK="vcro-skills-lock.json"
if [ -f "$LOCK" ]; then
  cp "$LOCK" "$LOCK.bak.$$"
  trap 'mv "$LOCK.bak.'"$$"'" "$LOCK" 2>/dev/null || true' EXIT
fi

# 1. Generate the lockfile.
if python3 scripts/skills_lock.py >/dev/null; then
  PASS "skills_lock.py writes lockfile"
else
  FAIL "skills_lock.py writes lockfile"
fi

if [ -f "$LOCK" ]; then PASS "$LOCK exists"; else FAIL "$LOCK exists"; fi

# 2. Parses as JSON.
if python3 -c "import json; json.load(open('$LOCK'))" 2>/dev/null; then
  PASS "$LOCK parses as JSON"
else
  FAIL "$LOCK parses as JSON"
fi

# 3. Check is idempotent.
if python3 scripts/skills_lock.py --check >/dev/null 2>&1; then
  PASS "--check is green immediately after write"
else
  FAIL "--check is green immediately after write"
fi

# 4. Every listed skill exists on disk.
missing=$(python3 -c "
import json, os, sys
lock = json.load(open('$LOCK'))
for k, v in lock['skills'].items():
    if not os.path.exists(v['path']):
        print(k)
")
if [ -z "$missing" ]; then
  PASS "every locked skill has a file on disk"
else
  FAIL "locked skills missing on disk: $missing"
fi

# 5. Every SKILL.md on disk is represented in the lockfile.
uncovered=$(python3 -c "
import json, os, sys
lock = json.load(open('$LOCK'))
paths = {v['path'] for v in lock['skills'].values()}
for root, _d, files in os.walk('.claude/skills'):
    if 'SKILL.md' in files:
        p = os.path.relpath(os.path.join(root,'SKILL.md'))
        if p not in paths:
            print(p)
")
if [ -z "$uncovered" ]; then
  PASS "every disk SKILL.md is locked"
else
  FAIL "unlocked SKILL.md files: $uncovered"
fi

# 6. Re-running the writer is byte-stable (idempotency).
CHK_A=$(shasum "$LOCK" | awk '{print $1}')
python3 scripts/skills_lock.py >/dev/null
CHK_B=$(shasum "$LOCK" | awk '{print $1}')
if [ "$CHK_A" = "$CHK_B" ]; then
  PASS "lockfile is byte-stable across reruns"
else
  FAIL "lockfile is byte-stable across reruns ($CHK_A vs $CHK_B)"
fi

# 7. Tamper test: mutate one entry in the lockfile, expect --check to fail.
python3 -c "
import json
lock = json.load(open('$LOCK'))
k = next(iter(lock['skills']))
lock['skills'][k]['sha256'] = '0'*64
json.dump(lock, open('$LOCK','w'), indent=2, sort_keys=True)
open('$LOCK','a').write('\n')
"
if python3 scripts/skills_lock.py --check >/dev/null 2>&1; then
  FAIL "tampered lockfile should fail --check"
else
  PASS "tampered lockfile fails --check"
fi

# 8. Restore by re-writing the lockfile and confirming --check green again.
python3 scripts/skills_lock.py >/dev/null
if python3 scripts/skills_lock.py --check >/dev/null 2>&1; then
  PASS "--check green after rewrite"
else
  FAIL "--check green after rewrite"
fi

# 9. Missing lockfile: --check must fail.
MOVED="$LOCK.moved.$$"
mv "$LOCK" "$MOVED"
if python3 scripts/skills_lock.py --check >/dev/null 2>&1; then
  FAIL "missing lockfile should fail --check"
else
  PASS "missing lockfile fails --check"
fi
mv "$MOVED" "$LOCK"

echo
echo "=== summary ==="
echo "  $pass passed, $fail failed"
[ "$fail" -eq 0 ]
