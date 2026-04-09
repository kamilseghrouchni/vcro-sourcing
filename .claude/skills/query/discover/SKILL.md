---
name: query-discover
description: Search the wiki against a request.json filter and emit a candidates list. Wiki-first; reports gaps so the orchestrator can decide whether to trigger ingest. Writes nothing to the wiki.
---

# query/discover

You take a `request.json` (output of `query/understand`) and the current wiki index, and produce a `candidates.json` plus a `discover_report.md`. You search the wiki first. You DO NOT trigger ingest yourself — that decision belongs to the orchestrator. You DO surface explicit gaps so the orchestrator can decide.

## Persistence contract (mandatory)

Every search you run — wiki index scan, by-indication walk, by-sample-type walk, or any external lookup (PubMed, EPMC, ClinicalTrials.gov) triggered by the orchestrator on your behalf — MUST be appended to `store/queries/<slug>/search_history.jsonl` with one line per search, in the shape:

```json
{"ts": "<ISO>", "source": "wiki_index|pubmed|epmc|ctgov|...", "query": "<verbatim query string>", "hits": 0, "notes": "..."}
```

If search history lives only in your subagent context and the run ends without writing `search_history.jsonl`, the run has violated `.claude/rules/autonomy.md` rule 3. Future sessions cannot resume or audit the workflow. The test is simple: at the end of the run, a new session should be able to read the query dir alone and understand what was searched, what was found, and why each candidate was picked or rejected.

If the orchestrator ingests on the back of your gap report, the ingest shortlist (PMC/NCT IDs the orchestrator chose) lands at `store/queries/<slug>/ingest_shortlist.md` — the orchestrator writes it, not you, but your discover_report.md MUST include the gap structure it needs (indication, modality, target n, hard_negatives-to-cover).

## Inputs

- `request_path`: absolute path to a `request.json`.
- `wiki_root`: absolute path to `store/wiki/`.
- `out_dir`: absolute path to the query directory (e.g. `store/queries/{date}_{slug}/`). You write `candidates.json` and `discover_report.md` here.

## What you read

1. `request.json`. The `filter_for_discover` block is your structured filter; the `scope_notes` and `hard_negatives` are your soft filters and disqualifiers.
2. `store/wiki/index/master.md` first. This is the entry point. It has every entity in one file with one-line summaries.
3. `store/wiki/index/by-indication.md` to get the candidate cohort set for the requested indications.
4. `store/wiki/index/by-sample-type.md` to cross-check modality.
5. `store/wiki/index/provenance-coverage.md` to know each cohort's depth.
6. The full entity article for any cohort that survives the index-level filter, so you can read its `card`, `scoring`, and dimension-section evidence. Read on demand, not all at once.
7. NOTHING under `store/raw/`. The wiki is the queryable layer. If the wiki cannot answer the question, that is a gap, not a reason to dive into raw papers.

## What you produce

### `candidates.json`

The schema is constant; example values below are abbreviated to one rotation slot at a time.

```json
{
  "request_id": "<from request.json>",
  "request_path": "store/queries/.../request.json",
  "wiki_scanned_at": "<ISO datetime>",
  "wiki_entity_count": 0,
  "filter_applied": { "...": "copy from request.filter_for_discover" },
  "candidates": [
    {
      "entity_id": "<wiki slug>",
      "type": "cohort",
      "match_strength": "strong | partial | weak",
      "match_reasons": ["indication match: ...", "modality match: ...", "longitudinal: yes/no", "n usable >= ..."],
      "disqualifiers": [],
      "soft_concerns": ["scoring.quality.confidence: medium — provenance depth 0.x"],
      "card": { "primary_signal": "...", "action": "...", "risk": "..." },
      "provenance_depth": 0.0,
      "specimen_match": "has_banked_specimens | has_existing_data_only | no_specimen_info",
      "linked_institutions": ["..."],
      "linked_investigators": ["..."]
    }
  ],
  "rejected": [
    { "entity_id": "<wiki slug>", "reason": "<one sentence>" }
  ],
  "gaps": [
    { "type": "no_match_for_field | thin_coverage | hard_negative_unaddressed | specimen_gap | ...", "detail": "<one sentence>" }
  ],
  "verdict": "wiki_sufficient | wiki_partial | wiki_insufficient",
  "verdict_reason": "<one sentence the orchestrator can quote>"
}
```

### Three rotating example match_reasons

**Example A — neuro fluid biomarker (request: AD plasma metabolomics ≥200 longitudinal).**

```json
{ "entity_id": "adni-go2-plasma-lipidomics",
  "match_strength": "strong",
  "match_reasons": [
    "indication match: Alzheimer's disease",
    "modality match: plasma lipidomics",
    "longitudinal: yes (10-year ADNI follow-up)",
    "n usable >= 200 (1517 participants)" ] }
```

**Example B — oncology tissue genomics (request: NSCLC FFPE RNA-seq ~150 stage I-III).**

```json
{ "entity_id": "tcga-luad-rnaseq",
  "match_strength": "partial",
  "match_reasons": [
    "indication match: lung adenocarcinoma",
    "modality match: bulk RNA-seq from FFPE",
    "n usable >= 150 (~340 LUAD cases with paired RNA-seq)" ],
  "soft_concerns": [
    "stage distribution skews early; metastatic underrepresented",
    "block age median 4 years — may affect RNA quality" ] }
```

**Example C — microbiome stool sequencing (request: longitudinal IBD shotgun pre/post biologic).**

```json
{ "entity_id": "hmp2-ibd-stool-shotgun",
  "match_strength": "strong",
  "match_reasons": [
    "indication match: inflammatory bowel disease",
    "modality match: stool shotgun metagenomics",
    "longitudinal: yes (multi-month sampling cadence)" ],
  "soft_concerns": [
    "biologic-naive subset is small; pre/post biologic comparison may need power calculation" ] }
```

The `match_reasons` field is request-specific. If you find yourself writing "ADNI follow-up" for a stool request, the request filter has been ignored.

### `discover_report.md`

A short human-readable summary of the same information. Skip the JSON dump; produce a markdown digest with sections:
- Verdict (one line + reason)
- Strong matches (one bullet per candidate, with the card.primary_signal)
- Partial matches (same)
- Rejected (one line with reason)
- Gaps (one line each)

The orchestrator reads `candidates.json`. The user reads `discover_report.md`.

## Filtering procedure

1. **Read `request.filter_for_discover`.** This is your structured filter.
2. **Open `wiki/index/master.md`.** Get the full entity list with their types and one-line summaries. Note the entity count.
3. **Restrict to candidate types.** For most queries this is `cohort` and `data_opportunity`. Other types can be added as `linked_*` after a cohort matches.
4. **Apply hard filters first** (each removes a candidate outright):
   - `indication_match`: cohort's `disease_area` must intersect any string in `indication_match`. Case-insensitive substring is fine.
   - `modality_match`: cohort's `modality` must intersect any string in `modality_match` (substring OK).
   - `longitudinal_required`: if true, cohort must have a longitudinal_structure dimension covered (check `provenance_coverage` in frontmatter).
   - `min_n_usable`: read the cohort's `card.primary_signal` or its real_numbers section for stated N. If you cannot find a usable N, do NOT auto-reject — keep it as a soft concern.
   - `commercial_use_required`: if true, drop cohorts whose `card.action` or access section explicitly forbids commercial reuse. If silent, keep but flag as soft concern.
5. **Apply hard negatives.** For each entry in `request.hard_negatives`, scan the cohort's body for the explicit disqualifier. The disqualifier maps to a dimension in `references/intelligence-dimensions.md`; cohorts that document the relevant exposure or attribute as a covariate PASS, cohorts silent on it become a soft concern (not a disqualifier — surface to user). Cross-domain examples:
   - `n_total_less_than_30` → check stated N in any domain.
   - `commercial_use_allowed_false` → check access_and_consent_scope dimension.
   - A: `statin_confounded` → look in confounders (dim 4) for statin use as a covariate.
   - B: `neoadjuvant_treated` → look in confounders (dim 4) or eligibility (dim 14) for neoadjuvant exclusion or documentation.
   - C: `recent_antibiotics` → look in confounders (dim 4) for antibiotic washout window and documentation.
5b. **Specimen-type filter (commission intent only).** If `filter_for_discover.intent == commission` or `mixed`:
   - For each candidate, check `specimens.types` in the entity frontmatter (if the optional `specimens:` block exists). Also scan the entity body for a `## biospecimen_retention_and_types` dimension section mentioning the requested `specimen_type_match` strings.
   - Tag each candidate with `specimen_match`:
     - `has_banked_specimens` — entity's specimens block or dim 15 section confirms the requested specimen type is banked and accessible.
     - `has_existing_data_only` — entity has existing data in the requested modality but no confirmed banked specimens of the needed type. Still a partial match (proves feasibility, provides a comparator).
     - `no_specimen_info` — entity has no specimen information; the `specimens:` block is absent and dim 15 is not covered.
6. **Score match strength** for each surviving candidate:
   - **strong** = passes every hard filter, has high or medium provenance depth (>=0.4), and addresses the user's hard_negatives.
   - **partial** = passes hard filters but has low depth (<0.4) OR leaves soft concerns unaddressed.
   - **weak** = squeaks past hard filters with multiple soft concerns or unknown N.
7. **Pull linked entities** for each surviving cohort. Read its `Links` section / frontmatter to gather `linked_institutions` and `linked_investigators`. These travel with the candidate so deliver can render full provenance without re-scanning.

## Verdict logic

After candidates and rejected are populated:

- **wiki_sufficient**: at least 3 strong candidates, and no critical gap unaddressed. Discover does not request ingest.
- **wiki_partial**: 1 to 2 strong candidates, OR no strong but several partials, OR strong matches exist but a critical gap (e.g. user wants ALS and only AD cohorts exist). Surface gaps; orchestrator decides.
- **wiki_insufficient**: zero candidates pass hard filters, OR the indication has no entities at all in the wiki. Surface this loudly and recommend ingest scope.

**Commission-intent verdict rule.** For `intent == commission`, `wiki_sufficient` requires at least 1 candidate with `specimen_match: has_banked_specimens`. If all candidates are `has_existing_data_only`, the verdict is `wiki_partial` -- the wiki has relevant cohorts but no confirmed specimen sourcing path. This triggers the search loop for papers that document specimen retention.

The verdict is ALWAYS accompanied by a one-sentence `verdict_reason` so the orchestrator can explain the call to the user without re-deriving it.

## Hard rules

1. **Wiki-first.** Read indices first, full entity articles only for surviving candidates. If the wiki has 500 entities you do NOT read all of them — the index is the entry point.
2. **No raw paper reads.** If you find yourself wanting to open `store/raw/papers/...`, stop and add a gap entry instead.
3. **No scoring.** You produce match strength (strong/partial/weak), not Scale/Cost/Quality scores. The score skill computes those next.
4. **Surface, do not act.** You do not call ingest. You do not write to the wiki. You do not modify request.json. You only emit `candidates.json` and `discover_report.md`.
5. **Explicit gaps.** Every concern that affected your verdict goes in `gaps[]` with a type and a detail. Silent gaps lose information for the orchestrator. Gap type `specimen_gap` means the wiki has cohorts with matching indication/modality but no confirmed banked specimens of the requested type.
6. **Cite the entity_id, never the canonical name, in JSON.** The deliver layer needs slugs to navigate links. Canonical names are for the markdown report.

## What you do NOT do

- Do not call PubMed, EPMC, or CT.gov.
- Do not score Scale/Cost/Quality.
- Do not invent N or depth values not present in the wiki.
- Do not include rejected cohorts in `candidates[]`. They go in `rejected[]` with reasons.
- Do not produce the final recommendation. The deliver skill does that.

## When the wiki is empty

If `wiki_entity_count` is 0 or no entity matches the requested type, emit `verdict: wiki_insufficient` with `verdict_reason: "Wiki has no entities of the requested type. Orchestrator must trigger ingest before discover can return candidates."` Empty `candidates`, empty `rejected`, one `gaps[]` entry naming the indication and modality the orchestrator should ingest for.

## Length budget

Most requests yield 0 to 8 candidates against the current wiki. If you are returning >15 candidates the filter is too loose; tighten the indication or modality match.
