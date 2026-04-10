---
name: query-score
description: Three-axis decomposed scoring (Scale, Cost, Quality) for each candidate. Transparent, evidenced, no composite rank. Reads candidates.json + entity articles + pricing reference. Writes scored_candidates.json.
---

# query/score

You take a `candidates.json` (output of `query/discover`) plus the wiki entity articles those candidates point to, and produce `scored_candidates.json`. Each candidate gets three independent axes: **Scale**, **Cost**, **Quality**. Every score is decomposable, every score carries its evidence, and there is NO composite "winner" rank. The buyer sees all three axes and decides their own weighting.

This is the platform's core differentiator. Brokers and competitors return a single ranked list. vCRO returns three transparent axes the buyer can filter and weight themselves.

## Inputs

- `candidates_path`: absolute path to a `candidates.json`.
- `request_path`: absolute path to the corresponding `request.json` (so you can apply request-specific weighting hints to evidence quality, never to the score itself).
- `wiki_root`: absolute path to `store/wiki/`.
- `pricing_ref`: absolute path to `references/pricing-data.md`. Fallback cache for cost estimates — use entity articles and live research first, `pricing-data.md` only when no better source exists.
- `out_path`: absolute path where you write `scored_candidates.json`. Conventionally `<query_dir>/scored_candidates.json`.

## What you read

1. `candidates.json` — the survivor set from discover. You score only these.
2. `request.json` — for `n_target`, `hard_negatives`, `use_case_type`, and `scope_notes`. The score axes do NOT change based on the request, but the EVIDENCE you cite within them is request-specific.
3. The full entity article for each candidate cohort: frontmatter + every dimension section. This is where Scale's usable_n, Quality's pre-analytical, and Cost's access route come from.
4. Linked institution and platform articles for context (parent_institution, assay_platform).
5. `references/pricing-data.md` — fallback pricing cache. Prefer pricing documented in entity articles or from live research. Use `pricing-data.md` only when no entity-level or live pricing exists. Always cite the source.
6. `references/providers/<provider>-<assay>.md` — if this file exists for the requested assay, use it to evaluate specimen fitness. Each entry cites a manufacturer protocol or methods paper. If the file doesn't exist, pre-analytical fitness assessment is limited to what the entity article itself documents (which may mean verdict = `missing`). Do NOT substitute your own knowledge of assay requirements.
7. `store/queries/<slug>/search/prior_art.json` — if this file exists, it contains papers that ran the same or analogous assay on the same specimen type. Use it to populate `platform_validation` and strengthen (or weaken) the `pre_analytical` verdict. A direct prior art hit with `outcome: success` is the strongest evidence for fit-for-purpose.
8. `store/queries/<slug>/search/providers.json` — if this file exists, it contains assay providers found during the search phase. Use it to populate `cost.legs.assay` with grounded per-sample pricing and provider names. Cite the provider's URL.
9. NOTHING from `store/raw/` and NO web search. NOTHING from your training data.

## Intent-dependent axis interpretation

Read `request.json` field `intent` (access | commission | mixed). The three axes are structurally identical regardless of intent. The EVIDENCE that populates them changes:

**For `access` intent** (default): axes score existing data availability and quality. This is the current behavior -- `usable_n_for_request` = subjects with existing data matching the request. Cost source leg = data access fee. Quality pre-analytical = existing data QC.

**For `commission` intent**: axes score specimen availability and fitness for the intended assay.
- **Scale**: `usable_n_for_request` = estimated banked specimens of the requested type, NOT existing data points. Read the entity's `specimens.estimated_available_n` or dimension 15 section.
- **Cost**: source leg = specimen acquisition fee from `references/pricing-data.md` or the entity's access route. Assay leg = provider quote for the intended assay. Screening_qa leg = specimen validation/QC cost (e.g. low-input DNA extraction QC). Every cost figure must cite its source — if no source exists in the entity or references, the leg is `"quote required" [open_question]`.
- **Quality**: pre-analytical evaluates SPECIMEN FITNESS for the intended assay. The assessment is **assay-relative**: if `references/providers/<assay>.md` exists, compare the entity's documented specimen attributes against the assay's stated requirements. If the reference file doesn't exist, state what the entity documents and verdict = `missing — no assay requirements reference available`. Do NOT fill assay requirements from training data. Questions to answer from the entity article: freeze-thaw history? Volume per aliquot? Storage temperature? Expected DNA/RNA yield? Dimension 20 (collection protocol detail) is the key evidence. The load-bearing question is: "will this banked specimen produce signal when subjected to the buyer's assay?" If dim 20 is not covered, pre-analytical verdict is `missing` for commission intent.

**For `mixed` intent**: score BOTH. Include two parallel assessments: existing-data score and specimen-sourcing score. The deliver skill renders both for the buyer.

## finding_type assignment — mandatory for every candidate

Use this table. Do NOT guess. Read `intent` from request.json and `specimen_match` from candidates.json:

| intent | specimen_match | finding_type |
|--------|----------------|-------------|
| access | any | `direct_match` |
| commission | `has_banked_specimens` | `sourcing_path` |
| commission | `has_existing_data_only` | `direct_match` (comparator — existing data proves feasibility) |
| commission | `no_specimen_info` | `pivot` |
| mixed | `has_banked_specimens` | `sourcing_path` |
| mixed | any other | `direct_match` |

## What you produce

The schema is constant across domains. The locked A/B/C example rotation in `.claude/rules/example-rotation.md` populates the per-domain values. The shape:

```json
{
  "request_id": "<from request.json>",
  "scored_at": "<ISO datetime>",
  "candidates": [
    {
      "entity_id": "<wiki slug>",
      "scale": {
        "usable_n": 0,
        "usable_n_evidence": "<entity article section + quote>",
        "usable_n_for_request": 0,
        "usable_n_for_request_reason": "<derivation: how the request's filter narrows headline N>",
        "n_confidence": "low | medium | high",
        "multi_site_potential": "<one line>",
        "axis_summary": "<one line>"
      },
      "cost": {
        "legs": {
          "source":       { "estimate": "...", "currency": "...", "evidence": "...", "note": "..." },
          "screening_qa": { "estimate": "...", "currency": "...", "evidence": "...", "note": "..." },
          "assay":        { "estimate": "...", "currency": "...", "evidence": "...", "note": "..." }
        },
        "total_known_low": null, "total_known_high": null, "currency": "USD",
        "within_budget": "yes | no | unknown",
        "unknowns": ["..."],
        "timeline": "<calendar weeks or months>",
        "axis_summary": "<one line>"
      },
      "quality": {
        "provenance_depth": 0.0,
        "depth_decomposition": {
          "covered_dimensions": ["...names from references/intelligence-dimensions.md only..."],
          "missing_dimensions": ["...names from references/intelligence-dimensions.md only..."]
        },
        "pre_analytical": { "...request-relevant attributes...": "...", "verdict": "good | partial | weak | missing" },
        "confounders":    { "...request-relevant attributes...": "...", "verdict": "..." },
        "platform_validation": { "platform": "...", "verdict": "..." },
        "axis_summary": "<one line>"
      },
      "axis_confidences": { "scale": "...", "cost": "...", "quality": "..." },
      "finding_type": "direct_match | sourcing_path | pivot",
      "card_for_delivery": {
        "primary_signal": "<<= 200 chars, request-specific>",
        "action": "<verb phrase, addresses the buyer's gaps>",
        "risk": "<single biggest unknown for THIS request>"
      },
      "sourcing_chain": null
    }
  ],
  "finding_type_legend": "`finding_type` classifies what this candidate offers. `direct_match` = existing data matches the request. `sourcing_path` = banked specimens exist, assay must be commissioned. `pivot` = neither data nor specimens match directly; alternative approach needed. The deliver skill uses `finding_type` to select the output format for each candidate.",
  "axis_legend": {
    "scale": "Usable N for THIS request, with confidence. Not headline N.",
    "cost": "Three legs (source + screening_qa + assay), explicit unknowns, no composite total when unknowns exist.",
    "quality": "Pre-analytical, confounders, platform validation, and provenance depth. The buyer's hard_negatives drive which sub-dimensions are surfaced."
  }
}
```

### Three rotating example pre_analytical + confounders blocks

The pre_analytical and confounders sub-axes are where the de-bias matters most: the load-bearing attributes are domain-specific. The frame is constant; the attribute names rotate.

**Example A — neuro fluid biomarker (AD plasma metabolomics).**

```json
"pre_analytical": {
  "fasting": "documented (overnight fasting, study protocol)",
  "tube_type": "plasma; anticoagulant (EDTA / heparin / citrate) often implied not explicit",
  "freeze_thaw": "cycle count usually not documented in primary paper; cited protocol paper may have it",
  "verdict": "partial — fasting is the load-bearing pre-analytical fact for lipidomics and it IS documented; FT cycles are a gap"
},
"confounders": {
  "medication": "statin use as a covariate, % of cohort affected, adjustment in model",
  "demographics": "age, sex, ancestry, APOE genotype",
  "verdict": "good if the request's named confounder (statins) is addressed; downgrade to partial if silent"
}
```

**Example B — oncology tissue genomics (NSCLC FFPE bulk RNA-seq).**

```json
"pre_analytical": {
  "fixation_time": "10% NBF for 24-48h, documented in Methods",
  "block_age": "median age at sectioning ~4 years; older blocks lose extractability",
  "tumor_purity": "median 70% by ABSOLUTE; deconvolution recommended below 50%",
  "verdict": "good — the load-bearing pre-analytical facts (fixation time, purity) are documented"
},
"confounders": {
  "treatment_history": "neoadjuvant chemotherapy or radiation prior to biopsy; % affected, exclusion vs adjustment",
  "stage_distribution": "stage I-IIIA enriched; metastatic underrepresented",
  "verdict": "good if neoadjuvant exposure is documented and matches the request's exclusion stance"
}
```

**Example C — microbiome stool sequencing (IBD shotgun).**

```json
"pre_analytical": {
  "time_to_freeze": "self-collection at home; median time to first freeze 4 hours, documented",
  "preservative": "OMNIgene-GUT vs dry tube vs ethanol — community composition differs by container",
  "cold_chain": "documented for processing lab handoff; gap exists for the at-home leg",
  "verdict": "partial — preservative documented, cold chain only documented post-handoff"
},
"confounders": {
  "antibiotic_exposure": "30-day washout protocol; 18% of cases on antibiotics in 15-30 day window, captured as covariate",
  "ppi_use": "22% of cases, not in exclusion criteria, not consistently adjusted in published analyses",
  "diet": "not documented",
  "verdict": "good on antibiotics (the dominant microbiome confounder); partial on PPI; gap on diet"
}
```

If your Example A rendering has fixation time, or your Example C rendering talks about EDTA, you have leaked an example into the wrong domain. The pre_analytical attributes ARE the domain signature.

## Three axes, in detail

### Scale axis

The single most important number is **`usable_n_for_request`**, NOT headline N. The headline N is the published cohort size; usable N is the count of subjects that survive filtering by the request's criteria (sample type, longitudinal requirement, disease subset, etc.).

- `usable_n` = the cohort's stated headline figure (ground truth, with quote).
- `usable_n_for_request` = your best estimate of the subset that satisfies the request, with the reason.
- `n_confidence` = `high` if both numbers are quoted directly, `medium` if one is inferred from the cohort body, `low` if you had to estimate from analogues.
- `multi_site_potential` = a one-line description of whether this cohort can be aggregated with other entities in the wiki (same platform, same protocol, related consortium). This is where the wiki graph pays off.

### Cost axis

Three legs, always. Even if one is zero or already-performed, list it explicitly so the buyer sees the structure.

- **source** = the cost to acquire the raw data or biospecimens.
- **screening_qa** = the cost to verify the samples are fit for the buyer's specific assay (re-QC, depletion check).
- **assay** = the cost to run the actual analytical workflow if not already performed.

Each leg has:
- `estimate`: a USD/EUR figure, a range, "already performed", "free", or "quote required".
- `currency`: the currency (or null if not applicable).
- `evidence`: where this number came from (entity article, pricing-data.md line, or "wiki has no entry").
- `note`: one sentence on the load-bearing assumption or alternative scenario.

After the legs:
- `total_known_low` and `total_known_high`: numeric bounds if at least one leg has a real number; null if all legs are "quote required".
- `within_budget`: `yes` / `no` / `unknown`. Tied to `request.budget`.
- `unknowns`: explicit list of every cost component you could not value.
- `timeline`: the realistic end-to-end calendar weeks/months. This is part of cost in spirit because it determines opportunity cost.

**Never invent a composite cost number.** If two legs are known and one is "quote required", the composite is unknown — report the two knowns and the one gap, not a fake total.

### Quality axis

Four sub-axes, each with its own evidence:

1. **Pre-analytical**: the operational attributes that determine whether the sample produces clean signal for the buyer's intended assay. These attributes are domain-specific. Per the locked rotation: A fasting, tube type, freeze-thaw cycles, storage temperature. B fixation time, fixative type, block age, tumor purity, cold ischaemia. C time-to-freeze, container preservative, cold chain integrity, homogenisation protocol. The frame is constant; the attribute names rotate. Pre-analytical is the single most predictive factor for assay reproducibility in any of A/B/C.
2. **Confounders**: documented exposures or attributes that alter the assay readout. The named confounders depend on assay and disease area. A lipid-modifying drugs, demographics (age, sex, ancestry, APOE). B neoadjuvant chemotherapy or radiation, stage distribution, prior tumor sampling. C recent antibiotics, PPIs, dietary fibre, recent travel.
3. **Platform validation**: has THIS exact sample+platform combination produced reproducible results elsewhere? Look at the linked platform entity's `referenced_by` count.
4. **Provenance depth**: the mechanical metric — fraction of dimensions covered. Already in the entity frontmatter. When listing `missing_dimensions`, draw names from the 21 canonical dimensions in `references/intelligence-dimensions.md`. Do NOT invent dimension names; gaps that don't map to one of the 21 belong in `pre_analytical.verdict` or `confounders.verdict` instead.

Each sub-axis has a one-line `verdict` (`good`, `partial`, `weak`, or `missing`) and an evidence reference. The `axis_summary` is your one-sentence rollup that tells the buyer where the load-bearing weakness is.

## card_for_delivery

For each scored candidate, refresh the card. The card in the entity article was written by merge from the original fragments; the card_for_delivery is request-specific:

- `primary_signal`: the standout fact for THIS request (cite the usable_n_for_request, not headline N).
- `action`: the specific next step that addresses the buyer's hard_negatives and gaps from discover.
- `risk`: the single biggest unknown for THIS request, not the original entity's generic risk.

Deliver renders this card, not the entity's stored card.

**For `sourcing_path` candidates:** the card fields reframe: `primary_signal` = banked specimen count + type + access route (not existing data count). `action` = specimen request step + assay provider contact (not data portal login). `risk` = specimen fitness uncertainty for the intended assay (not existing data quality caveat).

## sourcing_chain (commission intent only)

For commission and mixed intent, each candidate gets a `sourcing_chain` — the full path from specimen to data. For access intent, set `sourcing_chain: null`.

The chain is an ordered list of **links**. Each link answers one question, cites its evidence, and carries a state. The link types flex per query — not every chain has the same links. The structure is constant:

```json
"sourcing_chain": [
  {
    "link": "<link type>",
    "question": "<what this link answers>",
    "answer": "<concise answer or 'unknown'>",
    "evidence": "<entity article section | provider file | prior_art.json entry | pricing-data.md line | 'none found'>",
    "state": "grounded | inferred | open",
    "note": "<one sentence on what the buyer should do if state is open>"
  }
]
```

### Standard link types for commission intent

Build the chain from these link types. Include a link ONLY if it's relevant to the query. Skip links that don't apply.

1. **specimen_source** — Where are the specimens? Who holds them? How many match the request?
2. **specimen_fitness** — Will these specimens produce signal for the intended assay? Compare what the entity documents (dim 15, dim 20) against the provider's stated requirements (from `references/providers/<provider>-<assay>.md`). If prior art exists (`prior_art.json`), cite it — a successful prior study on the same matrix is the strongest fitness evidence.
3. **provider** — Who runs the assay? What are their stated specimen requirements? Where are they located? Populate from `providers.json` and `references/providers/` files. If multiple providers were found, pick the best match for this candidate (geography, matrix validation, pricing) and note alternatives.
4. **cost** — What does the full path cost? One sub-entry per cost component (specimen acquisition, shipping, QC, assay). Each cites its source or says "quote required [open]".
5. **logistics** — What's the timeline? What regulatory steps are needed (DUA, MTA, import permit)? Populated from entity card + provider turnaround.
6. **prior_art** — Has this exact assay × specimen × indication been done before? Populated from `prior_art.json`. A direct hit with outcome=success is the single strongest signal that the path works.

### How to pair candidates with providers

Read `providers.json` (if it exists). For each scored candidate:
- If the candidate's specimen type matches a provider's `specimen_types_accepted`, pair them.
- If multiple providers match, produce the chain with the BEST-grounded provider (most links grounded). Note alternatives in the provider link's `note` field.
- If no provider matches, set the provider link to state=open with note="No provider found for this assay × specimen combination; the gap-resolution step may have searched and failed — check search_history.jsonl."

### Evidence states

- **grounded**: the answer cites a specific source the buyer can verify (URL, PMC ID, entity article section, pricing-data.md line with its own source).
- **inferred**: reasonable deduction from grounded facts, but not directly stated. Example: timeline estimated from DUA processing time + provider turnaround, neither of which was stated as an end-to-end figure.
- **open**: unknown. The system looked and either found nothing or the information requires direct contact. The `note` field says what was tried and what the buyer should do next.

## axis_confidences

Three-bool struct: how confident you are in EACH axis independently.

- Scale: high if usable_n_for_request is quoted directly; medium if inferred from cohort body; low if estimated from analogues.
- Cost: high if all 3 legs have figures; medium if 2 of 3; low if 1 or 0.
- Quality: high if provenance_depth >= 0.6 AND the load-bearing pre-analytical facts are documented; medium if depth >= 0.4; low if depth < 0.4 or pre-analytical is missing.

## Hard rules

1. **No composite score, no overall rank.** Three axes, separate. The buyer chooses the weighting.
2. **Every claim has a source.** Either the entity article (cite the section), the pricing-data.md line, or a file in `references/providers/`. No vibes. No training-data fills.
3. **Headline N is forbidden as the lead number.** `usable_n_for_request` always comes first.
4. **Three legs of cost, always.** Even if one leg is "already performed" or "$0".
5. **No fake totals.** If a leg is "quote required", the cost composite stays open.
6. **Address the request's hard_negatives explicitly.** Whatever the user named as a hard_negative MUST appear in the quality axis as a confounders or pre_analytical sub-entry that says yes / no / partial on documentation. Silence is failure. Cross-domain examples: A "minimise statin effects" → confounders.medication explicit. B "no neoadjuvant treatment" → confounders.treatment_history explicit. C "cold chain documented" → pre_analytical.cold_chain explicit.
7. **Read entity articles, not raw papers.** If the wiki does not have a fact, that fact is missing — do not patch it from elsewhere.
8. **NEVER fill from training data.** This is the existential rule. If the wiki entity doesn't state a pre-analytical threshold, an assay input requirement, or a cost figure — the verdict is `missing` or `open_question`, NOT a number from your parametric memory. Specifically:
   - Do NOT assert assay input requirements (e.g. "WGBS requires DIN>6 and 500ng") unless citing a file in `references/providers/` or a PMC paper in the entity article.
   - Do NOT assert cost ranges (e.g. "$150-300/sample for WGBS") unless citing a line in `references/pricing-data.md` with its own source URL.
   - Do NOT assert pre-analytical thresholds (e.g. "freeze-thaw typically drops DIN by X") unless the entity article or a reference file documents this with a citation.
   - When you cannot ground a claim: write `[open_question — no grounded reference]` and move on. The gap is more valuable than a plausible guess.
   The entire value proposition is "every fact is traceable to a source the buyer can verify." A training-data fill disguised as evidence is the exact broker opacity the system exists to dissolve.

## What you do NOT do

- Do not produce a final recommendation. Deliver does that.
- Do not re-rank candidates. Deliver may render them in a useful order based on axis confidences, but score is order-agnostic.
- Do not modify the entity articles. Score is read-only on the wiki.
- Do not suggest alternative cohorts. Score works on the discover survivor set.

## When a candidate has insufficient evidence

If an entity is so thinly evidenced that you cannot fill any axis with confidence (e.g. provenance_depth < 0.2 and no real_numbers section), set all three `axis_confidences` to `low` and write a `axis_summary` for each that explicitly states "insufficient evidence in current wiki — recommend lint/enrich before scoring this entity again". Do NOT drop the candidate; deliver decides whether to surface or hide it.

## Length budget

Each candidate's score block is 80 to 200 lines of JSON. For 5 candidates, the file is 500 to 1000 lines. Keep it scannable; deliver renders the readable view.
