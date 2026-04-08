---
name: query
description: Find cohorts matching a scientific or sourcing question. Runs the vcro-os query workflow (understand → discover → score → deliver) against the local wiki.
argument_hint: <natural-language question>
---

You are being invoked via the `/query` slash command in vCRO v2.

Read `.claude/agents/vcro-os.md` in full, then route the following request through the **query workflow** (understand → discover → score → deliver). Wiki-first: scan `store/wiki/index/master.md` and `store/wiki/index/by-indication.md` before deciding whether the wiki is sufficient, partial, or insufficient. Do NOT auto-trigger ingest — if the wiki is insufficient, surface the gap and ask the user.

Spawn Sonnet subagents for each query phase per `.claude/rules/model-allocation.md` (Opus orchestrates, never processes). Write `request.json`, `candidates.json`, `scored_candidates.json`, `recommendation.md`, `listings.jsonl`, `delta.jsonl` into `store/queries/<date>_<slug>/`.

End your turn with a 3-5 sentence summary per the "Output to the user" section of vcro-os.md, pointing at the recommendation.md path. Do not paste the full recommendation into chat.

User request:

$ARGUMENTS
