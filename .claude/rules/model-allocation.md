# Model Allocation

Which model runs which phase. Load-bearing rule: **Opus orchestrates, never processes.**

## The allocation table

| Phase | Model | Why |
|---|---|---|
| Routing decisions (vcro-os, vcro-bounty, vcro-onboard) | **Opus** | Multi-step workflow choice, gap-aware decisions, user-facing summarisation. The orchestrator never reads raw JSON or paper.md — it reads 3-5 sentence digests from subagents. |
| compile/extract (one paper → fragments) | **Sonnet** | Reads full paper.md, picks 5-8 dimensions, emits structured JSON. Per-paper, stateless, parallelisable. The bottleneck phase. |
| compile/resolve (fragments → resolution_plan) | **Sonnet** | Reads fragments + wiki index, decides NEW / MERGE_INTO / AMBIGUOUS. Single-shot per batch. |
| compile/merge (plan → wiki writes) | **Sonnet** | Pure writer with idempotency contract. Hook-gated. Tool-call heavy on the back-reference pass. |
| query/understand (request text → request.json) | **Sonnet** | Parsing + minimal inference. Fast. |
| query/discover (request.json → candidates.json) | **Sonnet** | Wiki index scan + candidate filtering. |
| query/score (candidates → scored_candidates) | **Sonnet** | Three-axis decomposed scoring. Reads entity articles + pricing-data.md. |
| query/deliver (scored → recommendation.md + listings.jsonl) | **Sonnet** | Pure assembly from JSON inputs. |
| query/bounty/format (composition → bundle entity) | **Sonnet** | Pure writer for bundle entities. |
| catalog/* (catalog, compliance, price) | **Sonnet** | Read wiki, produce institutional listing drafts. |
| lint/* (gaps, consistency, staleness, connections) | **Sonnet** | Read scan + wiki, classify findings. |
| Pure Python scripts (pmc_convert, ct_convert, wiki_index, lint_scan, run_log, extrapolate) | **No model** | Pure stdlib. No LLM. |

## Hard rules

1. **The orchestrating Opus session never reads raw JSON or paper.md.** It spawns Sonnet subagents and reads their 3-5 sentence digests. The only exception: Opus may use the Read tool on a specific load-bearing field of an output file (e.g. `verdict` in candidates.json) to make the next routing decision, AFTER the digest is read.

2. **Sonnet subagents return digests, not file dumps.** Every dispatch prompt ends with "Return a 3-5 sentence digest reporting X. Do NOT return file contents." If the subagent dumps a 200-line JSON in its result, the dispatch prompt was wrong.

3. **No Opus-on-Opus delegation.** Opus orchestrates by spawning Sonnet, not other Opus instances. The Karpathy "compute is spent at the leaves" principle.

4. **Haiku is reserved for true script-execution-style work.** As of v2 there is no Haiku usage; the Python scripts cover that ground without an LLM call. If a future workflow needs cheap structured-output classification at very high volume (e.g. classifying 10,000 papers by domain), Haiku is the right model — but extract should still be Sonnet because the implication-finding needs the larger model.

5. **The full 330-paper compile is parallel Sonnet, not serial Opus.** The wedge proved this scales. Opus would burn 5-10× the tokens for the same work.

6. **Live-tested deviations** logged in `.claude/assumption-log.md`.

## What this rules out

- **Opus reading paper.md to "double-check" a Sonnet extraction.** That's processing, not orchestration.
- **Sonnet making routing decisions.** Sonnet runs ONE skill at a time. The "which workflow to pick" decision belongs to Opus.
- **Mixed-model batches.** A single batched extract dispatch uses the same model across all parallel subagents.

## Cost intuition (from the 50-paper wedge)

| Phase | Model | Tokens / unit | Wall / unit (10× parallel) |
|---|---|---|---|
| Extract | Sonnet | ~55K / paper | ~3 min / paper |
| Resolve | Sonnet | ~140K / 10-paper batch | ~10 min / batch |
| Merge (batched) | Sonnet | ~85K / 10-paper batch | ~14 min / batch |

For the full 330-paper run, the projected cost is ~20M tokens and ~15h wall time. Opus would 5× that cost without changing the output.
