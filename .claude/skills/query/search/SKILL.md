---
name: query-search
description: Multi-source search loop. Runs when the wiki is thin for a request. Searches PubMed, ClinicalTrials.gov, EuropePMC, snowball, and web in parallel. Two-pass triage with automated metadata validation. Produces a shortlist of PMIDs/NCTs for compile.
---

# query/search

Multi-source search that runs as part of the query workflow's Gate 2 parallel fan-out. External searches (Tracks B-E) fire immediately alongside the wiki discover (Track A). PubMed keyword search runs after wiki discover returns (Track A's second step) so queries target wiki gaps. Produces a shortlist of PMIDs/NCTs for `vcro compile` to ingest.

This skill is **not a subagent**. It is run inline by the `vcro-os` orchestrator — the search calls live in the orchestrator's own context so every decision is visible in the audit log.

## Integration with Gate 2

The orchestrator fires Tracks B-E (this skill's sources) in parallel with Track A (wiki discover). This skill governs the search queries, triage, and coverage scoring for Tracks B-E. Track A (wiki → PubMed) is handled by the discover subagent + orchestrator's PubMed follow-up. Results from all tracks are merged in Gate 3.

## The loop

```
round_k:
  1. queries_k       ← orchestrator picks query strings (round 1)
                       OR applies mechanical rewrites from round k-1
  2. hits_k          ← PARALLEL fan-out across all applicable sources
  3. auto_filter_k   ← metadata-based automated triage (no LLM)
  4. triage_k        ← orchestrator reads titles/abstracts of SURVIVORS only
  5. coverage_k      ← scripts/search_coverage.py (pure stdlib)
  6. stop?           ← coverage_k.stop_condition_met
  7. gap_k           ← orchestrator names the gap (if still looping)
  8. queries_{k+1}   ← orchestrator rewrites using coverage + rewrite_k
```

Bends 1, 4, 7, 8 are LLM judgment (the orchestrator). Steps 2, 3, 5, 6 are deterministic or tool-based. Every bend writes to disk before the next bend runs.

## Inputs

- `request_path`: `store/queries/<slug>/request.json` (output of `query/understand`).
- `discover_report`: `store/queries/<slug>/discover_report.md` from a prior discover pass (if available). Tells you what the wiki already has, so round 1 does not re-search what discover already covered.

## Directory contract

```
store/queries/<slug>/search/
├── round_1.json              # {round, ts, queries:[{source, query, hits, tool}], auto_filter:{}, triage:{}}
├── coverage_1.json           # scripts/search_coverage.py output
├── rewrite_1.json            # scripts/search_rewrite.py output (only if looping)
├── round_2.json
├── coverage_2.json
├── ...
├── search_history.jsonl      # one line per query, every round (autonomy rule 3)
└── ingest_shortlist.md       # final PMID/NCT list + rationale + PMC availability status
```

**Every file above is mandatory.** A run that produces `round_1.json` without `coverage_1.json` is broken. A run that hits the round cap without `search_history.jsonl` is broken.

## Sources — intent-dependent, launched in parallel

The orchestrator fires ALL applicable sources in a **single message with multiple tool calls / Bash calls**. Do not run them sequentially — that wastes wall time. Results are merged into one `round_k.json` after all return.

| Source | Tool | When | What it finds |
|--------|------|------|---------------|
| PubMed keyword | `scripts/pubmed_api.py` (subprocess) | Always | Published cohort studies with data |
| PubMed snowball | `scripts/pubmed_api.py` with PMIDs from wiki | When wiki has matching entities | Papers citing or cited by known good papers |
| PubMed prior art | `scripts/pubmed_api.py` (subprocess) | Commission intent | Papers that ran the EXACT assay on the EXACT specimen type for this indication — proves feasibility or documents failures |
| ClinicalTrials.gov | `scripts/clinicaltrials_api.py` (subprocess) | Always (scores biospecimen retention for commission) | Trials with biospecimen retention, observational cohorts |
| WebSearch — specimens | `WebSearch` tool | Commission intent | Biobank websites, institutional specimen pages |
| WebSearch — providers | `WebSearch` tool | Commission intent | Academic cores, CROs, and commercial labs that can run the requested assay |

**Design principle:** Scripts by default — they're reliable, deterministic, and don't depend on MCP session state. PubMed MCP tools (`search_articles`, `find_related_articles`, `get_article_metadata`) are available as enrichment AFTER the script-based search returns, not as the primary search path. ClinicalTrials.gov runs for ALL intents (not just commission) because trials with biospecimen retention are relevant for access intent too. `search_coverage.py` and `search_rewrite.py` stay as-is — pure stdlib deterministic scorers.

### Snowball search

Before round 1 keyword queries, read `discover_report.md` to get the PMIDs of existing wiki entities that matched the request. Feed those PMIDs into `pubmed_api.py` as seed queries (use author names + key terms from the seed papers to find related work). Snowball hits are tagged `source: "snowball"` in `search_history.jsonl`. If PubMed MCP is available (`find_related_articles`), use it as an enrichment step AFTER the script search returns — but do not depend on it.

### Prior art search (commission intent only)

The buyer needs to know: has anyone run THIS assay on THIS specimen type for THIS indication? Prior art is the strongest evidence for fit-for-purpose — it proves the approach works (or documents why it failed).

Run 3-5 PubMed queries targeting assay × specimen × indication. **Critical: expand assay synonyms.** Most assays have multiple names (WGBS = WGMS = "whole genome bisulfite sequencing" = "whole genome methylation sequencing"). A single-name query misses half the literature. Build the synonym list from `references/providers/<provider>-<assay>.md` if it exists (the Sources section lists papers that use various names), or from the request.modality field + common equivalents.

Example synonym expansion for WGBS:
- `"whole genome bisulfite sequencing" blood Alzheimer case control`
- `"whole genome methylation sequencing" blood Alzheimer` (WGMS — same technique, enzyme-converted variant)
- `WGBS OR WGMS blood DNA methylation neurodegenerative`
- `"enzymatic methyl-seq" blood Alzheimer` (EM-seq — newer protocol, same output)
- `"bisulfite sequencing" blood DNA Alzheimer protocol` (broader, captures methods papers)

The principle: **cast wide on assay names, narrow on specimen type + indication.** A prior art paper with the wrong assay name but the right technique is still prior art.

Template queries (replace bracketed terms):
- `"[assay_full_name]" [specimen_type] [indication] case control` (exact match)
- `"[assay_synonym]" [specimen_type] [indication]` (one per synonym)
- `[assay_abbreviation] OR [assay_synonym_abbreviation] [specimen_type] [indication]` (catch-all)
- `"[assay_full_name]" [specimen_type] protocol` (broader — methods papers)
- `"[specimen_type] [assay_abbreviation] quality" OR "input requirements"` (QC/feasibility)

Prior art hits are tagged `source: "prior_art"` in `search_history.jsonl`. They are NOT compiled into the wiki as cohort entities — they feed the score skill's `platform_validation` and `pre_analytical` verdicts. Key fields to extract from prior art hits (title + abstract only):
- Sample size and specimen type used
- Assay protocol details (coverage, kit, input amount)
- Success/failure outcome
- Quality metrics reported (mapping rate, conversion efficiency, etc.)

Write prior art findings to `store/queries/<slug>/search/prior_art.json`:
```json
[
  {"pmid": "...", "title": "...", "assay": "...", "specimen": "...", "n": 0,
   "outcome": "success | partial | failure", "key_finding": "one sentence",
   "relevance": "direct (same assay+specimen+indication) | analogous (same assay+specimen, different indication) | methods (same assay, different specimen)"}
]
```

The score skill reads this file. A `direct` prior art hit with `outcome: success` upgrades `platform_validation.verdict` from `missing` to `partial` (or from `partial` to `good`). A `failure` hit is equally valuable — it documents what went wrong.

### Web search — specimens (commission intent only)

Run 2-3 targeted web searches in parallel with PubMed/CT:
- `"[indication] biobank specimens available [specimen_type]"`
- `"[indication] biorepository [specimen_type] commercial"`
- `"[institution from wiki] biobank sample request"`

Web results become **search_lead candidates** in candidates.json — they're immediately scoreable, not just logged. Write results to `search/track_c_specimens.json`:

```json
[
  {
    "lead_id": "<institution-name-slug>",
    "candidate_type": "search_lead",
    "source": "web",
    "source_url": "https://...",
    "canonical_name": "SPARC-IBD (Crohn's & Colitis Foundation)",
    "specimen_type": ["stool"],
    "headline_n": 7000,
    "indication": ["inflammatory bowel disease"],
    "treatment_naive_confirmed": false,
    "access_route": "CCF specimen request portal",
    "notes": "..."
  }
]
```

The orchestrator at Gate 3c merges these into candidates.json as search_lead entries. The score skill scores them with thin scoring (inline fields only, no wiki article). Log each web query in `search_history.jsonl` with `source: "web"`.

### Web search — providers (commission intent only)

Find who can run the requested assay. This is a DIFFERENT search from specimen sources. Run 2-3 queries:
- `"[assay_name] service provider" OR "core facility" site:edu` (academic cores with published pricing)
- `"[assay_name] commercial service" "[specimen_type]"` (CROs and commercial labs)
- `"[assay_name] per sample cost" OR "pricing" OR "rate"` (targets pages with published fees)

Also check `references/pricing-data.md` — it may already have entries for this assay type under "Academic Core Facilities" or "Kit Pricing".

Write provider findings to `store/queries/<slug>/search/providers.json`:
```json
[
  {"name": "...", "type": "academic_core | commercial_lab | cro",
   "url": "...", "assay_offered": "...",
   "cost_per_sample": "...", "cost_source": "published | quote_required",
   "specimen_types_accepted": ["..."],
   "turnaround": "...", "location": "...",
   "notes": "..."}
]
```

**Every cost figure must cite a URL.** If a provider's website says "Request a Quote", log `cost_source: "quote_required"` and include the contact URL. Do NOT estimate pricing from training data.

The score skill reads this file to populate the `cost.legs.assay` field. The deliver skill surfaces providers in the "Assay provider" section of sourcing paths.

**Important:** Provider search is a COMPLEMENT to `references/pricing-data.md`, not a replacement. If pricing-data.md already has verified pricing for the requested assay, cite it directly. Provider search adds providers NOT already in the reference file.

## Gap resolution mapping (used by Gate 3c in vcro-os)

Gate 3c walks open links in the sourcing chain and fires targeted searches. This table maps gap types to search actions. The orchestrator uses this mapping — this skill documents the rules.

| Gap type | What's missing | Search action | Tool | Bound |
|---|---|---|---|---|
| provider_unknown | No provider found for this assay | WebSearch: `"[assay] service" OR "core facility" [specimen_type]` | WebSearch | 2 queries |
| provider_requirements | Provider found but specs unknown | Visit provider service page, extract specimen requirements | Playwright/Chrome or WebFetch | 2-3 pages per provider |
| pricing_unknown | Provider found but no cost data | Check pricing-data.md; if absent, visit provider pricing page | WebFetch | 1 page per provider |
| specimen_availability | Entity lacks dim 15, no specimens block | Visit institution biobank/portal page | Playwright/Chrome | 1 page per candidate |
| prior_art_missing | No paper found for assay × specimen × indication | PubMed with broader terms (same assay, any indication) | pubmed_api.py | 1 query |
| access_timeline_unknown | DUA/MTA processing time unclear | Read entity card.action for access mechanism; if timeline not stated, WebFetch institution's access FAQ or policy page | WebFetch | 1 page |
| shipping_requirements | Specimen shipping path unclear | Classify by specimen type: CSF/blood = UN3373 Category B (dry ice, IATA P650); FFPE = ambient; stool = varies by preservative. If cross-border: WebSearch `"biological specimen import [destination country] [specimen type]"` | WebSearch | 1 query |
| commercial_use_unknown | Commercial terms not in entity | WebSearch `"[institution name] commercial use policy"` or `"[cohort name] commercial access"` | WebSearch | 1 query |

**Constraints:**
- Total web fetches in Gate 3c: max 10
- Total PubMed queries: max 3
- Total time: ~5 minutes
- If a gap can't be grounded in 2 attempts, it stays open with `note: "searched [what], found nothing public"`

The gap resolution log goes to `search_history.jsonl` with `source: "gap_resolution"`.

## Round 1 — initial queries

The orchestrator picks 4-8 query strings based on the request. Rules:

1. **Use canonical terms.** PubMed's MeSH expansion is excellent for canonical biomedical terms. Do NOT client-side-rewrite canonical queries — let PubMed do it.
2. **One angle per query.** A query combines one indication + one modality + at most one qualifier (longitudinal, case-control, commercial use, etc). Do not stack 4 disqualifiers into a single query — PubMed's AND collapses the hit count fast.
3. **Spread across indications in the request.** If the request names "Alzheimer OR ALS", at least one query per indication.
4. **At least one query that omits the niche qualifier.** If the request is "CSF DNA methylation Alzheimer case-control n>100", include one broader query like "CSF DNA methylation Alzheimer" — the qualifier filtering happens at triage, not in the PubMed term.
5. **Record each query in `search_history.jsonl`** the instant you run it, even before you see the hit count.

Run the queries using scripts (reliable, no session dependency):

```
# PubMed — script (primary, always)
python3 scripts/pubmed_api.py --queries "q1" "q2" "q3" --retmax 50 \
    > store/queries/<slug>/search/_raw_round_1_pubmed.json

# ClinicalTrials.gov — script (always — scores biospecimen retention)
python3 scripts/clinicaltrials_api.py --condition "<indication>" --terms "<specimen_type> biospecimen" \
    > store/queries/<slug>/search/_raw_round_1_ctgov.json

# WebSearch — MCP tool (commission intent — biobank/institutional pages)
WebSearch(query="<indication> biobank <specimen_type> specimens available")

# Web — MCP tool (commission intent only)
WebSearch(query="<indication> biobank <specimen_type> specimens available")
```

**ALL of these fire in a single orchestrator turn.** Merge results into `round_1.json`.

## Triage — two passes

### Pass 1 — Automated filter (no LLM, fast)

For all unique PMIDs from round_k, call `mcp__plugin_pubmed_PubMed__get_article_metadata` in batch. Then apply automated rules:

- **Auto-reject:**
  - `publication_type` contains "Review", "Editorial", "Comment", "Letter", "News" → `reject:review`
  - `publication_type` contains "Case Reports" AND `request.n_target > 30` AND `request.intent == access` → `reject:underpowered`
  - PMID/PMC already in `store/wiki/index/master.md` → `reject:duplicate`

- **Auto-flag (keep but mark):**
  - No PMC full-text available (check via `mcp__plugin_pubmed_PubMed__convert_article_ids`) → `flag:no_pmc`
  - MeSH terms don't intersect `indication_match` → `soft_concern:mesh_mismatch`

- **Commission-intent override:** Case reports (n<30) that name an institution with specimens are NOT rejected. Tag as `keep:institution_signal` — see section below.

Write auto-filter results to `round_k.json` at the `auto_filter` key.

### Pass 2 — LLM triage (orchestrator, on survivors only)

Read title + abstract of survivors from pass 1. Tag with one of:

- `keep` — matches the request's indication + modality + hard filters.
- `keep:institution_signal` — too small for direct use but names an institution with banked specimens (commission intent only).
- `reject:wrong_indication` — off-topic indication.
- `reject:wrong_modality` — off-topic modality.
- `reject:hard_negative_X` — matches a hard_negative in request.
- `reject:low_relevance` — catch-all, use sparingly.

Write the triage map into `round_k.json` at the `triage` key. This pass operates on a pre-filtered set (typically 50% smaller than raw hits).

## Small studies as institution signals (commission intent)

For commission intent, a paper with n=15 AD CSF samples from Hospital X **proves Hospital X has an AD CSF biobank** — even if the cohort is too small as a data source. These small studies are valuable as institution pointers.

**Triage tag:** `keep:institution_signal` — the paper enters the compile shortlist tagged `compile_as: institution` (not cohort). Compile extracts the institution entity + specimen info (dim 15) + access route. The institution becomes a candidate in re-discover, not the cohort.

**Example:** A case-series paper (n=8) from Emory ADRC describing CSF metabolomics in AD → too small as a cohort, but proves Emory ADRC has AD CSF specimens. Compile creates/enriches the Emory institution entity with specimen types + access route. Re-discover finds Emory as a commission candidate.

**Rule:** Below n=30: reject for access intent, keep as institution_signal for commission intent.

## Pre-compile validation gate

After triage, before handing shortlist to compile, validate each `keep` PMID:

1. Check PMC availability via `mcp__plugin_pubmed_PubMed__convert_article_ids`
2. If PMC available → confirmed for compile (`status: ready`)
3. If no PMC → check if DOI-based full text is fetchable (`status: doi_only`)
4. If neither → mark as `blocked:no_fulltext`, don't send to compile

Write validation results to `ingest_shortlist.md`:
```
## Shortlist for compile

### Ready (PMC available)
- PMC1234567 — AD CSF metabolomics n=156, matches indication+modality+n_target
- PMC9876543 — AD biobank specimen retention, institution signal

### DOI only (no PMC)
- PMID:98765432 — AD CSF lipidomics n=200, DOI: 10.1234/... — needs DOI fetch

### Blocked (no full text)
- PMID:11111111 — abstract only, conference proceedings

### Institution signals (commission intent)
- PMC5555555 — n=12, Emory ADRC CSF metabolomics → compile_as: institution
```

## Coverage scoring

After triage, run:

```
python3 scripts/search_coverage.py \
    --round    store/queries/<slug>/search/round_1.json \
    --request  store/queries/<slug>/request.json \
    --wiki-index store/wiki/index/master.md \
    --out      store/queries/<slug>/search/coverage_1.json
```

Read `coverage_1.json`. The `sources_searched` field now tracks multi-source coverage:
```json
{
  "sources_searched": ["pubmed", "ctgov", "snowball", "web"],
  "sources_skipped": [],
  "stop_reason": "sufficient | null | round_cap | exhausted"
}
```

Decide based on `stop_reason`:
- `sufficient` → exit loop, hand shortlist to compile.
- `null` → loop to round 2.
- `round_cap` / `exhausted` → exit with whatever was found.

## Rewriting for round k+1 (bends 7 + 8)

Run the mechanical rewriter first:

```
python3 scripts/search_rewrite.py \
    --coverage store/queries/<slug>/search/coverage_1.json \
    --round    store/queries/<slug>/search/round_1.json \
    --synonyms references/search-synonyms.md \
    --out      store/queries/<slug>/search/rewrite_1.json
```

`rewrite_1.json` has two buckets:

1. `mechanical_rewrites` — already rewritten (vendor → canonical per the synonyms file). Use verbatim in round 2.
2. `needs_llm_judgment` — queries with no mechanical rewrite. You (the orchestrator) must read `coverage_1.json`, name the specific gap, and write a new query string that addresses it.

Writing rules for bend 8 rewrites:
- **One gap per rewritten query.** Do not rewrite multiple gaps into one query.
- **Broaden, do not narrow.** If round 1 under-performed, round 2 drops a qualifier, not adds one.
- **Reference the gap in `search_history.jsonl`** as the `notes` field.
- **Never reuse a zero-hit query verbatim.** If you cannot rewrite it, drop it from round 2.

## Stop conditions (hard rules)

1. **`max_rounds = 3`.** Hard cap. No exceptions.
2. **`target_new_pmids = 20`** by default. If a round produces ≥20 new PMIDs with no zero-hit queries, stop even if not every indication is covered — surface the missing indication as a gap.
3. **`round_delta_pmids == 0` in round k>1 = exhausted.** The corpus has no new hits.
4. **Every kept PMID/NCT must end up in `ingest_shortlist.md`** with a one-line rationale and PMC availability status.

## round_k.json schema

```json
{
  "round": 1,
  "ts": "<ISO>",
  "queries": [
    {"source": "pubmed", "tool": "script", "query": "...", "hits": 42},
    {"source": "snowball", "tool": "script", "seed_pmids": ["12345678", "23456789"], "hits": 18},
    {"source": "ctgov", "tool": "script", "query": "...", "hits": 12},
    {"source": "web", "tool": "websearch", "query": "...", "hits": 3}
  ],
  "auto_filter": {
    "PMID:111": "reject:review",
    "PMID:222": "reject:duplicate",
    "PMID:333": "flag:no_pmc"
  },
  "triage": {
    "PMID:444": "keep",
    "PMID:555": "keep:institution_signal",
    "PMID:666": "reject:wrong_modality"
  }
}
```

## What this skill does NOT do

- **Does not compile.** The shortlist is handed to `vcro compile`.
- **Does not score or rank cohorts.** Scoring is `query/score`.
- **Does not ask the user.** Autonomy rule. The loop runs to completion.
- **Does not write to the wiki.** Read-only on `store/wiki/`.

## Length budget

A typical loop is 1 round (multi-source fan-out, 30-50 hits across sources, stop). A niche query might hit 2-3 rounds. Total disk footprint: <100 KB per query workflow.
