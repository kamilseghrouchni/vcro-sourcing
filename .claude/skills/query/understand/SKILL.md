---
name: query-understand
description: Parse a natural-language data request into a structured request.json that drives discover/score/deliver. No wiki access. No web search. Pure parsing + minimal inference.
---

# query/understand

You take a natural language request from a buyer and produce a `request.json` that the rest of the query layer reads. You do NOT search the wiki, you do NOT call APIs, you do NOT score anything. Your only job is to turn a sentence into a structured brief with explicit gaps surfaced.

## Inputs

- `request_text`: the raw user message, exactly as typed.
- `out_path`: absolute path where you write `request.json`. Conventionally `store/queries/{date}_{slug}/request.json`.
- Optional `interactive`: if true, you may ask the user a single clarifying question (one round only). If false, you must commit to your best inference and surface gaps in `gaps[]` instead.

## Philosophy

The user is a busy researcher or biotech operator. They will not write a perfect spec. They will write half a sentence and expect the system to do the rest. Your job is to extract everything that IS stated, infer the obvious, and then explicitly flag the gaps you guessed at so downstream skills know what was inferred and what was given.

Three rules:

1. **Capture the exact text verbatim** in `original_text`. Never paraphrase, never normalize, never expand abbreviations into the original_text field.
2. **Be explicit about inference.** Every field you fill by inference rather than direct statement gets a sibling `<field>_inferred: true`. Downstream agents need to know what is load-bearing user intent vs. what is your best guess.
3. **Gaps are first-class.** If you cannot fill a field with confidence and inference would be a stretch, leave it null and add an entry to `gaps[]`. Discovery uses gaps to decide whether to ask the user, fall back to defaults, or proceed with low confidence.

## What you read from the request

Walk the request and pull out:

- **indication** — the disease(s) or condition(s) named. Multiple OK; comma-separated.
- **modality** — sample types or assay platforms named. Cross-domain examples (per the locked rotation in `.claude/rules/example-rotation.md`): A plasma, serum, CSF, metabolomics, lipidomics, proteomics. B FFPE tissue, fresh-frozen tumor, bulk RNA-seq, WES, methylation array. C stool, 16S, shotgun metagenomics, metatranscriptomics.
- **n_target** — explicit sample count if stated. If a range, store the lower bound. If "hundreds" or "a few" use null and add a gap.
- **use_case_type** — one of: `model_training`, `biomarker_validation`, `pilot_exploratory`, `feasibility_check`, `pricing_only`, `competitive_intel`, `unspecified`. Infer from verbs ("validate", "train", "explore", "scope", "price", "see who else").
- **longitudinal_required** — true if the request mentions trajectory, conversion, follow-up, repeat sampling. False otherwise.
- **commercial_use** — true if the request is from a commercial buyer or mentions for-profit use. Infer from context (biotech, pharma, IND-enabling, drug development = true).
- **budget** — explicit budget if stated, with currency. Otherwise null.
- **timeline** — explicit deadline or "as soon as possible" signal. Otherwise null.
- **hard_negatives** — things the user explicitly does NOT want. e.g. "no FFPE", "no broker-sourced", "exclude statin users".
- **scope_notes** — one or two sentences in your own words that tell discover what matters most for this request. This is the brief.

## What you produce

Single JSON file at `out_path`. The schema is constant across domains; the field values rotate per A/B/C.

### Schema

```json
{
  "request_id": "<slug>",
  "original_text": "exact user text, unmodified",
  "received_at": "<ISO datetime>",
  "indication": ["..."],
  "indication_inferred": false,
  "modality": ["..."],
  "modality_inferred": false,
  "use_case_type": "model_training | biomarker_validation | pilot_exploratory | feasibility_check | pricing_only | competitive_intel | unspecified",
  "use_case_inferred": false,
  "n_target": 0,
  "n_target_inferred": false,
  "longitudinal_required": false,
  "longitudinal_inferred": false,
  "commercial_use": false,
  "commercial_use_inferred": false,
  "budget": null,
  "timeline": null,
  "hard_negatives": ["..."],
  "required_fields": ["..."],
  "nice_to_have_fields": ["..."],
  "scope_notes": "<one or two sentences in your own words>",
  "gaps": [
    {"field": "<field_name>", "reason": "<one sentence>"}
  ],
  "filter_for_discover": {
    "indication_match": ["..."],
    "modality_match": ["..."],
    "longitudinal_required": false,
    "min_n_usable": null,
    "commercial_use_required": false,
    "disease_area_or_modality": false
  }
}
```

### Three rotating example filters

**Example A — neuro fluid biomarker.** Request: "Looking for longitudinal plasma metabolomics cohorts in Alzheimer's disease, at least 200 patients, for biomarker validation. Minimise statin effects."

```json
{ "indication": ["Alzheimer's disease"],
  "modality": ["plasma", "metabolomics"],
  "use_case_type": "biomarker_validation",
  "n_target": 200,
  "longitudinal_required": true,
  "hard_negatives": ["n_total_less_than_30", "commercial_use_allowed_false", "statin_confounded"],
  "filter_for_discover": {
    "indication_match": ["Alzheimer's disease", "AD"],
    "modality_match": ["plasma", "metabolomics", "lipidomics", "untargeted metabolomics"],
    "longitudinal_required": true,
    "min_n_usable": 200 } }
```

**Example B — oncology tissue genomics.** Request: "Need NSCLC FFPE blocks with paired RNA-seq for a tumor microenvironment signature; ~150 stage I-III cases, no neoadjuvant treatment."

```json
{ "indication": ["non-small cell lung cancer", "lung adenocarcinoma"],
  "modality": ["FFPE tissue", "bulk RNA-seq"],
  "use_case_type": "model_training",
  "n_target": 150,
  "longitudinal_required": false,
  "hard_negatives": ["n_total_less_than_30", "neoadjuvant_treated", "block_age_over_5y"],
  "filter_for_discover": {
    "indication_match": ["non-small cell lung cancer", "NSCLC", "lung adenocarcinoma", "LUAD"],
    "modality_match": ["FFPE", "fresh-frozen tumor", "bulk RNA-seq", "RNA-seq"],
    "longitudinal_required": false,
    "min_n_usable": 150 } }
```

**Example C — microbiome stool sequencing.** Request: "Stool from IBD patients pre and post biologic initiation, both timepoints sequenced at shotgun depth, cold chain documented."

```json
{ "indication": ["inflammatory bowel disease", "Crohn's disease", "ulcerative colitis"],
  "modality": ["stool", "shotgun metagenomics"],
  "use_case_type": "biomarker_validation",
  "n_target": null,
  "longitudinal_required": true,
  "hard_negatives": ["n_total_less_than_30", "recent_antibiotics", "cold_chain_undocumented"],
  "filter_for_discover": {
    "indication_match": ["inflammatory bowel disease", "IBD", "Crohn's disease", "ulcerative colitis"],
    "modality_match": ["stool", "fecal", "shotgun metagenomics", "metagenomic"],
    "longitudinal_required": true,
    "min_n_usable": null } }
```

The three examples deliberately span maximally different pre-analytical, confounder, and access landscapes. If your filter for a stool request lists "lipidomics" or "FFPE" as a modality_match synonym, you have leaked an example into a different request.

## required_fields rules

Only include fields the use case demands. Do NOT list all 8 fields for every request.

- `model_training` → n_total, n_by_group, sample_types, longitudinal are required. endpoints and co_modalities are nice to have.
- `biomarker_validation` → endpoints, n_total, sample_types are required. longitudinal is nice to have.
- `pilot_exploratory` → sample_types is required. Everything else is nice to have.
- `feasibility_check` → indication, sample_types are required. n_total is nice to have.
- `pricing_only` → modality, n_target are required.
- `competitive_intel` → indication is the only requirement.

## hard_negatives rules

Always include:
- `n_total_less_than_30` (no cohort with n<30 is worth surfacing)

Include if commercial:
- `commercial_use_allowed_false` (skip cohorts that explicitly forbid commercial reuse)

Include only if the user explicitly stated. Examples per the locked rotation:
- A: `statin_confounded`, `omega3_confounded`, `non_fasting`, `no_apoe4_enriched`.
- B: `neoadjuvant_treated`, `block_age_over_5y`, `low_tumor_purity`, `no_ffpe`.
- C: `recent_antibiotics`, `cold_chain_undocumented`, `recent_ppi`, `single_timepoint_only`.
- Generic: `no_broker`, `no_longitudinal`, `commercial_use_allowed_false`.

## filter_for_discover

This is the structured filter that `query/discover` will use to scan the wiki indices. It is a denormalised projection of the request into the exact fields discover knows how to filter by. Keep it tight: discover does set membership and threshold checks against this block, not natural-language matching.

- `indication_match`: list of strings, including common abbreviations and synonyms. Cross-domain: A "Alzheimer's disease" + "AD"; "amyotrophic lateral sclerosis" + "ALS" + "motor neuron disease". B "non-small cell lung cancer" + "NSCLC" + "lung adenocarcinoma" + "LUAD". C "inflammatory bowel disease" + "IBD" + "Crohn's disease" + "ulcerative colitis". Always include both the long form and the abbreviation so the wiki's `disease_area` field matches both styles.
- `modality_match`: list of normalized sample/assay strings. Be inclusive on naming conventions because the wiki uses several. A: plasma → plasma; metabolomics → ["metabolomics", "lipidomics", "untargeted metabolomics"]. B: tissue → ["FFPE", "fresh-frozen tumor"]; bulk RNA-seq → ["bulk RNA-seq", "RNA-seq", "transcriptomics"]. C: stool → ["stool", "fecal"]; shotgun → ["shotgun metagenomics", "metagenomic", "WGS metagenomics"].
- `longitudinal_required`: bool.
- `min_n_usable`: integer or null. If null, discover does not filter on N.
- `disease_area_or_modality`: bool, default false. If true, discover keeps cohorts that match indication OR modality, not both. Use only when the user is in feasibility/scoping mode.

## gaps[]

For every field where you guessed, append a gap entry with the field name and a one-sentence reason. Discover decides what to do:

- **Soft gap** (inferred from context): proceed with the inference, mark the result as "uses inferred X" in deliver.
- **Hard gap** (cannot infer): if `interactive: true`, ask the user one clarifying question. If `interactive: false`, leave the field null and let discover return wider results.

## Workflow

1. Read `request_text` carefully. Note the actual sentences, not your interpretation.
2. Walk the field list above. For each field: is it directly stated? infer it? leave it null?
3. Build `filter_for_discover` from the resolved fields.
4. Build `gaps[]` from the inferred and null fields.
5. Build `scope_notes` as the one or two sentence brief in your own words.
6. Choose a slug for `request_id` from the indication + modality + use case (e.g. `ad-plasma-metabolomics-validation`).
7. Make `out_path`'s parent directory if needed.
8. Write the JSON file.
9. Return a 3 to 5 sentence digest reporting: what you parsed, what you inferred, what gaps remain, and what `filter_for_discover` looks like at a high level. Do NOT return the JSON.

## Hard rules

1. **Never invent the request.** If the user said "AD samples", do not silently expand to "AD and MCI". Add MCI as an inferred entry to indication and flag in gaps.
2. **Never default budget or timeline to a number.** Null them and surface in gaps.
3. **Never produce a request.json without `original_text` and `scope_notes`.** Both are load-bearing for downstream skills.
4. **One file write per run.** This skill is a writer, not a reader of the wiki.
5. **No wiki access.** You do not need to know what cohorts exist. Discover does that.

## What you do NOT do

- Do not search the web.
- Do not read entity articles in `store/wiki/`.
- Do not pre-rank or pre-score anything.
- Do not produce prose recommendations. JSON only.
- Do not chain into discover automatically. The orchestrator (vcro-os) decides whether to call discover next.

## Examples

The three example requests in the schema section above (A neuro fluid biomarker / B oncology tissue genomics / C microbiome stool sequencing) cover the locked rotation. Use them as your mental model when parsing a new request, and rotate which example you anchor to so you do not silently apply A's framing to B and C inputs.
