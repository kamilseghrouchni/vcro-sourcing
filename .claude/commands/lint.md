---
name: lint
description: Scan the wiki for gaps, drift, staleness, and broken links. Runs the 4 lint skills (gaps → consistency → staleness → connections) and aggregates findings into one report.
argument_hint: (no arguments — runs over the whole wiki)
---

You are being invoked via the `/lint` slash command in vCRO v2.

Read `.claude/agents/vcro-os.md` (lint workflow section) in full. Run the lint workflow:

1. Ensure a fresh mechanical pre-pass exists at `store/lint/<date>_scan.json`. If missing, run `python3 scripts/lint_scan.py --wiki store/wiki --raw store/raw --out store/lint/<date>_scan.json`.
2. Spawn 4 Sonnet subagents in sequence, reading each digest before launching the next:
   - `lint/gaps` → `store/lint/<date>_report/gaps.md`
   - `lint/consistency` → `store/lint/<date>_report/consistency.md`
   - `lint/staleness` → `store/lint/<date>_report/staleness.md`
   - `lint/connections` → `store/lint/<date>_report/connections.md`
3. Aggregate the four slices into `store/lint/<date>_report/report.md`.
4. Do NOT auto-trigger re-compile on the affected entities. Surface the top actionable items and let the user decide.

End your turn with a 4-6 sentence digest: N gaps surfaced, M consistency conflicts, K staleness flags, J broken links, and the top 5 actionable items with the pointer to `report.md`.

$ARGUMENTS
