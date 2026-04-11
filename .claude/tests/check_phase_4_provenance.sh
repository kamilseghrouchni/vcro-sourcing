#!/usr/bin/env bash
# check_phase_4_provenance.sh — verify scripts/provenance_sidecar.py.

set -u

REPO_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$REPO_ROOT"

pass=0
fail=0
PASS() { printf '  \033[32mPASS\033[0m %s\n' "$1"; pass=$((pass+1)); }
FAIL() { printf '  \033[31mFAIL\033[0m %s\n' "$1"; fail=$((fail+1)); }

echo "=== phase 4: provenance sidecar ==="

# Pick a fixture query dir that has a recommendation + scored_candidates.
FIX=""
for d in store/queries/2026-04-07_ad-replay-219entity store/queries/2026-04-07_bounty-test; do
  if [ -f "$d/recommendation.md" ] && [ -f "$d/scored_candidates.json" ]; then
    FIX="$d"; break
  fi
done

if [ -z "$FIX" ]; then
  FAIL "no fixture query dir with recommendation.md + scored_candidates.json"
  echo; echo "  $pass passed, $fail failed"; exit 1
fi
PASS "fixture: $FIX"

SLUG=$(basename "$FIX")
OUT="$FIX/${SLUG}.provenance.md"
# Clean any prior run so the test is deterministic.
rm -f "$OUT"

# 1. Run the sidecar generator.
if python3 scripts/provenance_sidecar.py "$FIX" >/dev/null 2>&1; then
  PASS "sidecar generator exits 0"
else
  FAIL "sidecar generator exits 0"
fi

# 2. Output file exists.
if [ -f "$OUT" ]; then PASS "sidecar file written at $OUT"; else FAIL "sidecar file written"; fi

# 3. Starts with '# Provenance'.
if head -1 "$OUT" | grep -q '^# Provenance'; then
  PASS "sidecar starts with '# Provenance' header"
else
  FAIL "sidecar header"
fi

# 4. At least one [ref: PMC or NCT anchor.
if grep -qE '`PMC[0-9]+`|`NCT[0-9]+`|\[ref: ?(PMC|NCT|DOI|PMID)' "$OUT"; then
  PASS "sidecar contains at least one source ref"
else
  FAIL "sidecar contains at least one source ref"
fi

# 5. Every candidate slug from scored_candidates.json is covered as a '## slug' section.
missing=$(python3 -c "
import json, sys
data = json.load(open('$FIX/scored_candidates.json'))
items = data.get('candidates', data) if isinstance(data, dict) else data
with open('$OUT') as f: text = f.read()
miss = []
for c in items:
    sid = c.get('entity_id') or c.get('slug')
    if sid and ('## ' + sid) not in text:
        miss.append(sid)
print(' '.join(miss))
")
if [ -z "$missing" ]; then
  PASS "every scored candidate has a sidecar section"
else
  FAIL "missing sidecar sections for: $missing"
fi

# 6. Idempotency: rerun, byte-identical.
SUM_A=$(shasum "$OUT" | awk '{print $1}')
python3 scripts/provenance_sidecar.py "$FIX" >/dev/null 2>&1
SUM_B=$(shasum "$OUT" | awk '{print $1}')
if [ "$SUM_A" = "$SUM_B" ]; then
  PASS "sidecar is byte-stable across reruns"
else
  FAIL "sidecar is byte-stable across reruns"
fi

# 7. Negative: bogus dir should exit 2.
if python3 scripts/provenance_sidecar.py /tmp/definitely-not-a-query-$$ >/dev/null 2>&1; then
  FAIL "missing query dir should fail"
else
  PASS "missing query dir fails"
fi

# 8. Negative: dir without recommendation.md should exit 2.
EMPTY="/tmp/vcro-phase4-empty-$$"
mkdir -p "$EMPTY"
if python3 scripts/provenance_sidecar.py "$EMPTY" >/dev/null 2>&1; then
  FAIL "dir without recommendation.md should fail"
else
  PASS "dir without recommendation.md fails"
fi
rm -rf "$EMPTY"

echo
echo "=== summary ==="
echo "  $pass passed, $fail failed"
[ "$fail" -eq 0 ]
