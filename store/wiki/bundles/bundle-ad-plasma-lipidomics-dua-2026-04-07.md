---
entity_id: bundle-ad-plasma-lipidomics-dua-2026-04-07
type: bundle
opportunity_type: bounty_bundle
status: draft
canonical_name: "ADNI-1/GO/2 Plasma Lipidomics — DUA Data Access Bundle (Single-Source, EUR 5K–20K)"
disease_area:
  - "Alzheimer's disease"
modality:
  - "plasma lipidomics"
  - "LC-MS/MS"
composition:
  source:
    entity: adni-go2-plasma-lipidomics
    contribution: "4,730 plasma samples from 1,517 ADNI-1/GO/2 participants with longitudinal lipidomics (Baker Institute LC-MS/MS QqQ, 781 species); ~580 AD-spectrum subjects usable for validation; baseline/12mo/24mo timepoints for most participants; amyloid PET, CSF tau, FDG-PET co-modalities on subset."
    cost: "free (data only, DUA required)"
    timeline: "2–4 months for DUA approval at ida.loni.usc.edu; data download ~2 weeks after approval"
  screening_qa:
    entity: usc-loni-data-coordinating-center
    contribution: "LONI DUA process constitutes the formal access gate and data governance QA step. Buyer applies through ida.loni.usc.edu; statin covariate model is published and accessible via supplementary tables of PMC12269576; buyer must confirm whether covariate-adjusted data satisfies the 'statin-confounded not acceptable' criterion or request a statin-naive custom extract via ADMC/Duke University."
    cost: "quote required (DUA legal/admin overhead estimated EUR 5K–15K per institution; analyst time for statin QA review estimated EUR 2K–5K)"
    timeline: "2–4 months concurrent with DUA"
  assay:
    entity: baker-institute-lipidomics-lc-ms-qqq
    contribution: "Already performed: Baker Heart and Diabetes Institute targeted LC-MS/MS QqQ lipidomics (Agilent 6490 dMRM, 781 species, 49 classes) on all 4,730 ADNI plasma samples. Buyer receives pre-processed metabolite concentration matrices. No re-assay needed unless buyer requires raw instrument files or a fresh run on a specific sub-cohort."
    cost: "already performed (EUR 0 for the existing data download)"
    timeline: "0 weeks (data available at time of DUA approval)"
total_known:
  low: 5000
  high: 20000
  currency: "EUR"
  within_budget: true
  unknown_components:
    - "DUA legal/admin overhead (EUR 5K–15K estimated, highly institution-dependent per pricing-data.md Gaps section)"
    - "ADMC/Duke University separate lipidomics data layer agreement cost (if required beyond standard LONI DUA)"
    - "Statin-excluded custom extract cost (quote required from Baker Institute if covariate-adjusted data is unacceptable to buyer)"
provenance:
  composed_from:
    - adni-go2-plasma-lipidomics
    - usc-loni-data-coordinating-center
    - baker-institute-lipidomics-lc-ms-qqq
  sources:
    - PMC12269576
    - PMC12445873
  last_compiled: "2026-04-07T00:00:00Z"
referenced_by: []
card:
  primary_signal: "580 AD-spectrum plasma lipidomics subjects from ADNI-1/GO/2; Baker Institute LC-MS/MS (781 species); data free under DUA; EUR 5K–20K all-in vs EUR 50K budget; 2–5 month delivery."
  action: "Review bundle, confirm to orchestrate acquisition — start DUA application at ida.loni.usc.edu immediately; confirm statin covariate-adjusted data acceptability with buyer."
  risk: "Statin hard negative: 423 lipid species affected by statin use; ADNI provides covariate-adjusted (not statin-excluded) data — buyer must confirm acceptability. DUA legal overhead is the primary known cost driver."
---

# ADNI-1/GO/2 Plasma Lipidomics — DUA Data Access Bundle (Single-Source, EUR 5K–20K)

## Composition

This is a **single-source bundle** assembled from the ADNI-1/GO/2 longitudinal plasma lipidomics cohort (adni-go2-plasma-lipidomics), the LONI data coordinating center as the access/QA gate (usc-loni-data-coordinating-center), and the Baker Institute LC-MS/MS platform for which the assay has already been performed (baker-institute-lipidomics-lc-ms-qqq).

The source leg delivers the core scientific asset: 4,730 plasma samples from 1,517 ADNI-1/GO/2 participants profiled with a 781-species targeted lipidomics platform, with longitudinal timepoints at 6–12 month intervals for up to 10 years. Of these participants, approximately 580 fall into the AD-spectrum groups (stable AD + CN discriminator set; 329 MCI-to-AD converters) that are directly relevant to a biomarker validation study. This exceeds the buyer's n_target=200 requirement by approximately 3×.

The screening/QA leg is the LONI DUA process: the buyer applies through ida.loni.usc.edu, which governs data release and constitutes the formal data governance QA step. The critical buyer-side action at this leg is confirming whether statin covariate-adjusted metabolite data (not statin-excluded) satisfies the hard negative "statin-confounded samples not acceptable." The paper documents 423 lipid species significantly affected by statin use; these are modelled as a covariate rather than excluded. If the buyer requires a statin-excluded sample subset, a custom extract request to the ADMC/Duke University team is the resolution path.

The assay leg is already performed: Baker Institute generated all plasma lipidomics data, and buyers receive pre-processed metabolite concentration matrices at time of DUA approval. No re-assay is needed or priced in this bundle.

## Cost picture

| Leg | Estimate | Timeline | Note |
|---|---|---|---|
| Source (adni-go2-plasma-lipidomics) | Free (DUA required) | 2–4 months DUA + 2 weeks download | ADNI data is publicly available under DUA at ida.loni.usc.edu |
| Screening / QA (usc-loni-data-coordinating-center) | Quote required (EUR 5K–20K admin estimated) | 2–4 months concurrent with DUA | Statin QA: confirm covariate-adjusted vs excluded; ADMC separate agreement may apply |
| Assay (baker-institute-lipidomics-lc-ms-qqq) | Already performed (EUR 0) | 0 weeks | 781-species LC-MS/MS data pre-generated; buyer receives concentration matrices |

**Total known range:** EUR 5,000 – 20,000 (within budget: yes)

**Unknown components:** DUA legal/admin overhead (EUR 5K–15K, institution-dependent); ADMC/Duke separate data layer agreement (if required); statin-excluded custom extract (quote required if covariate adjustment is unacceptable).

## Linked entities

- Source: [[adni-go2-plasma-lipidomics]]
- Screening / QA: [[usc-loni-data-coordinating-center]]
- Assay: [[baker-institute-lipidomics-lc-ms-qqq]]
- Sources: PMC12269576, PMC12445873
