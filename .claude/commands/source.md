---
name: source
description: Find cohorts, institutions, or sourcing paths matching a scientific or sourcing question. Runs the vcro-os query workflow against the local wiki.
argument_hint: <natural-language question>
---

You are being invoked via the `/source` slash command in vCRO v2.

Read `.claude/agents/vcro-os.md` in full, then follow the **query workflow gate sequence** exactly. The gates are numbered 0-5. Follow them in order. Do not skip gates. Do not combine gates.

**Gate 1 is MANDATORY.** You must present a summary + `AskUserQuestion` with sharpening questions and STOP. Do not proceed to Gate 2 until the user has answered. This prevents wrong-direction compute.

After user confirms, follow Gates 2-5 autonomously. If discover returns wiki_partial or wiki_insufficient, run the search loop (Gate 3b) per `query/search/SKILL.md` — the user's confirmation in Gate 1 is consent.

Write all artifacts to `store/queries/<date>_<slug>/`. End with a 3-5 sentence summary pointing at `recommendation.md`.

User request:

$ARGUMENTS
