---
pmid: "39511865"
pmc: "PMC11667526"
doi: "10.1002/alz.14319"
title: "Assessing polyomic risk to predict Alzheimer's disease using a machine learning model"
journal: "Alzheimer's & Dementia"
year: 2024
authors:
  - name: "Ngai Tiffany"
    affiliations:
      - "Department of Neurology Genetics and Aging Research Unit and the McCance Center for Brain Health Massachusetts General Hospital and Harvard Medical School Charlestown Massachusetts USA"
      - "Department of Systems Design Engineering University of Waterloo Waterloo Ontario Canada"
  - name: "Willett Julian"
    affiliations:
      - "Department of Neurology Genetics and Aging Research Unit and the McCance Center for Brain Health Massachusetts General Hospital and Harvard Medical School Charlestown Massachusetts USA"
  - name: "Waqas Mohammad"
    affiliations:
      - "Department of Neurology Genetics and Aging Research Unit and the McCance Center for Brain Health Massachusetts General Hospital and Harvard Medical School Charlestown Massachusetts USA"
  - name: "Fishbein Lucas H."
    affiliations:
      - "Department of Neurology Genetics and Aging Research Unit and the McCance Center for Brain Health Massachusetts General Hospital and Harvard Medical School Charlestown Massachusetts USA"
  - name: "Choi Younjung"
    affiliations:
      - "Department of Neurology Genetics and Aging Research Unit and the McCance Center for Brain Health Massachusetts General Hospital and Harvard Medical School Charlestown Massachusetts USA"
  - name: "Hahn Georg"
    affiliations:
      - "Division of Pharmacoepidemiology and Pharmacoeconomics Department of Medicine Brigham and Women's Hospital and Harvard Medical School Boston Massachusetts USA"
  - name: "Mullin Kristina"
    affiliations:
      - "Department of Neurology Genetics and Aging Research Unit and the McCance Center for Brain Health Massachusetts General Hospital and Harvard Medical School Charlestown Massachusetts USA"
  - name: "Lange Christoph"
    affiliations:
      - "Channing Division of Network Medicine Department of Medicine Brigham and Women's Hospital and Harvard Medical School Boston Massachusetts USA"
      - "Department of Biostatistics Harvard T.H. Chan School of Public Health Boston Massachusetts USA"
  - name: "Hecker Julian"
    affiliations:
      - "Channing Division of Network Medicine Department of Medicine Brigham and Women's Hospital and Harvard Medical School Boston Massachusetts USA"
  - name: "Tanzi Rudolph E."
    affiliations:
      - "Department of Neurology Genetics and Aging Research Unit and the McCance Center for Brain Health Massachusetts General Hospital and Harvard Medical School Charlestown Massachusetts USA"
  - name: "Prokopenko Dmitry"
    affiliations:
      - "Department of Neurology Genetics and Aging Research Unit and the McCance Center for Brain Health Massachusetts General Hospital and Harvard Medical School Charlestown Massachusetts USA"
---

# Assessing polyomic risk to predict Alzheimer's disease using a machine learning model

## Abstract

### INTRODUCTION

Alzheimer's disease (AD) is the most common form of dementia in the elderly. Given that AD neuropathology begins decades before symptoms, there is a dire need for effective screening tools for early detection of AD to facilitate early intervention.

### METHODS

Here, we used tree‐based and deep learning methods to train polyomic prediction models for AD affection status and age at onset, employing genomic, proteomic, metabolomic, and drug use data from UK Biobank. We used SHAP to determine the feature's importance.

### RESULTS

Our best‐performing polyomic model achieved an area under the receiver operating characteristics curve (AUROC) of 0.87. We identified GFAP and CXCL17 proteins to be the strongest predictors of AD, besides apolipoprotein E (APOE) alleles. Increasing the number of cases by including “AD‐by‐proxy” cases did not improve AD prediction.

### DISCUSSION

Among the four modalities, genomics, and proteomics were the most informative modality based on AUROC (area under the receiver operating characteristic curve). Our data suggest that two blood‐based biomarkers (glial fibrillary acidic protein [GFAP] and CXCL17) may be effective for early presymptomatic prediction of AD.

### Highlights

We developed a polyomic model to predict AD and age‐at‐onset using omics and medication use data from EHR.We identified GFAP and CXCL17 proteins to be the strongest predictors of AD, besides APOE alleles.“AD‐by‐proxy” cases, if used in training, do not improve AD prediction.Proteomics was the most informative modality overall for affection status and AAO prediction.

## INTRODUCTION

1

Alzheimer's disease (AD) is the most common form of dementia. It is estimated that 22% of all persons aged 50 and above are in the AD continuum worldwide, and there are more than 50 million dementia patients globally, costing more than a trillion US dollars per year. 1 The number of people with dementia is expected to reach 152.8 million cases in 2050. 2 AD pathological changes arise decades before symptom onset 3 ; hence, the most promising therapeutic approach to preventing AD would require early detection and early intervention, presymptomatically. Most AD patients remain undiagnosed in the early stages of the disease due to limited testing for presymptomatic neuropathology and limited ability to predict the lifelong risk of AD, which is currently based on genetic testing alone. 4 , 5 While AD screening via positron emission tomography (PET) and cerebrospinal fluid (CSF) has promise, 6 their cost and invasiveness are limiting broader use. Diagnostic blood‐based biomarkers for the presence of AD neuropathology, for example, amyloid‐β42:40 ratio and phospho‐Tau (pTau217) now provide more accessible screening solutions. 7

Despite progress in our ability to diagnose AD neuropathology presymptomatically, the field is currently lacking the means to accurately predict risk for AD beyond genetic assessments utilizing apolipoprotein E (APOE) genotyping and limited polygenic risk scores. Combining “omics” modalities (genomics, proteomics, metabolomics) with electronic health record (EHR) data could enable superior predictions. Genomics describes the complete sequence of DNA in an organism and is fixed from birth. Proteomics is a set of expressed proteins that helps to characterize the information flow within the cell and organism in the form of protein pathways and networks. Metabolomics provides information about the effects of metabolism and some closely link it to phenotype. 8 , 9 , 10 By integrating and analyzing different omics data together with EHR data, a more holistic picture of biological mechanisms may be unraveled, and novel biomarkers identified.

With advancements in computing resources, algorithms, and new datasets, efficient machine learning (ML) methods that can process multiple data modalities show promise in translational research. ML can recognize complex patterns and capture nonlinear relationships for a broad range of tasks, including disease and patient outcome predictions. 8 , 11 , 12 Deep learning multimodal models and logistic regression models focusing on a single modality have been done for AD case–control prediction, incorporating genetic and phenotypic data 13 with gene expression and DNA methylation data. 14 , 15 In broader investigations, ML models have been used to predict affection status or age at onset (AAO) for multiple diseases using metabolomic and genomic data, 16 EHR and genomic data, 17 as well as single layers of omics data. 18 , 19 , 20

In addition, there were attempts to use multiple omics data to predict AD and/or gain insight related to AD in cohorts other than UK Biobank (UKB). For example, RNAseq, metabolomics, and lipidomics 21 ; proteomics, metabolomics, lipidomics, one‐carbon metabolism, and neuroinflammation‐related molecules 21 , 22 ; metabolomics and proteomics 23 , 24 ; genomics, methylation (CpG), RNAseq, and proteomics. 25 Specifically, Vacher et al. found that genomics and proteomics, 25 and Gómez‐Pascual et al. found that metabolomics and proteomics 23 produced similar results for AD affection status prediction. Others have used hazard models and multiomic data to predict disease‐free survival for AD. 26 , 27

Here, we used multiple omics layers, specifically genomics, proteomics and metabolomics, together with medication use data from UKB, to classify subjects with and without AD and predict AD AAO using ML methods. Specifically, we focused on gradient boosting tree‐based algorithms. Our developed polyomic models performed better than our single modality models. Importantly, we also found that using AD‐by‐proxy phenotype to label AD cases degraded model performance. We found that the early fusion polyomic model, which combined genomic and proteomic data at the feature level was the best model for AD affection status based on ROC AUC (highest area under the receiver operating characteristic curve), the early fusion polyomic model which combined all modalities (genomic, proteomic, metabolomic, and medication use data) was the best model for AD affection status based on PR AUC (area under the precision recall curve), the early fusion polyomic model which combined genomic, proteomic, and medication use data was the best model for AAO prediction (lowest mean squared error [MSE]) and highlighted the most predictive features in each layer.

## METHODOLOGY

2

### Data collection

2.1

The UKB dataset, a large‐scale biomedical database with health information from half a million UK participants, in which 94% of the participants are of white ethnicity, 28 was used for training, testing, and validation of the model. Among genomic data, whole genome sequencing data, whole exome sequencing data, and array genotyped data are available in the UKB. In this study, we analyzed imputed array genotypes from 487,084 participants using the TOPMed R2 panel. 29 , 30 With regard to metabolomic data, a high‐throughput NMR metabolomics platform from Nightingale was used to undertake metabolomic profiling for 249 metabolites in blood samples collected from 275,347 UKB participants, 28 , 31 , 32 where 5.7% of them have repeated visits. In these cases, only data from the latest visit was included in the study. For proteomic data, the Olink Explore 1536 platform was used to perform proteomic profiling for 1463 unique proteins in blood samples collected from 54,306 UKB participants 33 46,673 participants were randomly selected at baseline visit, 6385 participants were selected by the UKB‐PPP consortium at baseline visit, and 1268 participants participated in the coronavirus disease 2019 (COVID‐19) repeat imaging study at multiple visits. 34 The proteomic readings from multiple visits of the 1268 participants who enrolled in the COVID‐19 study were excluded in this study to remove duplicates. We extracted medication use data from EHR. There were 6745 medication categories for approximately 377,180 participants; information was collected via touchscreen and verbal interview, and some participants had drug use data from multiple visits, 28 drugs from multiple visits were combined across visits to form the final list of drugs being used in the analysis. The overall workflow of the study is described in Figure 1.

RESEARCH IN CONTEXT Systematic review: The authors reviewed the previous literature on machine learning methods and models that have been used to predict Alzheimer's disease (AD). While there are several publications that have utilized different modalities to predict AD, only a limited number of studies have investigated the combinations of different modalities to predict AD. These relevant citations are appropriately cited. Interpretation: We identified that combining several layers of omics data with electronic health records improves AD prediction. Besides apolipoprotein E (APOE) alleles, glial fibrillary acidic protein (GFAP) and CXCL17 proteins were the strongest predictors of AD. Increasing the number of cases by including “AD‐by‐proxy” cases did not improve AD prediction. Future directions: Our developed polyomic machine learning model could inform early presymptomatic prediction which can potentially lead to early intervention of AD. Future studies should be aimed at extension, evaluation, and model finetuning by using additional modalities (e.g., imaging data), and other large independent datasets with well‐defined AD cases and multiomics.

> **FIGURE 1: Workflow. Genomic, proteomic, metabolomic, and medication use data were extracted from the UKB and preprocessed. Next, we trained various models to find the best‐performing model trained on the intersection dataset (see also Figure 2). The best machine learning models were used for feature importance evaluation using SHAP. UKB, UK Biobank.**

### Data preprocessing

2.2

To obtain a clean dataset that could be used to train different ML models, multiple preprocessing steps were performed. Data for different modalities were extracted and preprocessed separately, but the label assignment step was similar across modalities. Below, we describe how different omics datasets were preprocessed.

Essential EHR data of all 502,364 UKB participants were first extracted using the DNANexus Spark Cluster tool (Spark). This extracted dataset contained information that could be used to assign labels for both case–control (disease status) and AAO prediction models. Three different phenotypic definitions for AD cases were investigated in this study: International Classification of Diseases, 10th revision (ICD10), AD‐by‐proxy, and both combined. ICD10 cases were defined to be participants who were reported to have dementia in AD (F00) or AD (G30). 35 AD‐by‐proxy cases definition as described in Jansen et al. was based on the individual's diagnosis, parents’ diagnosis, and parents’ ages. 36 The ICD10 and AD‐by‐proxy cases were defined to be cases when any of the above was true (ICD10 or AD‐by‐proxy). For the ICD10 and AD‐by‐proxy definitions, since the AD‐by‐proxy definition includes participants diagnosed with AD based on ICD10 codes when quality control (QC) is performed on the AD‐by‐proxy cohort, ICD10 cases might be excluded. However, to maximize the number of cases, ICD10 cases being filtered out were re‐included in the analysis dataset. However, if the filtered data point was not an ICD10 case, it would not be re‐included in the analysis.

QC criteria were based on data validity, availability, and missingness, specifically, subjects with no parental history or invalid response, were removed from the dataset (Figure S1). Having both phenotypes for investigation allows us to explore the effect of QC on AD prediction. For affection status prediction results, if no phenotype definition was explicitly stated in the results, specifically in the tables/graphs/charts, we used the ICD10 definition by default. Controls aged 65 or less (genomic and medication/drug data use the age at recruitment, metabolomic and proteomic data use the age at which the blood sample is taken) were removed from the dataset. For fusion models, current age (i.e., age of birth to the day of analysis) is being used as the predictor. In addition, AD‐by‐proxy cases were also removed from controls when using the ICD10 case definition. These filtering steps were aimed at lowering the possibility of having mislabeled data, to increase the specificity of the model to AD. These steps also help counteract data imbalance between cases and controls and lower the risk of employing a model that is heavily biased toward inferring controls. The AAO label was only available for the ICD10 phenotype definition. Controls were removed from the ICD10 dataset, and the AAO date used was the reported date that was earlier for F00 and G30. Different modalities data were extracted using the DNANexus platform, and the extracted data were merged with the essential EHR dataset and preprocessed.

After the preliminary filtering step described above, additional preprocessing steps were performed for each modality. With regard to genomic data (n = 65,214), 26 single nucleotide polymorphisms (SNPs) from the imputed genotype data were extracted. The 26 SNPs included the two APOE SNPs (rs429358 and rs7412) 37 and 24 SNPs, representing genome‐wide significant variants described in Kunkle et al. 38 For metabolomic data (n = 35,808), some preprocessing steps were performed to transform the rows arranged by participants to by visits, and the data from the last visit is being used. After that, visits with no metabolite reading were dropped. As for proteomic data (n = 7932), subjects with no proteomic data were dropped. For EHR data (UKB Date‐Field 20003), the list of medications/drugs from multiple visits was combined into a single list and transformed to one‐hot encodings. If a particular medication was taken by less than 10 subjects, it was excluded. Subjects that did not have any medication intake information were also dropped, resulting in a total number of 3815 drugs and 57,947 subjects. After preparing single modality datasets, single modalities were inner‐joined to form an intersection dataset (n = 3727), this means the intersection dataset only contains subjects with data from all modalities available. The intersection dataset was used to train the fusion models (Figure 2). The mean percentage of missingness across metabolites and proteins was 0.12% and 2.89%, respectively. The missingness percentage of both of these modalities was below 5%, which is often ruled as insignificant. 39 , 40 A sensitivity analysis was completed using paired t‐tests as well as Wilcoxon signed‐rank tests to understand the impact that various imputation strategies had on the analysis outcomes with no significant difference found between the various strategies used, in this case, mean, median and K‐Nearest Neighbor imputation. Therefore, missing values were imputed with the training means during the training, testing, and validation process for simplicity.

> **FIGURE 2: Data distribution for different modalities using the ICD10 phenotype definition following data preprocessing. The intersection dataset was referred to as the intersection of all four single modalities—genomic, proteomic, metabolomic, and EHR/drug. Single modality datasets were referred to as the entire dataset available for each modality (i.e., the entire circle). EHR, electronic health record; ICD10, International Classification of Diseases, 10th revision.**

### Models used

2.3

Six models, namely light gradient‐boosting machine (LGBM), CatBoost, XGB (eXtreme Gradient Boosting), TabNet, logistic regression, and linear regression were evaluated in this study. LGBM, CatBoost, and XGB are all gradient boosting tree‐based algorithms, 41 while TabNet is a deep tabular data learning architecture. 42 Gradient‐boosting trees have shown outstanding performance for tabular data in small or medium datasets (with data points less than 1 m). 43 Hence, most models were gradient‐boosting trees. Logistic regression and linear regression models served as baseline models. Specifically, the sex and age logistic regression was used as the baseline model for case–control prediction, and the sex linear regression was used as the baseline model for AAO prediction.

With regard to the hyperparameters, we mostly use the default hyperparameters. In general, if the positive weighting hyperparameter is available, we use a weighting of 10, and we use 0.3 for regularization if the regularization flag is set for the training process. If early stopping is set to be true, we specify the iteration and early_stopping_rounds to be 1000 and 100, respectively for the gradient boosting trees; patience of 20, and maximum number of epochs of 200 for TabNet. For XGB, we used “binary:logistic” as the optimization objective, “logloss” for eval_metric, 42 for the random state. For TabNet, a batch size of 256 is being used.

### Metrics used

2.4

The area under the receiver operating characteristic curve (AUROC/AUC/ROC AUC) is the metric used to determine the best model for case–control prediction, 6 , 17 , 44 and the MSE is the metric used to determine the best model for AAO prediction. 45 For case–control prediction, other metrics including accuracy, precision, recall, and precision‐recall area under the curve (AUPRC/PR AUC) provided additional information about the model performance.

### Training on multiple data modalities (multimodal training)

2.5

To study the effect of different data modalities, the intersection dataset was used to train multimodal models. The intersection dataset was randomly split into a training, a test, and a validation set with a 0.8, 0.1, and 0.1 ratio, respectively. For gradient‐boosting trees, the gradient values of the positive class (cases) were set to be 10 times higher than the negative class (control) (scale_pos_weight = 10) to help address the class imbalance. 46 The weighting is applied to the ICD10 phenotype definition only, not to the AD‐by‐proxy or AD‐by‐proxy+ICD10 phenotype definitions due to the huge class imbalance for the ICD10 phenotype definition. Even if positive weighting is applied during training, we still expect the model to be biased toward predicting controls because the dataset is relatively imbalanced. In addition, the validation set was used for early stopping for the deep learning model. For the case–control model, stratified splitting was incorporated to ensure different datasets had a similar case–control ratio, and both sex and age were concatenated to the dataset since they are strong indicators for AD.

For the AAO model, only cases in the intersection dataset were used, and only sex was concatenated to the dataset because AD AAO should be independent of the actual age of the subject. After splitting the datasets, missing values were imputed using the mean of the training set, and the features were normalized using z‐score standardization. Other normalization methods, including min–max scaling, 47 power transformation, 48 and no transformation, showed similar performance when evaluated on a subset of the data. The training pipeline first trains the model with the training set, tunes the hyperparameters with the validation set, and finally evaluates the model performance with the test set. The same training process is applied to single‐modality datasets (Figure 2) to obtain the single‐modality results (Table S1).

Early and late fusion methods are two of the most common methods to combine different modalities. Early fusion integrates modalities at the feature level. Different data modalities are combined prior to training, and the combined dataset is used for training, testing, and validation. Late fusion integrates modalities at the outcome level. A model is trained separately on each data modality, then the predicted outcomes (i.e., the affection status or AAO predictions from different models) are combined using a meta‐model to predict the final outcome. 49

For early fusion models, different modality combinations were trained with the four modalities: genomics, proteomics, metabolomics, and medication use data. The combinations included all the pairwise, triplet, and quadruplet combinations, resulting in a total of 11 combinations. Modalities that were not considered were dropped from the intersection dataset, and this new dataset was used for training. For example, to train the early fusion model that fuses the genomics, proteomics, and metabolomics modality, drug modality in the intersection dataset was dropped, and this dataset was used in the training pipeline (Figure S2).

As for late fusion models, an additional step was required. The best performing (based on AUROC) single modality model trained on the intersection dataset was first identified for each modality. The prediction from the best model of each modality was concatenated, and a meta‐model was trained. The output of the meta‐model was the prediction for the late fusion model. For example, to train the late fusion model that fuses the genomics, proteomics, and metabolomics modality, the best model out of all the listed models mentioned in the “Model Used” section was identified for each omics modality (genomic, metabolomic, and proteomic). Then, predictions from the best model for each omics modality were gathered and concatenated, and this concatenated array was the input for the meta‐model (Figure S3). For the meta‐model, we used the same prediction models and the best one was determined by performing the training pipeline, iteratively. The same combinations used for early fusion models were used for late fusion models.

### AD‐by‐proxy investigation

2.6

Besides using the ICD10 phenotype definition, the effect of using AD‐by‐proxy phenotype and the combination of both ICD10 and AD‐by‐proxy was studied. The training steps described in the multimodal training section for early fusion, single modality, and late fusion models were repeated for the AD‐by‐proxy intersection dataset and the ICD10 and AD‐by‐proxy intersection dataset. To ensure the testing was fair, we used the same ICD10 test set for both AD‐by‐proxy and AD‐by‐proxy+ICD10 phenotypes. The case–control distribution of the intersection dataset for all three phenotype definitions is described in Table S2.

### Feature importance

2.7

SHAP was used to identify important features. 50 , 51 SHAP is a popular explainable AI library used to increase ML model transparency. It uses Shapley values from cooperative game theory to fairly allocate the result contribution of each feature, with TreeExplainer enabling exact computation of Shapley values for tree‐based models. We evaluated feature importance in the best ML models for each modality based on the entire dataset for the corresponding modality. For the polyomic early fusion model that fuses all modalities, we used the intersection dataset as described in the training pipeline in the multimodal training section. Shapley values were calculated for the best single modality models and the best early fusion model using SHAP. Since we had already identified the best model, all data were used to evaluate the feature importance (i.e., train, test, validation split is not performed). We have not used sex and age variables when performing SHAP.

We used Shapley values to identify the features contributing the most to the prediction. We calculated Shapley values on the best‐performing shallow learners for each modality (Table S1) and the overall best‐performing polyomic model and further evaluated the features using traditional regression‐based association analysis. We performed regression between the feature values and the Shapley values for each feature to obtain the correlation relationship between the two variables. The r‐value from this regression tells us the association or correlation relationship of the feature. A positive r‐value for the affection status prediction means the feature is positively associated with AD, while a positive r‐value for the AAO prediction means a higher feature value is associated with later AAO. We also performed regression between the feature values and the labels (affection status and AAO) for each feature to obtain the statistical significance of the associated feature. The significance threshold was 0.05 divided by the number of features. Specifically, the thresholds were 1.39e‐5 for early fusion with 3585 features (feature num = 3585), 1.92e‐3 for genomics (feature num = 26), 3.42e‐5 for proteomics (feature num = 1463), 2.01e‐4 for metabolomics (feature num = 249), 2.71e‐5 for EHR/drug (feature num = 1847), and 3.36e‐5 for the best model (feature num = 1489).

## RESULTS

3

It is known that volunteer cohorts, such as UKB, likely suffer from the healthy volunteer bias. 52 Subjects between the ages of 40 and 69 were recruited from across the UK from 2006 to 2010. The UKB cohort has a low prevalence of AD at only 0.89%, when compared to the estimated 5% of Europe 53 that are afflicted with the disease. As AD is an age‐related disease and prevalence of AD increases sharply after age 65, 54 we have filtered our control group to consist only of those aged 65 and up. Statistics related to the data distribution of the single modality and intersection datasets can be found in (Tables 1, 2, 3), where the case–control ratio, mean and standard deviation of age, gender split, ethnicity, mean, and standard deviation of AAO are mapped out in detail for the dataset overall (Table 1), cases alone (Table 2), and controls alone (Table 3). Specifically, the case to control ratios are all 1 to 9 or above, usually around 97% of the participants in the datasets are of white ethnicity, female proportion of cases are higher than that of controls, the mean ages of cases are lower than that of controls, as controls aged less 65 or less were excluded, age standard deviation of cases are higher than that of controls, and the age means are 4–6 years above AAO means. A detailed description on how the phenotypes are defined can be found in the Methodology section.

**TABLE 1: Data distribution of the single modality datasets and the intersection dataset using the ICD10 phenotype definition.**

| Modality | Case | Control | Case to control ratio | Age mean | Age stdev | Female proportion | Ethnicity |
|---|---|---|---|---|---|---|---|
| Genomic | 4305 | 60909 | 1:14 | 82.19 | 1.95 | 0.5003 | White: 97.32% Asian or Asian British: 1.43% Black or Black British: 0.98% Mixed: 0.26% |
| Metabolomic | 2379 | 33429 | 1:14 | 82.05 | 2.08 | 0.5062 | White: 97.66% Asian or Asian British: 1.18% Black or Black British: 0.90% Mixed: 0.26% |
| Proteomic | 739 | 7193 | 1:10 | 82.26 | 2.24 | 0.4968 | White: 97.31% Asian or Asian British: 1.25% Black or Black British: 1.19% Mixed: 0.26% |
| Drug | 3885 | 54062 | 1:14 | 82.24 | 1.94 | 0.5056 | White: 97.17% Asian or Asian British: 1.48% Black or Black British: 1.08% Mixed: 0.27% |
| Intersection | 371 | 3356 | 1:9 | 82.31 | 2.14 | 0.5025 | White: 97.75% Black or Black British: 1.19% Asian or Asian British: 0.87% Mixed: 0.19% |


**TABLE 2: Case distribution of the single modality datasets and the intersection dataset using the ICD10 phenotype definition.**

| Modality (cases only) | Age mean | Age stdev | Female proportion | AAO mean | AAO stdev | Ethnicity |
|---|---|---|---|---|---|---|
| Genomic | 79.70 | 4.29 | 0.5264 | 75.20 | 5.31 | White: 97.15% Black or Black British: 1.30% Asian or Asian British: 1.27% Mixed: 0.28% |
| Metabolomic | 79.84 | 4.17 | 0.5200 | 75.32 | 5.24 | White: 97.36% Black or Black British: 1.19% Asian or Asian British: 1.15% Mixed: 0.30% |
| Proteomic | 80.10 | 5.08 | 0.5494 | 74.36 | 6.43 | White: 97.11% Black or Black British: 2.07% Asian or Asian British: 0.41% Mixed: 0.41% |
| Drug | 79.89 | 4.19 | 0.5331 | 75.38 | 5.24 | White: 96.97% Black or Black British: 1.39% Asian or Asian British: 1.39% Mixed: 0.26% |
| Intersection | 80.44 | 4.56 | 0.5660 | 74.61 | 6.28 | White: 96.99% Black or Black British: 2.19% Mixed: 0.55% Asian or Asian British: 0.27% |


**TABLE 3: Control distribution of the single modality datasets and the intersection dataset using the ICD10 phenotype definition.**

| Modality (controls only) | Age mean | Age stdev | Female proportion | Ethnicity |
|---|---|---|---|---|
| Genomic | 82.37 | 1.52 | 0.4984 | White: 97.34% Asian or Asian British: 1.44% Black or Black British: 0.96% Mixed: 0.26% |
| Metabolomic | 82.20 | 1.74 | 0.5052 | White: 97.68% Asian or Asian British: 1.18% Black or Black British: 0.88% Mixed: 0.25% |
| Proteomic | 82.48 | 1.53 | 0.4915 | White: 97.33% Asian or Asian British: 1.34% Black or Black British: 1.10% Mixed: 0.24% |
| Drug | 82.41 | 1.53 | 0.5036 | White: 97.19% Asian or Asian British: 1.49% Black or Black British: 1.06% Mixed: 0.27% |
| Intersection | 82.52 | 1.53 | 0.4955 | White: 97.83% Black or Black British: 1.08% Asian or Asian British: 0.93% Mixed: 0.15% |


We first set out to predict AD affection status in a case–control dataset. For this purpose, we used the intersection dataset (Tables 1, 2, 3) to evaluate five ML models on four single modalities (genetic, proteomic, metabolomic and EHR/drug) and combinations of those using early fusion and late fusion methods. Specifically, the intersection dataset has 371 cases and 3356 controls. We separated our intersection dataset into three subsets: “training (0.8)”—used for model training, “validation (0.1)”—used for hyperparameter finetuning, and “testing (0.1)”—used for performance evaluation. For each modality, we selected the best‐performing case–control model based on the AUROC.

The best performance was achieved using multiple modalities (Table 4, Figure S4). The early fusion CatBoost model integrating the genetic and proteomic modalities provided the highest AUROC (0.87), and the fourth highest AUPRC (0.62) for AD affection status prediction. In general, we observed that early fusion models performed better than late fusion models for AD affection status prediction. The best single modality model based on AUROC was the genomics model (AUROC = 0.84, AUPRC = 0.57), followed by proteomic (AUROC = 0.83, AUPRC = 0.57), metabolomic (AUROC = 0.73, AUPRC = 0.48), and drug (AUROC = 0.67, AUPRC = 0.42) modalities. Overall, the genomics and proteomics modalities have shown much better performance than the metabolomic and drug modalities for AD affection status prediction. We also observed that shallow learners, such as LGBM, CatBoost, and XGB, generally performed better than deep learners. Next, we attempted to decrease the case/control imbalance, by adding AD‐by‐proxy cases to our ICD10 cases. AD‐by‐proxy phenotype showed a high correlation with an actual AD diagnosis. 36 Models trained on the extended definition of AD performed worse than models trained using ICD10 cases only (Tables S3–S5). Most models had expected high precision (given the case/control imbalance) and low recall with minimal exceptions.

**TABLE 4: Case–control prediction results for the intersection dataset using the ICD10 phenotype definition.**

| Modality | Model | External accuracy | External precision | External recall | External PR AUC | External ROC AUC |
|---|---|---|---|---|---|---|
| Genomic_proteomic | CatBoost | 0.9247 | 0.8000 | 0.3158 | 0.6156 | 0.8748 |
| Genomic_proteomic_drug | LGBM | 0.9377 | 0.9375 | 0.3947 | 0.6334 | 0.8665 |
| Genomic_proteomic_metabolomic_drug | LGBM | 0.9429 | 0.9000 | 0.4737 | 0.6420 | 0.8617 |
| Genomic_proteomic_metabolomic | LGBM | 0.9299 | 0.7895 | 0.3947 | 0.6310 | 0.8540 |
| Proteomic_drug | LGBM | 0.9377 | 1.000 | 0.3684 | 0.5804 | 0.8445 |
| Genomic_drug | Late fusion Meta classifier: TabNet | 0.9013 | 0.0000 | 0.0000 | 0.5720 | 0.8415 |
| Genomic | TabNet | 0.9299 | 0.9231 | 0.3158 | 0.5658 | 0.8391 |
| Genomic_metabolomic | Late fusion Meta classifier: TabNet | 0.9273 | 1.0000 | 0.2632 | 0.5551 | 0.8369 |
| Proteomic | LGBM | 0.9325 | 0.8750 | 0.3684 | 0.5682 | 0.8336 |
| Genomic_metabolomic_drug | XGB | 0.9065 | 0.5385 | 0.3684 | 0.5040 | 0.8252 |
| Metabolomic_proteomic | Late fusion Meta classifier: TabNet | 0.8987 | 0.0000 | 0.0000 | 0.4080 | 0.8196 |
| Metabolomic_proteomic_drug | LGBM | 0.9299 | 0.9231 | 0.3158 | 0.5312 | 0.8037 |
| Metabolomic_drug | LGBM | 0.9221 | 0.7500 | 0.3158 | 0.4717 | 0.7359 |
| Metabolomic | LGBM | 0.9247 | 0.7647 | 0.3421 | 0.4763 | 0.7259 |
| Drug | LGBM | 0.7948 | 0.2192 | 0.4211 | 0.4200 | 0.6669 |
| Baseline | LR | 0.9091 | 1.0000 | 0.0790 | 0.4173 | 0.6423 |


Next, we aimed to predict AAO as a continuous outcome and extracted only ICD10 cases in the intersection dataset (Tables 1, 2, 3). We evaluated the same models and modalities as above and used MSE to select the best‐performing model. When predicting AAO, we observed a similar behavior: fusion models perform better than single modality models, and shallow learners performed better than deep learners. In contrast to affection status prediction, in which early fusion models performed better, we observed late fusion models performed better for AAO prediction (Table S6). Unlike what was seen in affection status prediction, proteomics (MSE = 44.44) was the most informative modality, followed by metabolomics (MSE = 51.16), genomics (MSE = 58.73), and drug (MSE = 59.15) modality (Figure 3, Figure S5). The performance of the best affection status prediction model showed a higher improvement than the best AAO prediction model when compared to the baseline models, with an improvement of 36% and 21%, respectively.

> **FIGURE 3: Age‐at‐onset prediction results for the intersection dataset using the ICD10 phenotype definition. G, genomics modality; P, proteomics modality; M, metabolomics modality; D, EHR drug modality. A combination of those letters corresponds to multiple modalities used. Prefix “E‐” corresponds to early fusion and the corresponding model. Prefix “L‐” corresponds to late fusion and corresponding meta classifier. The best single modality models are used for late fusion (i.e., genomic, LR; metabolomic, CatBoost; proteomic, LGBM; drug, LGBM). Additional training information and visualization can be found in Table S6 and Figure S5. EHR, electronic health record; ICD10, International Classification of Diseases, 10th revision.**

### Feature importance evaluation

3.1

We found that LGBM and CatBoost were the best‐performing early fusion models that fused all modalities for affection status and AAO prediction, respectively. Thus, the two models were used to evaluate the feature importance for the intersection dataset. We found that APOEε4, glial fibrillary acidic protein (GFAP), epidermal growth factor (EGF)‐containing fibulin extracellular matrix protein 1 (EFEMP1), aminopeptidase N (ANPEP), and cystatin‐D (CST5) were the top five most important features when predicting affection status. We also observed that APOEε4 was more than two and a half times as important as GFAP, and GFAP was roughly three times as important as EFEMP1; most of the top features were either SNPs or proteins (Figure 4). Among all features, only APOEε4 (p = 1.23E‐30) and GFAP (p = 1.47E‐09) were significant in the traditional association analysis (Table S7).

> **FIGURE 4: The feature importance plots for the best early fusion affection status prediction model that fuses all four modalities (LGBM). The left bar plot shows the relative importance (mean SHAP value) of the most important features, and the right beeswarm plot shows the direction in which the feature value is correlated to the prediction. Each dot represents the importance of corresponding features in a positive or negative direction for an individual prediction. The color represents the feature value for that individual.**

As for the AAO prediction, we found that tumor necrosis factor receptor superfamily member 27 (EDA2R), C‐X‐C motif chemokine 17 (CXCL17), carbonic anhydrase 9 (CA9), CUB domain‐containing protein 1 (CDCP1), and C‐X‐C motif chemokine ligand 14 (CXCL14) were the top five most important features, with CXCL17 (p = 6.26e‐06), CHRDL1 (p = 3.44e‐06) and FLT3LG (p = 1.36e‐05) being significant after Bonferroni correction in the traditional association analysis (Table S8). We observed that EDA2R possessed about 1.5 times the level of importance as CXCL17, and the top features were mainly proteins (Figure 5).

> **FIGURE 5: The feature importance plots for the best early fusion age at onset prediction model that fuses all four modalities (CatBoost). The left bar plot shows the relative importance of the most important features, and the right beeswarm plot shows the direction in which the feature value is correlated to the prediction. Each dot represents the importance of corresponding features in a positive or negative direction for an individual prediction. The color represents the feature value for that individual.**

For the single genomic modality, we evaluated the feature importance in the LGBM model, which was the best‐performing model for both phenotypes. We found that for the affection status prediction, rs429358 (APOEε4), rs7412 (APOEε2), rs6733839 (BIN1), rs73223431 (PTK2B), and rs7933202 (MS4A6A) were the top five most important SNPs, and APOEε4 was almost five times as important as APOEε2 (Figure 6), with APOEε4 (p = 8.29e‐189), APOEε2 (p = 3.47e‐13), and BIN1 (p = 5.07e‐05) being significant after Bonferroni correction in the association analysis (Table S9). For the AAO prediction, rs429358 (APOEε4), rs6733839 (BIN1), rs7933202 (MS4A6A), rs2830500 (CYYR1, ADAMTS1), and rs9473117 (CD2AP‐DT) were the top five SNPs (Figure S7). None of these SNPs were significant in the association analysis (Table S10).

LGBM was also the best‐performing model for the proteomics single modality for both phenotypes. We found that for affection status prediction, GFAP, CST5, NEFL, neuronal pentraxin receptor (NPTXR), and Brevican core protein (BCAN) were the top five most important proteins, and GFAP was more than twice as important as CST5 (Figure S8). Among these proteins, GFAP (p = 6.08e‐18) and CST5 (p = 3e‐05) were significant after Bonferroni correction in the association analysis (Table S11). For the AAO prediction, we observed that EDA2R, CXCL17, fibroblast growth factor 5 (FGF5), chitotriosidase‐1 (CHIT1), and prolargin (PRELP) were the top five proteins, and EDA2R was roughly 1.5 times more important than CXCL17 (Figure S9). Among these proteins, EDA2R (p = 3.5e‐12), CXCL17 (p = 2.34e‐10), FGF5 (p = 4.45e‐6), and PRELP (p = 5.26e‐6) were significant after Bonferroni correction in the association analysis (Table 12).

In the metabolomics single modality analyses, we observed that LGBM was the best‐performing model for affection status and that CatBoost was the best‐performing ML model for AAO prediction. We found that for affection status prediction, albumin, valine, glycine, acetate, and lactate were the top five most important metabolites (Figure S10). However, none of these metabolites were significant in the association analysis (Table S13). For AAO prediction, citrate, tyrosine, albumin, creatinine, and saturated fatty acids to total fatty acids percentage were the top five metabolite features (Figure S11), and none of these top metabolites were significant in the association analysis (Table S14).

CatBoost was the best‐performing model for the EHR/drug modality for both phenotypes. We found that for affection status prediction, paracetamol, bendroflumethiazide, citalopram, omeprazole, and insulin product were the top five most important drugs (Figure S12), with citalopram (p = 1.83e‐06) being significant after Bonferroni correction in the traditional association analysis (Table S15). For the AAO prediction, simvastatin, aspirin, glucosamine product, citalopram, and bendroflumethiazide were the top five drugs (Figure S13), with citalopram (p = 6.59e‐07) also being significant after Bonferroni correction. (Table S16).

Finally, we evaluated the feature importance of the overall best‐performing polyomic ML model, CatBoost for affection status prediction and LGBM for AAO prediction, on the genomic and proteomic modalities. For affection status prediction, APOEε4, GFAP, CST5, rs9331896 (CLU), and ANPEP were the top five most important features (Figure S14), with APOEε4 (p = 1.23e‐30) and GFAP (p = 1.47e‐09) being statistically significant after Bonferroni correction (Table S17). For AAO prediction, only proteins were among the top five most important features: EDA2R, CUB domain‐containing protein 1 (CDCP1), Carbonic Anhydrase 9 (CA9), Prokineticin 1 (PROK1) and C‐C Motif Chemokine Ligand 25 (CCL25) (Figure 15), none of the top five proteins were statistically significant after Bonferroni correction (Table 18).

In addition to reporting the top five Shapley values for each feature, we performed logistic or linear regression with each feature to look at their associations. Top features must be three standard deviations above the mean Shapley value, and statistically significant after Bonferroni correction (Table 5). We found that APOE ε4, GFAP, and CXCL17 were consistently selected as the top features in both the single modality models as well as in the polyomic models.

**TABLE 5: Top features for different modalities.**

| Modality | Features (Association)—Model |
|---|---|
| Genomic | 19:44908684:T:C_C (+)—AD |
| Proteomic | GFAP (+)—AD CST5 (‐)—AD EDA2R (‐)—AAO CXCL17 (‐)—AAO FGF5 (‐)—AAO PRELP (‐)—AAO NTPROBNP (‐)—AAO CDCP1 (‐)—AAO ACTA2 (‐)—AAO |
| Metabolomic | / |
| EHR/drug | citalopram (+)—Both fluoxetine (+)—AAO aricept 5 mg tablet (+)—AAO donepezil hydrochloride (+)—AAO galantamine (+)—AAO |
| Early fusion that fuses all modalities | 19:44908684:T:C_C (+)—AD GFAP (+)—AD CXCL17 (‐)—AAO FLT3LG (‐)—AAO CHRDL1 (‐)—AAO |
| Best case–control/AAO models | 19:44908684:T:C_C (+)—AD GFAP (+)—AD CXCL17 (‐)—AAO |


## DISCUSSION

4

Using multiple omics layers together with medication use data from UKB, we developed a polyomic model that fuses the most informative modalities to classify subjects with and without AD and predict AD AAO. We compared polyomic models to single modality models, explored whether AD‐by‐proxy phenotyping can improve model performance, and evaluated the most contributing to prediction features. Our study population has a relatively even data split across sexes (Table 1, 2, 3); therefore, our results are likely generalizable across sexes.

The best AD affection status prediction model was the CatBoost polyomic early fusion model that fused genomic and proteomic modalities. This model had the highest AUROC overall (0.87) and the fourth‐highest AUPRC (0.62). In general, most models had higher AUROC than AUPRC because the latter is more sensitive to class imbalance issues. 44 All models had a relatively high precision and low recall, which could be caused by the class imbalance issue in the training set. As there are more controls than cases in the dataset, the models were biased toward predicting samples as controls than cases, meaning that there were more false negatives than false positives, which is reflected by the high precision and low recall observed in the result. We made several attempts to overcome the class imbalance issue. First, we used scaling to assign a higher weight to the positive class, which slightly improved the performance of the model. Second, we attempted to increase the number of cases using AD‐by‐proxy cases. However, such an approach led to a deterioration of the model's performance. There was a considerable decrease in the precision and a slight improvement in the recall. This is likely because using AD‐by‐proxy definitions has a higher chance of misclassifying subjects, which leads to a more noisy dataset, and eventually leads to model performance degradation. Hence, we decided to report results based on ICD10 coding alone, which gave us the best overall result versus models that incorporated AD‐by‐proxy cases. This also implies that precise phenotype definition is important for a ML prediction task.

The majority of our prediction models with multiple modalities have shown better performance than single modality models, suggesting that different modalities may capture different information from within our body of data, which could be informative to AD affection status and AD AAO prediction. We also observed that adding one modality to the baseline model usually showed considerable improvement in the model performance, and the additional modalities (second or onward) that were added to the baseline model showed relatively small improvement in model performance. This may suggest overlap in a large portion of the information captured by the different modalities.

The best‐performing AAO prediction model was also the polyomic late fusion model that fuses genomic, proteomic, and drug modalities using LGBM as the meta‐classifier. This model had the lowest MSE (MSE = 43.28), which was 21% better than the baseline model (MSE = 54.95). In contrast to affection status prediction models, we observed that some single modality (genomics and drug) models behaved slightly worse than the baseline model, which consists of sex information only. Sex is used in the baseline model because sex might impact the AAO of AD. 55 , 56 We also found that important features for the genomics modality only come from the affection status model (Table 5). This might suggest that genetic factors play a weaker role in AD AAO than for AD onset itself. In addition, CXCL17 protein levels appear to be important for AAO prediction, while GFAP protein levels are important for affection status prediction. For the drug modality, as all the controls were removed from the training pipeline, the sparsity in the dataset increased, which may have been the cause of worse model performance. Finally, among all modalities, proteomics was the most informative modality overall for affection status (based on PR AUC of 56.82% and ROC AUC of 83.36%) and AAO prediction (based on MSE = 44.44). The genomics modality had a very similar performance with proteomics for affection status with a PR AUC of 56.58% and ROC AUC of 83.91%, which aligns with the results found in Vacher et al., 25 which used proteomics data from brain tissue, and does not align with results found in Gómez‐Pascual et al., 23 although they used a different proteomic chip (Somascan) and focused on multiclass and MCI conversion models. However, genomics (MSE = 58.73) yields a much higher MSE than proteomics (MSE = 44.44). This suggests that protein expression levels might be universally important for both: AD and AAO.

Moving onto the feature importance, as expected, the most important features, which can come from either the affection status or AAO models (Table 5), in our models have already been implicated for AD. For example, the two strongest features in the genomic modality were APOE ε4 and ε2 alleles. We also found that the risk effect direction of the remaining 17 most important features/SNPs for the case–control model (the right figure in Figure S6) was the same as reported in Kunkle et al. 38 By aggregating the results and requiring the important feature to be of top feature in both the single modality and the early fusion model, we showed APOE ε4, GFAP and CXCL17 to be the most robust predictors and useful biomarkers for AD. APOE ε4 is already a well‐known risk factor of AD, so we chose to focus on discussing the two blood‐based biomarkers, GFAP and CXCL17. Previous studies have suggested GFAP 57 as a potential biomarker, and our study supports that this protein is important for AD prediction. CXCL17 previously has been shown to have an important predictive value for cancer 58 and general health risk, 59 however, AD‐focused studies have been lacking. Although premature for clinical application, future research screening tools could consider GFAP and CXCL17 as potential early biomarkers of AD from blood.

The design of this study came with a number of limitations. Most participants in the UKB are of European ancestry, 60 around 97% of the study population are of white ethnicity (Table 1, 2, 3), which limits the ability of our study to generalize our result to other ancestries or ethnicities, 61 hence additional studies on more diverse datasets are needed to improve the generalizability of the study. Second, we recognize that our labels have not been clinically verified. Also, well studied biological evidence for AD such as amyloid and tau biomarkers are not considered when defining the phenotype. Specifically, the AAO labels might not be the actual AAO of AD due to delayed diagnosis or misdiagnosis. Mislabeling issues are common in data‐driven research and are hard to avoid. In addition, since the number of longitudinal samples in our dataset was limited, we could not explore how changes over time in different data modalities were associated with AD. Furthermore, due to the complexity of EHR data in the UKB dataset, we decided to focus on one subset only, which is the medication/drug use data. In future work, we aim to include more information from the EHR modality (such as comorbidities), other omic modalities, as they become available, and brain imaging data as well as incorporate omics data from other tissues (CSF, brain) to validate our results. Another interesting comparison that can be made in future studies is to compare models that predict all causes of dementia versus AD‐specific dementia. In addition, more thorough hyperparameter tuning can be performed using grid search or other algorithms. Finally, our results do not imply any causal relationships. Even with these limitations, our study provides novel insights regarding the importance of different modalities for the prediction of AD and sheds new light on the effect of AD‐by‐proxy cases on AD prediction.

In conclusion, we evaluated multiple ML methods on medication use, genomics, proteomics, metabolomics, and combinations, thereof, to predict AD affection status and AAO based on polyomic risk assessment. We found that polyomic models, fusing multiple data modalities together, were more predictive than using single modalities. We also showed that using additional AD‐by‐proxy cases versus ICD10 cases alone decreased prediction performance. Finally, using game theory‐based SHAP values to identify and visualize the most important features for prediction, our findings support GFAP and newly suggest CXCL17 as a potentially useful blood‐based proteomic biomarker for the early and presymptomatic prediction of AD, this study provides results that indicate that these biomarkers should be the targets of further investigated.

## AUTHOR CONTRIBUTIONS

Conceptualization: Dmitry Prokopenko, Rudolph E. Tanzi, and Tiffany Ngai. Methodology: Tiffany Ngai, Georg Hahn, Julian Hecker, Christoph Lange, and Dmitry Prokopenko. Software: Tiffany Ngai. Validation: Tiffany Ngai, Julian Willett, and Dmitry Prokopenko. Formal analysis: Tiffany Ngai, Mohammad Waqas, Lucas H. Fishbein, and Dmitry Prokopenko. Investigation: Tiffany Ngai, Julian Willett, and Dmitry Prokopenko. Data curation: Tiffany Ngai, Mohammad Waqas, Younjung Choi, and Kristina Mullin. Writing—original draft preparation: Tiffany Ngai. Writing—review and editing: Tiffany Ngai, Julian Willett, Mohammad Waqas, Lucas H. Fishbein, Georg Hahn, Younjung Choi, Kristina Mullin, Christoph Lange, Julian Hecker, Rudolph E. Tanzi, and Dmitry Prokopenko. Visualization: Tiffany Ngai. Supervision: Dmitry Prokopenko. Funding acquisition: Rudolph E. Tanzi.

## CONFLICT OF INTEREST STATEMENT

All authors declare that they have no potential conflicts of interest related to this work. Author disclosures are available in the Supporting Information.

## CONSENT STATEMENT

All participants provided electronically signed consent. UK Biobank received ethical approval from the NHS North West Centre for Research Ethics Committee with the latest renewal in 2021 (Ref: 11/NW/0382). This study was approved by the relevant Institutional Review Board from Massachusetts General Hospital (protocol number 2022P000614).

## Supporting information

Supporting Information

Supporting Information

Supporting Information

## Acknowledgements

ACKNOWLEDGMENTSThe computations in this paper were run in part on the FASRC Cannon cluster supported by the FAS Division of Science Research Computing Group at Harvard University. This research was conducted using the UK Biobank resource (application number 81874). The funding body has no role in the design of the study and collection, analysis, and interpretation of data and in writing the manuscript. This work was supported by the Cure Alzheimer's Fund. J.W. was supported by NIH T32GM007748.

## Funding

- Cure Alzheimer's Fund 10.13039/100007625
- NIH 10.13039/100000002T32GM007748

## References

1. 1 Gustavsson A , Norton N , Fast T , et al. Global estimates on the number of persons across the Alzheimer's disease continuum. Alzheimers Dement. 2023;19:658‐670.35652476 10.1002/alz.12694 [PMID:35652476]
2. 2 GBD 2019 Dementia Forecasting Collaborators . Estimation of the global prevalence of dementia in 2019 and forecasted prevalence in 2050: an analysis for the Global Burden of Disease Study 2019. Lancet Public Health. 2022;7:e105‐e125.34998485 10.1016/S2468-2667(21)00249-8PMC8810394 [PMID:34998485]
3. 3 Palmqvist S , Insel PS , Stomrud E , et al. Cerebrospinal fluid and plasma biomarker trajectories with increasing amyloid deposition in Alzheimer's disease. EMBO Mol Med. 2019;11:e11170.31709776 10.15252/emmm.201911170PMC6895602 [PMID:31709776]
4. 4 Porsteinsson AP , Isaacson RS , Knox S , Sabbagh MN , Rubino I . Diagnosis of early Alzheimer's disease: clinical practice in 2021. J Prev Alzheimers Dis. 2021;8:371‐386.34101796 10.14283/jpad.2021.23 [PMID:34101796]
5. 5 Tao Q‐Q , Lin R‐R , Wu Z‐Y . Early diagnosis of Alzheimer's disease: moving toward a blood‐based biomarkers era. Clin Interv Aging. 2023;18:353‐358.36911809 10.2147/CIA.S394821PMC10001034 [PMID:36911809]
6. 6 Palmqvist S , Zetterberg H , Mattsson N , et al. Detailed comparison of amyloid PET and CSF biomarkers for identifying early Alzheimer disease. Neurology. 2015;85:1240‐1249.26354982 10.1212/WNL.0000000000001991PMC4607601 [PMID:26354982]
7. 7 Barthélemy NR , Salvadó G , Schindler SE , et al. Highly accurate blood test for Alzheimer's disease is similar or superior to clinical cerebrospinal fluid tests. Nat Med. 2024;30:1085‐1095. doi:10.1038/s41591-024-02869-z 38382645 PMC11031399 [PMID:38382645]
8. 8 Using machine learning approaches for multi‐omics data analysis: a review. Biotechnol Adv. 2021;49:107739.33794304 10.1016/j.biotechadv.2021.107739 [PMID:33794304]
9. 9 Metabolomics: strategies to define the role of metabolism in virus infection and pathogenesis. Adv Virus Res. 2017;98:57‐81.28433052 10.1016/bs.aivir.2017.02.001 [PMID:28433052]
10. 10 Patti GJ , Yanes O , Siuzdak G . Innovation: metabolomics: the apogee of the omics trilogy. Nat Rev Mol Cell Biol. 2012;13:263‐269.22436749 10.1038/nrm3314PMC3682684 [PMID:22436749]
11. 11 Habehh H , Gohel S . Machine learning in healthcare. Curr Genomics. 2021;22:291‐300.35273459 10.2174/1389202922666210705124359PMC8822225 [PMID:35273459]
12. 12 Sigurdsson AI , Louloudis I , Banasik K , et al. Deep integrative models for large‐scale human genomics. Nucleic Acids Res. 2023;51:e67.37224538 10.1093/nar/gkad373PMC10325897 [PMID:37224538]
13. 13 Venugopalan J , Tong L , Hassanzadeh HR , Wang MD . Multimodal deep learning models for early detection of Alzheimer's disease stage. Sci Rep. 2021;11:3254.33547343 10.1038/s41598-020-74399-wPMC7864942 [PMID:33547343]
14. 14 Park C , Ha J , Park S . Prediction of Alzheimer's disease based on deep neural network by integrating gene expression and DNA methylation dataset. Expert Syst Appl. 2020;140:112873.
15. 15 Li Z , Jiang X , Wang Y , Kim Y . Applied machine learning in Alzheimer's disease research: omics, imaging, and clinical data. Emerg Top Life Sci. 2021;5:765‐777.34881778 10.1042/ETLS20210249PMC8786302 [PMID:34881778]
16. 16 Barrett JC , Esko T , Nightingale Health Biobank Collaborative Group , et al. Metabolomic and genomic prediction of common diseases in 477,706 participants in three national biobanks. medRxiv [Preprint]. 2023. doi:10.1101/2023.06.09.23291213 PMC1158266239572536 [PMID:39572536]
17. 17 Gao XR , Chiariglione M , Qin K , et al. Explainable machine learning aggregates polygenic risk scores and electronic health records for Alzheimer's disease prediction. Sci Rep. 2023;13:450.36624143 10.1038/s41598-023-27551-1PMC9829871 [PMID:36624143]
18. 18 Desikan RS , Fan CC , Wang Y , et al. Genetic assessment of age‐associated Alzheimer disease risk: development and validation of a polygenic hazard score. PLoS Med. 2017;14:e1002258.28323831 10.1371/journal.pmed.1002258PMC5360219 [PMID:28323831]
19. 19 Motazedi E , Cheng W , Thomassen JQ , et al. Using polygenic hazard scores to predict age at onset of Alzheimer's disease in Nordic populations. J Alzheimers Dis. 2022;88:1533‐1544.35848024 10.3233/JAD-220174PMC10022308 [PMID:35848024]
20. 20 Gadd DA , Hillary RF , Kuncheva Z , et al. Blood protein assessment of leading incident diseases and mortality in UK Biobank. Nat Aging. 2024;4(7):939‐948. doi:10.1038/s43587-024-00655-7 38987645 PMC11257969 [PMID:38987645]
21. 21 Xicota L , Ichou F , Lejeune F‐X , et al. Multi‐omics signature of brain amyloid deposition in asymptomatic individuals at‐risk for Alzheimer's disease: the INSIGHT‐preAD study. EBioMedicine. 2019;47:518‐528.31492558 10.1016/j.ebiom.2019.08.051PMC6796577 [PMID:31492558]
22. 22 Clark C , Dayon L , Masoodi M , Bowman GL , Popp J . An integrative multi‐omics approach reveals new central nervous system pathway alterations in Alzheimer's disease. Alzheimers Res Ther. 2021;13:71.33794997 10.1186/s13195-021-00814-7PMC8015070 [PMID:33794997]
23. 23 Gómez‐Pascual A , Naccache T , Xu J , et al. Paired plasma lipidomics and proteomics analysis in the conversion from mild cognitive impairment to Alzheimer's disease. Comput Biol Med. 2024;176:108588.38761503 10.1016/j.compbiomed.2024.108588 [PMID:38761503]
24. 24 Souchet B , Michaïl A , Heuillet M , et al. Multiomics blood‐based biomarkers predict Alzheimer's predementia with high specificity in a multicentric cohort study. J Prev Alzheimers Dis. 2024;11:567‐581.38706273 10.14283/jpad.2024.34PMC11061038 [PMID:38706273]
25. 25 Vacher M , Canovas R , Laws SM , Doecke JD . A comprehensive multi‐omics analysis reveals unique signatures to predict Alzheimer's disease. Front Bioinform. 2024;4:1390607.38962175 10.3389/fbinf.2024.1390607PMC11219798 [PMID:38962175]
26. 26 Hahn G , Prokopenko D , Hecker J , et al. Polygenic hazard score models for the prediction of Alzheimer's free survival using the lasso for Cox's proportional hazards model. Genet Epidemiol. Jul 9, 2024. doi:10.1002/gepi.22581 38982682 [PMID:38982682]
27. 27 Hahn G , Prokopenko D , Hecker J , et al. Prediction of disease‐free survival for precision medicine using cooperative learning on multi‐omic data. Brief Bioinform. 2024;25:bbae267.38836403 10.1093/bib/bbae267PMC11151121 [PMID:38836403]
28. 28 Sudlow C , Gallacher J , Allen N , et al. UK biobank: an open access resource for identifying the causes of a wide range of complex diseases of middle and old age. PLoS Med. 2015;12:e1001779. doi:10.1371/journal.pmed.1001779 25826379 PMC4380465 [PMID:25826379]
29. 29 Bycroft C , Freeman C , Petkova D , et al. The UK Biobank resource with deep phenotyping and genomic data. Nature. 2018;562:203‐209.30305743 10.1038/s41586-018-0579-zPMC6786975 [PMID:30305743]
30. 30 Taliun D , Harris DN , Kessler MD , et al. Sequencing of 53,831 diverse genomes from the NHLBI TOPMed Program. Nature. 2021;590:290‐299.33568819 10.1038/s41586-021-03205-yPMC7875770 [PMID:33568819]
31. 31 Bragg F , Trichia E , Aguilar‐Ramirez D , et al. Predictive value of circulating NMR metabolic biomarkers for type 2 diabetes risk in the UK Biobank study. BMC Med. 2022;20:159.35501852 10.1186/s12916-022-02354-9PMC9063288 [PMID:35501852]
32. 32 Julkunen H , Cichońska A , Slagboom PE , Würtz P , Nightingale Health UK Biobank Initiative . Metabolic biomarker profiling for identification of susceptibility to severe pneumonia and COVID‐19 in the general population. ELife. 2021;10:e63033.33942721 10.7554/eLife.63033PMC8172246 [PMID:33942721]
33. 33 Eldjarn GH , Ferkingstad E , Lund SH , et al. Large‐scale plasma proteomics comparisons through genetics and disease associations. Nature. 2023;622:348‐358.37794188 10.1038/s41586-023-06563-xPMC10567571 [PMID:37794188]
34. 34 Sun BB , Chiou J , Traylor M , et al. Plasma proteomic associations with genetics and health in the UK Biobank. Nature. 2023;622(7982):329‐338. doi:10.1038/s41586-023-06592-6 37794186 PMC10567551 [PMID:37794186]
35. 35 Allan LM , Wheatley A , Smith A , et al. Read codes for general practitioner dementia Quality Outcomes Framework register. In: An Intervention to Improve Outcomes of Falls In Dementia: The DIFRID Mixed‐Methods Feasibility Study . NIHR Journals Library; 2019.
36. 36 Jansen IE , Savage JE , Watanabe K , et al. Genome‐wide meta‐analysis identifies new loci and functional pathways influencing Alzheimer's disease risk. Nat Genet. 2019;51:404‐413.30617256 10.1038/s41588-018-0311-9PMC6836675 [PMID:30617256]
37. 37 Kulminski AM , Shu L , Loika Y , et al. Genetic and regulatory architecture of Alzheimer's disease in the APOE region. Alzheimers Dement. 2020;12:e12008.10.1002/dad2.12008PMC708528632211503 [PMID:32211503]
38. 38 Kunkle BW , Grenier‐Boley B , Sims R , et al. Genetic meta‐analysis of diagnosed Alzheimer's disease identifies new risk loci and implicates Aβ, tau, immunity and lipid processing. Nat Genet. 2019;51:1423‐1424.31417202 10.1038/s41588-019-0495-7PMC7265117 [PMID:31417202]
39. 39 Graham JW . Missing data analysis: making it work in the real world. Annu Rev Psychol. 2009;60:549‐576.18652544 10.1146/annurev.psych.58.110405.085530 [PMID:18652544]
40. 40 Jakobsen JC , Gluud C , Wetterslev J , Winkel P . When and how should multiple imputation be used for handling missing data in randomised clinical trials—a practical guide with flowcharts. BMC Med Res Methodol. 2017;17:162.29207961 10.1186/s12874-017-0442-1PMC5717805 [PMID:29207961]
41. 41 Friedman JH . Greedy function approximation: a gradient boosting machine. Ann Stat. 2001;29:1189‐1232.
42. 42 Arik SÖ , Pfister T . TabNet: attentive interpretable tabular learning. Proc. Conf. AAAI Artif. Intell. 2021;35:6679‐6687.
43. 43 Borisov V , Leemann T , Sebler K , et al. Deep neural networks and tabular data: a survey. IEEE Trans Neural Netw Learn Syst. 2024;35. 10.1109/TNNLS.2022.3229161 37015381 [PMID:37015381]
44. 44 Vabalas A , Hartonen T , Vartiainen P , et al. Deep learning‐based prediction of one‐year mortality in Finland is an accurate but unfair aging marker. Nature Aging. 2024;4(7):1014‐1027. doi:10.1038/s43587-024-00657-5 38914859 PMC11257968 [PMID:38914859]
45. 45 Roca P , Attye A , Colas L , et al. Artificial intelligence to predict clinical disability in patients with multiple sclerosis using FLAIR MRI. Diagn Interv Imaging. 2020;101:795‐802.32651155 10.1016/j.diii.2020.05.009 [PMID:32651155]
46. 46 Boldini D , Grisoni F , Kuhn D , Friedrich L , Sieber SA . Practical guidelines for the use of gradient boosting for molecular property prediction. J Cheminform. 2023;15:73.37641120 10.1186/s13321-023-00743-7PMC10464382 [PMID:37641120]
47. 47 Herwanto HW , Handayani AN , Wibawa AP , Chandrika KL , Arai K . Comparison of min‐max, Z‐score and decimal scaling normalization for zoning feature extraction on Javanese character recognition. In: 2021 7th International Conference on Electrical, Electronics and Information Engineering (ICEEIE) . IEEE; 2021. doi:10.1109/iceeie52663.2021.9616665
48. 48 Yeo I‐K . A new family of power transformations to improve normality or symmetry. Biometrika. 2000;87:954‐959.
49. 49 Ding DY , Li S , Narasimhan B , Tibshirani R . Cooperative learning for multiview analysis. Proc Natl Acad Sci. 2022;119:e2202113119.36095183 10.1073/pnas.2202113119PMC9499553 [PMID:36095183]
50. 50 Lundberg S , Lee S‐I . A unified approach to interpreting model predictions. In: NIPS'17: Proceedings of the 31st International Conference on Neural Information Processing Systems Curran Associates Inc.; 2017:4768‐4777. doi:10.48550/ARXIV.1705.07874
51. 51 Lundberg SM , Erion G , Chen H , et al. From local explanations to global understanding with explainable AI for trees. Nat Mach Intell. 2020;2:56‐67.32607472 10.1038/s42256-019-0138-9PMC7326367 [PMID:32607472]
52. 52 Brayne C , Moffitt TE . The limitations of large‐scale volunteer databases to address inequalities and global challenges in health and aging. Nat Aging. 2022;2:775‐783.37118500 10.1038/s43587-022-00277-xPMC10154032 [PMID:37118500]
53. 53 Niu H , Álvarez‐Álvarez I , Guillén‐Grima F , Aguinaga‐Ontoso I . Prevalence and incidence of Alzheimer's disease in Europe: a meta‐analysis. Neurologia. 2017;32:523‐532.27130306 10.1016/j.nrl.2016.02.016 [PMID:27130306]
54. 54 Castellani RJ , Rolston RK , Smith MA . Alzheimer disease. Dis Mon. 2010;56:484‐546.20831921 10.1016/j.disamonth.2010.06.001PMC2941917 [PMID:20831921]
55. 55 Kolahchi Z , Henkel N , Eladawi MA , et al. Sex and gender differences in Alzheimer's disease: genetic, hormonal, and inflammation impacts. Int J Mol Sci. 2024;25:8485.39126053 10.3390/ijms25158485PMC11313277 [PMID:39126053]
56. 56 Hale JM , Schneider DC , Mehta NK , Myrskylä M . Cognitive impairment in the U.S.: lifetime risk, age at onset, and years impaired. SSM Popul Health. 2020;11:100577.32300635 10.1016/j.ssmph.2020.100577PMC7153285 [PMID:32300635]
57. 57 Kim KY , Shin KY , Chang K‐A . GFAP as a potential biomarker for Alzheimer's disease: a systematic review and meta‐analysis. Cells. 2023;12:1309.37174709 10.3390/cells12091309PMC10177296 [PMID:37174709]
58. 58 Choreño‐Parra JA , Jiménez‐Álvarez LA , Ramírez‐Martínez G , et al. CXCL17 is a specific diagnostic biomarker for severe pandemic influenza A(H1N1) that predicts poor clinical outcome. Front Immunol. 2021;12:633297.33717172 10.3389/fimmu.2021.633297PMC7953906 [PMID:33717172]
59. 59 You J , Guo Yu , Zhang Yi , et al. Plasma proteomic profiles predict individual future health risk. Nat Commun. 2023;14:7817.38016990 10.1038/s41467-023-43575-7PMC10684756 [PMID:38016990]
60. 60 Sun Q , Graff M , Rowland B , et al. Analyses of biomarker traits in diverse UK biobank participants identify associations missed by European‐centric analysis strategies. J Hum Genet. 2022;67:87‐93.34376796 10.1038/s10038-021-00968-0PMC8792153 [PMID:34376796]
61. 61 Sjaarda J , Gerstein HC , Kutalik Z , et al. Influence of genetic ancestry on human serum proteome. Am J Hum Genet. 2020;106:303‐314.32059761 10.1016/j.ajhg.2020.01.016PMC7058828 [PMID:32059761]
