---
entity_id: alspac-offspring-plasma-nmr-metabolomics
type: cohort
canonical_name: "ALSPAC Offspring Plasma NMR Metabolomics Cohort"
aliases:
  - Avon Longitudinal Study of Parents and Children NMR
  - Children of the 90s NMR metabolomics
  - ALSPAC NMR
parent_institution: university-of-bristol-mrc-ieu
opportunity_type: published_cohort
evidence_type: direct
disease_area:
  - "Alzheimer's disease"
  - "obesity"
  - "cardiometabolic disease"
modality:
  - plasma NMR metabolomics
provenance:
  sources: [PMC10873397, PMC12443623]
  last_compiled: 2026-04-07T00:00:00Z
  provenance_coverage:
    real_numbers: {status: covered, sources: 2}
    sample_usability: {status: covered, sources: 1}
    longitudinal_structure: {status: covered, sources: 2}
    confounders_and_exposures: {status: covered, sources: 1}
    demographic_composition: {status: covered, sources: 1}
    co_modalities_and_multi_omics_value: {status: covered, sources: 1}
    negative_results: {status: covered, sources: 1}
    sponsor_and_funding: {status: covered, sources: 1}
    access_and_consent_scope: {status: covered, sources: 2}
    overall_depth: 0.43
referenced_by: []
scoring:
  scale: {confidence: medium}
  cost: {confidence: low}
  quality: {provenance_depth: 0.43, confidence: medium}
card:
  primary_signal: "ALSPAC birth cohort with four plasma NMR metabolomics timepoints (ages 8, 16, 18, 25); n=5,648 at any timepoint but only 779 (18%) have all four; 96% White; EDTA plasma fasted except age 8."
  action: "Apply for data access at www.bristol.ac.uk/alspac/researchers/access; confirm commercial-use terms and Human Tissue Act licensing for biospecimen requests."
  risk: "Full longitudinal N drops to 779 at four timepoints — underpowered for subgroup analyses. Managed-access model; commercial-use terms must be clarified; statin/medication prevalence not quantified."
---

# ALSPAC Offspring Plasma NMR Metabolomics Cohort

## Summary

The Avon Longitudinal Study of Parents and Children (ALSPAC) offspring cohort has plasma NMR metabolomics measured at four discrete age windows (approximately 8, 16, 18, and 25 years) using the Nightingale Health 1H-NMR platform (229 metabolites from EDTA plasma). With 5,648 individuals eligible at any timepoint and only 779 with all four waves, longitudinal trajectory analyses face steep attrition. The cohort is >96% White and based in Southwest England. It has been used both for AD genetic liability life-course analysis (PMC10873397) and BMI polygenic score prediction across childhood (PMC12443623). Individual-level data are available under managed access via the University of Bristol.

## Real numbers

> "A total of 5,648 individuals were eligible for analysis on at least one occasion ... For the ALSPAC GRS analysis (n = 4316 at 8 years, n = 2691 at 16 years, n = 2361 at 18 years and n = 2338 at 25 years) ... Only eighteen percent (N = 779) of participants included in the age 8 analyses additionally had metabolites measured at the three subsequent time points."

[ref: PMC10873397]

A buyer needing all four longitudinal timepoints in the same individual has a usable N of only 779, which is underpowered for subgroup analyses (e.g. APOE ε4 homozygotes or early-onset strata), meaning any replication study must either accept this constraint or seek supplemental samples.

## Sample usability

> "blood samples were taken at clinics when participants were approximately 8, 16, 18 and 25 years old. Samples were fasted except for those obtained at age 8 years. A total of 229 metabolites from a targeted metabolomics platform were measured via proton nuclear magnetic resonance (1H-NMR) spectroscopy using EDTA-plasma"

[ref: PMC10873397]

Fasting/non-fasting mismatch between age 8 and later timepoints limits direct quantitative comparison of glucose, triglyceride, and VLDL metabolites across the full age range; a buyer using ALSPAC for longitudinal lipid trajectory work must treat age-8 data as a semi-independent snapshot rather than a comparable baseline.

## Longitudinal structure

> "blood samples were taken at clinics when participants were approximately 8, 16, 18 and 25 years old ... Only eighteen percent (N = 779) of participants included in the age 8 analyses additionally had metabolites measured at the three subsequent time points."

[ref: PMC10873397]

Steep attrition from 4,316 to 779 across the four waves means the full longitudinal trajectory is capturable only in a highly selected subgroup, which may introduce healthy-participant bias; a buyer modelling metabolic trajectories from childhood to young adulthood must account for non-random dropout.

## Confounders and exposures

> "This could reflect increased lipid-lowering medication use with age (e.g., statins), which would be expected to be highest among ε4 carriers due to higher dyslipidaemia incurred by the variant ... there was little evidence to suggest the AD GRS was associated with BMI, height, smoking, alcohol consumption, physical activity, maternal and paternal educational attainment, or maternal or paternal occupational social class in ALSPAC"

[ref: PMC10873397]

Lipid-modifying drug use is an uncontrolled confounder in the older UK Biobank tertiles and would similarly confound any buyer study using ALSPAC at age 25 or follow-on adult timepoints; buyers must either exclude or covariate-adjust for statin use when analysing cholesterol-related metabolites.

## Demographic composition

> "The lack of ancestral diversity in ALSPAC (96% white) and UK Biobank (only Europeans analysed to avoid genetic confounding) limits the generalizability of results to diverse populations"

[ref: PMC10873397]

Near-homogeneous European ancestry means any biomarker or signal derived from ALSPAC will not generalise to populations where APOE ε4 penetrance differs (e.g. African American or Hispanic), which is a critical limitation for buyers targeting diverse AD prevention programmes.

## Co-modalities and multi-omics value

> "genotypes were assessed using the Illumina HumanHap550 quad chip, with imputation performed with the Haplotype Reference Consortium panel ... AD liability was defined using weighted genetic risk scores (GRS) based on 25 SNPs associated with AD risk at genome-wide significance"

[ref: PMC10873397]

Paired genotype and longitudinal plasma metabolomics in the same individuals from age 8 enables Mendelian randomisation and genotype-stratified metabolite analyses without additional genotyping cost; a buyer can immediately cross-validate metabolite hits against APOE carrier status in the same dataset.

## Negative results

> "In ALSPAC, effect sizes for the association between higher AD liability and glycolysis-related traits (glucose, citrate, and lactate), both including and excluding APOE variants, centre around zero ... there was no association of higher AD liability with glycoprotein acetyls, a marker of inflammation, at any time point in ALSPAC or UK Biobank IVW models ... amino acids (including the branched chain amino acids (BCAAs) isoleucine, leucine, and valine) demonstrated the weakest associations with higher AD liability including APOE variants"

[ref: PMC10873397]

Buyers seeking to use glucose dysregulation, amino acid profiles, or inflammatory markers (GlycA) as early plasma biomarkers of AD genetic risk will find no support in ALSPAC data from ages 8–25, avoiding a costly null study in this cohort; the signal is lipid-specific.

## Sponsor and funding

> "Medical Research CouncilMC_UU_12013/1MC_UU_00011/1 ... Wellcome Trust218495/Z/19/Z215193/Z18/Z ... NIHR17/0005587 ... World Cancer Research FundIIG_2019_2009 ... UKRI Future Leaders FellowshipMR/W011581/1"

[ref: PMC10873397]

MRC and Wellcome Trust funding carries standard open-data sharing expectations, supporting a buyer's case for data access; the academic funding model (no industry co-sponsor) means there are unlikely to be proprietary restrictions on data sharing beyond managed-access compliance.

## Access and consent scope

> "Individual-level ALSPAC data are available following application. This process of managed access is detailed at www.bristol.ac.uk/alspac/researchers/access ... Ethical approval for the study was obtained from the ALSPAC Ethics and Law Committee and the Local Research Ethics Committees. Informed consent for biological samples has been collected in accordance with the Human Tissue Act (2004)."

[ref: PMC10873397]

Managed-access model means a buyer must submit a formal data application before commencing analysis; commercial-use terms are not stated in the paper and must be clarified directly with the ALSPAC data access team, representing a potential gating risk for industry-sponsored projects.

## Open questions

- Commercial-use terms for ALSPAC individual-level data are not stated; must be clarified with the ALSPAC data access team.
- Statin and lipid-lowering medication prevalence by age tertile and APOE genotype is not quantified.
- Freeze-thaw cycle history and aliquot volumes for ALSPAC EDTA plasma samples are not reported.
- ALSPAC follow-up beyond age 25 (midlife wave) not confirmed; check current ALSPAC data release notes.
- Sample depletion status for ALSPAC EDTA plasma aliquots is unknown; contact ALSPAC biobank team to confirm remaining aliquot counts.
- Note: PMC12443623 uses ALSPAC for BMI/genomics analysis (not NMR metabolomics); the multi-assay use should be tracked as the entity is enriched.

## Links

- Institution: [[university-of-bristol-mrc-ieu]]
- Platform: [[nightingale-nmr-1h-targeted-metabolomics]]
- Lead PI: [[joshua-bell-bristol]]
- Co-investigator: [[emma-anderson-bristol]]
- Sources: PMC10873397, PMC12443623
