---
pmid: "41373649"
pmc: "PMC12692265"
doi: "10.3390/ijms262311496"
title: "Multimodal Biomarker Characterization of the ALS/FTD Spectrum: A Real-World Clinical Dataset Analysis"
journal: "International Journal of Molecular Sciences"
year: 2025
authors:
  - name: "Mukhija Sasha"
    affiliations:
      - "sasha.mukhija@usz.ch (S.M.);"
      - ""
  - name: "Hering Lisa"
    affiliations:
      - "sasha.mukhija@usz.ch (S.M.);"
      - ""
  - name: "Schreiner Simon J."
    affiliations:
      - "sasha.mukhija@usz.ch (S.M.);"
      - ""
  - name: "Lehner Franz"
    affiliations:
      - "sasha.mukhija@usz.ch (S.M.);"
      - ""
  - name: "Loosli Jan"
    affiliations:
      - "sasha.mukhija@usz.ch (S.M.);"
      - ""
  - name: "Togni Claudio"
    affiliations:
      - "sasha.mukhija@usz.ch (S.M.);"
      - ""
  - name: "Otto Ferdinand"
    affiliations:
      - "sasha.mukhija@usz.ch (S.M.);"
      - ""
  - name: "Ziegler Mario"
    affiliations:
      - "sasha.mukhija@usz.ch (S.M.);"
      - ""
  - name: "Weiss Tobias"
    affiliations:
      - "sasha.mukhija@usz.ch (S.M.);"
      - ""
  - name: "Jung Hans H."
    affiliations:
      - "sasha.mukhija@usz.ch (S.M.);"
      - ""
  - name: "Briel Nils"
    affiliations:
      - "sasha.mukhija@usz.ch (S.M.);"
      - ""
---

# Multimodal Biomarker Characterization of the ALS/FTD Spectrum: A Real-World Clinical Dataset Analysis

## Abstract

Diagnosis and prognosis of the amyotrophic lateral sclerosis and frontotemporal dementia (ALS/FTD) spectrum remain largely dependent on clinical assessments due to a lack of established fluid biomarkers. While neurofilaments and the cerebrospinal fluid (CSF) phosphorylated-tau/total-tau ratio (pTau:tTau) have been studied, their limitations, including their lack of clinical implementation and low specificity, necessitate multimodal approaches. This study aimed to characterize the biological features of the ALS/FTD spectrum through integration of clinically available parameters. We conducted a retrospective, single-center, cross-sectional study analyzing routinely collected clinical, neuroimaging, CSF, and serum data from 229 samples, including 45 from patients with ALS, 26 from patients with FTD, 158 from patients with other neurodegenerative diseases, and 29 from cognitively healthy controls. We implemented propensity score-weighted comparisons, an F1 score-based optimal cut-point determination for the pTau:tTau ratio, and a regularized XGBoost-based multimodal feature modeling approach. The biomarker and model performance was evaluated by the area under the precision–recall curve (AUC-PR). Feature importance analysis identified characteristic indicators of the ALS/FTD spectrum. Consistent with the prior literature, the pTau:tTau ratio was significantly reduced in ALS/FTD, but the classification performance was modest (AUC-PR 0.32). A multimodal model integrating clinical, biofluid, and neuroimaging features achieved a notably better performance (AUC-PR 0.75). Feature importance analysis revealed an ALS/FTD signature beyond the pTau:tTau ratio characterized by higher global cognition, younger age, an altered Aβ42/pTau ratio, and immunoglobulin changes (CSF IgG:IgA, serum IgG). Integration of clinical routine data centered on tau, amyloid, and immunological pathophysiology as well as temporal disease dynamics provide a contextualized biological characterization of the ALS/FTD spectrum. This approach offers a foundation for hypothesis generation regarding ALS/FTD pathophysiology and biomarker-supported diagnosis.

## 1. Introduction

Amyotrophic lateral sclerosis (ALS) is a rare and fatal neurodegenerative disease characterized by progressive muscle weakness and atrophy, due to the degeneration of both upper and lower motor neurons [1,2]. The median survival from motor manifestation is approximately three years [3]. Diagnosing ALS can be particularly challenging due to the absence of definite biomarkers. Instead, the diagnosis typically relies on a combination of extensive clinical and ancillary tests aimed at assessing motor function and ruling out mimicking conditions [4,5]. Therefore, accurate and early diagnosis is critical, as it allows for the timely initiation of supporting measures and potential disease-modifying therapies in selected cases [6].

Clinically manifest frontotemporal dementia (FTD), meeting established diagnostic criteria for dementia, develops in 10–15% of individuals with ALS, whereas an additional ~30–40% exhibit milder cognitive and/or behavioral changes within the ALS–frontotemporal spectrum that do not reach the dementia threshold [7,8]. FTD itself presents with variable phenotypes with progressive changes in behavior, executive function, and language abilities. FTD exhibits characteristic frontotemporal lobar degeneration and is considered the second most common form of dementia in people under the age of 65 [9]. It shares important clinical, genetic, and pathological properties with ALS [7]. Between 10 and 50% of FTD patients develop ALS-typical features throughout the disease course [10,11,12]. Furthermore, 95% of ALS cases and 50% of FTD cases exhibit TAR DNA-binding protein 43 (TDP-43) proteinopathy, albeit with varying neuropathological patterns. Given this clinical overlap and shared biology, both entities are considered to be on an ALS/FTD spectrum—the entirety of which we refer to hereunder as ALS/FTD [13].

The prognosis of ALS/FTD can vary widely among individuals, influenced by factors such as specific genetic mutations and the phenotypic manifestation of the disease. Pleiotropic effects of genetic mutations may lead to diverse clinical presentations, even within the same family. This variability underscores the need to develop prognostic models that incorporate clinical, phenotypic, and biological factors to better predict outcomes for patients. Despite ongoing research, there remains a critical need for reliable biomarkers for ALS/FTD, which complicates both diagnosis and treatment [13].

The phosphorylated-tau/total-tau (pTau:tTau) ratio in cerebrospinal fluid (CSF) is markedly reduced in ALS/FTD spectrum disorders, including TDP-43 proteinopathies, compared to other neurodegenerative diseases, with intermediate reductions in 4R tauopathies like progressive supranuclear palsy and corticobasal degeneration. This reduction is primarily driven by a disproportionate increase in tTau in relation to unchanged or only mildly reduced pTau levels in ALS, FTD, and tauopathies, resulting in low ratio values. The pTau:tTau ratio has shown robust diagnostic accuracy in distinguishing ALS from tauopathies and non-neurodegenerative controls [14,15,16].

Other investigations into canonical Alzheimer’s disease (AD) biomarkers (i.e., pTau-181, pTau-217, pTau-231) have noted significant increases in the blood of ALS patients as well—a finding that has been confirmed by independent groups and challenges the broader disease specificity of these markers [17,18]. However, blood-based phosphorylated-TDP-43-409/410 seems to be a promising candidate marker of TDP-43 proteinopathy [18,19]. Neurofilament light (NfL), a marker of neuroaxonal injury, has gained attention as a prognostic and stratifying biomarker rather than a diagnostic biomarker in ALS, FTD, and other rapidly progressive neurodegenerative diseases [20].

Studies aimed at understanding the molecular pathomechanisms of ALS and FTD have identified deregulation of CSF proteins associated with neurodegeneration, muscle atrophy, metabolic changes, synaptic and vesicle transport function [21], and neuroinflammation [22], highlighting potential pathways for candidate marker identification. While an increased CSF serum albumin ratio is associated with a faster progression in individuals with ALS [23], mechanistically, the loss of TDP-43 function in the endothelium might cause blood–brain barrier dysfunction [24]. Regarding adaptive immune responses, a selective intrathecal IgG1 and IgG3 synthesis has been noted without corresponding IgA production subclasses [23,25]. Furthermore, increased CD4+ and CD8+ T-cell activation profiles have been reported in ALS [26], and markers of glial activation can be detected in patients with ALS [27]. Eventually, the current diagnostic frameworks for ALS and FTD will advocate for the assessment of CSF basic and serological profiles to rule out autoimmune or infectious etiologies. Given this, inflammatory markers, including immunoglobulin profiles and measures of the blood–brain barrier integrity, may provide insights into disease mechanisms and offer potential differential diagnostic utility.

Most of these biomarkers require either further clinical validation, lack clinical routine application, or provide only limited information for differential diagnosis in ALS/FTD. While motor-predominant ALS presents comparably distinct symptoms, the broader ALS/FTD spectrum—particularly cognitive and behavioral presentations—poses significant diagnostic uncertainty. To elucidate differential biological insights distinctive for ALS/FTD against other neurodegenerative diseases, we conducted a systematic comparison of their CSF, serological, clinical, and neuroimaging biomarker profiles.

## 2. Results

### 2.1. Cohort Characteristics

A total of 229 samples from 214 patients were included in the analysis, distributed across seven diagnostic labels: ALS (n = 45); FTD (n = 26); 4R_Tau (n = 34); AD (n = 52); NPH (n = 45); LBD (n = 18); and controls with normal cognitive aging (NCA) (n = 29). Detailed demographic and clinical features are presented in Table 1.

Age at estimated symptom onset differed significantly between groups (Kruskal–Wallis, p < 0.001), ranging from a mean (SD) of 60.0 (13) years in the NCA group to 75 (7) years in NPH. Similarly, age at first LP varied (overall p < 0.001), being lowest in NCA (61 [12] years) and highest in NPH (77 [6] years). The interval between estimated symptom onset and LP was the shortest in NCA (1.1 [1] years) and the longest in LBD (4.4 [9] years, p < 0.05).

The sex distribution also varied across diagnoses (χ2/Fisher, p < 0.05), with the highest proportion of male participants observed in FTD (85%) and the lowest in AD (51%). The prevalence of comorbid conditions, such as neoplastic disease, also differed nominally between groups, being most frequent in LBD (44%) and 4R_Tau (36%, statistical comparison omitted given the low occurrence rate). Diabetes mellitus, CKD, arterial hypertension (p = 0.10), and autoimmune comorbidities did not differ between diagnostic labels.

For subsequent analyses, these seven diagnostic labels were collapsed into four major diagnostic groups (ALS/FTD; 4R_Tau; DC [disease controls: AD, LBD, and NPH]; and NCA) that share inherent intra-group biological–clinical properties or serve as disease or normal control populations (cohort characteristics provided in Supplementary Table S1). To assess whether age at LP or sex influences biomarker levels, we conducted linear regressions with interaction terms with ALS/FTD spectrum diagnosis. Only the κFLC index showed significant age-dependent effects (ß = +0.973 ± 0.268, adjusted p-value = 0.042), while all other biomarkers demonstrated consistent diagnostic performances across demographic strata (Supplementary Table S2).

### 2.2. CSF Biomarker Profiles Across Neurodegenerative Diseases

Given the established diagnostic challenges in differentiating ALS/FTD from other neurodegenerative diseases, we systematically explored multimodal biomarker signatures to characterize distinct proteinopathies and evaluate their differential diagnostic potentials.

Exploratory analyses revealed distinctive biomarker, clinical, and demographic feature patterns across the seven diagnosis labels, as visualized in the comprehensive heatmap (Figure 1A). Within this heatmap, the individual ALS and FTD groups exhibited similar biomarker profiles (left panel), supporting their grouping as a unified ALS/FTD spectrum for subsequent analyses (further supported in Supplementary Figure S2). The heatmap also demonstrated clear separation between grouped diagnoses, with ALS/FTD showing notably distinct values compared to the remaining groups, especially within the recognized CSF parameters. As expected, AD exhibited not only elevated tau-related markers and reduced Aβ42 but also low immunoglobulin isotype levels, while both ALS and FTD displayed an inverse pattern with intermediate tTau increases and unchanged amyloid concentrations but heterogenous shifts in immunoglobulin isotypes. The 4R_Tau profile partly resembled the ALS/FTD pattern, though with lower tTau levels and differential immunoglobulin-related alterations. LBD cases had comparably neutral Aβ- and tau-related markers, while NPH cases depicted the strongest Aβ40, pTau, and tTau reductions. The NCA feature profile showed the physiological states of the cognitive performance, biomarker levels, and neuroimaging patterns.

To account for differences in the demographic and clinical covariates, we applied inverse probability weighting (IPW) and repeated the analysis on the four collapsed diagnostic groups: ALS/FTD, 4R_Tau, DC, and NCA. Of the 17 CSF biomarkers examined, six reached statistical significance after IPW adjustment: Aβ42, Aβ42/Aβ40, tTau, pTau, and the pTau:tTau and Aβ42/pTau ratios (Figure 1B, Supplementary Figure S3). ALS/FTD demonstrated a distinct neurochemical signature characterized by significantly higher Aβ42 compared to DC. The PTau levels and pTau:tTau ratio were markedly lower in ALS/FTD relative to DC. Both principal markers of AD pathophysiology, the Aβ42/Aβ40 and Aβ42/pTau ratios, were significantly lower in DC compared to ALS/FTD.

These findings validate and expand a distinct neurochemical fingerprint for the ALS/FTD spectrum that reflects the underlying non-Alzheimer pathophysiology and provides a foundation for biomarker-based differential diagnosis. Importantly, these AD vs. non-AD contrasts do not diminish the discriminatory value of markers relevant to ALS/FTD. Rather, they provide a biological reference against which more subtle non-AD neurodegenerative patterns, including ALS/FTD, can be contextualized.

### 2.3. Diagnostic Value and Limitations of the pTau:tTau Ratio

The pTau:tTau ratio as a diagnostic marker of ALS/FTD reflects non-Alzheimer pathophysiology with a disproportional tTau release from neuroaxonal–synaptic damage and only modestly changed pTau levels. We next assessed its differential diagnostic value and limitations across the studied disease spectrum.

We could replicate distinct distributional patterns of the pTau:tTau ratio across neurodegenerative diseases. The ALS and FTD groups consistently demonstrated the lowest median ratio values, while the AD group exhibited the highest (Figure 2A,B). The 4R_Tau, LBD, NPH, and NCA groups showed intermediate values, with the 4R_Tau group’s median appearing slightly lower than the remaining ones. The ability to predict ALS/FTD vs. non-ALS/FTD cases based only on the pTau:tTau ratio (optimal cut-point = 0.120) was modest (sensitivity = 0.61; specificity = 0.80; AUC-PR = 0.32; AUC = 0.78; Supplementary Table S3).

When examining the correlational patterns of the pTau and tTau CSF levels, AD samples exhibited a high level of correlation (Figure 2C). As expected, AD cases consistently presented with both elevated pTau and tTau values, aligning in the upper-right quadrant. Conversely, ALS/FTD samples with lower values for both parameters congregated in the lower-left quadrant. Both ALS/FTD and 4R_Tau showed less steep regression slopes, emphasizing the distinct tTau-to-pTau decoupling pattern. Notably, these groups displayed increased scatter at lower concentrations of both tTau and pTau. The greater variability at low concentrations was consistent across all diagnostic groups, possibly attributable to measurement inaccuracy at the assays’ lower limit of detection.

We further investigated the relationship between the pTau:tTau ratio, neuroimaging features, and basic CSF parameters. The 4R_Tau group showed a significant positive correlation between the pTau:tTau ratio and the follow-up/survival time (R = 0.44, p = 0.0428) (Supplementary Figure S4).

In summary, the CSF pTau:tTau ratio exhibits group differences, aiding the diagnostic differentiation of ALS/FTD in the studied disease groups, but comes with technical limitations in low-concentration ranges and in the delineation of 4R_Tau.

### 2.4. A Multimodal Biomarker Panel for ALS/FTD Discrimination

To systematically characterize the biological signature of ALS/FTD and identify discriminatory patterns that distinguish this spectrum from other neurodegenerative diseases with partly overlapping clinical presentations but distinct presumed proteinopathies, we developed a regularized machine learning approach integrating routinely available features from clinical examination, CSF neurochemistry, and neuroimaging.

A single regularized multimodal XGBoost model incorporating 44 features was trained on a 75% split of the cohort to discriminate ALS/FTD (n = 71) from non-ALS/FTD entities (4R_Tau, AD, LBD, NPH, and cognitively normal controls; n = 158), with the final performance evaluated in the remaining unseen 25% test set cases (Figure 3A, Supplementary Table S4). The model achieved training and test AUC-PR values of 0.83 and 0.75, respectively. Performance metrics, including accuracy, sensitivity, and specificity, showed consistent discrimination capacity across train–test splits (Figure 3A).

SHAP-based feature contribution analysis revealed a distinct predictive pattern in ALS/FTD (Figure 3B,C). Top-ranked features included lower age at LP, the CSF pTau:tTau ratio, serum IgA, and frequency of arterial hypertension, on the one hand. On the other hand, higher CSF Aβ42/pTau and CSF IgG:IgA ratios, serum IgG levels, and MoCA scores were predictive of ALS/FTD. The SHAP value distributions demonstrated the concordant directionality of biological contributions between training and test partitions, with mean absolute SHAP comparisons confirming stable importance rankings across independent datasets. Although, in this regularized model, the pTau:tTau ratio contributed relevant information to the prediction task, it was superseded by serological, AD, and clinical features.

The nominal increase in the CSF IgG:IgA ratio in ALS, FTD, and, to a lesser extent, 4R_Tau, compared to the remaining groups (Figure 1A, exploratory), was not significant upon more detailed analysis (Supplementary Figure S5). However, the CSF IgG:IgA ratio was significantly negatively correlated with the Qalb in ALS/FTD.

These findings establish a distinct biological profile for ALS/FTD characterized by altered tTau dynamics, absent amyloid metabolism, immunoglobulin dysregulation, relatively preserved global cognitive function, and younger age at presentation—distinguishing this spectrum from AD-type neurodegeneration, primary tauopathies, and other proteinopathies.

## 3. Discussion

This study reveals a distinctive pathophysiological profile for the ALS/FTD spectrum, characterized by a reduced pTau:tTau ratio, altered amyloid and immunoglobulin dynamics, as well as relatively preserved cognition and younger age—patterns that distinguish ALS/FTD from AD-type neurodegeneration, primary tauopathies, and other neurodegenerative entities. Our multimodal approach provides a contextual view into differential pathomechanisms across neurodegenerative diseases, with contact points for potential diagnostic and therapeutic applications.

A major practical consequence of persistent diagnostic uncertainty in ALS and FTD is that many treatment decisions, supportive interventions, and referrals are routinely deferred until the clinical picture and ancillary testing results evolve sufficiently to confirm the diagnosis. This approach is common in the real world but can inadvertently prolong periods during which patients are left without appropriate multidisciplinary care, prognostic counseling, or access to disease-modifying trials [28]. A validated biomarker panel tested for at an early stage that reliably reduces diagnostic uncertainty would therefore have direct clinical impact by shortening time-to-diagnosis and mitigating potentially harmful delays in initiating patient-centered management.

Although CSF biomarkers differed most significantly when comparing AD against the remaining diagnoses, this reflects the well-established and highly specific neurochemical signature of AD rather than a limitation in ALS/FTD discrimination. By contrast, our multimodal models, which integrate CSF, clinical, and neuroimaging features, demonstrated good discriminatory performances for ALS/FTD despite the more modest univariate group differences. Thus, the AD-driven separation serves primarily as a biological benchmark rather than the focus of diagnostic differentiation.

Our findings corroborate and extend previous observations regarding the distinctive neurochemical signature of ALS/FTD. The consistently reduced pTau:tTau ratio in ALS/FTD reflects the underlying non-Alzheimer pathophysiology, primarily driven by disproportionate tTau release from neuroaxonal and synaptic damage with relatively preserved or mildly reduced pTau levels [14,15,16,29]. This pattern aligns with recent meta-analytic evidence validating consistently decreased pTau:tTau ratio values in ALS patients compared to controls (SMD: −0.84 [−1.16 to −0.53]) [30]. Critically, the pTau:tTau ratio demonstrates modest discriminatory capacity when used in isolation, is influenced by a higher spread at low concentration ranges, and, in turn, has limited diagnostic utility at the individual-subject level. While CSF pTau in ALS is also lower than that in healthy controls [31], recent evidence has demonstrated that phospho-tau species (pTau181, pTau217) are elevated in the sera of ALS patients as well, challenging the disease specificity of these canonical AD markers, if applied without clinical context [17]. Our CSF-based approach provides higher pathophysiological specificity by directly reflecting CNS processes, yet the heterogeneous pathological substrate underlying FTD variants (including TDP-43, tau, and other proteinopathies) limits the utility of tau-based markers alone. This underlines the need for sophisticated multi-parameter approaches or for TDP-43- and tau isoform-specific biomarkers to enable comprehensive FTD spectrum characterization [32].

When integrated with complementary clinical, serological, and neuroimaging features through machine learning, the biological profile of ALS/FTD was notably more distinctive, revealing patterns not captured by individual biomarkers. The prominence of preserved MoCA scores as a discriminatory feature in ALS and some FTD variants might reflect the relatively preserved cognitive function in pure motor presentations, supporting clinical phenotyping approaches that emphasize cognitive–motor divergence. The Edinburgh Cognitive and Behavioural ALS Screen (ECAS) has been specifically designed and validated to detect frontotemporal and executive dysfunction in ALS and may have provided a more nuanced cognitive profile of our ALS cohort [33].

The CSF IgG:IgA ratio emerged from the XGBoost modeling and SHAP analysis as a potentially distinctive marker, though its biological basis remains incompletely understood. Several pathophysiological mechanisms may account for the elevated CSF IgG:IgA ratio observed in ALS/FTD. Blood–brain barrier dysfunction, documented in approximately 30% of ALS patients by an elevated Qalb, facilitates the preferential CSF entry of serum-derived IgA over IgG. In genetic ALS/FTD, endothelial TDP-43 dysfunction appears to drive barrier breakdown, with subsequent immunoglobulin accumulation [24]. Consistent with this hypothesis, the CSF IgG:IgA ratio correlated with the Qalb in our ALS/FTD subgroup, suggesting that increased intrathecal IgA levels may reflect passive diffusion rather than local synthesis. Previous reports of a selective intrathecal synthesis of IgG1 and IgG3 without corresponding IgA production subclasses [23,25], alongside increased CD4+ and CD8+ T-cell activation in ALS [26], indicate adaptive immune involvement distinct from classical neuroinflammatory disorders. However, we did not replicate significant group-level differences in the intrathecal fractions of IgG and IgA in our cohort. Given these incongruous observations and the exploratory nature of our analysis, the IgG:IgA ratio should be interpreted as a descriptive composite marker whose relationship to barrier dysfunction versus disease-specific immune activation requires systematic investigation in independent cohorts.

Structural neuroimaging features contributed minimally to the ALS/FTD spectrum characterization in our unified modeling approach. This limited contribution likely reflects phenotypic heterogeneity within the spectrum and the absence of spinal imaging, which would identify cervical spinal disorders as a treatable ALS-mimic. While cerebral MRI remains valuable for excluding alternative pathologies and assessing atrophy patterns in FTD, our findings deprioritize the value of the included—and admittedly high-level—features for ALS/FTD diagnosis.

Future validation studies should incorporate blood-based biomarkers like NfL, emerging cryptic exon-based approaches, and extracellular vesicle TDP-43 detection that demonstrate high sensitivity and specificity for TDP-43 proteinopathies [34,35]. Observing longitudinal biomarker trajectories will be essential for capturing disease progression patterns and facilitating early detection in presymptomatic stages.

### Limitations

Several limitations warrant consideration. The single-center design may limit generalizability, and the modest sample sizes for certain diagnostic categories (LBD, 4R tauopathies) restrict statistical power for disease discrimination. This is of importance especially for machine learning approaches, where larger datasets are essential for validating our findings and expanding their generalizability to external cohorts. We mitigated this by implementing a balanced prediction and test set generalization approach and accounting for imbalanced class labels.

The use of clinical diagnostic criteria rather than autopsy confirmation in this study may have introduced misclassification biases, as disconcordance of clinical and neuropathological autopsy is documented [36]. We emphasize this as a common constraint of real-world, retrospective research, though we excluded cases with ambiguous diagnoses and applied established clinical diagnostic frameworks. Moving forward, it will be critical to validate these findings within autopsy-confirmed and/or genetic ALS/FTD cohorts to address this limitation and improve the classification reliability.

A further limitation concerns the use of the MoCA instead of an ALS-specific cognitive assessment, such as the ECAS [33]. However, the MoCA was the only uniformly available test across all diagnostic groups and thus permitted valid cross-disease comparisons. This may have led to underestimation of subtle ALS-specific cognitive and behavioral impairments.

Furthermore, although our study identified a pathophysiological profile contextualizing the pTau:tTau ratio, the absence of NfL, or other blood-based markers (e.g., serum NfL or TDP-43 derivatives), were unavoidable limitations tied to the clinical reliance on and availability of routine biomarkers. Eventually the studied disease spectrum did not account for typical motor-dominant ALS-mimics, including inflammatory, metabolic, and genetic entities, which warrants multicenter studies of more diverse patient cohorts.

## 4. Methods

### 4.1. Study Population and Study Design

In this retrospective study, we analyzed data from patients who underwent comprehensive clinical evaluation, CSF biomarker testing, neuroimaging, and additional ancillary testing as part of the routine work-up for suspected neurodegenerative or other neurological disorders. A total of 272 CSF neurochemistry records from patients diagnosed with neurodegenerative and non-neurodegenerative diseases were screened from the University Hospital Zürich (USZ) database, acquired from January 2016 to May 2025. After excluding those with undetermined diagnoses and acute-inflammatory CSF profiles (i.e., CSF cell count > 5/µL), 229 samples from 214 patients were retained.

We selected patients with diagnoses based on established clinical criteria [4,37,38,39,40,41,42,43], including ALS (Awaji-Shima criteria [4] were preferred over Gold Coast criteria given their higher specificity [37]), FTD (behavioral variant, primary progressive aphasia, motor neuron disease [38]), 4R tauopathy (probable 4R_Tau [39]), AD (revised ATN criteria) [40], presumed Lewy body diseases (LBD, i.e., Parkinson’s disease [dementia] [41] and dementia with Lewy bodies [42]), and idiopathic normal-pressure hydrocephalus (NPH) [43]. As controls, we included patients with non-neurodegenerative diagnoses (i.e., psychiatric and primary headache disorders) lacking any objective cognitive decline and over the age of 45, grouped as normal cognitive aging (NCA). Importantly, the included comparator groups (AD, 4R-Tau, LBD, NPH, NCA) do not represent classic ALS mimics and do not typically present with progressive muscle weakness or electrophysiological evidence of motor neuron pathology. Instead, these groups reflect the real-world population undergoing CSF biomarker evaluation in a tertiary care setting for cognitive and neurodegenerative diseases.

From selected patients, the following data were retrieved: diagnosis; sex; age at onset of symptoms; age at lumbar puncture (LP); follow-up time after LP; CSF biomarkers and relevant comorbidities, such as diabetes mellitus, arterial hypertension, chronic kidney disease (CKD), neoplasms, traumatic brain injury (TBI), and autoimmune disorders. Furthermore, magnetic resonance imaging (MRI) data, such as medial temporal lobe atrophy (MTA, right and left) scores, global cortical atrophy (GCA) scores, and Fazekas white matter hyperintensity grades were included. The clinical disease severity was assessed using the revised ALS Functional Rating Scale (ALSFRS-r), Montreal Cognitive Assessment (MoCA), Mini-Mental State Examination (MMSE), and Unified Parkinson Disease Rating Scale (UPDRS), with the genetic mutation status recorded, if available. Deceased patients had a registered death date, whereas the remaining ones were categorized as loss of follow-up until the last contact.

### 4.2. CSF Processing

LP was performed at the L3/4 or L4/5 intervertebral spaces using a sterile syringe. CSF neurochemistry analysis followed previously described protocols [44]. Briefly, the CSF white blood cell count was conducted using a Fuchs–Rosenthal chamber, within 1–2 h after LP. Cytologic differentiation was conducted if the CSF cell count exceeded 4/µL. Concentrations of albumin, immunoglobulins (IgG/A/M), and κ/λ-free light chains (κFLC, λFLC) were quantified in both CSF and serum by immune nephelometry. From these, CSF–serum ratios were calculated. The blood–CSF barrier integrity was assessed via the CSF–serum albumin ratio (Qalb). The intrathecal synthesis of immunoglobulins was evaluated through the application of Reiber’s formula [45] (for IgG/M/A, κFLC) and isoelectric focusing with immunoblotting (oligoclonal bands).

Canonical AD biomarkers, including amyloid β1–42 (Aβ42), amyloid β1–40 (Aβ40), the Aβ42/Aβ40 ratio, phospho-tau181 (pTau), and total-tau (tTau), were measured in CSF using the Fujirebio Lumipulse G600II system. The cutoff values were defined as follows: Aβ42: 500 pg/mL; Aβ42/Aβ40: 0.0069; pTau: 56.4 pg/mL, and the age-adjusted values for tTau were as follows: 300 pg/mL for patients ≤50 years; 450 pg/mL for those 51–70 years; and 500 pg/mL for patients >70 years.

### 4.3. Statistical Analysis

All statistical analyses were performed in RStudio with R 4.3.3 using the data.table, tidyverse, cobalt, nnet, survey, pROC, and caret packages and related visualization libraries. The source code used is available at https://github.com/nes-b/ALS-FTD-Classifier (accessed on 19 November 2025).

#### 4.3.1. Descriptive and Inferential Statistics

For each diagnostic group, we summarized the sample size, mean (±SD) age at estimated disease onset, age at LP, and time interval between disease onset and LP. The sex distribution and prevalence of comorbidities (diabetes mellitus, arterial hypertension, chronic kidney disease, neoplastic and autoimmune diseases) were expressed as percentages. Group comparisons were performed using Kruskal–Wallis tests for continuous variables and χ2 tests or Fisher’s exact tests (depending on the expected cell counts) for categorical variables. P-values were reported in a summary table.

Visualizations were generated using box-and-whisker plots with overlaid beeswarm plots for each biomarker, stratified by diagnosis group. Comparisons were first performed across all seven diagnostic groups and were then collapsed into four biologically motivated categories for secondary analyses: (i) ALS/FTD; (ii) 4R-Tau; (iii) DC (disease controls), comprising AD, LBD, and NPH; and (iv) NCA.

#### 4.3.2. Inverse Probability Weighting and Linear Regression Terms

To account for differences in the baseline characteristics between diagnostic groups, we applied inverse probability weighting (IPW) based on propensity scores. Propensity scores were estimated using logistic regression, including the covariates of arterial hypertension, CKD, diabetes mellitus, neoplastic disease, autoimmune disease, age at manifestation, and age at report. Each observation was then weighted by the inverse of the estimated probability of its group assignment [46,47].

Additionally, to assess whether age at LP or sex modify biomarker associations with ALS/FTD diagnosis, we conducted linear regression models with interaction terms (biomarker ~ ALS/FTD × age; and biomarker ~ ALS/FTD × sex). P-values were adjusted for multiple testing using the false discovery rate method. Spearman correlation analyses were performed to assess relationships among clinical, CSF, and neuroimaging variables, with correlation coefficients and p-values calculated using pairwise complete observations to handle missing data.

#### 4.3.3. Cut-Point Determination and Supervised Modeling

The best binary cut-point of the continuous pTau:tTau ratio values was determined by maximizing the F1-score, which balances the harmonic mean of precision and recall and accounts for class imbalances.

For supervised machine learning, the cohort was stratified into 75% training and 25% testing splits, balancing information to be learned and leaving a substantial remainder for testing the generalization ability in the training and testing sets, respectively.

Features were divided into three sets: clinic demographics (sex, age, and disease duration; cognition and motor function); CSF variables (i.e., CSF cytology, CSF chemistry, immunoglobulins and light chains, AD CSF biomarkers); and (semi-)quantitative MRI pathology patterns (i.e., MTA, GCA, Fazekas grade). Prior to modeling, feature correlations were assessed using Spearman correlation coefficients to identify multicollinearity patterns (Supplementary Figure S1). Missing data were handled using Multiple Imputation by Chained Equations [40], with m = 30 imputations using predictive mean matching and a maximum of 20 iterations. Test set imputation was performed using training set parameters to prevent data leakage.

Extreme Gradient Boosting (XGB) [48] was chosen for its robust performance, built-in strategies for mitigating data missingness, and intrinsic feature importance metrics. A comprehensive hyperparameter search was performed using 5-fold cross-validation including the maximum tree depth, learning rate, minimum child weight, subsample, colsample by tree, lambda, alpha, and gamma. The optimal hyperparameter configuration was selected using a composite score that balanced the cross-validation area under the precision–recall curve (AUC-PR), the standard deviation of the AUC-PR in cross-validation, and the train–test generalization gap: score = mean(AUC-PRCV) − 0.5 × sd(AUC-PRCV) − 0.4 × (Train-Test-Gap). This approach prioritized models with better generalization over those with higher training performances. To allow these models to capture gradually more complexity, the maximum depth was increased by +1. The cross-validation and final ALS/FTD models employed a binary-logistic objective to maximize the AUC-PR for classification of the positive class, thereby accounting for the underrepresented positive-class labels (i.e., ALS/FTD ~ 0.3).

#### 4.3.4. Feature Importance and SHAP Analysis

To interpret model predictions and identify the most influential biomarkers, we computed SHapley Additive exPlanations (SHAP) values for both training and test sets using the SHAPforxgboost R package (https://github.com/liuyanguu/SHAPforxgboost, accessed on 19 November 2025). SHAP values quantify each feature’s contribution to individual predictions by measuring the change in model output when that feature is included versus when it is excluded.

Feature values were scaled within each variable to enable comparison across different measurement scales (normalized to 0–1 range). The SHAP importance was visualized using point-jitter plots showing the distribution of SHAP values colored by scaled feature values. The mean absolute SHAP values were compared between training and test sets to assess the consistency of the feature importance across datasets. Feature rankings were evaluated using rank correlation and absolute rank differences to quantify the stability of the importance patterns.

## 5. Conclusions

This study demonstrates that a machine learning integration of routine clinical and biofluid data achieves biologically meaningful ALS/FTD classification, challenging single-marker paradigms and supporting emerging multimodal diagnostic frameworks for TDP-43-associated phenotypes. Beyond discrimination, the observed interplay between CSF tau dynamics and immunoglobulin profiles and clinical features generates testable hypotheses linking blood–brain barrier dysfunction and immune activation to ALS/FTD pathophysiology. Prospective studies in larger, autopsy- or genetically confirmed, and multicenter cohorts integrating blood-based and TDP-43-related biomarkers and assessing longitudinal trajectories from presymptomatic stages to ALS–ALS/FTD overlap will be essential to validate and extend this multimodal framework.

## Acknowledgements

AcknowledgmentsWe thank Rebecca Koller for her support in the patient recruitment. We thank Liliane Zollinger-Meister, Ester Dall’Acqua-Giovanoli, Nadja Lüönd, and Nicole Zolliker for their technical support and sample processing.

## Funding

- the Fondation Suisse De Recherche Sur Les Maladies Musculaires
- Roche61719

## Data Availability

Data Availability StatementThe data presented in this study are available on request from the corresponding author due to privacy and ethical reasons.

## References

1. 1. Van EsM.A. HardimanO. ChioA. Al-ChalabiA. PasterkampR.J. VeldinkJ.H. Van Den BergL.H. Amyotrophic lateral sclerosisLancet20173902084209810.1016/S0140-6736(17)31287-428552366 [PMID:28552366]
2. 2. BrownR.H. Al-ChalabiA. Amyotrophic Lateral SclerosisN. Engl. J. Med.201737716217210.1056/NEJMra160347128700839 [PMID:28700839]
3. 3. HardimanO. Al-ChalabiA. ChioA. CorrE.M. LogroscinoG. RobberechtW. ShawP.J. SimmonsZ. Van Den BergL.H. Amyotrophic lateral sclerosisNat. Rev. Dis. Primers201731707110.1038/nrdp.2017.7128980624 [PMID:28980624]
4. 4. De CarvalhoM. DenglerR. EisenA. EnglandJ.D. KajiR. KimuraJ. MillsK. MitsumotoH. NoderaH. ShefnerJ. Electrodiagnostic criteria for diagnosis of ALSClin. Neurophysiol.200811949750310.1016/j.clinph.2007.09.14318164242 [PMID:18164242]
5. 5. VucicS. FergusonT.A. CummingsC. HotchkinM.T. GengeA. GlanzmanR. RoetK.C.D. CudkowiczM. KiernanM.C. Gold Coast diagnostic criteria: Implications for ALS diagnosis and clinical trial enrollmentMuscle Nerve20216453253710.1002/mus.2739234378224 [PMID:34378224]
6. 6. WangH. GuanL. DengM. Recent progress of the genetics of amyotrophic lateral sclerosis and challenges of gene therapyFront. Neurosci.202317117099610.3389/fnins.2023.117099637250416PMC10213321 [PMID:37250416]
7. 7. AbrahamsS. Neuropsychological impairment in amyotrophic lateral sclerosis–frontotemporal spectrum disorderNat. Rev. Neurol.20231965566710.1038/s41582-023-00878-z37828358 [PMID:37828358]
8. 8. CrockfordC. NewtonJ. LonerganK. ChiweraT. BoothT. ChandranS. ColvilleS. HeverinM. MaysI. PalS. ALS-specific cognitive and behavior changes associated with advancing disease stage in ALSNeurology201891e1370e138010.1212/WNL.000000000000631730209236PMC6177274 [PMID:30209236]
9. 9. BangJ. SpinaS. MillerB.L. Frontotemporal dementiaLancet20153861672168210.1016/S0140-6736(15)00461-426595641PMC5970949 [PMID:26595641]
10. 10. AbrahamsS. GoldsteinL.H. SimmonsA. BrammerM. WilliamsS.C.R. GiampietroV. LeighP.N. Word retrieval in amyotrophic lateral sclerosis: A functional magnetic resonance imaging studyBrain20041271507151710.1093/brain/awh17015163610 [PMID:15163610]
11. 11. FerrariR. KapogiannisD. HueyE.D. MomeniP. FTD and ALS: A Tale of Two DiseasesCAR2011827329410.2174/156720511795563700PMC380119521222600 [PMID:21222600]
12. 12. LiptonA.M. WhiteC.L. BigioE.H. Frontotemporal lobar degeneration with motor neuron disease-type inclusions predominates in 76 cases of frontotemporal degenerationActa Neuropathol.200410837938510.1007/s00401-004-0900-915351890 [PMID:15351890]
13. 13. LiscicR.M. AlbericiA. CairnsN.J. RomanoM. BurattiE. From basic research to the clinic: Innovative therapies for ALS and FTD in the pipelineMol. Neurodegener.2020153110.1186/s13024-020-00373-932487123PMC7268618 [PMID:32487123]
14. 14. MeeterL.H.H. VijverbergE.G. Del CampoM. RozemullerA.J.M. Donker KaatL. De JongF.J. Van Der FlierW.M. TeunissenC.E. Van SwietenJ.C. PijnenburgY.A.L. Clinical value of neurofilament and phospho-tau/tau ratio in the frontotemporal dementia spectrumNeurology201890e1231e123910.1212/WNL.000000000000526129514947PMC5890612 [PMID:29514947]
15. 15. GrossmanM. ElmanL. McCluskeyL. McMillanC.T. BollerA. PowersJ. RascovskyK. HuW. ShawL. IrwinD.J. Phosphorylated Tau as a Candidate Biomarker for Amyotrophic Lateral SclerosisJAMA Neurol.20147144210.1001/jamaneurol.2013.606424492862PMC3989393 [PMID:24492862]
16. 16. AgnelloL. CollettiT. Lo SassoB. VidaliM. SpataroR. GambinoC.M. GiglioR.V. PiccoliT. BivonaG. La BellaV. Tau protein as a diagnostic and prognostic biomarker in amyotrophic lateral sclerosisEur. J. Neurol.2021281868187510.1111/ene.1478933638255 [PMID:33638255]
17. 17. Abu-RumeilehS. ScholleL. MenschA. GroßkopfH. RattiA. KölschA. Stoltenburg-DidingerG. ConradJ. De GobbiA. BarbaL. Phosphorylated tau 181 and 217 are elevated in serum and muscle of patients with amyotrophic lateral sclerosisNat. Commun.202516201910.1038/s41467-025-57144-740044663PMC11882981 [PMID:40044663]
18. 18. ThomasE.V. HanC. KimW.J. AsressS. LiY. TaylorJ.A. GearingM. FournierC.N. McEachinZ.T. SeyfriedN.T. ALS plasma biomarkers reveal neurofilament and pTau correlate with disease onset and progressionAnn. Clin. Transl. Neurol.20251271472310.1002/acn3.7000139913612PMC12040516 [PMID:39913612]
19. 19. Rea ReyesR.E. WilsonR.E. LanghoughR.E. StuderR.L. JonaitisE.M. OomensJ.E. PlanalpE.M. BendlinB.B. ChinN.A. AsthanaS. Targeted proteomic biomarker profiling using NULISA in a cohort enriched with risk for Alzheimer’s disease and related dementiasAlzheimer’s Dement.202521e7016610.1002/alz.7016640318118PMC12046973 [PMID:40318118]
20. 20. BridelC. Van WieringenW.N. ZetterbergH. TijmsB.M. TeunissenC.E. the NFL Group Alvarez-CermeñoJ.C. AndreassonU. AxelssonM. BäckströmD.C. Diagnostic Value of Cerebrospinal Fluid Neurofilament Light Protein in Neurology: A Systematic Review and Meta-analysisJAMA Neurol.201976103510.1001/jamaneurol.2019.153431206160PMC6580449 [PMID:31206160]
21. 21. MuqakuB. DorstJ. WiesenfarthM. OttoM. LudolphA.C. OecklP. Peptidomic analysis of CSF reveals new biomarker candidates for amyotrophic lateral sclerosisEMBO Mol. Med.2025171926194910.1038/s44321-025-00272-w40681694PMC12340150 [PMID:40681694]
22. 22. McCauleyM.E. BalohR.H. Inflammation in ALS/FTD pathogenesisActa Neuropathol.201913771573010.1007/s00401-018-1933-930465257PMC6482122 [PMID:30465257]
23. 23. FuJ. LaiX. WeiQ. ChenX. ShangH. Associations of cerebrospinal fluid profiles with severity and mortality risk of amyotrophic lateral sclerosisFront. Neurosci.202418137589210.3389/fnins.2024.137589238812975PMC11133581 [PMID:38812975]
24. 24. CheemalaA. KimbleA.L. BurrageE.N. HelmingS.B. TyburskiJ.D. LeclairN.K. OmarO.M. ZuberiA.R. MurphyM. JellisonE.R. Amyotrophic lateral sclerosis and frontotemporal dementia mutation reduces endothelial TDP-43 and causes blood-brain barrier defectsSci. Adv.202511eads050510.1126/sciadv.ads050540238886PMC12002129 [PMID:40238886]
25. 25. LosyJ. WenderM. IgG subclasses and their intrathecal synthesis in patients with amyotrophic lateral sclerosisEur. J. Neurol.1996324124410.1111/j.1468-1331.1996.tb00429.x21284776 [PMID:21284776]
26. 26. RolfesL. Schulte-MecklenbeckA. SchreiberS. VielhaberS. HertyM. MartenA. PfeufferS. RuckT. WiendlH. GrossC.C. Amyotrophic lateral sclerosis patients show increased peripheral and intrathecal T-cell activationBrain Commun.20213fcab15710.1093/braincomms/fcab15734405141PMC8363480 [PMID:34405141]
27. 27. CostaJ. GromichoM. Pronto-LaborinhoA. AlmeidaC. GomesR.A. GuerreiroA.C.L. OlivaA. PintoS. De CarvalhoM. Cerebrospinal Fluid Chitinases as Biomarkers for Amyotrophic Lateral SclerosisDiagnostics202111121010.3390/diagnostics1107121034359293PMC8305219 [PMID:34359293]
28. 28. GwathmeyK.G. CorciaP. McDermottC.J. GengeA. SennfältS. De CarvalhoM. IngreC. Diagnostic delay in amyotrophic lateral sclerosisEur. J. Neurol.2023302595260110.1111/ene.1587437209406 [PMID:37209406]
29. 29. SoaresC. BellaverB. FerreiraP.C.L. PovalaG. Schaffer AguzzoliC. Ferrari-SouzaJ.P. ZalzaleH. LussierF.Z. RohdenF. AbbasS. CSF total tau as a proxy of synaptic degenerationNat. Commun.202516807610.1038/s41467-025-63545-540883301PMC12397218 [PMID:40883301]
30. 30. AgahE. MojtabaviH. BehkarA. HeidariA. AjdariA. ShakaZ. MousaviS.V. FiroozehN. TafakhoriA. RezaeiN. CSF and blood levels of Neurofilaments, T-Tau, P-Tau, and Abeta-42 in amyotrophic lateral sclerosis: A systematic review and meta-analysisJ. Transl. Med.20242295310.1186/s12967-024-05767-739434139PMC11492992 [PMID:39434139]
31. 31. PijnenburgY.A.L. VerweyN.A. Van Der FlierW.M. ScheltensP. TeunissenC.E. Discriminative and prognostic potential of cerebrospinal fluid phosphoTau/tau ratio and neurofilaments for frontotemporal dementia subtypesAlzheimers Dement2015150551210.1016/j.dadm.2015.11.001PMC487949027239528 [PMID:27239528]
32. 32. CordtsI. WachingerA. ScialoC. LingorP. PolymenidouM. BurattiE. FenebergE. TDP-43 Proteinopathy Specific Biomarker DevelopmentCells20231259710.3390/cells1204059736831264PMC9954136 [PMID:36831264]
33. 33. AbrahamsS. NewtonJ. NivenE. FoleyJ. BakT.H. Screening for cognition and behaviour changes in ALSAmyotroph. Lateral Scler. Front. Degener.20141591410.3109/21678421.2013.80578423781974 [PMID:23781974]
34. 34. IrwinK.E. JasinP. BraunsteinK.E. SinhaI.R. GarretM.A. BowdenK.D. ChangK. TroncosoJ.C. MoghekarA. OhE.S. A fluid biomarker reveals loss of TDP-43 splicing repression in presymptomatic ALS–FTDNat. Med.202430382393Correction in Nat. Med. 2024, 30, 150410.1038/s41591-023-02788-538278991PMC10878965 [PMID:38278991]
35. 35. ChatterjeeM. ÖzdemirS. FritzC. MöbiusW. KleineidamL. MandelkowE. BiernatJ. DoğduC. PetersO. CosmaN.C. Plasma extracellular vesicle tau and TDP-43 as diagnostic biomarkers in FTD and ALSNat. Med.2024301771178310.1038/s41591-024-02937-438890531PMC11186765 [PMID:38890531]
36. 36. TraynorB.J. CoddM.B. CorrB. FordeC. FrostE. HardimanO. Amyotrophic Lateral Sclerosis Mimic Syndromes: A Population-Based StudyArch. Neurol.20005710910.1001/archneur.57.1.10910634456 [PMID:10634456]
37. 37. FerulloL. RisiB. CariaF. OlivieriE. PoliL. GazzinaS. LeggioU. BertellaE. GiovanelliG. LabellaB. Gold Coast Criteria in ALS Diagnosis: A Real-World ExperienceBrain Sci.202414105510.3390/brainsci1411105539595818PMC11592046 [PMID:39595818]
38. 38. BottN.T. RadkeA. StephensM.L. KramerJ.H. Frontotemporal Dementia: Diagnosis, Deficits and ManagementNeurodegener. Dis. Manag.2014443945410.2217/nmt.14.3425531687PMC4824317 [PMID:25531687]
39. 39. HöglingerG.U. RespondekG. StamelouM. KurzC. JosephsK.A. LangA.E. MollenhauerB. MüllerU. NilssonC. WhitwellJ.L. Clinical diagnosis of progressive supranuclear palsy: The movement disorder society criteria: MDS Clinical Diagnostic Criteria for PSPMov. Disord.20173285386410.1002/mds.2698728467028PMC5516529 [PMID:28467028]
40. 40. JackC.R. AndrewsJ.S. BeachT.G. BuracchioT. DunnB. GrafA. HanssonO. HoC. JagustW. McDadeE. Revised criteria for diagnosis and staging of Alzheimer’s disease: Alzheimer’s Association WorkgroupAlzheimer’s Dement.2024205143516910.1002/alz.1385938934362PMC11350039 [PMID:38934362]
41. 41. PostumaR.B. BergD. SternM. PoeweW. OlanowC.W. OertelW. ObesoJ. MarekK. LitvanI. LangA.E. MDS clinical diagnostic criteria for Parkinson’s disease: MDS-PD Clinical Diagnostic CriteriaMov. Disord.2015301591160110.1002/mds.2642426474316 [PMID:26474316]
42. 42. McKeithI.G. BoeveB.F. DicksonD.W. HallidayG. TaylorJ.-P. WeintraubD. AarslandD. GalvinJ. AttemsJ. BallardC.G. Diagnosis and management of dementia with Lewy bodies: Fourth consensus report of the DLB ConsortiumNeurology2017898810010.1212/WNL.000000000000405828592453PMC5496518 [PMID:28592453]
43. 43. RelkinN. MarmarouA. KlingeP. BergsneiderM. BlackP.M. Diagnosing Idiopathic Normal-pressure HydrocephalusNeurosurgery200557S2-4S2-1610.1227/01.NEU.0000168185.29659.C516160425 [PMID:16160425]
44. 44. VladB. ReichenI. NeidhartS. HiltyM. LekaditiD. HeuerC. EiseleA. ZieglerM. ReindlM. LutterottiA. Basic CSF parameters and MRZ reaction help in differentiating MOG antibody-associated autoimmune disease versus multiple sclerosisFront. Immunol.202314123714910.3389/fimmu.2023.123714937744325PMC10516557 [PMID:37744325]
45. 45. ReiberH. Flow rate of cerebrospinal fluid (CSF)—A concept common to normal blood-CSF barrier function and to dysfunction in neurological diseasesJ. Neurol. Sci.199412218920310.1016/0022-510X(94)90298-48021703 [PMID:8021703]
46. 46. RosenbaumP.R. RubinD.B. The central role of the propensity score in observational studies for causal effectsBiometrika198370415510.1093/biomet/70.1.41
47. 47. HernánM.A. RobinsJ.M. Using Big Data to Emulate a Target Trial When a Randomized Trial Is Not Available: Table 1Am. J. Epidemiol.201618375876410.1093/aje/kwv25426994063PMC4832051 [PMID:26994063]
48. 48. ChenT. GuestrinC. XGBoost: A Scalable Tree Boosting SystemarXiv201610.48550/arXiv.1603.027541603.02754
