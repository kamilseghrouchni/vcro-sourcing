---
entity_id: bundle-ad-serum-mxp500-dua-2026-04-07
type: bundle
opportunity_type: bounty_bundle
status: draft
canonical_name: "ADNI-1/GO/2 Serum Metabolomics MXP500 — DUA Data Access Bundle (Single-Source, EUR 7K–30K)"
disease_area:
  - "Alzheimer's disease"
  - "mild cognitive impairment"
modality:
  - "targeted metabolomics"
  - "serum"
  - "LC-MS/MS"
composition:
  source:
    entity: adni-go2-serum-metabolomics-mxp500
    contribution: "4,063 serum samples from 1,430 ADNI-1/GO/2 participants; Biocrates MXP Quant 500 (506 post-QC metabolites across 26 biochemical classes); longitudinal up to 10 visits over 7 years; AD converter arm n=294; 311 metabolites significantly associated with AD phenotypes; 128 (41%) classified as persistent across timepoints."
    cost: "free (data only; dual DUA required — AD Knowledge Portal + LONI)"
    timeline: "3–5 months for dual DUA approval; data download ~2 weeks after approval"
  screening_qa:
    entity: alzheimers-disease-metabolomics-consortium
    contribution: "ADMC at Duke University operates the data layer for the MXP500 serum metabolomics dataset and has published the Boruta medication-metabolite adjustment model (41 baseline + 21 longitudinal associations). Buyer must apply the published Boruta model to account for statin and medication confounding in the downloaded data, or request a pre-adjusted matrix from ADMC. Note: dietary and microbiome confounding for bile acid and tryptophan pathways is unresolved and cannot be corrected at this stage."
    cost: "EUR 2,000–5,000 (analyst time for Boruta model application; estimated 2–5 days at academic core rates); separate ADMC data agreement cost unknown"
    timeline: "1–2 weeks analyst work after data receipt"
  assay:
    entity: biocrates-mxp-quant-500
    contribution: "Already performed: Biocrates MXP Quant 500 (624 metabolites, 506 post-QC) run by Helmholtz Munich / ADMC on all ADNI-1/GO/2 serum samples. Buyer receives absolute quantification concentration matrices via the AD Knowledge Portal. No re-assay needed unless buyer requires additional metabolomics coverage beyond the 506 post-QC features."
    cost: "already performed (EUR 0 for the existing data download)"
    timeline: "0 weeks (data available at time of DUA approval)"
total_known:
  low: 7000
  high: 30000
  currency: "EUR"
  within_budget: true
  unknown_components:
    - "Dual DUA legal/admin overhead (EUR 10K–25K estimated for two separate DUA processes per pricing-data.md Gaps section)"
    - "ADMC/Duke University separate data layer agreement cost (unknown; may be required for MXP500 data release)"
    - "Statin-excluded custom subset cost (quote required from ADMC/Helmholtz Munich if Boruta-adjusted data is unacceptable)"
    - "Dietary/microbiome confounding in bile acid and tryptophan pathway findings (unresolvable from this dataset alone)"
provenance:
  composed_from:
    - adni-go2-serum-metabolomics-mxp500
    - alzheimers-disease-metabolomics-consortium
    - biocrates-mxp-quant-500
  sources:
    - PMC12706616
  last_compiled: "2026-04-07T00:00:00Z"
referenced_by: []
card:
  primary_signal: "558 AD-spectrum subjects (AD converters n=294 + prevalent AD n=264); serum targeted metabolomics (MXP500, 506 metabolites); data free under dual DUA; EUR 7K–30K all-in vs EUR 50K budget; 3–6 month delivery."
  action: "Review bundle, confirm to orchestrate acquisition — note serum (not plasma) matrix; initiate dual DUA applications simultaneously; confirm Boruta-adjusted data satisfies statin hard negative."
  risk: "Serum matrix (not plasma as buyer specified); dual DUA may push delivery past 6-month deadline; statin modelled not excluded; dietary confounding unresolved for bile acid and tryptophan pathways."
---

# ADNI-1/GO/2 Serum Metabolomics MXP500 — DUA Data Access Bundle (Single-Source, EUR 7K–30K)

## Composition

This is a **single-source bundle** using the ADNI-1/GO/2 serum metabolomics cohort (adni-go2-serum-metabolomics-mxp500) as the source, the Alzheimer's Disease Metabolomics Consortium (ADMC) as the screening/QA gate, and the Biocrates MXP Quant 500 platform for which the assay has already been performed.

The source leg delivers the highest-depth AD metabolomics asset in the current wiki (provenance_depth=0.62): 4,063 serum samples from 1,430 ADNI-1/GO/2 participants across up to 10 longitudinal visits over seven years. The AD converter arm (n=294) plus prevalent AD arm (n=264) = 558 AD-spectrum subjects, all with longitudinal metabolite profiles from Biocrates MXP Quant 500, the most comprehensive Biocrates targeted panel available (506 post-QC metabolites across 26 biochemical classes). The 128 "persistent" metabolites — those showing significant associations at ≥2 longitudinal timepoints — represent the most validated panel for AD biomarker work from this dataset.

**Matrix note:** The buyer specified plasma; this cohort uses serum. For most targeted metabolomics analyses on the MXP500 panel the distinction is manageable (Biocrates validates the kit on both matrices), but for specific lipid classes (particularly lysophospholipids) serum vs plasma differences can be meaningful. The buyer should confirm serum acceptability before proceeding.

The screening/QA leg is the ADMC at Duke University, which manages the data layer and has published a Boruta-based medication-metabolite confounding model. The buyer applies this model to the downloaded data to handle statin confounding. The hard negative "statin-confounded samples not acceptable" is interpreted here as requiring Boruta adjustment — if the buyer requires physical statin-excluded samples rather than statistically-adjusted data, a custom extract request is required.

The assay leg is already performed: Helmholtz Munich / ADMC ran the full MXP500 panel on all ADNI-1/GO/2 serum samples, and the buyer receives absolute quantification concentration matrices via the AD Knowledge Portal. No re-assay is needed.

## Cost picture

| Leg | Estimate | Timeline | Note |
|---|---|---|---|
| Source (adni-go2-serum-metabolomics-mxp500) | Free (dual DUA required) | 3–5 months dual DUA | AD Knowledge Portal (doi:10.7303/9618123) + LONI; dual process adds ~1–2 months vs single-DUA option |
| Screening / QA (alzheimers-disease-metabolomics-consortium) | EUR 2,000–5,000 (analyst est.) | 1–2 weeks after data receipt | Boruta medication model application; ADMC separate agreement cost unknown |
| Assay (biocrates-mxp-quant-500) | Already performed (EUR 0) | 0 weeks | 506-metabolite concentration matrices pre-generated at Helmholtz Munich |

**Total known range:** EUR 7,000 – 30,000 (within budget: yes)

**Unknown components:** Dual DUA legal/admin overhead (EUR 10K–25K); ADMC data layer agreement (unknown); statin-excluded custom subset (quote required); dietary/microbiome confounding in bile acid / tryptophan pathways (unresolvable).

## Linked entities

- Source: [[adni-go2-serum-metabolomics-mxp500]]
- Screening / QA: [[alzheimers-disease-metabolomics-consortium]]
- Assay: [[biocrates-mxp-quant-500]]
- Sources: PMC12706616
