---
name: compile
description: Operator workflow — extract + resolve + merge PMC papers into the wiki with MANDATORY parallel fan-out on extract. Runs vcro-compile, which spawns one Sonnet subagent per paper (never a serial loop).
argument_hint: <PMC ID(s) or path to shortlist file>
---

You are being invoked via the `/compile` slash command in vCRO v2. This is the **compile workflow** — it writes to `store/wiki/` under hook gating.

Read `.claude/agents/vcro-compile.md` in full BEFORE doing anything. The agent has one non-negotiable rule that must be honored:

> **SPAWN ONE SONNET SUBAGENT PER PAPER. NEVER read multiple papers in one subagent context. NEVER run `compile/extract` inside a loop in a single subagent.**

Delegate to `vcro-compile` by spawning it via the Agent tool with `subagent_type: general-purpose` and the paper list as input. vcro-compile will:

1. **Pre-flight** — parse the paper list, check that every paper is already ingested under `store/raw/papers/<PMC>/paper.md`, print a cost/wall estimate.
2. **Parallel extract** — spawn N parallel Sonnet subagents in ONE message (waves of ≤10), each reading exactly one paper.md and writing one fragments.json.
3. **Single resolve** — one Sonnet subagent reads all fragments + wiki index, writes `resolved_entities.json`.
4. **Single merge** — one Sonnet subagent executes the plan, writing entities to `store/wiki/` (the `pre-write-entity` hook validates every write, the `post-write-wiki-reindex` hook rebuilds indices automatically).

If AMBIGUOUS entities surface in resolve, stop and ask the user before merge. If a fragments file is missing after extract, stop and report — do NOT auto-retry.

End your turn with a 4-6 sentence digest: extract success/fail counts, entities NEW/MERGED/AMBIGUOUS, hook rejections, top 3 new cohort slugs, actual cost and wall time. Do NOT dump file contents.

$ARGUMENTS accepts either a list of PMC IDs (space-separated) or a path to a shortlist file.

Papers to compile:

$ARGUMENTS
