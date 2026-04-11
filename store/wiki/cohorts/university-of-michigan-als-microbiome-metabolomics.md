---
entity_id: university-of-michigan-als-microbiome-metabolomics
type: cohort
canonical_name: "University of Michigan ALS Gut Microbiome and Plasma Metabolomics Cohort"
aliases:
  - UM ALS microbiome cohort
  - Goutman/Feldman ALS longitudinal cohort
  - Michigan ALS metabolomics cohort
parent_institution: university-of-michigan-neurology
opportunity_type: published_cohort
evidence_type: direct
disease_area:
  - "amyotrophic lateral sclerosis"
modality:
  - gut microbiome sequencing (16S rRNA)
  - plasma metabolomics
provenance:
  sources: [PMC10834248]
  last_compiled: 2026-04-06T00:00:00Z
  provenance_coverage:
    co_modalities: {status: covered, sources: 1}
    longitudinal_structure: {status: covered, sources: 1}
    effect_sizes_and_model_performance: {status: covered, sources: 1}
    negative_results: {status: covered, sources: 1}
    sponsor_and_funding: {status: covered, sources: 1}
    access_and_consent_scope: {status: covered, sources: 1}
    sample_usability: {status: covered, sources: 1}
    real_numbers: {status: covered, sources: 1}
    overall_depth: 0.38
referenced_by: []
scoring:
  scale: {confidence: low}
  cost: {confidence: low}
  quality: {provenance_depth: 0.38, confidence: medium}
card:
  primary_signal: "Longitudinal ALS cohort at University of Michigan with paired 16S gut microbiome and plasma metabolomics; microbial structure differed at phylum level in ALS vs controls; Mendelian randomization indicates possible causality from fatty acid and acylcarnitine lipids."
  action: "Contact Eva Feldman (corresponding author, UMich) or check NIH/NCATS data deposition for formal access pathway; budget for full-text access to Oxford/Brain journal for sample N and platform details."
  risk: "Sample N, number of longitudinal timepoints, visit intervals, and metabolomics platform vendor are all unknown from abstract-only extraction — a buyer cannot assess statistical power without full-text access."
---

# University of Michigan ALS Gut Microbiome and Plasma Metabolomics Cohort

## Summary

The University of Michigan ALS Gut Microbiome and Plasma Metabolomics Cohort is a longitudinal ALS case-control study based at the Department of Neurology and the NeuroNetwork for Emerging Therapies at the University of Michigan (Ann Arbor). The cohort features paired 16S rRNA gut microbiome profiling and plasma metabolomics on the same ALS participants and controls, enabling microbe-metabolite correlation analysis. Gut microbial structure at the phylum level differed in ALS versus controls, with differential abundance of several genera; unsupervised clustering identified microbe-metabolite network modules that differed significantly between ALS and controls. Mendelian randomization indicated possible (not confirmed) causality from lipids related to fatty acid and acylcarnitine metabolism. The full text is publisher-restricted (Oxford University Press / Brain journal), so sample N, platform vendor, and pre-analytical details are not available from abstract-only extraction.

## Co-modalities

> "Gut microbiome and plasma metabolome have been separately investigated in ALS, but little is known about gut microbe-plasma metabolite correlations, which could identify robust disease biomarkers and potentially shed mechanistic insight."

[ref: PMC10834248]

Paired microbiome and plasma metabolomics data on the same ALS individuals is rare; a buyer with a multi-omics or gut-brain axis hypothesis can leverage both data layers without needing to source two independent cohorts.

## Longitudinal structure

> "Here, gut microbiome changes were longitudinally profiled in ALS and correlated to plasma metabolome."

[ref: PMC10834248]

Longitudinal design is confirmed, which means the cohort can support trajectory or progression modelling; however, without knowing the number of timepoints or visit intervals (not reported in the abstract), a buyer cannot yet judge whether the longitudinal depth is sufficient for their model.

## Effect sizes and model performance

> "Gut microbial structure at the phylum level differed in ALS versus control participants, with differential abundance of several distinct genera. Unsupervised clustering of microbe and metabolite levels identified modules, which differed significantly in ALS versus control participants."

[ref: PMC10834248]

Statistically significant case-control separation in microbiome and lipidome modules has been demonstrated, but no AUC, odds ratio, or fold-change magnitudes are given in the abstract; a buyer cannot pre-judge signal strength from this paper alone and should treat effect size as unknown pending full-text access.

## Negative results

> "Mendelian randomization indicated possible causality from specific lipids related to fatty acid and acylcarnitine metabolism."

[ref: PMC10834248]

The causal direction between gut microbiome and plasma lipids in ALS is not established; a buyer building a mechanistic claim or regulatory-grade biomarker argument will need additional experimental validation beyond what this cohort alone can provide.

## Sponsor and funding

> "National Institutes of Health10.13039/100000002 UL1TR002240NINDS R01NS127188, NIEHS R01ES030049NIEHS K23ES027221"

[ref: PMC10834248]

Multi-agency NIH and federal CDC funding with data-sharing obligations built into grants means the cohort is likely to have a data access mechanism (DUA or institutional agreement); a buyer can approach the PI or NCATS portal rather than relying solely on informal PI request.

## Access and consent scope

> "© The Author(s) 2023. Published by Oxford University Press on behalf of the Guarantors of Brain. All rights reserved. For permissions, please e-mail: journals.permissions@oup.com"

[ref: PMC10834248]

Access terms are unknown from the captured content; a buyer would need to contact the corresponding author (Eva L. Feldman) or check whether the NIH grants mandate data deposition in a public repository before committing to a timeline.

## Sample usability

> "correlated to plasma metabolome"

[ref: PMC10834248]

Plasma metabolomics data exist but pre-analytical protocol details (fasting, tube type, storage) are absent from available text; a buyer running LC/MS metabolomics cannot confirm compatibility without accessing the full Methods section, which is publisher-restricted for this paper.

## Real numbers

> "Here, gut microbiome changes were longitudinally profiled in ALS and correlated to plasma metabolome."

[ref: PMC10834248]

Sample size is unknown from available content; the buyer cannot assess statistical power or subgroup feasibility without full-text access or direct inquiry to the PI.

## Open questions

- Full text is publisher-restricted (Oxford University Press / Brain journal; XML not released). Methods, Results tables, and Data Availability sections are inaccessible. All fragments with confidence 'low' or 'medium' should be re-evaluated once full-text access is obtained.
- Total N (ALS cases and controls), number of longitudinal timepoints, visit intervals, and dropout rate are not stated in the abstract. These are critical for real_numbers and longitudinal_structure and must be retrieved from the full Methods.
- The metabolomics platform vendor (e.g. Metabolon, Biocrates, in-house LC/MS) is not named in the abstract. Platform identity determines whether raw data may already exist and which assay a buyer could reuse.
- Freeze-thaw cycle count, tube type, and fasting status for plasma collection are not stated. These determine sample usability for LC/MS re-analysis.
- Data availability statement is empty in meta.json. Whether raw 16S and metabolomics data are deposited in a public repository (e.g. NCBI SRA, Metabolomics Workbench) is unknown and must be verified before access planning.
- APOE genotype and ethnicity/ancestry breakdown are not reported in the abstract. Demographic transferability of findings to non-White ALS populations is unknown.

## Links

- Collection site: [[university-of-michigan-neurology]]
- Sponsor: [[neuronetwork-emerging-therapies-michigan]]
- Data provider: [[university-of-north-dakota-biomedical-sciences]]
- Platform: [[16s-rrna-gut-microbiome-sequencing]]
- Lead PI: [[eva-feldman-michigan]]
- Co-investigators: [[stephen-goutman-michigan]], [[junguk-hur-north-dakota]], [[kai-guo-michigan]], [[claudia-figueroa-romero-michigan]]
- Sources: PMC10834248
