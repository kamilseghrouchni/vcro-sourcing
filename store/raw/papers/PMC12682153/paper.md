---
pmid: "41362357"
pmc: "PMC12682153"
doi: "10.1016/j.bas.2025.105877"
title: "Shared metabolomic signatures for prognostic precision across brain injuries"
journal: "Brain & Spine"
year: 2025
authors:
  - name: "Hellström Santtu"
    affiliations:
      - ""
  - name: "Sajanti Antti"
    affiliations:
      - ""
  - name: "Jhaveri Aditya"
    affiliations:
      - ""
  - name: "Cao Ying"
    affiliations:
      - ""
  - name: "Koskimäki Fredrika"
    affiliations:
      - ""
  - name: "Falter Johannes"
    affiliations:
      - ""
  - name: "Frantzén Janek"
    affiliations:
      - ""
  - name: "Lyne Seán B."
    affiliations:
      - ""
  - name: "Rantamäki Tomi"
    affiliations:
      - ""
  - name: "Takala Riikka"
    affiliations:
      - ""
  - name: "Posti Jussi P."
    affiliations:
      - ""
  - name: "Roine Susanna"
    affiliations:
      - ""
  - name: "Kolehmainen Sulo"
    affiliations:
      - ""
  - name: "Gajera Bharat"
    affiliations:
      - ""
  - name: "Nazir Kenneth"
    affiliations:
      - ""
  - name: "Jänkälä Miro"
    affiliations:
      - ""
  - name: "Piironen Susanna"
    affiliations:
      - ""
  - name: "Abdirisak Ahmed"
    affiliations:
      - ""
  - name: "Srinath Abhinav"
    affiliations:
      - ""
  - name: "Girard Romuald"
    affiliations:
      - ""
  - name: "Nieminen Anni I."
    affiliations:
      - ""
  - name: "Rahi Melissa"
    affiliations:
      - ""
  - name: "Rinne Jaakko"
    affiliations:
      - ""
  - name: "Castrén Eero"
    affiliations:
      - ""
  - name: "Koskimäki Janne"
    affiliations:
      - ""
---

# Shared metabolomic signatures for prognostic precision across brain injuries

## Abstract

### Introduction

Metabolomic alterations have been linked to a range of neurological conditions. Investigating temporal changes in serum metabolomic profiles, regardless of the type of brain injury may reveal prognostic indicators.

### Research question

We hypothesize that specific metabolomic signatures, conserved across different acute brain injuries, can serve as robust predictors of patient outcomes.

### Material and methods

In this longitudinal prospective observational study, serum samples were collected early (2 ± 1 day) and late (6 ± 2 days) post-injury from a total of 73 patients with ischemic stroke (n = 30), aneurysmal subarachnoid hemorrhage (n = 30), and traumatic brain injury (n = 13). Outcomes were categorized as favorable (modified Rankin Scores (mRS) 0–3) and unfavorable (mRS 4–6) three months post-injury. Metabolomic profiling (Orbitrap mass spectrometry) of 462 metabolites, analyzed using statistical and machine learning methods, identified significant outcome differences (p < 0.05, FDR-corrected).

### Results

Early-stage samples indicated good prognostic power with a combination of uridine, tryptophan, and lactic acid (AUC 88.8 %, OR 5.29, p < 0.0001). Late-stage samples showed high discriminatory accuracy with a combination of prostaglandin J2, gamma-linolenic acid, N-acetyl-L-alanine, uridine, N-alpha-acetyl-L-asparagine, 3-hydroxy-3-methylglutarate, propionate, and creatinine (AUC 94.4 %, OR 14.5, p < 0.0001). Pathway analyses revealed significant associations with glycolysis/gluconeogenesis, pyrimidine metabolism, and tryptophan metabolism at early stages, and fatty acid biosynthesis, pyruvate metabolism, phenylalanine metabolism, and tryptophan metabolism at later stages.

### Discussion and conclusion

These findings underscore the dynamic nature of metabolomic profiles in acute brain injuries and highlight common metabolites as significant prognostic markers across brain injury types.

## Introduction

1

Acute brain injuries (ABIs), including aneurysmal subarachnoid hemorrhage (aSAH), ischemic stroke (IS), and traumatic brain injury (TBI), are major global health concerns, significantly contributing to mortality and disability worldwide (Feigin et al., 2022; Capizzi et al., 2020). Irrespective of etiology, ABIs induce a cascade of substantial secondary cerebral alterations on the cellular, functional and metabolic level that complicate outcome prediction impeding reliable risk stratification and making clinical decision-making and prognostication more difficult (Dagonnier et al., 2021; Maas et al., 2022). A multitude of various metabolites are released into the peripheral blood in response to the initial trauma and downstream pathophysiological reactions, that could be used as metabolomic biomarkers. Altered metabolic pathways are associated with various neurological conditions, including chronic neurodegenerative diseases such as Alzheimer's disease (AD), Parkinson's disease (PD), Huntington's disease (HD), amyotrophic lateral sclerosis (ALS) and multiple sclerosis (MS) (Huo et al., 2020; Shao et al., 2021; Mastrokolias et al., 2016; Goutman et al., 2020; Liu et al., 2022). Metabolic profiles also undergo notable alterations following ABIs (Chi et al., 2021; Shin et al., 2020; Banoei et al., 2023).

Brain injuries involve alterations in excitotoxic or neurotoxic mediators, oxidative stress and corresponding free radicals, lipidomic changes, and shifts in inflammatory mediators (Ricciotti and FitzGerald, 2011; Hajsl et al., 2020; Yan et al., 2015; Sajanti et al., 2024; Hellström et al., 2025). Differentiating factors in ABI metabolomics are detected as varying metabolite concentrations compared to healthy individuals (Sidorov et al., 2019).

In the field of metabolomics, it remains challenging to separate findings that arise directly from the injury from those that reflect secondary responses. Nevertheless, earlier studies have worked to pinpoint pathophysiological shifts in the metabolomic patterns tied to brain injuries (Oft et al., 2024). Excitotoxic metabolites such as glutamate and related amino acids have been observed to play a significant role in the metabolic effects of brain injuries. Studies have found that glutamate and its precursor, glutamine, increase after ABI (Liu et al., 2015; Yang et al., 2017; Tao et al., 2023). This rise is presumably due to increased activity in glial cells aimed at achieving homeostasis following damage (Tao et al., 2023). Additionally, levels of amino acids (AAs) related to glutamine metabolism, proline, and pyroglutamate, have been noted to decrease following a stroke (Sidorov et al., 2019). On the other hand, decreasing glutamine levels have been linked to the severity of stroke (Ahmed et al., 2021). Metabolites that signal oxidative stress, such as lactate, pyruvate, and citrate, change likely due to the initiation of anaerobic energy production. Additionally, levels of valine and isoleucine, which are associated with compensatory energy production methods, have been observed to decrease after ABI (Liu et al., 2015; Dale et al., 2019). After ABIs, the mediators related to cell-mediated inflammation, including phospholipids, and pro-inflammatory cytokines are one important group of metabolites. Phospholipids are the backbone of neuronal cell membranes (Hussain et al., 2020). Phosphatidylethanolamine (PE), phosphatidylcholine (PC), and their hydrolysis products lysophosphatidylethanolamine (LysoPE) and lysophosphatidylcholines (LysoPC) and etherphosphatidylcholines (EPC) have been observed to decrease in patients with ABI (Sidorov et al., 2019; Thomas et al., 2022; Sun et al., 2022). Brain injury activates glutamate-mediated phospholipases A2 and C (PLA2 and PLC), which hydrolyze membrane phospholipids. The resulting decrease in phospholipid levels is accompanied by a concomitant increase in arachidonic acid concentrations following IS (Wieloch and Siesjö, 1982). Reduced concentrations of AAs such as glycine, hippurate, and dimethylamine have been reported in stroke patients. These amino acids are closely linked to folate deficiency and hyperhomocysteinemia, both of which are recognized independent risk factors for stroke. (Jung et al., 2011). In addition, tryptophan is also seen to decrease after ABI because it is connected to the indoleamine-2,3-dioxygenase enzyme which activates after an increase in cytokines (Liu et al., 2015).

Multiple studies have identified changes in the metabolome associated with TBI that correlate with its severity. Using machine learning, Thomas et al. (2022) developed a model consisting of 23 metabolites that effectively distinguished TBI from healthy control patients, independent of the severity of TBI, achieving an area under the curve (AUC) of 0.98 (Thomas et al., 2022). Furthermore, they constructed a model of 19 metabolites to differentiate between three levels of TBI severity. The metabolites encompassed a broad range, including fatty acids (FAs), AAs, and sugar derivatives (Thomas et al., 2022). However, the important discriminative metabolites were three decreased AAs: alanine, threonine, and serine. Additionally, phospholipid levels showed an increasing trend in TBI patients (Thomas et al., 2022). In cases of TBI, significant alterations have been observed in the metabolism of branched-chain amino acids (BCAAs), with most related metabolites predominantly showing a decreasing trend; however, some studies have reported contradictory results (Orešič et al., 2016; Jeter et al., 2013). Additionally, in TBI patients, metabolites within pathways related to glycolysis and FA metabolism primarily exhibit an upward trend compared to healthy patients (Banoei et al., 2023; Thomas et al., 2022; Orešič et al., 2016). Significant metabolic properties have also been identified in the IS group. For instance, increasing purine concentration and decreasing glutamine levels are significantly associated with the severity of stroke (Ahmed et al., 2021; Dale et al., 2019). The prognostic utility of metabolites in ABIs has also been explored. Chi et al. (2021) constructed a model using 63 metabolites, which, when combined with other clinical features, enhanced the predictive capacity for distinguishing outcomes based on the modified Ranking Scale (mRS) (Chi et al., 2021).

This study aims to detect longitudinal metabolomic alterations across brain injuries and identify prognostic biomarkers irrespective of injury type. By highlighting shared metabolic disruptions, the findings may improve outcome prognostication and offer insights into recovery mechanisms, guiding future research and therapeutic strategies.

## Materials and methods

2

### Study design and participants

2.1

This study was a longitudinal prospective observational cohort design that included 73 consecutive acute brain injury patients from the University Hospital of Turku, Finland, treated between 2016 and 2019 (Fig. 1). These patients were categorized into three groups: ischemic stroke (IS, n = 30), aneurysmal subarachnoid hemorrhage (aSAH, n = 30), and traumatic brain injury (TBI, n = 13) resulting in a subdural hematoma that necessitated surgical intervention.Fig. 1Flowchart of the study. In this study, serum samples from patients suffering from aneurysmal subarachnoid hemorrhage, ischemic stroke, and traumatic brain injury were collected at two timepoints post-insult and profiled using the Orbitrap™ platform, capable of identifying 462 metabolites. The importance of these metabolites in predicting patient outcomes was assessed using partial least squares discriminant analysis and t-tests on both early and late samples. The significance of individual metabolites in differentiating outcomes was visualized and further scrutinized with machine learning methodologies. The linear support vector machine algorithm was applied to pinpoint pivotal metabolic features, with performance validated through cross-validation. Potential biomarkers were then evaluated using receiver operating characteristic with LASSO and linear discriminant analysis. Enrichment and pathway analyses were performed to understand pathobiological associations with recovery.Fig. 1

Eligibility criteria were the diagnosis of A) aSAH, B) IS (embolic, thrombotic, or cryptogenic), or C) TBI leading to an acute subdural hematoma requiring surgical intervention. D) Age above 18 years. E) Provision of informed consent. All patients received standard clinical treatment following the institution's protocols, which align with the prevailing guidelines for treating aSAH, IS, and TBI patients (Connolly et al., 2012; Carney et al., 2017; Powers et al., 2019).

Peripheral venous samples were collected twice from the participants: first, at an early timepoint averaging 2 ± 1 day post-insult, and subsequently, at a later stage averaging 6 ± 2 days post-insult. Three months after the initial event, the aSAH patients had their outcomes assessed during an outpatient clinic visit, while the IS and TBI patient outcomes were assessed through structured telephone interviews. The mRS was employed to evaluate the outcomes, classifying patients as either favorable (mRS 0–3) or unfavorable (mRS 4–6). If a patient died before the 3-month outcome assessment, their mRS was recorded as 6.

During the study recruitment, 11 patients opted out of the study, and one patient initially agreed but later chose to withdraw (late samples cohort: n = 73). Additionally, 11 participants were omitted from the early metabolome biomarker detection measurements because their early samples were not available (early samples cohort n = 62).

### Serum extraction

2.2

Standard 10 mL BD Vacutainer No Additive collection tubes (REF 364915) were utilized for venous blood serum collection. After drawing the blood, samples were left to rest at room temperature for 30–60 min to facilitate clot formation. Following this clotting period, the samples were centrifuged using a horizontal rotor (swing-out head) at 2200g for 15 min, also at room temperature. The separated serum was then distributed into three clean 10 mL BD Vacutainer No Additive tubes (REF 364915) and stored at −80 °C.

### Targeted liquid chromatography-mass spectrometry (LC-MS) metabolomics profiling analytics

2.3

A detailed description of the targeted LC-MS metabolomics profiling protocol, including sample preparation, chromatographic separation, and instrument settings, is provided in the Supplementary materials and methods. Briefly, metabolites were quantified using UHPLC-Q-Exactive Orbitrap MS with standardized library references and continuous quality control throughout the analytical run.

## Bioinformatics and statistics

3

### Metabolome data preprocessing

3.1

Metabolite data were initially pre-filtered to ensure peak quality, excluding metabolites with poor chromatographic profiles, intensity variation exceeding 20 % RSD in QC samples, or significant carryover. The peak area intensities were normalized by probabilistic quotient normalization to an in-house QC reference using MetaboAnalyst 6.0 (www.metaboanalyst.ca) (Pang et al., 2021). Missing values were imputed at 1/5 of the minimum positive value for each variable. Data underwent log10 transformation and auto-scaling (mean-centered and divided by standard deviation) to standardize metabolite distributions.

### Univariate and multivariate analysis

3.2

The preprocessed data were analyzed with MetaboAnalyst 6.0 using a range of statistical methods (Xia et al., 2009). For univariate analysis, a t-test was applied to identify metabolites significantly associated with patient outcomes (p < 0.05, FDR-corrected). In the multivariate analysis, partial least squares discriminant analysis (PLS-DA) was conducted with 5-fold cross-validation to evaluate model robustness, and cross-validation results included R-squared, Q-squared, and accuracy metrics.

### Linear support vector machine to identify features importance

3.3

Linear support vector machine (SVM) was employed to identify significant metabolites associated with patient outcomes. Features were selected based on their relative contribution to the classification using cross-validation error rates (10-fold cross-validation) (Xia et al., 2009; Zhang et al., 2006).

### Feature selection and combinatory biomarkers

3.4

Feature selection for the final models was refined using LASSO regression and K-means clustering (K = 10 clusters) (Tibshirani, 1996). Canonical linear discriminant analysis (LDA) and logistic modeling were applied to develop combinatory biomarkers, predicting patient outcomes with canonical scores (Girard et al., 2018; Srinath et al., 2023). Receiver operating characteristic (ROC) analyses assessed biomarker sensitivity and specificity, with the Youden index determining optimal cutoffs (Youden, 1950).

### Quantitative pathway enrichment analysis

3.5

To interpret the biological significance of identified metabolites, quantitative pathway enrichment analysis was conducted using the Kyoto Encyclopedia of Genes and Genomes (KEGG) pathways (Kanehisa and Goto, 2000). Pathways differentiating favorable and unfavorable outcomes were identified at both early and late time points. The analysis utilized MetaboAnalyst's quantitative enrichment analysis (QEA) approach, performed with the globaltest package, which applies a generalized linear model to estimate a Q-statistic for each metabolite set (Powers et al., 2019). This Q-statistic reflects the correlation between metabolite concentration profiles and clinical outcomes. For each metabolite set, the Q-statistic is averaged across all metabolites in the set to assess overall pathway significance (Goeman et al., 2004).

### Statistical significance

3.6

Statistical tests used a significance level of p < 0.05. For analyses involving multiple comparisons, the Benjamini-Hochberg method was applied to control the false discovery rate (FDR) (Benjamini and Hochberg, 1995). Statistical analyses were conducted using MetaboAnalyst 6.0, MetaboAnalyst R (MetaboAnalystR), and SAS (SAS Institute Inc., 2016; Cary, NC, USA).

## Results

4

### Study population and clinical parameters

4.1

In the enrolled cohort (n = 73), brain injuries were classified into three primary categories: aSAH represented 41.1 % (30/73), TBI accounted for 17.8 % (13/73) and IS made up 41.1 % (30/73) (Table 1 and Supplemental Table S1). The demographic analysis revealed no significant sex predominance, with males comprising 54.8 % (40/73) of the population (p = 0.12). The mean age of the cohort was 58.3 ± 12.7 years (Table 1). Initial Glasgow Coma Scale (GCS) assessments at the scene recorded a mean score of 11.8 ± 4.4, with scores ranging from 3 to 15 (Supplemental Table S1). Out of the enrolled cohort (n = 73), 11 early samples were unavailable, leaving 62 samples for the early cohort. The early (n = 62) and late (n = 73) sample cohorts were assessed for balanced grouping concerning age, sex, type of brain injury, and mRS level (p = 0.98, p = 0.12, p = 0.68, and p = 0.69, respectively) (Table 1).Table 1Basic characteristics of early and late cohorts. Favorable modified Rankin scale (mRS) 0–3, Unfavorable mRS 4–6. aSAH = aneurysmal subarachnoid hemorrhage, TBI = traumatic brain injury, IS = ischemic stroke.Table 1VariablesEarly (n = 62)Late (n = 73)p-valueAge in years0.98 Mean ± SD58.3 ± 13.158.3 ± 12.7 Min–Max23.0–75.023.0–75.0 Median (IQR)63.5 (47.0–70.0)61.0 (47.5–75.0)Sex0.12 Male (%)33 (53.2)40 (54.8) Female (%)29 (46.8)33 (45.2)Type of brain injury0.68 aSAH (%)29 (46.8)30 (41.1) TBI (%)8 (12.9)13 (17.8) IS (%)25 (40.3)30 (41.1)mRS0.69 Favorable (%)37 (59.7)40 (54.8) Unfavorable (%)25 (40.3)33 (45.2)Statistical comparisons to detect group differences between early and late study cohorts (all comparisons p > 0.05). Unpaired two-sample t-test (continuous) or Chi-square test (categorical) for p-values.

Outcomes were assessed at the three-month mark using the mRS. Favorable outcomes (mRS scores 0–3) were recorded in 54.8 % (40/73) of the patients, while unfavorable outcomes (mRS scores 4–6) were observed in 45.2 % (33/73) (Table 1). The overall mortality rate within the cohort at three months post-injury was 19.2 % (14/73). Additionally, the favorable (n = 45) and unfavorable (n = 28) sub-cohort groups were balanced concerning age, sex, and type of brain injury (p = 0.21, p = 0.52, and p = 0.09, respectively) (Table 2).Table 2Basic characteristics of favorable and unfavorable patient groups in late time point (n = 73). Modified Rankin scale (mRS). Favorable mRS 0–3, Unfavorable mRS 4–6. aSAH = aneurysmal subarachnoid hemorrhage, TBI = traumatic brain injury, IS = ischemic stroke.Table 2VariablesFavorable (n = 45)Unfavorable (n = 28)p-valueAge in years0.21 Mean ± SD56.8 ± 12.460.6 ± 13.2 Min–Max23.0–75.030.0–74.0 Median (IQR)59.0 (47.0–66.5)65.0 (50.0–71.0)Sex0.52 Male (%)26 (57.8)14 (50.0) Female (%)19 (42.2)14 (50.0)Type of brain injury0.09 aSAH (%)18 (40.0)12 (42.8) TBI (%)5 (11.1)8 (28.6) IS (%)22 (48.9)8 (28.6)Statistical comparisons to detect group differences between favorable and unfavorable outcome groups. Two-sample t-test (continuous) or Chi square test exact test (categorical) for p-values.

### Metabolomic profiles of acute brain injuries

4.2

The concentrations of circulating metabolites were quantitatively measured in serum samples at two timepoints (early = 2 ± 1 day and late = 6 ± 2 days). The normalized serum metabolome, which included 462 metabolites screened, revealed significant metabolic changes. We specifically analyzed both early (n = 62) and late (n = 73) sample cohorts. Analysis of early serum samples showed limited discriminatory ability between favorable and unfavorable outcomes during cross-validation (accuracy = 0.66, R-squared = 0.33, Q-squared = 0.04) (Fig. 2A and B). Conversely, the late serum samples displayed improved discriminatory potential with good cross-validation performance (accuracy = 0.79, R-squared = 60.0, Q-squared = 0.24) (Fig. 2C and D). We also analyzed each disease group within the same outcome categories and timepoints. None of the diseases clustered separately (Supplemental Fig. 1).Fig. 2Partial least squares discriminant analysis (PLS-DA) and cross-validation of the identified serum metabolome. A and B) The early serum samples (2 ± 1 day post-insult) indicated limited overall discriminatory ability; the low Q2 value in cross-validation suggests slight overfitting of the model (accuracy = 0.66, R2 = 0.33, Q2 = 0.04). C and D) The late serum samples (6 ± 2 days post-insult) cohort showed good discriminatory ability confirmed by cross-validation (accuracy = 0.79, R2 = 60.0, Q2 = 0.24).Fig. 2

Favorable outcome = modified Rankin Scale (mRS) 0–3; unfavorable outcome = mRS 4–6. ∗ indicates highest accuracy. Early timepoint: n = 62; late timepoint: n = 73. R2 = R-squared; Q2 = cross-validated R-squared.

### Metabolomic profiles associated with patient outcomes across acute brain injuries

4.3

Temporal alterations in the metabolome following different brain injuries were evident (Fig. 3A–D). We analyzed the presence of metabolites that significantly differentiated between the two outcome groups. Early samples revealed only two statistically significant metabolites—uridine and tryptophan—that differentiated favorable from unfavorable outcomes (p < 0.05, FDR-corrected) (Fig. 3A–Supplemental Table S2). Lactic acid showed a trend towards significance (p < 0.1, FDR-corrected). However, in the late sample group, 15 metabolites were identified as statistically significant for differentiating outcomes, including prostaglandin J2 (PGJ2), creatinine, N-acetyl-L-alanine, L-methionine, uridine, N-alpha-acetyl-L-asparagine, allantoin, malic acid, 3-hydroxy-3-methylglutarate, 3-hydroxybutanoic acid, L-phenylalanine, 5-oxo-proline, trigonelline, decanoate, and hippurate (p < 0.05, FDR-corrected) (Fig. 3B–Supplemental Table S3). Hierarchical clustering heatmaps identified the top 25 metabolites for each cohort, illustrating distinct separation patterns between the favorable and unfavorable groups (red indicating increased and blue indicating decreased metabolites) (Fig. 3C and D).Fig. 3Metabolome signatures differentiating patients with favorable and unfavorable outcomes after acute brain. A) A volcano plot analyzing early samples showing statistically significant metabolites (up 0, down 2) differentiating favorable and unfavorable outcome groups (p < 0.05, FDR-corrected, |FC| > 1.5). B) A volcano plot analyzing late samples showing statistically significant metabolites (up 9, down 6) differentiating favorable and unfavorable outcome groups (p < 0.05, FDR-corrected, |FC| > 1.5). C) Hierarchical clustering heatmap identifying the top 25 metabolites in the early cohort. Distance measure: Euclidean distance. Statistical measure: t-test. Separation patterns per fold change (red increased, blue decreased) of the favorable and unfavorable groups are observed in the heatmap. D) Hierarchical clustering heatmap identifying the top 25 metabolites in the late cohort. Distance measure: Euclidean distance. Statistical measure: t-test. Separation patterns per fold change (red increased, blue decreased) of the favorable and unfavorable groups are observed in the heatmap.Fig. 3

### Assessing single metabolomic predictors of patient outcomes

4.4

ROC analyses were applied to assess the metabolome for potential biomarkers (Fig. 4). In the early samples, the best-performing metabolite was uridine, which distinguished favorable outcome patients from unfavorable outcome patients with 88 % sensitivity and 66 % specificity (AUC 78.1 %, 95 % CI: 64–89 %, p < 0.0001) (Fig. 4A). The second best performing early metabolite, tryptophan, demonstrated 79 % sensitivity and 66 % specificity (AUC 75.5 %, 95 % CI: 61–87 %, p < 0.0001) (Fig. 4B). Lactic acid was identified as an important candidate using the LASSO method (100 % frequency) and with a trend towards significance in initial analysis (p < 0.05, FDR-corrected), showed 75 % sensitivity and 58 % specificity (AUC 68.5 %, 95 % CI: 54–82 %, p = 0.0029) (Fig. 4C).Fig. 4Univariate and the receiver operating characteristic (ROC) analyses for early metabolites. A) The best performing early metabolite uridine (p < 0.0001) differentiated favorable outcome patients from unfavorable outcome patients with 88 % sensitivity and 66 % specificity (area under the curve (AUC) 78.1 % with 95 % confidence interval (CI) = 64–89 %). B) The second best performing early metabolite tryptophan (p < 0.0001) differentiated favorable outcome patients from unfavorable outcome patients with 79 % sensitivity and 66 % specificity (AUC 75.5 % with 95 % CI = 61–87 %). C) Lactic acid (p = 0.0029) identified using the LASSO method differentiated favorable outcome patients from unfavorable outcome patients with 75 % sensitivity and 58 % specificity (AUC 68.5 % with 95 % CI = 54–82 %). Box plot presented ± IQR, yellow diamond indicates mean concentration, horizontal red line indicates the optimal cut-off. Optimal cut-off point for the prognostic test was determined by calculating the Youden index (red dot in AUC curve). The 95 % confidence intervals were calculated using 500 bootstrappings. Box plot y-axis = normalized concentration with batch correction, x-axis = favorable (red) and unfavorable outcome (blue) groups. ∗∗∗p < 0.0001. ∗∗p = 0.003.Fig. 4

For the late samples, PGJ2 emerged as the top metabolite, differentiating favorable from unfavorable outcomes with 74 % sensitivity and 74 % specificity (AUC 77.1 %, 95 % CI: 65–89 %, p < 0.0001) (Fig. 5A). N-alpha-acetyl-L-asparagine was the second best, with 82 % sensitivity and 59 % specificity (AUC 70.1 %, 95 % CI: 59–82 %, p < 0.0001) (Fig. 5B). Creatine showed 63 % sensitivity and 87 % specificity (AUC 76.4 %, 95 % CI: 64–88 %, p < 0.0001, FDR-corrected) (Fig. 5C). These metabolites demonstrated substantial potential as prognostic biomarkers, providing significant insights into patient outcomes across different acute brain injuries.Fig. 5Univariate and the receiver operating characteristic (ROC) analyses for three best-performing metabolites identified with LASSO in late point. A) The best performing late metabolite prostaglandin J2 (p < 0.0001) differentiated favorable outcome patients from unfavorable outcome patients with 74 % sensitivity and 74 % specificity (area under the curve (AUC) 77.1 % with 95 % confidential interval (CI) = 65–89 %). B) Metabolite N-alpha-acetyl-L-asparagine (p < 0.0001) differentiated favorable outcome patients from unfavorable outcome patients with 82 % sensitivity and 59 % specificity (AUC 70.1 % with 95 % CI = 59–82 %). C) Creatinine (p < 0.0001) differentiated favorable outcome patients from unfavorable outcome patients with 63 % sensitivity and 87 % specificity (AUC 76.4 % with 95 % CI = 64–88 %). Box plot presented ± IQR, yellow diamond indicates mean concentration, horizontal red line indicates the optimal cut-off. Optimal cut-off point for the prognostic test was determined by calculating the Youden index (red dot in the AUC curve). The 95 % confidence intervals were calculated using 500 bootstrappings. Box plot y-axis = normalized concentration with batch correction, x-axis = favorable (red) and unfavorable outcome (blue) groups. ∗∗∗p < 0.0001.Fig. 5

### Multivariate machine learning for outcome discrimination

4.5

To handle the high-dimensional data typical in metabolomics studies, machine learning techniques (untargeted linear SVM approach) were employed to identify significant metabolic features that differentiate patients with favorable outcomes from those with unfavorable outcomes at both early and late time points.

The analysis highlighted the top 10 metabolites for each time point based on their importance in the models. At the early time point, key metabolites included valine, 4-methyl-2-oxo-pentanoate, indoxyl sulfate, L-lactic acid, pyruvic acid, decanoate, caprylic acid, myo-inositol, tryptophan, and uridine (Fig. 6A).Fig. 6Untargeted linear support vector machine (SVM) algorithm analysis to identify important metabolic features. A) Identified important metabolic features showing the top 10 metabolites (according to importance in SVM models) differentiating the favorable outcome patients from unfavorable outcome patients at the early time point. B) Identified important metabolic features showing the top 10 metabolites (according to importance in SVM models) differentiating the favorable outcome patients from unfavorable outcome patients at the late timepoint.Fig. 6

For the late time point, significant metabolites identified were allantoin, 3-hydroxy-3-methylglutarate, 3-hydroxybutanoic acid, adenosine, butyric/isobutyric acid, creatinine, gamma-linolenic acid (GLA), indoxyl sulfate, 4-imidazoleacetic acid, and hippurate (Fig. 6B). These late-stage metabolites were important in differentiating the outcome groups, suggesting that the metabolic profile evolves over time.

### Combinatory biomarker analysis through machine learning LDA

4.6

LDA was employed to develop combinatory biomarker models, effectively integrating multiple metabolites to enhance prognostic accuracy. In the early sample cohort, we identified combinatory biomarkers candidates with the LASSO regression method with 100 % Lasso frequency for lactic acid, tryptophan, and uridine. Subsequent K-means (KM) clustering (K = 10) identified that each of the 3 metabolites clustered differently. The LDA model incorporating these three candidate metabolites demonstrated robust prognostic capability, with an AUC of 88.8 % (95 % CI: 80–97 %, p < 0.0001), 71 % sensitivity, and 92 % specificity (J = 0.63) (Fig. 7A). The corresponding LDA equation was formulated as:Canonical score = 0.766[Uridine] + 0.490[Tryptophan] – 0.561[Lactic acid].Fig. 7Linear discriminant analyses (LDA) of the selected candidate biomarkers. A) In the early set, the receiver operating characteristic curve (ROC) of three identified candidate metabolites (uridine, tryptophan, and lactic acid) in LDA prognosing favorable outcome: odds ratio (OR) 5.29 (95 % confidence interval (CI) 2.30–12.0); Area under the curve (AUC) = 88.8 %, 95 % CI = (80–97 %), p < 0.0001, with 71 % sensitivity and 92 % specificity J = 0.63). LDA of these three metabolites resulted an equation with canonical scores: 0.766[Uridine] + 0.490[Tryptophan] – 0.561[Lactic acid] B) In the late set, the ROC of eight identified candidate metabolites (prostaglandin J2, gamma-linolenic acid, N-acetyl-L-alanine, uridine, N-alpha-acetyl-L-asparagine, 3-hydroxy-3-methylglutarate, propionate and creatinine) in LDA prognosing favorable outcome: OR 14.5 (95 % CI 3.93–52.6); area under the curve (AUC) = 94.4 %, 95 % CI = (89–100 %), p < 0.0001, with 89 % sensitivity and 89 % specificity (J = 0.78). LDA of these 8 metabolites resulted an equation with canonical scores: 0.203[Prostaglandin J2] – 0.568[Gamma-linolenic acid] – 0.178[N-acetyl-L-alanine] + 0.148[Uridine] – 0.581[N-alpha-acetyl-L-asparagine] – 0.419[3-hydroxy-3-methylglutarate] – 0.460[Propionate] + 0.903[Creatinine]. Optimal cut-off point for the prognostic test was determined by calculating the Youden index (J).Fig. 7

This equation differentiated favorable outcomes with an odds ratio (OR) of 5.29 (95 % CI: 2.30–12.0).

In the late metabolome, we again employed LASSO regression and KM clustering (K = 10 clusters). Seven late metabolites demonstrated distinct clustering behavior in the analysis with selection frequencies 100-30 % (gamma-linolenic acid = 30 %, N-acetyl-L-alanine = 90 %, uridine = 80 %, N-alpha-acetyl-L-asparagine = 60 %, 3-hydroxy-3-methylglutarate = 30 %, propionate = 30 % and creatinine = 100 %). PGJ2 had 0 selection frequency but this metabolite was added to the final model due to high AUC (Fig. 5). This combinatory model achieved an AUC of 94.4 % (95 % CI: 89–100 %, p < 0.0001), with both sensitivity and specificity at 89 % (J = 0.78) (Fig. 7B). The LDA equation for this late-stage model was formulated as:Canonical score = 0.203[Prostaglandin J2] – 0.568[Gamma-linolenic acid] – 0.178[N-acetyl-L-alanine] + 0.148[Uridine] – 0.581[N-alpha-acetyl-L-asparagine] – 0.419[3-hydroxy-3-methylglutarate] – 0.460[Propionate] + 0.903[Creatinine].

This equation differentiated outcomes with an OR of 14.5 (95 % CI: 3.93–52.6).

To further enhance predictive accuracy, we investigated the impact of combining early and late prognostic information through LDA. The combinatory model yielded a high AUC of 95.8 % (95 % CI: 91–100 %, p < 0.0001), with 87 % sensitivity and 97 % specificity, and an odds ratio (OR) of 12.5 (95 % CI: 3.27–47.6) (Supplemental Fig. S2).

## Functions of the identified metabolites

5

### Early time point quantitative pathway enrichment analysis

5.1

At the early time point, quantitative pathway enrichment analysis identified several metabolic pathways with potential differences between favorable and unfavorable outcomes in acute brain injuries (Fig. 8A, Supplemental Table S4). Even though raw p-values showed robust effect sizes for a number of metabolic pathways, due to the small sample size and at the same time high number of comparisons FDR-corrected significance threshold of p < 0.05 was missed ubiquitously. Yet, potentially pathways including Glycolysis/Gluconeogenesis (p = 0.0043, FDR = 0.088), Pyrimidine metabolism (p = 0.0064, FDR = 0.088), Tryptophan metabolism (p = 0.0082, FDR = 0.088), and Valine, Leucine, and Isoleucine biosynthesis (p = 0.0096, FDR = 0.088) showed a promising differential signal between groups. Additional pathways with significant uncorrected p-values were Ascorbate and Aldarate metabolism, Inositol Phosphate metabolism, Pyruvate metabolism, Pantothenate and CoA biosynthesis, Valine, Leucine, and Isoleucine degradation, Galactose metabolism, and the Citrate cycle (TCA cycle), yet, FDR-corrected p-value was 0.088.Fig. 8KEGG quantitative pathway enrichment analysis of metabolic changes at early (A) and late (B) time points differentiating favorable and unfavorable outcomes following acute brain injury. A) At the early time point, 11 pathways approached significance at p < 0.1, FDR-corrected. Pathways associated with immediate energy production and essential metabolic processes were prominent, including Glycolysis/Gluconeogenesis (p = 0.0043, FDR = 0.088), Inositol Phosphate metabolism (p = 0.0163, FDR = 0.088), and Pantothenate and CoA biosynthesis (p = 0.0208, FDR = 0.088). B) At the late time point, seven pathways were close to significance at p < 0.1, FDR-corrected. Pathway analysis showed a shift toward long-term metabolic adaptations, with pathways including Fatty Acid biosynthesis (p = 0.0139, FDR = 0.097), Cysteine and Methionine metabolism (p = 0.0126, FDR = 0.097), and Starch and Sucrose metabolism (p = 0.0180, FDR = 0.097). Tryptophan metabolism (early p = 0.0082, FDR = 0.088; late p = 0.0066, FDR = 0.097) was significant at both time points.Fig. 8

### Late time point quantitative pathway enrichment analysis

5.2

At the late time point, quantitative pathway enrichment analysis identified several metabolic pathways that may differ between favorable and unfavorable outcomes in acute brain injury (Fig. 8B–Supplemental Table S4). Although no pathways reached statistical significance after FDR correction (FDR <0.05), several exhibited uncorrected p-values suggestive of potential biological relevance. These included Tryptophan metabolism (p = 0.0066, FDR = 0.097), Pyrimidine metabolism (p = 0.0071, FDR = 0.097), Pyruvate metabolism (p = 0.0095, FDR = 0.097), Galactose metabolism (p = 0.0106, FDR = 0.097), Cysteine and Methionine metabolism (p = 0.0126, FDR = 0.097), Fatty Acid biosynthesis (p = 0.0139, FDR = 0.097), and Starch and Sucrose metabolism (p = 0.0180, FDR = 0.097). Additional pathways with FDR values around 0.10 included the Citrate cycle (TCA cycle), Butanoate metabolism, Phenylalanine metabolism, and Phenylalanine, Tyrosine, and Tryptophan biosynthesis. While these findings do not meet conventional thresholds for statistical significance, they suggest potential shifts in metabolic processes over time following acute brain injury, warranting further investigation.

### Differences between early and late pathways

5.3

The pathway analyses demonstrate dynamic shifts in metabolic processes as the response to acute brain injury progresses (Fig. 8). At early time points, significant enrichment was observed in pathways such as glycolysis/gluconeogenesis (p = 0.0043, FDR = 0.088), inositol phosphate metabolism (p = 0.0163, FDR = 0.088), and pantothenate and CoA biosynthesis (p = 0.0208, FDR = 0.088), highlighting immediate metabolic adaptations to injury. In contrast, the late phase was characterized by enrichment of pathways involved in fatty acid biosynthesis (p = 0.0139, FDR = 0.097), cysteine and methionine metabolism (p = 0.0126, FDR = 0.097), and starch and sucrose metabolism (p = 0.0180, FDR = 0.097), indicating a shift toward longer-term metabolic remodeling. Notably, tryptophan metabolism was consistently enriched at both early (p = 0.0082, FDR = 0.088) and late (p = 0.0066, FDR = 0.097) time points, suggesting its sustained involvement throughout the injury response.

## Discussion

6

The findings from our prospective cohort study indicate that identifying shared circulating blood metabolites can significantly enhance prognostication of outcomes in ABI patients. Prognostic accuracy is evident at both early and late time points, with greater predictive strength observed in later stages when more significant metabolites are incorporated into the model. Our study adds to the existing literature by leveraging machine learning to develop metabolite-based models for predicting ABI outcomes, with distinct models based on early-phase, late-phase, and combined metabolite data. This research identifies key biomarkers and associated metabolic pathways, and emphasizes notable temporal metabolic shifts following brain injury, potentially guiding future clinical interventions and therapeutic strategies.

### Comparison of metabolite model with previously developed models

6.1

Our study's metabolite models for early (AUC 88.8 %) and late (AUC 94.4 %) time points demonstrate robust prognostic performance, comparable to or exceeding prior models developed for specific ABI types. For instance, Thomas et al. (2022) reported an AUC of 0.83 for a 19-metabolite model predicting TBI outcomes, emphasizing AAs (e.g., alanine, threonine, serine) and phospholipids (Thomas et al., 2022). Similarly, Oresic et al. (2016) achieved an AUC of 0.84 with a 49-metabolite model for TBI, highlighting medium-chain fatty acids (e.g., octanoic acid, decanoic acid) and sugar derivatives (Orešič et al., 2016). For IS, Chi et al. (2021) developed a 63-metabolite model with enhanced predictive capacity when combined with clinical features, though specific AUC values were not isolated for metabolites alone (Chi et al., 2021).

Our early model, relying on just three metabolites—uridine, tryptophan, and lactic acid—achieves a high AUC while using only a few key metabolites. In contrast to the larger metabolite panels reported in previous studies, this efficient model suggests that a focused set of biologically relevant markers may be sufficient to capture critical prognostic information during the acute phase across different types of acute brain injury. TÄHÄN Uridine's prominence aligns with its neuroprotective roles noted in preclinical TBI and neurodegenerative models (Dempsey and Raghavendra Rao, 2003; Kabadi and Maher, 2010), though its prognostic utility in humans has been underexplored. Tryptophan's inclusion aligns with prior stroke studies linking kynurenine pathway dysregulation to outcome severity (Hajsl et al., 2020; Mo et al., 2014), while lactic acid's role as an energy metabolism marker is consistent with findings in TBI and aSAH (Thomas et al., 2022; Dijkland et al., 2015).

The late model, incorporating eight metabolites, outperforms many prior models in predictive accuracy (AUC 94.4 %) and reflects a broader metabolic scope. Unlike Thomas et al.’s (2022) focus on amino acids and phospholipids or Oresic et al.’s (2016) emphasis on fatty acids, our late model integrates diverse classes—lipids (PGJ2, GLA), amino acid derivatives (N-acetyl-L-alanine, N-alpha-acetyl-L-asparagine), and energy metabolites (creatinine, propionate)—potentially capturing a more holistic metabolic response. The inclusion of PGJ2, with its dual pro- and anti-inflammatory roles (Liu et al., 2013; Zhao et al., 2006), and GLA, with its anti-inflammatory properties (Sergeant et al., 2016), introduces novel prognostic candidates not prominently featured in earlier ABI models.

Importantly, our models, based on substantially fewer metabolites than previously reported, still show strong prognostic performance across aSAH, IS, and TBI, suggesting their potential utility despite the heterogeneous pathophysiology of ABI. The reduced number of metabolites brings such models closer to clinical applicability. In the future, incorporation of metabolomic profiling into clinical practice—alongside radiological and neurological assessments—could enable more accurate early prognosis and support more personalized rehabilitation strategies. Validation in larger, multicenter cohorts will be essential to confirm these findings.

A key distinction of our study is its pan-ABI approach, encompassing IS, aSAH, and TBI, rather than focusing on a single injury type. This heterogeneity likely broadens the detected metabolic signatures, as evidenced by the lack of disease-specific clustering, suggesting shared pathophysiological metabolic response, and reflected mechanisms across ABI types. While prior models often achieved high specificity within a single condition, our cross-injury approach sacrifices some specificity for generalizability, offering a unified metabolomic framework applicable to diverse clinical settings.

### Temporal changes in the enriched metabolomic pathways

6.2

Our study delineates distinct temporal shifts in metabolomic pathways, mirroring the dynamic pathophysiology of ABI across early and late time points. At the early stage, enriched pathways—glycolysis/gluconeogenesis, pyrimidine metabolism, and tryptophan metabolism—reflect an acute metabolic crisis marked by energy deficits and neuroinflammation. The early enrichment of glycolysis and gluconeogenesis likely reflects impaired oxidative metabolism and a compensatory shift toward anaerobic ATP production after ABI. Elevated lactic acid, a key feature in our early model distinguishing favorable from unfavorable outcomes, supports this mechanism, as lactate is the primary end-product of anaerobic glycolysis and indicates disrupted cerebral energy homeostasis (Dijkland et al., 2015; Svedung Wettervik et al., 2020). These mechanistic patterns highlight early energy failure as a potential target for future therapeutic studies. Tryptophan metabolism's prominence highlights early neuroinflammatory cascades via the kynurenine pathway, where increased kynurenine/tryptophan ratios correlate with worse stroke outcomes (Brouns et al., 2010; Gold et al., 2011), aligning with our findings of sustained inflammatory stress.

At the late stage, pathways such as fatty acid biosynthesis, pyruvate metabolism, and phenylalanine metabolism emerge, alongside persistent tryptophan metabolism enrichment. This shift suggests a transition from acute energy stress to adaptive biosynthetic and inflammatory resolution processes. Metabolites like GLA and PGJ2, lower and higher respectively in favorable outcomes, indicate a balance between pro- and anti-inflammatory lipid mediators, supporting lipid metabolism's role in recovery (Thomas et al., 2022; Orešič et al., 2016). Elevated propionate and methionine in unfavorable outcomes further reflect altered energy metabolism and inflammation, while lower creatinine points to systemic effects (Sergeant et al., 2016; Yoshimura et al., 2021; Gu et al., 2016). Tryptophan metabolism's consistency across time points reinforces its role in driving neurotoxic versus neuroprotective kynurenine derivatives in ABI (Brouns et al., 2010).

Detailed analysis of individual metabolites, including their biological roles and specific associations with ABI outcomes, can be found in the supplemental discussion (Supplement).

Although our study focused on serum, previous work has shown that metabolomic alterations in cerebrospinal fluid (CSF) also correlate with outcome after ABI. Certain CSF findings align with our results and enhance the mechanistic links between of metabolites — particularly amino acid and energy-related metabolites such as tryptophan and alanine (Lu et al., 2018). Experimental evidence from an ischemic stroke mouse model further supports early metabolic disruptions similar to those observed in our cohort, including changes in creatinine, lactate, L-alanine, and glutamic acid (Wang et al., 2013). Together, these studies suggest that serum metabolomics captures key metabolic responses also observed centrally, showing reflection of brain-specific processes. Future studies incorporating paired serum–CSF sampling will be important to clarify the degree of overlap and integrate peripheral and central metabolic signatures.

### Prognostic implications and directions

6.3

The superior predictive power of our late model (AUC 94.4 %) compared to the early model (AUC 88.8 %) suggests that metabolomic signatures become more effective at distinguishing between outcome groups as secondary injury processes and recovery trajectories emerge. Combining early and late signatures (AUC 95.8 %) further boosts accuracy, indicating that longitudinal sampling could refine prognostic precision in clinical practice. Such an approach could guide early interventions (e.g., targeting energy metabolism or inflammation) while later profiles inform rehabilitation strategies. Our identification of novel biomarkers like PGJ2, GLA, and acetylated amino acids (NALA, NALS) opens avenues for mechanistic studies and therapeutic exploration. However, validation in larger, independent cohorts is essential to confirm these findings and address limitations such as sample size and treatment heterogeneity. Future studies should also explore integrating metabolomics with other omics data (e.g., proteomics, transcriptomics) to enhance predictive models, as demonstrated by Thomas et al.’s improved AUC with protein biomarkers (Thomas et al., 2022). In summary, our study advances the field by demonstrating that shared metabolomic signatures across ABI types can predict outcomes with high accuracy, with distinct early and late profiles reflecting the injury's temporal evolution.

## Limitations

7

Our study has several limitations that should be considered when interpreting the findings. Firstly, the modest sample size of 73 participants constrains the generalizability and statistical power of our findings. Although we sought to enhance robustness by analyzing the serum metabolome at two distinct time points post-admission, replicating this study with a larger, multicentric cohort would improve statistical power and provide a more comprehensive understanding of metabolomic profiles across different populations and healthcare settings. Sample size expansion would facilitate the detection of more subtle metabolomic differences and enhance the applicability of these metabolic biomarkers for prognostic use in acute brain injury. Finally, the well-described cellular pathophysiological differences between traumatic brain injury and ischaemic stroke in lipidomic and metabolomic profiles (Thomas et al., 2022) may bias cross-etiology comparisons and further diminish effective statistical power.

Although our objective was to identify cross-injury commonalities, the absence of a comparator cohort, with healthy participants or patients with non-brain injuries, limits our ability to confirm which omic features are specific to acute brain injury. Inclusion of such comparators in future studies would help delineate ABI-specific signatures.

Additionally, certain variables, such as the administration of propofol and nutritional support, could potentially influence metabolomic changes in patients. Controlling for these factors was not feasible in this study. It is important to recognize that treatment protocols varied significantly across the types of ABI included in our study. For instance, patients with aSAH and aSDH were typically managed in the intensive care unit and often required prolonged sedation to manage complications like high intracranial pressure, hydrocephalus, or bleeding. Conversely, patients with IS were predominantly treated in the stroke unit, with most not requiring sedation. This variability in sedation and nutritional support across patient groups suggests that specific treatments, such as propofol, are unlikely to be the primary drivers of the significant metabolomic changes observed. Nonetheless, future studies could use randomization, stratified sampling, or propensity score matching to mitigate the influence of these confounding factors and strengthen the reliability of metabolomic associations.

Methodologically, the use of cross-validation within models such as PLS-DA and machine learning offers internal validation; however, it may not fully capture external variability, which can affect the generalizability of our findings. Our patient cohort and subcohorts are heterogeneous in diagnostic composition, and disease severity. This naturally limits statistical power and may compromise the reliability of our models. Validation of our findings with external identic cohorts would be necessary for the robustness and reproducibility of these metabolomic associations. Despite these limitations, our study leverages a rigorous methodological approach and a temporal analysis of metabolomic profiles, providing a new perspective on the evolving metabolic response to ABI. Temporal profiling allows us to capture active metabolic responses likely involved in recovery, supporting the relevance of the identified metabolites as potential prognostic biomarkers. These findings provide a first framework for future studies aimed at validating these biomarkers across diverse ABI types and clinical settings.

## Conclusions

8

Research findings underscore the dynamic nature of metabolomic profiles in acute brain injuries and highlight metabolites as possible prognostic markers across various brain injury types. Longitudinally analyzed metabolomic changes may reflect underlying pathobiological processes, providing molecule candidates for further mechanistic validation. Further studies and validations of the identified metabolites in other cohorts and animal models are necessary to confirm these results and to elucidate the underlying pathobiological mechanisms linked to metabolism.

## Study approval and ethics

This study (T291/2016) was approved by the Institutional Review Board and Ethics Committee of Turku University Hospital. It adhered to the principles of the Declaration of Helsinki and its subsequent amendments. In cases where participants were unable to provide consent due to severe acute illness, written informed consent was obtained from their legal representatives. The study complied with all Finnish laws and regulations.

## Consent for publication

Not applicable.

## Availability of data and materials

The anonymized data from this study can be made available upon request to qualified researchers who have obtained appropriate institutional review board (IRB) approval. Requests should be directed to the corresponding author.

## Author contributions

The study was conceptualized, designed, and grant funded by J.K. Laboratory work was carried out by B.G., K.N., J.K., A.S., S.H., F.K., and S.K. Bioinformatic and statistical analyses were conducted by A.I.N. (bioinformatician), Y.C. (biostatistician), J.K., S.H., and A.S. Assessing patient outcomes was the responsibility of M.R., J.K., S.R., and F.K. The results were interpreted, and the initial manuscript was drafted by S.H., A.S., A.J., and J.K. S.H., JK and A.S. drafted the figures. The manuscript was critically reviewed, edited, and revised by J.F., T.R., S.B.L., Jo.F., R.T., J.P.P., S.R., F.K., M.J., S.P., A.A., A. Sr., R.G., A.I.N., M.R., J.R., and E.C. All authors have read and approved the final version of the manuscript for submission.

## Funding

Funding for this work was provided to J.K. by the Sigrid Juselius Foundation and the 10.13039/100008723Finnish Medical Foundation. A.S. received support from both the Sigrid Juselius Foundation and the Maire Taponen Foundation, while S.H. was funded by the 10.13039/501100006306Sigrid Jusélius Foundation. J.P.P. is supported by the Research Council of Finland and Sigrid Jusélius Foundation, and State Research Funding of Finland.

## Declaration of competing interest

The authors declare the following financial interests/personal relationships which may be considered as potential competing interests:Santtu Hellstrom reports financial support was provided by Sigrid Jusélius Foundation. Janne Koskimaki reports financial support was provided by Sigrid Jusélius Foundation. Janne Koskimaki reports financial support was provided by Finnish Medical Foundation. Antti Sajanti reports financial support was provided by Maire Taponen Foundation. Jussi P. Posti reports financial support was provided by Sigrid Jusélius Foundation. Jussi P. Posti reports financial support was provided by Research Council of Finland. Jussi P. Posti reports financial support was provided by State research council Finland. If there are other authors, they declare that they have no known competing financial interests or personal relationships that could have appeared to influence the work reported in this paper.

## Acknowledgements

AcknowledgementsThe facilities and expertise of FIMM Metabolomics, supported by 10.13039/100015735HiLIFE, University of Helsinki) and 10.13039/501100013840Biocenter Finland are gratefully acknowledged.

## Data Availability

Availability of data and materialsThe anonymized data from this study can be made available upon request to qualified researchers who have obtained appropriate institutional review board (IRB) approval. Requests should be directed to the corresponding author.

## References

1. AhmedW.WhiteI.R.WilkinsonM.JohnsonC.F.RattrayN.KishoreA.K.Breath and plasma metabolomics to assess inflammation in acute strokeSci. Rep.1120212194910.1038/s41598-021-01268-5PMC857867134753981 [PMID:34753981]
2. BanoeiM.M.LeeC.H.HutchisonJ.PanenkaW.WellingtonC.WishartD.S.Using metabolomics to predict severe traumatic brain injury outcome (GOSE) at 3 and 12 monthsCrit Care Lond Engl271202329510.1186/s13054-023-04573-9PMC1036329737481590 [PMID:37481590]
3. BenjaminiY.HochbergY.Controlling the false discovery rate: a practical and powerful approach to multiple testingJ R Stat Soc Ser B Methodol5711995289300
4. BrounsR.VerkerkR.AertsT.De SurgelooseD.WautersA.ScharpéS.The role of tryptophan catabolism along the kynurenine pathway in acute ischemic strokeNeurochem. Res.3592010131513222049091710.1007/s11064-010-0187-2 [PMID:20490917]
5. CapizziA.WooJ.Verduzco-GutierrezM.Traumatic brain injury: an overview of epidemiology, pathophysiology, and medical managementMed. Clin.1042202021323810.1016/j.mcna.2019.11.00132035565 [PMID:32035565]
6. CarneyN.TottenA.M.O'ReillyC.UllmanJ.S.HawrylukG.W.J.BellM.J.Guidelines for the management of severe traumatic brain injuryNeurosurgery8012017615Fourth Edition2765400010.1227/NEU.0000000000001432 [PMID:27654000]
7. ChiN.F.ChangT.H.LeeC.Y.WuY.W.ShenT.A.ChanL.Untargeted metabolomics predicts the functional outcome of ischemic strokeJ. Formos. Med. Assoc.12012021234241Part 13241466710.1016/j.jfma.2020.04.026 [PMID:32414667]
8. ConnollyE.S.RabinsteinA.A.CarhuapomaJ.R.DerdeynC.P.DionJ.HigashidaR.T.Guidelines for the management of aneurysmal subarachnoid hemorrhage: a guideline for healthcare professionals from the American heart association/American stroke associationStroke4362012171117372255619510.1161/STR.0b013e3182587839 [PMID:22556195]
9. DagonnierM.DonnanG.A.DavisS.M.DeweyH.M.HowellsD.W.Acute stroke biomarkers: are we there yet?Front. Neurol.12202161972110.3389/fneur.2021.619721PMC790203833633673 [PMID:33633673]
10. DaleN.TianF.SagooR.PhillipsN.ImrayC.RoffeC.Point-of-care measurements reveal release of purines into venous blood of stroke patientsPurinergic Signal.15220192372463085937110.1007/s11302-019-09647-4PMC6635545 [PMID:30859371]
11. DempseyR.J.Raghavendra RaoV.L.Cytidinediphosphocholine treatment to decrease traumatic brain injury-induced hippocampal neuronal death, cortical contusion volume, and neurological dysfunction in ratsJ. Neurosurg.98420038678731269141410.3171/jns.2003.98.4.0867 [PMID:12691414]
12. DijklandS.DonkelaarK.V.Van den BerghW.BakkerJ.DippelD.NijstenM.Prognostic value of blood lactate and glucose levels after aneurysmal subarachnoid hemorrhageCrit. Care1912015P46610.1097/CCM.000000000000156926751612 [PMID:26751612]
13. FeiginV.L.BraininM.NorrvingB.MartinsS.SaccoR.L.HackeW.World stroke organization (WSO): global stroke fact sheet 2022Int J Stroke Off J Int Stroke Soc1712022182910.1177/1747493021106591734986727 [PMID:34986727]
14. GirardR.ZeineddineH.A.KoskimäkiJ.FamM.D.CaoY.ShiC.Plasma biomarkers of inflammation and angiogenesis predict cerebral cavernous malformation symptomatic hemorrhage or lesional growthCirc. Res.122122018171617212972038410.1161/CIRCRESAHA.118.312680PMC5993629 [PMID:29720384]
15. GoemanJ.J.van de GeerS.A.de KortF.van HouwelingenH.C.A global test for groups of genes: testing association with a clinical outcomeBioinforma Oxf Engl2012004939910.1093/bioinformatics/btg38214693814 [PMID:14693814]
16. GoldA.B.HerrmannN.SwardfagerW.BlackS.E.AvivR.I.TennenG.The relationship between indoleamine 2,3-dioxygenase activity and post-stroke cognitive impairmentJ. Neuroinflammation82011172132416410.1186/1742-2094-8-17PMC3055827 [PMID:21324164]
17. GoutmanS.A.BossJ.GuoK.AlakwaaF.M.PattersonA.KimS.Untargeted metabolomics yields insight into ALS disease mechanismsJ. Neurol. Neurosurg. Psychiatry91122020132913383292893910.1136/jnnp-2020-323611PMC7677469 [PMID:32928939]
18. GuS.X.BlokhinI.O.WilsonK.M.DhaneshaN.DoddapattarP.GrumbachI.M.Protein methionine oxidation augments reperfusion injury in acute ischemic strokeJCI Insight [Internet]172016Available from:https://insight.jci.org/articles/view/8646010.1172/jci.insight.86460PMC490229827294204 [PMID:27294204]
19. HajslM.HlavackovaA.BroulikovaK.SramekM.MalyM.DyrJ.E.Tryptophan metabolism, inflammation, and oxidative stress in patients with neurovascular diseaseMetabolites10520202083243859210.3390/metabo10050208PMC7281607 [PMID:32438592]
20. HellströmS.SajantiA.SrinathA.BennettC.GirardR.JhaveriA.Common lipidomic signatures across distinct acute brain injuries in patient outcome predictionNeurobiol. Dis.204202510676210.1016/j.nbd.2024.10676239662533 [PMID:39662533]
21. HuoZ.YuL.YangJ.ZhuY.BennettD.A.ZhaoJ.Brain and blood metabolome for Alzheimer's dementia: findings from a targeted metabolomics analysisNeurobiol. Aging8620201231333178583910.1016/j.neurobiolaging.2019.10.014PMC6995427 [PMID:31785839]
22. HussainG.AnwarH.RasulA.ImranA.QasimM.ZafarS.Lipids as biomarkers of brain disordersCrit. Rev. Food Sci. Nutr.60320203513743061424410.1080/10408398.2018.1529653 [PMID:30614244]
23. JeterC.B.HergenroederG.W.WardN.H.MooreA.N.DashP.K.Human mild traumatic brain injury decreases circulating branched-chain amino acids and their metabolite levelsJ. Neurotrauma30820136716792356089410.1089/neu.2012.2491 [PMID:23560894]
24. JungJ.Y.LeeH.S.KangD.G.KimN.S.ChaM.H.BangO.S.1H-NMR-Based metabolomics study of cerebral infarctionStroke4252011128212882147480210.1161/STROKEAHA.110.598789 [PMID:21474802]
25. KabadiS.V.MaherT.J.Posttreatment with uridine and melatonin following traumatic brain injury reduces edema in various brain regions in ratsAnn. N. Y. Acad. Sci.1199120101051132063311510.1111/j.1749-6632.2009.05352.x [PMID:20633115]
26. KanehisaM.GotoS.KEGG: kyoto encyclopedia of genes and genomesNucleic Acids Res.281200027301059217310.1093/nar/28.1.27PMC102409 [PMID:10592173]
27. LiuH.LiW.AhmadM.RoseM.E.MillerT.M.YuM.Increased generation of cyclopentenone prostaglandins after brain ischemia and their role in aggregation of ubiquitinated proteins in neuronsNeurotox. Res.24220131912042335500310.1007/s12640-013-9377-4PMC3692569 [PMID:23355003]
28. LiuM.ZhouK.LiH.DongX.TanG.ChaiY.Potential of serum metabolites for diagnosing post-stroke cognitive impairmentMol. Biosyst.11122015328732962649068810.1039/c5mb00470e [PMID:26490688]
29. LiuZ.WatersJ.RuiB.Metabolomics as a promising tool for improving understanding of multiple sclerosis: a review of recent advancesBiomed. J.45420225946063504201810.1016/j.bj.2022.01.004PMC9486246 [PMID:35042018]
30. LuA.Y.DamisahE.C.WinklerE.A.GrantR.A.EidT.BulsaraK.R.Cerebrospinal fluid untargeted metabolomic profiling of aneurysmal subarachnoid hemorrhage: an exploratory studyBr. J. Neurosurg.32620186376413058550310.1080/02688697.2018.1519107 [PMID:30585503]
31. MaasA.I.R.MenonD.K.ManleyG.T.AbramsM.ÅkerlundC.AndelicN.Traumatic brain injury: progress and challenges in prevention, clinical care, and researchLancet Neurol.21112022100410603618371210.1016/S1474-4422(22)00309-XPMC10427240 [PMID:36183712]
32. MastrokoliasA.PoolR.MinaE.HettneK.M.van DuijnE.van der MastR.C.Integration of targeted metabolomics and transcriptomics identifies deregulation of phosphatidylcholine metabolism in Huntington's disease peripheral blood samplesMetabolomics1220161372752495610.1007/s11306-016-1084-8PMC4963448 [PMID:27524956]
33. MoX.PiL.YangJ.XiangZ.TangA.Serum indoleamine 2,3-dioxygenase and kynurenine aminotransferase enzyme activity in patients with ischemic strokeJ. Clin. Neurosci.21320144824862441229310.1016/j.jocn.2013.08.020 [PMID:24412293]
34. OftH.C.SimonD.W.SunD.New insights into metabolism dysregulation after TBIJ. Neuroinflammation21120241843907557810.1186/s12974-024-03177-6PMC11288120 [PMID:39075578]
35. OrešičM.PostiJ.P.Kamstrup-NielsenM.H.TakalaR.S.K.LingsmaH.F.MattilaI.Human serum metabolites associate with severity and patient outcomes in traumatic brain injuryEBioMedicine1220161181262766505010.1016/j.ebiom.2016.07.015PMC5078571 [PMID:27665050]
36. PangZ.ChongJ.ZhouG.de Lima MoraisD.A.ChangL.BarretteM.MetaboAnalyst 5.0: narrowing the gap between raw spectra and functional insightsNucleic Acids Res.49W12021W388W3963401966310.1093/nar/gkab382PMC8265181 [PMID:34019663]
37. PowersW.J.RabinsteinA.A.AckersonT.AdeoyeO.M.BambakidisN.C.BeckerK.Guidelines for the early management of patients with acute ischemic stroke: 2019 update to the 2018 guidelines for the early management of acute ischemic stroke: a guideline for healthcare professionals from the American heart association/American stroke associationStroke50122019e344e4183166203710.1161/STR.0000000000000211 [PMID:31662037]
38. RicciottiE.FitzGeraldG.A.Prostaglandins and inflammationArterioscler. Thromb. Vasc. Biol.315201198610002150834510.1161/ATVBAHA.110.207449PMC3081099 [PMID:21508345]
39. SajantiA.HellströmS.BennettC.SrinathA.JhaveriA.CaoY.Soluble urokinase-type plasminogen activator receptor and inflammatory biomarker response with prognostic significance after acute neuronal injury – a prospective cohort studyInflammation202410.1007/s10753-024-02185-1[Internet]PMC1233608439540961 [PMID:39540961]
40. SergeantS.RahbarE.ChiltonF.H.Gamma-linolenic acid, Dihommo-gamma linolenic, Eicosanoids and inflammatory processesEur. J. Pharmacol.785201677862708354910.1016/j.ejphar.2016.04.020PMC4975646 [PMID:27083549]
41. ShaoY.LiT.LiuZ.WangX.XuX.LiS.Comprehensive metabolic profiling of Parkinson's disease by liquid chromatography-mass spectrometryMol. Neurodegener.16202143348538510.1186/s13024-021-00425-8PMC7825156 [PMID:33485385]
42. ShinT.H.LeeD.Y.BasithS.ManavalanB.PaikM.J.RybinnikI.Metabolome changes in cerebral ischemiaCells97202016303264590710.3390/cells9071630PMC7407387 [PMID:32645907]
43. SidorovE.SangheraD.K.VanamalaJ.K.P.Biomarker for ischemic stroke using metabolome: a clinician perspectiveJ Stroke211201931413073244110.5853/jos.2018.03454PMC6372900 [PMID:30732441]
44. SrinathA.XieB.LiY.SoneJ.Y.RomanosS.ChenC.Plasma metabolites with mechanistic and clinical links to the neurovascular disease cavernous angiomaCommun. Med.312023353686916110.1038/s43856-023-00265-1PMC9984539 [PMID:36869161]
45. SunG.JiangF.HuS.ChengH.QuL.TaoY.Metabolomic analysis reveals potential biomarkers and serum metabolomic profiling in spontaneous intracerebral hemorrhage patients using UPLC/quadrupole time-of-flight MSBiomed. Chromatogr.3612022e524110.1002/bmc.524134505712 [PMID:34505712]
46. Svedung WettervikT.EngquistH.HowellsT.RostamiE.HilleredL.EnbladP.Arterial lactate in traumatic brain injury - relation to intracranial pressure dynamics, cerebral energy metabolism and clinical outcomeJ. Crit. Care6020202182253288260410.1016/j.jcrc.2020.08.014 [PMID:32882604]
47. TaoS.XiaoX.LiX.NaF.NaG.WangS.Targeted metabolomics reveals serum changes of amino acids in mild to moderate ischemic stroke and stroke mimicsFront. Neurol.142023115319310.3389/fneur.2023.1153193PMC1014058637122289 [PMID:37122289]
48. ThomasI.DickensA.M.PostiJ.P.CzeiterE.DubergD.SiniojaT.Serum metabolome associated with severity of acute traumatic brain injuryNat. Commun.131202225452022 May 103553807910.1038/s41467-022-30227-5PMC9090763 [PMID:35538079]
49. TibshiraniR.Regression shrinkage and selection via the lassoJ R Stat Soc Ser B Stat Methodol5811996267288
50. WangY.WangY.LiM.XuP.GuT.MaT.(1)H NMR-based metabolomics exploring biomarkers in rat cerebrospinal fluid after cerebral ischemia/reperfusionMol. Biosyst.9320134314392334098710.1039/c2mb25224d [PMID:23340987]
51. WielochT.SiesjöB.K.Ischemic brain injury: the importance of calcium, lipolytic activities, and free fatty acidsPathol. Biol.30519822692777048218 [PMID:7048218]
52. XiaJ.PsychogiosN.YoungN.WishartD.S.MetaboAnalyst: a web server for metabolomic data analysis and interpretationNucleic Acids Res.37Web Server issue2009W652W6601942989810.1093/nar/gkp356PMC2703878 [PMID:19429898]
53. YanE.B.FrugierT.LimC.K.HengB.SundaramG.TanM.Activation of the kynurenine pathway and increased production of the excitotoxin quinolinic acid following traumatic brain injury in humansJ. Neuroinflammation1220151102602514210.1186/s12974-015-0328-2PMC4457980 [PMID:26025142]
54. YangL.LvP.AiW.LiL.ShenS.NieH.Lipidomic analysis of plasma in patients with lacunar infarction using normal-phase/reversed-phase two-dimensional liquid chromatography–quadrupole time-of-flight mass spectrometryAnal. Bioanal. Chem.409122017321132222825129210.1007/s00216-017-0261-6 [PMID:28251292]
55. YoshimuraY.WakabayashiH.NaganoF.BiseT.ShimazuS.ShiraishiA.Elevated creatinine-based estimated glomerular filtration rate is associated with increased risk of Sarcopenia, Dysphagia, and reduced functional recovery after strokeJ. Stroke Cerebrovasc. Dis.302202110549110.1016/j.jstrokecerebrovasdis.2020.10549133253988 [PMID:33253988]
56. YoudenW.J.Index for rating diagnostic testsCancer31195032351540567910.1002/1097-0142(1950)3:1<32::aid-cncr2820030106>3.0.co;2-3 [PMID:15405679]
57. ZhangX.LuX.ShiQ.XuX.Q.LeungH.C.HarrisL.N.Recursive SVM feature selection and sample classification for mass-spectrometry and microarray dataBMC Bioinf.7200619710.1186/1471-2105-7-197PMC145699316606446 [PMID:16606446]
58. ZhaoX.ZhangY.StrongR.GrottaJ.C.AronowskiJ.15d-Prostaglandin J2 activates peroxisome proliferator-activated Receptor-γ, promotes expression of catalase, and reduces inflammation, behavioral dysfunction, and neuronal loss after intracerebral hemorrhage in ratsJ. Cerebr. Blood Flow Metabol.266200681182010.1038/sj.jcbfm.960023316208315 [PMID:16208315]
