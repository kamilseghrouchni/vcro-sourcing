---
name: query-search
description: External-source search loop. Runs when the wiki is thin for a request. Iterates PubMed/EuropePMC/ctgov queries with deterministic coverage scoring and mechanical synonym rewriting until coverage is sufficient or the round cap is hit. Every round is persisted to disk.
---

# query/search

The external-source search loop. Runs when `query/discover` reports `wiki_partial` or `wiki_empty` and the autonomy rule says the orchestrator should source new papers without asking. Produces a shortlist of PMIDs for `vcro compile` to ingest.

This skill is **not a subagent**. It is run inline by the `vcro-os` query workflow — the loop body lives in the orchestrator context so every query decision is visible in the audit log and no context is hidden inside a Sonnet spawn.

## The loop

```
round_k:
  1. queries_k       ← orchestrator picks query strings (round 1)
                       OR applies mechanical rewrites from round k-1
  2. hits_k          ← pubmed_api.py / europepmc_api.py (subprocess)
  3. triage_k        ← orchestrator reads titles/abstracts, keep/reject
  4. coverage_k      ← scripts/search_coverage.py (pure stdlib)
  5. stop?           ← coverage_k.stop_condition_met
  6. gap_k           ← orchestrator names the gap (if still looping)
  7. queries_{k+1}   ← orchestrator rewrites using coverage + rewrite_k
```

Bends 1, 3, 6, 7 are LLM judgment (the orchestrator). Steps 2, 4, 5 are deterministic Python. Every bend writes to disk before the next bend runs.

## Inputs

- `request_path`: `store/queries/<slug>/request.json` (output of `query/understand`).
- `discover_report`: `store/queries/<slug>/discover_report.md` from a prior discover pass (if available). Tells you what the wiki already has, so round 1 does not re-search what discover already covered.

## Directory contract

```
store/queries/<slug>/search/
├── round_1.json              # {round, ts, queries:[{source, query, hits}], triage:{}}
├── coverage_1.json           # scripts/search_coverage.py output
├── rewrite_1.json            # scripts/search_rewrite.py output (only if looping)
├── round_2.json
├── coverage_2.json
├── ...
├── search_history.jsonl      # one line per query, every round (autonomy rule 3)
└── ingest_shortlist.md       # final PMID list + rationale (orchestrator writes)
```

**Every file above is mandatory.** A run that produces `round_1.json` without `coverage_1.json` is broken. A run that hits the round cap without `search_history.jsonl` is broken.

## Round 1 — initial queries

The orchestrator picks 4-8 query strings based on the request. Rules:

1. **Use canonical terms.** PubMed's MeSH expansion is excellent for canonical biomedical terms. Do NOT client-side-rewrite canonical queries — let PubMed do it.
2. **One angle per query.** A query combines one indication + one modality + at most one qualifier (longitudinal, case-control, commercial use, etc). Do not stack 4 disqualifiers into a single query — PubMed's AND collapses the hit count fast.
3. **Spread across indications in the request.** If the request names "Alzheimer OR ALS", at least one query per indication.
4. **At least one query that omits the niche qualifier.** If the request is "CSF DNA methylation Alzheimer case-control n>100", include one broader query like "CSF DNA methylation Alzheimer" — the qualifier filtering happens at triage, not in the PubMed term.
5. **Record each query in `search_history.jsonl`** the instant you run it, even before you see the hit count.

Run the queries:

```
python3 scripts/pubmed_api.py --queries "q1" "q2" "q3" --retmax 50 \
    > store/queries/<slug>/search/_raw_round_1.json
python3 scripts/europepmc_api.py --queries "q1" "q2" "q3" \
    > store/queries/<slug>/search/_raw_round_1_epmc.json
```

Then assemble `round_1.json` with the schema described in `scripts/search_coverage.py`.

## Triage (bend 3)

For every unique PMID in round_k, read the title + first 200 words of abstract (use the `esummary` output — do NOT fetch full-text). Tag with one of:

- `keep` — matches the request's indication + modality + hard filters.
- `reject:wrong_indication` — off-topic indication.
- `reject:wrong_modality` — off-topic modality.
- `reject:hard_negative_X` — matches a hard_negative in request.
- `reject:duplicate` — already in the wiki (PMID/PMC in `store/wiki/index/master.md`).
- `reject:review` — review or editorial, no cohort data.
- `reject:low_relevance` — catch-all, use sparingly.

Write the triage map into `round_k.json` at the `triage` key. Then score:

```
python3 scripts/search_coverage.py \
    --round    store/queries/<slug>/search/round_1.json \
    --request  store/queries/<slug>/request.json \
    --wiki-index store/wiki/index/master.md \
    --out      store/queries/<slug>/search/coverage_1.json
```

Read `coverage_1.json`. Decide based on `stop_reason`:

- `sufficient` / `sufficient_coverage` → exit loop, hand shortlist to compile.
- `null` (no stop) → loop to round 2.
- `round_cap` / `exhausted` → exit loop with whatever was found. Surface thinness in the final digest per the autonomy rule.

## Rewriting for round k+1 (bends 6 + 7)

Run the mechanical rewriter first:

```
python3 scripts/search_rewrite.py \
    --coverage store/queries/<slug>/search/coverage_1.json \
    --round    store/queries/<slug>/search/round_1.json \
    --synonyms references/search-synonyms.md \
    --out      store/queries/<slug>/search/rewrite_1.json
```

`rewrite_1.json` has two buckets:

1. `mechanical_rewrites` — these are already rewritten (vendor → canonical per the synonyms file). Use them verbatim in round 2. **No LLM judgment needed.**
2. `needs_llm_judgment` — queries with no mechanical rewrite. You (the orchestrator) must read `coverage_1.json`, name the specific gap ("zero hits on Knight ADRC", "missing ALS indication coverage"), and write a new query string that addresses it. Append the new query to round 2's `queries` array alongside the mechanical rewrites.

Writing rules for bend 7 rewrites:

- **One gap per rewritten query.** Do not rewrite multiple gaps into one query — it produces an over-AND'd string that returns zero hits again.
- **Broaden, do not narrow.** If round 1 under-performed, round 2 drops a qualifier, not adds one.
- **Reference the gap in `search_history.jsonl`** as the `notes` field so the audit trail explains why this query exists.
- **Never reuse a zero-hit query verbatim.** If you cannot rewrite it, drop it from round 2.

Then repeat the loop: run queries, assemble `round_2.json`, triage, score.

## Stop conditions (hard rules)

1. **`max_rounds = 3`.** Hard cap. No exceptions.
2. **`target_new_pmids = 20`** by default (tune via CLI flag). If a round produces ≥20 new PMIDs with no zero-hit queries, stop even if not every indication is covered — surface the missing indication as a gap in the final digest.
3. **`round_delta_pmids == 0` in round k>1 = exhausted.** The corpus has no new hits; round k+1 would be waste.
4. **Every kept PMID must end up in `ingest_shortlist.md`** with a one-line rationale ("keep: CSF DNAm Alzheimer case-control n=156, matches request modality+indication+n_target").

## What this skill does NOT do

- **Does not compile.** The shortlist is handed to `vcro compile` (a separate agent) for ingest + extract + resolve + merge.
- **Does not fetch full-text.** Triage is title + abstract only. Full-text reading happens during compile/extract, not during search.
- **Does not score or rank cohorts.** Scoring is `query/score`, which runs after compile populates the wiki.
- **Does not spawn parallel subagents.** The loop is sequential (each round depends on the prior round's coverage). The parallelism in vCRO lives in compile, not search.
- **Does not ask the user.** Autonomy rule. The loop runs to completion, the final digest reports what was found and what was missing.

## Length budget

A typical loop is 1 round (canonical query, 20+ hits, stop). A niche query might hit 2-3 rounds. Every run writes 1-3 `round_*.json` + matching `coverage_*.json` + optional `rewrite_*.json` files, plus the append-only `search_history.jsonl`. Total disk footprint: <50 KB per query workflow.
