---
pmid: "41383880"
pmc: "PMC12689267"
doi: "10.1002/dad2.70228"
title: "Machine learning models of Alzheimer's disease spectrum using blood tests"
journal: "Alzheimer's & Dementia : Diagnosis, Assessment & Disease Monitoring"
year: 2025
authors:
  - name: "Falasca Nicola Walter"
    affiliations:
      - "Department of Neuroscience, Imaging, and Clinical Sciences G. d'Annunzio University of Chieti‐Pescara Chieti Italy"
  - name: "Ferretti Antonio"
    affiliations:
      - "Department of Neuroscience, Imaging, and Clinical Sciences G. d'Annunzio University of Chieti‐Pescara Chieti Italy"
      - "UdA‐TechLab Research Center University \"G. d'Annunzio\" of Chieti‐Pescara Chieti Italy"
      - "Institute for Advanced Biomedical Technologies G. d'Annunzio University of Chieti‐Pescara Chieti Italy"
  - name: "Granzotto Alberto"
    affiliations:
      - "Department of Neuroscience, Imaging, and Clinical Sciences G. d'Annunzio University of Chieti‐Pescara Chieti Italy"
      - "Center for Advanced Studies and Technology – CAST G. d'Annunzio University of Chieti‐Pescara Chieti Italy"
  - name: "Sensi Stefano L."
    affiliations:
      - "Department of Neuroscience, Imaging, and Clinical Sciences G. d'Annunzio University of Chieti‐Pescara Chieti Italy"
      - "Institute for Advanced Biomedical Technologies G. d'Annunzio University of Chieti‐Pescara Chieti Italy"
      - "Center for Advanced Studies and Technology – CAST G. d'Annunzio University of Chieti‐Pescara Chieti Italy"
      - "Institute of Neurology SS Annunziata University Hospital, Chieti, University of Chieti‐Pescara Chieti Italy"
  - name: "Franciotti Raffaella"
    affiliations:
      - "Department of Neuroscience, Imaging, and Clinical Sciences G. d'Annunzio University of Chieti‐Pescara Chieti Italy"
      - "UdA‐TechLab Research Center University \"G. d'Annunzio\" of Chieti‐Pescara Chieti Italy"
      - "Institute for Advanced Biomedical Technologies G. d'Annunzio University of Chieti‐Pescara Chieti Italy"
  - name: "for the Alzheimer's Disease Neuroimaging Initiative (ADNI)"
---

# Machine learning models of Alzheimer's disease spectrum using blood tests

## Abstract

### INTRODUCTION

The diagnosis of Alzheimer's disease (AD) traditionally relies on cerebrospinal fluid and plasma levels of amyloid beta and phosphorylated tau. Although informative, these biomarkers represent a narrow, hypothesis‐driven approach to intercept the disease.

### METHODS

Data‐driven analysis was applied on demographic data, apolipoprotein E (APOE) ε4 allele, and 82 biomarkers obtained from blood tests of healthy controls (HC), mild cognitive impairment that remained stable within 36 months following blood collection (sMCI), and patients with AD.

### RESULTS

Statistical analyses revealed differences among groups in many cholesterol‐related analytes. APOE ε4 and analytes such as amino acids, lipoproteins, and fatty acids emerged as the most influential features in machine learning (ML) classification algorithms. Glycolysis‐related metabolites and amino and fatty acids were predictive for distinguishing sMCI and AD from HC.

### DISCUSSION

These findings support the hypothesis that systemic alterations also occur during the preclinical stages of dementia, which can be detected by ML models on blood biomarkers.

### Highlights

Machine learning on blood tests detects preclinical cognitive decline.Glycolysis metabolites are predictive for distinguishing stable MCI and AD from HC.Amino acids, lipoproteins, and fatty acids are the most predictive features.Inflammatory and metabolic biomarkers represent a biosignature of cognitive health.

## BACKGROUND

1

Imaging and molecular biomarkers, obtained from cerebrospinal fluid (CSF) or blood samples, are entering clinical practice to support physicians in the diagnosis of Alzheimer's disease (AD). 1 , 2 Assays aimed at evaluating amyloid beta (Aβ) and phosphorylated tau (p‐tau) levels with positron emission tomography (PET)–based tracers or from biological fluids are valuable for the early diagnosis of AD, for monitoring, and for distinguishing the condition from other forms of dementia. 3 In addition, there is great interest in the prognostic utility of such tools, with p‐tau–based models holding great promise as predictors of the future development of AD dementia in individuals with early signs of cognitive decline. 3 However, the use of imaging or peripheral biomarkers remains challenging and often limited to highly specialized clinical facilities. Compared to amyloid PET and CSF testing, blood biomarkers have significant practical advantages that may democratize the use of testing. These include the acceptability of blood draws by patients, accessibility of equipment and staff, and lower costs. 4

On the AD continuum, mild cognitive impairment (MCI) is identified as a transition stage between healthy aging and dementia. 5 Considered as the gateway to AD dementia, the MCI phase has drawn substantial attention for studies aimed at identifying prognostic biomarkers, with critical implications for diagnosis and patient management. Among the increasing number of genetic risk factors for AD, the apolipoprotein E (APOE) gene, which is associated with various cellular functions related to immune responses, endocytosis, and cholesterol metabolism, 6 remains the strongest and most prevalent and recently has been identified as an across‐disease trigger of neurodegeneration. 7 Heterozygosity and homozygosity for the ε4 allele of the APOE gene increase AD risk by 3‐ and 12‐fold, respectively. 8 APOE ε2 confers protection, whereas APOE ε3 is considered neutral. 9

Emerging evidence suggests that AD's etiology transcends the traditional linear model of Aβ dysmetabolism, leading to p‐tau accumulation and neuronal death. 10 , 11 More likely, multiple central and peripheral biological pathways—including cerebrovascular pathology, inflammation, vascular and endothelial injury, glucose metabolism, insulin signaling, and lipid processing— synergistically contribute to the AD‐related cognitive decline. 12 , 13 , 14 , 15 However, the intricate, nonlinear interactions among these pathways pose challenges in fully understanding the molecular changes and their roles in disease progression. 16

In this context, computer‐based statistical methods known as machine learning (ML) algorithms offer significant advantages for analyzing large datasets of biomarkers, looking for recurring patterns. The ability of these algorithms to handle high‐dimensional data and effectively classify complex, nonlinear relationships make these tools particularly well‐suited for predicting outcomes in large cohorts. However, current ML applications in publicly available datasets, like the Alzheimer's Disease Neuroimaging Initiative (ADNI) cohort, face critical gaps. First, most studies prioritize novel, specialized biomarkers (e.g., p‐tau217, neurofilament light chain [NfL], and glial fibrillary acidic protein [GFAP]) over routinely available clinical blood analytes despite their clinical practicality. Second, there is limited exploration of how AD‐risk genotypes, like APOE status, modulate routine biomarker patterns across disease stages. Third, existing models often lack reproducibility due to proper biobanking, appropriate blood handling, and preprocessing. 17 , 18

This observational cross‐sectional study aims at identifying possible differences in blood analyte values among healthy controls (HC), MCI individuals which remained stable within 36 months after blood collection (sMCI), and AD patients, as well the best combination of routinely performed and research‐grade circulating biomarkers helpful for classifying each group by employing supervised ML algorithms. The study, leveraging on the wealth of standardized information obtained from the ADNI dataset (https://adni.loni.usc.edu) aims to identify clinically accessible and cost‐effective blood analytes that can aid in predicting the course of AD.

## METHODS

2

### Participants

2.1

Demographic information (age, sex, education, ethnicity, and race), APOE ε4 genotype, Aβ, p‐tau, and 82 analytes from blood tests were obtained from the ADNI database for HC, sMCI, and AD patients. All the data used in this study are available from the ADNI database. HC, sMCI, and AD subjects were then selected for the study. HC and sMCI patients were included only if they remained stable within 36 months following blood collection. AD patients were included if they had not changed their diagnosis in the follow‐up visits.

RESEARCH IN CONTEXT Systematic review: The diagnosis of mild cognitive impairment (MCI) and dementia due to Alzheimer's disease (AD) relies on a hypothesis‐driven approach quantifying tau and amyloid in cerebrospinal fluid, plasma, and imaging scans. However, the use of these biomarkers remains challenging and often limited to highly specialized clinical facilities. Interpretation: The current data‐driven study indicated that machine learning algorithms applied to blood test analytes can effectively distinguish individuals with MCI and AD from healthy controls. The findings showed that immune, inflammatory, and metabolic biomarkers collectively represent a biological signature of cognitive health. This approach can potentially streamline the diagnostic process and make early detection more feasible in diverse clinical settings. Future directions: Future research should integrate non‐invasive circulating biomarkers with amyloid beta deposition, tau accumulation, and neurofilament light chain levels to enhance our understanding of the relationship between peripheral alterations and AD pathology, potentially leading to more accurate and early diagnoses.

The ADNI dataset was launched in 2003 as a public–private partnership led by Principal Investigator Michael W. Weiner, MD. The clinical coordination center of ADNI established a network of clinical sites. It developed the clinical protocol and informed consent, which is distributed to the sites for local institutional review board ethical approval. One such institution is the Office for the Protection of Research Subjects at the University of Southern California. Participants provided written informed consent for the study. More details can be found at adni.loni.usc.edu. The primary goal of the ADNI has been to test whether serial magnetic resonance imaging (MRI), PET, other biological markers, and clinical and neuropsychological assessment can be combined to measure the progression of MCI and early AD.

### Peripheral biomarkers

2.2

Peripheral biomarkers included 82 analytes belonging to 12 major metabolic groups: amino acids, apolipoproteins, cholesterol, fatty acids, fluid balance, glycolysis metabolites, ketone bodies, lipoprotein, other lipids, phospholipids, total lipids, and triglycerides. All variables are listed in Table 1. In a subset of the study cohort, Aβ42 and p‐tau181 values from CSF were also included.

**TABLE 1: List of all analytes included in the prediction models.**

| Metabolite group | Analyte | Assay availability | Origin |
|---|---|---|---|
| Amino acids | ALA, Alanine (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | GLN, Glutamine (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | GLY, Glycine (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | HIS, Histidine (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | ILE, Isoleucine (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | LEU, Leucine (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | TOTAL BCAA, Total concentration of branched‐chain amino acids (leucine + isoleucine + valine) [mmol/l] | Research‐grade metabolomics | LC‐MS |
|   | VAL, Valine (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | PHE, Phenylalanine (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | TYR, Tyrosine (mmol/L) | Research‐grade metabolomics | LC‐MS |
| Apolipoproteins | APOA1, Apolipoprotein A1 (g/L) | Research‐grade metabolomics | LC‐MS |
|   | APOB, Apolipoprotein B (g/L) | Research‐grade metabolomics | LC‐MS |
|   | APOB_BY_APOA1, Ratio of apolipoprotein B to apolipoprotein A1 | Research‐grade metabolomics | LC‐MS |
| Cholesterol | LDL C, low‐density lipoprotein (LDL) cholesterol (mmol/L) | Routine clinical test | Standard clinical chemistry |
|   | LDL CE, Cholesteryl esters LDL (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | LDL FC, Free cholesterol in LDL (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | NON HDL C, Total cholesterol minus HDL‐C (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | REMNANT C, Remnant cholesterol (non‐HDL, non‐LDL ‐cholesterol) (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | TOTAL C, Total cholesterol (mmol/L) | Routine clinical test | Standard clinical chemistry |
|   | TOTAL CE, Total esterified cholesterol (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | TOTAL FC, Total free cholesterol (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | VLDL C, Very Low‐Density Lipoprotein (VLDL) cholesterol (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | VLDL CE, Cholesteryl esters in VLDL (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | VLDL FC, Free cholesterol in VLDL (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | HDL CE, Cholesteryl esters in high‐density lipoprotein (HDL) (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | HDL FC, Free cholesterol in HDL (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | CLINICAL LDL C, Clinical LDL cholesterol (mmol/L) | Routine clinical test | Standard clinical chemistry |
| Fatty acids | LA, Linoleic acid (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | LA PCT, Ratio of linoleic acid to total fatty acids (%) | Research‐grade metabolomics | LC‐MS |
|   | MUFA, Monounsaturated fatty acids (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | MUFA PCT, Ratio of monounsaturated fatty acids to total fatty acids (%) | Research‐grade metabolomics | LC‐MS |
|   | OMEGA 3 (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | OMEGA 3 PCT, Ratio of omega‐3 fatty acids to total fatty acids (%) | Research‐grade metabolomics | LC‐MS |
|   | OMEGA 6 (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | OMEGA 6 BY OMEGA 3, Ratio of omega‐6 fatty acids to omega‐3 fatty acids | Research‐grade metabolomics | LC‐MS |
|   | OMEGA 6 PCT, Ratio of omega‐6 fatty acids to total fatty acids (%) | Research‐grade metabolomics | LC‐MS |
|   | PUFA, Polyunsaturated fatty acids (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | PUFA BY MUFA, Ratio of polyunsaturated fatty acids to monounsaturated fatty acids | Research‐grade metabolomics | LC‐MS |
|   | PUFA PCT, Ratio of polyunsaturated fatty acids to total fatty acids (%) | Research‐grade metabolomics | LC‐MS |
|   | SFA, Saturated fatty acids (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | SFA PCT, Ratio of saturated fatty acids to total fatty acids (%) | Research‐grade metabolomics | LC‐MS |
|   | DHA, Docosahexaenoic acid (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | DHA PCT, Ratio of docosahexaenoic acid to total fatty acids (%) | Research‐grade metabolomics | LC‐MS |
|   | TOTAL FA, Total fatty acids (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | UNSATURATION, Degree of unsaturation | Research‐grade metabolomics | LC‐MS |
| Fluid Balance | ALBUMIN, (g/L) | Routine clinical test | Standard clinical chemistry |
|   | CREATININE, (µmol/L) | Routine clinical test | Standard clinical chemistry |
| Glycolysis‐related metabolites | CITRATE, (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | GLUCOSE, (mmol/L) | Routine clinical test | Standard clinical chemistry |
|   | GLYCEROL, (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | LACTATE, (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | PYRUVATE, (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | GLYCA, Glycoprotein acetyls (mmol/L) | Research‐grade metabolomics | LC‐MS |
| Ketone bodies | ACETATE, (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | ACETOACETATE, (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | ACETONE, (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | BOHBUTYRATE, 3‐Hydroxybutyrate (mmol/L) | Research‐grade metabolomics | LC‐MS |
| Lipoprotein | HDL‐P, Concentration of HDL particles (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | HDL‐C, Cholesterol in very large HDL (mmol/L) | Routine clinical test | Standard clinical chemistry |
|   | HDL SIZE, Average diameter for HDL particles (nm) | Research‐grade metabolomics | LC‐MS |
|   | LDL‐P, Concentration of LDL particles (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | LDL SIZE, Average diameter for LDL particles (nm) | Research‐grade metabolomics | LC‐MS |
|   | VLDL‐P, Concentration of VLDL particles (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | VLDL SIZE, Average diameter for VLDL particles (nm) | Research‐grade metabolomics | LC‐MS |
|   | TOTAL P, Total concentration of lipoprotein particles (mmol/L) | Research‐grade metabolomics | LC‐MS |
| Other lipids | CHOLINES, Total cholines (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | PHOSPHATIDYLC, Phosphatidylcholines (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | PHOSPHOGLYC, Phosphoglycerides (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | SPHINGOMYELINS, (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | TG BY PG, Ratio of triglycerides to phosphoglycerides | Research‐grade metabolomics | LC‐MS |
| Phospholipids | HDL‐PL, Phospholipids in HDL (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | VLDL‐PL, Phospholipids in VLDL (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | TOTAL PL, Total phospholipids in lipoprotein particles (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | LDL‐PL, Phospholipids in LDL (mmol/L) | Research‐grade metabolomics | LC‐MS |
| Total lipids | HDL L, Total lipids in HDL (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | LDL L, Total lipids in LDL (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | TOTAL L, Total lipids in lipoprotein particles (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | VLDL L, Total lipids in VLDL (mmol/L) | Research‐grade metabolomics | LC‐MS |
| Triglycerides | HDL TG, Triglycerides in HDL (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | LDL TG, Triglycerides in LDL (mmol/L) | Research‐grade metabolomics | LC‐MS |
|   | TOTAL TG, Total triglycerides (mmol/L) | Routine clinical test | Standard clinical chemistry |
|   | VLDL TG, Triglycerides in VLDL (mmol/L) | Research‐grade metabolomics | LC‐MS |


### Statistical analysis

2.3

Data are reported as mean ± standard deviation (SD) or percentage for continuous and dichotomous variables. Age, education, Aβ42, and p‐tau181 were compared among the three groups (HC, sMCI, and AD) using univariate analysis of variance (ANOVA). Receiver‐operating characteristic (ROC) analyses were performed on Aβ and p‐tau values to estimate the diagnostic accuracy of these biomarkers in the selected sample.

Multivariate analysis of covariance (MANCOVA) was performed to compare analytes among groups. Thus, analytes were used as multiple dependent variables; group (HC, sMCI, and AD) as an independent variable; and age, sex, education, ethnicity, and race as covariates. The assumption of homogeneity of variance across the groups was verified by Levene's test. The Bonferroni test was applied for the post hoc comparisons. Nonparametric statistics were applied for the comparison of dichotomous variables (sex, APOE ε4 status, ethnicity, and race) among the three groups. The Kruskal–Wallis test was applied for the post hoc analyses.

The significant analytes obtained from MANOVA and with the largest effect size among analytes in the same metabolite group were correlated with APOE ε4 status (absence or presence of at least one ε4 allele), correcting for age, sex, education, ethnicity, and race. These analytes were also correlated with education, correcting for age, sex, ethnicity, and race. For all statistical comparisons, the level of significance was set at 0.05.

### ML algorithms

2.4

Optimized support vector machine (SVM) algorithm, implemented in Matlab 2023, was applied to the dataset, including all 82 analytes, age, sex, education, and APOE ε4 status. An ML model was estimated for each of the following binary classifications: sMCI versus HC, AD versus HC, and AD versus sMCI. As the first step, the algorithm splits the entire dataset into train, validation, and test datasets randomly. Data were used for the training (70% of the subjects) and for the validation phase (15% of subjects). SVM algorithms were used to train and validate the models. Specifically, optimized SVM was used to find the best hyperparameter values that improve the performance of the model. We used a linear Kernel function and 30 iterations in the Bayesian optimization process. This Bayesian approach is an advanced hyperparameter tuning technique which allows for evaluating the object function, reducing the search process within the parameter space. 19 This step is critical because ML models need to set hyperparameters to best tune the algorithm for data testing. After building the model, the testing phase was applied to the remaining 15% of the dataset.

To evaluate the performance of each ML algorithm, accuracy (ACC), positive predictive value (PPV), negative predictive value (NPV), sensitivity, specificity, and area under the ROC curve (AUC) were calculated for each model in the test datasets.

### Predictive features

2.5

The classification algorithm that obtained the best accuracy after the tuning procedure was selected for further analysis using fewer variables. The ReliefF test was used as a feature‐ranking algorithm to calculate a feature score for each variable. ReliefF is an evaluation filter algorithm capable of detecting feature dependencies using the concept of nearest neighbors, and selects top‐scoring features (feature selection procedure). The output score ranges from −1 to 1, with more positive scores indicating more predictive features. We used a forward selection process that retains an additional variable as a predictive feature only if it improves the model's performance, increasing AUC by at least 1%, compared to that of the previous model obtained so far.

The SHAP (SHapley Additive exPlanations) algorithm 20 was applied to provide a consistent and objective explanation of how each feature impacts the model's prediction. SHAP assigns an importance value to each feature, indicating how much each feature predicts the target. The magnitude of the SHAP value is a measure of how strong the effect is. Features with positive SHAP values improve the prediction, whereas those with negative values worsen the prediction.

## RESULTS

3

### Statistical results

3.1

Age, sex, and APOE ε4 status were statistically different among groups. sMCI subjects were younger when compared to AD patients (p = 0.02), female prevalence was higher in HC than in sMCI (p = 0.001) and AD (p = 0.01), and APOE ε4 prevalence was lower in HC than in sMCI and AD, and higher in AD than in sMCI (all p values = 0.001). Statistical analyses on analytes using age, sex, education, ethnicity, and race as covariates showed significant differences among cohorts on seven metabolite groups (i.e., amino acids, cholesterol, fatty acids, glycolysis‐related metabolites, other lipids, phospholipids, and total lipids). Post hoc analyses showed that all analytes were significantly different between the AD, HC, and sMCI groups. Total concentration of branched‐chain amino acids (BCAAs, leucine + isoleucine + valine), total esterified cholesterol, omega 6, glycoprotein acetyls (glyca), sphingomyelin, total phospholipids in lipoprotein particles, and total lipids in lipoprotein particles were the analytes with the best effect size for each metabolite group. The boxplot distribution of these analytes is shown in Figure 1. No significant difference was found between sMCI and HC. Participants’ characteristics and statistical results are shown in Table 2. No significant partial correlation was found between the analytes and APOE ε4. Instead, significant partial correlation was found between total esterified cholesterol and APOE ε4 when correcting for sex (ρ = 0.076, p = 0.038). Significant partial correlations were also found between education and BCAA (ρ = –0.073, p = 0.045) in cholesterol group, omega 6 (ρ = –0.159, p = 0.013·10−3) in fatty acids group, glyca (ρ = –0.151, p = 0.034·10−3) in glycolysis‐related metabolites, and total lipids in lipoprotein particles (ρ = −0.110, p = 0.003).

> **FIGURE 1: The boxplot distribution of the significant analytes showing the best effect size for each metabolite group. AD, Alzheimer's disease; glyca, glycoprotein acetyls; HC, healthy control; P‐TAU, phosphorylated tau; sMCI, stable mild cognitive impairment; TOTAL BCAA, total concentration of branched‐chain amino acids (leucine + isoleucine + valine); TOTAL CE, total esterified cholesterol; TOTAL L, total lipids in lipoprotein particles; TOTAL PL, total phospholipids in lipoprotein particles.**

**TABLE 2: Participants’ characteristics (mean ± SD) and statistical results on demographic variables and analytes corrected for age, sex, education, ethnicity, and race.**

|   |   |   |   |   | Post hoc |   |   |
|---|---|---|---|---|---|---|---|
| Demographic |   |   |   |   |   |   |   |
| Age a | 73.4 ± 5.7 | 72.9 ± 7.3 | 74.5 ± 7.2 | 0.02 | 0.9 | 0.2 | 0.01 |
| Sex, male % b | 46.4 | 63.2 | 59.2 | 0.01·10−1 | 0.01·10−1 | 0.01 | 1.0 |
| Education, y a | 16.4 ± 2.7 | 16.0 ± 2.7 | 15.9 ± 2.7 | 0.04 | 0.16 | 0.05 | 1.0 |
| Ethnicity b |   |   |   | 0.25 |   |   |   |
| Hispanic | 11 (4%) | 7 (3%) | 7 (3%) |   |   |   |   |
| Non‐Hispanic | 237 (95%) | 243 (97%) | 243 (97%) |   |   |   |   |
| Unknown | 2 (1%) | 0 | 0 |   |   |   |   |
| Race b |   |   |   | 0.30 |   |   |   |
| Black | 12 (5%) | 5 (2%) | 5 (2%) |   |   |   |   |
| American Indian | 1 (0%) | 1 (0%) | 0 |   |   |   |   |
| Asian | 3 (1%) | 5 (2%) | 4 (2%) |   |   |   |   |
| White | 232 (93%) | 237 (95%) | 240 (96%) |   |   |   |   |
| More than one | 2 (1%) | 2 (1%) | 1 (0%) |   |   |   |   |
| Genetic b |   |   |   |   |   |   |   |
| APOE ε4 (%) | 23.2 | 44.0 | 63.2 | 0.01·10−1 | 0.01·10−1 | 0.01·10−1 | 0.01·10−1 |
| Metabolite group c |   |   |   |   |   |   |   |
| Analyte |   |   |   |   |   |   |   |
| Amino acids |   |   |   |   |   |   |   |
| LEU | 0.12 ± 0.04 | 0.12 ± 0.03 | 0.11 ± 0.02 | 7.87·10−12 | 1.00 | 7.06·10−4 | 7.79·10−3 |
| TOTAL BCAA | 0.41 ± 0.08 | 0.41 ± 0.08 | 0.39 ± 0.07 | 3.06·10−13 | 1.00 | 1.02·10−3 | 6.05·10−3 |
| VAL | 0.23 ± 0.04 | 0.24 ± 0.04 | 0.22 ± 0.04 | 7.11·10−11 | 1.00 | 6.85·10−4 | 3.71·10−3 |
| Cholesterol |   |   |   |   |   |   |   |
| Clinical LDL C | 2.78 ± 0.66 | 2.73 ± 0.73 | 2.91 ± 0.79 | 1.16·10−15 | 1.00 | 1.97·10−2 | 1.13·10−2 |
| LDL C | 1.94 ± 0.41 | 1.91 ± 0.45 | 2.02 ± 0.50 | 1.04·10−15 | 1.00 | 1.77·10−2 | 1.31·10−2 |
| LDL CE | 1.42 ± 0.30 | 1.40 ± 0.33 | 1.48 ± 0.37 | 1.60·10−15 | 1.00 | 2.13·10−2 | 1.49·10−2 |
| LDL FC | 0.52 ± 0.11 | 0.51 ± 0.13 | 0.54 ± 0.13 | 3.10·10−15 | 1.00 | 1.46·10−2 | 1.28·10−2 |
| NON HDL C | 3.41 ± 0.73 | 3.33 ± 0.82 | 3.54 ± 0.91 | 4.37·10−17 | 1.00 | 3.72·10−2 | 7.40·10−3 |
| TOTAL C | 4.96 ± 0.88 | 4.81 ± 0.98 | 5.10 ± 1.01 | 4.42·10−29 | 1.00 | 1.27·10−2 | 9.36·10−4 |
| TOTAL CE | 3.66 ± 0.65 | 3.54 ± 0.72 | 3.75 ± 0.73 | 4.38·10−30 | 1.00 | 1.11·10−2 | 1.05·10−3 |
| TOTAL FC | 1.31 ± 0.24 | 1.27 ± 0.27 | 1.35 ± 0.29 | 4.78·10−25 | 1.00 | 2.33·10−2 | 1.05·10−3 |
| Fatty acids |   |   |   |   |   |   |   |
| LA | 3.99 ± 0.73 | 3.86 ± 0.77 | 4.13 ± 0.82 | 2.14·10−21 | 5.96·10−1 | 3.05·10−2 | 3.16·10−4 |
| OMEGA 6 | 4.94 ± 0.73 | 4.82 ± 0.75 | 5.06 ± 0.79 | 2.21·10−29 | 9.32·10−1 | 2.48·10−2 | 7.10·10−4 |
| Glycolysis |   |   |   |   |   |   |   |
| Glyca | 0.88 ± 0.13 | 0.87 ± 0.12 | 0.91 ± 0.13 | 1.22·10−13 | 1.00 | 6.02·10−3 | 1.59·10−2 |
| Other lipids |   |   |   |   |   |   |   |
| Sphingomyelin | 0.49 ± 0.08 | 0.48 ± 0.08 | 0.50 ± 0.08 | 5.79·10−34 | 1.00 | 9.34·10−4 | 5.56·10−4 |
| Phospholipids |   |   |   |   |   |   |   |
| LDL PL | 0.67 ± 0.13 | 0.66 ± 0.14 | 0.70 ± 0.16 | 4.59·10−15 | 1.00 | 1.79·10−2 | 1.41·10−2 |
| TOTAL PL | 3.07 ± 0.47 | 2.95 ± 0.50 | 3.10 ± 0.51 | 1.98·10−40 | 6.30·10−1 | 8.21×10−2 | 1.50×10−3 |
| Total lipids |   |   |   |   |   |   |   |
| LDL L | 2.76 ± 0.55 | 2.73 ± 0.61 | 2.87 ± 0.68 | 8.48·10−30 | 1 | 1.87·10−2 | 1.25·10−2 |
| TOTAL L | 9.23 ± 1.52 | 8.92 ± 1.65 | 9.43 ± 1.74 | 4.75×10−6 | 6.50·10−1 | 4.68·10−2 | 7.17·10−4 |
|   | HC (n = 122) | sMCI (198) | AD (n = 139) | Main Effect | HC vs. sMCI | HC vs. AD | sMCI vs. AD |
| Aβ42 a (ng/L) | 1267.9 ± 37.6 | 1119.8 ± 32.6 | 701.1 ± 25.1 | 5.71×10−28 | 0.05×10−1 | 7.29×10−26 | 9.91×10−19 |
| p‐tau181 a (ng/L) | 21.3 ± 0.9 | 24.5 ± 0.8 | 35.0 ± 1.3 | 1.94×10−18 | 0.08 | 8.87×10−17 | 6.95×10−13 |


### Machine learning results

3.2

For all three binary classifications performed in the testing dataset, the ML models reached a specificity higher than 60% and a sensitivity higher than 50%. The AUC was different among the three models, reaching 0.89 and 0.68 for the classification of AD from HC and sMCI, respectively, and 0.60 for the classification of sMCI from HC. The AUC values of ML models (0.89, 0.60) were greater or similar to the ones obtained from Aβ (0.86, 0.59) and p‐tau (0.79, 0.59) values for AD and sMCI classifications from HC. The diagnostic performance of the ML model (0.68) was lower than that of Aβ (0.77) and p‐tau (0.72) for the classification of AD from sMCI.

The ReliefF test used to predict the target with fewer variables showed that 18, 24, and 22 variables were the most important features for distinguishing sMCI from HC, AD from HC, and AD from sMCI, respectively. Table 3 shows all the performance indices in the testing dataset for all the binary classifications when all variables were used and when only the most discriminative features were used in the models.

**TABLE 3: ML performance indices for the test phases using all features (82 analytes, age, sex, education, and APOE ε4), and the most important predictors for each model. ROC analyses on Aβ42 and p‐tau181.**

|   | sMCI (n = 250) vs HC (n = 250) | AD (n = 250) vs HC (n = 250) | AD (n = 250) vs sMCI (n = 250) |   |   |   |
|---|---|---|---|---|---|---|
| ACCURACY | 0.60 | 0.58 | 0.85 | 0.80 | 0.69 | 0.61 |
| PPV | 0.62 | 0.59 | 0.83 | 0.83 | 0.74 | 0.61 |
| NPV | 0.59 | 0.57 | 0.88 | 0.78 | 0.66 | 0.62 |
| SENSITIVITY | 0.52 | 0.52 | 0.89 | 0.76 | 0.61 | 0.59 |
| SPECIFICITY | 0.68 | 0.64 | 0.81 | 0.84 | 0.78 | 0.63 |
| AUC | 0.60 | 0.58 | 0.89 | 0.86 | 0.68 | 0.65 |


### Diagnostic features

3.3

Across the three binary classifications, APOE ε4, education, leucine, the total concentration of BCAAs, valine, the average diameter of low‐density lipoprotein (LDL) particles, and the ratio of omega‐6 to omega‐3 fatty acids, included in the amino acids, lipoprotein, and fatty acids categories, were the most predictive features. Sex, docosahexaenoic acid (fatty acids category), and glycerol (glycolysis‐related metabolite) were common predictors for the classification of sMCI and AD patients from HC. Alanine (amino acids category), sphingomyelins (other lipids), and glucose (glycolysis‐related metabolite) were the most important analytes for the classification of sMCI from HC and AD. Age, glyca (glycolysis‐related metabolite), histidine, phenylalanine (amino acids), and creatinine (fluid balance) were the most important variables for the classification of AD from HC and sMCI. Within the cholesterol category, only free cholesterol and cholesteryl esters in high‐density lipoprotein (HDL) effectively distinguished AD from HC and sMCI, respectively. In total, 39 of the 86 variables were selected as predictors across the models.

Figure 2 shows the Shapley values for the most important predictors for each binary classification model.

> **FIGURE 2: Shapley values distribution in the test dataset (n = 75) for the top predictors in the classification of sMCI from HC, of AD from HC, and AD from sMCI. Low and high values are shown in blue and red, respectively. AD, Alzheimer's disease; HC, healthy control; sMCI, stable mild cognitive impairment.**

## DISCUSSION

4

In this study, the statistical comparisons on the 82 analyzed circulating biomarkers revealed significant differences between AD and HC for 19 analytes belonging to seven metabolite categories. Among all significant analytes, the total phospholipids in lipoprotein particles showed the greatest statistical effect size (pη 2 = 0.24). However, in the MANCOVA, for each of the seven significant metabolite groups, at least one analyte showed a medium or large effect size, suggesting that the combination of these analytes is clinically meaningful despite each analyte showing overlapping values among groups (Figure 1).

Leveraging a large sample size (750 subjects) and a high‐dimensional dataset (82 analytes, age, sex, education, and APOE ε4), we applied ML approaches to explore potential classification patterns. With the development of ML algorithms, there is growing interest in non‐invasive biomarkers obtained from serological tests, which could provide a potential approach for identifying systemic manifestations of cognitive deterioration and AD pathology. 3 , 21 Among the 82 possible blood‐based biomarkers used for creating the classification models, only a few analytes, mainly from amino acids, fatty acids, glycolysis‐related metabolites, lipoproteins, and other lipid categories, emerged as the most discriminative features for the ML‐based classification. Specifically, glycerol and docosahexaenoic acid in the fatty acids group ranked among the top predictors for classifying sMCI and AD versus HC. However, the model showed lower performance in classifying sMCI versus HC than in classifying AD versus HC. This result was in line with the poor ability to classify sMCI from HC by means of Aβ and p‐tau, and with the lack of significant differences between analyte values of sMCI and HC. The presence of APOE ε4 was the top predictor for all classification models, due to the significant higher prevalence in AD (63%) versus sMCI (44%) and HC (23%). A similar effect was observed for sex, which ranked among the most important predictors for distinguishing sMCI and AD from HC. Male sex was more prevalent in classifications toward sMCI (63%) and AD (59%) compared with HC (46%) (Figure 2).

Previous studies reported associations between the apoE ε4 variant and plasma levels of fatty acids, 22 blood triglyceride, 23 and cholesterol concentrations 24 due to the interaction of fatty acids, lipid metabolism, and APOE. 25 Other studies showed that elderly individuals with elevated plasma cholesterol have an increased susceptibility to dementia and AD 26 compared with normocholesterolemic subjects, an effect likely mediated by defective cholesterol catabolism in APOE ε4 carriers. 27 , 28 Although brain cholesterol is exclusively synthesized in situ, peripheral cholesterol alterations may act as a proxy of central disturbances, especially in APOE ε4 carriers. Our study showed altered cholesterol analytes in patients with AD (Table 2), confirming the possible association with APOE ε4 status and cholesterol alterations. 29 Lipids and triglycerides, which were involved in ML models, are closely associated with cognitive deficits in AD. 29 Besides their role as energy substrates, triglycerides can participate in neuroinflammatory processes mediated by astrocyte and microglia activation. 30 The idea that some of the reported alterations have a neuroinflammatory drive is further supported by changes in glycoprotein acetyl levels, an inflammatory marker. Indeed, glyca was the most important peripheral biomarker for distinguishing AD from HC and sMCI individuals (Figure 2). Altered levels of glycoprotein acetyls have been associated with poorer cognitive performances, 31 and they have recently emerged as novel biomarkers of inflammation‐related cardiovascular dysfunction, 32 pointing to a possible mechanistic link between chronic systemic inflammation and cerebrovascular contributions to neurodegeneration (Figure 3).

> **FIGURE 3: Biological pathways and peripheral biomarkers associated with cognitive decline across the AD continuum. The pictogram summarizes the systemic interactions between lipid metabolism, glycolysis/energy metabolism, and inflammation/immune signaling, highlighting key blood‐based biomarkers identified in the study. Lipid metabolism is strongly modulated by APOE ε4 status and includes alterations in cholesterol, triglycerides, fatty acids, and sphingomyelins, which may be converted into neurotoxic ceramides. Glycolysis‐related markers suggest metabolic dysregulation with relevance to mitochondrial dysfunction and the “type 3 diabetes” hypothesis of AD. Inflammation is indexed by glycoprotein acetyls, a systemic marker associated with cognitive impairment and cardiovascular dysfunction. Together these biomarkers represent systemic signatures predictive of the transition from healthy control (HC) to mild cognitive impairment (MCI) and Alzheimer's disease (AD), as identified by machine learning models. APOE, apolipoprotein E; HDL, high‐density lipoprotein; LDL, low‐density lipoprotein; sMCI, stable mild cognitive impairment.**

Glycolysis‐related metabolites were critical features for distinguishing sMCI from HC (i.e., lactate, glycerol, and glucose) and AD (glyca and glucose) (Figure 3). Metabolites related to glycolysis are associated with type 2 diabetes, and their dysregulation has been strongly linked to memory deficits, cognitive decline, and many of the characteristic symptoms that have been displayed in AD. 15 Previous studies have suggested that AD may represent a brain‐specific form of diabetes, often referred as a “type 3” form of diabetes. 33 , 34 Although impaired insulin signaling in AD is distinct from that in diabetes mellitus, the peripheral glycolysis‐related alterations identified in our analysis may represent an early warning sign of broader systemic endocrine changes that reflect underlying neuroendocrine disturbances. Whether this role of glucose translates into pathological cognitive decline or increases dementia risk in old age remains unclear. 35 Taken together, these findings suggest that type 2 diabetes acts as a cofactor in the pathogenesis and progression of AD, and, at the same time, might be reflective of a much broader endocrine alteration that also affects the brain. 33 Overall, our findings reinforce the hypothesis that metabolic dysregulation contributes to both the onset and progression of AD, possibly serving as a systemic marker of neurodegenerative processes. 36 Previous studies showed that, in preclinical mouse models of AD, the astrocyte‐neuron lactate shuttle is required for long‐term memory formation, 37 a process found to be impaired in AD settings. 38 Neuroprotective properties are also associated with fatty acids in cognitive aging studies. 39

It is important to notice that in our study design, we included only sMCI patients who did not convert to dementia within 36 months after blood collection. The sMCI group also had a lower prevalence of APOE ε4 carriers (44%) compared to the AD group (63%). This may suggest that the sMCI cohort represents individuals at a preclinical disease stage or with alternative pathological pathways distinct from AD dementia.

Our ML classification models also showed that leucine, valine, the BCAA, the average diameter for LDL particles, and the ratio of omega‐6 to omega‐3 fatty acids included in amino acids and lipoprotein and fatty acids categories were the most predictive features for all three classification models (Figure 2). Alanine from the amino acids category and sphingomyelins were common predictors for distinguishing sMCI from HC and AD. The link between BCAAs and the risk of AD is complex and poorly understood, with conflicting findings suggesting that these metabolites may not be a direct causal factor. 40 , 41 Conversely, elevated levels of sphingomyelin were consistently found in the brain and in the CSF of AD patients compared to non‐demented controls. 42 , 43 , 44 , 45 A potential mechanistic link involves the conversion of sphingomyelin into ceramides, bioactive lipids (not present in our dataset) known to contribute to neuronal aging, cell death, and the progression of AD. 46 , 47 Overall, these findings are consistent with previous studies suggesting that amino acids, lipids, immune, inflammatory, and metabolic biomarkers—along with their complex, non‐linear interactions—collectively represent a biological signature of cognitive health. 48 , 49

In conclusion, the findings obtained from traditional statistical analysis and ML indicate that the subset of analytes highlighted by both approaches can effectively separate individuals with MCI or AD from HC. Although not all analytes are part of routine clinical chemistry panels, our findings support the utility of accessible metabolomic profiling, which is becoming increasingly feasible in specialized clinical and translational research settings. Our ML models help to identify a subset of blood‐based biomarkers for the classification of sMCI from HC and AD and for AD from HC and sMCI (Figure 3).

However, several challenges remain in widespread ML applications, including data heterogeneity, model interpretability, and limited generalizability.

In our study, the sample size of each group was balanced in the training, validation, and test phases. Indeed, the imbalance of groups can lead to a falsely perceived positive effect of a model's accuracy, because the input data has bias toward one class, which results in the trained model mimicking that bias. In addition, potential overfitting of the ML algorithms was reduced using unseen data as a test dataset and performing the hyperparameter optimization.

In our study model, explainability was enhanced using the SHAP technique. However, collaborative efforts between technologists and clinicians are essential to unlock the full potential of ML in Alzheimer's research and care. In addition, a crucial step toward the clinical implementation of accurate prediction models is external validation, which is necessary to determine a prediction model's reproducibility and generalizability to different cohorts of patients across various regions, countries, or care settings.

The utilization of blood‐based biomarkers offers a less‐invasive, more accessible, and cost‐effective alternative to traditional diagnostic methods such as CSF analysis, and MRI and PET scans.

Future research should integrate data on Aβ deposition, tau accumulation, and NfL levels with blood‐based biomarkers and should stratify or adjust for key confounders such as body mass index, comorbidities (e.g., diabetes, cardiovascular disease), and medications. Such comprehensive analyses could enhance our understanding of the relationship between peripheral biomarker alterations and AD pathology, potentially leading to more accurate and early diagnoses (Supporting Information).

## CONFLICT OF INTEREST STATEMENT

The authors have no conflicts of interest to disclose. Any author disclosures are available in the supporting information.

## CONSENT STATEMENT

The Alzheimer's Disease Neuroimaging Initiative (ADNI) project received approval from the institutional review boards of all participating institutions, and all participants provided informed written consent.

## Supporting information

Supporting Information

## Acknowledgements

ACKNOWLEDGMENTSData collection and sharing were supported by the Alzheimer's Disease Neuroimaging Initiative (ADNI) (National Institutes of Health Grant U01 AG024904) and DOD ADNI (Department of Defense award number W81XWH‐12‐2‐0012). ADNI is supported by the National Institute on Aging, the National Institute of Biomedical Imaging and Bioengineering, and through generous contributions from the following entities: AbbVie, Alzheimer's Association; Alzheimer's Drug Discovery Foundation; Araclon Biotech; BioClinica, Inc.; Biogen; Bristol‐Myers Squibb Company; CereSpir, Inc.; Cogstate; Eisai Inc.; Elan Pharmaceuticals, Inc.; Eli Lilly and Company; EuroImmun; F. Hoffmann‐La Roche Ltd and its affiliated company Genentech, Inc.; Fujirebio; GE. Healthcare; IXICO Ltd.; Janssen Alzheimer Immunotherapy Research & Development, LLC.; Johnson & Johnson Pharmaceutical Research & Development LLC.; Lumosity; the Lundbeck; Merck & Co., Inc.; Meso Scale Diagnostics, LLC.; NeuroRx Research; Neurotrack Technologies; Novartis Pharmaceuticals Corporation; Pfizer Inc.; Piramal Imaging; Servier; Takeda Pharmaceutical Company; and Transition Therapeutics. The Canadian Institutes of Health Research is providing funds to support ADNI clinical sites in Canada. Private sector contributions are facilitated by the Foundation for the National Institutes of Health (www.fnih.org). The grantee organization is the Northern California Institute for Research and Education and the study is coordinated by the Alzheimer's Therapeutic Research Institute at the University of Southern California. ADNI data are disseminated by the Laboratory for Neuro Imaging at the University of Southern California. Nicola Walter Falasca, Antonio Ferretti, Stefano L. Sensi, and Raffaella Franciotti acknowledge financial support from Strengthening of research structures and creation of R&D “Innovation Ecosystems, National Recovery and Resilience Plan (NRRP)”, Mission 4, Component 2 Investment 1.5, funded from the European Union—NextGenerationEU—VITALITY, ECS00000041 (grant no D73C22000840006). “Innovation Ecosystems, National Recovery and Resilience Plan (NRRP)”, Mission 4, Component 2 Investment 1.5, funded from the European Union—NextGenerationEU—VITALITY, ECS00000041 (grant no D73C22000840006). Data used to prepare this article were obtained from the Alzheimer's Disease Neuroimaging Initiative (ADNI) database (http://adni.loni.usc.edu). As such, the investigators within the ADNI contributed to the design and implementation of the ADNI and/or provided data but did not participate in the analysis or writing of this report. A complete listing of ADNI investigators can be found at: https://adni.loni.usc.edu/wp‐content/uploads/how_to_apply/ADNI_Acknowledgement_List.pdf.Open access publishing facilitated by Universita degli Studi Gabriele d'Annunzio Chieti Pescara, as part of the Wiley ‐ CRUI‐CARE agreement.

## Funding

- European Union – NextGenerationEU, Mission 4, Component1, under the Italian Ministry and Research (MUR) National Innovation Ecosystem ECS00000041 ‐ Vitality ‐ CUP D73C22000840006

## Data Availability

DATA AVAILABILITY STATEMENTThe original data used in this manuscript are available for download in the ADNI database (https://adni.loni.usc.edu).

## References

1. 1 Uysal G , Ozturk M . Hippocampal atrophy based Alzheimer's disease diagnosis via machine learning methods. J Neurosci Methods. 2020;337:108669. doi:10.1016/j.jneumeth.2020.108669 32126274 [PMID:32126274]
2. 2 van Oostveen WM , de Lange ECM . Imaging techniques in Alzheimer's disease: a review of applications in early diagnosis and longitudinal monitoring. Int J Mol Sci. 2021;22:2110. doi:10.3390/ijms22042110 33672696 PMC7924338 [PMID:33672696]
3. 3 Hansso ON , Blennow K , Zetterberg H , Dage J . Blood biomarkers for Alzheimer's disease in clinical practice and trials. Nat Aging. 2023;3:506‐519. doi:10.1038/s43587-023-00403-3 37202517 PMC10979350 [PMID:37202517]
4. 4 Schindler SE , Atri A . The role of cerebrospinal fluid and other biomarker modalities in the Alzheimer's disease diagnostic revolution. Nat Aging. 2023;3:460‐462. doi:10.1038/s43587-023-00400-6 37202514 PMC10720501 [PMID:37202514]
5. 5 Sharma MJ , Callahan BL . Cerebrovascular and neurodegenerative pathologies in long‐term stable mild cognitive impairment. J Alzheimers Dis. 2021;79:1269‐1283. doi:10.3233/JAD-200829 33427736 [PMID:33427736]
6. 6 Karch CM , Goate AM . Alzheimer's disease risk genes and mechanisms of disease pathogenesis. Biol Psychiatry. 2015;77:43‐51. doi:10.1016/j.biopsych.2014.05.006 24951455 PMC4234692 [PMID:24951455]
7. 7 Shvetcov A , Johnson ECB , Winchester LM , et al. APOE ε4 carriers share immune‐related proteomic changes across neurodegenerative diseases. Nat Med. 2025;31:2590‐2601. doi:10.1038/s41591-025-03835-z 40665049 PMC12353839 [PMID:40665049]
8. 8 Raulin AC , Doss SV , Trottier ZA , Ikezu TC , Bu G , Liu CC . ApoE in Alzheimer's disease: pathophysiology and therapeutic strategies. Molecular Neurodegeneration. 2022;17:72. doi:10.1186/s13024-022-00574-4 36348357 PMC9644639 [PMID:36348357]
9. 9 Serrano‐Pozo A , Das S , Hyman BT . APOE and Alzheimer's disease: advances in genetics, pathophysiology, and therapeutic approaches. Lancet Neurol. 2021;20:68‐80. doi:10.1016/S1474-4422(20)30412-9 33340485 PMC8096522 [PMID:33340485]
10. 10 Frisoni GB , Altomare D , Thal DR , et al. The probabilistic model of Alzheimer disease: the amyloid hypothesis revised. Nat Rev Neurosci. 2022;23:53‐66.34815562 10.1038/s41583-021-00533-wPMC8840505 [PMID:34815562]
11. 11 Granzotto A , Sensi SL . Once upon a time, the amyloid cascade hypothesis. Ageing Research Reviews. 2024;93:102161. doi:10.1016/j.arr.2023.102161 38065226 [PMID:38065226]
12. 12 Peng Y , Gao P , Shi L , Chen L , Liu J , Long J . Central and peripheral metabolic defects contribute to the pathogenesis of Alzheimer's disease: targeting mitochondria for diagnosis and prevention. Antioxid Redox Signal. 2020;32:1188‐1236. doi:10.1089/ars.2019.7763 32050773 PMC7196371 [PMID:32050773]
13. 13 Sundelöf J , Arnlöv J , Ingelsson E , et al. Serum cystatin C and the risk of Alzheimer disease in elderly men. Neurology. 2008;71:1072‐1079. doi:10.1212/01.wnl.0000326894.40353.93 18824671 PMC2676985 [PMID:18824671]
14. 14 Reitz C , Tang MX , Schupf N , Manly JJ , Mayeux R , Luchsinger JA . Association of higher levels of high‐density lipoprotein cholesterol in elderly individuals and lower risk of late‐onset Alzheimer disease. Arch Neurol. 2010;67:1491‐1497. doi:10.1001/archneurol.2010.297 21149810 PMC3065942 [PMID:21149810]
15. 15 Nguyen TT , Ta QTH , Nguyen TKO , Nguyen TTD , Giau VV . Type 3 diabetes and its role implications in Alzheimer's disease. Int J Mol Sci. 2020;21:3165. doi:10.3390/ijms21093165 32365816 PMC7246646 [PMID:32365816]
16. 16 Kunkle BW , Grenier‐Boley B , Sims R , et al. Genetic meta‐analysis of diagnosed Alzheimer's disease identifies new risk loci and implicates A, tau, immunity and lipid processing. Nat Genet. 2019;51:414‐430. doi:10.1038/s41588-019-0358-2 30820047 PMC6463297 [PMID:30820047]
17. 17 Aghdam MA , Bozdag S , Saeed F , et al. Machine‐learning models for Alzheimer's disease diagnosis using neuroimaging data: survey, reproducibility, and generalizability evaluation. Brain Inf. 2025;12:8. doi:10.1186/s40708-025-00252-3 PMC1192871640117001 [PMID:40117001]
18. 18 Zeng X , Chen Y , Sehrawat A , et al. Alzheimer blood biomarkers: practical guidelines for study design, sample collection, processing, biobanking, measurement and result reporting. Mol Neurodegeneration. 2024;19:40. doi:10.1186/s13024-024-00711-1 PMC1109503838750570 [PMID:38750570]
19. 19 Elshewey AM , Shams MY , El‐Rashidy N , Elhady AM , Shohieb SM , Tarek Z . Bayesian Optimization with Support Vector Machine Model for Parkinson Disease Classification. Sensors. 2023;23:2085. doi:10.3390/s23042085 36850682 PMC9961102 [PMID:36850682]
20. 20 Lundberg SM , Lee SI . A unified approach to interpreting model predictions. Adv Neural Inf Process Syst . 2017:30. doi:10.48550/arXiv.1705.07874
21. 21 Blanco K , Salcidua S , Orellana P , et al. Systematic review: fluid biomarkers and machine learning methods to improve the diagnosis from mild cognitive impairment to Alzheimer's disease. Alz Res Therapy. 2023;15:176. doi:10.1186/s13195-023-01304-8 PMC1057636637838690 [PMID:37838690]
22. 22 Fallaize R , Carvalho‐Wells AL , Tierney AC , et al. APOE genotype influences insulin resistance, apolipoprotein CII and CIII according to plasma fatty acid profile in the metabolic syndrome. Sci Rep. 2017;7:6274. doi:10.1038/s41598-017-05802-2 28740125 PMC5524844 [PMID:28740125]
23. 23 Wu S , Hsu LA , Teng MS , et al. Interactive effects of C‐reactive protein levels on the association between APOE variants and triglyceride levels in a Taiwanese population. Lipids Health Dis. 2016;15:94. doi:10.1186/s12944-016-0262-z 27177774 PMC4866423 [PMID:27177774]
24. 24 Dunk MM , Driscoll I . Alzheimer's disease neuroimaging initiative. total cholesterol and APOE‐Related risk for Alzheimer's disease in the Alzheimer's Disease Neuroimaging Initiative. J Alzheimers Dis. 2022;85:1519‐1528. doi:10.3233/JAD-215091 34958023 PMC10442640 [PMID:34958023]
25. 25 Yang LG , March ZM , Stephenson RA , Narayan PS . Apolipoprotein E in lipid metabolism and neurodegenerative disease. Trends Endocrinol Metab. 2023;34:430‐445. doi:10.1016/j.tem.2023.05.002 37357100 PMC10365028 [PMID:37357100]
26. 26 Poirier J . Apolipoprotein E and cholesterol metabolism in the pathogenesis and treatment of Alzheimer's disease. Trends Mol Med. 2003;9:94‐101. doi:10.1016/s1471-4914(03)00007-8 12657430 [PMID:12657430]
27. 27 Jarvik GP , Wijsman EM , Kukull WA , Schellenberg GD , Yu C , Larson EB . Interactions of apolipoprotein E genotype, total cholesterol level, age, and sex in prediction of Alzheimer's disease: a case‐control study. Neurology. 1995;45:1092‐1096. doi:10.1212/wnl.45.6.1092 7783869 [PMID:7783869]
28. 28 Roher AE , Kuo YM , Kokjohn KM , Emmerling MR , Gracon S . Amyloid and lipids in the pathology of Alzheimer disease. Amyloid. 1999;6:136‐145. doi:10.3109/13506129909007315 10439121 [PMID:10439121]
29. 29 Bernath MM , Bhattacharyya S , Nho K , et al. Serum triglycerides in Alzheimer disease: relation to neuroimaging and CSF biomarkers. Neurology. 2020;94:e2088‐e2098. doi:10.1212/WNL.0000000000009436 32358220 PMC7526673 [PMID:32358220]
30. 30 Stephenson RA , Johnson KR , Cheng L . Triglyceride metabolism controls inflammation and APOE4‐associated disease states in microglia. bioRxiv 2024:2024.04.11.589145. doi:10.1101/2024.04.11.589145
31. 31 Liang N , Nho K , Newman JW , et al. Peripheral inflammation is associated with brain atrophy and cognitive decline linked to mild cognitive impairment and Alzheimer's disease. Sci Rep. 2024;14:17423. doi:10.1038/s41598-024-67177-5 39075118 PMC11286782 [PMID:39075118]
32. 32 Chiesa ST , Charakida M , Georgiopoulos G , et al. Glycoprotein acetyls: a novel inflammatory biomarker of early cardiovascular risk in the young. J Am Heart Assoc. 2022;11:e024380. doi:10.1161/JAHA.121.024380 35156387 PMC9245818 [PMID:35156387]
33. 33 de la Monte SM , Wands JR . Alzheimer's disease is Type 3 diabetes‐evidence reviewed. J Diabetes Sci Technol. 2008;2:1101‐1113. doi:10.1177/193229680800200619 19885299 PMC2769828 [PMID:19885299]
34. 34 Steen E , Terry BM , Rivera EJ , et al. Impaired insulin and insulin‐like growth factor expression and signaling mechanisms in Alzheimer's disease–is this type 3 diabetes?. J Alzheimers Dis. 2005;7:63‐80. doi:10.3233/jad-2005-7107 15750215 [PMID:15750215]
35. 35 Kirvalidze M , Hodkinson A , Storman D , et al. The role of glucose in cognition, risk of dementia, and related biomarkers in individuals without type 2 diabetes mellitus or the metabolic syndrome: a systematic review of observational studies. Neurosci Biobehav Rev. 2022;135:104551. doi:10.1016/j.neubiorev.2022.104551 35104494 [PMID:35104494]
36. 36 Morris JK , Honea RA , Vidoni ED , Swerdlow RH , Burns JM . Is Alzheimer's disease a systemic disease?. Review Biochim Biophys Acta. 2014;1842:1340‐1349. doi:10.1016/j.bbadis.2014.04.012 24747741 PMC4126236 [PMID:24747741]
37. 37 Suzuki A , Stern SA , Bozdagi O , et al. Astrocyte‐neuron lactate transport is required for long‐term memory formation. Cell. 2011;144:810‐823. doi:10.1016/j.cell.2011.02.018 21376239 PMC3073831 [PMID:21376239]
38. 38 Zhang M , Cheng X , Dang R , Zhang W , Zhang J , Yao Z . Lactate deficit in an Alzheimer disease mouse model: the relationship with neuronal damage. J Neuropathol Exp Neurol. 2018;77:1163‐1176. doi:10.1093/jnen/nly102 30383244 [PMID:30383244]
39. 39 Denis I , Potier B , Heberden C , Vancassel S . Omega‐3 polyunsaturated fatty acids and brain aging. Curr Opin Clin Nutr Metab Care. 2015;18:139‐146. doi:10.1097/MCO.0000000000000141 25501348 [PMID:25501348]
40. 40 Qian XH , Liu XL , Zang B . Investigating the causal association between branched‐chain amino acids and Alzheimer's disease: a bidirectional Mendelian randomized study. Front Nutr. 2023;31:1103303. doi:10.3389/fnut.2023.1103303 PMC1010251837063328 [PMID:37063328]
41. 41 Fu Y , Wang Y , Ren H , Guo X , Han L . Branched‐chain amino acids and the risks of dementia, Alzheimer's disease, and Parkinson's disease. Front Aging Neurosci. 2024;16:1369493. doi:10.3389/fnagi.2024.1369493 38659706 PMC11040674 [PMID:38659706]
42. 42 He X , Huang Y , Li B , Gong CX , Schuchman EH . Deregulation of sphingolipid metabolism in Alzheimer's disease. Neurobiol Aging. 2010;31:398408. doi:10.1016/j.neurobiolaging.2008.05.010 PMC282976218547682 [PMID:18547682]
43. 43 Mielke MM , Haughey NJ , Bandaru VV , et al. Plasma sphingomyelins are associated with cognitive progression in Alzheimer's disease. J Alzheimers Dis. 2011;27:259‐269. doi:10.3233/JAD-2011-110405 21841258 PMC3218198 [PMID:21841258]
44. 44 Kosicek M , Zetterberg H , Andreasenc N , Peter‐Katalinic J , Hecimovic S . Elevated cerebrospinal fluid sphingomyelin levels in prodromal Alzheimer's disease. Neurosci Lett. 2012;516:302‐305. doi:10.1016/j.neulet.2012.04.019 22521584 [PMID:22521584]
45. 45 Baloni P , Arnold M , Buitrago L , et al. Multi‐Omic analyses characterize the ceramide/sphingomyelin pathway as a therapeutic target in Alzheimer's disease. Commun Biol. 2022;5:1074. doi:10.1038/s42003-022-04011-6 36209301 PMC9547905 [PMID:36209301]
46. 46 Filippov V , Song MA , Zhang K , et al. Increased ceramide in brains with Alzheimer's and other neurodegenerative diseases. J Alzheimers Dis. 2012;29:537‐547. doi:10.3233/JAD-2011-111202 22258513 PMC3643694 [PMID:22258513]
47. 47 Granzotto A , Bomba M , Castelli V , et al. Inhibition of de novo ceramide biosynthesis affects aging phenotype in an in vitro model of neuronal senescence. Aging. 2019;11:6336‐6357. doi:10.18632/aging.102191 31467258 PMC6738398 [PMID:31467258]
48. 48 Fiocco AJ , Krieger L , D'Amico D , et al. A systematic review of existing peripheral biomarkers of cognitive aging: is there enough evidence for biomarker proxies in behavioral modification interventions?: an initiative in association with the nutrition, exercise and lifestyle team of the Canadian Consortium on neurodegeneration in aging. Ageing Res Rev. 2019;52:72‐119. doi:10.1016/j.arr.2019.04.008 31059801 [PMID:31059801]
49. 49 Trushina E , Dutta T , Persson XMT , Mielke MM , Petersen RC . Identification of altered metabolic pathways in plasma and CSF in mild cognitive impairment and Alzheimer's disease using metabolomics. Plos One. 2013;8:e63644. doi:10.1371/journal.pone.0063644 23700429 PMC3658985 [PMID:23700429]
