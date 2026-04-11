# .claude/tests/

Phase-check harness for vCRO v2. Modeled on `.claude/hooks/_test_hooks.sh` — every phase has its own self-contained shell script that prints PASS/FAIL lines, runs in under 30 seconds, and exits non-zero on any failure.

## Layout

```
.claude/tests/
├── run_all_checks.sh              # master runner
├── check_phase_1_cli_commands.sh  # bin/vcro + .claude/commands/
├── check_phase_2_installer.sh     # scripts/install.sh end-to-end
├── check_phase_3_skills_lock.sh   # vcro-skills-lock.json write + verify
├── check_phase_4_provenance.sh    # scripts/provenance_sidecar.py
├── check_phase_7_tier3.sh         # CHANGELOG + labels + release workflow + stub skills
└── fixtures/                      # pinned test inputs
```

## Running

```bash
# Everything (target: <2 min wall on a warm repo)
bash .claude/tests/run_all_checks.sh

# One phase
bash .claude/tests/check_phase_1_cli_commands.sh
```

## The one rule

**No phase N+1 until phase N is green.** If a check fails, stop and fix the phase before moving on. The `run_all_checks.sh` master runner exists so this rule is cheap to enforce — one command, all phases, PASS/FAIL at the bottom.

## Adding a new phase check

1. Write `check_phase_<N>_<slug>.sh` following the shape in `check_phase_1_cli_commands.sh`: `set -u`, `pass/fail` counters, `PASS()`/`FAIL()` helpers, a `summary` block, and `[ "$fail" -eq 0 ]` as the final line.
2. Keep it self-contained. No network. No state outside `/tmp/` or the repo's own fixture dirs. Clean up after itself via `trap`.
3. Under 30 seconds. Integration tests that hit real APIs belong in a separate harness.
4. Add a `run_check "phase <N>: <label>" .claude/tests/check_phase_<N>_<slug>.sh` line to `run_all_checks.sh` in the right position.
5. Re-run `bash .claude/tests/run_all_checks.sh` — must still be green.

## Fixtures

Live inputs used by checks (sample entities, example query dirs, bogus frontmatter) live under `fixtures/`. Never point a check at a real `store/wiki/` entity — drift in that entity will silently break the check. Copy to a fixture if you need stable inputs.

## Deferred phases

- **Phase 5 — docs site** (`scripts/docs_build.py` + `mkdocs.yml`) — design captured in `.claude/plans/ship-as-software.md`, picked up post-dogfooding.
- **Phase 6 — landing page** (`website/index.html`) — same.
- **Phase 9 — CLI UX polish** (spinner, outcome>output) — same. Feynman screenshots at `~/Desktop/feynman-screenshots` are the visual reference.

When those phases land, add their check scripts here and wire them into `run_all_checks.sh`.
