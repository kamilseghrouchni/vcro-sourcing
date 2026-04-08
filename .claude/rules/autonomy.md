# Autonomy

The non-negotiable default: **do the best thing, then report what you did.** Asking the user to choose between options you could have picked yourself is a failure mode, not a feature.

This rule exists because live runs surfaced a pattern where orchestrators were stopping to offer A/B/C choices ("compile all 6 PMCs OR skip the wedge OR draft search queries for review first") when the right move was obvious and the user had no additional information to contribute. Every one of those stops burns the user's attention, forces a context switch, and produces a worse outcome than just executing.

## The rule

If you can answer the question yourself from the available evidence, **do not ask the user.** Pick the best option, log the decision in the run ledger with a one-line justification, execute, and surface the call in the final digest.

## What this rules OUT

- **"Proceed?" gates on cost/wall-time estimates.** Estimates are not decision inputs for the user. They are orchestrator self-calibration. Log the estimate to the ledger, execute, and include actual vs estimated in the final summary. The one exception: if the estimate is OFF by >5× from the pre-flight figure mid-run, stop and surface the overrun — that is new information, not a repeat question.
- **Multiple-choice menus for obvious calls.** "Option A compile all, option B skip, option C draft queries first — which do you want?" is a red flag. The user picked the workflow already; picking the internal strategy is your job.
- **Ingest permission asks when the wiki is thin.** If discover returns `wiki_partial` or `wiki_empty` and the request cannot be answered from the current wiki, **trigger ingest**. Log the scope. Do not ask. The user's request is the consent to do the work that answers it.
- **"Should I write X to disk?"** Always yes. Persistence is a contract (see rule 3 below), not a permission.
- **"Want me to run lint after this?"** No. Lint runs when the user asks for lint.

## What this rules IN (still ask)

The rule is "don't ask questions you can answer." Some questions the orchestrator genuinely cannot answer, and those still get asked:

- **Ambiguous entity resolution.** Two cohorts from the same study with subtly different wave/sample metadata where compile/resolve returned `AMBIGUOUS`. Human judgment required.
- **Destructive operations.** Entity deletion, wiki merge conflicts that would lose provenance, overwriting an existing bundle with a different composition.
- **Missing hard inputs.** "Compile these papers" with no paper list → ask. "Onboard our biobank" with no name or URL → ask.
- **Cost ceiling overruns mid-run** (>5× pre-flight) — stop, surface, wait.
- **User-stated preferences that contradict the request.** "Find me cohorts under €50K" when the only matching cohorts are €80K+ — surface the contradiction with the best candidate, don't silently filter to zero.

## Persistence is part of doing the work

Every decision the orchestrator makes autonomously must leave a trail on disk so the user can audit it and a future session can resume it:

1. **Search history** — `store/queries/<slug>/search_history.jsonl` with one line per search query run (verbatim query string, hit count, source, timestamp). Subagent context does NOT count as persistence.
2. **Ingest shortlist** — `store/queries/<slug>/ingest_shortlist.md` with the PMC/NCT list the orchestrator chose to ingest, and the rationale.
3. **Run ledger** — `store/runs/<slug>/ledger.md` with per-phase status, decisions, and verification log. See `.claude/skills/jobs/SKILL.md`.
4. **Decision log** — append to the ledger's Decision Log section every time the orchestrator took a call the user would otherwise have been asked to make. One line per decision: what was picked, why, what the alternative was.

If any of those artifacts is missing at the end of a run, the orchestrator silently asked for permission in its own context and forgot to write it down. That is the exact failure the autonomy rule exists to prevent.

## Honest labels when autonomy produces a thin result

When the orchestrator executes autonomously and the result is genuinely thin — "the wiki has 3 weak matches, and ingest would need 40 papers that don't exist in PubMed yet" — **surface the thinness plainly in the final digest**. Do not pad. Do not ask "want me to try harder?" Do not offer A/B/C pivots as hedges. Say:

> "3 weak candidates, provenance depth <0.4, no strong match. Gaps: X, Y, Z. Recommend: pivot to [one specific alternative based on the evidence], or accept the thin result."

That is one opinion, not three options. If the user wants to hear alternatives, they will ask.

## Cross-domain examples (per `.claude/rules/example-rotation.md`)

- **A — neuro fluid biomarker.** Request: "Find AD CSF DNA methylation cohorts with n>100 case-control." Wiki returns 1 weak match. **Wrong:** "Should I ingest 20-40 papers? Options A/B/C?" **Right:** Ingest, log scope, surface the search history to disk, compile, deliver. Final digest: "Wiki was thin, ingested 24 papers, 2 usable cohorts, 1 strong — ADNI blood DNAm as fallback matrix."
- **B — oncology tissue genomics.** Request: "NSCLC FFPE RNA-seq cohorts, commercial use, n≥300." Discover finds 3 strong candidates, 1 has commercial-use "unknown". **Wrong:** "Should I contact the PI to verify commercial-use terms?" **Right:** Deliver all 3 with the commercial-use unknown flagged as a `[blocked]` claim on that candidate's Quality axis. The user decides whether to contact the PI — but only after seeing the card.
- **C — microbiome stool sequencing.** Request: "IBD shotgun cohorts, treatment-naive." Score returns 4 candidates, 2 are over the stated €100K budget. **Wrong:** "Filter out over-budget? Include with a warning? Your call." **Right:** Deliver all 4 in axis-confidence-weighted order, mark the 2 over-budget as `within_budget: no`, and note in the Verdict section that the 2 cheapest matches have `provenance_depth < 0.4`.

## What this rule does NOT say

- It does not say "skip confirmation on destructive ops." Read the "What this rules IN" list.
- It does not say "hide what you did." The opposite — autonomy demands LOUD, honest final reporting.
- It does not say "ignore user preferences." If the user said "budgets don't matter", respect that. If they said "I only want cohorts under €50K", that is a filter, not a preference to second-guess.
- It does not override the ten commandments in `_commandments.md`. Autonomy operates inside those rules, not around them.

## Revisit if

- A live run surfaces a class of decision where the orchestrator should have asked but didn't, and the autonomous call caused real harm (wrong ingest scope, destructive merge, budget blowout). Log the incident in CHANGELOG.md under a dated entry and widen the "still ask" list accordingly.
- Users start complaining that the orchestrator is too aggressive rather than too timid. At that point the pendulum has swung; recalibrate.
