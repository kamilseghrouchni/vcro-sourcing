---
pmid: "40974012"
pmc: "PMC13016809"
doi: "10.1093/brain/awaf346"
title: "Staging Alzheimer’s disease through amyloid and tau PET"
journal: "Brain"
year: 2026
authors:
  - name: "Johnson Derek R"
    affiliations:
      - "Department of Radiology, Mayo Clinic, Rochester, MN 55905, USA"
  - name: "Wiste Heather J"
    affiliations:
      - "Department of Quantitative Health Sciences, Mayo Clinic, Rochester, MN 55905, USA"
  - name: "Lowe Val"
    affiliations:
      - "Department of Radiology, Mayo Clinic, Rochester, MN 55905, USA"
  - name: "Schwarz Christopher G"
    affiliations:
      - "Department of Radiology, Mayo Clinic, Rochester, MN 55905, USA"
  - name: "Knopman David S"
    affiliations:
      - "Department of Neurology, Mayo Clinic, Rochester, MN 55905, USA"
  - name: "Vemuri Prashanthi"
    affiliations:
      - "Department of Radiology, Mayo Clinic, Rochester, MN 55905, USA"
  - name: "Kantarci Kejal"
    affiliations:
      - "Department of Radiology, Mayo Clinic, Rochester, MN 55905, USA"
  - name: "Boeve Bradley F"
    affiliations:
      - "Department of Neurology, Mayo Clinic, Rochester, MN 55905, USA"
  - name: "Graff-Radford Jonathan"
    affiliations:
      - "Department of Neurology, Mayo Clinic, Rochester, MN 55905, USA"
  - name: "Cogswell Petrice M"
    affiliations:
      - "Department of Radiology, Mayo Clinic, Rochester, MN 55905, USA"
  - name: "Senjem Matthew C"
    affiliations:
      - "Department of Radiology, Mayo Clinic, Rochester, MN 55905, USA"
      - "Department of Information Technology, Mayo Clinic, Rochester, MN 55905, USA"
  - name: "Therneau Terry M"
    affiliations:
      - "Department of Quantitative Health Sciences, Mayo Clinic, Rochester, MN 55905, USA"
  - name: "Griswold Michael E"
    affiliations:
      - "Department of Data Science, University of Mississippi Medical Center, Jackson, MS 39216, USA"
  - name: "Hu Mingzhao"
    affiliations:
      - "Department of Quantitative Health Sciences, Mayo Clinic, Rochester, MN 55905, USA"
  - name: "Petersen Ronald C"
    affiliations:
      - "Department of Quantitative Health Sciences, Mayo Clinic, Rochester, MN 55905, USA"
      - "Department of Neurology, Mayo Clinic, Rochester, MN 55905, USA"
  - name: "Jack Clifford R"
    affiliations:
      - "Department of Radiology, Mayo Clinic, Rochester, MN 55905, USA"
---

# Staging Alzheimer’s disease through amyloid and tau PET

## Abstract

A workgroup assembled by the Alzheimer’s Association recently described a conceptual framework for Alzheimer’s disease biological staging based on amyloid and tau PET imaging. However, specific tau PET cut points were left to be determined, a step necessary prior to clinical application. We sought to operationalize and evaluate Alzheimer’s disease biological staging by identifying meaningful tau PET cut points to define the four biological stages in a well-characterized participant cohort and describe the features of individuals placed into the different biological stages.

The primary analysis included 896 participants in the Mayo Clinic Study of Aging or the Mayo Clinic Alzheimer’s Disease Research Center longitudinal cohorts. A validation cohort consisted of 328 participants in the Alzheimer’s Disease Neuroimaging Initiative. Both cognitively normal and impaired individuals with positive amyloid PET and evaluable tau PET imaging were included. Tau PET cut points were identified with Gaussian mixture models to characterize Alzheimer’s disease biological stage in study participants with different clinical diagnoses and objective degrees of cognitive impairment as measured by Mini-Mental State Examination.

A tau PET cut point in the medial temporal region and two cut points in the temporoparietal region were identified to produce, collectively, the four Alzheimer’s disease biological stages described in the revised criteria. Increasing stage was associated with greater likelihood of mild cognitive impairment and dementia diagnosis and worsening cognitive performance on Mini-Mental State Examination and Clinical Dementia Rating Sum of Boxes, a result that was reproduced in the independent Alzheimer’s Disease Neuroimaging Initiative cohort.

This study provided empirical validation for the concept of using amyloid PET and tau PET to separate subjects with biomarker-proven Alzheimer’s disease into four biological stages with distinct characteristics.

## Introduction

A workgroup assembled by the Alzheimer’s Association recently described revised criteria for the diagnosis and staging of Alzheimer’s disease (AD).1 These criteria build on earlier efforts in 2011 and 2018,2,3 and were initiated in response to recent advances in the field, including the development and clinical validation of disease-specific plasma AD biomarkers, including the pTau217/Aβ1–42 ratio, which has recently earned US Food and Drug Administration (FDA) clearance for diagnosis of AD,4-7 and the approval of disease-targeted therapies.8 The revised criteria include updates to the 2018 research framework on the topics of biomarker classification, diagnosis and biological staging.

Biological staging by PET in the revised criteria is based on the temporal evolution of amyloid and tau PET findings in longitudinal observational studies of the natural history of the disease. It is applicable only to patients with a definitive biomarker diagnosis of AD, such as a positive amyloid PET. Under the revised criteria, biological staging is divided into four categories of increasing disease severity.1 The revised criteria include three biological staging variations: one based solely on amyloid and tau PET; a second variation based on Core 1 fluid biomarkers and tau PET; and a third based only on fluid biomarkers. The staging scheme based on amyloid and tau PET is regarded as the most empirically grounded at present.9-11

Under the PET-defined staging system, tau PET remains normal in biological stage A (A+T2−), indicating subthreshold tau neurofibrillary tangle burden on PET rather than the absence of tau pathology in most patients.12 Biological stage B (A+T2MTL+) is defined as tau PET abnormality limited to the medial temporal lobes (MTL), because AD patients with MTL tauopathy on PET have been shown to be at higher risk of subsequent cognitive decline than patients without any elevated tau PET signal, despite the fact that both of these imaging appearances are compatible with a negative study in the FDA package insert of flortaucipir.10 Biological stages C (A+T2MOD+) and D (A+T2HIGH+) are defined by moderate and high levels of neocortical uptake outside of the MTL, although the specific threshold differentiating these stages, in addition to the anatomical definition of the neocortical region of interest (ROI), were left to be defined by the research community.

To address this knowledge gap, the present manuscript is focused on the biological staging scheme based on amyloid and tau PET. Our goals were as follows: (i) to operationalize the staging scheme by identifying meaningful tau PET cut points in a group of well-characterized participants with positive amyloid PET and varying degrees of tau PET abnormality; (ii) to describe the clinical, demographic and cognitive features of individuals who were placed into the different biological stages; and (iii) to evaluate reproducibility of these findings using Alzheimer’s Disease Neuroimaging Initiative (ADNI) data.

## Materials and methods

### Participants

Participants in the primary Mayo cohort were enrolled in either the Mayo Clinic Study of Aging (MCSA) or the Mayo Clinic Alzheimer’s Disease Research Center (ADRC). The MCSA is a longitudinal cohort study that examines normal cognitive ageing, mild cognitive impairment (MCI) and dementia among a stratified random sample of residents of Olmsted County, MN, USA.13 The Mayo Clinic ADRC is a clinic-based longitudinal research study of individuals recruited from clinical practice at a single academic medical centre. The validation cohort consisted of participants in the ADNI.14

From these studies, we identified participants who had undergone at least one amyloid PET scan with a positive result and a tau PET scan regardless of the result. Amyloid PET-positive participants were assigned a diagnosis of cognitively unimpaired (CU), MCI15 or dementia16 using established criteria. Within the primary Mayo cohort, clinical dementia syndrome was subdivided into AD dementia, Lewy body dementia (DLB) and frontotemporal dementia (FTD). Participants with missing or uncertain diagnoses, primary dementia diagnoses other than AD, DLB or FTD, and participants with a familial or personal genetic mutation or risk of dementia were excluded. Within the ADNI cohort, all amyloid PET-positive participants with a diagnosis of dementia had clinical diagnoses of dementia attributable to AD. The Short Test of Mental Status is collected in the Mayo participants and was mapped to Mini-Mental State Examination (MMSE) scores for better comparison with ADNI participants. For a few ADRC participants for whom the Short Test was not available, the Montreal Cognitive Assessment score was mapped to MMSE.17,18

### Protocol approval and patient consent

This study was approved by the Mayo Clinic and Olmsted Medical Center Institutional Review Boards. Written informed consent was obtained from all participants, and in the case of persons with cognitive impairment sufficient to interfere with capacity, from a close family member.

### Imaging methods

In the primary Mayo cohort, amyloid PET imaging was performed with Pittsburgh Compound B19 and tau PET with flortaucipir.20 MRI performed at 3 T was used in the PET data processing pipeline.21 Amyloid PET target and reference regions of interest (ROIs) were defined using the Mayo MCALT atlas, with a previously described processing pipeline.21,22 The amyloid PET meta-ROI was subsequently converted to the Centiloid scale, with values of ≥25 considered positive.23-26 Flortaucipir regions of interest were defined by the CenTauR atlas, with standardized uptake value ratio (SUVR) values calculated in reference to the cerebellum; SUVR values were subsequently converted to CenTauR z-scores (CenTauRz).27,28 Although the amyloid PET imaging community have widely adopted the Centiloid standard for quantification and harmonization across tracers and software, a consensus harmonized scale for tau PET has not emerged. Several competing Centiloid-like scales have been proposed, but they have each not yet released their calibration equations for public use, and no community consensus has arisen.29,30 We report our values in CenTauRz, rather than SUVR, because it is a standardized scale for which the equations have been released for use. It standardizes values relative to a reference normal population, which allows use of a single cut point for binary T+/T− classification across tracers and sites (i.e. using the same cut points in different settings), but it does not allow direct comparison of quantitative measurements across tracers at all ranges of uptake. Differentiation between biological stage A and stage B was based on the degree of uptake in the CenTauR-defined mesial temporal region, and neocortical uptake for differentiating between biological stages B, C and D was measured within the temporoparietal region.

Amyloid PET imaging in the ADNI validation cohort was performed with florbetapir or florbetaben, with Centiloid values obtained from the ADNI database, and a value ≥25 considered positive. Flortaucipir tau PET images and 3 T MR images were imported and processed through the same analysis pipeline as in the Mayo cohort. ADNI MR and PET methods have been described previously.14,31-34

### Biofluid methods

ADNI CSF and plasma biomarkers were obtained from the ADNI database and were available in a subset of individuals (n = 193 for CSF and n = 230 for plasma) at the baseline visit used in this study, i.e. the first visit with both an amyloid and tau PET scan.35,36 The Roche Elecsys platform was used to measure phosphorylated-tau 181P (p-tau181) and amyloid-β1–42 (Aβ42) CSF immunoassays. The Fujirebio Diagnostics Lumipulse platform was used to measure plasma phosphorylated Tau217 (p-tau217) and Aβ42. CSF and plasma data were not included for the Mayo cohort owing to limited numbers of available measurements across the full disease spectrum.

### Statistical methods

Univariate Gaussian mixture models allowing for unequal variances were fitted among all Mayo participants and were used to identify cut points for the mesial temporal and temporoparietal tau PET regions. Based on the staging structure outlined in the revised AD diagnostic criteria, we assumed that our sample consisted of two subgroups for the mesial temporal region: one with normal levels of tau PET and one with abnormal levels. The cut point was then defined as the point where the posterior probability of the tau PET value belonging to Group 1 versus Group 2 was 50%. For the temporoparietal region, we assumed that our sample consisted of three subgroups based on the revised diagnostic and staging criteria (normal, moderate and high tau PET values), and we defined the two cut points as the points where the posterior probability was 50% for belonging to Group 1 versus Group 2, and 50% for belonging to Group 2 versus Group 3; graphically, these cut points correspond to where the Gaussian density estimates intersect. The 95% bootstrap confidence intervals (CIs) for the cut points were determined from 5000 samples. Participants were classified into the four biological stages (A–D) based on these cut points. To test whether our data supported the assumption of two subgroups for the mesial temporal region and three subgroups for the temporoparietal region, the Gaussian mixture models were re-fitted, specifying one to four subgroups, and the Bayesian information criterion was used to determine the best model fit (lower values indicate better model fits).

Quantile regression models were used to estimate the median MMSE and Clinical Dementia Rating sum of boxes (CDR-SB) (outcome) within each biological stage (predictor), adjusting for age, sex and education. Age was included in the model with a restricted cubic spline to allow for non-linearity in the association with the outcomes. Among the subset of individuals with at least one clinical follow-up visit, longitudinal linear mixed-effects models were fitted to estimate differences in rates of change in MMSE and CDR-SB by biological stage. The models included MMSE (or CDR-SB) at baseline and all available follow-up visits as the outcome, and the age at baseline, sex, education and biological stage at baseline as predictors. The models also included time from baseline in years and all interactions with the predictors and time. Random participant-specific intercepts and slopes were included to account for heterogeneity across individuals in baseline cognitive function and rates of decline.

Among the subset of individuals with at least one follow-up visit with both an amyloid and tau PET scan, longitudinal mixed-effects models were fitted to estimate differences in rates of change in amyloid PET Centiloid, mesial temporal tau PET CenTauRz, and temporoparietal tau PET CenTauRz by biological stage. The models included age at baseline, sex, and biological stage at baseline as predictors and were fitted in a similar manner to the longitudinal cognitive models described above.

All analyses were done within the Mayo cohort, then repeated in the ADNI cohort. The tau PET cut points defined using the Mayo participants were used for the initial analysis in the ADNI cohort. A sensitivity analysis was done to compare the cut points and biological stages derived within the Mayo cohort to cut points and biological stages derived from the ADNI cohort. Additionally, within the ADNI cohort the median CSF and plasma p-tau and p-tau/Aβ42 were estimated by biological stage using quantile (Q) regression models, adjusting for age and sex.

All analyses were performed using the R Language and Environment for Statistical Computing version 4.4.1. The mclust package version 6.1.1 was used for mixture modelling, the quantreg package version 5.99.1 for quantile regression and the nlme package version 3.1-166 for the linear mixed-effects regression models.

## Results

Demographic information and clinical characteristics of the 896 participants in the primary Mayo cohort are summarized in Table 1. The 328 participants in the ADNI validation cohort are summarized in Supplementary Table 1. A total of 634 (71%) Mayo and 247 (75%) ADNI participants had at least one clinical follow-up visit, and 413 (46%) Mayo and 110 (34%) ADNI participants had at least one PET follow-up visit with both an amyloid and tau-PET scan.

**Table 1: Characteristics of Mayo participants by clinical diagnosis**

| Characteristic | All(n = 896) | CU(n = 477) | MCI(n = 179) | AD dementia(n = 195) | DLB(n = 36) | FTD(n = 9) |
|---|---|---|---|---|---|---|
| Study, n (%) |   |   |   |   |   |   |
| MCSA | 538 (60%) | 454 (95%) | 75 (42%) | 7 (4%) | 2 (6%) | 0 (0%) |
| ADRC | 358 (40%) | 23 (5%) | 104 (58%) | 188 (96%) | 34 (94%) | 9 (100%) |
| Age, years |   |   |   |   |   |   |
| Median (Q1, Q3) | 75 (68, 82) | 78 (70, 84) | 76 (70, 83) | 70 (61, 77) | 71 (66, 76) | 66 (64, 72) |
| Range | 51–101 | 53–101 | 51–98 | 51–90 | 52–89 | 63–77 |
| Sex, n (%) |   |   |   |   |   |   |
| Female | 441 (49%) | 234 (49%) | 81 (45%) | 114 (58%) | 7 (19%) | 5 (56%) |
| Male | 455 (51%) | 243 (51%) | 98 (55%) | 81 (42%) | 29 (81%) | 4 (44%) |
| Race, n (%) |   |   |   |   |   |   |
| White | 879 (98%) | 470 (99%) | 175 (98%) | 191 (98%) | 34 (94%) | 9 (100%) |
| Black | 7 (1%) | 3 (1%) | 1 (1%) | 2 (1%) | 1 (3%) | 0 (0%) |
| Asian | 3 (0%) | 0 (0%) | 2 (1%) | 0 (0%) | 1 (3%) | 0 (0%) |
| Other/more than one | 5 (1%) | 3 (1%) | 0 (0%) | 2 (1%) | 0 (0%) | 0 (0%) |
| Unknown/not disclosed | 2 (0%) | 1 (0%) | 1 (1%) | 0 (0%) | 0 (0%) | 0 (0%) |
| Ethnicity, n (%) |   |   |   |   |   |   |
| Not Hispanic | 889 (99%) | 474 (99%) | 177 (99%) | 193 (99%) | 36 (100%) | 9 (100%) |
| Hispanic | 1 (0%) | 1 (0%) | 0 (0%) | 0 (0%) | 0 (0%) | 0 (0%) |
| Unknown/not disclosed | 6 (1%) | 2 (0%) | 2 (1%) | 2 (1%) | 0 (0%) | 0 (0%) |
| Education, years, n (%) |   |   |   |   |   |   |
| 12 or fewer | 202 (23%) | 114 (24%) | 39 (22%) | 44 (23%) | 5 (14%) | 0 (0%) |
| 13–15 | 192 (21%) | 125 (26%) | 25 (14%) | 32 (16%) | 10 (28%) | 0 (0%) |
| 16 or more | 502 (56%) | 238 (50%) | 115 (64%) | 119 (61%) | 21 (58%) | 9 (100%) |
| APOE genotype, n (%) |   |   |   |   |   |   |
| ε4 non-carrier | 388 (49%) | 260 (60%) | 66 (43%) | 41 (25%) | 17 (50%) | 4 (57%) |
| ε4 carrier | 407 (51%) | 175 (40%) | 89 (57%) | 123 (75%) | 17 (50%) | 3 (43%) |
| MMSE, median (Q1, Q3) | 28 (24, 29) | 29 (28, 29) | 27 (25, 28) | 21 (17, 24) | 23 (18, 26) | 26 (20, 28) |
| CDR global score, n (%) |   |   |   |   |   |   |
| 0 | 476 (53%) | 445 (93%) | 31 (17%) | 0 (0%) | 0 (0%) | 0 (0%) |
| 0.5 | 289 (32%) | 32 (7%) | 143 (80%) | 101 (52%) | 10 (28%) | 3 (33%) |
| 1 | 91 (10%) | 0 (0%) | 5 (3%) | 64 (33%) | 19 (53%) | 3 (33%) |
| 2 | 38 (4%) | 0 (0%) | 0 (0%) | 29 (15%) | 6 (17%) | 3 (33%) |
| 3 | 1 (0%) | 0 (0%) | 0 (0%) | 0 (0%) | 1 (3%) | 0 (0%) |
| CDR sum of boxes, median (Q1, Q3) | 0.0 (0.0, 2.0) | 0.0 (0.0, 0.0) | 1.0 (0.5, 1.5) | 4.0 (2.5, 7.0) | 5.5 (3.5, 7.1) | 4.5 (3.0, 8.0) |
| Amyloid PET, Centiloid, median (Q1, Q3) | 77 (42, 111) | 54 (33, 88) | 92 (62, 123) | 111 (83, 134) | 76 (44, 104) | 59 (46, 80) |
| Mesial temporal tau PET, CenTauRz, median (Q1, Q3) | 1.4 (0.1, 4.4) | 0.5 (−0.3, 1.4) | 2.7 (0.7, 5.5) | 7.0 (5.0, 9.6) | 1.2 (−0.2, 2.2) | 1.7 (0.7, 3.2) |
| Temporoparietal tau PET, CenTauRz, median (Q1, Q3) | 1.6 (0.4, 3.7) | 0.8 (0.1, 1.7) | 2.1 (0.9, 4.3) | 12.1 (5.6, 19.8) | 1.6 (0.3, 2.5) | 1.5 (1.1, 2.7) |
| Clinical follow-up data available, n (%) |   |   |   |   |   |   |
| No | 262 (29%) | 109 (23%) | 49 (27%) | 84 (43%) | 16 (44%) | 4 (44%) |
| Yes | 634 (71%) | 368 (77%) | 130 (73%) | 111 (57%) | 20 (56%) | 5 (56%) |
| Time from baseline to last clinical follow-up visit, years |   |   |   |   |   |   |
| Median (Q1, Q3) | 2.7 (1.5, 5.1) | 3.8 (2.4, 6.3) | 2.6 (1.4, 4.0) | 2.0 (1.1, 2.7) | 1.8 (1.2, 2.1) | 2.1 (2.0, 2.3) |
| Range | 0.8–9.3 | 1.0–9.3 | 0.8–8.2 | 0.8–6.4 | 0.8–6.3 | 1.1–3.1 |
| PET follow-up data available |   |   |   |   |   |   |
| No | 483 (54%) | 262 (55%) | 89 (50%) | 105 (54%) | 21 (58%) | 6 (67%) |
| Yes | 413 (46%) | 215 (45%) | 90 (50%) | 90 (46%) | 15 (42%) | 3 (33%) |
| Time from baseline to last PET follow-up scan, years |   |   |   |   |   |   |
| Median (Q1, Q3) | 2.7 (1.6, 4.9) | 3.9 (2.5, 6.0) | 2.2 (1.2, 3.8) | 2.0 (1.1, 3.0) | 1.9 (1.1, 2.1) | 2.3 (1.7, 2.7) |
| Range | 0.8–8.9 | 1.0–8.9 | 0.9–8.0 | 0.8–6.5 | 0.9–3.1 | 1.1–3.1 |


Median (interquartile range) mesial temporal tau PET CenTauRz was 1.4 (0.1, 4.4) in the Mayo cohort and 2.3 (0.5, 5.1) in the ADNI cohort. Median (interquartile range) temporoparietal tau CenTauRz was 1.6 (0.4, 3.7) and 1.7 (0.5, 4.0), respectively. Mixture modelling of the tau PET regions within the Mayo cohort confirmed that it was reasonable to divide the mesial temporal region into two subgroups (Bayesian information criterion = 4418 for two groups versus 4878, 4419 and 4439 for one, three and four subgroups), whereas three subgroups were supported for the temporoparietal region (Bayesian information criterion = 4637 for three groups versus 6019, 4668 and 4655 for one, two and four subgroups). For the mesial temporal region, a cut point of 2.9 CenTauRz was identified, separating participants with normal levels of tau PET (mean CenTauRz = 0.6 ± 0.1.2) from those with abnormal levels of tau PET (mean CenTauRz = 6.1 ± 3.7). Two cut points, at 3.4 and 8.3 CenTauRz, were identified in the temporoparietal ROI to separate participants with normal/low (mean CenTauRz = 0.9 ± 1.1), moderate (mean CenTauRz = 3.9 ± 2.5) and high (mean CenTauRz = 16.5 ± 8.2) levels of tau PET radiotracer uptake. Figure 1 displays density plots, with cut points for the mesial temporal and temporoparietal ROIs among the Mayo cohort (Fig. 1A and B, respectively), in addition to scatter plots of the resulting AD biological stage assignments for both the Mayo and ADNI cohorts (Fig. 1C and D, respectively).

> **Figure 1: Tau PET cut points and biological staging definitions. (A and B) The distribution of mesial temporal tau PET CenTauRz and temporoparietal tau PET CenTauRz within the Mayo cohort, with density curves estimated from univariate Gaussian mixture models assuming two and three groups, respectively. The mean ± standard deviation for each group is shown in the top of each plot, and the cut point for separating the groups is shown with a dashed line. (C and D) Scatter plots of the temporoparietal versus mesial temporal tau PET CenTauRz within the Mayo and ADNI cohorts, respectively. The colours and shapes for the points represent different clinical diagnoses. The lines and shading of the plot backgrounds illustrate how the cut points were used to define the biological stages A–D. AD = Alzheimers disease; ADNI = Alzheimer's Disease Neuroimaging Initiative; CenTauRz = CenTauR z-scores; CU = cognitively unimpaired; DLB = dementia with Lewy bodies; FTD = frontotemporal dementia; MCI = mild cognitive impairment.**

Figure 2A and B and Supplementary Table 2 summarize the percentage of participants within each biological stage by clinical diagnosis for the Mayo and ADNI cohorts. Among CU, most participants were in biological stage A (92% for Mayo and 86% for ADNI). Among Mayo participants with AD dementia, 21% were in stage C and 62% stage D, whereas among ADNI participants with AD dementia, 34% were in stage C and 30% in stage D.

> **Figure 2: Bar charts of the frequency of biological stage and clinical diagnosis within the Mayo and ADNI cohorts. (A and B) Percentage of participants in each biological stage within each clinical diagnosis group among the two cohorts. (C and D) Percentage of participants with each clinical diagnosis within each biological stage among the two cohorts. AD = Alzheimer's disease; ADNI = Alzheimer's Disease Neuroimaging Initiative; CU = cognitively unimpaired; DLB = dementia with Lewy bodies; FTD = frontotemporal dementia; MCI = mild cognitive impairment.**

Participant characteristics by AD biological stage are displayed in Table 2 for the Mayo cohort and in Supplementary Table 3 for the ADNI cohort. Figure 2C and D summarizes the percentage of participants with each clinical diagnosis by biological stage for Mayo and ADNI. In participants classified as biological stage A, the most common clinical diagnosis was cognitively unimpaired (CU), representing 75% of the Mayo cohort and 59% of the ADNI cohort, followed by MCI at 15% and 33%, respectively. The proportion of participants with MCI or dementia increased progressively by assigned biological stage, with the Mayo biological stage D group being composed of 85% AD dementia and 14% MCI, compared with 58% AD dementia and 39% MCI in the ADNI stage D group.

**Table 2: Characteristics of Mayo participants by Alzheimer’s disease biological stage**

| Characteristic | A(n = 584) | B(n = 79) | C(n = 91) | D(n = 142) |
|---|---|---|---|---|
| Study, n (%) |   |   |   |   |
| MCSA | 468 (80%) | 34 (43%) | 34 (37%) | 2 (1%) |
| ADRC | 116 (20%) | 45 (57%) | 57 (63%) | 140 (99%) |
| Age, years |   |   |   |   |
| Median (Q1, Q3) | 77 (70, 84) | 77 (73, 81) | 76 (72, 83) | 64 (58, 71) |
| Range | 52–101 | 59–90 | 57–92 | 51–87 |
| Sex, n (%) |   |   |   |   |
| Female | 264 (45%) | 37 (47%) | 45 (49%) | 95 (67%) |
| Male | 320 (55%) | 42 (53%) | 46 (51%) | 47 (33%) |
| Race, n (%) |   |   |   |   |
| White | 575 (98%) | 77 (97%) | 88 (97%) | 139 (98%) |
| Black | 4 (1%) | 1 (1%) | 1 (1%) | 1 (1%) |
| Asian | 0 (0%) | 1 (1%) | 2 (2%) | 0 (0%) |
| Other/more than one | 3 (1%) | 0 (0%) | 0 (0%) | 2 (1%) |
| Unknown/not disclosed | 2 (0%) | 0 (0%) | 0 (0%) | 0 (0%) |
| Ethnicity, n (%) |   |   |   |   |
| Not Hispanic | 580 (99%) | 79 (100%) | 90 (99%) | 140 (99%) |
| Hispanic | 1 (0%) | 0 (0%) | 0 (0%) | 0 (0%) |
| Unknown/not disclosed | 3 (1%) | 0 (0%) | 1 (1%) | 2 (1%) |
| Education, years, n (%) |   |   |   |   |
| 12 or fewer | 143 (24%) | 14 (18%) | 18 (20%) | 27 (19%) |
| 13–15 | 140 (24%) | 15 (19%) | 13 (14%) | 24 (17%) |
| 16 or more | 301 (52%) | 50 (63%) | 60 (66%) | 91 (64%) |
| APOE genotype, n (%) |   |   |   |   |
| ε4 non-carrier | 311 (59%) | 18 (26%) | 23 (31%) | 36 (29%) |
| ε4 carrier | 214 (41%) | 52 (74%) | 52 (69%) | 89 (71%) |
| Clinical diagnosis, n (%) |   |   |   |   |
| CU | 439 (75%) | 26 (33%) | 12 (13%) | 0 (0%) |
| MCI | 89 (15%) | 36 (46%) | 34 (37%) | 20 (14%) |
| AD dementia | 19 (3%) | 14 (18%) | 41 (45%) | 121 (85%) |
| DLB | 31 (5%) | 0 (0%) | 4 (4%) | 1 (1%) |
| FTD | 6 (1%) | 3 (4%) | 0 (0%) | 0 (0%) |
| MMSE, median (Q1, Q3) | 28 (27, 29) | 27 (25, 28) | 25 (22, 27) | 21 (14, 24) |
| CDR global score, n (%) |   |   |   |   |
| 0 | 440 (75%) | 24 (30%) | 12 (13%) | 0 (0%) |
| 0.5 | 111 (19%) | 48 (61%) | 56 (62%) | 74 (52%) |
| 1 | 25 (4%) | 6 (8%) | 18 (20%) | 42 (30%) |
| 2 | 8 (1%) | 1 (1%) | 4 (4%) | 25 (18%) |
| 3 | 0 (0%) | 0 (0%) | 1 (1%) | 0 (0%) |
| CDR Sum of Boxes, median (Q1, Q3) | 0.0 (0.0, 0.5) | 1.0 (0.0, 2.0) | 1.5 (0.8, 4.2) | 4.0 (2.0, 7.0) |
| Amyloid PET, Centiloid, median (Q1, Q3) | 56 (34, 87) | 101 (78, 130) | 112 (86, 140) | 113 (91, 133) |
| Mesial temporal tau PET, CenTauRz, median (Q1, Q3) | 0.5 (−0.3, 1.4) | 4.1 (3.4, 5.2) | 5.8 (4.3, 7.2) | 8.6 (6.3, 11.0) |
| Temporoparietal tau PET, CenTauRz, median (Q1, Q3) | 0.8 (0.1, 1.6) | 2.3 (1.5, 2.7) | 5.2 (4.3, 6.4) | 17.5 (12.3, 22.2) |
| Clinical follow-up available |   |   |   |   |
| No | 151 (26%) | 16 (20%) | 32 (35%) | 63 (44%) |
| Yes | 433 (74%) | 63 (80%) | 59 (65%) | 79 (56%) |
| Time from baseline to last clinical follow-up visit, years |   |   |   |   |
| Median (Q1, Q3) | 3.0 (1.7, 5.4) | 2.8 (2.0, 4.5) | 2.0 (1.2, 3.4) | 1.9 (1.0, 2.7) |
| Range | 0.8–9.3 | 1.0–7.8 | 0.8–8.0 | 0.8–6.1 |
| PET follow-up data available |   |   |   |   |
| No | 323 (55%) | 33 (42%) | 49 (54%) | 78 (55%) |
| Yes | 261 (45%) | 46 (58%) | 42 (46%) | 64 (45%) |
| Time from baseline to last PET follow-up scan, years |   |   |   |   |
| Median (Q1, Q3) | 3.0 (2.2, 5.3) | 2.6 (1.4, 4.1) | 2.3 (1.1, 3.6) | 2.0 (1.0, 3.2) |
| Range | 0.9–8.9 | 0.9–7.6 | 0.9–8.0 | 0.8–6.5 |


Both the Mayo and ADNI cohorts demonstrated lower MMSE scores with increasing biological stage. Figure 3A and B shows the estimated median MMSE score by biological stage from cross-sectional analyses. Estimates are for a 75-year-old female with ≥16 years of education. Estimates might be shifted higher or lower for different covariate patterns, but the difference in median MMSE between biological stages is not changed (Supplementary Table 4). Within the Mayo cohort, median MMSE scores in stage B–D participants were lower than those of stage A participants: −1.7 (95% CI: −2.3 to −1.1), −3.1 (95% CI: −3.6 to −2.5) and −8.0 (95% CI: −9.7 to −6.3) points, respectively, after adjusting for age, sex and education. Within the ADNI cohort, median MMSE scores in stage B–D participants were also lower than those of stage A participants: −2.1 (95% CI: −2.8 to −1.5), −2.6 (95% CI: −3.6 to −1.7) and −5.1 (95% CI: −6.9 to −3.3) points, respectively. The CIs for each biological stage are generally narrower in the Mayo cohort compared with the ADNI cohort. Similar trends were seen when evaluating the CDR-SB by biological stage (Fig. 3C and D and Supplementary Table 4).

> **Figure 3: Estimated median Mini-Mental State Examination (MMSE) score and Clinical Dementia Rating Sum of Boxes (CDR-SB) (cross-sectional) and estimated mean (95% confidence interval) annual rate of MMSE decline and CDR-SB increase (longitudinal) for each biological stage within the Mayo and ADNI cohorts. (A–D) The cross-sectional median MMSE and CDR-SB estimates are from quantile regression models with baseline MMSE score (or CDR-SB) as the outcome and with age, sex, education and biological stage as the predictors (A and B for MMSE; and C and D for CDR-SB). Note that the cross-sectional CDR-SB estimates within the Mayo cohort are not adjusted for age, sex and education owing to instability of the estimates in the full model. (E–H) Longitudinal mean annual rate of MMSE decline or CDR-SB increase estimates are from linear mixed-effects models with baseline and all available follow-up MMSE scores (or CDR-SB) as the outcome and with age at baseline, sex, education and biological stage at baseline as the predictors (E and F for MMSE; and G and H for CDR-SB). The models also included time from baseline and all interactions between the predictors and time. The cross-sectional models were fitted among all participants in the Mayo and ADNI cohorts, separately. The longitudinal models were fitted among the subset of participants in the Mayo and ADNI cohorts with at least one clinical follow-up visit, separately. Estimates are shown for a 75-year-old female with ≥16 years of education. ADNI = Alzheimer's Disease Neuroimaging Initiative; CI = confidence interval.**

Supplementary Figure 1 shows the individual MMSE and CDR-SB trajectories by age within the baseline biological stages. Figure 3E and F shows the estimated mean annual rate of MMSE decline by biological stage from longitudinal linear mixed-effects models, adjusting for age, sex and education. Similar to the cross-sectional results, the annual rate of decline in MMSE was larger with increasing biological stage. In the Mayo cohort, compared with stage A, mean annual rate of MMSE decline was −0.7 (95% CI: −0.9 to −0.4), −1.4 (95% CI: −1.7 to −1.1) and −3.5 (95% CI: −3.8 to −3.1) points per year faster in stages B, C and D, respectively (Supplementary Table 5). In the ADNI cohort, compared with stage A, mean annual rate of MMSE decline was −0.6 (95% CI: −1.0 to −0.2), −1.5 (95% CI: −1.9 to −1.1) and −3.9 (95% CI: −4.6 to −3.2) points per year faster in stages B, C and D, respectively. The mean rate of annual increase in CDR-SB was also larger with increasing biological stage (Fig. 3G and H and Supplementary Table 6).

Figure 4 and Supplementary Table 7 summarize the median CSF p-tau181, CSF p-tau181/Aβ42, plasma p-tau217 and plasma p-tau217/Aβ42 within the subset of ADNI participants who had available CSF and plasma results. The estimated median p-tau and p-tau/Aβ measures generally increased with more advanced biological stage. However, for the CSF measures, median values were similar between stages B and C, whereas the plasma measures showed more separation across all four stages.

> **Figure 4: (A–D) Estimated median CSF p-tau181, CSF p-tau181/Aβ42, plasma p-tau217 and plasma p-tau217/Aβ42 (cross-sectional) for each biological stage among the subset of ADNI participants with CSF or plasma data at the baseline visit. The estimates are from quantile regression models, with baseline biomarker as the outcome and with age, sex and biological stage as the predictors. Estimates are shown for a 75-year-old female. Aβ42 = amyloid-β42; ADNI = Alzheimer’s Disease Neuroimaging Initiative; CI = confidence interval.**

Table 3 summarizes transitions between the biological stages within individuals over time among the subset of individuals with serial amyloid and tau PET scans. Most individuals either remained in their current biological stage at later follow-up visits or progressed to more advanced stages in both the Mayo and ADNI cohorts. However, some individuals were classified as having less advanced stages at follow-up; these individuals generally fell near thresholds between stages on their initial PET imaging. Supplementary Fig. 2 shows individual amyloid and tau PET trajectories by age and baseline biological stage, and Supplementary Fig. 3 summarizes the annual rate of change in amyloid and tau PET by biological stage. Rates of amyloid PET accumulation were similar across the biological stages in both Mayo and ADNI (Supplementary Table 8). Rates of tau PET accumulation were higher with higher biological stages in Mayo, but the pattern was less clear in ADNI (Supplementary Tables 9 and 10).

**Table 3: Number of transitions between biological stages during follow-up among Mayo and ADNI participants**

| To |   |   |   |   |   |
|---|---|---|---|---|---|
| Mayo |   |   |   |   |   |
| NA | 1 | 5 | 0 | 0 | 0 |
| Biological stage A | 15 | 321 | 30 | 13 | 0 |
| Biological stage B | 0 | 7 | 52 | 23 | 0 |
| Biological stage C | 0 | 3 | 4 | 55 | 16 |
| Biological stage D | 0 | 0 | 0 | 0 | 122 |
| ADNI |   |   |   |   |   |
| NA | 0 | 0 | 0 | 0 | 0 |
| Biological stage A | 3 | 59 | 12 | 1 | 0 |
| Biological stage B | 0 | 0 | 13 | 8 | 0 |
| Biological stage C | 0 | 2 | 0 | 11 | 7 |
| Biological stage D | 0 | 0 | 0 | 0 | 9 |


As a sensitivity analysis, cut points were also determined among the ADNI cohort (Supplementary Figs 4 and 5 and Supplementary Table 11). Although the cut points varied slightly between the cohorts, the CIs for the ADNI cut points overlapped with those from the Mayo cohort, indicating consistency across the cohorts. When the ADNI cut points were applied to both cohorts, the number of people in stages A and D was similar to when using the Mayo defined cut points. However, there were fewer individuals in stage B and more individuals in stage C when using the ADNI defined cut points. When using the ADNI defined cut points, more individuals in stage C had negative MTL tau PET (74 in the Mayo cohort and 38 in the ADNI cohort) compared with when using the Mayo defined cut points (12 in the Mayo cohort and 8 in the ADNI cohort).

## Discussion

The objective of this study was to demonstrate the feasibility and face validity of the amyloid and tau PET-based AD biological staging scheme proposed in the recently published revised criteria for the diagnosis and staging of Alzheimer’s disease by defining data-driven tau PET cut points to separate the four biological stages. We used mixture modelling to subdivide the distribution of tau PET activity in the CenTauR-defined mesial temporal and temporoparietal ROIs within a large and well-characterized participant cohort, then demonstrated how the resultant four groups capture the expected increase in clinical severity across the AD spectrum with increasing biological stage, where clinical severity is defined both by syndromic diagnosis and by performance on the MMSE and CDR-SB.

AD has long been recognized as a continuum. The newly defined AD biological stages can be conceived of as forming a matrix with the clinical progression of disease. A patient with prototypical AD (i.e. with little to no co-pathology) might progress though the biological stages in a stereotypical fashion, beginning with no clinical symptoms and a low biological stage, passing through intermediate clinical and biological states, and eventually developing advanced dementia and a high biological stage. It is important to note that the revised criteria describe biological staging (A–D), numerical clinical staging (1–6), and staging that integrates biological and numerical clinical staging. Here, we do not address numerical clinical staging or integrated staging but focus on the characteristics of individuals in the four defined biological stages using traditional syndromic clinical diagnoses, MMSE scores and CDR-SB scores.

Although the expected relationship between clinical symptoms and biological AD stage might be encountered frequently, situations of discordance between biological stage and symptom burden can be informative. For example, a patient with advanced dementia but a low AD biological stage is likely to have a significant portion of their cognitive symptoms caused by co-pathologies, such as cerebrovascular disease or other neurodegenerative processes. Furthermore, in an individual with a non-typical dementia phenotype but high AD biological stage, AD is highly likely to be contributing to the impairment in that person. At the other end of the clinical–biological discordance spectrum, a patient with normal cognition or mild impairment but a high AD biological stage might have a high degree of cognitive reserve and be at risk of rapid clinical deterioration once that reserve is exhausted.

To demonstrate the generalizability of this biological staging approach, we evaluated the Mayo cut points in an ADNI cohort, and we also repeated the cut point identification process in the ADNI cohort. Although the number of people in stages A and D were similar using either the Mayo or ADNI defined cut points, the small differences in the MTL and lower neocortical cut points resulted in some differences between stages B and C. The ADNI defined cut points categorized more individuals as stage C, and many had negative MTL tau PET. The cut points defined in the ADNI cohort had wider CIs, indicating less precision. Given the nature of cut points for continuous variables and variability in measurements of PET data, it was not surprising that a small number of individuals in our study did not follow the hierarchical categorization, but instead had negative mesial temporal tau PET with moderate to high temporoparietal tau PET. However, these individuals had tau PET values close to the cut points and were not considered a distinct group.

In the present study, the quantitative distinction between biological stages C and D might be of greatest importance, because the revised AD criteria describe them only as ‘Tau PET moderate neocortical uptake’ and ‘Tau PET high neocortical uptake’, without defined metrics to make this determination. The temporoparietal CenTauRz cut point of 8.3 appears to perform well in this role, producing groups with differing distributions of clinical diagnoses and cognitive testing scores, in addition to differing rates of clinical and functional change, in both the primary and validation cohorts. Further replication of these results in independent cohorts will be important in establishing accepted quantitative definitions of the AD biological stages. Of note, the approach used in this analysis relies on the intensity of uptake within the temporoparietal ROI rather than evaluation of the geographical extent of abnormal neocortical tau PET activity. The major strengths of this approach are consistency with the revised AD diagnostic and staging criteria and that it captures the severity of tau burden in a way that standard pathological analysis does not, in the sense that Braak staging reflects only the distribution of tau neurofibrillary tangles. Although the strength of this quantitative method is demonstrated by its ability to separate individuals by clinical diagnosis and disease severity, future research evaluating whether the addition of information on the extent of tau abnormality within the neocortex improves the utility of biological staging will be useful.

Biological stages A and B are separated based on the degree of tau PET activity in the medial temporal ROI, with neither stage demonstrating significant abnormal tau PET activity in the temporoparietal ROI. This stands in contradistinction to the FDA-approved reading method for flortaucipir, in which abnormality isolated to the mesial temporal lobes is not considered meaningful and is consistent with a negative result. Furthermore, the SUVR level of 1.65 times the cerebellar ROI used to define the colour transition threshold for visual positivity in the FDA-approved reading method was not selected with separation of the four recently described AD biological stages in mind. In principle, once accepted tau PET cut points between biological stages emerge from the literature it would be possible to develop a modified semi-quantitative tau PET visual interpretation paradigm to allow visual ascertainment of all four AD biological stages.

The limitations of this study are those intrinsic to the use of clinic-based participants in the Mayo ADRC. This group is enriched with early onset AD, leading to age associations that would not be expected in a true population-based sample, such as the median age of participants with AD biological stage D being younger than that of any other biological stage. This issue has been seen in many other clinic cohorts and is not unique to the Mayo ADRC. Furthermore, it is recognized that Black and Hispanic adults, in addition to people with low education and those living in poverty regardless of race/ethnicity, are disproportionally affected by dementia, and these individuals are underrepresented in both the primary Mayo cohort and the ADNI validation cohort.37 Replication of our results in diverse cohorts will be necessary to understand the implications of biological staging on the AD population at large. Gaussian mixture modelling might be sensitive to the composition of the sample, and therefore the parameter estimates will reflect the participants in this study. The intensive imaging protocol used in this study is not easily replicated in clinical practice, and less time-consuming and costly evaluations might be more appropriate, such as the use of fluid biomarkers of amyloid pathology rather than amyloid PET. This study only includes tau PET scans acquired with flortaucipir, and further work will be needed to determine whether these findings are generalizable across tau PET tracers. We reported our values in CenTauRz units because this is a relatively more universal scale than SUVR, but it does not allow quantitative comparisons at all levels of pathology; at the time of writing, no such standardized scale had been released, and we used the best currently available option. Lastly, although recent appropriate use criteria do suggest a number of appropriate uses of tau PET in dementia diagnosis, determination of prognosis, and patient selection of amyloid-targeted therapy, controversy remains regarding how best to incorporate tau PET into clinical practice.38

## Supplementary Material

awaf346_Supplementary_Data

## Funding

- National Institutes of Health10.13039/100000002 R37 AG011378RO1 AG041851R01 AG056366R01 NS097495U01 AG06786R01 AG034676
- Alzheimer’s Disease Neuroimaging Initiative10.13039/100014041
- National Institute on Aging10.13039/100000049
- National Institute of Biomedical Imaging and Bioengineering10.13039/100000070
- Johnson & Johnson Pharmaceutical Research & Development10.13039/100014489
- Northern California Institute for Research and Education10.13039/100009804
- University of Southern California10.13039/100006034

## Data Availability

Data availabilityData from the Mayo cohort are available to qualified academic and industry researchers by request to the MCSA and ADRC Executive Committee (https://www.mayo.edu/research/centers-programs/alzheimers-disease-research-center/research-activities/mayo-clinic-study-aging/for-researchers/data-sharing-resources). Data used in preparation of this article were obtained from the Alzheimer’s Disease Neuroimaging Initiative (ADNI) database (adni.loni.usc.edu). As such, the investigators within the ADNI contributed to the design and implementation of ADNI and/or provided data but did not participate in analysis or writing of this report. A complete listing of ADNI investigators can be found at: http://adni.loni.usc.edu/wp-content/uploads/how_to_apply/ADNI_Acknowledgement_List.pdf

## References

1. 1 Jack CR Jr, Andrews JS, Beach TG, et al Revised criteria for diagnosis and staging of Alzheimer’s disease: Alzheimer’s Association workgroup. Alzheimers Dement. 2024;20:5143–5169.38934362 10.1002/alz.13859PMC11350039 [PMID:38934362]
2. 2 Jack CR Jr, Bennett DA, Blennow K, et al NIA-AA research framework: Toward a biological definition of Alzheimer’s disease. Alzheimers Dement. 2018;14:535–562.29653606 10.1016/j.jalz.2018.02.018PMC5958625 [PMID:29653606]
3. 3 Jack CR Jr, Albert MS, Knopman DS, et al Introduction to the recommendations from the National Institute on Aging–Alzheimer’s Association workgroups on diagnostic guidelines for Alzheimer’s disease. Alzheimers Dement. 2011;7:257–262.21514247 10.1016/j.jalz.2011.03.004PMC3096735 [PMID:21514247]
4. 4 Niimi Y, Janelidze S, Sato K, et al Combining plasma Aβ and p-tau217 improves detection of brain amyloid in non-demented elderly. Alzheimers Res Ther. 2024;16:115.38778353 10.1186/s13195-024-01469-wPMC11112892 [PMID:38778353]
5. 5 Jack CR Jr, Wiste HJ, Algeciras-Schimnich A, et al Comparison of plasma biomarkers and amyloid PET for predicting memory decline in cognitively unimpaired individuals. Alzheimers Dement. 2024;20:2143–2154.38265198 10.1002/alz.13651PMC10984437 [PMID:38265198]
6. 6 Winston CN, Langford O, Levin N, et al Evaluation of blood-based plasma biomarkers as potential markers of amyloid burden in preclinical Alzheimer’s disease. J Alzheimers Dis. 2023;92:95–107.36710683 10.3233/JAD-221118PMC11191492 [PMID:36710683]
7. 7 Hu S, Yu H, Gao J. The pTau217/Aβ1–42 plasma ratio: The first FDA-cleared blood biomarker test for diagnosis of Alzheimer’s disease. Drug Discov Ther. 2025;19:208–209.40582836 10.5582/ddt.2025.01055 [PMID:40582836]
8. 8 Cummings J, Apostolova L, Rabinovici G, et al Lecanemab: Appropriate use recommendations. J Prev Alzheimers Dis. 2023;10:362–377.37357276 10.14283/jpad.2023.30PMC10313141 [PMID:37357276]
9. 9 Jack CR, Wiste HJ, Algeciras-Schimnich A, et al Predicting amyloid PET and tau PET stages with plasma biomarkers. Brain. 2023;146:2029–2044.36789483 10.1093/brain/awad042PMC10151195 [PMID:36789483]
10. 10 Ossenkoppele R, Pichet Binette A, Groot C, et al Amyloid and tau PET-positive cognitively unimpaired individuals are at high risk for future cognitive decline. Nat Med. 2022;28:2381–2387.36357681 10.1038/s41591-022-02049-xPMC9671808 [PMID:36357681]
11. 11 Therriault J, Schindler SE, Salvadó G, et al Biomarker-based staging of Alzheimer disease: Rationale and clinical applications. Nat Rev Neurol. 2024;20:232–244.38429551 10.1038/s41582-024-00942-2 [PMID:38429551]
12. 12 Jack CR Jr, Knopman DS, Wiste HJ, et al 2024 Alzheimer’s Association criteria for Alzheimer’s disease diagnosis are usually anchored to both plaques and tangles, not Aβ alone. Alzheimers Dement. 2025;21:e70184.40276985 10.1002/alz.70184PMC12022770 [PMID:40276985]
13. 13 Roberts RO, Geda YE, Knopman DS, et al The Mayo Clinic Study of Aging: Design and sampling, participation, baseline measures and sample characteristics. Neuroepidemiology. 2008;30:58–69.18259084 10.1159/000115751PMC2821441 [PMID:18259084]
14. 14 Jack CR Jr, Arani A, Borowski BJ, et al Overview of ADNI MRI. Alzheimers Dement. 2024;20:7350–7360.39258539 10.1002/alz.14166PMC11485416 [PMID:39258539]
15. 15 Petersen RC . Mild cognitive impairment as a diagnostic entity. J Intern Med. 2004;256:183–194.15324362 10.1111/j.1365-2796.2004.01388.x [PMID:15324362]
16. 16 Diagnostic and statistical manual of mental disorders, DSM-IV. 4th edn. American Psychiatric Association; 1994.
17. 17 Townley RA, Syrjanen JA, Botha H, et al Comparison of the short test of mental status and the Montreal cognitive assessment across the cognitive spectrum. Mayo Clin Proc. 2019;94:1516–1523.31280871 10.1016/j.mayocp.2019.01.043PMC6937135 [PMID:31280871]
18. 18 Tang-Wai DF, Knopman DS, Geda YE, et al Comparison of the short test of mental status and the mini-mental state examination in mild cognitive impairment. Arch Neurol. 2003;60:1777–1781.14676056 10.1001/archneur.60.12.1777 [PMID:14676056]
19. 19 Klunk WE, Engler H, Nordberg A, et al Imaging brain amyloid in Alzheimer’s disease with Pittsburgh compound-B. Ann Neurol. 2004;55:306–319.14991808 10.1002/ana.20009 [PMID:14991808]
20. 20 Xia CF, Arteaga J, Chen G, et al [18F]T807, a novel tau positron emission tomography imaging agent for Alzheimer’s disease. Alzheimers Dement. 2013;9:666–676.23411393 10.1016/j.jalz.2012.11.008 [PMID:23411393]
21. 21 Schwarz CG, Gunter JL, Lowe VJ, et al A comparison of partial volume correction techniques for measuring change in serial amyloid PET SUVR. J Alzheimers Dis. 2019;67:181–195.30475770 10.3233/JAD-180749PMC6398556 [PMID:30475770]
22. 22 Jack CR Jr, Wiste HJ, Weigand SD, et al Defining imaging biomarker cut points for brain aging and Alzheimer’s disease. Alzheimers Dement. 2017;13:205–216.27697430 10.1016/j.jalz.2016.08.005PMC5344738 [PMID:27697430]
23. 23 Klunk WE, Koeppe RA, Price JC, et al The Centiloid Project: Standardizing quantitative amyloid plaque estimation by PET. Alzheimers Dement. 2015;11:1–15.e1–4.25443857 10.1016/j.jalz.2014.07.003PMC4300247 [PMID:25443857]
24. 24 Schwarz CG, Tosakulwong N, Senjem ML, et al Considerations for performing level-2 centiloid transformations for amyloid PET SUVR values. Sci Rep. 2018;8:7421.29743601 10.1038/s41598-018-25459-9PMC5943521 [PMID:29743601]
25. 25 La Joie R, Ayakta N, Seeley WW, et al Multisite study of the relationships between antemortem [11C]PIB-PET centiloid values and postmortem measures of Alzheimer’s disease neuropathology. Alzheimers Dement. 2019;15:205–216.30347188 10.1016/j.jalz.2018.09.001PMC6368897 [PMID:30347188]
26. 26 Iaccarino L, La Joie R, Koeppe R, et al rPOP: Robust PET-only processing of community acquired heterogeneous amyloid-PET data. Neuroimage. 2022;246:118775.34890793 10.1016/j.neuroimage.2021.118775 [PMID:34890793]
27. 27 Leuzy A, Raket LL, Villemagne V, et al Harmonizing tau PET in Alzheimer’s disease: The CenTauR scale and the joint propagation model. Alzheimers Dement. 2024;20:5833–5848.39041435 10.1002/alz.13908PMC11497758 [PMID:39041435]
28. 28 Villemagne V, Leuzy A, Bohorquez SMS, et al CenTauR: Towards a universal scale and masks for standardizing tau imaging studies. Alzheimers Dement. 2023;15:e12454.10.1002/dad2.12454PMC1032647637424964 [PMID:37424964]
29. 29 Leuzy A, Raket LL, Villemagne VL, et al Harmonizing tau positron emission tomography in Alzheimer’s disease: The CenTauR scale and the joint propagation model. Alzheimers Dement. 2024;20:5833–5848.39041435 10.1002/alz.13908PMC11497758 [PMID:39041435]
30. 30 Povala G, Bauer-Negrini G, Bellaver B, et al Creating universal tau PET scale (uniτ) parametric images—The HEAD study. Alzheimers Dement. 2024;20(S9):e094123.
31. 31 Weiner MW, Veitch DP, Aisen PS, et al The Alzheimer’s disease neuroimaging initiative 3: Continued innovation for clinical trial improvement. Alzheimers Dement. 2017;13:561–571.27931796 10.1016/j.jalz.2016.10.006PMC5536850 [PMID:27931796]
32. 32 Jack CR Jr, Barnes J, Bernstein MA, et al Magnetic resonance imaging in Alzheimer’s Disease Neuroimaging Initiative 2. Alzheimers Dement. 2015;11:740–756.26194310 10.1016/j.jalz.2015.05.002PMC4523217 [PMID:26194310]
33. 33 Jagust WJ, Bandy D, Chen K, et al The Alzheimer’s disease neuroimaging initiative positron emission tomography core. Alzheimers Dement. 2010;6:221–229.20451870 10.1016/j.jalz.2010.03.003PMC2920531 [PMID:20451870]
34. 34 Jack CR Jr, Bernstein MA, Fox NC, et al The Alzheimer’s disease neuroimaging initiative (ADNI): MRI methods. J Magn Reson Imaging. 2008;27:685–691.18302232 10.1002/jmri.21049PMC2544629 [PMID:18302232]
35. 35 Shaw LM, Korecka M, Lee EB, et al ADNI biomarker core: A review of progress since 2004 and future challenges. Alzheimers Dement. 2025;21:e14264.39614747 10.1002/alz.14264PMC11773510 [PMID:39614747]
36. 36 Schindler SE, Petersen KK, Saef B, et al Head-to-head comparison of leading blood tests for Alzheimer’s disease pathology. Alzheimers Dement. 2024;20:8074–8096.39394841 10.1002/alz.14315PMC11567821 [PMID:39394841]
37. 37 Okonkwo OC, Rivera Mindt M, Ashford MT, et al A protocol for the inclusion of minoritized persons in Alzheimer disease research from the ADNI3 diversity taskforce. JAMA Netw Open. 2024;7:e2427073.39120898 10.1001/jamanetworkopen.2024.27073PMC11316236 [PMID:39120898]
38. 38 Rabinovici GD, Knopman DS, Arbizu J, et al Updated appropriate use criteria for amyloid and tau PET: A report from the Alzheimer’s Association and Society for Nuclear Medicine and Molecular Imaging Workgroup. Alzheimers Dement. 2025;21:e14338.39776249 10.1002/alz.14338PMC11772739 [PMID:39776249]
