---
entity_id: dpp-lookahead-ili-genomics
type: cohort
canonical_name: "DPP and Look AHEAD Intensive Lifestyle Intervention Genomics Cohorts"
aliases:
  - DPP ILI genomics
  - Diabetes Prevention Program genomics
  - Look AHEAD ILI genomics
  - Action for Health in Diabetes
parent_institution: mrc-unit-lifelong-health-ageing-ucl
opportunity_type: surplus_trial_samples
evidence_type: direct
disease_area:
  - "obesity"
  - "type 2 diabetes"
  - "prediabetes"
modality:
  - genome-wide genotyping
  - clinical phenotyping
provenance:
  sources: [PMC12443623]
  last_compiled: 2026-04-07T00:00:00Z
  provenance_coverage:
    real_numbers: {status: covered, sources: 1}
    eligibility_criteria: {status: covered, sources: 1}
    effect_sizes_and_model_performance: {status: covered, sources: 1}
    overall_depth: 0.14
referenced_by: []
scoring:
  scale: {confidence: low}
  cost: {confidence: low}
  quality: {provenance_depth: 0.14, confidence: low}
card:
  primary_signal: "3,909 participants from DPP (27-site) and Look AHEAD (16-site) pooled for PGS-ILI interaction analysis; PGS associated with −0.55 kg extra weight loss per SD in year 1 ILI; both trials enriched for prediabetes/T2D."
  action: "Access via NIDDK Central Repository (biolincc.nhlbi.nih.gov or ncbi.nlm.nih.gov/projects/gap for dbGaP accessions); confirm commercial-use terms under NIDDK data-sharing agreement before designing a study."
  risk: "Only 3,909 participants — modestly powered for PGS-interaction analyses with borderline-significant effects. Enriched for T2D/prediabetes — findings do not generalise to general-population obesity. Single source — provenance depth very low."
---

# DPP and Look AHEAD Intensive Lifestyle Intervention Genomics Cohorts

## Summary

The Diabetes Prevention Program (DPP, 27 sites) and Look AHEAD (Action for Health in Diabetes, 16 sites) are US multi-site randomised controlled trials. Both enrolled ethnically diverse individuals with overweight/obesity: DPP targeted high-risk prediabetic adults, Look AHEAD targeted established T2D patients. They were jointly analysed in PMC12443623 for PGS-ILI weight-change interactions, with a combined n=3,909 genotyped participants. The pooled analysis showed individuals with higher BMI PGS lost more weight in year 1 of the ILI (−0.55 kg per SD of PGS) but regained more weight in years 1–3. Both trials have data accessible via NIDDK Central Repository.

## Real numbers

> "Among 3,909 participants ... individuals with a higher PGSLC lost more weight during the first year in response to the ILI compared to the control group (−0.55 kg per s.d. in PGS, 95% confidence interval: −0.94 to −0.16)"

[ref: PMC12443623]

With only ~3,900 total participants across two trials, the ILI PGS-interaction analysis is modestly powered; a buyer wanting to replicate or extend these findings in a pharmacotherapy context (e.g. GLP-1 agonists) would need a larger trial dataset to achieve robust effect-size estimates.

## Eligibility criteria

> "The DPP was a 27-site parallel-arm randomized controlled trial designed to determine whether either the oral diabetes drug metformin or an ILI ... could prevent or delay type 2 diabetes onset in ethnically diverse high-risk individuals with prediabetes and overweight or obesity ... Look AHEAD was a 16-site parallel-arm randomized controlled trial that assessed the long-term effects of an ILI in ethnically diverse patients with overweight or obesity and type 2 diabetes."

[ref: PMC12443623]

Both trials are specifically enriched for metabolically compromised individuals (prediabetes or T2D); a buyer interested in PGS-guided weight management in a general population cannot directly extrapolate from these trial findings without bias adjustments.

## Effect sizes and model performance

> "individuals with a higher PGSLC lost more weight during the first year in response to the ILI compared to the control group (−0.55 kg per s.d. in PGS, 95% confidence interval: −0.94 to −0.16) … among those who lost at least 3% of their baseline weight during the first year, a higher PGS was associated with more weight regain in the following years (up to 3 years) (0.48 kg per PGS s.d., 95% confidence interval: 0.00–0.95)."

[ref: PMC12443623]

The narrow confidence intervals (barely excluding null at 0.00 for regain) indicate borderline statistical significance; a buyer cannot rely on these ILI-PGS interaction effects for patient stratification without larger RCT replication, which means this signal is hypothesis-generating, not decision-ready.

## Open questions

- dbGaP accession numbers for DPP and Look AHEAD genomics data are not stated in the accessible text — confirm via NIDDK data repository before requesting access.
- Biospecimen availability (DNA aliquots, banked plasma) for molecular assays beyond genotyping is not described — contact NIDDK Central Repository for material status.
- Consent terms for commercial use must be confirmed under NIDDK data-sharing agreements.

## Links

- Sources: PMC12443623
