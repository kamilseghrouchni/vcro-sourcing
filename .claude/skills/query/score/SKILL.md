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
- `pricing_ref`: absolute path to `references/pricing-data.md`. Used as the pricing anchor for the cost axis.
- `out_path`: absolute path where you write `scored_candidates.json`. Conventionally `<query_dir>/scored_candidates.json`.

## What you read

1. `candidates.json` — the survivor set from discover. You score only these.
2. `request.json` — for `n_target`, `hard_negatives`, and `scope_notes`. The score axes do NOT change based on the request, but the EVIDENCE you cite within them is request-specific (e.g. for an AD validation request you cite the AD-relevant N, not headline N).
3. The full entity article for each candidate cohort: frontmatter + every dimension section. This is where Scale's usable_n, Quality's pre-analytical, and Cost's access route come from.
4. Linked institution and platform articles for context (parent_institution, assay_platform). The platform article is where the assay leg of cost lives.
5. `references/pricing-data.md` — the verified pricing anchors. Cite specific lines, not vibes.
6. NOTHING from `store/raw/` and NO web search.

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
      "card_for_delivery": {
        "primary_signal": "<<= 200 chars, request-specific>",
        "action": "<verb phrase, addresses the buyer's gaps>",
        "risk": "<single biggest unknown for THIS request>"
      }
    }
  ],
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

## axis_confidences

Three-bool struct: how confident you are in EACH axis independently.

- Scale: high if usable_n_for_request is quoted directly; medium if inferred from cohort body; low if estimated from analogues.
- Cost: high if all 3 legs have figures; medium if 2 of 3; low if 1 or 0.
- Quality: high if provenance_depth >= 0.6 AND the load-bearing pre-analytical facts are documented; medium if depth >= 0.4; low if depth < 0.4 or pre-analytical is missing.

## Hard rules

1. **No composite score, no overall rank.** Three axes, separate. The buyer chooses the weighting.
2. **Every claim has a source.** Either the entity article (cite the section) or the pricing-data.md line. No vibes.
3. **Headline N is forbidden as the lead number.** `usable_n_for_request` always comes first.
4. **Three legs of cost, always.** Even if one leg is "already performed" or "$0".
5. **No fake totals.** If a leg is "quote required", the cost composite stays open.
6. **Address the request's hard_negatives explicitly.** Whatever the user named as a hard_negative MUST appear in the quality axis as a confounders or pre_analytical sub-entry that says yes / no / partial on documentation. Silence is failure. Cross-domain examples: A "minimise statin effects" → confounders.medication explicit. B "no neoadjuvant treatment" → confounders.treatment_history explicit. C "cold chain documented" → pre_analytical.cold_chain explicit.
7. **Read entity articles, not raw papers.** If the wiki does not have a fact, that fact is missing — do not patch it from elsewhere.

## What you do NOT do

- Do not produce a final recommendation. Deliver does that.
- Do not re-rank candidates. Deliver may render them in a useful order based on axis confidences, but score is order-agnostic.
- Do not modify the entity articles. Score is read-only on the wiki.
- Do not suggest alternative cohorts. Score works on the discover survivor set.

## When a candidate has insufficient evidence

If an entity is so thinly evidenced that you cannot fill any axis with confidence (e.g. provenance_depth < 0.2 and no real_numbers section), set all three `axis_confidences` to `low` and write a `axis_summary` for each that explicitly states "insufficient evidence in current wiki — recommend lint/enrich before scoring this entity again". Do NOT drop the candidate; deliver decides whether to surface or hide it.

## Length budget

Each candidate's score block is 80 to 200 lines of JSON. For 5 candidates, the file is 500 to 1000 lines. Keep it scannable; deliver renders the readable view.
