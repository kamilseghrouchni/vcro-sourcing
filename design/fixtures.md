# UI Testing Fixtures

Source inventory for UI component verification. Two run types are needed:
one standard cohort sourcing run (all pipeline phases, hits tangential results)
and one bounty run. This document maps what exists on disk to what each phase
requires, flags gaps, and provides verbatim synthetic additions where real data
is absent.

---

## What Exists On Disk

```
store/runs/20260331_als_ad_metabolomics_v2/   ← standard run, mostly complete
  extracted_cohorts.json    ✅  11 cohorts, full intelligence dimensions
  signal_summary.json       ✅  synthesis, key findings, replication badges
  access_summary.json       ✅  access routes, costs, timelines per cohort
  ranking.json              ✅  5 ranked cohorts with fit factors
  request.json              ✅  indication + original_text (missing sampleType field)
  run_state.json            ✅  provider phase is pending (useful for "running" badge)
  endpoint_schema.json      ✅  one_liner for Sidebar, resolveCards decision axes
  progress.jsonl            ⚠️  8 events, only "finding" and "progress" types
                                missing: phase_start, phase_complete, clarification_needed

store/runs/20260330_als_ad_metabolomics/      ← v1 run, halted mid-pipeline
  extracted_cohorts.json    ✅  (usable as secondary fixture)
  signal_summary.json       ✅
  request.json              ✅
  run_state.json            ✅  pmid_map pending, contacts/provider/access/rank never ran
  — no progress.jsonl —
  — no access_summary.json —
  — no ranking.json —

NO bounty run exists. bundle_candidates.json, cost_stack.json, action_map.json
must all be synthetic.
```

Copy plan:
```
store/runs/fixture_cohort/   ← from 20260331_als_ad_metabolomics_v2, with augmentation
store/runs/fixture_bounty/   ← fully synthetic
store/runs/fixture_crashed/  ← synthetic run_state.json only (for Sidebar crashed badge)
```

---

## Phase 4 — Run Feed Components

**Requirement:** `progress.jsonl` containing all four event types:
- `phase_start` — PipelineBlock renders a new phase appearing
- `finding` — findings interleave between phase lines
- `clarification_needed` — ClarificationGate triggers
- `phase_complete` — ✓ checkmark + ResultBlock collapse

**Real file:** `store/runs/20260331_als_ad_metabolomics_v2/progress.jsonl`

The real file has 8 events but only uses `finding` and `progress` event types.
The other three types must be inserted. Write the complete augmented file to
`store/runs/fixture_cohort/progress.jsonl`:

```jsonl
{"ts":"2026-03-31T13:15:05Z","phase":"search","event":"phase_start","message":"Searching PubMed, Europe PMC, and ClinicalTrials.gov for AD and ALS metabolomics cohorts"}
{"ts":"2026-03-31T13:15:10Z","phase":"search","event":"finding","message":"Found longitudinal plasma lipidomics in ADNI (n=1,517) and a replicated ALS diagnostic panel at Michigan (AUC 0.94)"}
{"ts":"2026-03-31T13:25:00Z","phase":"search","event":"phase_complete","message":"Search complete. 59 relevant sources, 28 tangential, 11 not relevant."}
{"ts":"2026-03-31T13:25:05Z","phase":"validate","event":"phase_start","message":"Classifying 98 results as RELEVANT / TANGENTIAL / NOT_RELEVANT"}
{"ts":"2026-03-31T13:30:00Z","phase":"validate","event":"finding","message":"ADNI, UK Biobank, WRAP, and Michigan ALS confirmed as primary cohorts. 59 relevant sources total."}
{"ts":"2026-03-31T13:32:00Z","phase":"validate","event":"clarification_needed","message":"28 tangential results found — brain tissue metabolomics and dietary intervention studies. Include or exclude?","options":["include","exclude","show me first"]}
{"ts":"2026-03-31T13:34:00Z","phase":"validate","event":"phase_complete","message":"Validation complete. Proceeding strict (tangential excluded)."}
{"ts":"2026-03-31T13:38:00Z","phase":"extract","event":"phase_start","message":"Extracting intelligence from 59 papers in batches of 8–10"}
{"ts":"2026-03-31T13:40:00Z","phase":"extract","event":"finding","message":"ADNI: 329 AD converters with ether lipid decline of 3–4.8% over 10 years. AUC 0.70 for conversion, externally validated in ASPREE (n=3,495)"}
{"ts":"2026-03-31T13:42:00Z","phase":"extract","event":"finding","message":"Important negative: pre-diagnostic ALS prediction from blood metabolomics has failed across all ML classifiers. BCAAs are null predictors. Your model needs NfL or imaging for early ALS."}
{"ts":"2026-03-31T13:48:00Z","phase":"extract","event":"finding","message":"Michigan ALS: AUC 0.94 for symptomatic detection, replicated in two independent cohorts. Sphingomyelins and acylcarnitines are the core signal."}
{"ts":"2026-03-31T14:00:37Z","phase":"extract","event":"phase_complete","message":"Extraction complete. 11 cohorts profiled across 7 intelligence dimensions."}
{"ts":"2026-03-31T14:00:43Z","phase":"signal","event":"phase_start","message":"Synthesising evidence across 59 papers"}
{"ts":"2026-03-31T14:00:00Z","phase":"signal","event":"finding","message":"Realistic AD prediction ceiling: AUC 0.70–0.86. Metabolomics adds ~2% over APOE alone — incremental but validated at scale."}
{"ts":"2026-03-31T14:04:26Z","phase":"signal","event":"phase_complete","message":"Signal synthesis complete. 9 key findings, 5 negative results, 7 consistent biomarkers."}
{"ts":"2026-03-31T14:04:30Z","phase":"rank","event":"phase_start","message":"Ranking top 5 cohorts by fit to request"}
{"ts":"2026-03-31T14:05:00Z","phase":"rank","event":"finding","message":"Top 3: ADNI (free portal, 2–4 weeks), Michigan ALS (PI contact, 1–3 months), UK Biobank (£9K, 8–16 weeks)"}
{"ts":"2026-03-31T14:08:51Z","phase":"rank","event":"phase_complete","message":"Ranking complete. ADNI leads on access speed and commercial confirmation."}
```

**Notes for test setup:**
- The `clarification_needed` event at line 6 is what triggers `ClarificationGate` in `RunFeed.tsx`. The SSE hook should surface this to the component via a dedicated `clarificationEvent` return value.
- `phase_complete` for `phase: "rank"` (line 19) is the explicit signal that triggers `CardDeck` reorder. Verify that `rankComplete` flips to `true` exactly on this event.
- The `options` field on `clarification_needed` is synthetic — the real pipeline currently does not emit options in this event. The component should fall back to the hardcoded `["include", "exclude", "show me first"]` if the field is absent.

---

## Phase 6 — Cards (CohortCard, SignalCard, CardDeck)

All four card artifacts come from `store/runs/20260331_als_ad_metabolomics_v2/`.
Copy them verbatim into `store/runs/fixture_cohort/`.

### extracted_cohorts.json

**Real file:** `store/runs/20260331_als_ad_metabolomics_v2/extracted_cohorts.json`

Array of 11 cohort objects. Each has the fields `CohortCard` needs:

| CohortCard field | JSON field | Example value |
|---|---|---|
| cohort name | `cohorts_named[0]` | `"ADNI"` |
| source ID | `id` | `"PMC10103184"` |
| institution (from intelligence) | inferred from `source_quote` | `"ADNI Phase 1"` |
| sample type | inferred from `intelligence[].fact` | serum / plasma |
| N | in `intelligence[real_numbers].fact` | `"313 ADNI Phase 1 participants"` |
| modality | in `intelligence[co_modalities].fact` | `"UHPLC-QTOF"` |
| evidence quote | `intelligence[].source_quote` | `"a total of 313 participants..."` |

The first two entries (PMC10103184 — ADNI, PMC10802055 — UK Biobank) are the
richest and cover the two most common sample types (serum and plasma). Use
these as the primary CohortCard render targets.

### signal_summary.json

**Real file:** `store/runs/20260331_als_ad_metabolomics_v2/signal_summary.json`

Fields used by `SignalCard` and the evidence quote in `CohortCard`:

| Component field | JSON path |
|---|---|
| finding text | `key_findings[].finding` |
| source quote | `key_findings[].source_quote` |
| source ID (PMID/PMC) | `key_findings[].paper_id` |
| implication line | `key_findings[].implication` |
| replication badge | `replication_status[].status` → `"replicated"` / `"single_cohort"` / `"failed_replication"` |
| negative results | `negative_results[]` |
| consistent biomarkers | `consistent_biomarkers[]` |

Sample replication statuses present in the real file:
- `"replicated"` — ether lipid decline in AD (ADNI-1/2/GO + ASPREE)
- `"replicated"` — sphingolipid/ceramide/acylcarnitine elevation in ALS
- `"single_cohort"` — plasmalogen/ALSFRS-R correlation (Goutman, n=317)
- `"failed_replication"` — Mapstone 10-metabolite AD panel (BLSA AUC 0.64, AGES-RS AUC 0.39)

All three badge variants are present. No synthetic additions needed.

### access_summary.json

**Real file:** `store/runs/20260331_als_ad_metabolomics_v2/access_summary.json`

Fields used by the access badge and stat footer in `CohortCard`:

| Component field | JSON path |
|---|---|
| access route badge | `cohorts[].access_route` → `"open_portal"` / `"pi_dependent"` / `"consortium_controlled"` |
| estimated cost | `cohorts[].estimated_cost` |
| estimated timeline | `cohorts[].estimated_timeline` |
| commercial use | `cohorts[].commercial_use_allowed` → `"yes"` / `"unknown"` |
| portal URL | `cohorts[].portal_url` |

All three access route types are present:
- `open_portal` — ADNI (PMC12269576), UK Biobank (PMC10802055), ADNI longitudinal (PMC12706616)
- `pi_dependent` — Michigan ALS (PMC9762943), WRAP (PMC6687539), NHS/HPFS (PMC12618253)
- `consortium_controlled` — Knight ADRC WashU (PMC12882555)

No synthetic additions needed. The `CohortCard` stat footer can read cost and
timeline directly from this file keyed by `cohort_id` (which matches the `id`
field in `extracted_cohorts.json`).

### ranking.json

**Real file:** `store/runs/20260331_als_ad_metabolomics_v2/ranking.json`

`CardDeck` reads this to determine card order after `rankComplete` fires. The
file has 5 ranked cohorts:

```
rank 1 — PMC12269576  ADNI Plasma Lipidomics
rank 2 — PMC12706616  ADNI Longitudinal 7-Year Blood Metabolome
rank 3 — PMC9762943   Michigan ALS Cohort (N=525)
rank 4 — PMC6687539   WRAP (Wisconsin Registry)
rank 5 — PMC12882555  Knight ADRC WashU
```

Before `rankComplete`, cards should render in extraction order (PMC10103184
first, per `extracted_cohorts.json`). After `rankComplete` fires, `CardDeck`
reorders to the ranking order above with a 400ms transform transition.

---

## Phase 6 — SessionHero + CardGradient

### request.json (fixture copy)

**Real file:** `store/runs/20260331_als_ad_metabolomics_v2/request.json`

The real file has `indication` but not `sampleType`. The fixture copy at
`store/runs/fixture_cohort/request.json` should add the field so `SessionHero`
and `resolvePainting.ts` resolve correctly:

```json
{
  "request_id": "als_ad_metabolomics_foundation_model_v2",
  "original_text": "I am building Foundation models and I am considering metabolomics for predicting neurodegenerative endpoints in ALS and AD. I am considering blood and CSF. Can you help figure out proof points that this is interesting layer to add, and help me source the right samples? I am based in the US.",
  "indication": "Alzheimer_disease,ALS",
  "sampleType": "plasma,CSF",
  "use_case_type": "model_training",
  "use_case_inferred": false,
  "n_target": 200,
  "required_fields": ["n_total", "n_by_group", "sample_types", "longitudinal", "endpoints"],
  "nice_to_have_fields": ["co_modalities", "effect_sizes", "replication_status"],
  "hard_negatives": ["n_total_less_than_30", "commercial_use_allowed_false", "no_controls"],
  "sourcing_priority": "best_science",
  "sourcing_priority_inferred": true,
  "budget_range": null,
  "scope_notes": "User is building foundation models for neurodegenerative endpoint prediction. Needs proof points that metabolomics adds predictive value for AD and ALS, THEN sourcing of blood and CSF samples in the US. Prioritise cohorts with published effect sizes, AUCs, or predictive models. Both blood (plasma/serum) and CSF are in scope. Controls essential. Longitudinal data strongly preferred for endpoint prediction. Commercial use required. Two diseases = two parallel evidence threads."
}
```

`sampleType: "plasma,CSF"` maps to the "blood/plasma" row in `resolvePainting.ts`
(multi-modal is the correct bucket when both are present — implement the lookup
to match the first token or prefer "multi-modal" when a comma is present).

`SessionHero` gradient tone: `sampleType` contains `"plasma"` → warm reds/ochres
direction (matching the blood/plasma row in the painting direction table from the PRD).

---

## Phase 7 — Bounty Components

No bounty run exists on disk. All three artifacts below are synthetic and should
be written verbatim to `store/runs/fixture_bounty/`.

### bundle_candidates.json

```json
{
  "run_id": "fixture_bounty",
  "budget_eur": 50000,
  "indication": "Multiple_Sclerosis",
  "sampleType": "CSF",
  "n_target": 150,
  "candidates": [
    {
      "id": "bundle_max_coverage",
      "label": "max_coverage",
      "recommended": false,
      "title": "Broadest coverage — 4 cohorts, 3 countries",
      "leg1_source": "BioIVT CSF biobank (n=60, de-identified, EU GDPR compliant)",
      "leg2_qa": "LabCorp pre-analytical QC panel (freeze-thaw cycles, hemolysis screen)",
      "leg3_assay": "Metabolon HD4 untargeted LC-MS/MS (1,508 metabolites)",
      "n_samples": 180,
      "known_cost_eur": 44200,
      "unknown_cost_note": "Customs clearance for US→EU shipping: $800–2,000 (variable)",
      "timeline_weeks": 14,
      "fit": "Exceeds N target. Covers MS relapsing-remitting (n=90) and progressive (n=90) subtypes. Commercial use confirmed for BioIVT tier."
    },
    {
      "id": "bundle_fastest",
      "label": "fastest",
      "recommended": true,
      "title": "Fastest path — US only, 8 weeks",
      "leg1_source": "PrecisionMed CSF cohort (n=120 MS, n=60 HC, US, EDTA-free)",
      "leg2_qa": "Internal QC (shipped pre-screened, COAs included)",
      "leg3_assay": "Biocrates MxP 500 targeted panel (506 metabolites, 3 week TAT)",
      "n_samples": 180,
      "known_cost_eur": 38500,
      "unknown_cost_note": "None — all-inclusive quote from PrecisionMed",
      "timeline_weeks": 8,
      "fit": "US-only, single vendor, all-inclusive pricing. Fastest commercial option. Targeted panel (506 metabolites) vs HD4 (1,508) — tradeoff: faster but narrower coverage."
    },
    {
      "id": "bundle_cheapest_bypass",
      "label": "cheapest_bypass",
      "recommended": false,
      "title": "Broker bypass — direct PI + academic assay",
      "leg1_source": "PI collaboration: Barkhof lab, Amsterdam UMC (n=150 MS CSF, longitudinal)",
      "leg2_qa": "Amsterdam UMC core facility internal QC (no additional cost)",
      "leg3_assay": "VU Amsterdam Metabolomics Core (academic rate, untargeted LC-MS)",
      "n_samples": 150,
      "known_cost_eur": 21000,
      "unknown_cost_note": "DTA legal overhead: €3,000–8,000 (Amsterdam UMC TTO). Timeline risk: academic timelines can slip.",
      "timeline_weeks": 20,
      "fit": "Lowest cost but highest timeline risk. No commercial biobank involved — all access is PI-mediated. Academic IRB may limit commercial use (negotiation required). Only choose if budget is the binding constraint."
    }
  ]
}
```

### cost_stack.json

```json
{
  "run_id": "fixture_bounty",
  "selected_bundle": "bundle_fastest",
  "legs": [
    {
      "leg": 1,
      "label": "Source",
      "description": "PrecisionMed CSF cohort — 150 MS + 30 HC, US, EDTA-free, de-identified",
      "cost_eur": 18000,
      "cost_known": true,
      "timeline_weeks": 3,
      "vendor": "PrecisionMed Inc.",
      "notes": "Pre-screened samples with COAs. Commercial DUA pre-signed. Freeze-thaw cycles: ≤2."
    },
    {
      "leg": 2,
      "label": "QA / Screen",
      "description": "Pre-analytical QC — hemolysis screen, freeze-thaw verification, volume confirmation",
      "cost_eur": 4500,
      "cost_known": true,
      "timeline_weeks": 1,
      "vendor": "PrecisionMed Inc. (included in bundle)",
      "notes": "Included in PrecisionMed all-inclusive quote. No separate vendor needed."
    },
    {
      "leg": 3,
      "label": "Assay",
      "description": "Biocrates MxP 500 targeted metabolomics — 506 metabolites, 180 samples, 3-week TAT",
      "cost_eur": 16000,
      "cost_known": true,
      "timeline_weeks": 4,
      "vendor": "Biocrates Life Sciences AG",
      "notes": "Academic rate not applicable (commercial use). Quoted at commercial rate. Includes data processing and normalised peak tables."
    }
  ],
  "total_known_eur": 38500,
  "total_unknown_components": [],
  "total_timeline_weeks": 8,
  "currency_note": "All costs in EUR. PrecisionMed quotes in USD — converted at 0.92 EUR/USD (2026-04-01)."
}
```

### action_map.json

```json
{
  "run_id": "fixture_bounty",
  "selected_bundle": "bundle_fastest",
  "legs": [
    {
      "leg": 1,
      "label": "Source",
      "status": "pending",
      "actions": [
        {
          "action_id": "leg1_contact_precisionmed",
          "type": "outreach",
          "target": "PrecisionMed Inc.",
          "contact": "samples@precisionmed.com",
          "subject": "Commercial CSF cohort — MS 150 + HC 30, Biocrates MxP 500 compatible",
          "outreach_angle": "Reference the all-inclusive quote for bundle_fastest. Confirm EDTA-free CSF, ≤2 freeze-thaw cycles, COAs included. Request DUA draft and estimated ship date.",
          "priority": "high",
          "done": false
        }
      ]
    },
    {
      "leg": 2,
      "label": "QA / Screen",
      "status": "pending",
      "actions": [
        {
          "action_id": "leg2_confirm_qa",
          "type": "confirmation",
          "target": "PrecisionMed Inc.",
          "contact": "samples@precisionmed.com",
          "subject": "QA protocol confirmation — hemolysis, freeze-thaw, volume",
          "outreach_angle": "Confirm QC criteria: hemolysis index <30, freeze-thaw cycles ≤2, minimum volume 200µL per sample. Request sample manifest template.",
          "priority": "medium",
          "done": false
        }
      ]
    },
    {
      "leg": 3,
      "label": "Assay",
      "status": "pending",
      "actions": [
        {
          "action_id": "leg3_quote_biocrates",
          "type": "outreach",
          "target": "Biocrates Life Sciences AG",
          "contact": "sales@biocrates.com",
          "subject": "Commercial quote — MxP 500, 180 CSF samples, 3-week TAT",
          "outreach_angle": "Confirm commercial rate for MxP 500 on CSF matrix (CSF-specific QC protocol required). Request data delivery format: peak tables in .xlsx + .csv, including QC metrics. Confirm turnaround 3 weeks from sample receipt.",
          "priority": "high",
          "done": false
        }
      ]
    }
  ]
}
```

### request.json (bounty fixture)

```json
{
  "request_id": "ms_csf_metabolomics_bounty",
  "original_text": "I have €50K and need 150 FFPE samples for multiple sclerosis CSF metabolomics. What is the fastest path?",
  "indication": "Multiple_Sclerosis",
  "sampleType": "CSF",
  "use_case_type": "commercial_sourcing",
  "budget_range": { "amount": 50000, "currency": "EUR" },
  "n_target": 150,
  "bounty_mode": true,
  "scope_notes": "User has a fixed budget of €50K and wants 150 MS CSF samples for metabolomics. Bounty mode triggered: budget + scientific outcome both specified. Deliver three-leg breakdown (source → QA → assay) with fastest, max_coverage, and cheapest_bypass options."
}
```

### run_state.json (bounty fixture)

```json
{
  "run_id": "fixture_bounty",
  "created": "2026-04-01T09:00:00.000000+00:00",
  "updated": "2026-04-01T10:45:00.000000+00:00",
  "request": "store/runs/fixture_bounty/request.json",
  "current_phase": "deliver",
  "phases": {
    "understand": { "status": "completed", "started": null, "completed": "2026-04-01T09:00:05Z", "failed": null, "fail_reason": null },
    "search": { "status": "completed", "started": "2026-04-01T09:00:10Z", "completed": "2026-04-01T09:12:00Z", "failed": null, "fail_reason": null },
    "validate": { "status": "completed", "started": null, "completed": "2026-04-01T09:20:00Z", "failed": null, "fail_reason": null },
    "extract": { "status": "completed", "started": "2026-04-01T09:20:05Z", "completed": "2026-04-01T09:45:00Z", "failed": null, "fail_reason": null },
    "signal": { "status": "completed", "started": null, "completed": "2026-04-01T09:50:00Z", "failed": null, "fail_reason": null },
    "rank": { "status": "completed", "started": null, "completed": "2026-04-01T10:00:00Z", "failed": null, "fail_reason": null },
    "bounty": { "status": "completed", "started": "2026-04-01T10:00:05Z", "completed": "2026-04-01T10:30:00Z", "failed": null, "fail_reason": null },
    "deliver": { "status": "completed", "started": "2026-04-01T10:30:05Z", "completed": "2026-04-01T10:45:00Z", "failed": null, "fail_reason": null }
  },
  "artifacts": {
    "request.json": { "phase": "understand", "created": "2026-04-01T09:00:05Z" },
    "bundle_candidates.json": { "phase": "bounty", "created": "2026-04-01T10:15:00Z" },
    "cost_stack.json": { "phase": "bounty", "created": "2026-04-01T10:20:00Z" },
    "action_map.json": { "phase": "bounty", "created": "2026-04-01T10:25:00Z" }
  },
  "custom": {}
}
```

---

## Phase 9 — Sidebar (run history + status badges)

The Sidebar fetches `GET /api/runs` and renders each run with a status badge:
`running` / `complete` / `crashed`.

Three fixture `run_state.json` files cover all three badge states:

| Badge | Source | Location |
|---|---|---|
| `complete` | `20260331_als_ad_metabolomics_v2/run_state.json` (all deliver phases done, provider oddly pending — patch for fixture) | `store/runs/fixture_cohort/run_state.json` |
| `running` | Use as-is from v2 but patch `provider: "pending"` to represent an in-progress state | `store/runs/fixture_running/run_state.json` |
| `crashed` | Synthetic — see below | `store/runs/fixture_crashed/run_state.json` |

### fixture_cohort/run_state.json (complete)

Patch the real v2 `run_state.json`: set `provider.status` to `"skipped"` so all
phases resolve to `completed` or `skipped`, making the overall status `"complete"`.
The `endpoint_schema.json` from v2 has the `one_liner` field the Sidebar renders.

### fixture_running/run_state.json (running)

Use the real v2 `run_state.json` verbatim — `provider` is `"pending"`, which the
API route should interpret as `status: "running"`. Copy alongside its `request.json`
and `endpoint_schema.json`.

### fixture_crashed/run_state.json (crashed)

Synthetic. Write this file to `store/runs/fixture_crashed/run_state.json`:

```json
{
  "run_id": "fixture_crashed",
  "created": "2026-03-29T11:00:00.000000+00:00",
  "updated": "2026-03-29T11:34:00.000000+00:00",
  "request": "store/runs/fixture_crashed/request.json",
  "current_phase": "extract",
  "phases": {
    "understand": { "status": "completed", "started": null, "completed": "2026-03-29T11:00:05Z", "failed": null, "fail_reason": null },
    "search": { "status": "completed", "started": "2026-03-29T11:00:10Z", "completed": "2026-03-29T11:12:00Z", "failed": null, "fail_reason": null },
    "validate": { "status": "completed", "started": null, "completed": "2026-03-29T11:18:00Z", "failed": null, "fail_reason": null },
    "pmid_map": { "status": "completed", "started": null, "completed": "2026-03-29T11:20:00Z", "failed": null, "fail_reason": null },
    "section_fetch": { "status": "completed", "started": null, "completed": "2026-03-29T11:25:00Z", "failed": null, "fail_reason": null },
    "extract": {
      "status": "failed",
      "started": "2026-03-29T11:25:05Z",
      "completed": null,
      "failed": "2026-03-29T11:34:00Z",
      "fail_reason": "Europe PMC rate limit hit during batch 2 of 3 (PMC API 429). Retry after 60s window."
    },
    "signal": { "status": "pending", "started": null, "completed": null, "failed": null, "fail_reason": null },
    "rank": { "status": "pending", "started": null, "completed": null, "failed": null, "fail_reason": null },
    "deliver": { "status": "pending", "started": null, "completed": null, "failed": null, "fail_reason": null }
  },
  "artifacts": {
    "request.json": { "phase": "understand", "created": "2026-03-29T11:00:05Z" }
  },
  "custom": {}
}
```

Write a minimal `request.json` alongside it:

```json
{
  "request_id": "fixture_crashed",
  "original_text": "What cohorts exist for Parkinson's plasma proteomics?",
  "indication": "Parkinson_disease",
  "sampleType": "plasma",
  "use_case_type": "cohort_sourcing",
  "scope_notes": "Fixture only — simulates a crashed run for Sidebar badge testing."
}
```

The `endpoint_schema.json` for crashed runs may not exist. `GET /api/runs`
should fall back to the `original_text` from `request.json` as the Sidebar
one-liner when `endpoint_schema.json` is absent.

---

## Copy Instructions

```bash
# Create fixture directories
mkdir -p store/runs/fixture_cohort
mkdir -p store/runs/fixture_bounty
mkdir -p store/runs/fixture_running
mkdir -p store/runs/fixture_crashed

# Standard cohort run — copy all real artifacts
cp store/runs/20260331_als_ad_metabolomics_v2/extracted_cohorts.json  store/runs/fixture_cohort/
cp store/runs/20260331_als_ad_metabolomics_v2/signal_summary.json      store/runs/fixture_cohort/
cp store/runs/20260331_als_ad_metabolomics_v2/access_summary.json      store/runs/fixture_cohort/
cp store/runs/20260331_als_ad_metabolomics_v2/ranking.json             store/runs/fixture_cohort/
cp store/runs/20260331_als_ad_metabolomics_v2/endpoint_schema.json     store/runs/fixture_cohort/
cp store/runs/20260331_als_ad_metabolomics_v2/contacts.json            store/runs/fixture_cohort/

# Then write fixture_cohort/progress.jsonl, request.json, run_state.json
# using the augmented / patched versions documented above

# Running state fixture (verbatim v2 run_state, provider=pending)
cp store/runs/20260331_als_ad_metabolomics_v2/run_state.json           store/runs/fixture_running/
cp store/runs/20260331_als_ad_metabolomics_v2/request.json             store/runs/fixture_running/
cp store/runs/20260331_als_ad_metabolomics_v2/endpoint_schema.json     store/runs/fixture_running/

# Bounty fixtures — write synthetic files documented above
# Crashed fixture — write synthetic files documented above
```

---

## Gap Summary

| Required artifact | Status | Action needed |
|---|---|---|
| `progress.jsonl` with all 4 event types | ⚠️ partial | Write augmented version to `fixture_cohort/` |
| `extracted_cohorts.json` | ✅ real | Copy from v2 |
| `signal_summary.json` | ✅ real | Copy from v2 |
| `access_summary.json` | ✅ real | Copy from v2 |
| `ranking.json` | ✅ real | Copy from v2 |
| `request.json` with `sampleType` | ⚠️ partial | Patch and write to `fixture_cohort/` |
| `run_state.json` (complete) | ⚠️ partial | Patch `provider` to `skipped`, write to `fixture_cohort/` |
| `run_state.json` (running) | ✅ real | Copy v2 run_state verbatim to `fixture_running/` |
| `run_state.json` (crashed) | ❌ absent | Write synthetic to `fixture_crashed/` |
| `endpoint_schema.json` | ✅ real | Copy from v2 |
| `bundle_candidates.json` | ❌ absent | Write synthetic to `fixture_bounty/` |
| `cost_stack.json` | ❌ absent | Write synthetic to `fixture_bounty/` |
| `action_map.json` | ❌ absent | Write synthetic to `fixture_bounty/` |
