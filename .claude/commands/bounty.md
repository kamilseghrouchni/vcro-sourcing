---
name: bounty
description: Procurement workflow. Takes a budget + outcome and produces 1-3 three-leg bundle options (source + screening/QA + assay). Runs vcro-bounty on top of the query pipeline.
argument_hint: <procurement goal with budget and n_target>
---

You are being invoked via the `/bounty` slash command in vCRO v2.

Read `.claude/agents/vcro-os.md` and `.claude/agents/vcro-bounty.md` in full. Route the following request through the **bounty workflow**: understand → discover → score → vcro-bounty composition → `query/bounty/format`.

Rules from vcro-bounty.md that are non-negotiable:
- Wiki-first. Every leg references an EXISTING wiki entity. Do not invent slugs.
- Three legs always (source + screening/QA + assay), even when one is "already performed" or "free".
- Max 3 bundles per request. Pick the most defensible compositions.
- Budget honesty: emit over-budget options with `within_budget = false` and say so in `card.risk`.
- No fake totals. If any leg is "quote required", the composite stays open.
- Domain neutral: A (plasma metabolomics) framing does NOT import into B (oncology FFPE) or C (microbiome stool) compositions. See `.claude/rules/example-rotation.md`.

Emit bundle entities to `store/wiki/bundles/` via `query/bounty/format`. End your turn with a 4-6 sentence digest: bundle ids + within_budget flags + dominant unknowns + one-sentence rationale for which you would pick (not a composite score).

Procurement request:

$ARGUMENTS
