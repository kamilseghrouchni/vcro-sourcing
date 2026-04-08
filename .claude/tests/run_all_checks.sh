#!/usr/bin/env bash
# run_all_checks.sh — master runner for every phase check + hook harness.
#
# Runs each check in order, captures PASS/FAIL per phase, prints an
# aggregate summary, and exits non-zero on any failure. Under 2 min
# total on a warm repo.
#
# Execution order mirrors .claude/plans/ship-as-software.md:
#   1 → 2 → 3 → 4 → 7 → 8
# Phases 5, 6, 9 are deferred (docs site, landing page, CLI UX polish).

set -u

REPO_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$REPO_ROOT"

START_TS=$(date +%s)

declare -a NAMES
declare -a STATUSES

run_check() {
  local label="$1"; local path="$2"
  echo
  echo "############################################################"
  echo "# $label"
  echo "# $path"
  echo "############################################################"
  if bash "$path"; then
    NAMES+=("$label"); STATUSES+=("PASS")
  else
    NAMES+=("$label"); STATUSES+=("FAIL")
  fi
}

# Pre-existing hook test harness (Phase 0, from the earlier hooks plan).
if [ -f .claude/hooks/_test_hooks.sh ]; then
  run_check "hooks: _test_hooks.sh" .claude/hooks/_test_hooks.sh
fi

run_check "phase 1: CLI + slash commands"    .claude/tests/check_phase_1_cli_commands.sh
run_check "phase 2: installer"                .claude/tests/check_phase_2_installer.sh
run_check "phase 3: skills lockfile"          .claude/tests/check_phase_3_skills_lock.sh
run_check "phase 4: provenance sidecar"       .claude/tests/check_phase_4_provenance.sh
run_check "phase 7: tier 3"                   .claude/tests/check_phase_7_tier3.sh

# Compile-layer smoke checks (graphify additions, 2026-04-08).
echo
echo "############################################################"
echo "# compile-layer smoke: extract_cache + pmc_prepass"
echo "############################################################"
SMOKE_OK=1
if python3 scripts/extract_cache.py stats >/dev/null 2>&1; then
  echo "  PASS extract_cache.py stats"
else
  echo "  FAIL extract_cache.py stats"; SMOKE_OK=0
fi
if python3 scripts/pmc_prepass.py --help >/dev/null 2>&1; then
  echo "  PASS pmc_prepass.py --help"
else
  echo "  FAIL pmc_prepass.py --help"; SMOKE_OK=0
fi
if [ "$SMOKE_OK" -eq 1 ]; then
  NAMES+=("compile-layer smoke"); STATUSES+=("PASS")
else
  NAMES+=("compile-layer smoke"); STATUSES+=("FAIL")
fi

END_TS=$(date +%s)
WALL=$((END_TS - START_TS))

echo
echo "############################################################"
echo "# run_all_checks summary"
echo "############################################################"
pass=0; fail=0
for i in "${!NAMES[@]}"; do
  if [ "${STATUSES[$i]}" = "PASS" ]; then
    printf '  \033[32mPASS\033[0m  %s\n' "${NAMES[$i]}"
    pass=$((pass+1))
  else
    printf '  \033[31mFAIL\033[0m  %s\n' "${NAMES[$i]}"
    fail=$((fail+1))
  fi
done
echo
echo "  $pass passed, $fail failed, wall ${WALL}s"
[ "$fail" -eq 0 ]
