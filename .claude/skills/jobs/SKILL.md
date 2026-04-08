---
name: jobs
description: How to run long batch jobs in vCRO — compile wedges, full 330-paper runs, replay scans, lint sweeps — so they survive context compaction and produce inspectable telemetry.
---

# jobs

You are running a long job that will not complete in a single conversation's working memory. This file is the playbook for doing that without losing the run if Claude's context compacts, without burning 10× the tokens by re-reading output files, and without breaking the Opus-orchestrates-never-processes rule.

## What counts as a long job

- **Compile wedge** — extract + resolve + merge over 10-50 papers (~5-20 min).
- **Full compile run** — 330 PMC papers, the wedge extrapolated (~15 h wall, ~20M tokens, ~$150).
- **Replay scan** — re-running `query` over every entity in the wiki to find which queries now surface which new cohorts (~30 min).
- **Lint sweep** — gaps → consistency → staleness → connections across the whole wiki (~10 min).
- **Bounty composition over a large catalog** — building 3-leg bundles across 100+ source options.

If the task will touch more than ~10 files or take more than ~5 min wall, it is a job and needs the scaffolding below.

## The three rules

1. **Externalize working memory.** Every job writes a ledger file at `store/runs/<date>_<slug>/ledger.md` with task-level status. Update it after every phase. If the orchestrator's context is compacted mid-run, a fresh session can pick up from the ledger without re-reading every fragment file.
2. **Parallel at the leaves.** The Karpathy principle from `.claude/rules/model-allocation.md`: compute is spent at the leaves, not in the orchestrator. One Sonnet subagent per paper, per entity, per candidate — never loop in a single context. A batch of 10 in parallel is 5-10× cheaper AND 10× faster than serialized.
3. **Digests, not file dumps.** Every subagent returns a 3-5 sentence digest. The orchestrator reads the digest, writes the load-bearing field to the ledger, and moves on. It does not re-read the output files.

## Ledger shape

```markdown
# <Job name>: <slug>

- Started: <ISO timestamp>
- Strategy: <row from the scale-decision table in the relevant agent>
- Parallelism cap: <cap>
- Total tasks: <N>
- Estimated cost: $<X>
- Estimated wall: ~<Y> min

## Task Ledger

| Task | Phase | Status | Result | Wall | Notes |
|------|-------|--------|--------|------|-------|
| ... | ... | pending | - | - | wave 1 |

## Decision Log
(disambiguation calls, retries, operator confirmations)

## Verification Log
| Item | Method | Status | Evidence |
|------|--------|--------|----------|
```

After every wave / batch / phase, update the ledger. The ledger is the job's persistent external memory.

## Pre-flight (always)

Before starting a long job, print a cost/time estimate to the user and get explicit confirmation:

```
vcro-<workflow>: <N> tasks to process
  Expected: ~$<per-task> × <N> = $<total>, ~<per-task-wall> × parallel_cap = <total-wall>
  Output dir: store/runs/<slug>
Proceed?
```

Rules:
- N ≤ 3: proceed without asking.
- N 4-50: print estimate, wait for explicit "yes" / "go".
- N > 50: also ask for a parallelism cap and an explicit cost ceiling.

## Parallel fan-out

Use the Agent tool with multiple tool calls in a single message. Claude Code parallelizes calls within a single message. Do NOT spawn sequentially across multiple messages — that serialises.

```
Agent(subagent_type: general-purpose, model: sonnet, prompt: ...)
Agent(subagent_type: general-purpose, model: sonnet, prompt: ...)
Agent(subagent_type: general-purpose, model: sonnet, prompt: ...)
```

Parallelism cap defaults:
- extract fan-out: 10
- entity-per-subagent score: 10
- institution onboard: 5 (more expensive per task)

If N > cap, batch into `ceil(N / cap)` waves. Read digests from wave K before launching wave K+1.

## Caching

For compile jobs: `scripts/extract_cache.py check --paper <path>` before fan-out. Cache hits hydrate from `store/runs/_cache/extract/<sha>.json` instead of spawning a subagent. Saves the full extract token budget on re-runs. See commit `8a36196` for the wiring contract.

For query jobs: there is no query cache (results depend on the wiki state which changes between runs). If you are replaying the same request against an unchanged wiki, copy the prior `store/queries/<slug>/` manually — do not re-run the pipeline.

## Cost ceiling

Every job MUST have an explicit cost ceiling. If the ledger's running cost exceeds 1.5× the pre-flight estimate, stop and surface the overrun to the operator before spawning the next wave.

## What NOT to do

- Do not run long jobs as a single Sonnet subagent. That is a loop in one context — violates the parallel-at-the-leaves rule.
- Do not write raw JSON output into the orchestrator's context window. Use the Read tool on a specific load-bearing field (e.g. `verdict` in `candidates.json`), not on the whole file.
- Do not re-ingest papers that are already under `store/raw/papers/`. Check disk first.
- Do not delete a ledger mid-run. Append a "Retry" section if you need to rerun a task; keep the history intact.
- Do not ship a long-running job to the user without the final "actual vs estimated" reconciliation line in the output summary.

## Length budget

The ledger grows with the job. The orchestrator's context does not — it reads the ledger's summary tables, not every row.
