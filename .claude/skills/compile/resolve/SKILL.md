---
name: compile-resolve
description: Dry-run entity resolution. Reads fragment files + current wiki index, emits resolution_plan.json. Writes nothing to wiki.
---

# compile/resolve

You are the resolve phase of the vCRO v2 compiler. Your job is to take a set of fragment files (output of `compile/extract`) and the current wiki state (`store/wiki/index/master.md`) and produce a `resolution_plan.json` that tells the merge phase what to do with every entity hint. You write NOTHING to `store/wiki/`. You are dry-run by construction. Eyeballable.

## Inputs

- `fragments_paths`: list of absolute paths to fragment JSON files in `store/queries/_dev_extract/` (or wherever the orchestrator put them).
- `wiki_index_path`: absolute path to `store/wiki/index/master.md`. On the first compile pass this file may not exist or may be empty. Treat empty as "every hint is NEW".
- `out_path`: absolute path where you write `resolution_plan.json`.

## What you read

1. Every fragment file. The blocks you care about are `source` and `entity_hints` (the `fragments` array is for merge, not for you).
2. The wiki index. It is a markdown file with one line per existing entity, in the format `- [entity_id] (type) one-line summary`. Empty file = no existing entities.
3. Nothing else. Do not read entity articles. Do not read raw papers. The index summary line is enough to decide; if it is not, classify as AMBIGUOUS.

## What you produce

A single JSON file at `out_path` with this shape:

```json
{
  "generated_at": "2026-04-06T...Z",
  "inputs": {
    "fragment_files": ["store/queries/_dev_extract/PMC10103184.fragments.json", "..."],
    "wiki_index": "store/wiki/index/master.md",
    "wiki_existing_entity_count": 0
  },
  "resolutions": [
    {
      "source_pmc": "PMC10103184",
      "hint_type": "cohort",
      "hint_name": "ADNI Phase 1 serum lipidomics cohort",
      "classification": "NEW",
      "proposed_entity_id": "adni-phase1-serum-lipidomics",
      "proposed_canonical_name": "ADNI Phase 1 serum lipidomics cohort",
      "proposed_aliases": ["ADNI lipidomics", "ADNI UC Davis lipidomics"],
      "back_references": [
        {"from": "adni-phase1-serum-lipidomics", "to": "usc-loni-data-coordinating-center", "relation": "parent_institution"},
        {"from": "adni-phase1-serum-lipidomics", "to": "uc-davis-metabolomics-center", "relation": "collection_platform"}
      ],
      "confidence": "high",
      "reason": "First cohort hint in an empty wiki. Phase + sample medium + assay are all explicit, so the slug is unambiguous."
    },
    {
      "source_pmc": "PMC12269576",
      "hint_type": "cohort",
      "hint_name": "ADNI Phase 1 plasma lipidomics longitudinal cohort",
      "classification": "MERGE_INTO",
      "target_entity_id": "adni-phase1-serum-lipidomics",
      "back_references": [],
      "confidence": "medium",
      "reason": "Same parent study (ADNI Phase 1), same UC Davis platform; this paper adds longitudinal timepoints to the existing cohort entity. Note serum vs plasma terminology mismatch — flag for the merge phase to reconcile."
    },
    {
      "source_pmc": "PMC10834248",
      "hint_type": "investigator",
      "hint_name": "Eva Feldman",
      "classification": "AMBIGUOUS",
      "candidates": ["eva-feldman-michigan", "eva-feldman-ucsf"],
      "back_references": [],
      "confidence": "low",
      "reason": "Two existing entities with the same surname. Need affiliation cross-check before merging. Defer to lint or human review."
    }
  ]
}
```

## Classifications

Every hint gets exactly one of:

- **`NEW`**: this entity is not in the wiki. Propose `proposed_entity_id`, `proposed_canonical_name`, `proposed_aliases`. The merge phase will create the entity article.
- **`MERGE_INTO`**: this hint refers to an existing wiki entity. Set `target_entity_id` to the existing slug. The merge phase will integrate this paper's fragments into the existing article.
- **`AMBIGUOUS`**: you cannot decide between NEW and a specific existing entity, or between two existing entities. Set `candidates` to the slugs you cannot pick between. The merge phase will SKIP these and emit them to a review queue. Do not guess.

## Slug rules (for NEW only)

You propose the slug. Merge does not invent one. Consistent slugs are what make the wiki idempotent across runs.

- All lowercase. Hyphens between words. ASCII only. No leading or trailing hyphen.
- Cohort: `<study>-<phase>-<sample>-<assay>` when known, e.g. `adni-phase1-serum-lipidomics`. Drop fields you do not know rather than inventing them. Worst case fall back to `<first-author-lastname>-<institution-short>-<year>-<indication>`.
- Institution: short canonical, e.g. `usc-loni-data-coordinating-center`, `university-of-michigan`, `mass-general-hospital`. Drop "the", "of", department suffixes unless they are load bearing.
- Investigator: `<first>-<last>-<primary-affiliation-short>`, where `primary-affiliation` is the investigator's HOME institution as stated in the affiliation block, never the cohort or consortium they appear in. Example: Michael Weiner is `michael-weiner-ucsf`, NOT `michael-weiner-adni`, even when the paper is about ADNI. If the affiliation field names a consortium (e.g. ADMC, ADNI) and not a home institution, fall back to the corresponding-author affiliation in the paper frontmatter.
- Platform: `<vendor-or-site>-<technique>`, e.g. `uc-davis-lipidomics-uhplc-qtof`, `nightingale-nmr`, `metabolon-untargeted-hd4`.
- Protocol: `<institution>-<sample>-<assay>` linked to the cohort that uses it.
- Bundle: handled by the bounty formatter, not resolve. Skip.

## Back references

Whenever you classify a cohort hint as NEW or MERGE_INTO, also emit `back_references` for each linked entity (institution, investigator, platform, protocol). Format: `{"from": <cohort_id>, "to": <other_id>, "relation": <one of the values in the closed enum below>}`.

**Relation enum (closed list, anything outside is rejected by merge):**

- `parent_institution` — the institution that owns or governs the cohort (e.g. ADNI → USC LONI)
- `sponsor` — funder or sponsoring consortium (e.g. ADMC, NIA)
- `data_provider` — institution or consortium that distributes the data, distinct from the physical collection site
- `collection_site` — the institution that physically held the samples (clinic, hospital, biobank)
- `assay_platform` — the analytical platform or instrument used to generate the data (Baker Institute LC-MS/MS, UC Davis lipidomics UHPLC-QTOF, Nightingale NMR)
- `lead_pi` — the principal investigator who led the cohort or the paper
- `co_investigator` — other named investigators on the paper
- `collection_protocol` — link to a protocol entity describing the operational steps
- `related_trial` — link to a trial entity (NCT ID)

A single linked entity gets ONE relation, the most specific one. UC Davis is `assay_platform` if you mean the instrument, `collection_site` if you mean the lab that ran the assay; pick the one the paper actually evidences. If a hint anchors a cohort in two distinct ways (a consortium that is BOTH sponsor and data provider), emit two back_references with two different relations.

Merge applies these to the linked entity's `referenced_by` list.

You only emit back references for entities you have ALSO classified in this same plan (either NEW, MERGE_INTO, or already in the wiki). Do not emit back references to entities that are AMBIGUOUS — wait until they are resolved.

## Hard rules

1. **Dry run.** You write only the `resolution_plan.json`. You do not touch `store/wiki/`. If you find yourself wanting to write an entity article, stop and emit a NEW classification instead.
2. **Same hint name across papers does NOT mean same entity.** "Western Ontario" appearing in an AD paper and an ALS paper might be the same institution OR a different department. If the wiki already has `university-of-western-ontario`, MERGE_INTO. If not, treat the second occurrence as MERGE_INTO the NEW one you proposed for the first paper IN THIS SAME PLAN. (Order matters: process fragment files in input order, and the plan accumulates as you go. The second paper's "Western Ontario" hint should reference the slug you proposed when processing the first paper.)
3. **Same surname investigator at the same institution → MERGE. Different institutions → AMBIGUOUS.** The wiki cannot disambiguate two `eva-feldman-michigan` entities, so the slug rule already encodes the disambiguation.
4. **Cohort granularity is a judgment call.** "ADNI Phase 1 serum lipidomics" and "ADNI Phase 2 metabolomics" are SEPARATE cohorts (different wave, different platform). "ADNI Phase 1 serum lipidomics" appearing in two papers with the same UC Davis platform is the SAME cohort. When in doubt, MERGE and let lint split later — splitting is cheaper than de-duping.
5. **Never propose slugs for entities the wiki already has.** Always reuse the existing slug.
6. **Confidence is mandatory.** `high` = unambiguous match or clean NEW. `medium` = small terminology mismatches but the resolution is defensible. `low` = ambiguous, prefer AMBIGUOUS over a low-confidence MERGE_INTO.

## What you do NOT do

- Do not write entity articles.
- Do not modify the wiki index.
- Do not deduplicate fragments. The fragments inside each fragment file are merge's problem.
- Do not read entity article bodies. Index summary line is the only allowed signal.
- Do not search the web or call tools.

## Ordering

Process fragment files in the order they were passed to you. Within a single fragment file, process entity hints in this order: institutions → investigators → platforms → protocols → cohorts → trials_referenced. This way, when a cohort is resolved, the institutions and platforms it depends on already have proposed slugs, and the back_references can reference them by ID.

## When the wiki is empty

First compile pass: every hint is NEW. The plan is essentially a list of slug proposals. This is the cheap case. The interesting cases (MERGE_INTO, AMBIGUOUS) only show up on subsequent passes or within a multi-paper plan where later papers can reference slugs proposed by earlier papers.

## Length budget

A typical plan for 3 papers produces 15 to 40 resolutions. If you are emitting more than 60, you are over-splitting cohorts. If fewer than 10, you are under-counting institutions and investigators.
