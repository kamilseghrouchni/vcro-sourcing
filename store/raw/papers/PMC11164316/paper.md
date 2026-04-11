---
pmid: "37872285"
pmc: "PMC11164316"
doi: "10.1038/s42255-023-00903-x"
title: "Metabolomic Epidemiology Offers Insights into Disease Aetiology"
journal: "Nature metabolism"
year: 2023
authors:
  - name: "Fuller Harriett"
    affiliations:
      - ""
  - name: "Zhu Yiwen"
    affiliations:
      - ""
  - name: "Nicholas Jayna"
    affiliations:
      - ""
  - name: "Chatelaine Haley A."
    affiliations:
      - ""
  - name: "Drzymalla Emily M."
    affiliations:
      - ""
  - name: "Sarvestani Afrand K."
    affiliations:
      - ""
  - name: "Julián-Serrano Sachelly"
    affiliations:
      - ""
  - name: "Tahir Usman A."
    affiliations:
      - ""
  - name: "Sinnott-Armstrong Nasa"
    affiliations:
      - ""
  - name: "Raffield Laura M."
    affiliations:
      - ""
  - name: "Rahnavard Ali"
    affiliations:
      - ""
  - name: "Hua Xinwei"
    affiliations:
      - ""
  - name: "Shutta Katherine H."
    affiliations:
      - ""
  - name: "Darst Burcu F."
    affiliations:
      - ""
---

# Metabolomic Epidemiology Offers Insights into Disease Aetiology

## Abstract

Metabolomic epidemiology is the high-throughput study of the relationship between metabolites and health-related traits. This emerging and rapidly growing field has improved our understanding of disease aetiology and contributed to advances in precision medicine. As the field continues to develop, metabolomic epidemiology could lead to discoveries of diagnostic biomarkers predictive of disease risk, aiding in earlier disease detection and better prognosis. In this review, we discuss key advances facilitated by the field of metabolomic epidemiology for a range of conditions, including cardiometabolic diseases, cancer, Alzheimer’s disease, and COVID-19, with a focus on potential clinical utility. Core principles in metabolomic epidemiology, including study design, causal inference methods, and multi-omic integration, are briefly discussed. Future directions required for clinical translation of metabolomic epidemiology findings are summarised, emphasising public health implications. Further work is needed to establish which metabolites reproducibly improve clinical risk prediction in diverse populations and are causally related to disease progression.

## Introduction

1.

Metabolomic epidemiology is the study of the relationship between a high-throughput set of small-molecules collectively known as the human metabolome and health-related traits in population-based epidemiologic studies. The “metabolome”, coined in 1998, is the complete set of metabolites synthesised by a biological system1 (see Box 1 for common metabolomic epidemiology terminologies). Although “metabolomic epidemiology” was broadly introduced in 20212, such investigations have been ongoing for over two decades, as rapid technological developments have made the measurement of small molecules more efficient, accurate, and accessible for clinical and research applications.

Findings from this emerging field have already offered timely insights into disease aetiology, early detection, and progression, which could inform preventive, screening, and treatment strategies (Fig. 1). As metabolites represent the end product of many biological processes and are sensitive to environmental exposures, changes in metabolite levels could indicate disease risk at early subclinical stages of disease when prevention is still possible. For instance, a recent study reported that metabolomic states, or profiles, derived from 160 circulating metabolites were associated with incidence rates of diseases including coronary heart disease, type 2 diabetes (T2D), dementia, chronic obstructive pulmonary disease, liver disease, and lung cancer, with metabolomic states significantly improving the discriminative performance of established clinical predictors3.

Several notable recent efforts have advanced the field of metabolomic epidemiology. The COnsortium of METabolomics Studies (COMETS) was established in 2014 to promote large-scale human metabolome collaborations4, currently including >380,000 participants from 79 cohorts. COMETS has informed the harmonization of metabolites between platforms and is anticipated to further our understanding of how metabolites relate to disease aetiology and progression. The Finnish Institute for Health and Welfare (THL) Biobank has metabolomic data for >40K participants, with early investigations identifying, for example, metabolic differences between risk of peripheral artery disease versus coronary artery disease (CAD)5,6. In 2023, the UK Biobank publicly released metabolomic data on 280K participants, with medical records available for >700 common diseases, with previous data releases providing disease risk insights beyond commonly investigated cardiometabolic conditions7. Further, the NHLBI Trans-Omics for Precision Medicine (TOPMed) programme is generating metabolomic data on >37K diverse participants, with plans for longitudinal data generation. Lastly, although standard quality control guidelines for untargeted metabolomics are currently lacking, the metabolomic Quality Assurance and Quality Control Consortium recently provided guidance on the reporting of quality control and assurance procedures in untargeted metabolomic studies to increase transparency and reproducibility8.

In this review, we examine the biological insights provided by the growing field of metabolomic epidemiology with regards to prevention, screening, diagnostics, and treatment of several health-related traits that have been commonly examined in the field (Fig. 2). Study design considerations are briefly presented to provide context for interpreting findings. We discuss potential clinical applications for metabolomic epidemiology to advance disease treatment and healthcare in the coming years.

## Study Design Considerations

2.

Study design directly impacts research scope and interpretation of findings (Fig. 1). This is particularly important in metabolomic epidemiology due to the sensitivity of metabolites to disease onset, confounders or effect mediators (e.g., age, population, body mass index (BMI), fasting status), and technical factors related to sample collection and processing (e.g., sample handling, batch, stochastic drift). Among the most common study designs are case-control studies. Although powerful and cost-effective, case-control studies are particularly prone to selection bias, which can occur when the control group is not representative of the source population. Matched case-control studies are used to control for potential confounders prior to the collection of samples. However, such study designs limit the ability to directly investigate the effect of the matching variables (e.g., age, sex, population) on the outcome, as matching distorts this relationship9, although matching factors can be examined as effect modifiers. As such, matching factors should not include secondary exposures of interest.

While cross-sectional studies are limited to evaluating correlative associations, as biospecimen collection and outcome ascertainment occur concurrently at a single time point, prospective cohorts with pre-diagnostic metabolomic measurements could facilitate time-to-event investigations. Longitudinal repeated sampling enables investigations of metabolite trajectories that may be relevant to disease risk or other unrelated sources of variation, ultimately providing more stable association estimates. Generating metabolomic data in sampled longitudinal cohorts can be cost-prohibitive; however, nested case-control or case-cohort studies that select cases and controls within a cohort provide an efficient way to evaluate pre-diagnostic metabolites in the pathogenesis of disease. Although randomised controlled trials are often based on smaller sample sizes and cost-prohibitive, they provide rigorous causal evidence, for instance, between an intervention and the metabolome. A detailed review of study designs is beyond the scope of this article; previous publications provide further insights10.

Another important study design consideration includes metabolomic technology selections, such as nuclear magnetic resonance (NMR) and mass spectrometry (MS), as metabolite measurements vary by methodology and platform. These include targeted approaches that profile select metabolites and untargeted approaches that profile all measurable metabolites within the range of the specific platform. While the identity of a subset of metabolite peaks may be known, most peaks are unknown, necessitating significant downstream efforts in metabolite peak identification.

Platform considerations include metabolite separation techniques and determining the class and/or polarity of metabolites detected in the study. Technology selections also impact the interpretation of metabolite levels. Targeted methods can be quantitative, providing absolute concentrations using stable isotope labeled standards and calibration curves. Although these methods provide precise quantification, authentic standards are not available for all metabolites, thus limiting metabolite coverage. Further, quantitative methods should also consider protocols specific to the tissue type being analysed. Untargeted methods provide broader coverage, but are semiquantitative, reporting metabolite peak intensities, and measurements are highly dependent on pre-analytic methods. In-depth reviews of these technologies can be found elsewhere11. While this review focuses predominantly on circulating metabolites, biospecimen tissue type also influences the realm of research questions and interpretations of study findings, given that tissues of interest vary by disease.

Given the variety of measurement techniques, factors that impact metabolite measurements, quality control procedures, and study designs, replication of metabolomic epidemiology findings has been particularly challenging. As such, strategies to replicate findings, assess generalizability to different populations, and triangulate evidence (see “5.4. Triangulation and validation”) should be carefully considered at the study design stage of an investigation.

## Metabolomic Epidemiology and Disease Aetiology

3.

Here we discuss major metabolomic epidemiology findings and their clinical and translational implications, particularly highlighting untargeted investigations. Sections 3.1–3.7 focus on traits that have been more commonly investigated in metabolomic epidemiology (Fig. 2) and/or yielded consistent findings across studies to date (Fig. 3), while emerging traits that have not been studied as extensively are briefly discussed in sections 3.8–3.11.

### Adiposity

3.1.

Heightened adiposity increases risk of numerous health conditions, including T2D, cardiovascular disease (CVD), and numerous cancers. Despite this, mechanisms linking adiposity to adverse health outcomes are not fully understood, although the metabolome likely plays a key role12. Metabolomics has been used to predict adiposity and BMI13, improve our understanding of metabolic dysregulation resulting from increased adiposity14, and predict the success of obesity treatment15.

Metabolic perturbations resulting from increased adiposity are systemic and wide-reaching, including changes in glucose, lipid metabolism, and low-grade chronic inflammation, with strong associations consistently observed for branched chain amino acids (BCAAs)15. An untargeted study found that nearly a third of the metabolome was associated with BMI, particularly lipids, amino acids, and peptides12. Many of these metabolites were also associated with increased insulin resistance (including tyrosine, alanine, kynurenate, gamma-glutamyltyrosine, phospholipids, and glucose) and as such, could mediate the association between adiposity and metabolic health conditions12. However, BMI insufficiently predicts adiposity and its health complications, and metabolomics provides an opportunity to improve such predictions. For example, comparing BMI matched European ancestry individuals, an obese versus healthy metabolome defined by 49 serum metabolites was associated with 2- to 5-fold increase in cardiovascular events12.

One key determinant of negative health outcomes resulting from increased adiposity is the distribution of adipose tissue, a metabolically active organ that has a substantial impact on the metabolome. When subcutaneous adipose tissue fails to sufficiently expand with dietary triglyceride consumption, visceral and ectopic fat depositions form, leading to inflammatory dysregulation and increased insulin resistance16. Understanding fat distribution hence plays a key role in understanding adiposity-related health outcomes; however, clinically implementing anthropometric measures remains cost prohibitive. Establishing metabolic profiles of adiposity may better inform clinical management of adiposity. Metabolomic epidemiology studies have found that plasma steroid sulfates and amino acids were characteristic of visceral and subcutaneous adiposity in individuals living with obesity without insulin resistance17. Future prospective studies may investigate whether these metabolites are protective against insulin resistance or markers of prodromal symptoms and provide intervention targets.

Individuals living with obesity can be characterised as metabolically unhealthy overweight and obese (MUHO) or metabolically healthy overweight and obese (MHO). MHO is typically defined as obesity with the absence of metabolic syndrome and insulin resistance15 and may make up 20–40% of adults living with obesity, with ~50% of those with MHO expected to progress to MUHO12. Future large-scale metabolomic epidemiology studies may illuminate metabolic pathways characterising MUHO, leading to more precise MUHO and MHO definitions and improved obesity treatment.

### Cardiovascular disease

3.2.

CVD is highly heterogeneous, encompassing a range of conditions linked to atherogenic, proinflammatory, and thrombotic mechanisms. Metabolic dysregulation in CVD has been observed since the early 1900s18, when cholesterol was noted as a putative driver of atherosclerosis, spurring decades of research that established cholesterol as a cause of CVD19. Therapies targeting cholesterol metabolism are first-line treatments for atherosclerosis and have greatly reduced atherosclerotic CVD mortality20, demonstrating the value of metabolic approaches in studying and treating complex diseases.

Early efforts to characterise CVD-associated metabolomic alterations reported increases in inflammatory lipids, including carnitines, phosphatidylcholines (PCs), and fatty acids, and amino acids21,22. While these initial studies were primarily based on semi-targeted approaches in small prospective cohorts or case-control studies, many associations proved robust in expanded untargeted investigations across thousands of individuals. For example, an early untargeted metabolomic study with a limited sample size found that trimethylamine N-oxide (TMAO), a downstream microbial metabolite produced from dietary choline and carnitine, was positively associated with CVD risk22. This was validated in larger studies, including an untargeted meta-analysis of venous thromboembolism23 and a meta-analysis estimating that higher circulating TMAO levels were associated with 23% increased CVD risk24. Although it remains up for debate whether TMAO is causally associated with CVD25, functional studies provide in vivo evidence that TMAO may accelerate atherosclerosis progression via suppression of reverse cholesterol transport in macrophages26. Similarly, initial positive associations between BCAAs and CVD were confirmed in multiple larger metabolomic studies23,27, with preliminary evidence for a causal relationship between BCAAs and CAD28.

Large untargeted metabolomic studies continue to identify additional metabolite-CVD associations, including nucleoside metabolites and steroid hormones29–31. Additional efforts to profile metabolite alterations associated with specific CVD outcomes will be critical for identifying disease subtypes within broad CVD event categories. For instance, a prospective study of ischemic stroke identified two long chain fatty acids (tetradecandioate and hexadecandioate) that were specifically associated with the cardioembolic stroke subtype32. Additionally, mediation analyses may help disentangle metabolite-related aetiologic mechanisms contributing to disease. For instance, plasma levels of organic acid dimethylguanidino valerate (DMGV) were positively associated with both incident CAD and T2D and inversely correlated with healthy dietary factors and exercise, the latter of which was supported by a subsequent in vivo study33,34. Subsequently, another study established that DMGV was positively associated with incident ischemic stroke, which was partially mediated by diabetes mellitus (13.0%) and hypertension (13.2%)31. Collectively, these studies suggest that associations between DMGV and CVD outcomes may capture a shared disease pathway between CVD and diabetes, influenced by lifestyle factors. Further investigation is needed to determine whether lifestyle factors mediate DMGV-associated risk of CVD and T2D.

CVD has many shared metabolic pathways (notably, organic acids), both within CVD-related and non-CVD traits, particularly adiposity (Fig. 3). However, the lack of shared pathways between non-CVD traits likely reflects the fewer number of studies conducted, and consequently, fewer significant findings for other traits. As the field rapidly grows, shared mechanisms between traits will likely become more apparent.

### Type 2 diabetes

3.3.

T2D is an increasingly prevalent metabolic condition associated with complications including retinopathy, cardiovascular disease, and kidney disease35. One of the most prominent metabolite classes associated with T2D is BCAAs, with positive associations consistently identified across large metabolomic studies36,37. T2D risk prediction models have been improved by incorporating metabolites with traditional T2D risk factors, such as sex, age, parental history of T2D, fasting glucose, BMI, high-density lipoprotein, triacylglycerols (TAGs), and blood pressure38,39. For example, adding 19 metabolites enriched for nitrogen metabolism to traditional T2D risk factors significantly improved discriminative ability of T2D risk, with38 higher genetically predicted glycine levels associated with an 11% reduction in T2D risk and lower genetically predicted phenylalanine levels associated with a 60% increase in T2D risk38. These findings suggest potentially causal relationships between the nitrogen metabolism pathway and T2D, providing mechanistic insights into disease onset.

Metabolites have also been used to investigate progression from prediabetes (i.e., the state above normal glucose tolerance but below the T2D threshold) to T2D and T2D-related complications. For instance, alanine, glutamate, and palmitic acids were higher in individuals with prediabetes than those with T2D40. Further, the addition of 13 metabolites to traditional T2D risk factors improved prediction of progression from prediabetes to T2D41. Serum levels of cyclohexylamine, 1,2-distearoyl-glycero-3-phosphocholine, piperidine, N-acetylneuraminic acid, and stearoylethanolamine have been positively associated T2D complications, including retinopathy and kidney disease42. Additional research is needed to replicate these findings and determine their clinical significance.

### Disorders of inborn errors of metabolism

3.4.

Numerous rare metabolic diseases are defined by their lack, or modification, of critical metabolic enzymes and regulatory systems. These inborn errors of metabolism (IEMs) have long been studied in the context of metabolomic data, with early metabolomic genome-wide association studies (GWAS) confirming a strong relationship between known IEM genes and their corresponding and derivative metabolites43–46. Further, extensive work has characterised the metabolic effects of familial hypercholesterolemia variants, a particular class of IEMs47,48. As metabolomic technologies have matured, researchers have discovered IEMs using metabolomic outliers, providing an opportunity to connect IEMs to pharmacological interventions49. The advent of large cohorts with metabolomic and genetic data has dramatically increased the scale of known IEM-associated metabolites. As many of these still require additional interpretation for clinical relevance, researchers have begun synthesizing findings across studies using databases50. Consequently, efforts are underway to clinically apply these discoveries51,52.

### Infectious disease: COVID-19

3.5.

Coronavirus Disease 2019 (COVID-19), caused by SARS-CoV-2, has constituted a global pandemic for over three years. The devastating public health effects of COVID-19 have necessitated extensive research to mitigate and prevent infection. Untargeted plasma metabolomics has been integral in developing hypotheses about the metabolic underpinnings of COVID-19 viral pathophysiology and identifying infection and severity biomarkers53.

Amino acids citrulline, histidine, proline, and tryptophan have been consistently negatively associated with COVID-19 severity53–59. Meanwhile metabolites from the kynurenine pathway of tryptophan metabolism have been positively associated with COVID-19 severity53–57, potentially reflecting increased inflammation in COVID-19. Creatinine has also been positively associated with COVID-19 severity53,54,57, potentially reflecting metabolic pathways related to renal dysfunction, a possible therapeutic target for severe COVID-19. Cytosine and uridine metabolites have been reported to have opposite associations with COVID-19 severity, with cytosine positively and uridine negatively associated with disease severity53,54,56. This has been suggested to reflect viral replication, as SARS-CoV-2 has low levels of cytosine, which may play a key role in SARS-CoV-2 pathology60. Thus, cytosine and uridine metabolism may pose a targetable pathway for decreasing COVID-19 severity.

Bile acids58 and PCs/sphingomyelins (SMs)59 have been positively and negatively associated with COVID-19 severity, respectively. Elevated bile acids may reflect metabolic and/or liver dysfunction that predisposes individuals to severe COVID-1953,58. However, decreased PCs and SMs may be related to pathophysiology, as both are components of cell membranes upon which ceramide rafts are required for SARS-CoV-2 to bind to ACE2 receptors61. Thus, decreasing conversion of PCs and SMs to ceramides for ACE2 presentation may be a targetable pathway for decreasing SARS-CoV-2 infection.

Untargeted metabolomic studies have provided valuable evidence for targetable pathways and potential biomarkers related to COVID-19 severity and serve as a model for future infectious disease outbreaks. Additional untargeted studies are warranted and ongoing to identify additional COVID-19 biomarkers and reduce the burden of viral pandemics on healthcare systems.

### Cancer

3.6.

Metabolic alterations are often hallmarks of cancer. The Warburg effect is a well-known alteration in glucose metabolism, in which tumours catabolize glucose via glycolysis rather than the tricarboxylic acid (TCA) cycle even in the presence of oxygen. This produces increased lactate levels62, a metabolic marker of cancer in both tumour and circulating tissue63, that serves as an intermediate fuel source in the TCA cycle64,65. Emerging work indicates that alterations in cancer cell metabolism are highly heterogeneous, even among cells cultured under the same nutrient conditions66,67. Altered lipid metabolism has also been implicated in cancer aetiology. Hypoxia in the tumour microenvironment increases lipids in the cell and promotes the transition from aerobic to anaerobic metabolism68. Metabolomic epidemiology may reflect these processes and offer insights into cancer development and therapeutics.

Untargeted circulating prospective metabolomic studies have identified promising biomarkers of cancer risk. One study found that choline was positively associated with prostate cancer (PCa)-specific mortality69, consistent with targeted metabolite and dietary studies70,71. Choline and the choline-derivative TMAO produced by intestinal bacteria have also been positively associated with risk of overall and aggressive PCa and colorectal cancer (CRC)72–74, while inverse associations have been observed between choline derivatives PCs and lyso-PCs with risk of overall and aggressive PCa, CRC, breast cancer (BCa), and cancer in general73–77. Choline is essential for lipid metabolism, with a proportion of an individual’s necessary choline produced by the liver and the remaining obtained from diet, implicating that this is a partially modifiable risk factor. However, investigations in Chinese populations reported that choline intake was inversely associated with risk of CRC, BCa, nasopharyngeal cancer, and cancer in general78–81. While the reasons for these discrepancies are uncertain, population differences in dietary choline sources or metabolism may be contributing factors. Such discrepant findings highlight the importance of performing metabolomic epidemiology studies in diverse global populations.

Untargeted circulating metabolomic studies have also reported an inverse association between bile acid tauro-beta-muricholate and PCa risk73,74. This was supported by an in vitro study reporting that bile acids selectively induce PCa cell death, sparing normal prostate cells82. Dysregulation of bile acid metabolism is particularly important in the pathogenesis of hepatocellular carcinoma (HCC). Targeted and untargeted metabolomic studies consistently found that glycine- and taurine conjugated-primary bile acids, including glycocholic acid, taurocholic acid, and glycochenodeoxycholic acid, were positively associated with HCC risk83–85, while retinol was inversely associated with HCC risk84,86.

The circulating metabolite perturbations highlighted here, observed up to 20 years before cancer diagnosis or development of lethal disease, improve our understanding of cancer aetiology while demonstrating the potential to improve cancer risk stratification and tools for early detection. These findings are supported by tumoir metabolomic studies, which offer unique and complementary insights into cancer prognosis and treatment. For instance, circulating levels of the amino acid aspartate were positively associated with risk of PCa-specific mortality87, while prostate tumour aspartate levels were positively associated with risk of biochemical recurrence and ERG translocation88.

Prostate tumour metabolomic profiles reportedly differ by ERG subtypes, with ERG-positive tumours having higher levels of acylcarnitines and metabolites involved in purine metabolism and lower glutathione levels compared to ERG-negative tumours89. These metabolites are indicators of oxidative stress, which can lead to DNA damage and plays a major role in PCa development and progression89. Pre-diagnostic circulating metabolomic profiles also differ between by ERG or PTEN molecular subtypes, with ERG-positive tumours uniquely enriched for phosphatidylethanolamines, PTEN-loss tumours enriched for amino acids, and PTEN-intact tumours enriched for unsaturated diacylglycerols90.

Compared to normal tissues, tumours from women with triple negative BCa were enriched for phosphatidylinositols, fatty acids, and ceramides, and metabolomic profiling refined the classification of transcriptomic subtypes (i.e., luminal androgen receptor, basal-like immunosuppressed, immunomodulatory, and mesenchymal-like)91. Overall, these metabolomic findings suggest distinct etiologies and presentations of tumour subtypes, which could have important prognostic and treatment implications.

### Alzheimer’s disease and related dementias

3.7.

Although Alzheimer’s disease (AD) development is not completely understood, pathological changes that cause AD begin decades prior to its diagnosis92. Metabolomics may provide insights into AD aetiology and early risk factors. Higher levels of PCs and SMs have been associated with progression from mild cognitive impairment (MCI) to AD, faster cognitive decline, and changes in ventricular volume93. Some of these metabolites, including SM C16:0 and SM (OH) C14:1, have also been positively associated with AD severity94. Metabolite panels have also been shown to discriminate between AD and normal cognition. The diagnostic capability of a metabolite panel with six metabolites (arachidonic acid, N,N-dimethylglycine, thymine, glutamine, glutamic acid, and cytidine) was equivalent to diagnoses through clinical interviews95, which could have important implications for improving diagnostics.

A defining feature of AD is the aggregation of hyperphosphorylated and misfolded tau proteins in neurons, leading to the hallmark neurofibrillary tangles96. Cerebrospinal fluid (CSF) metabolomic studies have reported 38 CSF metabolites enriched for pentose and glucuronate interconversions and glycerophospholipids explained ~70% of the variance of total and phosphorylated tau97,98. Adding seven of these metabolites to traditional AD risk factors notably improved the predictive ability of AD and MCI97.

The Alzheimer’s Disease Metabolomics Consortium was established to build a large comprehensive metabolomic database and can be queried with AD Atlas, an integrative network-based resource that enables analyses of multi-omic data and AD risk, biomarkers, and endophenotypes99. Additional consortium-scale analyses of prospective cohorts will be crucial to establish mid-life metabolomic predictors of late-life dementia.

### Inflammatory bowel disease

3.8.

Crohn’s disease (CD) and ulcerative colitis (UC) are two major forms of inflammatory bowel disease (IBD), a group of chronic, idiopathic gastrointestinal disorders characterised by inflammation of intestinal mucosa. A growing body of evidence is emerging for IBD metabolomics100. By profiling stool, plasma/serum, and urine samples, studies have 1) compared metabolomes of CD or UC to healthy controls; 2) developed metabolomics signatures distinguishing between UC and CD; and 3) identified metabolic profiles for disease activity and treatment response.

Circulating metabolomic investigations have consistently demonstrated perturbations of several amino acids. Tryptophan ​​was significantly lower in IBD patients101 and indicated as a potential biomarker for response to infliximab, a commonly prescribed anti-inflammatory monoclonal antibody medication, in CD patients101. Higher isoleucine and lower glutamine, among other amino acid differences, have been observed in patients with CD and UC compared to controls102,103. Further, 3-hydroxybutyrate, a downstream metabolite of BCAAs, was upregulated in UC patients compared to controls104. Using blood samples collected four or more years prior to IBD onset, bile acids, amino acids, and steroid hormones were associated with CD risk, while fatty acids were associated with UC risk105. However, as few studies have characterised the circulating metabolome prior to IBD development, future prospective and longitudinal studies may provide further insights into the pathogenesis of IBD and biomarkers for early detection.

### Chronic kidney disease

3.9.

Diagnosis of chronic kidney disease (CKD) is based on the estimated glomerular filtration rate (eGFR), using creatinine values or cystatin C, and on albuminuria category106, which all indicate kidney function. However, these CKD markers are affected by non-renal processes (i.e., nutritional status), suggesting the need for additional diagnosis biomarkers. Although untargeted metabolomic studies of CKD have focused on detecting stage-specific metabolites to improve diagnostic accuracy, a consistent metabolite associated with the five stages of CKD is lacking. Untargeted metabolomic studies have identified amino acids107–109, nucleotides107, carbohydrates107,108, lipids107, and cofactors and vitamins107 that were associated with declined kidney function and CKD. CKD progression has been associated with the amino acid tryptophan109,110, which was also associated with diabetic glomerulopathy in T2D patients111. Since diabetes mellitus is the leading cause for CKD112, targeting metabolites related to diabetes may also aid in CKD prevention.

Circulating TMAO was positively associated with renal dysfunction in CKD patients in an untargeted metabolomic study113 and reportedly distinguished late-stage CKD from earlier stages and controls110. A targeted metabolomic study found that higher acetylcarnitine levels were associated with 54% lower eGFR and thus increased CKD risk114. Higher acylcarnitines have been observed in pediatric patients with CKD115 and also associated with decreased kidney function114, and thus, could be promising metabolites for early CKD diagnosis.

### Pregnancy and gestational diabetes

3.10.

The maternal metabolome associates with a variety of pregnancy related complications. Due to this relationship between maternal and offspring metabolic health, pregnancy provides a unique opportunity to improve the metabolic health of the mother and the neonate. Predictive metabolic profiles for pregnancy related complications could inform preventive interventions for expectant mothers at risk of adverse pregnancy outcomes. Metabolic profiles of gestational diabetes116, preeclampsia117 and macrosomia118 have been characterised and include fatty acids, cholesterols, and triglycerides. A key challenge in studying the maternal metabolome is accounting for the metabolomic perturbations that accompany pregnancy, given the rising energy demands of the foetus116, necessitating longitudinally measured metabolomics.

### Psychological distress and mental health

3.11.

An emerging area of research in metabolomic epidemiology is the identification of metabolomic signatures associated with psychological disorders and subclinical levels of distress, including depression, anxiety, or posttraumatic stress disorder (PTSD). Prior studies have suggested associations between lipids and depression119 and highlighted key pathways implicated in the pathophysiology of mood disorders, such as glutamatergic metabolism and neurotransmission120. Literature in PTSD, anxiety, and subclinical distress is relatively sparse, with vast heterogeneity and inconsistency between studies. However, there is suggestive evidence for associations between fatty acids and general distress across disorders121. Understanding the metabolomic underpinnings of psychological distress has implications beyond mental health, as these pathways provide a potential mechanism linking chronic distress to heightened risks for cardiometabolic conditions and other ageing-related diseases122. Research in diverse population-based samples is needed to identify robust metabolomic signatures of psychological distress.

## Integrating Metabolomics with Other Omics

4.

In this section, we discuss insights gained by integrating metabolomics with other Omics data, particularly genetics, the microbiome, and the exposome, focusing on key translational insights.

### Metabolomics and Genetics

4.1.

The heritability of circulating metabolites ranges on average from ~20–50%43,46,123–126, which is greater than what is often observed for complex traits127, including whole-blood gene expression, which ranges from ~10–25% on average128–130. As such, integrating metabolomics and genomics has strong potential to illuminate metabolic mechanisms and advance precision medicine.

The human metabolome is highly polygenic, with most associated variants leading to minor changes in metabolite levels43, although some variants can lead to severe IEMs and GWAS signals sometimes cluster near IEM-related genes131. Identifying variants that influence metabolites improves our understanding of the biological processes regulating metabolites and are impacted by metabolites, contributing to disease prevention and treatment43. Further, genetics provides a notable means of determining the chemical identity or compound class of unknown metabolites, which commonly result from untargeted experiments and pose major challenges to interpreting findings. Multiple metabolites are often associated with the same gene, highlighting shared metabolic and potentially causal pathways132, which was demonstrated in an investigation where the majority of 336 unknown metabolites associated with genomic loci were able to be successfully annotated using a combination of bioinformatics tools133.

To date, over 25 metabolomic GWAS have been conducted in European ancestry populations126,134, resulting in ~ 1,750 independent metabolite-variant associations identified (Fig. 4). Fewer metabolomic GWAS have been conducted in African133,135, Hispanic136, Asian134,137–139, and Middle Eastern124 populations, typically with smaller sample sizes. Nonetheless, metabolite-variant associations have been identified across the genome in all populations. One of the most notable genomic regions is the fatty acid desaturase (FADS) locus on chromosome 11q12.2, which contains three genes, FADS1, FADS2, and FADS3 (Fig. 4). FADS1 and FADS2 encode desaturase enzymes involved in long-chain polyunsaturated fatty acid (PUFA) biosynthesis, while the role of FADS3 is still unknown. FADS variants are highly associated with PUFAs across tissues and contribute to several diseases, including CAD, cancer, and T2D140–142. FADS highlights the importance of diversity in metabolomic GWAS, as this region essentially represents one large linkage disequilibrium (LD) block in individuals of European ancestry, but many smaller blocks in individuals of African ancestry143, narrowing the range of potentially causal variants to target for therapeutic applications. LD differences in this region likely reflect historically different dietary patterns between populations that acted as selective pressures143.

Several useful resources exist to explore published GWAS associations with metabolites, including the GWAS catalog144, mGWAS-Explorer145, Phenoscanner146, and PheWeb147. The UK Biobank atlas of polygenic risk scores (PRS) summarizes associations between 129 PRS and 249 circulating metabolites148. Using this resource, robust associations were identified between an adiposity-related PRS and the majority of metabolites measured, demonstrating its potential to improve our understanding of how genetic risk of complex traits could impact metabolite levels and disease development.

### Host-gut microbiome and metabolome

4.2.

The gut microbiome plays an important role in disease aetiology, as it reflects lifestyle factors, including diet and exercise, and markers of disease risk, including BMI, insulin resistance, cholesterol, and inflammation and also influences the circulating and peripheral organ metabolome via active and passive nutrient uptake149. As metabolomics gained recognition as an important component of the microbiome, the microbiome shifted from being studied from the taxonomic perspective via genomics/metagenomics to integrating metabolomics and metagenomics150.

Although metabolomics has suggested intriguing findings related to the gut microbiome (including the above-mentioned bile acid and TMAO findings), few published metabolomic epidemiology studies have integrated the gut microbiome. Reasons for this include sample collection challenges, microbiota sample heterogeneity, and the lack of universal approaches to process, analyse, and interpret samples and data. Efforts expected to increase the feasibility of microbiome-metabolomic studies include the Global Natural Product Social Molecular Networking (GNPS) tool151 that identifies the molecular fingerprint of unknown features in the microbiome and microbial metabolome. For example, GNPS identified a large group of previously unknown bile acids formed from the bacterial conjugation of amino acids to bile acids152. Further, collecting samples across the gastrointestinal tract using collection capsules will offer a more comprehensive understanding of the microbiome153.

### Exposome

4.3.

The exposome is the complete set of an individual’s exposures across the lifespan. Metabolomics is an important tool in studying the exposome, as environmental exposures can be measured via exogenous metabolites (e.g., those influenced predominantly by diet, medications, environment, and lifestyle). Endogenous metabolites (e.g., those influenced predominantly by the genome, epigenome, transcriptome, and proteome) are also thought to be influenced by the exposome, although it is not typically apparent whether a metabolite is endogenous or exogenous in origin. In one application, an environment-wide association study of T2D risk found a protective association for β-carotenes nutrients and negative associations for the phenol lipid γ-tocopherol and the pesticide heptachlor epoxide154. Efforts are ongoing to incorporate the exposome into integrated frameworks across molecular omics155.

## Advancing Metabolomic Epidemiology Findings

5.

Causal inference is often limited in epidemiologic investigations, making metabolomic epidemiology findings challenging to interpret. In this section, we discuss key examples of moving initial metabolomic findings towards clinical translation, focusing on approaches to investigate whether identified associations are causal or correlative in nature. Sections 5.1–5.4 discuss statistical approaches applied in metabolomic epidemiology that have led to etiologic insights, focusing on the findings from these studies (statistical details provided in Boxes 2–3). Section 5.5 discusses findings from experimental investigations following up on metabolomic epidemiology results.

### Mendelian randomisation

5.1.

Mendelian randomisation (MR) is a causal inference technique that determines the presence of causal relationships between exposures and outcomes by utilizing genetic variants as a proxy for an exposure (Box 2), making MR most suitable for heritable exposures. Since an individual’s genetics are randomized at conception, genetic variants are not subjected to the confounding observed in observational studies and can thus be used as instrumental variables (IVs). MR also bypasses issues of reverse causality, which is particularly important in metabolomics as metabolites are often influenced by the outcome. Large-scale metabolomic MR studies have identified putative causal associations between circulating metabolites and AD156, autoimmune diseases (type 1 diabetes and inflammatory bowel disease)157, T2D158, and cancer (lung, ovarian, breast cancer, and glioma)159.

MR has several key limitations and assumptions (Box 2), which are particularly impacted by the high correlation between metabolites. As such, MR findings should be interpreted with caution and additional follow up is necessary to validate findings, for example with triangulation of evidence (see “5.4. Triangulation and validation”) and by evaluating assumption violations.

### Causal mediation analysis

5.2.

Causal mediation analysis is a framework for researchers to identify pathways through which metabolites mediate the relationship between exposures and outcomes. These pathways can reveal etiologic insights and intervention targets. High-dimensional methods have been implemented to detect joint mediating effects of multiple metabolites and other omic markers, which led, for instance, to the identification of growth hormone receptor, caffeine metabolism, and valine, leucine, and isoleucine degradation as mediators of the effect of bariatric surgery on glycemia, insulin secretion, and insulin sensitivity, respectively, among T2D patients160. The validity and clinical implications of causal mediation analysis should be evaluated based on the plausibility of key assumptions (Box 2).

### Network methods

5.3.

Metabolites in similar pathways are often correlated, and correlation between metabolites in separate pathways also occurs due to the biochemical principles underlying metabolism161. This underlying correlation structure may be leveraged to generate or validate functional hypotheses about metabolic processes by mining network models of metabolomic data.

Correlation networks are a commonly used network modelling approach in metabolomic epidemiology models. Weighted Gene Coexpression Network Analysis (WGCNA) extends the concept of correlation networks by identifying network modules based on weighted edges corresponding to between-metabolite correlations (Box 2). For example, WGCNA was applied to untargeted circulating metabolites to identify six metabolite modules associated with measures of lung function in children with asthma, including one enriched for lipid metabolism162. Integrating this module with WGCNA-based gene expression modules led to the identification of an association between asthma and ORMDL3 and subsequently, a nearby asthma-associated variant, generating a mechanistic hypothesis about the role of genetic variation, gene expression, and lipid metabolism in asthma.

Gaussian graphical models (GGMs, or partial correlation networks) are another type of network model that is commonly applied in metabolomic epidemiology. GGMs have been used to reconstruct metabolic classes163, and network-based clustering of GGMs was used to propose data-driven gender-specific metabolite modules164. Playdon et al. constructed a GGM on 113 diet-related prediagnostic circulating metabolites and identified three metabolite modules associated with ER-positive BCa risk, which mapped to three dietary categories: alcohol, vitamin E, and fats and oils165.

Although correlation networks and GGMs do not represent causal relationships, they can help develop causal hypotheses for subsequent investigations.

### Triangulation and validation

5.4.

Given the vast heterogeneity in metabolomic epidemiology regarding measurement techniques, populations, and study designs, it is important to triangulate evidence, meaning that evidence is combined across multiple statistical methods and/or data sources. Integrating results from different study designs, each with distinct sources of bias, enables researchers to assess the validity and generalizability of observed associations, including the strength of causal evidence166. For example, one study triangulated evidence from longitudinal observational cohorts and bi-directional MR to elucidate a causal relationship between the essential BCAA leucine and T2D risk158. Replication plays a pivotal role in establishing causal evidence and is a crucial validation step, particularly when the discovery sample is relatively small and limited to correlative inference (e.g., cross-sectional studies). When corroborating findings across studies, it is crucial to consider the degree to which differences in findings can be attributed to bias, measurement methods, and populations. To compare and synthesize results qualitatively and quantitatively, performing systematic reviews and meta-analyses may be important (Box 3).

### Linking findings to biochemical and functional implications

5.5.

Metabolomic epidemiology studies often rely on cross-sectional observational data based on a single tissue, typically plasma or serum. Follow-up experiments in animal models and cell lines are key to investigate biochemical and functional implications of metabolite-disease associations.

For example, an untargeted circulating metabolomic epidemiology investigation discovered and externally validated a positive association between phenylacetylglutamine (PAGln) and risk of major adverse cardiovascular events167. Subsequently, the investigators confirmed that PAGln production is dependent on gut microbiota in humans and mice, and a series of follow-up experiments revealed the mechanisms underlying associations between gut-microbial derived PAGln and CVD risk. Among these were ex vivo experiments demonstrating that PAGln promoted platelet functions, in vivo experiments in arterial injury mice models highlighting that PAGln and phenylacetylglycine (PAGly) can lead to increased rate of thrombus formation, and in vivo genetic engineering experiments identifying that gut microbial genes porA and fldH involved in PAGln production can regulate host platelet function and thrombosis. The authors also found that the use of a β-adrenergic receptor antagonist (β-blocker, propranolol) reduced PAGln-induced platelet hyper-responsiveness, and carvedilol, a β-blocker used for hypertension and heart failure, reversed the prothrombotic effects of PAGln in mice. Collectively, these follow-up experiments illuminate the pathophysiologic mechanisms underlying the association between PAGln and CVD risk.

In another example, a metabolomic study found that metformin treatment in T2D patients was associated with decreased serum citrulline, which was validated in murine tissues from metformin-treated diabetic mice168, highlighting mechanistic pathways altered via metformin treatment.

Experimental investigations can provide a mechanistic and complementary understanding of population-based findings and are thus an important aspect of metabolomic epidemiology. Experimental findings can also inform research questions to pursue in population-based studies, reflecting an iterative and interdisciplinary process that can offer dynamic insights into disease aetiology.

## Future Developments and Clinical Implementation Outlook

6.

Despite being a relatively new field, metabolomic epidemiology has provided critical insights into disease aetiology by linking the metabolome to various chronic diseases and identifying etiologic mechanisms across conditions. However, to fully realise the clinical utility of metabolomics and translate it into effective treatment strategies, several advances and avenues of future research should be pursued.

Currently, sample sizes of untargeted studies range from 100 to ~3,000, and while many findings have been robustly replicated (Fig. 3), many more have not been independently replicated or validated. As technologies improve and larger sample sizes become feasible, power to confidently identify and replicate findings will substantially increase. Concerted efforts to share metabolomic data (e.g., Metabolomics Workbench, dbGaP, BioLINCC, MetaboLights) will also ameliorate these issues. Recent progress in collecting and sharing large-scale metabolomics data in population-based biobank studies, such as the TOPMed, UK Biobank, THL biobank, and China Kadoorie Biobank hold great promise for improving statistical power and reproducibility.

Future research should aim to increase the diversity of participants included in metabolomic studies to ensure that the everyone can benefit from findings. The metabolome has been shown to differ between populations169,170, and population-specific metabolome associations have been observed, including for atherosclerosis171 and gestational diabetes172. While differences in metabolite-outcome associations may be influenced by exogenous factors that differ between populations (e.g., diet and environmental pollutants), they could also be attributed to genetic ancestry, which often is correlated (though not synonymous) with socially constructed population descriptors. As such, a lack of diversity limits the generalizability of metabolomic epidemiology findings and the potential for clinical translation. Increasing diversity will lead to a better understanding of the role of the metabolome in disease risk and may reduce health disparities.

Another promising avenue for future research is metabolite risk scores (MRS), which represent the cumulative impact of metabolites on a trait. For example, an MRS was found to predict weight gain beyond the predictive ability of clinical covariates or single metabolites alone, indicating a potential clinical application of MRS in risk prediction173. Metabolite scores that are characteristic of dietary intake offer a unique opportunity to improve diet assessment and our understanding of how impacts health outcomes. For example, a metabolite score characterising red meat consumption was associated with increased T2D risk174, while a score characterising adherence to a Mediterranean diet was associated with decreased CVD risk175.

Metabolomic epidemiology has strong potential to contribute to the development of diagnostic tests, which has traditionally involved a labor-intensive process of selecting a few functionally validated metabolites from a panel of hundreds. Recent studies suggest that metabolomic-based diagnostics could simplify this process, with metabolomic profiles distinguishing between different autoimmune diseases and cancers and predicting disease outcomes3,176. Further, a newborn screening study found that untargeted metabolomic profiling led to a six-fold higher diagnostic rate of IEMs compared to traditional screening, which includes a limited number of validated metabolites and metabolic conditions177. However, regulatory challenges need to be addressed. A major challenge of clinically translating metabolomic epidemiology findings is the costly and time-intensive process of developing an analytically validated assay, which is conducted in clinical laboratories and typically using targeted platforms with absolute quantification, clinically validating the assay in clinical trials, and clinically implementing the assay, which includes obtaining approvals for medical testing (e.g., from the U.S. Food and Drug Administration)178.

Beyond challenges with replication, validation, and increasing the diversity of participants included in metabolomic investigations, overcoming several other limitations may further the clinical utility of metabolomic epidemiology findings. These include determining the chemical identity of unknown metabolites resulting from untargeted experiments, improving the harmonization of metabolites across platforms and experiments, reducing costs of untargeted experiments, and comprehensively modelling disease risk in integrative multi-omic investigations.

Over the next decade, rapid technological and computational advances are expected to help address challenges in the field of metabolomic epidemiology and facilitate improved screening, diagnostics, drug development, and disease management. As the field continues to expand, particularly in less frequently studied non-cardiometabolic conditions, and more interdisciplinary collaborations form, expanding the breadth of knowledge that can be gained, a larger proportion of the global population will benefit from the promising field of metabolomic epidemiology.

## Acknowledgements

AcknowledgmentsThis work was supported by the National Cancer Institute at the National Institutes of Health (grant R00 CA246063 to BFD), the National Science Foundation (grant 2109688 to AR), and an award from the Andy Hill Cancer Research Endowment Distinguished Researchers Program (BFD). KHS was supported by the National Heart Lung and Blood Institute at the National Institutes of Health (grant 2T32HL007427). HAC was supported in part by the Intramural Research Program of the National Center for Advancing Translational Sciences, National Institutes of Health (ZICTR000410–03).

## References

1. 1.OliverSG, WinsonMK, KellDB & BaganzF Systematic functional analysis of the yeast genome. Trends Biotechnol. 16, 373–378 (1998).9744112 10.1016/s0167-7799(98)01214-1 [PMID:9744112]
2. 2.Lasky-SuJ, KellyRS, WheelockCE & BroadhurstD A strategy for advancing for population-based scientific discovery using the metabolome: the establishment of the Metabolomics Society Metabolomic Epidemiology Task Group. Metabolomics 17, 45 (2021).33937923 10.1007/s11306-021-01789-0PMC8605901 [PMID:33937923]
3. 3.BuergelT Metabolomic profiles predict individual multidisease outcomes. Nat. Med. 28, 2309–2320 (2022).36138150 10.1038/s41591-022-01980-3PMC9671812 [PMID:36138150]
4. 4.YuB The Consortium of Metabolomics Studies (COMETS): Metabolomics in 47 Prospective Cohort Studies. Am. J. Epidemiol. 188, 991–1012 (2019).31155658 10.1093/aje/kwz028PMC6545286 [PMID:31155658]
5. 5.Ahola-OlliAV Circulating metabolites and the risk of type 2 diabetes: a prospective study of 11,896 young adults from four Finnish cohorts. Diabetologia 62, 2298–2309 (2019).31584131 10.1007/s00125-019-05001-wPMC6861432 [PMID:31584131]
6. 6.TikkanenE Metabolic Biomarker Discovery for Risk of Peripheral Artery Disease Compared With Coronary Artery Disease: Lipoprotein and Metabolite Profiling of 31 657 Individuals From 5 Prospective Cohorts. J. Am. Heart Assoc. 10, e021995 (2021).34845932 10.1161/JAHA.121.021995PMC9075369 [PMID:34845932]
7. 7.JulkunenH Atlas of plasma NMR biomarkers for health and disease in 118,461 individuals from the UK Biobank. Nat. Commun. 14, 604 (2023).36737450 10.1038/s41467-023-36231-7PMC9898515 [PMID:36737450]
8. 8.KirwanJA Quality assurance and quality control reporting in untargeted metabolic phenotyping: mQACC recommendations for analytical quality management. Metabolomics 18, 70 (2022).36029375 10.1007/s11306-022-01926-3PMC9420093 [PMID:36029375]
9. 9.AhlbomA Modern Epidemiology, 4th edition. TL Lash, TJ VanderWeele, S Haneuse, KJ Rothman. Wolters Kluwer, 2021. Eur. J. Epidemiol. 36, 767–768 (2021).34216355 10.1007/s10654-021-00778-wPMC8416883 [PMID:34216355]
10. 10.ChuSH Integration of Metabolomic and Other Omics Data in Population-Based Study Designs: An Epidemiological Perspective. Metabolites 9, (2019).10.3390/metabo9060117PMC663072831216675 [PMID:31216675]
11. 11.FiehnO Metabolomics by Gas Chromatography-Mass Spectrometry: Combined Targeted and Untargeted Profiling. Curr. Protoc. Mol. Biol. 114, 30.4.1–30.4.32 (2016).10.1002/0471142727.mb3004s114PMC482912027038389 [PMID:27038389]
12. 12.CirulliET Profound Perturbation of the Metabolome in Obesity Is Associated with Health Risk. Cell Metab. 29, 488–500.e2 (2019).30318341 10.1016/j.cmet.2018.09.022PMC6370944 [PMID:30318341]
13. 13.CirulliET Profound Perturbation of the Metabolome in Obesity Is Associated with Health Risk. Cell Metab. 29, 488–500.e2 (2019).30318341 10.1016/j.cmet.2018.09.022PMC6370944 [PMID:30318341]
14. 14.WolfertAI & OkenDE Glomerular hemodynamics in established glycerol-induced acute renal failure in the rat. J. Clin. Invest. 84, 1967–1973 (1989).2592568 10.1172/JCI114386PMC304079 [PMID:2592568]
15. 15.Rangel-HuertaOD, Pastor-VillaescusaB & GilA Are we close to defining a metabolomic signature of human obesity? A systematic review of metabolomics studies. Metabolomics 15, 93 (2019).31197497 10.1007/s11306-019-1553-yPMC6565659 [PMID:31197497]
16. 16.NeelandIJ, PoirierP & DesprésJ-P Cardiovascular and Metabolic Heterogeneity of Obesity: Clinical Challenges and Implications for Management. Circulation 137, 1391–1406 (2018).29581366 10.1161/CIRCULATIONAHA.117.029617PMC5875734 [PMID:29581366]
17. 17.KoayYC Metabolomics and Lipidomics Signatures of Insulin Resistance and Abdominal Fat Depots in People Living with Obesity. Metabolites 12, (2022).10.3390/metabo12121272PMC978170336557310 [PMID:36557310]
18. 18.WindausA Über den Gehalt normaler und atheromatöser Aorten an Cholesterin und Cholesterinestern.: 67, 174–176 (1910).
19. 19.GoldsteinJL & BrownMS A century of cholesterol and coronaries: from plaques to genes to statins. Cell 161, 161–172 (2015).25815993 10.1016/j.cell.2015.01.036PMC4525717 [PMID:25815993]
20. 20.Centers for Disease Control and Prevention (CDC). Decline in deaths from heart disease and stroke--United States, 1900–1999. MMWR Morb. Mortal. Wkly. Rep. 48, 649–656 (1999).10488780 [PMID:10488780]
21. 21.ShahSH Baseline metabolomic profiles predict cardiovascular events in patients at risk for coronary artery disease. Am. Heart J. 163, 844–850.e1 (2012).22607863 10.1016/j.ahj.2012.02.005 [PMID:22607863]
22. 22.WangZ Gut flora metabolism of phosphatidylcholine promotes cardiovascular disease. Nature 472, 57–63 (2011).21475195 10.1038/nature09922PMC3086762 [PMID:21475195]
23. 23.JiangX Metabolites Associated With the Risk of Incident Venous Thromboembolism: A Metabolomic Analysis. J. Am. Heart Assoc. 7, e010317 (2018).30571496 10.1161/JAHA.118.010317PMC6404443 [PMID:30571496]
24. 24.QiJ Circulating trimethylamine N-oxide and the risk of cardiovascular diseases: a systematic review and meta-analysis of 11 prospective cohort studies. J. Cell. Mol. Med. 22, 185–194 (2018).28782886 10.1111/jcmm.13307PMC5742728 [PMID:28782886]
25. 25.JiaJ Assessment of Causal Direction Between Gut Microbiota-Dependent Metabolites and Cardiometabolic Health: A Bidirectional Mendelian Randomization Analysis. Diabetes 68, 1747–1755 (2019).31167879 10.2337/db19-0153 [PMID:31167879]
26. 26.KoethRA Intestinal microbiota metabolism of L-carnitine, a nutrient in red meat, promotes atherosclerosis. Nat. Med. 19, 576–585 (2013).23563705 10.1038/nm.3145PMC3650111 [PMID:23563705]
27. 27.HolmesMV Lipids, Lipoproteins, and Metabolites and Risk of Myocardial Infarction and Stroke. J. Am. Coll. Cardiol. 71, 620–632 (2018).29420958 10.1016/j.jacc.2017.12.006PMC5811927 [PMID:29420958]
28. 28.JiangW Mendelian Randomization Analysis Provides Insights into the Pathogenesis of Serum Levels of Branched-Chain Amino Acids in Cardiovascular Disease. Metabolites 13, (2023).10.3390/metabo13030403PMC1005980936984843 [PMID:36984843]
29. 29.TrainorPJ Systems characterization of differential plasma metabolome perturbations following thrombotic and non-thrombotic myocardial infarction. J. Proteomics 160, 38–46 (2017).28341595 10.1016/j.jprot.2017.03.014PMC5496773 [PMID:28341595]
30. 30.LindL, FallT, ÄrnlövJ, ElmståhlS & SundströmJ Large-Scale Metabolomics and the Incidence of Cardiovascular Disease. J. Am. Heart Assoc. 12, e026885 (2023).36645074 10.1161/JAHA.122.026885PMC9939066 [PMID:36645074]
31. 31.AmentZ Nucleosides Associated With Incident Ischemic Stroke in the REGARDS and JHS Cohorts. Neurology 98, e2097–e2107 (2022).35264422 10.1212/WNL.0000000000200262PMC9169945 [PMID:35264422]
32. 32.SunD A prospective study of serum metabolites and risk of ischemic stroke. Neurology 92, e1890–e1898 (2019).30867269 10.1212/WNL.0000000000007279PMC6550501 [PMID:30867269]
33. 33.OttossonF Dimethylguanidino Valerate: A Lifestyle-Related Metabolite Associated With Future Coronary Artery Disease and Cardiovascular Mortality. J. Am. Heart Assoc. 8, e012846 (2019).31533499 10.1161/JAHA.119.012846PMC6806048 [PMID:31533499]
34. 34.WaliJA Nutritional and metabolic regulation of the metabolite dimethylguanidino valeric acid: an early marker of cardiometabolic disease. Am. J. Physiol. Endocrinol. Metab. 319, E509–E518 (2020).32663097 10.1152/ajpendo.00207.2020PMC7509244 [PMID:32663097]
35. 35.ZhengY, LeySH & HuFB Global aetiology and epidemiology of type 2 diabetes mellitus and its complications. Nat. Rev. Endocrinol. 14, 88–98 (2018).29219149 10.1038/nrendo.2017.151 [PMID:29219149]
36. 36.MorzeJ Metabolomics and Type 2 Diabetes Risk: An Updated Systematic Review and Meta-analysis of Prospective Cohort Studies. Diabetes Care 45, 1013–1024 (2022).35349649 10.2337/dc21-1705PMC9016744 [PMID:35349649]
37. 37.WangTJ Metabolite profiles and the risk of developing diabetes. Nat. Med. 17, 448–453 (2011).21423183 10.1038/nm.2307PMC3126616 [PMID:21423183]
38. 38.MerinoJ Metabolomics insights into early type 2 diabetes pathogenesis and detection in individuals with normal fasting glucose. Diabetologia 61, 1315–1324 (2018).29626220 10.1007/s00125-018-4599-xPMC5940516 [PMID:29626220]
39. 39.ShiL Plasma metabolites associated with type 2 diabetes in a Swedish population: a case-control study nested in a prospective cohort. Diabetologia 61, 849–861 (2018).29349498 10.1007/s00125-017-4521-yPMC6448991 [PMID:29349498]
40. 40.LongJ Metabolite biomarkers of type 2 diabetes mellitus and pre-diabetes: a systematic review and meta-analysis. BMC Endocr. Disord. 20, 174 (2020).33228610 10.1186/s12902-020-00653-xPMC7685632 [PMID:33228610]
41. 41.RenM Potential Novel Serum Metabolic Markers Associated With Progression of Prediabetes to Overt Diabetes in a Chinese Population. Front. Endocrinol. 12, 745214 (2021).10.3389/fendo.2021.745214PMC876664035069433 [PMID:35069433]
42. 42.TomofujiY Identification of serum metabolome signatures associated with retinal and renal complications of type 2 diabetes. Commun. Med. 3, 5 (2023).36624208 10.1038/s43856-022-00231-3PMC9829655 [PMID:36624208]
43. 43.ShinS-Y An atlas of genetic influences on human blood metabolites. Nat. Genet. 46, 543–550 (2014).24816252 10.1038/ng.2982PMC4064254 [PMID:24816252]
44. 44.SuhreK Human metabolic individuality in biomedical and pharmaceutical research. Nature 477, 54–60 (2011).21886157 10.1038/nature10354PMC3832838 [PMID:21886157]
45. 45.MoothaVK & HirschhornJN Inborn variation in metabolism. Nature genetics vol. 42 97–98 (2010).20104246 10.1038/ng0210-97 [PMID:20104246]
46. 46.LongT Whole-genome sequencing identifies common-to-rare variants associated with human blood metabolites. Nat. Genet. 49, 568–578 (2017).28263315 10.1038/ng.3809 [PMID:28263315]
47. 47.SlizE Metabolomic consequences of genetic inhibition of PCSK9 compared with statin treatment. Circulation 138, 2499–2512 (2018).30524137 10.1161/CIRCULATIONAHA.118.034942PMC6254781 [PMID:30524137]
48. 48.DuZ Low-density lipoprotein receptor genotypes modify the sera metabolome of patients with homozygous familial hypercholesterolemia. iScience 25, 105334 (2022).36325061 10.1016/j.isci.2022.105334PMC9618791 [PMID:36325061]
49. 49.McGregorTL Characterising a healthy adult with a rare HAO1 knockout to support a therapeutic strategy for primary hyperoxaluria. Elife 9, (2020).10.7554/eLife.54363PMC710885932207686 [PMID:32207686]
50. 50.MandalR, ChamotD & WishartDS The role of the Human Metabolome Database in inborn errors of metabolism. J. Inherit. Metab. Dis. 41, 329–336 (2018).29663269 10.1007/s10545-018-0137-8 [PMID:29663269]
51. 51.SteinbuschLKM Targeted urine metabolomics with a graphical reporting tool for rapid diagnosis of inborn errors of metabolism. J. Inherit. Metab. Dis. 44, 1113–1123 (2021).33843072 10.1002/jimd.12385PMC8518793 [PMID:33843072]
52. 52.HampeMH, PanaskarSN, YadavAA & IngalePW Gas chromatography/mass spectrometry-based urine metabolome study in children for inborn errors of metabolism: An Indian experience. Clin. Biochem. 50, 121–126 (2017).27784639 10.1016/j.clinbiochem.2016.10.015 [PMID:27784639]
53. 53.RahnavardA, MannB, GiriA, ChatterjeeR & CrandallKA Metabolite, protein, and tissue dysfunction associated with COVID-19 disease severity. Sci. Rep. 12, 12204 (2022).35842456 10.1038/s41598-022-16396-9PMC9288092 [PMID:35842456]
54. 54.RobertsI Untargeted metabolomics of COVID-19 patient serum reveals potential prognostic markers of both severity and outcome. Metabolomics 18, 6 (2021).34928464 10.1007/s11306-021-01859-3PMC8686810 [PMID:34928464]
55. 55.DanlosF-X Metabolomic analyses of COVID-19 patients unravel stage-dependent and prognostic biomarkers. Cell Death Dis. 12, 258 (2021).33707411 10.1038/s41419-021-03540-yPMC7948172 [PMID:33707411]
56. 56.BlascoH The specific metabolome profiling of patients infected by SARS-COV-2 supports the key role of tryptophan-nicotinamide pathway and cytosine metabolism. Sci. Rep. 10, 16824 (2020).33033346 10.1038/s41598-020-73966-5PMC7544910 [PMID:33033346]
57. 57.ThomasT COVID-19 infection alters kynurenine and fatty acid metabolism, correlating with IL-6 levels and renal status. JCI Insight 5, (2020).10.1172/jci.insight.140327PMC745390732559180 [PMID:32559180]
58. 58.ShenB Proteomic and Metabolomic Characterization of COVID-19 Patient Sera. Cell 182, 59–72.e15 (2020).32492406 10.1016/j.cell.2020.05.032PMC7254001 [PMID:32492406]
59. 59.BarberisE Large-Scale Plasma Analysis Revealed New Mechanisms and Molecules Associated with the Host Response to SARS-CoV-2. Int. J. Mol. Sci. 21, (2020).10.3390/ijms21228623PMC769638633207699 [PMID:33207699]
60. 60.DanchinA & MarlièreP Cytosine drives evolution of SARS-CoV-2: Cytosine drives evolution of SARS-CoV-2. Environ. Microbiol. 22, 1977–1985 (2020).32291894 10.1111/1462-2920.15025PMC7262064 [PMID:32291894]
61. 61.KornhuberJ, HoertelN & GulbinsE The acid sphingomyelinase/ceramide system in COVID-19. Mol. Psychiatry 27, 307–314 (2022).34608263 10.1038/s41380-021-01309-5PMC8488928 [PMID:34608263]
62. 62.WarburgO On the origin of cancer cells. Science 123, 309–314 (1956).13298683 10.1126/science.123.3191.309 [PMID:13298683]
63. 63.CoriCF & CoriGT The carbohydrate metabolism of tumors. J. Biol. Chem. 64, 11–22 (1925).
64. 64.HuiS Glucose feeds the TCA cycle via circulating lactate. Nature 551, 115–118 (2017).29045397 10.1038/nature24057PMC5898814 [PMID:29045397]
65. 65.FaubertB Lactate Metabolism in Human Lung Tumors. Cell 171, 358–371.e9 (2017).28985563 10.1016/j.cell.2017.09.019PMC5684706 [PMID:28985563]
66. 66.DeBerardinisRJ & ChandelNS We need to talk about the Warburg effect. Nat Metab 2, 127–129 (2020).32694689 10.1038/s42255-020-0172-2 [PMID:32694689]
67. 67.ChenP-H Metabolic Diversity in Human Non-Small Cell Lung Cancer Cells. Mol. Cell 76, 838–851.e5 (2019).31564558 10.1016/j.molcel.2019.08.028PMC6898782 [PMID:31564558]
68. 68.SantosCR & SchulzeA Lipid metabolism in cancer. FEBS J. 279, 2610–2623 (2012).22621751 10.1111/j.1742-4658.2012.08644.x [PMID:22621751]
69. 69.HuangJ, ZhaoB, WeinsteinSJ, AlbanesD & MondulAM Metabolomic profile of prostate cancer-specific survival among 1812 Finnish men. BMC Med. 20, 362 (2022).36280842 10.1186/s12916-022-02561-4PMC9594924 [PMID:36280842]
70. 70.ReichardCA Gut Microbiome-Dependent Metabolic Pathways and Risk of Lethal Prostate Cancer: Prospective Analysis of a PLCO Cancer Screening Trial Cohort. Cancer Epidemiol. Biomarkers Prev. 31, 192–199 (2022).34711629 10.1158/1055-9965.EPI-21-0766PMC8755576 [PMID:34711629]
71. 71.RichmanEL Choline intake and risk of lethal prostate cancer: incidence and survival. Am. J. Clin. Nutr. 96, 855–863 (2012).22952174 10.3945/ajcn.112.039784PMC3441112 [PMID:22952174]
72. 72.BaeS Plasma choline metabolites and colorectal cancer risk in the Women’s Health Initiative Observational Study. Cancer Res. 74, 7442–7452 (2014).25336191 10.1158/0008-5472.CAN-14-1835PMC4268282 [PMID:25336191]
73. 73.HuangJ Serum metabolomic profiling of prostate cancer risk in the prostate, lung, colorectal, and ovarian cancer screening trial. Br. J. Cancer 115, 1087–1095 (2016).27673363 10.1038/bjc.2016.305PMC5117796 [PMID:27673363]
74. 74.MondulAM Metabolomic analysis of prostate cancer risk in a prospective cohort: The alpha-tocolpherol, beta-carotene cancer prevention (ATBC) study. Int. J. Cancer 137, 2124–2132 (2015).25904191 10.1002/ijc.29576PMC4537663 [PMID:25904191]
75. 75.SchmidtJA Patterns in metabolite profile are associated with risk of more aggressive prostate cancer: A prospective study of 3,057 matched case-control sets from EPIC. Int. J. Cancer 146, 720–730 (2020).30951192 10.1002/ijc.32314PMC6916595 [PMID:30951192]
76. 76.ShuX Prospective study of blood metabolites associated with colorectal cancer risk. Int. J. Cancer 143, 527–534 (2018).29479691 10.1002/ijc.31341PMC6019169 [PMID:29479691]
77. 77.KühnT Higher plasma levels of lysophosphatidylcholine 18:0 are related to a lower risk of common cancers in a prospective metabolomics study. BMC Med. 14, 13 (2016).26817443 10.1186/s12916-016-0552-3PMC4730724 [PMID:26817443]
78. 78.LuM-S Choline and betaine intake and colorectal cancer risk in Chinese population: a case-control study. PLoS One 10, e0118661 (2015).25785727 10.1371/journal.pone.0118661PMC4364675 [PMID:25785727]
79. 79.ZhangC-X Choline and betaine intake is inversely associated with breast cancer risk: a two-stage case-control study in China. Cancer Sci. 104, 250–258 (2013).23140534 10.1111/cas.12064PMC7657205 [PMID:23140534]
80. 80.ZengF-F Choline and betaine intakes are associated with reduced risk of nasopharyngeal carcinoma in adults: a case-control study. Br. J. Cancer 110, 808–816 (2014).24169354 10.1038/bjc.2013.686PMC3915107 [PMID:24169354]
81. 81.SunS Choline and betaine consumption lowers cancer risk: a meta-analysis of epidemiologic studies. Sci. Rep. 6, 35547 (2016).27759060 10.1038/srep35547PMC5069558 [PMID:27759060]
82. 82.GoldbergAA, TitorenkoVI, BeachA & SandersonJT Bile acids induce apoptosis selectively in androgen-dependent and -independent prostate cancer cells. PeerJ 1, e122 (2013).23940835 10.7717/peerj.122PMC3740138 [PMID:23940835]
83. 83.StepienM Metabolic perturbations prior to hepatocellular carcinoma diagnosis: Findings from a prospective observational cohort study. Int. J. Cancer 148, 609–625 (2021).32734650 10.1002/ijc.33236 [PMID:32734650]
84. 84.StepienM Prediagnostic alterations in circulating bile acid profiles in the development of hepatocellular carcinoma. Int. J. Cancer 150, 1255–1268 (2022).34843121 10.1002/ijc.33885 [PMID:34843121]
85. 85.ThomasCE Association between Pre-Diagnostic Serum Bile Acids and Hepatocellular Carcinoma: The Singapore Chinese Health Study. Cancers 13, (2021).10.3390/cancers13112648PMC819865534071196 [PMID:34071196]
86. 86.YuanJ-M, GaoY-T, OngC-N, RossRK & YuMC Prediagnostic level of serum retinol in relation to reduced risk of hepatocellular carcinoma. J. Natl. Cancer Inst. 98, 482–490 (2006).16595784 10.1093/jnci/djj104 [PMID:16595784]
87. 87.WangY, JacobsEJ, CarterBD, GapsturSM & StevensVL Plasma Metabolomic Profiles and Risk of Advanced and Fatal Prostate Cancer. Eur Urol Oncol 4, 56–65 (2021).31378665 10.1016/j.euo.2019.07.005 [PMID:31378665]
88. 88.MellerS Integration of tissue metabolomics, transcriptomics and immunohistochemistry reveals ERG- and gleason score-specific metabolomic alterations in prostate cancer. Oncotarget 7, 1421–1438 (2016).26623558 10.18632/oncotarget.6370PMC4811470 [PMID:26623558]
89. 89.DudkaI Comprehensive metabolomics analysis of prostate cancer tissue in relation to tumor aggressiveness and TMPRSS2-ERG fusion status. BMC Cancer 20, 437 (2020).32423389 10.1186/s12885-020-06908-zPMC7236196 [PMID:32423389]
90. 90.FengX Association of Prediagnostic Blood Metabolomics with Prostate Cancer Defined by ERG or PTEN Molecular Subtypes. Cancer Epidemiol. Biomarkers Prev. 30, 1000–1008 (2021).33627383 10.1158/1055-9965.EPI-20-1363PMC8102317 [PMID:33627383]
91. 91.XiaoY Comprehensive metabolomics expands precision medicine for triple-negative breast cancer. Cell Res. 32, 477–490 (2022).35105939 10.1038/s41422-022-00614-0PMC9061756 [PMID:35105939]
92. 92.JackCRJr Serial PIB and MRI in normal, mild cognitive impairment and Alzheimer’s disease: implications for sequence of pathological events in Alzheimer’s disease. Brain 132, 1355–1365 (2009).19339253 10.1093/brain/awp062PMC2677798 [PMID:19339253]
93. 93.ToledoJB Metabolic network failures in Alzheimer’s disease: A biochemical road map. Alzheimers. Dement. 13, 965–984 (2017).28341160 10.1016/j.jalz.2017.01.020PMC5866045 [PMID:28341160]
94. 94.VarmaVR Brain and blood metabolite signatures of pathology and progression in Alzheimer disease: A targeted metabolomics study. PLoS Med. 15, e1002482 (2018).29370177 10.1371/journal.pmed.1002482PMC5784884 [PMID:29370177]
95. 95.WangG Plasma metabolite profiles of Alzheimer’s disease and mild cognitive impairment. J. Proteome Res. 13, 2649–2658 (2014).24694177 10.1021/pr5000895 [PMID:24694177]
96. 96.Serrano-PozoA, FroschMP, MasliahE & HymanBT Neuropathological alterations in Alzheimer disease. Cold Spring Harb. Perspect. Med. 1, a006189 (2011).22229116 10.1101/cshperspect.a006189PMC3234452 [PMID:22229116]
97. 97.DongR CSF metabolites associate with CSF tau and improve prediction of Alzheimer’s disease status. Alzheimers. Dement. 13, e12167 (2021).10.1002/dad2.12167PMC808798233969169 [PMID:33969169]
98. 98.DarstBF, LuQ, JohnsonSC & EngelmanCD Integrated analysis of genomics, longitudinal metabolomics, and Alzheimer’s risk factors among 1,111 cohort participants. Genet. Epidemiol. 43, 657–674 (2019).31104335 10.1002/gepi.22211PMC6687539 [PMID:31104335]
99. 99.WörheideMA An integrated molecular Atlas of Alzheimer’s disease. bioRxiv (2021) doi:10.1101/2021.09.14.21263565.
100. 100.Lloyd-PriceJ Multi-omics of the gut microbial ecosystem in inflammatory bowel diseases. Nature 569, 655–662 (2019).31142855 10.1038/s41586-019-1237-9PMC6650278 [PMID:31142855]
101. 101.NikolausS Increased Tryptophan Metabolism Is Associated With Activity of Inflammatory Bowel Diseases. Gastroenterology 153, 1504–1516.e2 (2017).28827067 10.1053/j.gastro.2017.08.028 [PMID:28827067]
102. 102.ScovilleEA Alterations in Lipid, Amino Acid, and Energy Metabolism Distinguish Crohn’s Disease from Ulcerative Colitis and Control Subjects by Serum Metabolomic Profiling. Metabolomics 14, 17 (2018).29681789 10.1007/s11306-017-1311-yPMC5907923 [PMID:29681789]
103. 103.DawiskibaT Serum and urine metabolomic fingerprinting in diagnostics of inflammatory bowel diseases. World J. Gastroenterol. 20, 163–174 (2014).24415869 10.3748/wjg.v20.i1.163PMC3886005 [PMID:24415869]
104. 104.GallagherK, CatessonA, GriffinJL, HolmesE & WilliamsHRT Metabolomic Analysis in Inflammatory Bowel Disease: A Systematic Review. J. Crohns. Colitis 15, 813–826 (2021).33175138 10.1093/ecco-jcc/jjaa227 [PMID:33175138]
105. 105.HuaX Inflammatory Bowel Disease Is Associated With Prediagnostic Perturbances in Metabolic Pathways. Gastroenterology 164, 147–150.e2 (2023).36122699 10.1053/j.gastro.2022.09.007PMC9771951 [PMID:36122699]
106. 106.CoreshJ Calibration and random variation of the serum creatinine assay as critical elements of using equations to estimate glomerular filtration rate. Am. J. Kidney Dis. 39, 920–929 (2002).11979335 10.1053/ajkd.2002.32765 [PMID:11979335]
107. 107.PengH Identification of Metabolite Markers Associated with Kidney Function. J Immunol Res 2022, 6190333 (2022).35928631 10.1155/2022/6190333PMC9345691 [PMID:35928631]
108. 108.YuB Serum metabolomic profiling and incident CKD among African Americans. Clin. J. Am. Soc. Nephrol. 9, 1410–1417 (2014).25011442 10.2215/CJN.11971113PMC4123405 [PMID:25011442]
109. 109.ChenD-Q Identification of serum metabolites associating with chronic kidney disease progression and anti-fibrotic effect of 5-methoxytryptophan. Nat. Commun. 10, 1476 (2019).30931940 10.1038/s41467-019-09329-0PMC6443780 [PMID:30931940]
110. 110.FonsecaRID Untargeted plasma 1H NMR-based metabolomic profiling in different stages of chronic kidney disease. J. Pharm. Biomed. Anal. 229, 115339 (2023).36963247 10.1016/j.jpba.2023.115339 [PMID:36963247]
111. 111.ZhangF Untargeted serum metabolomics and tryptophan metabolism profiling in type 2 diabetic patients with diabetic glomerulopathy. Ren. Fail. 43, 980–992 (2021).34157945 10.1080/0886022X.2021.1937219PMC8231361 [PMID:34157945]
112. 112.McClellanWM & FlandersWD Risk factors for progressive chronic kidney disease. J. Am. Soc. Nephrol. 14, S65–70 (2003).12819305 10.1097/01.asn.0000070147.10399.9e [PMID:12819305]
113. 113.HuD-Y Metabolomics analysis of human plasma reveals decreased production of trimethylamine N-oxide retards the progression of chronic kidney disease. Br. J. Pharmacol. 179, 4344–4359 (2022).35428974 10.1111/bph.15856 [PMID:35428974]
114. 114.GoekO-N Serum metabolite concentrations and decreased GFR in the general population. Am. J. Kidney Dis. 60, 197–206 (2012).22464876 10.1053/j.ajkd.2012.01.014 [PMID:22464876]
115. 115.BenitoS Untargeted metabolomics for plasma biomarker discovery for early chronic kidney disease diagnosis in pediatric patients using LC-QTOF-MS. Analyst 143, 4448–4458 (2018).30151522 10.1039/c8an00864g [PMID:30151522]
116. 116.FullerH, IlesM, MooreJB & ZulyniakMA Unique Metabolic Profiles Associate with Gestational Diabetes and Ethnicity in Low- and High-Risk Women Living in the UK. J. Nutr. 152, 2186–2197 (2022).35883228 10.1093/jn/nxac163PMC9535440 [PMID:35883228]
117. 117.Nobakht M GhBF Application of metabolomics to preeclampsia diagnosis. Syst. Biol. Reprod. Med. 64, 324–339 (2018).29965778 10.1080/19396368.2018.1482968 [PMID:29965778]
118. 118.CiborowskiM Potential first trimester metabolomic biomarkers of abnormal birth weight in healthy pregnancies. Prenat. Diagn. 34, 870–877 (2014).24733416 10.1002/pd.4386 [PMID:24733416]
119. 119.BotM Metabolomics Profile in Depression: A Pooled Analysis of 230 Metabolic Markers in 5283 Cases With Depression and 10,145 Controls. Biol. Psychiatry 87, 409–418 (2020).31635762 10.1016/j.biopsych.2019.08.016PMC11921392 [PMID:31635762]
120. 120.MacDonaldK Biomarkers for major depressive and bipolar disorders using metabolomics: A systematic review. Am. J. Med. Genet. B Neuropsychiatr. Genet. 180, 122–137 (2019).30411484 10.1002/ajmg.b.32680 [PMID:30411484]
121. 121.ZhuY Psychological distress and metabolomic markers: A systematic review of posttraumatic stress disorder, anxiety, and subclinical distress. Neurosci. Biobehav. Rev. 143, 104954 (2022).36368524 10.1016/j.neubiorev.2022.104954PMC9729460 [PMID:36368524]
122. 122.WinningA, GlymourMM, McCormickMC, GilsanzP & KubzanskyLD Psychological Distress Across the Life Course and Cardiometabolic Risk: Findings From the 1958 British Birth Cohort Study. J. Am. Coll. Cardiol. 66, 1577–1586 (2015).26429083 10.1016/j.jacc.2015.08.021 [PMID:26429083]
123. 123.HagenbeekFA Heritability estimates for 361 blood metabolites across 40 genome-wide association studies. Nat. Commun. 11, 39 (2020).31911595 10.1038/s41467-019-13770-6PMC6946682 [PMID:31911595]
124. 124.YousriNA Whole-exome sequencing identifies common and rare variant metabolic QTLs in a Middle Eastern population. Nat. Commun. 9, 333 (2018).29362361 10.1038/s41467-017-01972-9PMC5780481 [PMID:29362361]
125. 125.DarstBF, KoscikRL, HoganKJ, JohnsonSC & EngelmanCD Longitudinal plasma metabolomics of aging and sex. Aging 11, 1262–1282 (2019).30799310 10.18632/aging.101837PMC6402508 [PMID:30799310]
126. 126.ChenY Genomic atlas of the plasma metabolome prioritizes metabolites implicated in human diseases. Nat. Genet. 55, 44–53 (2023).36635386 10.1038/s41588-022-01270-1PMC7614162 [PMID:36635386]
127. 127.SpeedD & BaldingDJ SumHer better estimates the SNP heritability of complex traits from summary statistics. Nat. Genet. 51, 277–284 (2019).30510236 10.1038/s41588-018-0279-5PMC6485398 [PMID:30510236]
128. 128.WrightFA Heritability and genomics of gene expression in peripheral blood. Nat. Genet. 46, 430–437 (2014).24728292 10.1038/ng.2951PMC4012342 [PMID:24728292]
129. 129.Lloyd-JonesLR The Genetic Architecture of Gene Expression in Peripheral Blood. Am. J. Hum. Genet. 100, 228–237 (2017).28065468 10.1016/j.ajhg.2016.12.008PMC5294670 [PMID:28065468]
130. 130.OuwensKG A characterization of cis- and trans-heritability of RNA-Seq-based gene expression. Eur. J. Hum. Genet. 28, 253–263 (2020).31558840 10.1038/s41431-019-0511-5PMC6974598 [PMID:31558840]
131. 131.SmithCJ Integrative analysis of metabolite GWAS illuminates the molecular basis of pleiotropy and genetic correlation. Elife 11, (2022).10.7554/eLife.79348PMC953684036073519 [PMID:36073519]
132. 132.YinX Genome-wide association studies of metabolites in Finnish men identify disease-relevant loci. Nat. Commun. 13, 1644 (2022).35347128 10.1038/s41467-022-29143-5PMC8960770 [PMID:35347128]
133. 133.TahirUA Whole Genome Association Study of the Plasma Metabolome Identifies Metabolites Linked to Cardiometabolic Disease in Black Individuals. Nat. Commun. 13, 4923 (2022).35995766 10.1038/s41467-022-32275-3PMC9395431 [PMID:35995766]
134. 134.HarshfieldEL Genome-wide analysis of blood lipid metabolites in over 5000 South Asians reveals biological insights at cardiometabolic disease loci. BMC Med. 19, 232 (2021).34503513 10.1186/s12916-021-02087-1PMC8431908 [PMID:34503513]
135. 135.YuB Genetic determinants influencing human serum metabolome among African Americans. PLoS Genet. 10, e1004212 (2014).24625756 10.1371/journal.pgen.1004212PMC3952826 [PMID:24625756]
136. 136.FeofanovaEV A Genome-wide Association Study Discovers 46 Loci of the Human Metabolome in the Hispanic Community Health Study/Study of Latinos. Am. J. Hum. Genet. 107, 849–863 (2020).33031748 10.1016/j.ajhg.2020.09.003PMC7675000 [PMID:33031748]
137. 137.WangZ Genome-wide association study of metabolites in patients with coronary artery disease identified novel metabolite quantitative trait loci. Clin. Transl. Med. 11, e290 (2021).33634981 10.1002/ctm2.290PMC7839954 [PMID:33634981]
138. 138.JungT Integrative Pathway Analysis of SNP and Metabolite Data Using a Hierarchical Structural Component Model. Front. Genet. 13, 814412 (2022).35401680 10.3389/fgene.2022.814412PMC8987531 [PMID:35401680]
139. 139.FullerH, IlesMM, MooreJB & ZulyniakMA Metabolic drivers of dysglycemia in pregnancy: ethnic-specific GWAS of 146 metabolites and 1-sample Mendelian randomization analyses in a UK multi-ethnic birth cohort. Front. Endocrinol. 14, 1157416 (2023).10.3389/fendo.2023.1157416PMC1022564637255970 [PMID:37255970]
140. 140.VriensK Evidence for an alternative fatty acid desaturation pathway increasing cancer plasticity. Nature 566, 403–406 (2019).30728499 10.1038/s41586-019-0904-1PMC6390935 [PMID:30728499]
141. 141.YuanS Plasma Phospholipid Fatty Acids, FADS1 and Risk of 15 Cardiovascular Diseases: A Mendelian Randomisation Study. Nutrients 11, (2019).10.3390/nu11123001PMC695052731817859 [PMID:31817859]
142. 142.BraynerB, KaurG, KeskeMA & LivingstoneKM FADS Polymorphism, Omega-3 Fatty Acids and Diabetes Risk: A Systematic Review. Nutrients 10, (2018).10.3390/nu10060758PMC602480829899246 [PMID:29899246]
143. 143.MathiasRA, PaniV & ChiltonFH Genetic Variants in the FADS Gene: Implications for Dietary Recommendations for Fatty Acid Intake. Curr. Nutr. Rep. 3, 139–148 (2014).24977108 10.1007/s13668-014-0079-1PMC4070521 [PMID:24977108]
144. 144.SollisE The NHGRI-EBI GWAS Catalog: knowledgebase and deposition resource. Nucleic Acids Res. 51, D977–D985 (2023).36350656 10.1093/nar/gkac1010PMC9825413 [PMID:36350656]
145. 145.ChangL, ZhouG, OuH & XiaJ mGWAS-Explorer: Linking SNPs, Genes, Metabolites, and Diseases for Functional Insights. Metabolites 12, (2022).10.3390/metabo12060526PMC923086735736459 [PMID:35736459]
146. 146.StaleyJR PhenoScanner: a database of human genotype-phenotype associations. Bioinformatics 32, 3207–3209 (2016).27318201 10.1093/bioinformatics/btw373PMC5048068 [PMID:27318201]
147. 147.Gagliano TaliunSA Exploring and visualizing large-scale genetic associations by using PheWeb. Nat. Genet. 52, 550–552 (2020).32504056 10.1038/s41588-020-0622-5PMC7754083 [PMID:32504056]
148. 148.FangS, HolmesMV, GauntTR, Davey SmithG & RichardsonTG Constructing an atlas of associations between polygenic scores from across the human phenome and circulating metabolic biomarkers. Elife 11, (2022).10.7554/eLife.73951PMC955320936219204 [PMID:36219204]
149. 149.ManorO Health and disease markers correlate with gut microbiome composition across thousands of people. Nat. Commun. 11, 5206 (2020).33060586 10.1038/s41467-020-18871-1PMC7562722 [PMID:33060586]
150. 150.ZiererJ The fecal metabolome as a functional readout of the gut microbiome. Nat. Genet. 50, 790–795 (2018).29808030 10.1038/s41588-018-0135-7PMC6104805 [PMID:29808030]
151. 151.WangM Sharing and community curation of mass spectrometry data with Global Natural Products Social Molecular Networking. Nat. Biotechnol. 34, 828–837 (2016).27504778 10.1038/nbt.3597PMC5321674 [PMID:27504778]
152. 152.QuinnRA Global chemical effects of the microbiome include new bile-acid conjugations. Nature 579, 123–129 (2020).32103176 10.1038/s41586-020-2047-9PMC7252668 [PMID:32103176]
153. 153.FolzJS, ShalonD & FiehnO Metabolomics analysis of time-series human small intestine lumen samples collected in vivo. Food Funct. 12, 9405–9415 (2021).34606553 10.1039/d1fo01574e [PMID:34606553]
154. 154.PatelCJ, BhattacharyaJ & ButteAJ An Environment-Wide Association Study (EWAS) on type 2 diabetes mellitus. PLoS One 5, e10746 (2010).20505766 10.1371/journal.pone.0010746PMC2873978 [PMID:20505766]
155. 155.PriceEJ Merging the exposome into an integrated framework for ‘omics’ sciences. iScience 25, 103976 (2022).35310334 10.1016/j.isci.2022.103976PMC8924626 [PMID:35310334]
156. 156.HuangS-Y Investigating Causal Relations Between Circulating Metabolites and Alzheimer’s Disease: A Mendelian Randomization Study. J. Alzheimers. Dis. 87, 463–477 (2022).35275550 10.3233/JAD-220050 [PMID:35275550]
157. 157.YuX-H, CaoR-R, YangY-Q & LeiS-F Identification of causal metabolites related to multiple autoimmune diseases. Hum. Mol. Genet. 31, 604–613 (2022).34523675 10.1093/hmg/ddab273 [PMID:34523675]
158. 158.PorcuE Triangulating evidence from longitudinal and Mendelian randomization studies of metabolomic biomarkers for type 2 diabetes. Sci. Rep. 11, 6197 (2021).33737653 10.1038/s41598-021-85684-7PMC7973501 [PMID:33737653]
159. 159.FengY Causal effects of genetically determined metabolites on cancers included lung, breast, ovarian cancer, and glioma: a Mendelian randomization study. Transl Lung Cancer Res 11, 1302–1314 (2022).35958335 10.21037/tlcr-22-34PMC9359954 [PMID:35958335]
160. 160.DreyfussJM High-throughput mediation analysis of human proteome and metabolome identifies mediators of post-bariatric surgical diabetes control. Nat. Commun. 12, 6951 (2021).34845204 10.1038/s41467-021-27289-2PMC8630169 [PMID:34845204]
161. 161.CamachoD, de la FuenteA & MendesP The origin of correlations in metabolomics data. Metabolomics 1, 53–63 (2005).
162. 162.KellyRS An Integrative Transcriptomic and Metabolomic Study of Lung Function in Children With Asthma. Chest 154, 335–348 (2018).29908154 10.1016/j.chest.2018.05.038PMC6689076 [PMID:29908154]
163. 163.KrumsiekJ, SuhreK, IlligT, AdamskiJ & TheisFJ Gaussian graphical modeling reconstructs pathway reactions from high-throughput metabolomics data. BMC Syst. Biol. 5, 21 (2011).21281499 10.1186/1752-0509-5-21PMC3224437 [PMID:21281499]
164. 164.KrumsiekJ Gender-specific pathway differences in the human serum metabolome. Metabolomics 11, 1815–1833 (2015).26491425 10.1007/s11306-015-0829-0PMC4605991 [PMID:26491425]
165. 165.PlaydonMC Nutritional metabolomics and breast cancer risk in a prospective study. Am. J. Clin. Nutr. 106, 637–649 (2017).28659298 10.3945/ajcn.116.150912PMC5525118 [PMID:28659298]
166. 166.LawlorDA, TillingK & Davey SmithG Triangulation in aetiological epidemiology. Int. J. Epidemiol. 45, 1866–1886 (2016).28108528 10.1093/ije/dyw314PMC5841843 [PMID:28108528]
167. 167.NemetI A Cardiovascular Disease-Linked Gut Microbial Metabolite Acts via Adrenergic Receptors. Cell 180, 862–877.e22 (2020).32142679 10.1016/j.cell.2020.02.016PMC7402401 [PMID:32142679]
168. 168.AdamJ Metformin Effect on Nontargeted Metabolite Profiles in Patients With Type 2 Diabetes and in Multiple Murine Tissues. Diabetes 65, 3776–3785 (2016).27621107 10.2337/db16-0512 [PMID:27621107]
169. 169.WuZE Metabolomic signatures for visceral adiposity and dysglycaemia in Asian Chinese and Caucasian European adults: the cross-sectional TOFI_Asia study. Nutr. Metab. 17, 95 (2020).10.1186/s12986-020-00518-zPMC766776633292338 [PMID:33292338]
170. 170.TaylorK Differences in Pregnancy Metabolic Profiles and Their Determinants between White European and South Asian Women: Findings from the Born in Bradford Cohort. Metabolites 9, (2019).10.3390/metabo9090190PMC678054531540515 [PMID:31540515]
171. 171.ChevliPA Plasma metabolomic profiling in subclinical atherosclerosis: the Diabetes Heart Study. Cardiovasc. Diabetol. 20, 231 (2021).34876126 10.1186/s12933-021-01419-yPMC8653597 [PMID:34876126]
172. 172.SaravananP, Diabetes in Pregnancy Working Group, Maternal Medicine Clinical Study Group & Royal College of Obstetricians and Gynaecologists, UK. Gestational diabetes: opportunities for improving maternal and child health. Lancet Diabetes Endocrinol 8, 793–800 (2020).32822601 10.1016/S2213-8587(20)30161-3 [PMID:32822601]
173. 173.GeidenstamN Using metabolite profiling to construct and validate a metabolite risk score for predicting future weight gain. PLoS One 14, e0222445 (2019).31560688 10.1371/journal.pone.0222445PMC6764659 [PMID:31560688]
174. 174.LiC Development and validation of a metabolite score for red meat intake: an observational cohort study and randomized controlled dietary intervention. Am. J. Clin. Nutr. 116, 511–522 (2022).35754192 10.1093/ajcn/nqac094PMC9348983 [PMID:35754192]
175. 175.LiJ The Mediterranean diet, plasma metabolome, and cardiovascular disease risk. Eur. Heart J. 41, 2645–2656 (2020).32406924 10.1093/eurheartj/ehaa209PMC7377580 [PMID:32406924]
176. 176.Fernández-OchoaÁ Metabolic Disturbances in Urinary and Plasma Samples from Seven Different Systemic Autoimmune Diseases Detected by HPLC-ESI-QTOF-MS. J. Proteome Res. 19, 3220–3229 (2020).32460496 10.1021/acs.jproteome.0c00179 [PMID:32460496]
177. 177.LiuN Comparison of Untargeted Metabolomic Profiling vs Traditional Metabolic Screening to Identify Inborn Errors of Metabolism. JAMA Netw Open 4, e2114155 (2021).34251446 10.1001/jamanetworkopen.2021.14155PMC8276086 [PMID:34251446]
178. 178.GoossensN, NakagawaS, SunX & HoshidaY Cancer biomarker discovery and validation. Transl. Cancer Res. 4, 256–269 (2015).26213686 10.3978/j.issn.2218-676X.2015.06.04PMC4511498 [PMID:26213686]
179. 179.BraistedJ RaMP-DB 2.0: a renovated knowledgebase for deriving biological and chemical insight from metabolites, proteins, and genes. Bioinformatics 39, (2023).10.1093/bioinformatics/btac726PMC982574536373969 [PMID:36373969]
180. 180.WangZ Genome-wide association study of metabolites in patients with coronary artery disease identified novel metabolite quantitative trait loci. Clin. Transl. Med. 11, e290 (2021).33634981 10.1002/ctm2.290PMC7839954 [PMID:33634981]
181. 181.JungT Integrative Pathway Analysis of SNP and Metabolite Data Using a Hierarchical Structural Component Model. Front. Genet. 13, 814412 (2022).35401680 10.3389/fgene.2022.814412PMC8987531 [PMID:35401680]
182. 182.WolfeD, DudekS, RitchieMD & PendergrassSA Visualizing genomic information across chromosomes with PhenoGram. BioData Min. 6, 18 (2013).24131735 10.1186/1756-0381-6-18PMC4015356 [PMID:24131735]
183. 183.VanderWeeleTJ & VanderWeeleT Explanation in Causal Inference: Methods for Mediation and Interaction. (Oxford University Press, USA, 2015).
184. 184.HemaniG, TillingK & Davey SmithG Orienting the causal relationship between imprecisely measured traits using GWAS summary data. PLoS Genet. 13, e1007081 (2017).29149188 10.1371/journal.pgen.1007081PMC5711033 [PMID:29149188]
185. 185.VerbanckM, ChenC-Y, NealeB & DoR Detection of widespread horizontal pleiotropy in causal relationships inferred from Mendelian randomization between complex traits and diseases. Nat. Genet. 50, 693–698 (2018).29686387 10.1038/s41588-018-0099-7PMC6083837 [PMID:29686387]
186. 186.BurgessS & ThompsonSG Multivariable Mendelian randomization: the use of pleiotropic genetic variants to estimate causal effects. Am. J. Epidemiol. 181, 251–260 (2015).25632051 10.1093/aje/kwu283PMC4325677 [PMID:25632051]
187. 187.Davey SmithG & HemaniG Mendelian randomization: genetic anchors for causal inference in epidemiological studies. Hum. Mol. Genet. 23, R89–98 (2014).25064373 10.1093/hmg/ddu328PMC4170722 [PMID:25064373]
188. 188.ZhangB & HorvathS A general framework for weighted gene co-expression network analysis. Stat. Appl. Genet. Mol. Biol. 4, Article17 (2005).10.2202/1544-6115.112816646834 [PMID:16646834]
189. 189.ShuttaKH, De VitoR, ScholtensDM & BalasubramanianR Gaussian graphical models with applications to omics analyses. Stat. Med. 41, 5150–5187 (2022).36161666 10.1002/sim.9546PMC9672860 [PMID:36161666]
190. 190.DettoriJR, NorvellDC & ChapmanJR Fixed-Effect vs Random-Effects Models for Meta-Analysis: 3 Points to Consider. Global Spine J 12, 1624–1626 (2022).35723546 10.1177/21925682221110527PMC9393987 [PMID:35723546]
191. 191.FitzmauriceGM, LairdNM & WareJH Applied Longitudinal Analysis. (John Wiley & Sons, 2011).
