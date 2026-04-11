---
pmid: "40386988"
pmc: "PMC12086656"
doi: "10.1002/alz.70182"
title: "Uncovering stage‐specific neural and molecular progression in Alzheimer's disease: Implications for early screening"
journal: "Alzheimer's & Dementia"
year: 2025
authors:
  - name: "Lin Yun"
    affiliations:
      - "Institute of Intelligent Medical Research (IIMR) BGI Genomics Shenzhen Guangdong China"
  - name: "Shi Xue"
    affiliations:
      - "Department of Neurology Shenzhen People's Hospital, The Second Clinical Medical College, Jinan University, The First Affiliated Hospital, Southern University of Science and Technology Shenzhen Guangdong China"
  - name: "Mu Jia"
    affiliations:
      - "Institute of Intelligent Medical Research (IIMR) BGI Genomics Shenzhen Guangdong China"
  - name: "Ren Huixia"
    affiliations:
      - "Department of Geriatrics Shenzhen People's Hospital, The Second Clinical Medical College, Jinan University, The First Affiliated Hospital, Southern University of Science and Technology Shenzhen Guangdong China"
  - name: "Jiang Xiaosen"
    affiliations:
      - "BGI Research Shenzhen Guangdong China"
  - name: "Zhu Lin"
    affiliations:
      - "Department of Neurology Shenzhen People's Hospital, The Second Clinical Medical College, Jinan University, The First Affiliated Hospital, Southern University of Science and Technology Shenzhen Guangdong China"
  - name: "Cai Xingya"
    affiliations:
      - "Institute of Intelligent Medical Research (IIMR) BGI Genomics Shenzhen Guangdong China"
  - name: "Lian Chongyuan"
    affiliations:
      - "Shenzhen Bay Laboratory, Gaoke Innovation Center Shenzhen Guangdong China"
  - name: "Pei Zian"
    affiliations:
      - "Department of Electronic and Electrical Engineering Southern University of Science and Technology Shenzhen Guangdong China"
  - name: "Zhang Yongfang"
    affiliations:
      - "Institute of Intelligent Medical Research (IIMR) BGI Genomics Shenzhen Guangdong China"
  - name: "Wang Cong"
    affiliations:
      - "BGI Genomics Shenzhen Guangdong China"
  - name: "Hou Guixue"
    affiliations:
      - "BGI Genomics Shenzhen Guangdong China"
  - name: "Lin Liang"
    affiliations:
      - "BGI Genomics Shenzhen Guangdong China"
  - name: "Nie Chao"
    affiliations:
      - "BGI Research Shenzhen Guangdong China"
  - name: "Song Cai"
    affiliations:
      - "BGI Research Shenzhen Guangdong China"
  - name: "Gao Shuyang"
    affiliations:
      - "BGI Genomics Shenzhen Guangdong China"
  - name: "Zhao Lijian"
    affiliations:
      - "BGI Genomics Shenzhen Guangdong China"
  - name: "Wang Jian"
    affiliations:
      - "BGI Genomics Shenzhen Guangdong China"
  - name: "Jiang Xin"
    affiliations:
      - "Department of Geriatrics Shenzhen People's Hospital, The Second Clinical Medical College, Jinan University, The First Affiliated Hospital, Southern University of Science and Technology Shenzhen Guangdong China"
  - name: "Wang Jing"
    affiliations:
      - "Institute of Intelligent Medical Research (IIMR) BGI Genomics Shenzhen Guangdong China"
  - name: "Guo Yi"
    affiliations:
      - "Department of Neurology Shenzhen People's Hospital, The Second Clinical Medical College, Jinan University, The First Affiliated Hospital, Southern University of Science and Technology Shenzhen Guangdong China"
      - "Shenzhen Bay Laboratory, Gaoke Innovation Center Shenzhen Guangdong China"
      - "Diagnosis and Treatment Center for Functional Neurological Disorders Tianjin Huanhu Hospital Tianjin China"
---

# Uncovering stage‐specific neural and molecular progression in Alzheimer's disease: Implications for early screening

## Abstract

### INTRODUCTION

Understanding molecular, neuroanatomical, and neurophysiological changes in cognitive decline is crucial for comprehending Alzheimer's disease (AD) progression and facilitating objective staging and early screening.

### METHODS

We enrolled 277 participants and employed a multimodal approach, integrating genomics, metagenomics, metabolomics, magnetic resonance imaging (MRI), and electroencephalogram (EEG) to investigate the AD continuum, from subjective cognitive decline (SCD) through mild cognitive impairment (MCI) to advanced AD.

### RESULTS

Key markers and mechanisms were identified for each stage: initial neurophysiological deficits in SCD with compensatory metabolomic responses, gut‐brain axis dysregulation in MCI, and extensive metabolic disruption and multisystem breakdown in AD. Using random forest models, we identified specific feature combinations that achieved predictive areas under the curve (AUCs) of 0.78 for SCD, 0.84 for MCI, and 0.98 for AD, highlighting EEG as a particularly effective early screening tool.

### DISCUSSION

This study elucidates AD's pathophysiological progression and highlights the potential of machine learning‐assisted multimodal strategies for early detection and staging.

### Highlights

Early electroencephalogram (EEG) changes and compensatory metabolomic responses define subjective cognitive decline (SCD) stage.In mild cognitive impairment (MCI), gut–brain axis dysfunction alters microbial diversity and functional pathways.In Alzheimer's disease (AD), systemic breakdown disruption enables near‐perfect machine learning (ML) detection.Random forest models yield predictive areas under the curve (AUCs) of 0.78 (SCD), 0.84 (MCI), 0.98 (AD).EEG is a convenient, cost‐efficient marker for early screening.

## BACKGROUND

1

Alzheimer's disease (AD) is one of the major challenges faced by the aging society, leading to a progressive decline in cognitive function that can result in a reduction or even loss of the ability to live independently, work, and participate in society. Mild cognitive impairment (MCI) represents an intermediate stage between the cognitive decline associated with normal aging and the more severe deterioration seen in dementia, with a considerable number of cases eventually progressing to AD. 1 Subjective cognitive decline (SCD), introduced in 2014, refers to self‐reported cognitive complaints that are not detectable through standard cognitive tests. 2 SCD has garnered attention due to its potential to signal the very earliest stages of cognitive decline, often preceding MCI. 3 However, the underlying mechanisms driving the progression from SCD to MCI and eventually AD remain poorly understood, complicating early detection and intervention. 4

Extensive research utilizing molecular and neuroimaging techniques has aimed to delineate this progression, enhancing early detection and risk assessment. Genome‐wide association studies (GWAS) have identified numerous key genetic contributors associated with AD, the most notable being the apolipoprotein E (APOE) ε4 allele, 5 along with other risk loci associated with immune response, lipid metabolism, and amyloid‐β (Aβ) plaque formation. 4 The gut microbiota has garnered increasing attention for its role in AD progression through metabolic, endocrine, neural, and immune pathways. 4 , 6 Additionally, metabolomics is crucial in linking genetic‐ and microbiota‐related metabolomic pathways, with key metabolites including amino acids, lipids, and energy‐related compounds. 7 , 8 These molecular and metabolic insights are complemented by neurophysiological and neuroanatomical markers that offer a broader view of disease progression. From a neurophysiological perspective, EEG‐detected neurophysiological changes in AD patients exhibit distinct oscillatory patterns, with increased power in lower frequencies (delta and theta), reduced power in the beta band, and a slower peak alpha frequency. 9 , 10 In parallel, magnetic resonance imaging (MRI) reveals the extent, distribution, and rate of cerebral atrophy, correlating with cognitive deficits as AD advances. 11 Despite substantial research efforts, most studies are limited to just one or two modalities, typically focusing on either biofluid testing or imaging alone, which fails to capture the complexity of AD pathogenesis, a systemic condition that demands a more comprehensive approach. Furthermore, systematic studies covering the entire spectrum of cognitive decline, from SCD to MCI and AD dementia, are limited. 12 , 13 , 14 , 15 , 16 , 17 , 18 Overcoming these gaps requires an integrated investigation of cognitive decline progression across multiple modalities. The unique insights from each modality, when combined, furnish a holistic perspective of the disease.

Given this context, we hypothesized that an integrated multi‐omics and neuroimaging approach, combined with machine learning, could not only deepen our understanding of the progression of AD but also detect early or prodromal indicators of these disorders. Specifically, we aim to: (1) Identify complex alterations across various biological systems to enhance our understanding of the mechanisms driving AD progression; (2) Discover accessible early‐stage biomarkers critical for AD, enabling timely screening and personalized management of cognitive decline. To accomplish these goals, we collected genomic, metabolomic, metagenomic, MRI, and EEG data from healthy controls (HC), as well as individuals with SCD, MCI, and AD (Figure 1A). Distinct features from each modality were used to develop random forest models for disease staging, employing both standalone and integrated modalities to identify key biomarkers for early screening and improve personalized clinical diagnosis and treatment.

> **FIGURE 1: Study overview, sociodemographic features, and genetic assessment. (A) The study enrolled 277 participants across four groups: HC (n = 168), SCD (n = 30), MCI (n = 51), and AD (n = 28). A comprehensive set of multidimensional data was collected, encompassing genomics, metagenomics, metabolomics, MRI, and EEG. Single‐omics analyses were conducted to gain insights into each modality, followed by a multi‐modal integration to explore the interconnections across these different data types. After performing a balanced train‐test data split, random forest modeling, along with hyperparameter selection and optimization, was applied to facilitate disease staging. Building upon the results of these analyses, the study explored the progression and underlying mechanisms of AD across different stages. The primary objectives were to refine disease staging, uncover the mechanisms driving disease progression, identify potential biomarkers, and develop early screening methods, ultimately advancing our understanding of neurocognitive decline, with a particular focus on AD. (B) Data collection status across dimensions, with missing samples colored silver and the count of missing samples labeled next to each corresponding bar. (C) Stacked bar plot showing sex composition. (D) Violin plots display the age distribution. Data within the violin plots include median values (center line), 25th and 75th percentiles (box limits), and the range up to the most extreme data points for each group. p‐values were calculated using pairwise two‐sided t‐tests, where a single asterisk * indicates p < 0.05, double asterisks **indicates p < 0.01, and triple asterisks ***indicates p < 0.001. (E) Stacked bar plot showing the distribution of education levels. (F) Density plots of PRS. (G) Stacked bar plot showing the distribution of APOE genotypes. AD, Alzheimer's disease; APOE, apolipoprotein E; EEG, electroencephalogram; HC, healthy controls; MCI, mild cognitive impairment; MRI, magnetic resonance imaging; PRS, polygenic risk scores; SCD, subjective cognitive decline.**

## METHODS

2

### Subject recruitment and ethics statement

2.1

Participants were recruited from two sites: Shenzhen People's Hospital and Shenzhen BGI Life Sciences Research Institute. Participants were required to meet the following prerequisites: aged between 20 and 70 years, right‐handed, and able to provide informed consent. The study excluded individuals with: (1) Psychiatric disorders, such as depression, anxiety, schizophrenia, and sleep disorders, as well as those with other neurological diseases, including cerebral infarction, Parkinson's disease, epilepsy, and brain tumors; (2) Pathological factors that could lead to cognitive decline, such as severe anemia, severe liver or kidney dysfunction, hypothyroidism, poisoning, or alcohol dependence; (3) Severe cardiovascular, cerebrovascular, or hematological diseases, or other severe complications; (4) Abnormal cranial MRI scans, indicating a Fazekas score of ≥2 for white matter lesions, space‐occupying lesions, or other abnormal signals; (5) Rapid cognitive decline within months, suggesting central nervous system infections, inflammation, or metabolic disorders. Participants in the HC, SCD, and MCI groups who were taking antidepressants, sleeping pills, antiepileptic drugs, or similar medications within the previous 4 weeks were also excluded. All participants in these groups completed the Montreal Cognitive Assessment (MoCA) and an evaluation of activities of daily living (ADLs). Participants included in the AD and MCI groups had to meet the 2011 National Institute on Aging‐Alzheimer's Association (NIA‐AA) diagnostic criteria for AD or MCI due to AD, respectively. Participants in the AD group were diagnosed based on cerebrospinal fluid (CSF) testing for Aβ and tau proteins before inclusion. MCI patients were confirmed to have objective memory impairment, as reflected by a MoCA score of 26 or below (adjusted for education), while maintaining daily functional independence, evidenced by an ADLs score of 23 or lower. For the SCD group, the diagnostic criteria from the Subjective Cognitive Decline Initiative (SCD‐I) Working Group were used. Inclusion criteria required subjective memory complaints with onset within the past 5 years, a perception that their memory was worse than that of others in their age group, no objective cognitive impairment with a MoCA score of 26 or higher (adjusted for education), and intact daily functioning with an ADLs score below 16.

All participants or their legal guardians provided written informed consent for both study participation and sample collection. This study was approved by the ethics community of both Shenzhen People's Hospital and Shenzhen BGI Life Sciences Research Institute (ChiCTR2300074261).

RESEARCH IN CONTEXT Systematic review: We conducted a comprehensive literature search to evaluate the current understanding of multimodal biomarkers and the underlying mechanisms driving Alzheimer's disease (AD) progression. Most studies focus on one or two modalities, such as biofluid assays or imaging, thereby neglecting the systemic complexity of AD pathogenesis. Additionally, research spanning the entire AD spectrum is limited. Interpretation: Our study identifies stage‐specific molecular, neurophysiological, and neurostructural changes from subjective cognitive decline (SCD) to AD, enhancing our understanding of AD's complex mechanisms. Electroencephalogram (EEG) alterations serve as early biomarkers for SCD, while MRI, metagenomics, and metabolomics features also provide diagnostic markers and therapeutic targets in later stages. Future directions: Future research should validate these potential biomarkers in larger, diverse populations and explore therapeutic interventions targeting neural and molecular disruptions. Additionally, longitudinal studies are needed to elucidate causal relationships and monitor disease progression, facilitating the development of targeted treatments to delay or prevent AD onset.

### CSF collection and analysis

2.2

For CSF collection, the puncture site is located at the intersection of the iliac crest line and the posterior midline. After disinfection and local anesthesia, the needle is inserted vertically, and 5 mL of CSF is collected. The CSF was subjected to three enzyme‐linked immunosorbent assay (ELISA) assays: INNOTEST hTAU Ag, INNOTEST PHOSPHO‐TAU(181P), and INNOTEST β‐AMYLOID(1‐42), for the quantification of t‐tau, p‐tau181, and β‐amyloid(1‐42), respectively, according to the manufacturer's instructions.

### Blood sample collection

2.3

A total of 8 mL of whole blood was drawn from participants and collected in ethylenediaminetetraacetic acid (EDTA) anticoagulant tubes, followed by centrifugation at 1500 rcf for 10 min. Samples showing hemolysis were discarded. After centrifugation, the plasma layer was carefully extracted with a pipette, transferred to light‐protected EP tubes, and stored for metabolite analysis. The remaining blood cell pellet was preserved for whole‐genome sequencing (WGS).

### WGS and data processing

2.4

Blood cell sediments were extracted using the MGIEasy Magnetic Beads Genomic DNA Extraction Kit following the manufacturer's instructions. The extracted DNA was then used for library preparation with the MGIEasy Universal DNA Library Prep Set, adhering to the provided protocol. The prepared libraries were subsequently subjected to 30x WGS on the BGISEQ‐500 platform. WGS data were aligned, and variant calling was performed using the Picard/BWA 19 /GATK 20 pipeline. Variants retained for further analysis met the following quality criteria: mapping quality score > 40, sequencing depth > 4, variant quality score > 2.0, Phred‐scaled p‐value for Fisher's exact test for strand bias < 60.0, haplotype score < 13.0, and, for single nucleotide polymorphisms (SNPs), a distance > 8.0 between the alternate allele and the read end. Variants violating Hardy–Weinberg equilibrium (p‐value < 1×10−5), markers with more than 1% missing genotype data, and those with a minor allele frequency below 1% were excluded. Additionally, individuals with heterozygosity levels exceeding the standard deviation were removed from the analysis. Polygenic risk score (PRS) analysis was conducted using the PGS004863 model from the PGS Catalog, 21 which includes 74 variant sites and respective weights. This model was developed using data from diverse populations, including European and South Asian cohorts, and was validated in a significant East Asian cohort, making it applicable to our study population. 22 The PRS for each sample was calculated and utilized as a genetic feature in subsequent analyses, alongside the APOE genotype.

### Metagenomics sequencing and data analysis

2.5

Fresh stool samples were collected from recruited volunteers and then processed following the MetaHIT protocol 23 to extract DNA, the extracted DNA was then subject to single‐end metagenomic sequencing on the BGISEQ‐500 platform. Reads of low quality were discarded, and host DNA was removed using the human genome reference (hg38) with SOAP2 24 (version 2.22; identity ≥ 0.9), after which taxonomic analysis was carried out using MetaPhlan2, 25 and the functional composition of the human intestinal flora was determined using HUMAnN2. 26 The relative abundance of species and pathways identified were utilized in the following analysis.

The Shannon Diversity Index, Simpson Diversity Index, and Chao1 Richness Estimator were calculated, and pairwise non‐parametric Wilcoxon rank‐sum tests were performed to assess significant differences in these diversity indices across the four groups. Additionally, an analysis of variance (ANOVA) was conducted on species abundance and microbial pathways, with age and education included as covariates to identify significant species and pathways in the first step. Subsequently, Wilcoxon rank‐sum tests were used to filter significant species and pathways across comparisons between the four groups.

### Quantitative measurement of blood metabolites and data analysis

2.6

Metabolite quantification was performed using the HM Meta Assay and HM Lipids Assay (BGI, Shenzhen, China); refer to Table S1 for the full list of metabolites in the two assay kits. The HM Meta Assay covered hydrophilic compounds across multiple chemical classes including bile acids, amino acids, fatty acids, carboxylic acids, hydroxyl acids, phenolic acids, and indoles. Serial dilutions of metabolite standards were used to generate calibration curves, while internal standards were diluted with methanol in advance. Aliquots (20 µL) of plasma samples or standards were mixed with 120 µL of internal standard solution in 96‐well plates. Plates were stored at −20°C for 20 min followed by centrifugation at 4000 ×g and 4°C for 30 min. Supernatants (30 µL) were transferred to new 96‐well plates for derivatization with 10 µL of freshly prepared reagents (200 mM 3‐Nitrophenylhydrazine in 75% aqueous methanol and 96 mM 1‐ethyl‐3‐(3‐dimethylaminopropyl) carbodiimide ‐6% pyridine in methanol) at 30°C for 60 min. The resulting samples were diluted with 400 µL ice‐cold 50% methanol before 135 µL of supernatant was transferred to new 96‐well plates for LC‐MS/MS analysis on a Waters ACQUITY UPLC coupled to a SCIEX QTRAP 6500 PLUS mass spectrometer, equipped with an electrospray ionization (ESI) source and a Waters ACQUITY BEH C18 column (1.7 µm, 100 × 2.1 mm). The instrument was controlled by Analyst software and operated in both positive and negative ion modes. HMQUANT software was used for absolute metabolite quantification. The HM Lipids Assay encompassed a broad range of lipid subclasses and quantified lipid molecules, including 18 lipid classes: sphingomyelin (SM), ceramide (CER), cholesterol ester (CE), monoacylglycerol (MAG), diacylglycerol (DAG), triacylglycerol (TAG), lysophosphatidic acid (LPA), phosphatidic acid (PA), lysophosphatidylcholine (LPC), phosphatidylcholine (PC), lysophosphatidylethanolamine (LPE), phosphatidylethanolamine (PE), lysophosphatidylinositol (LPI), phosphatidylinositol (PI), lysophosphatidylglycerol (LPG), phosphatidylglycerol (PG), lysophosphatidylserine (LPS), and phosphatidylserine (PS). Serial dilutions of metabolite standards were used to generate calibration curves, while SPLASH LIPIDOMIX Quantitative Mass Spec Internal Standard was diluted with precooled isopropanol in advance. In 96‐well plates, aliquots (120 µL) of either standards or plasma samples were mixed with an internal standard solution (20 µL each). The plates were then stored at −20°C for 20 min before being centrifuged at 4000 × g and 4°C for 30 min. Supernatants containing lipids were transferred to new plates for LC‐MS/MS analysis on the same system mentioned above in negative mode, while a portion of the supernatants was diluted into methanol for analysis in positive mode. HMQUANT software (BGI, Shenzhen, China) incorporating isotope correction via the LICAR package was used for absolute lipid quantification.

In addition, a list of blood metabolites described in detail by Zhuye et al., 27 including amino acids, hormones, vitamins, microelements, and heavy metals were quantified. Briefly, we quantitively determined hormones and fat‐soluble vitamins each in a 250 µL plasma sample via UPLC‐MS with an atmospheric pressure chemical ionization (APCI) source; water‐soluble vitamins and TMAO in a 200 µL plasma sample via using the same LC‐MS/MS system, while equipped with an ESI source. The microelements and heavy metals were quantified using 200 µL whole blood on an Agilent 7700 x ICP‐MS equipped with an octupole reaction system (ORS).

Mass spectrometry quantified 1257 plasma metabolites, including bile acids, amino acids, hormones, vitamins, microelements, fatty acids, and lipids, in each subject (Table S2). After filtering through ANOVA for age‐ and education‐independent features, significantly differentially enriched metabolites in SCD, MCI, and AD groups, compared to HC, were revealed using pairwise Wilcoxon rank‐sum tests (Table S3), and their fold changes were visualized in volcano plots. We conducted partial least squares discriminant analysis (PLS‐DA) to differentiate between all groups and performed pairwise PLS‐DA to distinguish HC from each of the other three groups. Metabolomic data were analyzed using the MetaboAnalyst 6.0 platform, 28 specifically utilizing the over representation analysis (ORA) method.

### MRI acquisition and processing

2.7

MRI was conducted using a Siemens MAGNETOM Prisma 3.0T scanner with a 3D T1‐weighted gradient echo sequence (MP‐RAGE). The scan parameters were as follows: repetition time (TR) = 2530 ms, echo time (TE) = 2.98 ms, inversion time (TI) = 1100 ms, flip angle (FA) = 7°, field of view (FOV) = 256 x 256 mm, matrix size = 256 × 256, slice thickness = 1 mm, and voxel size = 1 x 1 x 1 mm. The MP‐RAGE sequence took approximately 6 min, capturing a total of 192 sagittal slices. Brain volume analysis was conducted using the Dr. Brain platform (YiWei Medical Technology Co. Ltd., Shenzhen, China), based on VBM. Initially, T1‐weighted images were visually inspected to ensure adequate image quality. Bias correction and noise reduction were applied, followed by spatial normalization of each participant's high‐resolution 3D T1‐weighted scan into a standardized stereotaxic space for voxel‐to‐voxel alignment. This non‐linear registration process resulted in deformed images. Gray matter, white matter, and CSF segmentation were carried out based on the Neuromorphometrics atlas (http://Neuromorphometrics.com/). The segmented gray and white matter images were then spatially smoothed using an isotropic Gaussian kernel before proceeding to statistical analysis.

An initial ANOVA was conducted on brain region volumes, accounting for age and education as covariates, to identify significantly different regions. Subsequently, Wilcoxon rank‐sum tests were applied to examine volume differences across the four groups. Additionally, PLS‐DA was used to distinguish among all groups, followed by pairwise PLS‐DA to differentiate HC from each of the other three groups.

### EEG signal acquisition, processing, and analysis

2.8

All participants were asked to abstain from caffeine and energy‐related drinks up to 24 h prior to the EEG collection. EEG data were acquired using a 64‐channel BrainAmp DC amplifier system (Brain Products, GmbH, Munich, Germany) with the scalp electrodes placed according to the international 10–20 system, while the participants were in the resting state with eyes closed. During acquisition, the sampling rate was set at 5000 Hz with impedances kept below 5 KΩ for all channels and data were referenced online to the FCz channel with a ground at AFz.

The recorded EEG data were cleaned offline in MATLAB (MathWorks, Natick, USA) using the EEGLAB toolbox. 29 The preprocessing steps are briefly described as follows: (1) the raw data were down‐sampled to 250 Hz; (2) the bad segments contaminated by artifacts were excluded manually via visual inspection; (3) bandpass filter of 0.5–100 Hz and notch filter of 50 Hz were applied to the signals; (4) bad channels were discarded and then interpolated with neighboring channels using spherical spline interpolation; (5) remaining artifacts such as eye movement, persistent muscle artifact, heart noise, and channel noise were removed using independent component analysis; (6) the EEG data were re‐referenced to the common average.

For frequency analysis, the power spectral density (PSD) was estimated using Welch's technique with 50% overlapping Hamming windows of 10‐s epochs. Spectral densities were derived from seven canonical frequency bands: delta (1–4 Hz), theta (4–8 Hz), alpha (8–13 Hz), beta1 (13–20 Hz), beta2 (20–30 Hz), gamma1 (30–40 Hz), and gamma2 (40–45 Hz).

EEG functional connectivity (FC) was evaluated employing the debiased weighted phase lag index (dwPLI), which represented the non‐zero phase lag statistical interdependencies between each pair of channels. 30 The dwPLI was calculated using the Fieldtrip toolbox of MATLAB according to the Desikan–Killiany altas. 31 , 32 The frequency bands incorporated in the calculation of the dwPLI are the same as the spectral analysis.

An initial ANOVA was performed on relative power density and dwPLI, with age and education included as covariates, to identify significant alterations in power density and FC across brain regions. Following this, Wilcoxon rank‐sum tests were used to assess differences in PSD and FC among the four groups.

### Machine learning model prediction and feature selection

2.9

Multi‐omics data, including genetic features, gut microbial relative abundance, gut microbial functional pathways, metabolomic data, MRI‐based brain region volumes, EEG relative PSD, and EEG FC, were used to train machine learning models for classifying individuals into SCD versus HC, MCI versus HC, and AD versus HC groups. The dataset was initially split into an 80% training set and a 20% test set using stratified sampling to ensure balanced class labels across splits.

Significant unidimensional features were initially selected by performing one‐way ANOVA on the training data, controlling for age and education to identify group differences. These features were then used for model training. During training, the data were residualized via linear regression to remove the effects of age and education, ensuring these covariates did not influence classification. The data were subsequently scaled and oversampled using SMOTE to balance class distributions in each pairwise comparison. A RandomForestClassifier was trained with hyperparameter tuning via GridSearchCV, and model performance was evaluated using classification reports, specificity, and receiver operating characteristics‐area under the curve (ROC‐AUC) scores. Finally, multidimensional features were integrated and trained using the same approach for comprehensive classification. To enhance model performance, recursive feature elimination (RFE) or feature importance‐based selection was employed to reduce redundant or irrelevant features.

## RESULTS

3

### Key sociodemographic differences between participant groups

3.1

The study recruited 277 participants from four groups: HC (n = 168), SCD (n = 30), MCI (n = 51), and AD (n = 28) and comprehensively collected multidimensional data from each one of the participants, including genomics, metagenomics, metabolomics, MRI, and EEG. The presence and absence of samples for multiple data types across four participant groups were summarized in Figure 1B. The overall gender ratio was approximately 0.57, with a predominance of females present across all groups (Figure 1C). Significant differences in age and education level were observed among the four groups, according to Student's t‐test and chi‐squared test, respectively. Specifically, median age progressively increased from HC to SCD, then continued to increase through MCI toward AD, while education levels exhibited a decreasing trend across these groups. Thus, these factors were included as covariates in subsequent analyses (Figure 1D,E).

### PRSs and APOE ε4 allele frequencies across groups

3.2

To assess genetic risk, we generated a density plot (Figure 1F) to compare the distribution of PRS across groups. The AD group exhibited a slight rightward shift with right skewness, indicating higher PRS and suggesting a genetic predisposition to AD. In contrast, the PRS for HC, SCD, and MCI participants were comparable, implying no significant genetic risk differences between these groups.

In accordance with established findings that the APOE ε4 allele is associated with increased AD risk and the ε2 allele with reduced risk, 5 our study observed that the frequency of the ε2 allele decreased in both MCI and AD groups, while the frequency of the ε4 allele was significantly higher in the AD group (Figure 1G).

### Gut microbiota alterations and impaired microbial functional pathways

3.3

#### Decreased alpha diversity and increased beta diversity

3.3.1

Alpha diversity of gut microbiota, a potential predictor for AD, was assessed using Chao1, Shannon, and Simpson indices (Figure 2A). Pairwise two‐sided Wilcoxon rank‐sum tests were used to assess the significance between HC and each of the other groups. The Chao1 index, reflecting species richness (including rare species), showed significantly lower richness in the AD group compared to HC. The Shannon and Simpson indices, which measure species richness and evenness, were also significantly reduced in the MCI group compared to HC. No significant differences were observed in the SCD group. Beta diversity assessed using Bray–Curtis dissimilarities, showed significant and increasing dissimilarities between HC and the SCD, MCI, and AD groups according to pairwise two‐sided Wilcoxon rank‐sum tests. (Figure 2B). The Venn diagram was used to illustrate the unique and shared species of gut microbiota. A total of 236 species were common across all groups, while 83, 14, 37, and 26 species were uniquely associated with the HC, SCD, MCI, and AD groups, respectively (Figure 2C).

> **FIGURE 2: Differential gut microbiota composition across groups. (A) Box plots displaying three alpha diversity indices—Chao1, Shannon, and Simpson. Pairwise two‐sided Wilcoxon rank‐sum tests were used to assess the significance between HC and each of the other groups. Asterisks (*) indicate significant differences at p < 0.05. (B) Box plots showing within‐group Bray–Curtis dissimilarities. Significance between HC and each of the other groups was assessed using pairwise two‐sided Wilcoxon rank‐sum tests. Significance levels are indicated by asterisks: * denotes p < 0.05, ** denotes p < 0.01, and *** denotes p < 0.001. (C)Venn diagram illustrated the overlap of gut microbiota species across the four groups. (D) Stacked bar plots representing species‐level composition across groups. (E) Raincloud plots show the abundance of six bacterial species across groups. Group averages are shown with a trendline, calculated by linear regression. Statistical significance between the HC group and each other group was assessed using pairwise two‐sided Wilcoxon rank‐sum tests, with asterisks indicating significance: * denotes p < 0.05, ** denotes p < 0.01, and *** denotes p < 0.001. (F) Raincloud plots display the abundance of 12 significant metabolic pathways across groups. Statistical significance between the HC group and each other group was assessed using pairwise two‐sided Wilcoxon rank‐sum tests, with asterisks indicating significance: * denotes p < 0.05, ** denotes p < 0.01, and *** denotes p < 0.001. AD, Alzheimer's; HC, healthy controls; MCI, mild cognitive impairment; MRI, magnetic resonance imaging; CD, subjective cognitive decline.**

#### Reduced abundance of key microbial species

3.3.2

Microbial relative abundance was evaluated across various taxonomic levels, including phylum, class, order, family, genus, and species. While no significant differences were found at the phylum, class, order, or family levels, significant alterations were observed at the genus and species levels using pairwise two‐sided Wilcoxon rank‐sum tests (Table S4). The most abundant genera and species across groups are shown in Figure 2D and Figure S1. The relative abundance of six microbial species was significantly altered in AD compared to HC, with all showing a reduction trend as cognitive decline advanced (Figure 2E). The decreased abundance of SCFA‐producing bacteria, such as Faecalibacterium prausnitzii, Anaerostipes hadrus, and Butyrivibrio, is notable due to their anti‐inflammatory and neuroprotective effects. Their depletion could exacerbate neuroinflammation, advancing AD progression. 6 , 33 , 34 , 35 For the first time, we observed a reduction in Alistipes putredinis, Burkholderiales 1_1_47, and Bacteroides clarus in AD or prodromal stages, suggesting potential systemic links between AD and other non‐neurological conditions. Alistipes putredinis has been previously associated with liver cirrhosis, 36 , 37 Burkholderiales 1_1_47 with celiac and Wilson's diseases, 38 , 39 and Bacteroides clarus with end‐stage renal disease. 40

#### Impaired microbial metabolic pathways in MCI and AD groups

3.3.3

In the metagenomic pathway analysis, 12 pathways with significantly altered relative abundances in both MCI and AD compared to HC according to pairwise two‐sided Wilcoxon rank‐sum tests (Table S5), were shown as raincloud plots, revealing overlapping and distinct processes, all with a downward trend (Figure 2F). Notably, impairments in amino acid biosynthesis and degradation, particularly in several L‐Isoleucine (Ile) biosynthesis pathways, indicate disruptions in amino acid metabolism, which is crucial for maintaining neuronal structure and function. Additionally, two purine nucleotide biosynthesis pathways (inosine‐5′‐phosphate biosynthesis III and histidine, purine, and pyrimidine biosynthesis) were reduced, suggesting that disturbances in nucleotide metabolism and energy production are highly relevant to the disease continuum. 41 Furthermore, reductions in the Pyruvate Fermentation to Isobutanol pathway, the Calvin–Benson–Bassham cycle, and 4‐amino‐2‐methyl‐5‐ptrehosphomethylpyrimidine biosynthesis further emphasize impaired carbon metabolism, vitamin B1 biosynthesis and energy production in the brain. 42 , 43 , 44 Finally, the decay of polyamine putrescine biosynthesis pathway explained the previous finding that putrescine levels are decreased (28%) in temporal cortex of the AD patients. 45 , 46

### Metabolomic disruption across the AD spectrum

3.4

Metabolomic profiling revealed significant disruptions across the AD spectrum according to pairwise Wilcoxon rank‐sum tests, with 48 metabolites downregulated and 136 upregulated in the AD group, compared to 8 downregulated and 7 upregulated in the MCI group, and 3 downregulated and 13 upregulated in the SCD group (Figure 3A). Among the most significantly upregulated metabolites in AD were L‐alpha‐aminobutyric acid (AABA), acetylglycine, dimethylglycine (DMG), inosine, tauro‐omega‐muricholic acid, menadione, and D‐aspartic acid (Figure 3A, Figure S2). D‐aspartic acid levels in blood align with prior findings of elevated D‐aspartate in AD brain white matter, where levels were more than double those in healthy brains. 47 For the first time, AABA and acetylglycine were identified as potentially associated with metabolic dysfunction in AD, both linked to amino acid metabolism and previously implicated as biomarkers for conditions such as liver injury, sepsis, or metabolic disorders. 48 , 49 , 50 Notably, DMG and inosine, known for their neuroprotective effects, 51 , 52 , 53 were significantly elevated in AD patients, suggesting a compensatory response to neurodegenerative processes. Furthermore, tauro‐omega muricholic acid, involved in bile acid metabolism, and menadione, a key compound in vitamin K metabolism, showed significant increases.

> **FIGURE 3: Differential metabolites across groups. (A) Volcano plot showing differential metabolite abundance between HC and each other group, with log₂ (Fold Change) on the x‐axis and ‐log₁₀ (p‐value) on the y‐axis. Dashed lines indicate thresholds for significance (p < 0.05) and fold change (± 1). (B) PLS‐DA plot of metabolite abundance, illustrating group separation in the first two PLS components, which explain x% and y% of the variance. Ellipses (95% CI) enclose each group. CI, confidence interval; HC, healthy controls; PLS‐DA, partial least squares discriminant analysis.**

In contrast, taurocyamine was the most significantly downregulated metabolite in AD (Figure 3A, Figure S2), a compound that provided neuroprotection by regulating intracellular pH and neurotransmitter systems. 54 Sex steroid hormones were a big group decreased across the AD spectrum. Consistently, we observed reductions in progesterone, 17a‐hydroxyprogesterone, and androstenedione, in both MCI and AD subjects, as well as a decrease in dehydroepiandrosterone (DHEA) in both SCD and AD subjects.

ORA of the significantly altered metabolites identified disruptions in key pathways, including aspartate metabolism, glycine and serine metabolism, the urea cycle, and alanine metabolism, among others (Figure S3).

PLS‐DA revealed the progressive nature of metabolic alterations, with the AD group showing a distinct separation from the other groups, while the MCI and SCD groups displayed intermediate profiles with less pronounced separation from HC (Figure 3B).

### Progressive brain structure atrophy

3.5

Voxel‐based morphometry (VBM) analysis revealed significant volume differences in targeted brain regions between the SCD, MCI, and AD groups compared to HC according to pairwise Wilcoxon rank‐sum tests (Table S6–S7). These changes were visualized using volcano plots (Figure 4A) and highlighted on axial, coronal, and sagittal MRI views (Figure 4B). In SCD subjects, subtle changes were primarily observed in CSF‐filled spaces, including the left and right lateral ventricles, right temporal CSF, and right insula CSF, as well as in frontal lobe regions (right anterior cingulate gyrus and anterior orbital gyrus) associated with memory and emotional regulation. In the MCI group, a broader range of regions were affected, spanning nearly all major brain lobes (frontal, temporal, parietal, occipital), along with subcortical areas like the hippocampus and putamen, and the insular cortex, reflecting more extensive structural changes than SCD. Finally, the AD group revealed distinct brain alterations absent in the MCI and SCD groups, with extra ventricular enlargement and cerebellar involvement.

> **FIGURE 4: Differential brain regions across groups. (A) Volcano plot of brain region volumes, with log₂ (fold change) on the x‐axis and ‐log₁₀ (p‐value) on the y‐axis. Dashed lines denote significance (p < 0.05) and fold change thresholds (± 0.5). (B) Significantly changed brain regions highlighted on axial, coronal, and sagittal MRI views. (C) PLS‐DA plot of brain region volumes, showing group separation in the first two PLS components, explaining x% and y% of the variance, with 95% CI ellipses for each group. CI, confidence interval; MRI, magnetic resonance imaging; PLS‐DA, partial least squares discriminant analysis.**

PLS‐DA analysis of the altered brain regions further emphasized the progressive nature of brain atrophy, with a clear separation between the AD and HC groups, while the MCI and SCD groups showed more overlap with the HC group (Figure 4C).

### Distinct alterations in EEG PSD emerging from the SCD stage

3.6

Comparative analysis of EEG relative PSD across the delta, theta, alpha, beta1, beta2, gamma1, and gamma2 frequency bands revealed distinct patterns among the SCD, MCI, AD, and HC groups. Significant alterations in relative PSD were identified using pairwise Wilcoxon rank‐sum tests for each frequency band with topographical mapping illustrating the mean differences across groups (Figure 5). In SCD subjects, early changes were observed primarily in the beta2 and gamma1 bands. Beta2 activity showed a reduction in the posterior frontal lobe, while an increase was observed in the anterior frontal lobe. For the gamma1 band, reductions were localized to three distinct regions: the left frontal lobe, right frontal lobe, and right temporal lobe. Notably, in MCI subjects, no significant changes in PSD were observed across the examined frequency bands. In contrast, AD subjects exhibited widespread and distinct PSD changes across multiple frequency bands. The delta band showed a global increase, with the exception of the frontal cortex, central lobe, and a small region in the right temporal lobe. Similarly, the theta band displayed significant global enhancement, particularly in the parietal regions, while maintaining the same areas of exception as the delta band. Alpha activity was significantly reduced across the brain, with the most pronounced reductions in the parietal regions, although alpha activity persisted in the frontal pole. The beta1 band showed a localized reduction in the left temporal lobe.

> **FIGURE 5: EEG relative PSD topographic maps across comparisons. Topographic maps display significant mean differences (p < 0.05) in EEG relative power across frequency bands (delta, theta, alpha, beta1, beta2, gamma1, gamma2) for three comparisons: SCD versus HC, MCI versus HC, and AD versus HC. These significant differences are derived from the Wilcoxon rank‐sum test. Rows represent comparisons, and columns represent frequency bands. The color scales are centered at zero and individually adjusted for each frequency band to reflect the range of power changes. AD, Alzheimer's disease; EEG, electroencephalogram; HC, healthy controls; MCI, mild cognitive impairment; PSD, power spectral density; SCD, subjective cognitive decline.**

### Progressive disruptions in EEG functional connectivity

3.7

EEG functional connectivity (FC), assessed using the dwPLI, revealed distinct patterns of connectivity changes across the SCD, MCI, and AD groups compared to HC. Mean differences in connectivity across seven frequency bands were visualized as heatmaps (Figure 6A), with the most significant connections identified using pairwise Wilcoxon rank‐sum tests and displayed in connectome plots (Figure 6B). These findings highlight a progression of connectivity alterations from the early stages of SCD to advanced neurodegeneration in AD.

> **FIGURE 6: Differential FC across comparisons. (A) Heatmaps showing mean differences in FC across frequency bands (delta, theta, alpha, beta1, beta2, gamma1, gamma2) for three group comparisons: AD versus HC, MCI versus HC, and SCD versus HC. The color scale is centered at zero, with red indicating positive differences and blue indicating negative ones. Significant connections (p < 0.05) from the Wilcoxon rank‐sum test are marked by scatter dots—red for positive and white for negative differences. Connectivity matrices are organized by brain regions (frontal lobe, parietal lobe, temporal lobe, occipital lobe, and subcortical structures), separated by dashed lines to enhance the interpretation of connectivity patterns across distinct areas. (B) Connectome plots showing significant FC networks across EEG frequency bands (e.g., theta, alpha, delta) for comparisons: SCD versus HC, MCI versus HC, and AD versus HC. Each plot highlights connections with significant differences (p < 0.05) based on the Wilcoxon rank‐sum test, with connectivity change magnitude indicated by edge color. Positive differences above a threshold are shown in red, and negative differences below a threshold are in blue. The color scale is centered at zero and consistent across all bands and comparisons.**

In the SCD group, the theta band showed the most significant connectivity changes, characterized by widespread enhancement. The alpha band exhibited a non‐significant global increase in connectivity, while the gamma band displayed a global reduction. Connectivity changes in other frequency bands were largely scattered and less pronounced.

The MCI group exhibited the fewest changes in FC among the three cognitive decline groups compared to HC. The widespread theta band connectivity enhancement observed in SCD disappeared in MCI, replaced by significant reductions in FC within the frontal lobe. The most notable changes occurred in the gamma1 band, with significant enhancement concentrated within the temporal lobe and between the temporal lobe and subcortical structures.

In the AD group, FC changes were extensive and widespread. Theta connectivity showed a resurgence of enhancement, primarily concentrated within and between the parietal and occipital regions. Significant reductions in FC were observed across the alpha, beta1, beta2, and gamma1 bands, with the beta1 band displaying the most significantly altered connections. Reductions in the alpha and beta1 bands were global, while beta2 reductions were concentrated in the temporal and occipital lobes. The gamma1 band exhibited its most pronounced reductions in the occipital lobe.

### Integrating multimodal features for predictive modeling

3.8

Random forest models were employed to classify the three cognitive decline groups and HC using seven distinct feature groups, either individually or in combination: genetics, metagenomic species abundance, metagenomic pathways, metabolomics, brain region volumes, EEG relative PSD, and EEG FC (Table 1).

**TABLE 1: Performance metrics of single and combined modalities (in bold) for AD versus HC, MCI versus HC, and SCD versus HC classification**

| SCD versus HC |   |   |   |   |   |
|---|---|---|---|---|---|
| Genetics | 0.66 | 0.56 | 0.61 | 0.67 | 0.18 |
| Metabolomics | 0.73 | 0.83 | 0.78 | 0.97 | 0.38 |
| Metagenomic abudance | 0.88 | 0.33 | 0.34 | 0.21 | 0.49 |
| Metagenomic pathways | 0.7 | 0.72 | 0.71 | 0.85 | 0.53 |
| Brain region volume | 0.82 | 0.78 | 0.79 | 0.82 | 0.6 |
| EEG relative PSD | 0.82 | 0.78 | 0.8 | 0.84 | 0.69 |
| EEG FC | 0.81 | 0.84 | 0.82 | 0.94 | 0.68 |
| EEG combined | 0.84 | 0.84 | 0.84 | 0.91 | 0.78 |
| EEG + MRI | 0.84 | 0.84 | 0.84 | 0.91 | 0.74 |
| Meta combined | 0.7 | 0.72 | 0.71 | 0.85 | 0.53 |
| EEG + MRI + Meta | 0.84 | 0.84 | 0.84 | 0.91 | 0.78 |
| All | 0.84 | 0.84 | 0.84 | 0.91 | 0.78 |


For distinguishing SCD from HC, molecular features, including genetics, metabolomics, metagenomic abundance, and metagenomic pathways, demonstrated poor predictive power, with AUCs ranging from 0.18 to 0.53. Neuroimaging features showed more promise, with brain region volume, EEG relative PSD, and EEG FC achieving moderate performances (AUCs = 0.60, 0.69, and 0.68, respectively). The best predictive model combined EEG relative PSD and FC, reaching an AUC of 0.78. However, adding any other modalities did not further improve the model's performance.

For MCI versus HC, while genetic features still performed poorly (AUC = 0.39), metagenomic abundance (AUC = 0.69) and metabolomics (AUC = 0.74) demonstrated moderate predictive potential. EEG features maintained predictive power like that observed in SCD, with EEG relative PSD alone achieving an AUC of 0.76, although adding FC did not improve performance. MRI brain region volumes outperformed all individual modalities (AUC = 0.82) and combining EEG and metagenomic features further increased the AUC to 0.84, though additional features did not yield further gains.

For distinguishing AD from HC, individual modalities demonstrated moderate to strong performance, with AUCs ranging from 0.60 to 0.94. Genetic features had the lowest predictive power (AUC = 0.60), while metabolomics, metagenomic abundance, metagenomic pathways, and MRI performed strongly, with AUCs of 0.96, 0.94, 0.93, and 0.88, respectively. In comparison, the predictive power of EEG features was lower but consistent with their performance in SCD and MCI, with EEG PSD achieving an AUC of 0.68 and FC 0.77. Combining the two EEG features improved the AUC to 0.84. The highest predictive power was achieved by combining metagenomic features (abundance and pathways) with EEG and MRI, yielding an AUC of 0.98.

## DISCUSSION

4

In this study, we systematically investigated molecular, neurophysiological, and neurostructural changes throughout the progression of AD (Figure 7). Our findings demonstrate stage‐specific alterations across multiple modalities, offering valuable insights into the mechanisms underlying each stage of disease progression.

> **FIGURE 7: Biological changes during early stages of cognitive decline and progression to AD. AD, Alzheimer's disease; HC, healthy controls; MCI, mild cognitive impairment; SCD, subjective cognitive decline.**

In the SCD stage, neural electrical activity, as reflected by EEG signals, undergoes the most notable alterations. Localized changes in beta2 frequency PSD within the frontal lobe, along with reductions in gamma1 frequency in the frontal lobes and temporal lobe (Figure 5), suggest early dysfunctions in key cognitive regions. These regions are involved in decision‐making, attention, working memory, and cognitive processing and may be among the first to show functional impairments in SCD individuals. This aligns with their self‐reported cognitive difficulties. FC patterns further support these findings. The theta band, which is critical for cognitive processes such as learning and control, shows enhanced connectivity. In contrast, the gamma band, essential for large‐scale network activity and higher‐order functions like working memory and attention, exhibits reduced connectivity. Prior research has shown a negative correlation between theta connectivity and cognitive scores in AD, 55 while reduced gamma connectivity has been linked to cognitive decline in MCI and AD. 56 In our study, we confirm this pattern in the SCD stage, which could further suggest that the onset of cognitive complaints in SCD may coincide with the disruption of neural communication and synaptic efficiency. The observed enhancement in theta connectivity could reflect the brain's compensatory attempt to preserve baseline cognitive function by strengthening communication between regions. However, this compensatory hyperconnectivity may come at the cost of network efficiency, as it relies on low‐frequency synchrony rather than the more efficient, higher‐frequency gamma activity. Compensatory efforts extend beyond neural activity to include metabolomic changes. Specifically, there is a decrease in adenosine monophosphate (AMP) and an increase in cyclic AMP (cAMP), suggesting possible inhibition of phosphodiesterase (PDE), the enzyme that hydrolyzes cAMP to AMP. 57 This inhibition could potentially enhance cognitive functions. 58 Consistently, neuroprotective metabolites such as nicotinic acid, 59 retinol, 60 betaine, 61 and piperine 62 have been observed to increase. These metabolic compensatory mechanisms may stabilize neural activity despite ongoing neurodegeneration. Consequently, EEG alterations in MCI were less pronounced, with significant PSD changes seen in the SCD stage no longer present, and notable FC disruptions reduced—a compensatory phenomenon previously reported. 63 ,

However, molecular and neuroanatomical changes, particularly in metagenomics and structural MRI, became more prominent in MCI, suggesting dysfunctions along the gut–brain axis. Metagenomic alterations are characterized by shifts in microbial diversity, reduced abundance of key microbial species, and impaired functional pathways, while structural changes visible on MRI highlight widespread brain atrophy. The reduction in alpha diversity and increase in beta diversity of the microbiota (Figure 2A,B) suggest a loss of core beneficial species and an overgrowth of opportunistic or pathogenic ones. This imbalance weakens microbiome resilience and likely disrupts essential microbial functions that support neuronal health, as evidenced by the decline of key functional species, such as short‐chain fatty acid (SCFA) ‐producing bacteria (Figure 2D). Changes in microbial composition are accompanied by disturbances in corresponding functional pathways (Figure 2E). These disruptions affect amino acid metabolism, nucleotide biosynthesis, vitamin biosynthesis, and energy production. Such alterations may weaken neural support from the gut–brain axis, exacerbating neuronal stress and synaptic dysfunction. MRI‐detected brain atrophy corresponds to these disruptions and affects major regions, including all lobes and subcortical areas such as the hippocampus, putamen, and insular cortex (Figure 4A,B). This suggests that cognitive decline in MCI extends beyond memory‐related regions. It involves a broader network of brain areas responsible for memory, attention, language, and executive processing.

In AD, a widespread and systemic breakdown occurs across all modalities, compounded by an elevated genetic risk that is less apparent in the SCD and MCI stages. Neurophysiologically, the manifestation of alteration of certain EEG activities in SCD, although diminished in the MCI group, re‐appears as a systematic global disruption in AD (Figure 5). The most substantial changes include an increase in relative PSD within low‐frequency bands (delta and theta) and a decrease in high‐frequency bands (alpha and beta1). Additionally, FC in the theta band is significantly enhanced, whereas high‐frequency bands (alpha, beta1, beta2, gamma1) exhibit reduced connectivity. These findings align with previous observations, suggesting a slowing of neural oscillations as the brain shifts from efficient high‐frequency communication to slower, less efficient synchronization, characteristic of advanced cognitive decline. 64 These widespread changes indicate a breakdown in the brain's capacity for complex information integration and rapid neural processing. This disruption severely impacts cognitive control, sensory processing, and information integration. Structural MRI findings (Figure 4B) align with these observations, revealing advanced neurodegeneration. Key changes include ventricular enlargement and cerebellar involvement, which are associated with severe deficits in memory, executive functions, language, and visuospatial skills. 65 , 66

The neural changes in AD are paralleled by systemic dysfunctions, as evidenced by pronounced disruptions in metagenomics. Notably, blood–brain barrier (BBB) protective and anti‐inflammatory SCFA‐producing bacteria 67 decreased while pro‐inflammatory species increased (Figure 2D), suggesting an underlying systemic inflammatory response. As the BBB's permeability increases, neuroinflammatory agents and microbial metabolites may infiltrate the brain, further disrupting neural communication and accelerating neurodegeneration. This is further supported by a significant rise in altered blood metabolites in AD patients compared to those in the SCD and MCI groups (Figure 3A). The altered metabolites span a wide range, including amino acids, nucleotides, steroid hormones, fatty acids, phospholipids, organic acids, and vitamins, each involved in essential biological processes such as amino acid and nucleotide metabolism, vitamin biosynthesis, energy production, neurotransmission, and inflammatory responses, closely mirroring the metagenomic functional pathway alterations observed in MCI and AD. This supports the reasonable inference that dysfunctions in these metagenomic pathways, initially manifesting in the MCI stage, accumulate progressively, culminating in pronounced microbial functional shifts and notably, in distinct and significant corresponding metabolomic alterations in the AD stage.

### Clinical implications and potential interventions

4.1

Our findings highlight EEG's potential as an early biomarker for SCD, capable of detecting subtle neurophysiological changes with an AUC of 0.78 and specificity of 0.91, outperforming other individual or combined modalities for SCD prediction. While previous studies have demonstrated that EEG beta2 PSD can serve as a surrogate marker for memory impairment as early as the MCI stage, 68 our study extends this insight to the earlier SCD stage. Furthermore, our identification of significant gamma frequency changes in SCD subjects is unprecedented, 69 representing a novel contribution to the understanding of this early stage. These early alterations signal the onset of neural dysfunction, positioning EEG as a promising non‐invasive tool for early screening, and more importantly, highlighting a critical window for intervention. As such, techniques like repetitive transcranial magnetic stimulation (rTMS) and transcranial direct current stimulation (tDCS), known to modulate neural activity and enhance neuroplasticity, 70 may effectively mitigate early disruptions identified by EEG, stabilizing or even reversing neurophysiological changes and potentially delaying cognitive decline. Furthermore, the observed metabolomic compensatory mechanisms suggest targeting phosphodiesterase inhibition with commercially available inhibitors or enhancing neuroprotective metabolites through dietary supplements such as vitamin A (retinol), vitamin B₃ (nicotinic acid), betaine, and piperine.

Neuroanatomical changes in SCD are subtle yet present promising potential as biomarkers. While previous studies identified lateral ventricle enlargement starting at the MCI stage as a marker of AD progression, 66 our study extends this finding to SCD, demonstrating consistent lateral ventricular enlargement across the AD continuum (Figure 4A). Additionally, we observed increased CSF in the insula and temporal lobe, areas previously overlooked in AD research. Furthermore, consistent with prior research linking reduced cortical thickness in the anterior cingulate cortex to progression from amnestic MCI to AD, 71 we identified structural atrophy in the anterior cingulate gyrus in individuals with SCD. We also found atrophy in the anterior orbital gyrus, a region not previously associated with AD.

In the MCI stage, a multimodal approach integrating EEG, MRI, and metagenomics showed strong predictive power (AUC of 0.84, specificity of 0.97) for distinguishing MCI from HC, capturing both compensatory neural activity and emerging gut–brain axis dysfunctions. Targeting the gut–brain axis with prebiotics, probiotics, or fecal microbiota transplantation (FMT) may offer therapeutic benefits. For example, the decline in SCFA‐producing bacteria can be mitigated by increasing dietary fiber intake, presenting a promising strategy.

By the AD stage, individual metabolomic, metagenomic, EEG, and MRI features each provide high precision and specificity, enabling AD detection with significant accuracy. Each modality holds the potential to be developed into a simple, convenient, and cost‐effective screening method. For instance, combining specific metabolites (AABA, acetylglycine, tauro‐omega‐muricholic acid, and menadione) provides nearly perfect predictive performance, suggesting a promising path for AD screening based on these metabolic markers. This systemic disruption highlights a transition from regional to widespread neurodegeneration, thus indicating that a more comprehensive therapeutic approach is required.

### Conclusion and future directions

4.2

Overall, our findings reinforce the understanding that AD represents a stage of multisystem dysfunction. It is initiated by early neural disruptions and accompanied by compensatory metabolomic responses. This progression is followed by dysfunction in the gut–brain axis, compounded by impairment of the BBB, and culminates in widespread metabolic abnormalities and systemic breakdown (Figure 7). EEG proves to be a promising early‐stage screening tool for SCD, while metagenomics and MRI improve classification in MCI. In AD, multiple approaches achieve near‐perfect differentiation. Although the imbalance in participant numbers across different groups may limit the interpretation of our findings, future studies should validate these results in larger cohorts, ideally with more balanced group sizes and multi‐center collaborations. Additionally, further exploration of these biomarkers for monitoring disease progression is warranted.

## CONFLICT OF INTEREST STATEMENT

The authors declare no conflicts of interest. Author disclosures are available in the Supporting Information.

## CONSENT STATEMENT

All human subjects involved in this study provided informed consent prior to their participation.

## Supporting information

Supporting Information

Supporting Information

Supporting Information

## Acknowledgements

ACKNOWLEDGMENTSThe authors thank the Shenzhen Key Laboratory of Neurogenomics for assistance with sequencing and analysis. This study was supported by the Ministry of Science and Technology of China (Grant No. 2022ZD0211600), the National Key R&D Program of China (Grant No. 2023YFC3603300), the Natural Science Foundation of China (Grant No. 82371471), the Research Program of Central Health Commission (Grant No. 2024YB59), and the Special Foundation for Shenzhen Basic Research Program (Grant No. JCYJ20240813103817024).

## Funding

- the Ministry of Science and Technology of China2022ZD0211600
- National Key R&D Program of China 10.13039/5011000121662023YFC3603300
- Natural Science Foundation of China 10.13039/50110000180982371471
- Research Program of Central Health Commission2024YB59
- Special Foundation for Shenzhen Basic Research ProgramJCYJ20240813103817024

## References

1. 1 Gauthier S , Reisberg B , Zaudig M , et al. Mild cognitive impairment. Lancet. 2006;367(9518):1262‐1270. doi:10.1016/S0140-6736(06)68542-5 16631882 [PMID:16631882]
2. 2 Jessen F , Amariglio RE , van Boxtel M , et al. A conceptual framework for research on subjective cognitive decline in preclinical Alzheimer's disease. Alzheimers Dement. 2014;10(6):844‐852. doi:10.1016/j.jalz.2014.01.001 24798886 PMC4317324 [PMID:24798886]
3. 3 Jessen F , Amariglio RE , Buckley RF , et al. The characterisation of subjective cognitive decline. Lancet Neurol. 2020;19(3):271‐278. doi:10.1016/S1474-4422(19)30368-0 31958406 PMC7062546 [PMID:31958406]
4. 4 Zhang J , Zhang Y , Wang J , Xia Y , Zhang J , Chen L . Recent advances in Alzheimer's disease: mechanisms, clinical trials and new drug development strategies. Signal Transduct Target Ther. 2024;9(1):211. doi:10.1038/s41392-024-01911-3 39174535 PMC11344989 [PMID:39174535]
5. 5 Angelopoulou E , Paudel YN , Papageorgiou SG , Piperi C . APOE genotype and Alzheimer's disease: the influence of lifestyle and environmental factors. ACS Chem Neurosci. 2021;12(15):2749‐2764. doi:10.1021/acschemneuro.1c00295 34275270 [PMID:34275270]
6. 6 Seo DO , Holtzman DM . Current understanding of the Alzheimer's disease‐associated microbiome and therapeutic strategies. Exp Mol Med. 2024;56(1):86‐94. doi:10.1038/s12276-023-01146-2 38172602 PMC10834451 [PMID:38172602]
7. 7 Liu S , Zhong H , Zhu J , Wu L . Identification of blood metabolites associated with risk of Alzheimer's disease by integrating genomics and metabolomics data. Mol Psychiatr. 2024;29(4):1153‐1162. doi:10.1038/s41380-023-02400-9 PMC1117602938216726 [PMID:38216726]
8. 8 Teruya T , Chen YJ , Kondoh H , Fukuji Y , Yanagida M . Whole‐blood metabolomics of dementia patients reveal classes of disease‐linked metabolites. Proc Natl Acad Sci U S A. 2021;118(37):e2022857118. doi:10.1073/pnas.2022857118 34493657 PMC8449400 [PMID:34493657]
9. 9 Rossini PM , Di Iorio R , Vecchio F , et al. Early diagnosis of Alzheimer's disease: the role of biomarkers including advanced EEG signal analysis. Report from the IFCN‐sponsored panel of experts. Clin Neurophysiol. 2020;131(6):1287‐1310. doi:10.1016/j.clinph.2020.03.003 32302946 [PMID:32302946]
10. 10 Babiloni C , Arakaki X , Azami H , et al. Measures of resting state EEG rhythms for clinical trials in Alzheimer's disease: recommendations of an expert panel. Alzheimers Dement. 2021;17(9):1528‐1553.33860614 10.1002/alz.12311PMC8647863 [PMID:33860614]
11. 11 Fox NC , Schott JM . Imaging cerebral atrophy: normal ageing to Alzheimer's disease. Lancet. 2004;363(9406):392‐394. doi:10.1016/s0140-6736(04)15441-x 15074306 [PMID:15074306]
12. 12 Nativio R , Lan Y , Donahue G , et al. An integrated multi‐omics approach identifies epigenetic alterations associated with Alzheimer's disease. Nat Genet. 2020;52(10):1024‐1035. doi:10.1038/s41588-020-0696-0 32989324 PMC8098004 [PMID:32989324]
13. 13 Francois M , Karpe AV , Liu JW , et al. Multi‐omics, an integrated approach to identify novel blood biomarkers of Alzheimer's disease. Metabolites. 2022;12(10):949. doi:10.3390/metabo12100949 36295851 PMC9610280 [PMID:36295851]
14. 14 Vacher M , Canovas R , Laws SM , Doecke JD . A comprehensive multi‐omics analysis reveals unique signatures to predict Alzheimer's disease. Front Bioinform. 2024;4:1390607. doi:10.3389/fbinf.2024.1390607 38962175 PMC11219798 [PMID:38962175]
15. 15 Oka T , Matsuzawa Y , Tsuneyoshi M , et al. Multiomics analysis to explore blood metabolite biomarkers in an Alzheimer's Disease Neuroimaging Initiative cohort. Sci Rep. 2024;14(1):6797. doi:10.1038/s41598-024-56837-1 38565541 PMC10987653 [PMID:38565541]
16. 16 Lee LY , Vaghari D , Burkhart MC , et al. Robust and interpretable AI‐guided marker for early dementia prediction in real‐world clinical settings. eClinicalMedicine. 2024;74:102725. doi:10.1016/j.eclinm.2024.102725 39764178 PMC11701481 [PMID:39764178]
17. 17 Avelar‐Pereira B , Belloy ME , O'Hara R , Hosseini SMH ; Alzheimer's Disease Neuroimaging Initiative . Decoding the heterogeneity of Alzheimer's disease diagnosis and progression using multilayer networks. Mol Psychiatry. 2023;28(6):2423‐2432. doi:10.1038/s41380-022-01886-z 36539525 PMC10279806 [PMID:36539525]
18. 18 Deng J , Sun B , Kavcic V , Liu M , Giordani B , Li T . Novel methodology for detection and prediction of mild cognitive impairment using resting‐state EEG. Alzheimers Dement. 2024;20(1):145‐158. doi:10.1002/alz.13411 37496373 PMC10811294 [PMID:37496373]
19. 19 Li H , Durbin R . Fast and accurate short read alignment with Burrows‐Wheeler transform. Bioinformatics. 2009;25(14):1754‐1760. doi:10.1093/bioinformatics/btp324 19451168 PMC2705234 [PMID:19451168]
20. 20 McKenna A , Hanna M , Banks E , et al. The genome analysis toolkit: a MapReduce framework for analyzing next‐generation DNA sequencing data. Genome Res. 2010;20(9):1297‐1303. doi:10.1101/gr.107524.110 20644199 PMC2928508 [PMID:20644199]
21. 21 Lambert SA , Gil L , Jupp S , et al. The polygenic score catalog as an open database for reproducibility and systematic evaluation. Nat Genet. 2021;53(4):420‐425. doi:10.1038/s41588-021-00783-5 33692568 PMC11165303 [PMID:33692568]
22. 22 Sleiman PM , Qu HQ , Connolly JJ , et al. Trans‐ethnic genomic informed risk assessment for Alzheimer's disease: an International Hundred K+ Cohorts Consortium Study. Alzheimers Dement. 2023;19(12):5765‐5772. doi:10.1002/alz.13378 37450379 PMC10854406 [PMID:37450379]
23. 23 Yang F , Sun J , Luo H , et al. Assessment of fecal DNA extraction protocols for metagenomic studies. GigaScience. 2020;9(7):giaa071. doi:10.1093/gigascience/giaa071 32657325 PMC7355182 [PMID:32657325]
24. 24 Li R , Yu C , Li Y , et al. SOAP2: an improved ultrafast tool for short read alignment. Bioinformatics. 2009;25(15):1966‐1967.19497933 10.1093/bioinformatics/btp336 [PMID:19497933]
25. 25 Truong DT , Franzosa EA , Tickle TL , et al. MetaPhlAn2 for enhanced metagenomic taxonomic profiling. Nat Methods. 2015;12(10):902‐903.26418763 10.1038/nmeth.3589 [PMID:26418763]
26. 26 Franzosa EA , McIver LJ , Rahnavard G , et al. Species‐level functional profiling of metagenomes and metatranscriptomes. Nat Methods. 2018;15(11):962‐968.30377376 10.1038/s41592-018-0176-yPMC6235447 [PMID:30377376]
27. 27 Zhuye J , Suisha L , Qiuxia D , et al. A multi‐omic cohort as a reference point for promoting a healthy human gut microbiome. bioRxiv. 2019:585893. doi:10.1101/585893
28. 28 Pang Z , Lu Y , Zhou G , et al. MetaboAnalyst 6.0: towards a unified platform for metabolomics data processing, analysis and interpretation. Nucleic Acids Research. 2024;52(W1):W398‐W406. doi:10.1093/nar/gkae253 38587201 PMC11223798 [PMID:38587201]
29. 29 Delorme A , Makeig S . EEGLAB: an open source toolbox for analysis of single‐trial EEG dynamics including independent component analysis. J Neurosci Methods. 2004;134(1):9‐21. doi:10.1016/j.jneumeth.2003.10.009 15102499 [PMID:15102499]
30. 30 Vinck M , Oostenveld R , van Wingerden M , Battaglia F , Pennartz CM . An improved index of phase‐synchronization for electrophysiological data in the presence of volume‐conduction, noise and sample‐size bias. Neuroimage. 2011;55(4):1548‐1565. doi:10.1016/j.neuroimage.2011.01.055 21276857 [PMID:21276857]
31. 31 Oostenveld R , Fries P , Maris E , Schoffelen JM . FieldTrip: open source software for advanced analysis of MEG, EEG, and invasive electrophysiological data. Comput Intell Neurosci. 2011;2011:156869. doi:10.1155/2011/156869 21253357 PMC3021840 [PMID:21253357]
32. 32 Desikan RS , Ségonne F , Fischl B , et al. An automated labeling system for subdividing the human cerebral cortex on MRI scans into gyral based regions of interest. Neuroimage. 2006;31(3):968‐980. doi:10.1016/j.neuroimage.2006.01.021 16530430 [PMID:16530430]
33. 33 Leylabadlo HE , Ghotaslou R , Feizabadi MM , et al. The critical role of Faecalibacterium prausnitzii in human health: an overview. Microb Pathog. 2020;149:104344. doi:10.1016/j.micpath.2020.104344 32534182 [PMID:32534182]
34. 34 Ferreiro AL , Choi J , Ryou J , et al. Gut microbiome composition may be an indicator of preclinical Alzheimer's disease. Sci Transl Med. 2023;15(700):eabo2984. doi:10.1126/scitranslmed.abo2984 37315112 PMC10680783 [PMID:37315112]
35. 35 Lopez‐Siles M , Duncan SH , Garcia‐Gil LJ , Martinez‐Medina M . Faecalibacterium prausnitzii : from microbiology to diagnostics and prognostics. ISME J. 2017;11(4):841‐852.28045459 10.1038/ismej.2016.176PMC5364359 [PMID:28045459]
36. 36 Shao L , Ling Z , Chen D , Liu Y , Yang F , Li L . Disorganized gut microbiome contributed to liver cirrhosis progression: a meta‐omics‐based study. Front Microbiol. 2018;9:3166. doi:10.3389/fmicb.2018.03166 30631318 PMC6315199 [PMID:30631318]
37. 37 Yan M , Man S , Sun B , et al. Gut liver brain axis in diseases: the implications for therapeutic interventions. Signal Transduct Target Ther. 2023;8(1):443. doi:10.1038/s41392-023-01673-4 38057297 PMC10700720 [PMID:38057297]
38. 38 El Mouzan M , Assiri A , Al Sarkhy A . Gut microbiota predicts the diagnosis of celiac disease in Saudi children. World J Gastroenterol. 2023;29(13):1994‐2000. doi:10.3748/wjg.v29.i13.1994 37155522 PMC10122788 [PMID:37155522]
39. 39 Cai X , Dai J , Xie Y , Xu S , Liu M . Multi‐omics study unravels gut microbiota and metabolites alteration in patients with Wilson's disease. Sci Rep. 2024;14(1):21025. doi:10.1038/s41598-024-71740-5 39251728 PMC11384772 [PMID:39251728]
40. 40 Asgharian M , Gholizadeh P , Samadi Kafil H , et al. Correlation of inflammatory biomarkers with the diversity of Bacteroidaceae, Bifidobacteriaceae, Prevotellaceae and Lactobacillaceae families in the intestinal microbiota of patients with end stage renal disease. Adv Med Sci. 2022;67(2):304‐310. doi:10.1016/j.advms.2022.07.004 35994929 [PMID:35994929]
41. 41 Li M , Liu B , Li R , Yang P , Leng P , Huang Y . Exploration of the link between gut microbiota and purinergic signalling. Purinergic Signal. 2023;19(1):315‐327. doi:10.1007/s11302-022-09891-1 36121551 PMC9984663 [PMID:36121551]
42. 42 Yu H , Li X , Duchoud F , Chuang DS , Liao JC . Augmenting the Calvin–Benson–Bassham cycle by a synthetic malyl‐CoA‐glycerate carbon fixation pathway. Nat Commun. 2018;9(1):2008. doi:10.1038/s41467-018-04417-z 29789614 PMC5964204 [PMID:29789614]
43. 43 Parnetti L , Gaiti A , Polidori MC , et al. Increased cerebrospinal fluid pyruvate levels in Alzheimer's disease. Neurosci Lett. 1995;199(3):231‐233. doi:10.1016/0304-3940(95)12058-c 8577405 [PMID:8577405]
44. 44 Dhir S , Tarasenko M , Napoli E , Giulivi C . Neurological, psychiatric, and biochemical aspects of thiamine deficiency in children and adults. Front Psychiatr. 2019;10:207. doi:10.3389/fpsyt.2019.00207 PMC645902731019473 [PMID:31019473]
45. 45 Morrison LD , Kish SJ . Brain polyamine levels are altered in Alzheimer's disease. Neurosci Lett. 1995;197(1):5‐8. doi:10.1016/0304-3940(95)11881-v 8545054 [PMID:8545054]
46. 46 Makletsova MG , Rikhireva GT , Kirichenko EY , Trinitatsky IY , Vakulenko MY , Ermakov AM . The role of polyamines in the mechanisms of cognitive impairment. J Neurochem. 2022;16(3):283‐294. doi:10.1134/s1819712422030059
47. 47 Cheng YJ , Lin CH , Lane HY . d‐amino acids and pLG72 in Alzheimer's disease and schizophrenia. Int J Mol Sci. 2021;22(20):10917. doi:10.3390/ijms222010917 34681579 PMC8535920 [PMID:34681579]
48. 48 Wang Z , Bian L , Mo C , et al. Quantification of aminobutyric acids and their clinical applications as biomarkers for osteoporosis. Commun Biol. 2020;3(1):39.31969651 10.1038/s42003-020-0766-yPMC6976694 [PMID:31969651]
49. 49 Effros RM . Alpha aminobutyric acid, an alternative measure of hepatic injury in sepsis?. Transl Res. 2011;158(6):326‐327.22061039 10.1016/j.trsl.2011.07.003 [PMID:22061039]
50. 50 Yudkoff M , Blazer‐Yost B , Cohn R , Segal S . On the clinical significance of the plasma α‐amino‐n‐butyric acid: leucine ratio2. Am J Clin Nutr. 1979;32(2):282‐285.420125 10.1093/ajcn/32.2.282 [PMID:420125]
51. 51 Dhanjal DS , Bhardwaj S , Chopra C , et al. Millennium nutrient N,N‐Dimethylglycine (DMG) and its effectiveness in autism spectrum disorders. Curr Med Chem. 2022;29(15):2632‐2651. doi:10.2174/0929867328666211125091811 34823458 [PMID:34823458]
52. 52 Kendall RV , Lawson JW . Recent findings on N, N‐Dimethylglycine (DMG): a nutrient for the new millennium. Townsend letter for Doctors and Patients. 2000:75‐85.
53. 53 Kim IS , Jo EK . Inosine: a bioactive metabolite with multimodal actions in human diseases. Front Pharmacol. 2022;13:1043970. doi:10.3389/fphar.2022.1043970 36467085 PMC9708727 [PMID:36467085]
54. 54 Mori A . Guanidines 2: Further Explorations of the Biological and Clinical Significance of Guanidino Compounds. Springer Science & Business Media; 2012.
55. 55 Yan Y , Zhao A , Ying W , et al. Functional connectivity alterations based on the weighted phase lag index: an exploratory electroencephalography study on Alzheimer's disease. Curr Alzheimer Res. 2021;18(6):513‐522. doi:10.2174/1567205018666211001110824 34598666 [PMID:34598666]
56. 56 Cuesta P , Ochoa‐Urrea M , Funke M , et al. Gamma band functional connectivity reduction in patients with amnestic mild cognitive impairment and epileptiform activity. Brain Commun. 2022;4(2):fcac012. doi:10.1093/braincomms/fcac012 35282163 PMC8914494 [PMID:35282163]
57. 57 Yan K , Gao LN , Cui YL , Zhang Y , Zhou X . The cyclic AMP signaling pathway: exploring targets for successful drug discovery (Review). Mol Med Rep. 2016;13(5):3715‐3723. doi:10.3892/mmr.2016.5005 27035868 PMC4838136 [PMID:27035868]
58. 58 García‐Osta A , Cuadrado‐Tejedor M , García‐Barroso C , Oyarzábal J , Franco R . Phosphodiesterases as therapeutic targets for Alzheimer's disease. ACS Chem Neurosci. 2012;3(11):832‐844. doi:10.1021/cn3000907 23173065 PMC3503343 [PMID:23173065]
59. 59 Moutinho M , Tsai AP , Puntambekar SS , et al. Therapeutic potential of niacin in Alzheimer's disease. Alzheimers Dement. 2020;16(S9):e040679. doi:10.1002/alz.040679
60. 60 Das BC , Dasgupta S , Ray SK . Potential therapeutic roles of retinoids for prevention of neuroinflammation and neurodegeneration in Alzheimer's disease. Neural Regen Res. 2019;14(11):1880‐1892. doi:10.4103/1673-5374.259604 31290437 PMC6676868 [PMID:31290437]
61. 61 Ibi D , Hirashima K , Kojima Y , et al. Preventive effects of continuous betaine intake on cognitive impairment and aberrant gene expression in hippocampus of 3xTg mouse model of Alzheimer's disease. J Alzheimers Dis. 2021;79(2):639‐652. doi:10.3233/jad-200972 33337369 [PMID:33337369]
62. 62 Wang C , Cai Z , Wang W , et al. Piperine attenuates cognitive impairment in an experimental mouse model of sporadic Alzheimer's disease. J Nutr Biochem. 2019;70:147‐155. doi:10.1016/j.jnutbio.2019.05.009 31207354 [PMID:31207354]
63. 63 Gaubert S , Raimondo F , Houot M , et al. EEG evidence of compensatory mechanisms in preclinical Alzheimer's disease. Brain. 2019;142(7):2096‐2112. doi:10.1093/brain/awz150 31211359 [PMID:31211359]
64. 64 Kopcanova M , Tait L , Donoghue T , et al. Resting‐state EEG signatures of Alzheimer's disease are driven by periodic but not aperiodic changes. Neurobiol Dis. 2024;190:106380. doi:10.1016/j.nbd.2023.106380 38114048 [PMID:38114048]
65. 65 Jacobi H , Faber J , Timmann D , Klockgether T . Update cerebellum and cognition. J Neurol. 2021;268(10):3921‐3925. doi:10.1007/s00415-021-10486-w 33656586 PMC8463403 [PMID:33656586]
66. 66 Nestor SM , Rupsingh R , Borrie M , et al. Ventricular enlargement as a possible measure of Alzheimer's disease progression validated using the Alzheimer's disease neuroimaging initiative database. Brain. 2008;131(9):2443‐2454. doi:10.1093/brain/awn146 18669512 PMC2724905 [PMID:18669512]
67. 67 Loh JS , Mak WQ , Tan LKS , et al. Microbiota‐gut‐brain axis and its therapeutic applications in neurodegenerative diseases. Signal Transduct Target Ther. 2024;9(1):37. doi:10.1038/s41392-024-01743-1 38360862 PMC10869798 [PMID:38360862]
68. 68 Kaiser AK , Doppelmayr M , Iglseder B . EEG beta 2 power as surrogate marker for memory impairment: a pilot study. Int Psychogeriatr. 2017;29(9):1515‐1523. doi:10.1017/S1041610217000758 28528599 [PMID:28528599]
69. 69 Perez V , Duque A , Hidalgo V , Salvador A . EEG frequency bands in subjective cognitive decline: a systematic review of resting state studies. Biol Psychol. 2024;191:108823. doi:10.1016/j.biopsycho.2024.108823 38815895 [PMID:38815895]
70. 70 Bhattacharya A , Mrudula K , Sreepada SS , et al. An overview of noninvasive brain stimulation: basic principles and clinical applications. Can J Neurol Sci. 2022;49(4):479‐492. doi:10.1017/cjn.2021.158 34238393 [PMID:34238393]
71. 71 Jeong HJ , Lee YM , Park JM , et al. Reduced thickness of the anterior cingulate cortex as a predictor of amnestic‐mild cognitive impairment conversion to Alzheimer's disease with psychosis. J Alzheimers Dis. 2021;84(4):1709‐1717. doi:10.3233/jad-215005 34719496 [PMID:34719496]
