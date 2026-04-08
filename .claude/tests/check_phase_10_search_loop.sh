#!/usr/bin/env bash
# check_phase_10_search_loop.sh — verify search_coverage.py + search_rewrite.py
# + the query/search skill file shape. Uses pinned fixtures under
# .claude/tests/fixtures/phase10/.

set -u

REPO_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$REPO_ROOT"

pass=0
fail=0
PASS() { printf '  \033[32mPASS\033[0m %s\n' "$1"; pass=$((pass+1)); }
FAIL() { printf '  \033[31mFAIL\033[0m %s\n' "$1"; fail=$((fail+1)); }

echo "=== phase 10: search loop ==="

FX=".claude/tests/fixtures/phase10"
TMP="/tmp/vcro-phase10-$$"
mkdir -p "$TMP"
trap 'rm -rf "$TMP"' EXIT

# Precondition: scripts + skill + synonyms file exist.
for f in scripts/search_coverage.py scripts/search_rewrite.py \
         references/search-synonyms.md \
         .claude/skills/query/search/SKILL.md \
         "$FX/request.json" "$FX/round_1.json" "$FX/wiki_index.md"; do
  if [ -e "$f" ]; then PASS "$f exists"; else FAIL "$f exists"; fi
done

# Skill has required frontmatter.
if awk '/^---$/{n++; next} n==1{print}' .claude/skills/query/search/SKILL.md \
   | grep -q "^name: query-search"; then
  PASS "query/search SKILL has name: query-search"
else
  FAIL "query/search SKILL has name: query-search"
fi

# 1. Coverage scorer runs and produces valid JSON.
python3 scripts/search_coverage.py \
  --round "$FX/round_1.json" \
  --request "$FX/request.json" \
  --wiki-index "$FX/wiki_index.md" \
  --out "$TMP/coverage_1.json" \
  --min-per-query 3 --target-new-pmids 20 --max-rounds 3 >/dev/null
if [ -f "$TMP/coverage_1.json" ]; then PASS "coverage_1.json written"; else FAIL "coverage_1.json written"; fi
if python3 -c "import json; json.load(open('$TMP/coverage_1.json'))" 2>/dev/null; then
  PASS "coverage_1.json parses"
else
  FAIL "coverage_1.json parses"
fi

# 2. Coverage correctly flags 2 zero-hit queries.
zc=$(python3 -c "import json; print(len(json.load(open('$TMP/coverage_1.json'))['zero_hit_queries']))")
if [ "$zc" = "2" ]; then PASS "coverage flagged 2 zero-hit queries"; else FAIL "zero-hit count (got $zc)"; fi

# 3. Coverage correctly computes pmids_new = 5 (1 rejected in triage is still counted in unique_pmids;
#    pmids_new counts against wiki intersection, not triage).
new=$(python3 -c "import json; print(json.load(open('$TMP/coverage_1.json'))['pmids_new'])")
if [ "$new" = "5" ]; then PASS "coverage computed pmids_new=5"; else FAIL "pmids_new (got $new)"; fi

# 4. Coverage correctly marks ALS indication as uncovered.
als_covered=$(python3 -c "
import json
d=json.load(open('$TMP/coverage_1.json'))
print(d['indication_coverage']['ALS'])
")
if [ "$als_covered" = "False" ]; then PASS "ALS indication marked uncovered"; else FAIL "ALS indication coverage"; fi

# 5. Coverage stop_reason is null (should loop — zero hits + uncovered indication).
stop=$(python3 -c "import json; print(json.load(open('$TMP/coverage_1.json'))['stop_reason'])")
if [ "$stop" = "None" ]; then PASS "stop_reason=None (loop should continue)"; else FAIL "stop_reason=$stop"; fi

# 6. Rewriter runs and produces mechanical rewrites for both zero-hit queries.
python3 scripts/search_rewrite.py \
  --coverage "$TMP/coverage_1.json" \
  --round "$FX/round_1.json" \
  --synonyms references/search-synonyms.md \
  --out "$TMP/rewrite_1.json" >/dev/null
if [ -f "$TMP/rewrite_1.json" ]; then PASS "rewrite_1.json written"; else FAIL "rewrite_1.json written"; fi

mcount=$(python3 -c "import json; print(len(json.load(open('$TMP/rewrite_1.json'))['mechanical_rewrites']))")
if [ "$mcount" -ge "2" ]; then
  PASS "rewriter produced ≥2 mechanical rewrites (got $mcount)"
else
  FAIL "rewriter produced ≥2 mechanical rewrites (got $mcount)"
fi

# 7. Rewrites actually substitute vendor terms.
if python3 -c "
import json
d=json.load(open('$TMP/rewrite_1.json'))
oks = []
for r in d['mechanical_rewrites']:
    if 'EPIC' in r['from']:
        oks.append('MethylationEPIC' in r['to'])
    if 'bisulfite' in r['from']:
        oks.append('bisulfite sequencing' in r['to'] or 'DNA methylation' in r['to'])
import sys
sys.exit(0 if oks and all(oks) else 1)
"; then
  PASS "vendor-term substitutions applied (EPIC→MethylationEPIC, bisulfite→bisulfite sequencing)"
else
  FAIL "vendor-term substitutions applied"
fi

# 8. Idempotency: re-running coverage produces the same stop_reason/counts (ts differs).
python3 scripts/search_coverage.py \
  --round "$FX/round_1.json" --request "$FX/request.json" \
  --wiki-index "$FX/wiki_index.md" --out "$TMP/coverage_1b.json" \
  --min-per-query 3 --target-new-pmids 20 --max-rounds 3 >/dev/null
if python3 -c "
import json
a=json.load(open('$TMP/coverage_1.json'))
b=json.load(open('$TMP/coverage_1b.json'))
for k in ['stop_reason','pmids_new','unique_pmids','zero_hit_queries','indication_coverage']:
    if a[k] != b[k]:
        raise SystemExit(1)
"; then
  PASS "coverage is idempotent across reruns (modulo ts)"
else
  FAIL "coverage idempotency"
fi

# 9. Stop condition fires on sufficient coverage.
cat > "$TMP/round_suf.json" <<'EOF'
{"round": 1, "queries": [
  {"source":"pubmed","query":"q1","hits":["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23"]}
]}
EOF
cat > "$TMP/req_suf.json" <<'EOF'
{"filter_for_discover": {"indications": [], "modalities": []}}
EOF
python3 scripts/search_coverage.py \
  --round "$TMP/round_suf.json" --request "$TMP/req_suf.json" \
  --wiki-index "$FX/wiki_index.md" --out "$TMP/cov_suf.json" \
  --min-per-query 3 --target-new-pmids 20 --max-rounds 3 >/dev/null
sr=$(python3 -c "import json; print(json.load(open('$TMP/cov_suf.json'))['stop_reason'])")
if [ "$sr" = "sufficient" ] || [ "$sr" = "sufficient_coverage" ]; then
  PASS "stop_reason fires on 23 new PMIDs (got $sr)"
else
  FAIL "stop_reason on sufficient coverage (got $sr)"
fi

# 10. Round cap stops at round 3.
cat > "$TMP/round_3.json" <<'EOF'
{"round": 3, "queries": [{"source":"pubmed","query":"q1","hits":["1"]}]}
EOF
python3 scripts/search_coverage.py \
  --round "$TMP/round_3.json" --request "$TMP/req_suf.json" \
  --wiki-index "$FX/wiki_index.md" --out "$TMP/cov_3.json" \
  --max-rounds 3 >/dev/null
sr3=$(python3 -c "import json; print(json.load(open('$TMP/cov_3.json'))['stop_reason'])")
if [ "$sr3" = "round_cap" ]; then
  PASS "round_cap fires at round 3"
else
  FAIL "round_cap fires at round 3 (got $sr3)"
fi

# 11. Skills lockfile includes query/search after rebuild.
if python3 scripts/skills_lock.py --check >/dev/null 2>&1; then
  PASS "skills_lock --check green with query/search present"
else
  FAIL "skills_lock --check"
fi

echo
echo "=== summary ==="
echo "  $pass passed, $fail failed"
[ "$fail" -eq 0 ]
