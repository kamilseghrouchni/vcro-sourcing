---
entity_id: bundle-ad-multiplatform-metabolomics-2026-04-07
type: bundle
opportunity_type: bounty_bundle
status: draft
canonical_name: "ADNI-1/GO/2 Multi-Platform AD Metabolomics Bundle — Lipidomics + MXP500 (Multi-Source, EUR 12K–45K)"
disease_area:
  - "Alzheimer's disease"
  - "mild cognitive impairment"
modality:
  - "plasma lipidomics"
  - "targeted metabolomics"
  - "serum"
  - "LC-MS/MS"
composition:
  source:
    entity: adni-go2-plasma-lipidomics
    contribution: "Primary source: adni-go2-plasma-lipidomics (4,730 plasma samples, 1,517 participants, Baker Institute 781-species lipidomics). Secondary source aggregated into this bundle: adni-go2-serum-metabolomics-mxp500 (4,063 serum samples, 1,430 participants, MXP500 506 metabolites). Both cohorts are from ADNI-1/GO/2 with overlapping participants; internal cross-platform replication rate of 68.25% for mappable lipids is published (PMC12706616). The combined set provides plasma lipidomics on ~1,517 participants AND broad serum metabolomics on ~1,430 participants; the overlap enables direct multi-platform biomarker comparison on the same individuals."
    cost: "free (data only; LONI DUA required for plasma lipidomics; additional AD Knowledge Portal DUA for MXP500 serum data)"
    timeline: "3–5 months for parallel DUA applications"
  screening_qa:
    entity: alzheimers-disease-metabolomics-consortium
    contribution: "ADMC at Duke University manages the data layer for both cohorts. Harmonisation task: match participant IDs across the LONI (lipidomics) and AD Knowledge Portal (MXP500) downloads to identify the overlapping participant set. Statin covariate models are published for both platforms; buyer applies both Boruta-based (MXP500) and supplementary table-based (lipidomics) medication adjustment models. Cross-platform harmonisation adds analyst overhead above single-source bundles."
    cost: "EUR 5,000–10,000 (dual DUA admin + analyst time for participant-ID harmonisation across two data releases; estimated 5–10 days analyst effort)"
    timeline: "2–3 weeks analyst work after both data releases received"
  assay:
    entity: baker-institute-lipidomics-lc-ms-qqq
    contribution: "Assay already performed for both platforms: Baker Institute ran the 781-species lipidomics on ADNI plasma samples; Helmholtz Munich / ADMC ran the MXP500 on ADNI serum samples. No re-assay needed. The Baker Institute LC-MS/MS QqQ platform is the primary assay node for this bundle; the biocrates-mxp-quant-500 platform ran the secondary MXP500 layer (not listed separately here per three-leg format constraint — see note below)."
    cost: "already performed (EUR 0 for both existing data downloads)"
    timeline: "0 weeks (both datasets available at time of DUA approvals)"
total_known:
  low: 12000
  high: 45000
  currency: "EUR"
  within_budget: unknown
  unknown_components:
    - "Combined DUA legal/admin overhead for two parallel processes (EUR 10K–25K estimated)"
    - "ADMC data layer agreements for both cohorts (unknown; may be required)"
    - "Cross-platform participant-ID harmonisation complexity — if ADNI participant IDs differ between LONI and AD Knowledge Portal releases, a data linkage request to USC LONI may be required"
    - "Statin-excluded custom extract for either platform (quote required)"
    - "Total known range upper bound of EUR 45K is close to the EUR 50K budget — within_budget flagged as unknown because dual ADMC agreement costs could push total over budget"
provenance:
  composed_from:
    - adni-go2-plasma-lipidomics
    - alzheimers-disease-metabolomics-consortium
    - baker-institute-lipidomics-lc-ms-qqq
  sources:
    - PMC12269576
    - PMC12445873
    - PMC12706616
  last_compiled: "2026-04-07T00:00:00Z"
referenced_by: []
card:
  primary_signal: "Multi-platform AD metabolomics: plasma lipidomics (n=1517, 781 species) + serum MXP500 (n=1430, 506 metabolites) from ADNI-1/GO/2; 68.25% cross-platform lipid replication documented; EUR 12K–45K vs EUR 50K budget (within_budget: unknown — upper bound close to limit)."
  action: "Review bundle, confirm to orchestrate acquisition — note within_budget is unknown due to dual ADMC agreement costs; initiate parallel DUA applications; confirm participant-ID linkage availability across LONI and AD Knowledge Portal releases."
  risk: "Budget risk: total_known upper bound EUR 45K plus unknown ADMC agreement costs may exceed EUR 50K ceiling. Timeline risk: dual DUA + harmonisation may exceed 6-month window. Statin modelled not excluded in both platforms."
---

# ADNI-1/GO/2 Multi-Platform AD Metabolomics Bundle — Lipidomics + MXP500 (Multi-Source, EUR 12K–45K)

## Composition

This is a **multi-source bundle** that aggregates two ADNI-1/GO/2 metabolomics cohorts to deliver a multi-platform AD metabolomics dataset: the plasma lipidomics cohort (adni-go2-plasma-lipidomics, Baker Institute LC-MS/MS QqQ, 781 species) as the primary source, plus the serum metabolomics cohort (adni-go2-serum-metabolomics-mxp500, Biocrates MXP Quant 500, 506 metabolites) as the aggregated secondary source.

**Three-leg format note:** The format skill requires a single entity per leg. The secondary source (adni-go2-serum-metabolomics-mxp500) and its assay platform (biocrates-mxp-quant-500) are embedded in the source and assay leg contribution text rather than as separate legs because the three-leg structure is fixed. The bundle's `provenance.composed_from` list includes all four component entity slugs. This is a known format constraint for multi-source bundles and is flagged for format skill documentation.

The source leg combines both cohorts from the same study (ADNI-1/GO/2), which means participant IDs overlap substantially. A buyer acquires: (a) plasma lipidomics on ~1,517 participants and (b) serum metabolomics on ~1,430 participants. The overlap is unquantified in the wiki but likely high (same ADNI-1/GO/2 recruitment). Internal cross-platform replication of 68.25% for mappable lipid species (persistent class: 85.51%) has been published in PMC12706616, making this the best-evidenced cross-platform AD metabolomics validation available from a single wiki.

The screening/QA leg is ADMC at Duke University, which manages both data layers. The primary QA task for this bundle is participant-ID harmonisation: matching IDs across the LONI (plasma lipidomics) and AD Knowledge Portal (MXP500 serum) downloads. Statin covariate models from both platforms must be applied. Analyst time for harmonisation is estimated at 5–10 days above single-source bundles.

The assay leg is fully pre-generated for both platforms. No re-assay is required.

**Budget warning:** The total known upper bound (EUR 45K) is close to the buyer's EUR 50K ceiling. If dual ADMC agreement fees apply, the bundle may exceed budget. The within_budget flag is set to `unknown` because ADMC agreement costs are not publicly listed.

## Cost picture

| Leg | Estimate | Timeline | Note |
|---|---|---|---|
| Source (adni-go2-plasma-lipidomics + adni-go2-serum-metabolomics-mxp500) | Free (dual DUA required) | 3–5 months parallel DUA | LONI DUA for plasma lipidomics; AD Knowledge Portal DUA for MXP500 serum data |
| Screening / QA (alzheimers-disease-metabolomics-consortium) | EUR 5,000–10,000 (est.) | 2–3 weeks after data receipt | Dual medication model application + participant-ID harmonisation across two data releases |
| Assay (baker-institute-lipidomics-lc-ms-qqq + biocrates-mxp-quant-500) | Already performed (EUR 0) | 0 weeks | Both datasets pre-generated; buyer receives concentration matrices for both platforms |

**Total known range:** EUR 12,000 – 45,000 (within budget: unknown — upper bound close to EUR 50K ceiling)

**Unknown components:** Dual DUA legal/admin overhead (EUR 10K–25K); dual ADMC data layer agreements (unknown); participant-ID harmonisation complexity; statin-excluded custom extract for either platform (quote required).

## Linked entities

- Source: [[adni-go2-plasma-lipidomics]]
- Screening / QA: [[alzheimers-disease-metabolomics-consortium]]
- Assay: [[baker-institute-lipidomics-lc-ms-qqq]]
- Secondary source (aggregated): [[adni-go2-serum-metabolomics-mxp500]]
- Secondary assay (aggregated): [[biocrates-mxp-quant-500]]
- Sources: PMC12269576, PMC12445873, PMC12706616
