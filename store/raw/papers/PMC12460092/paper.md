---
pmid: "41018179"
pmc: "PMC12460092"
doi: "10.3389/fneur.2025.1639895"
title: "Development and validation of a predictive model for depression risk in patients with amyotrophic lateral sclerosis"
journal: "Frontiers in Neurology"
year: 2025
authors:
  - name: "Liu Man"
    affiliations:
      - "1Department of Neurology, The Second Hospital of Hebei Medical University, Shijiazhuang, Hebei, China"
      - "2Key Laboratory of Clinical Neurology, Ministry of Education, Hebei Medical University, Shijiazhuang, Hebei, China"
      - "3Neurological Laboratory of Hebei Province, Shijiazhuang, Hebei, China"
  - name: "Niu Tongyang"
    affiliations:
      - "1Department of Neurology, The Second Hospital of Hebei Medical University, Shijiazhuang, Hebei, China"
      - "2Key Laboratory of Clinical Neurology, Ministry of Education, Hebei Medical University, Shijiazhuang, Hebei, China"
      - "3Neurological Laboratory of Hebei Province, Shijiazhuang, Hebei, China"
  - name: "Zhang Xinyi"
    affiliations:
      - "1Department of Neurology, The Second Hospital of Hebei Medical University, Shijiazhuang, Hebei, China"
      - "2Key Laboratory of Clinical Neurology, Ministry of Education, Hebei Medical University, Shijiazhuang, Hebei, China"
      - "3Neurological Laboratory of Hebei Province, Shijiazhuang, Hebei, China"
  - name: "Zhang Ziyao"
    affiliations:
      - "1Department of Neurology, The Second Hospital of Hebei Medical University, Shijiazhuang, Hebei, China"
      - "2Key Laboratory of Clinical Neurology, Ministry of Education, Hebei Medical University, Shijiazhuang, Hebei, China"
      - "3Neurological Laboratory of Hebei Province, Shijiazhuang, Hebei, China"
  - name: "Zhao Luqi"
    affiliations:
      - "1Department of Neurology, The Second Hospital of Hebei Medical University, Shijiazhuang, Hebei, China"
      - "2Key Laboratory of Clinical Neurology, Ministry of Education, Hebei Medical University, Shijiazhuang, Hebei, China"
      - "3Neurological Laboratory of Hebei Province, Shijiazhuang, Hebei, China"
  - name: "Li Jiaqi"
    affiliations:
      - "1Department of Neurology, The Second Hospital of Hebei Medical University, Shijiazhuang, Hebei, China"
      - "2Key Laboratory of Clinical Neurology, Ministry of Education, Hebei Medical University, Shijiazhuang, Hebei, China"
      - "3Neurological Laboratory of Hebei Province, Shijiazhuang, Hebei, China"
  - name: "Fu Siyu"
    affiliations:
      - "1Department of Neurology, The Second Hospital of Hebei Medical University, Shijiazhuang, Hebei, China"
      - "2Key Laboratory of Clinical Neurology, Ministry of Education, Hebei Medical University, Shijiazhuang, Hebei, China"
      - "3Neurological Laboratory of Hebei Province, Shijiazhuang, Hebei, China"
  - name: "Han Meiqi"
    affiliations:
      - "1Department of Neurology, The Second Hospital of Hebei Medical University, Shijiazhuang, Hebei, China"
      - "2Key Laboratory of Clinical Neurology, Ministry of Education, Hebei Medical University, Shijiazhuang, Hebei, China"
      - "3Neurological Laboratory of Hebei Province, Shijiazhuang, Hebei, China"
  - name: "Li Rui"
    affiliations:
      - "1Department of Neurology, The Second Hospital of Hebei Medical University, Shijiazhuang, Hebei, China"
      - "2Key Laboratory of Clinical Neurology, Ministry of Education, Hebei Medical University, Shijiazhuang, Hebei, China"
      - "3Neurological Laboratory of Hebei Province, Shijiazhuang, Hebei, China"
  - name: "Dong Hui"
    affiliations:
      - "1Department of Neurology, The Second Hospital of Hebei Medical University, Shijiazhuang, Hebei, China"
      - "2Key Laboratory of Clinical Neurology, Ministry of Education, Hebei Medical University, Shijiazhuang, Hebei, China"
      - "3Neurological Laboratory of Hebei Province, Shijiazhuang, Hebei, China"
  - name: "Liu Yaling"
    affiliations:
      - "1Department of Neurology, The Second Hospital of Hebei Medical University, Shijiazhuang, Hebei, China"
      - "2Key Laboratory of Clinical Neurology, Ministry of Education, Hebei Medical University, Shijiazhuang, Hebei, China"
      - "3Neurological Laboratory of Hebei Province, Shijiazhuang, Hebei, China"
---

# Development and validation of a predictive model for depression risk in patients with amyotrophic lateral sclerosis

## Abstract

### Introduction

Depression is a severe neuropsychiatric manifestation in patients with amyotrophic lateral sclerosis (ALS), substantially impacting their quality of life and exacerbating caregiver burden, due to the need for different approaches in clinical care. However, a predictive model for the risk of depression in patients with ALS is lacking. This study aimed to develop and validate a predictive model using routinely accessible clinical and laboratory indicators to identify patients at high risk of depression.

### Methods

Patients with ALS who were hospitalized in the Department of Neurology at the Second Hospital of Hebei Medical University between March 2017 and December 2024 were included. Basic clinical data, laboratory test results, and relevant questionnaire scores were collected, and patients were divided into depressed and non-depressed groups. The least absolute shrinkage and selection operator regression and multivariate logistic regression analyses were applied for variable selection and model construction. Model performance was evaluated using the area under the receiver operating characteristic curve, calibration curves, decision curve analysis, and clinical impact curves, with internal validation performed via bootstrap resampling.

### Results

Depression was observed in 33.9% of patients. Significant predictors included educational level, sleep disorders, anxiety, Revised Amyotrophic Lateral Sclerosis Functional Rating Scale total scores, C-reactive protein levels, and the Systemic Inflammation Response Index. The final model demonstrated good predictive accuracy and clinical applicability. A depression risk scoring table was further developed based on the coefficients of the logistic regression.

### Conclusion

The nomogram and the scoring table offer a reliable and practical approach for clinicians to identify patients with ALS who are at high risk for depression and enable early psychological intervention in clinical settings.

## Introduction

1

Amyotrophic lateral sclerosis (ALS) is a rare neurodegenerative disease that primarily affects the motor system. It is characterized by progressive degeneration of upper and lower motor neurons, resulting in muscle paralysis and ultimately death, with no available cure (1). ALS is a rapidly progressive disease. Although its incidence is relatively low, at approximately 2 cases per 100,000 people, its mean survival period ranges from 2 to 3 years from diagnosis (2).

In addition to motor decline, approximately 50% of patients experience extra-motor or non-motor symptoms, including disturbances in emotional processing, cognition, behavior, depression, and anxiety (3). Depression is one of the most severe neuropsychiatric manifestations, with clinical features such as low mood, low energy, poor concentration, inappropriate guilt, changes in appetite, insomnia or hypersomnia, irritability, and thoughts of death (4). ALS is associated with a significantly increased risk of depression (5–7). Potential contributing mechanisms include the psychological burden of an incurable disease (6); cortical thinning in the prefrontal cortex and other brain regions; disruption of mood-related brain networks; dysfunction of neurotransmitter systems; altered cortisol levels (3, 8); and, potentially, neuroinflammation as a shared pathophysiological mechanism in both ALS and depression (9–11). Notably, ALS may obscure or mask depressive symptoms due to clinical overlap, leading to underdiagnosis (12). The variability and subtlety of depressive presentations, combined with the subjective nature of assessments, often complicate clinical identification (13).

Despite the availability of medical interventions for comorbid depression in ALS, a delay in its diagnosis can be severely detrimental. Depression can seriously impair the quality of life of patients with ALS, affecting their physical condition, vitality, social participation, emotional functioning, and mental well-being (14). Moreover, depression worsens clinical outcomes, accelerates disease progression, and is a major contributor to disability (15). Additionally, disparities in clinical care can further increase the burden on caregivers (16). Therefore, it is essential to proactively identify patients with ALS who are at risk of depression and implement preventive strategies.

To date, no predictive model has been established to assess depression risk in patients with ALS. We aimed to develop a clinically applicable nomogram and scoring table that incorporate routinely accessible clinical and laboratory indicators to predict the likelihood of depression in patients with ALS. The model may facilitate early identification of high-risk individuals and enable timely interventions, potentially improving both quality of life and survival outcomes.

## Materials and methods

2

### Patient selection

2.1

This retrospective case–control study included patients with ALS who were hospitalized in the Department of Neurology at the Second Hospital of Hebei Medical University between March 2017 and December 2024. Eligible participants met all of the following criteria: (i) a diagnosis of possible, probable, or definite ALS according to the El Escorial Criteria; (ii) age of 18–80 years; (iii) preserved pulmonary function (exertion spirometry >85%); and (iv) no cognitive impairment, as indicated by standardized scores on both the Montreal Cognitive Assessment and the Brief Mental State Examination.

Exclusion criteria were as follows: mutations in ALS-related genes (for example, SOD1, C9ORF72, FUS, and TDP-43); a diagnosis of frontotemporal lobe dementia; existing psychotic disorders; patients with a history of persistent sadness, persistent frustration, severe emotional distress, suicidal tendencies; comorbid metabolic disorders, neoplastic diseases, severe acute inflammatory conditions, or hematologic abnormalities; patients for whom data for the collected indicators were missing; and current pregnancy or pregnancy in the preceding 6 months. Finally, 180 patients were included in the study (Figure 1).

> **Figure 1: Flow diagram of study design.**

The study protocol was approved by the Institutional Review Board of the Second Hospital of Hebei Medical University. The study was conducted in accordance with the ethical principles outlined in the Declaration of Helsinki. All participants provided written informed consent after being fully informed of the study’s aims and procedures.

### Research methods

2.2

Relevant literature and clinical guidelines on depression were reviewed, and previously reported factors associated with depression were identified (9, 17–19). Based on the authors’ clinical experience, these factors were compiled and analyzed. Depression was assessed using the Hospital Anxiety and Depression Scale (HADS), with a score >7 indicating the presence of depression (20). In a quiet and relaxed environment, patients independently completed the HADS under the guidance of a qualified neurologist. The doctor verified the completeness of the questionnaire, and any missing items were completed immediately. If a patient was unable to complete it independently (e.g., due to severe limb paralysis, inability to read or write, etc.) the scale was completed with assistance from a physician.

Data collected included demographic and clinical characteristics, such as age, sex, body mass index (BMI), smoking and alcohol use history, marital status, and educational level (completion of at least 9 years of compulsory education). ALS-specific clinical variables included site of onset, disease duration, Pittsburgh Sleep Quality Index (PSQI) score, C-reactive protein (CRP) level, neutrophil-to-lymphocyte ratio (NLR), monocyte-to-lymphocyte ratio (MLR), platelet-to-lymphocyte ratio (PLR), systemic immune-inflammation index (SII), and systemic inflammation response index (SIRI).

The SII was calculated as follows:

SII = (neutrophil count × platelet count)/lymphocyte count

The SIRI was calculated as follows:

SIRI = (neutrophil count × monocyte count)/lymphocyte count.

Amyotrophic lateral sclerosis disease severity was assessed using the Revised Amyotrophic Lateral Sclerosis Functional Rating Scale (ALSFRS-R). Anxiety was evaluated using the HADS, with scores >7 indicating anxiety. Sleep quality was measured using the PSQI, with scores >6 indicating sleep disorders.

### Statistical analyses

2.3

All statistical analyses were performed using IBM SPSS Statistics (Version 26.0; IBM Corp., Armonk, NY, United States) and R software (version 4.2.0; R Core Team). Continuous variables with a normal distribution were reported as means ± standard deviations, while non-normally distributed variables were expressed as medians and interquartile ranges. Categorical variables were summarized as frequencies and percentages.

Comparisons between groups were performed using the independent samples t-test or rank-sum test for continuous variables, and the chi-square test for categorical variables. Variable selection was conducted using the least absolute shrinkage and selection operator (LASSO) regression to identify optimal predictors. Variables selected by LASSO were entered into a multivariate logistic regression model to identify independent predictors of depression (p < 0.05).

Subsequently, a predictive nomogram was constructed based on the significant predictors. The discriminatory performance of the nomogram was evaluated using the area under the receiver operating characteristic (ROC) curve (AUC). Calibration was assessed using calibration plots and the Hosmer–Lemeshow goodness-of-fit test to determine agreement between observed outcomes and model predictions. The clinical utility of the model was further assessed using decision curve analysis (DCA) and clinical impact curves. The results of univariate and logistic regression analyses were combined and a risk scoring table for depression in ALS was constructed based on the Framingham risk score model.

## Results

3

### Characteristics of patients with ALS with or without depression

3.1

A total of 180 patients included during the study period were divided into two groups based on their HADS scores: depression (n = 61) or non-depression (n = 119), yielding a depression prevalence of 33.9%. Patients with depression had significantly higher rates of anxiety, elevated CRP levels, and increased SIRI and MLR values than patients without depression. They were less likely to have completed 9 years of compulsory education. Additionally, depression was associated with a higher prevalence of sleep disorders and lower ALSFRS-R total scores (Table 1).

**Table 1: Characteristics of participants with ALS with or without depression.**

| Parameter | All individuals (n = 180) | Non-depression (n = 119) | Depression (n = 61) | p-value |
|---|---|---|---|---|
| Age (years) | 61 (53, 68) | 60 (53, 67) | 63 (55, 70) | 0.192 |
| Gender |   |   |   | 0.974 |
| Female | 72 (40%) | 47 (39%) | 25 (41%) |   |
| Male | 108 (60%) | 72 (61%) | 36 (59%) |   |
| Smoking |   |   |   | 0.38 |
| No | 127 (71%) | 87 (73%) | 40 (66%) |   |
| Yes | 53 (29%) | 32 (27%) | 21 (34%) |   |
| Alcohol |   |   |   | 0.536 |
| No | 126 (70%) | 81 (68%) | 45 (74%) |   |
| Yes | 54 (30%) | 38 (32%) | 16 (26%) |   |
| BMI | 24.03 (21.39, 26.68) | 23.92 (21.69, 26.6) | 24.22 (20.76, 26.73) | 0.856 |
| 9 year compulsory education |   |   |   | 0.032 |
| No | 76 (42%) | 43 (36%) | 33 (54%) |   |
| Yes | 104 (58%) | 76 (64%) | 28 (46%) |   |
| Sleep disorders |   |   |   | < 0.001 |
| No | 87 (48%) | 75 (63%) | 12 (20%) |   |
| Yes | 93 (52%) | 44 (37%) | 49 (80%) |   |
| Anxiety |   |   |   | < 0.001 |
| No | 147 (82%) | 110 (92%) | 37 (61%) |   |
| Yes | 33 (18%) | 9 (8%) | 24 (39%) |   |
| Site of onset |   |   |   | 0.543 |
| Limb | 119 (66%) | 81 (68%) | 38 (62%) |   |
| Bulbar | 61 (34%) | 38 (32%) | 23 (38%) |   |
| Duration of disease | 10 (6, 17) | 9 (6, 15) | 12 (6, 23) | 0.529 |
| ALSFRS-R total scores | 39 (34, 43) | 41 (36, 44) | 35 (29, 38) | <0.001 |
| CRP | 2.38 (1.6, 4.2) | 1.99 (1.52, 3.54) | 3.16 (1.93, 8.4) | <0.001 |
| NLR | 1.96 (1.46, 2.51) | 1.91 (1.46, 2.37) | 2 (1.5, 2.92) | 0.316 |
| PLR | 129.62 (103.89, 159.6) | 130 (103.65, 156.75) | 127.42 (105.78,163.38) | 0.665 |
| MLR | 0.22 (0.17, 0.28) | 0.22 (0.17, 0.26) | 0.24 (0.18, 0.33) | 0.041 |
| SII | 418.27 (308.09, 575.01) | 411.7 (297.62, 553.37) | 444.52 (332.3, 638.36) | 0.081 |
| SIRI | 0.71 (0.48, 0.98) | 0.65 (0.49, 0.87) | 0.83 (0.48, 1.33) | 0.008 |


### LASSO regression and multivariate logistic regression analysis

3.2

LASSO regression identified six variables with non-zero coefficients as significant predictors of depression: completion of 9 years of compulsory education, sleep disorders, anxiety, CRP levels, ALSFRS-R total scores, and SIRI values (Figures 2A,B). These predictors were subsequently included in a multivariate logistic regression analysis. The results of this analysis are presented in Table 2.

> **Figure 2: A coefficient profile was generated along the log (λ) sequence, with non-zero coefficients selected by the optimal λ (A). Identification of optimal penalty coefficients in LASSO models through 10-fold cross-validation and minimum criterion (B).**

**Table 2: Logistic regression analysis of predictors for depression.**

| Group | B | SE | Wald values | p-value | Odds ratio (95% CI) |
|---|---|---|---|---|---|
| 9 year compulsory education |   |   |   |   |   |
| NO |   |   |   |   |   |
| YES | −1.033 | 0.449 | 5.306 | 0.021 | 0.356 (0.148–0.857) |
| Sleep disorders |   |   |   |   |   |
| NO |   |   |   |   |   |
| YES | 1.586 | 0.470 | 11.370 | 0.001 | 4.886 (1.943–12.287) |
| Anxiety |   |   |   |   |   |
| NO |   |   |   |   |   |
| YES | 2.243 | 0.551 | 16.568 | < 0.001 | 9.419 (3.199–27.735) |
| ALSFRS-R total scores | −0.137 | 0.038 | 13.029 | < 0.001 | 0.872 (0.809–0.939) |
| CRP | 0.126 | 0.062 | 4.173 | 0.041 | 1.134 (1.005–1.280) |
| SIRI | 0.877 | 0.401 | 4.776 | 0.029 | 2.403 (1.095–5.274) |


### Construction and validation of a nomogram for predicting depression in patients with ALS

3.3

A nomogram was developed incorporating six predictive factors: completion of 9 years of compulsory education, sleep disorders, anxiety, ALSFRS-R total scores, CRP levels, and SIRI values. For each predictor, a perpendicular line was drawn from the observed value of a particular predictor to the “Points” axis to determine the corresponding score. The individual scores were summed to calculate a total point score, which was then used to project downward from the “Total Points” axis to the “Risk” scale, yielding the patient’s predicted probability of depression (Figure 3).

> **Figure 3: Nomogram for predicting depression in patients with ALS.**

### Discrimination performance of the prediction model

3.4

The model’s discriminative performance was assessed using ROC curve analysis. It demonstrated strong predictive ability, with an AUC of 0.892, indicating excellent discrimination (threshold >0.7). At an optimal cutoff value of 0.374, the model achieved a sensitivity of 75.4% and a specificity of 86.6% (Figure 4).

> **Figure 4: ROC curves for predicting depression in patients with ALS.**

### Calibration of the depression prediction model in patients with ALS

3.5

Model calibration was assessed using a calibration curve and the Hosmer–Lemeshow test. Internal validation was conducted using 1,000 bootstrap resamples. The calibration curve closely followed the 45-degree reference line, indicating strong concordance between predicted and observed probabilities. The Hosmer–Lemeshow test yielded p = 0.284, supporting a good model fit (Figure 5).

> **Figure 5: Calibration curves for predictive models.**

### Decision curve and clinical impact analyses

3.6

The clinical utility of the prediction model was assessed using DCA and clinical impact curves. The DCA demonstrated that the model provided a net benefit across a wide range of threshold probabilities (8–95%), with the curve consistently exceeding the “Treat None” and “Treat All” strategies. The clinical impact curve further confirmed the model potential utility in clinical decision-making by demonstrating meaningful net benefit across relevant threshold ranges (Figures 6A,B).

> **Figure 6: Decision curve analysis for the study model (A). Clinical impact curve for the study model (B).**

### Depression risk scoring table and predictive probability in patients with ALS

3.7

To facilitate rapid clinical assessment, we developed a depression risk scoring table based on the logistic regression coefficients presented in Table 2. For improved clinical applicability, the continuous variables, CRP levels and SIRI values, were categorized using optimal cutoff values: CRP (mg/L) as <2.89 or ≥2.89, and SIRI as <0.93 or ≥0.93. The resulting depression risk scores ranged from 0 to 17 (Table 3). The predicted probability values of risk corresponding to each score (Table 4) were calculated using the equations of the multivariate logistic regression model with the following formula:

P^=11+e(−∑i=0pβiXi),

∑i=0pβiXi≈constant term+βi∗Wij+B∗point total,

wij is the reference value for each group of influences and B is the constant corresponding to 1 in the scoring tool.

∑i=0pβiXi=2.296+(−1.033)∗1+1.586∗0

+2.243∗0+(−0.137)∗44+0.126∗1.965+0.877∗0.545+0.685point total

=−4.03945+0.685∗point total.

**Table 3: Risk scoring table for depression in patients with ALS.**

| Influence factor | Category | Point |
|---|---|---|
| 9 year compulsory education |   |   |
|   | No | 2 |
| Yes | 0 |   |
| Sleep disorders |   |   |
|   | No | 0 |
| Yes | 2 |   |
| Anxiety |   |   |
|   | No | 0 |
| Yes | 3 |   |
| ALSFRS-R_total scores |   |   |
|   | 0–19 | 7 |
| 20–39 | 3 |   |
| 40–48 | 0 |   |
| CRP |   |   |
|   | <2.89 | 0 |
| ≥2.89 | 1 |   |
| SIRI |   |   |
|   | <0.93 | 0 |
| ≥0.93 | 2 |   |


**Table 4: Relationship between total score and predicted probability.**

| Point total | Estimate of risk |
|---|---|
| 0 | 0.0173 |
| 1 | 0.0337 |
| 2 | 0.0648 |
| 3 | 0.1208 |
| 4 | 0.2143 |
| 5 | 0.3510 |
| 6 | 0.5176 |
| 7 | 0.6804 |
| 8 | 0.8085 |
| 9 | 0.8934 |
| 10 | 0.9432 |
| 11 | 0.9706 |
| 12 | 0.9849 |
| 13 | 0.9924 |
| 14 | 0.9961 |
| 15 | 0.9980 |
| 16 | 0.9990 |
| 17 | 0.9995 |


## Discussion

4

Depression is a common non-motor symptom of ALS. Due to the variability of depressive symptom presentation, the subjective nature of assessments, and the partial overlap between ALS and depressive symptoms, clinicians often miss the diagnosis of depression, adding to patient distress. This study analyzed data from 180 patients with ALS to develop and validate a nomogram for predicting depression risk using six variables: completion of 9 years of compulsory education, sleep disorders, anxiety, ALSFRS-R total scores, CRP levels, and SIRI values. This tool offers a simple and objective method for identifying patients at a high risk of depression, thereby simplifying the screening process and facilitating clinical decision-making. Depression can arise at any stage of ALS, with the highest risk in the first year post-diagnosis (16.5-fold increase), followed by another elevated-risk period during the second year after motor symptom onset. Previous studies have reported variable prevalence rates of depression in ALS, ranging from 8 to 50%. A major reason for this variability is the difference in measurement tools. A meta-analysis of 46 studies estimated an overall prevalence of 34% (15). Depression questionnaires that primarily assess physical symptoms of depression tend to overestimate patients’ psychological suffering, resulting in higher rates of depression. We chose the HAD scale as it is primarily designed to assess hospitalized patients and avoids assessing physical symptoms associated with depression, making it highly accurate (21). In our cohort, the prevalence of depression was 33.9%, aligning closely with the earlier findings.

### Education level and depression

4.1

In the present study, lower educational attainment was identified as a significant predictor of depression in patients with ALS. This finding aligns with prior research utilizing large population datasets, including the UK Biobank and FinnGen databases, which demonstrated that higher educational levels are causally associated with a reduced risk of depression and anxiety disorders (22). Additional studies have reported similar associations, indicating that individuals with higher levels of education exhibit a lower likelihood of developing depression (23, 24). Moreover, a meta-analysis demonstrated that every extra year of education was associated with a 3% reduction in depression incidence (25). The protective role of education may be attributable to its contribution to cognitive flexibility, emotional regulation, and cooperation, all of which support more resilient psychological functioning and promote long-term mental well-being (22).

### Non-motor and motor symptoms associated with depression in ALS

4.2

Previous evidence indicates that patients with ALS gradually experience sleep disorders after the onset of the disease and that these disorders are further correlated with depression (26). Sleep disorders are strongly correlated with increased rates of depression, underscoring their interconnected nature (27). Nearly 90% of depressed patients experience impaired sleep quality (28). Previously considered merely a secondary manifestation of depression, sleep disorders are now regarded as predictive prodromal symptoms (29). Our results indicate that the presence of sleep disorders was a significant predictor of depression risk in patients with ALS. Although the exact mechanisms underlying this association remain unclear, inflammatory responses and circadian rhythm disruption are among the proposed contributors (30). Further, patients with ALS exhibit phosphorylated 43-kDa TAR DNA-binding protein aggregates in hypothalamic regions, which may also disrupt sleep patterns (31, 32) and, thus, increase the risk of depression.

Not only do anxiety and depression often co-occur, their symptoms are also highly correlated (33), and these conditions are also very common in patients with ALS (12, 34, 35). Anxiety is an independent predictor of depression (12) that influences the risk of depression, as people with high anxiety levels are more likely to feel stressed (36). When faced with difficult situations, anxious people tend to view the problem pessimistically, allocating more attention to negative information (37), which may be related to reduced cortisol responsiveness due to progressive hypothalamic–pituitary–adrenal (HPA) axis dysfunction (8). Additionally, similar to the pathogenesis of ALS, neuroinflammation, blood–brain-barrier disruption, peripheral immune cell invasion into the CNS, neurotransmission impairment, HPA axis dysfunction, and microglia activation represent interaction pathways between immune systems and psychopathological mechanisms underpinning psychiatric disorders. Neurodegenerative diseases, including amyotrophic lateral sclerosis, and neuropsychiatric disorders, such as anxiety and depression, are considered “two sides of the same coin” because they share the same signaling pathways, molecules, and mechanisms (38, 39). This may provide a partial explanation for the strong correlation between anxiety and depression in patients with ALS, and the observation that anxiety can act as a predictor of depression.

The motor symptoms associated with ALS significantly influence the occurrence of depression. Lower ALSFRS-R total scores are correlated with an increased risk of depression (34, 40–42). The ALSFRS-R total scores objectively assess the progression and overall severity of ALS by systematically evaluating bulbar function, limb motor function, and respiratory function (43). A decrease in the ALSFRS-R total score does not represent the isolated loss of a single function, but reflects the loss of multiple functional domains (including motor, communication, respiratory, and self-care abilities) and overall functional decline (43, 44). As the ALSFRS-R total score decreases, patients experience overall functional decline. The limitations in physical abilities, from independently eating and dressing to relying on others for assistance, can lead to psychological distress and anxiety (45); simultaneously, the progressive loss of motor autonomy typically results in a gradual decline in the ability to perform daily activities, occupational tasks, and recreational activities, which may contribute to the development of depressive symptoms (41). Swallowing difficulties lead to severe psychosocial consequences, including social embarrassment, isolation, reduced self-esteem due to obvious swallowing difficulties, and anxiety and avoidance behaviors related to eating triggered by persistent fear of choking (46). Breathing difficulties further exacerbate emotional distress, triggering sensations of panic and feelings of helplessness (47). As the condition progresses, respiratory dysfunction often requires symptomatic relief through invasive or non-invasive mechanical ventilation. This is a frequently observed phenomenon associated with increased depression risk (48, 49). These factors collectively form a foundation for susceptibility to the onset of depression.

### Inflammatory markers associated with depression

4.3

CRP level is recognized as a biomarker of both peripheral and central inflammation. Elevated CRP levels are observed in over 29% of patients with depression (50) and are associated with the severity and symptoms of major depressive disorder (51). Prior studies have also identified associations between increased CRP levels and post-stroke depressive symptoms and prognosis, with CRP serving as a predictive marker for post-stroke depression (52). However, the relationship between CRP levels and depression in patients with ALS remains underexplored. ALS is usually accompanied by a systemic inflammatory response; blood CRP levels are significantly elevated and correlated with disease progression (53). High CRP concentrations increase blood–brain barrier permeability, leading to microglia activation in the central nervous system. The CRP plays a role in regulating and amplifying the inflammatory process and is involved in neuroinflammation (54), which may be a mechanism for depression in patients with ALS. As systemic inflammation in ALS may be a potential therapeutic target, a better understanding of the relationship between peripheral inflammation and depression is clinically important.

In contrast, systemic inflammatory biomarkers, such as SII and SIRI, have been shown to significantly influence the risk of depression (55). The present study demonstrated that SIRI values are a reliable predictor of depression in ALS. The SIRI quantifies the ratio of innate immune effector cells (neutrophils, monocytes, and platelets) to adaptive immune lymphocytes (56–58), reflecting immunological balance. SIRI values incorporate activated circulating immune cells (particularly monocytes included in its calculation) that are known to undergo trans-endothelial migration, thereby promoting microglial activation and subsequent neuroinflammation; SIRI values exemplify the “cross-talk” between central and peripheral inflammation (59). Peripheral blood mononuclear cells are involved in disease progression in patients with ALS (60). Compared to other markers, such as NLR and PLR, SIRI demonstrates superior reliability and representativeness. These strengths underscore SIRI’s potential as a more effective diagnostic marker for identifying depressive symptoms in patients with ALS.

### Strengths and clinical implications of the risk model

4.4

Depression adversely impacts disease progression and quality of life in patients with ALS. Numerous studies have explored depression-related factors in ALS (9, 34, 42), but this study presents the first validated depression risk prediction model for this population. By integrating both clinical features and routine laboratory indicators, the model provides a practical and comprehensive approach for risk assessment.

The model demonstrated a strong predictive performance, with an AUC of 0.892, indicating excellent discrimination. Calibration analysis showed close agreement between predicted and observed outcomes, as the calibration curve approximated the ideal diagonal. Moreover, DCA and clinical impact curves further substantiated the model’s clinical applicability. The accompanying scoring tables enable rapid identification of at-risk patients in routine practice. These findings support the use of this model for early detection, risk stratification, and timely psychosocial intervention, thereby contributing to improved patient outcomes. This evidence-based tool offers clinicians a practical resource to identify and manage depression risk in patients with ALS.

### Limitations and future directions

4.5

Some limitations of this study warrant mention. First, the study’s single-center, case–control design and limited sample size may restrict generalizability. Second, due to ethnic and genetic variations in depression, the findings may primarily apply to Chinese populations and may involve selection bias. Third, the retrospective design introduces the possibility of recall bias and inconsistencies due to reliance on existing records. Fourth, among the patients from whom we collected data, three were excluded because they carried gene mutations associated with ALS, seven because they had severe acute inflammatory diseases, three because of hematological abnormalities, and two because they had suicidal tendencies. Patients with ALS carrying gene mutations differ from patients with sporadic ALS in terms of pathophysiological mechanisms, disease progression, and pathological characteristics (61). We chose to exclude patients with gene mutations to improve the homogeneity of the study population and better control for confounding factors. Patients with ALS with comorbid metabolic disorders, neoplastic diseases, severe acute inflammation, or hematological abnormalities exhibit significantly reduced accuracy in laboratory markers (CRP, NLR, MLR, SII, and SIRI), and due to comorbidities, may face greater psychological stress, increasing their risk of depression. We excluded patients with a history of persistent sadness, persistent frustration, severe emotional distress, suicidal tendencies to highlight the ALS-specific depression. Since the above-mentioned groups of patients accounted for a low proportion of our cohort, and to enhance the homogeneity of enrolled patients, improve model accuracy, we excluded the above-mentioned groups. However, excluding such patients introduces selection bias, reducing the model’s applicability to this population. Therefore, future research should further explore the above-mentioned groups. Fifth, we found that the ALSFRS-R total score is a predictor of depression in ALS patients, but we did not analyze the relationship between bulbar subscore, the limb motor subscore, and respiratory subscore, and depression. Considering that the aim of this study was to suggest an ALS depression risk prediction model using simple and easily obtainable clinical and experimental data, we chose the ALSFRS-R total scores, which better represents disease progression and overall functional decline, for analysis and did not perform further subgroup analysis, however, further refinement in this area is required in the future.

## Acknowledgements

We acknowledge all participants and interviewers involved in our research.

## Funding

- The author(s) declare that no financial support was received for the research and/or publication of this article.

## Data Availability

Data availability statementThe raw data supporting the conclusions of this article will be made available by the authors, without undue reservation.

## References

1. 1.Al-ChalabiAHardimanOKiernanMCChiòARix-BrooksBvan den BergLH. Amyotrophic lateral sclerosis: moving towards a new classification system. Lancet Neurol. (2016) 15:1182–94. doi: 10.1016/S1474-4422(16)30199-5, PMID: 27647646 [PMID:27647646]
2. 2.MeadRJShanNReiserHJMarshallFShawPJ. Amyotrophic lateral sclerosis: a neurodegenerative disorder poised for successful therapeutic translation. Nat Rev Drug Discov. (2022) 22,185–212. doi: 10.1038/s41573-022-00612-2PMC976879436543887 [PMID:36543887]
3. 3.BenbrikaSDoidyFCarluerLMondouAPélerinAEustacheF. Longitudinal study of cognitive and emotional alterations in amyotrophic lateral sclerosis: clinical and imaging data. Front Neurol. (2021) 12:620198. doi: 10.3389/fneur.2021.620198, PMID: 34305771 PMC8296637 [PMID:34305771]
4. 4.American Psychiatric Association. Diagnostic and statistical manual of mental disorders: DSM-5. 5th ed. Arlington, VA, United States: American Psychiatric Publishing (2013). 5 p.
5. 5.LonginettiEMariosaDLarssonHYeWIngreCAlmqvistC. Neurodegenerative and psychiatric diseases among families with amyotrophic lateral sclerosis. Neurology. (2017) 89:578–85. doi: 10.1212/WNL.0000000000004179, PMID: 28701495 PMC5562958 [PMID:28701495]
6. 6.RoosEMariosaDIngreCLundholmCWirdefeldtKRoosPM. Depression in amyotrophic lateral sclerosis. Neurology. (2016) 86:2271–7. doi: 10.1212/WNL.0000000000002671, PMID: 27164661 PMC4909561 [PMID:27164661]
7. 7.TurnerMRGoldacreRTalbotKGoldacreMJ. Psychiatric disorders prior to amyotrophic lateral sclerosis. Ann Neurol. (2016) 80:935–8. doi: 10.1002/ana.24801, PMID: 27761925 PMC5215396 [PMID:27761925]
8. 8.JellingerKA. Understanding depression with amyotrophic lateral sclerosis: a short assessment of facts and perceptions. J Neural Transm. (2023) 131:107–15. doi: 10.1007/s00702-023-02714-6, PMID: 37922093 [PMID:37922093]
9. 9.KwonSKimBHanKDJungWChoEBShinDW. Risk of depression in amyotrophic lateral sclerosis: a Nationwide cohort study in South Korea. J Psychiatr Res. (2024) 178:414–20. doi: 10.1016/j.jpsychires.2024.08.030, PMID: 39226692 [PMID:39226692]
10. 10.LiuJWangF. Role of Neuroinflammation in amyotrophic lateral sclerosis: cellular mechanisms and therapeutic implications. Front Immunol. (2017) 8:1005. doi: 10.3389/fimmu.2017.01005, PMID: 28871262 PMC5567007 [PMID:28871262]
11. 11.TroubatRBaronePLemanSDesmidtTCressantAAtanasovaB. Neuroinflammation and depression: a review. Eur J Neurosci. (2020) 53:151–71. doi: 10.1111/ejn.14720, PMID: 32150310 [PMID:32150310]
12. 12.AtassiNCookAPinedaCMEYerramilli-RaoPPulleyDCudkowiczM. Depression in amyotrophic lateral sclerosis. Amyotroph Lateral Scler. (2010) 12:109–12. doi: 10.3109/17482968.2010.536839, PMID: 21091399 PMC3155886 [PMID:21091399]
13. 13.MaierARiedel-HellerSGPabstALuppaM. Risk factors and protective factors of depression in older people 65+. A systematic review. PLoS One. (2021) 16:1326. doi: 10.1371/journal.pone.0251326, PMID: 33983995 PMC8118343 [PMID:33983995]
14. 14.KörnerSKolleweKAbdullaSZapfADenglerRPetriS. Interaction of physical function, quality of life and depression in amyotrophic lateral sclerosis: characterization of a large patient cohort. BMC Neurol. (2015) 15:84. doi: 10.1186/s12883-015-0340-2, PMID: 25982050 PMC4493831 [PMID:25982050]
15. 15.HeidariMENadaliJParouhanAAzarafrazMtabatabaiSMIrvaniSSN. Prevalence of depreesion among amyotrophic lateral sclerosis (ALS) patients: a systematic review and meta-analysis. J Affect Disord. (2021) 287:182–90. doi: 10.1016/j.jad.2021.03.015, PMID: 33799036 [PMID:33799036]
16. 16.GibbonsCJYoungCA. Assessing and managing depression and fatigue in motor neuron disease. Neurodegener Dis Manag. (2012) 2:401–9. doi: 10.2217/nmt.12.42
17. 17.Ninla-aesongPKietdumrongwongPNeupaneSPPuangsriPJongkrijakHChotipongP. Relative value of novel systemic immune-inflammatory indices and classical hematological parameters in predicting depression, suicide attempts and treatment response. Sci Rep. (2024) 14:19018. doi: 10.1038/s41598-024-70097-z, PMID: 39152198 PMC11329510 [PMID:39152198]
18. 18.CarvalhoTLAlmeidaLMSdeLoregaCMABarataMFOFerreiraMLBBrito-MarquesPRde. Depression and anxiety in individuals with amyotrophic lateral sclerosis: a systematic review. Trends Psychiatry Psychother (2016); 38: 1–5. doi: 10.1590/2237-6089-2015-003027007942 [PMID:27007942]
19. 19.ZhangCGZhangYXuKWangSBaiY. Correlation of inflammatory markers with depression and sleep disorders accompanying the prodromal stage of Parkinson’s disease. World J Psychiatry. (2025) 15:99901. doi: 10.5498/wjp.v15.i3.99901, PMID: 40109997 PMC11886346 [PMID:40109997]
20. 20.ZigmondASSnaithRP. The hospital anxiety and depression scale. Acta Psychiatr Scand. (1983) 67:361–70. doi: 10.1111/j.1600-0447.1983.tb09716.x, PMID: 6880820 [PMID:6880820]
21. 21.PagniniFManzoniGMTagliaferriAGibbonsCJ. Depression and disease progression in amyotrophic lateral sclerosis: a comprehensive meta-regression analysis. J Health Psychol. (2015) 20:1107–28. doi: 10.1177/1359105314530453, PMID: 24764286 [PMID:24764286]
22. 22.JareebiMAAlqassimAY. The impact of educational attainment on mental health: a causal assessment from the UKB and Finn gen cohorts. Medicine. (2024) 103:e38602. doi: 10.1097/MD.0000000000038602, PMID: 38941394 PMC11466082 [PMID:38941394]
23. 23.EricksonJEl-GabalawyRPalitskyDPattenSMackenzieCSSteinMB. Educational attainment as a protective factor for psychiatric disorders: findings from a nationally representative longitudinal study. Depress Anxiety. (2016) 33:1013–22. doi: 10.1002/da.22515, PMID: 27096927 [PMID:27096927]
24. 24.ChlapeckaAKagstromACermakovaP. Educational attainment inequalities in depressive symptoms in more than 100, 000 individuals in Europe. Eur Psychiatry. (2020) 63:e97. doi: 10.1192/j.eurpsy.2020.100, PMID: 33190666 PMC7737177 [PMID:33190666]
25. 25.LorantVDeliègeDEatonWRobertAPhilippotPAnsseauM. Socioeconomic inequalities in depression: a meta-analysis. Am J Epidemiol. (2003) 157:98–112. doi: 10.1093/aje/kwf182, PMID: 12522017 [PMID:12522017]
26. 26.LiXLiuQNiuTJiaHLiuTXinZ. Sleep disturbances as a potential risk Factor for deterioration of respiratory function in patients with amyotrophic lateral sclerosis. Ann Indian Acad Neurol. (2023) 26:754–60. doi: 10.4103/aian.aian_276_23, PMID: 38022487 PMC10666898 [PMID:38022487]
27. 27.LiWRuanWPengYLuZWangD. Associations of socioeconomic status and sleep disorder with depression among US adults. J Affect Disord. (2021) 295:21–7. doi: 10.1016/j.jad.2021.08.009, PMID: 34391958 [PMID:34391958]
28. 28.TsunoNBessetARitchieK. Sleep and depression. J Clin Psychiatry. (2005) 66:1254–69. doi: 10.4088/JCP.v66n1008, PMID: 16259539 [PMID:16259539]
29. 29.FangHTuSShengJShaoA. Depression in sleep disturbance: a review on a bidirectional relationship, mechanisms and treatment. J Cell Mol Med. (2019) 23:2324–32. doi: 10.1111/jcmm.14170, PMID: 30734486 PMC6433686 [PMID:30734486]
30. 30.YangPTianLXiaYHuMXiaoXLengY. Association of sleep quality and its change with the risk of depression in middle-aged and elderly people: a 10-year cohort study from England. J Affect Disord. (2024) 373:245–52. doi: 10.1016/j.jad.2024.12.07939732401 [PMID:39732401]
31. 31.XiaoXRuiYJinYChenM. Relationship of sleep disorder with neurodegenerative and psychiatric diseases: an updated review. Neurochem Res. (2023) 49:568–82. doi: 10.1007/s11064-023-04086-5, PMID: 38108952 [PMID:38108952]
32. 32.LiuSRenQGongGSunYZhaoBMaX. Hypothalamic subregion abnormalities are related to body mass index in patients with sporadic amyotrophic lateral sclerosis. J Neurol. (2021) 269:2980–8. doi: 10.1007/s00415-021-10900-3, PMID: 34779889 [PMID:34779889]
33. 33.JacobsonNCNewmanMG. Anxiety and depression as bidirectional risk factors for one another: a meta-analysis of longitudinal studies. Psychol Bull. (2017) 143:1155–200. doi: 10.1037/bul0000111, PMID: 28805400 [PMID:28805400]
34. 34.GrablerMRWeyenUJuckelGTegenthoffMMavrogiorgou-JuckelP. Death anxiety and depression in amyotrophic lateral sclerosis patients and their primary caregivers. Front Neurol. (2018) 9:1035. doi: 10.3389/fneur.2018.01035, PMID: 30559710 PMC6287003 [PMID:30559710]
35. 35.PradoL d GRBicalhoICSVidigal-LopesMPradoV d GRGomezRSde SouzaLC. Depression and anxiety in a case series of amyotrophic lateral sclerosis: frequency and association with clinical features. Einstein. (2017) 15:58–60. doi: 10.1590/S1679-45082017AO387028444090 PMC5433308 [PMID:28444090]
36. 36.BrosschotJFGerinWThayerJF. The perseverative cognition hypothesis: a review of worry, prolonged stress-related physiological activation, and health. J Psychosom Res. (2006) 60:113–24. doi: 10.1016/j.jpsychores.2005.06.074, PMID: 16439263 [PMID:16439263]
37. 37.DerakshanNSmythSEysenckMW. Effects of state anxiety on performance using a task-switching paradigm: an investigation of attentional control theory. Psychon Bull Rev. (2009) 16:1112–7. doi: 10.3758/PBR.16.6.1112, PMID: 19966264 [PMID:19966264]
38. 38.MazzaMGDe LorenzoRConteCPolettiSVaiBBollettiniI. Anxiety and depression in COVID-19 survivors: role of inflammatory and clinical predictors. Brain Behav Immun. (2020) 89:594–600. doi: 10.1016/j.bbi.2020.07.037, PMID: 32738287 PMC7390748 [PMID:32738287]
39. 39.GuptaRAdvaniDYadavDAmbastaRKKumarP. Dissecting the relationship between neuropsychiatric and neurodegenerative disorders. Mol Neurobiol. (2023) 60:6476–529. doi: 10.1007/s12035-023-03502-9, PMID: 37458987 [PMID:37458987]
40. 40.CuiFZhuWZhouZRenYLiYLiM. Frequency and risk factor analysis of cognitive and anxiety-depressive disorders in patients with amyotrophic lateral sclerosis/motor neuron disease. Neuropsychiatr Dis Treat. (2015) 11:2847–54. doi: 10.2147/NDT.S90520, PMID: 26604769 PMC4639547 [PMID:26604769]
41. 41.FaltraccoVPainDDalla BellaERivaNTelescaASoldiniE. Mood disorders in patients with motor neuron disease and frontotemporal symptoms: validation of the hospital anxiety and depression scale for use in motor neuron disease. J Neurol Sci. (2025) 469:123378. doi: 10.1016/j.jns.2024.12337839842380 [PMID:39842380]
42. 42.RabkinJGGoetzRFactor-LitvakPHupfJMcElhineyMSingletonJ. Depression and wish to die in a multicenter cohort of ALS patients. Amyotroph Lateral Scler Frontotemporal Degener. (2014) 16:265–73. doi: 10.3109/21678421.2014.980428, PMID: 25482273 PMC4441849 [PMID:25482273]
43. 43.CedarbaumJMStamblerNMaltaEFullerCHiltDThurmondB. The ALSFRS-R: a revised ALS functional rating scale that incorporates assessments of respiratory function. J Neurol Sci. (1999) 169:13–21. doi: 10.1016/S0022-510X(99)00210-5, PMID: 10540002 [PMID:10540002]
44. 44.SandstedtPLittorinSJohanssonSGottbergKYtterbergCKierkegaardM. Disability and contextual factors in patients with amyotrophic lateral sclerosis – a three-year observational study. J Neuromusc Dis. (2018) 5:439–49. doi: 10.3233/JND-180322, PMID: 30282373 PMC6218138 [PMID:30282373]
45. 45.ChenPXuW. Activity of daily living and depressive symptoms in Chinese older adults: a latent profile and mediation analysis. Int J Public Health. (2025) 70:1608149. doi: 10.3389/ijph.2025.1608149, PMID: 40519229 PMC12162352 [PMID:40519229]
46. 46.EkbergOHamdySWoisardVWuttge-HannigAOrtegaP. Social and psychological burden of dysphagia: its impact on diagnosis and treatment. Dysphagia. (2002) 17:139–46. doi: 10.1007/s00455-001-0113-5, PMID: 11956839 [PMID:11956839]
47. 47.WangJGBoseSHolbrookJTNanLEakinMNYohannesAM. Clinical characteristics of patients with COPD and comorbid depression and anxiety: data from a National Multicenter Cohort Study. Chronic Obstr Pulm Dis. (2025) 12:33–42. doi: 10.15326/jcopdf.2024.534, PMID: 39636058 PMC11925073 [PMID:39636058]
48. 48.WorshamCMBanzettRBSchwartzsteinRM. Dyspnea, acute respiratory failure, psychological trauma, and post-ICU mental health. Chest. (2021) 159:749–56. doi: 10.1016/j.chest.2020.09.251, PMID: 33011205 PMC7528739 [PMID:33011205]
49. 49.Navarra-VenturaGGodoy-GonzálezMGomàGJodarMSarlabousLSantos-PulpónV. Occurrence, co-occurrence and persistence of symptoms of depression and post-traumatic stress disorder in survivors of COVID-19 critical illness. Eur J Psychotraumatol. (2024) 15:3654. doi: 10.1080/20008066.2024.2363654, PMID: 38881386 PMC11185090 [PMID:38881386]
50. 50.HuWYuanQHuJLiMXiYLuoL. The association between C-reactive protein-albumin-lymphocyte index and depression in adults with type 2 diabetes mellitus: a cross-sectional study from NHANES. Psychoneuroendocrinology. (2025) 176:107442–2. doi: 10.1016/j.psyneuen.2025.107442, PMID: 40138851 [PMID:40138851]
51. 51.WangDXuJLiangNXueZYangXLuJ. Network analysis of depressive symptoms and C-reactive protein levels in major depressive disorder. J Affect Disord. (2024) 367:788–94. doi: 10.1016/j.jad.2024.08.152, PMID: 39187182 [PMID:39187182]
52. 52.XiaoAWangRLiuCWangX. Influencing factors and predictive models of early post-stroke depression in patients with acute ischemic stroke. BMC Neurol. (2025) 25:104. doi: 10.1186/s12883-025-04090-y, PMID: 40075309 PMC11900648 [PMID:40075309]
53. 53.KeizmanDRogowskiOBerlinerSIsh-ShalomMMaimonNNefussyB. Low-grade systemic inflammation in patients with amyotrophic lateral sclerosis. Acta Neurol Scand. (2009) 119:383–9. doi: 10.1111/j.1600-0404.2008.01112.x, PMID: 18976328 [PMID:18976328]
54. 54.KharelSOjhaRPreethish-KumarVBhagatR. C-reactive protein levels in patients with amyotrophic lateral sclerosis: a systematic review. Brain Behav. (2022) 12:e2532. doi: 10.1002/brb3.2532, PMID: 35201675 PMC8933772 [PMID:35201675]
55. 55.LiXHuanJLinLHuY. Association of systemic inflammatory biomarkers with depression risk: results from National Health and nutrition examination survey 2005–2018 analyses. Front Psych. (2023) 14:7196. doi: 10.3389/fpsyt.2023.1097196, PMID: 36846218 PMC9945233 [PMID:36846218]
56. 56.MinogueAM. Role of infiltrating monocytes/macrophages in acute and chronic neuroinflammation: effects on cognition, learning and affective behaviour. Prog Neuro-Psychopharmacol Biol Psychiatry. (2017) 79:15–8. doi: 10.1016/j.pnpbp.2017.02.008, PMID: 28189704 [PMID:28189704]
57. 57.ChenHRChenCWKuoYMChenBKuanISHuangH. Monocytes promote acute neuroinflammation and become pathological microglia in neonatal hypoxic-ischemic brain injury. Theranostics. (2022) 12:512–29. doi: 10.7150/thno.64033, PMID: 34976198 PMC8692901 [PMID:34976198]
58. 58.GongPLiuYGongYChenGZhangXWangS. The association of neutrophil to lymphocyte ratio, platelet to lymphocyte ratio, and lymphocyte to monocyte ratio with post-thrombolysis early neurological outcomes in patients with acute ischemic stroke. J Neuroinflammation. (2021) 18:51. doi: 10.1186/s12974-021-02090-6, PMID: 33610168 PMC7896410 [PMID:33610168]
59. 59.MurataSBaigNDeckerKHalarisA. Systemic inflammatory response index (SIRI) at baseline predicts clinical response for a subset of treatment-resistant bipolar depressed patients. J Personal Med. (2023) 13:1408. doi: 10.3390/jpm13091408, PMID: 37763175 PMC10533150 [PMID:37763175]
60. 60.DuYZhaoWThonhoffJRWangJWenSAppelSH. Increased activation ability of monocytes from ALS patients. Exp Neurol. (2020) 328:113259. doi: 10.1016/j.expneurol.2020.113259, PMID: 32105709 [PMID:32105709]
61. 61.SwinnenBRobberechtW. The phenotypic variability of amyotrophic lateral sclerosis. Nat Rev Neurol. (2014) 10:661–70. doi: 10.1038/nrneurol.2014.184, PMID: 25311585 [PMID:25311585]
