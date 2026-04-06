---
pmid: "41465496"
pmc: "PMC12733350"
doi: "10.3390/ijms262412069"
title: "Region-Specific Expression Patterns of lncRNAs in the Central Nervous System: Cross-Species Comparison and Functional Insights"
journal: "International Journal of Molecular Sciences"
year: 2025
authors:
  - name: "López-Royo Tresa"
    affiliations:
      - "tlopez@unizar.es (T.L.-R.);"
      - ""
  - name: "Gascón Elisa"
    affiliations:
      - "tlopez@unizar.es (T.L.-R.);"
      - ""
  - name: "Moreno-Martínez Laura"
    affiliations:
      - "tlopez@unizar.es (T.L.-R.);"
      - ""
  - name: "Macías-Redondo Sofía"
    affiliations:
      - ""
  - name: "Zaragoza Pilar"
    affiliations:
      - "tlopez@unizar.es (T.L.-R.);"
      - ""
  - name: "Manzano Raquel"
    affiliations:
      - "tlopez@unizar.es (T.L.-R.);"
      - ""
  - name: "Osta Rosario"
    affiliations:
      - "tlopez@unizar.es (T.L.-R.);"
      - ""
---

# Region-Specific Expression Patterns of lncRNAs in the Central Nervous System: Cross-Species Comparison and Functional Insights

## Abstract

Increasing evidence demonstrates that long noncoding RNAs (lncRNAs) are crucial for brain evolution and proper development and function of the central nervous system (CNS), exhibiting specific time-, spatial-, and sex-biassed expression patterns. This study investigated whether region-specific spatial expression patterns of brain-relevant lncRNAs are conserved between the mouse and human CNS. Demonstrating such cross-species conservation informs the translational value of mouse models for lncRNA biology. To test this, the expression of 14 lncRNAs was studied in the adult CNS of mice and humans across three different regions (spinal cord, brainstem, and frontal cortex), and age effects were assessed in mice. The results demonstrated conserved expression patterns between the two species, with region-specific changes. The frontal cortex exhibited high expression of Meg3, Miat, and Pvt1 lncRNAs, while the spinal cord showed high levels of Hotair and Gas5. Additionally, Malat1 displayed lower levels in females compared to males in the spinal cord compared to other regions. Finally, through GO functional enrichment analysis and literature review, this study emphasizes the role of lncRNAs in CNS physiology and disease, suggesting their involvement in neurological processes and conditions such as cortical development, neuronal synapsis, schizophrenia, Alzheimer’s, Parkinson’s, and amyotrophic lateral sclerosis. Overall, this research highlights the importance of further investigating the role of lncRNAs in brain function and their potential as key players in neurological disorders, opening the door to explaining the high region- and sex-specific effects of these disorders.

## 1. Introduction

The human genome produces thousands of long noncoding RNAs (lncRNAs), transcripts exceeding 200 nucleotides in length that lack evident protein-coding potential [1]. lncRNA transcripts share some similarities with messenger RNAs as they are typically transcribed by RNA polymerase II, exhibit classical splice sites, contain intron and exon structures, undergo alternative splicing, and share histone modifications with protein-coding genes [2]. However, lncRNAs have long been considered as “transcriptional noise” on the pretext that they do not code for proteins and their sequence is poorly conserved between species.

LncRNAs are found in a wide range of species, including bacteria, insects, worms, mammals, fish, birds, and plants. Interestingly, despite the traditional emphasis on the importance of coding RNAs in biology, the evolutionary complexity of species is correlated with its relative number of lncRNAs. For instance, in flies, humans, and mice, the number of protein-coding genes is relatively similar, with flies having 13,969 genes, mice 21,848, and humans 19,951. Conversely, the number of lncRNAs increases significantly in more evolved species: 2545 in flies, 13,186 in mice, and 17,948 in humans [3].

In evolutionary terms, it is now understood that the lack of conservation in the primary sequence of lncRNAs does not typically affect their function, which can be preserved across different species. In fact, lncRNA function mainly relies on specific secondary structures that allow interaction with proteins and facilitate binding between DNA and RNA based on base pair complementarity [4,5]. Moreover, each lncRNA is not restricted to a single function. Instead, lncRNAs usually exhibit multiple interactions with different molecules, thus exerting several functions, which can also be highly tissue-specific. LncRNAs expressed in the brain show the strongest evolutionary conservation as compared to those expressed in other tissues [6,7,8], which has also been associated with increasing levels of brain complexity [9].

At the molecular level, major functions of lncRNA comprise the regulation of protein-coding gene expression at epigenetic, transcriptional, post-transcriptional, and translational levels. They also participate in transcriptional activity modulation, X-chromosome silencing, genome imprinting, chromatin modification, structural cell compartment formation, and many other biological processes [10,11,12,13,14].

At the cellular level, they have been shown to play a role in development, cell cycle regulation, and differentiation. In particular, lncRNAs are they are particularly abundant in the central nervous system (CNS), where a remarkable diversity can be found. In fact, an increasing number of lncRNAs have been confirmed to play crucial roles in evolution, adaptability, maintenance, differentiation, and operation of various neuronal subtypes [11,15,16]. Furthermore, lncRNAs expression pattern changes during neural stem cell differentiation, with a significant portion being brain-specific. For example, studies show that lncRNAs like Dlx1as and Six3os are required for specifying the neuronal and oligodendrocyte lineages, respectively [17,18].

Overall, an accurate programme of time and location-specific lncRNA expression is essential for the morphogenesis and function of the distinct CNS regions and cell types. Indeed, research in primates has demonstrated spatial-, age-, and sex-biassed changes in brain lncRNA expression, suggesting that these molecules may constitute a regulatory system that potentially contributes to brain development, ageing, and evolution [19,20]. Despite their importance, and the RNA-seq studies and single-cell analyses performed over the last decade, the specific lncRNAs expressed in distinct brain regions.

To understand the expression and relevance of lncRNAs across anatomical and functional regions of the CNS, the conservation of region-specific spatial expression patterns between mouse and human was assessed, thereby informing the translational value of mouse models. For this purpose, lncRNA expression was evaluated in the spinal cord, brainstem, and frontal cortex of mice, observing specific regional enrichment of certain lncRNAs. In addition, lncRNAs from human brainstem and frontal cortex samples were analyzed, evidencing that lncRNA expression profiles persisted across species. Finally, a functional enrichment study was carried out to investigate the relevance of lncRNAs highly expressed in each area of the CNS and their putative implication in CNS main biological functions and neurological disorders.

## 2. Results

### 2.1. Constitutive lncRNA Expression Across the Murine Central Nervous System

To explore potential differences in lncRNA expression patterns, this study investigated the transcriptional levels of 14 lncRNAs in three areas of the CNS from adult mice. The selected transcripts (Meg3, Hotair, Malat1, Gas5, Neat1, Myhas, Xist, CDR1os, Snhg1, Snhg16, Miat, Pvt1, and H19) have previously been identified as brain-expressed in RNA-seq studies [21,22,23], show moderate-to-high conservation between mammals, and are known to be involved in key CNS-related functions and pathologies. Given its recent detection in the CNS and the lack of prior characterization, Myoparr was also included for exploratory analysis [24]. Expression profiles were assessed by real-time PCR in the spinal cord, brainstem, and frontal cortex at three postnatal ages (P60, P90, and P120).

The results showed the differential expression of lncRNAs across the different regions of the CNS (Figure 1). Interestingly, the proportion of lncRNAs showing regional differences/disparities increased with age. Specifically, at P60, 79% of the lncRNAs exhibited significant variation among the distinct/studied CNS regions, as compared to 100% and 93% at P90 and P120, respectively. These differences were assessed independently of sex and are shown in the bar plots (Figure 1A,C,E).

Surprisingly, only four of the lncRNAs studied (Xist, Myoparr, Snhg1, and Snhg16) showed dynamic fluctuations across the different ages with no clear general trend, while the others exhibited consistent region-specific expression patterns over time.

For instance, in the spinal cord, the transcriptional levels of Hotair (all ages), Gas5, and H19 (P90, P120) were higher than in the brainstem and frontal cortex (Figure 1C–F). Conversely, Malat1 was significantly lower in this tissue (Figure 1A–F). Similarly, in the frontal cortex, Meg3, CDR1os, Miat, and Pvt1 levels were particularly abundant, whereas Neat1 levels were relatively low (Figure 1A–F). Moreover, Myhas expression was increased in the cortex as compared to the spinal cord and brainstem, and it was also significantly diminished in the brainstem versus the spinal cord (Figure 1A–F).

No sex-related differences were found in Neat1, Myhas, Myoparr, and Pvt1 levels across the examined regions. On the other hand, the expression of Meg3, Hotair, Malat1, Gas5, Xist, CDR1os, Snhg1, Snhg16, Miat, and H19 varied between male and female samples (Figure 1B,D,F and Table S3). Overall, differences varied depending on the tissue type and age. However, two lncRNAs exhibited consistent sex-biassed expression patterns: Xist, which is known to be exclusively expressed in females due to its role in X-chromosome inactivation, and Malat1, which showed higher expression levels in males in every tissue and at all examined ages. To our knowledge, this is the first report describing a sex-related expression bias for Malat1 in the CNS.

Overall, when sex differences were present, higher lncRNA expression was detected in the spinal cord of males, whereas females showed higher levels in the frontal cortex and brainstem. Regarding tissue distribution, the frontal cortex displayed the largest number of lncRNAs differentially expressed between sexes (10), followed by the spinal cord (9) and brainstem (8). In terms of age, P90 showed the highest number of lncRNAs differentially expressed between the sexes (11 vs. 9 and 8).

### 2.2. Conservation of lncRNA Expression Patterns Between Mouse and Human

To verify the conservation of lncRNA expression patterns between species across CNS regions, post-mortem human tissue samples were also analyzed (Table 1). Of the 14 lncRNAs tested in mice, 9 were successfully detected in brainstem and frontal cortex human samples, including MEG3, MALAT1, GAS5, NEAT1, SNHG1, SNHG16, MIAT, PVT1, and H19.

Among these, five lncRNAs showed significant differences between both regions (Figure 2 and Figure S1). In particular, MALAT1 and NEAT1 exhibited higher expression in the brainstem, while MEG3, MIAT, and PVT1 showed increased expression in the frontal cortex. Altogether, these results were consistent with those obtained in mice.

These findings were further validated for MALAT1, NEAT1, MEG3, and MIAT using microarray data obtained from six additional brains documented in [25] (see Figure S2).

Gender-related differences were only statistically significant for GAS5 and MIAT in the cortex and brainstem, respectively. As compared to mouse samples, this decrease could be due to the limited N (n = 6 males; n = 3 females) and the high variability intrinsic to human patient samples.

### 2.3. Functional and Enrichment Bioinformatic Analysis of lncRNAs Across CNS Regions

To better understand the tissue-specific enrichment and potential functions of lncRNAs within each CNS region, we initially performed a Gene Ontology (GO) functional and enrichment bioinformatic analysis on lncRNAs. Due to the limited availability of data, the analyses produced sparse results, with most lncRNAs lacking annotations. Even those that were annotated provided limited information, typically related to the broad aspects of RNA metabolism regulation. To overcome this limitation, we conducted a GO analysis of lncRNA interactomes to better understand their functional roles, using the EVLncRNAs V3.0 database to retrieve their reported molecular interactions with protein-coding genes (mRNAs), genomic DNA, and genes targeted by miRNAs.

Therefore, we analyzed the interactomes of seven lncRNAs that had exhibited a consistent pattern of differential region enrichment (Gas5, Hotair, Malat1, Neat1, Meg3, Miat, and Pvt1) using GO analysis. The results obtained from both human and mouse species are provided in the Supplementary Data files. Among all the results from this functional analysis, the biological processes most closely related to the central nervous system are highlighted in Figure 3 and detailed in Tables S4 and S5.

For all three lncRNAs up-regulated in the frontal cortex (Miat, Meg3, and Pvt1), GO analysis revealed associations with glia-related biological processes, such as gliogenesis, glial cell activation, development and differentiation, neuronal ensheathment (the process of glial cells wrapping around neuronal axons), and neuroinflammatory response. Additionally, individually, Meg3 was related to forebrain and hippocampus development, neuron migration, and axon regeneration, whereas Pvt1 was associated with regulation of synapse maturation, amyloid-beta metabolic processes, and postsynaptic and cortical actin cytoskeleton organization, among others. Interestingly, despite the higher expression of Miat in the frontal cortex, GO analysis revealed a stronger association of this lncRNA with biological processes pertinent to the brainstem and spinal cord mediated through the Ezh2 and Sox4 genes (noradrenergic neuron differentiation, cerebellar cortex, and spinal cord development).

In the case of NEAT1, which is decreased in the cortical region, the biological processes of interest found in humans were telencephalon and metencephalon development, glial and neuroendocrine cell differentiation, response to amyloid-beta, glutathione metabolic process, neuronal apoptosis, and regulation of synapse organization. In mice, the identified processes are primarily related to the regulation of neuronal and glial survival and apoptosis—particularly under oxidative stress—the development and differentiation of neurons (including dopaminergic neurons), and the modulation of synaptic plasticity and sensory pain perception.

Gas5, which is increased in the spinal cord, was associated with differentiation and proliferation of different cell types in the nervous system (Bergmann glia, astrocytes, oligodendrocytes, neuroendocrine cells, and mechanoreceptors), the maintenance and regulation of stem cells and neuronal precursors, the control of apoptosis and synaptic plasticity, as well as associated functions such as myelin maintenance, neuroinflammatory response, and glutathione metabolism. Hotair, also enriched in this region, was related to general development, maintenance, and function processes of the CNS, such as neuron arborization, axonogenesis, synaptic transmission, or proliferation and differentiation of neurons and glial cells. In addition, it was also associated with motor neuron apoptosis, which may partly account for its enrichment in the spinal cord. Nevertheless, it was likewise linked to pathways that are predominantly brain-specific and have minimal relevance to the spinal cord, including the development of the hippocampus, telencephalon, and forebrain.

Finally, according to our bioinformatic analysis, Malat1 -which is reduced in the spinal cord- was mainly involved in regulating the differentiation of glial, oligodendrocyte, and dendritic cells; the proliferation and migration of neuroblasts; and the extension of neuronal projections with dendritic spine formation, as well as axonal myelination and ensheathment. In addition, it was also related to the development of the forebrain, hindbrain, cerebellum, and metencephalon; neuronal apoptosis and the response to oxidative stress; the regulation of synaptic organization, and GABAergic transmission.

## 3. Discussion

The CNS exhibits large biological complexity, being responsible for the regulation of cognitive, emotional, and physiological functions. Understanding its regulation and balance thus remains intricate, yet extremely important.

In this context, lncRNAs regulate essential biological processes in the brain, such as neural cell differentiation, neurite outgrowth, or synapse regulation and function [11,15,16,26]. Indeed, abnormal lncRNA expression has been associated with devastating neurological diseases, including glioma [27,28], schizophrenia [29], Alzheimer’s (AD) and Parkinson’s (PD) diseases [30,31,32,33,34], developmental delay [35], and autism [36].

Many of these disorders involve specific processes, brain areas, and cell types. Likewise, gender influences disease incidence and development. Understanding the causes underlying this specificity will shed light on the pathogenesis of these disorders and unravel potential therapeutic targets. In this sense, lncRNAs, which are highly specific molecules that regulate gene expression and show distinct abundance and functions according to factors such as sex, age, and cell type, emerge as key candidates for understanding the selective processes triggered in these pathological conditions.

To this end, this work evaluates the expression of 14 lncRNAs, selected based on a literature review for their established roles in CNS development and function, in three different regions of the mouse CNS, namely the spinal cord, brainstem, and frontal cortex. Results showed differential lncRNA expression among regions, particularly between the anatomically distant spinal cord and frontal cortex. Specifically, Meg3, CDR1os, Miat, Pvt1, and H19 were up-regulated in the frontal cortex compared to the spinal cord and brainstem, while Neat1 was down-regulated. On the other hand, in the spinal cord, Hotair and Gas5 levels were augmented, and Malat1 expression diminished. Finally, only Myhas was significantly reduced in the brainstem. LncRNA expression was also assessed in post-mortem brainstem and frontal cortex samples from human patients, proving similar expression patterns, which highlights the use of mice as a model for neurological disorders in translational research and evidences the biological relevance of these lncRNAs.

The regional patterns observed could be explained by intrinsic differences in the cellular composition and functional and molecular requirements of each region of the CNS. To further investigate the possible causes of local lncRNA enrichment, functions and biological relevance of these lncRNAs were investigated through GO functional analysis of their interactomes and literature review.

Notably, lncRNAs enriched in the frontal cortex were linked to processes such as forebrain development, glial regulation and differentiation, neurogenesis, axonal regeneration, and both synaptic and post-synaptic signalling. Their evolutionarily conserved enrichment in this region may reflect the critical role these processes play in supporting the frontal cortex’s complex cognitive functions—including planning, decision-making, organization, working memory, cognitive flexibility, emotional regulation, social behaviour, and voluntary movement control—which demand high levels of neuroplasticity, structural reorganization, synaptic complexity, and robust glia–neuron interactions.

Additionally, several of these lncRNAs—Meg3, Pvt1, and Malat1 (with MALAT1 showing reduced expression in the spinal cord)—are involved in GABAergic signalling, which is essential for proper cortical development and implicated in disorders with cortical affection such as age-related cognitive decline, schizophrenia, and autism [37,38,39]. Similarly, Pvt1 plays a role in β-amyloid metabolism; β-amyloid aggregates in the cortex are a characteristic hallmark of Alzheimer’s disease-related dementia [40]. In contrast, lncRNAs with lower expression in the cortex but enriched in the spinal cord—Neat1, Gas5, and Hotair—were implicated in processes such as myelination, motor neuron apoptosis, and glutathione metabolism. While these processes are relevant throughout the nervous system, they hold particular significance in the spinal cord due to its unique composition and functions. Notably, they represent key canonical events in ALS, a disease characterized by predominant spinal cord involvement [41,42].

Furthermore, certain lncRNAs showed significantly different expression profiles between males and females within the same CNS area. In some cases, these differences were age- and tissue-dependent (Meg3, Hotair, Gas5, CDR1os, Snhg1, Snhg16, Miat, and H19), whereas in the case of Xist and Malat1, these changes were consistent across ages and regions. Xist has been widely reported to be expressed only in individuals with two X chromosomes. However, to the best of our knowledge, this is the first time that a sexual dimorphism is reported for Malat1 in the CNS, which could be relevant in neurological disorders with a marked gender influence, such as schizophrenia, depression, AD disease, or ALS.

Nevertheless, and despite the discussion above, some lncRNAs are functionally linked to broad processes affecting the entire nervous system, or even to processes that do not precisely align with the regions where they are enriched. This may reflect limitations in current annotations or indicate indirect effects and systemic regulatory roles that extend beyond local functions. Furthermore, we acknowledge that this study relies on bulk tissue analysis, which provides an averaged expression level across a heterogeneous cell population. This approach, while robust for identifying regional patterns, inherently limits our ability to resolve cell-type-specific expression changes or complex regulatory dynamics, such as those that might occur within neurons, astrocytes, or microglia independently. Future studies using single-cell resolution (scRNA-seq) [43] will be essential to dissect the specific cellular contributions to the lncRNA signatures we have identified.

In brief, these findings highlight the complex role of lncRNAs in regulating crucial biological processes in the brain and spinal cord. A better understanding of the distribution and functions of lncRNAs in the central nervous system may offer valuable insights into CNS functioning and the pathogenic mechanisms underlying neurological and neurodegenerative diseases. Moreover, the conserved, region-specific lncRNA programmes observed across mouse and human indicate preserved regulatory logic and support the translational relevance of murine CNS models, providing a functional anchor to interrogate lncRNA mechanisms, biomarkers, and therapeutic candidates in neurological disease

## 4. Materials and Methods

### 4.1. Human Sample Collection

Brain tissue samples and data from patients included in this study were collected, processed, and provided by the CIEN Tissue Bank (CIEN Foundation, Instituto de Salud Carlos III) and Biobanco en Red de la Región de Murcia (BIOBANC-MUR, registration number from the Registro Nacional de Biobancos B.0000859), following standard operating procedures with appropriate approval of the Ethical and Scientific Committees. All subjects provided written informed consent, and El Comité de Ética de la Investigación de la Comunidad de Aragón (CEICA) (Ref. PI17/0025, updated on June 2023) and El Comité Científico del banco de tejidos de la Fundación CIEN (Ref. CCS17003, updated CEI PI 79_2023) approved this research. All material was released to the investigators fully anonymized; therefore, only the brain region, sex, and age were available for each donor. Medication use, lifestyle factors, and detailed clinical histories were not provided by the repositories. For detailed clinical characteristics, please refer to Supplementary Table S1.

### 4.2. Animals

Wild-type B6SJL mice were purchased from Janvier Labs and housed at the animal facilities of the Centro de Investigación Biomédica de Aragón in a pathogen-free environment and under a standard light/dark (12:12) cycle. Food and water were provided ad libitum.

The care and use of animals adhered strictly to the Spanish Policy for Animal Protection RD53/2013, in compliance with the European Union Directive 2010/63 regarding the safeguarding of animals used for experimental and scientific purposes. All experimental protocols received approval from the Ethics Committee for Animal Experiments at the University of Zaragoza and were registered with code numbers PI29/13 and PI08/19.

### 4.3. Mice Sample Collection

Spinal cord, brainstem, and frontal cortex samples were collected from ten to twelve sex-matched mice at different stages: 60, 90, and 120 days of postnatal life (P60, P90, and P120). Samples were harvested after CO2 euthanasia, frozen in dry ice, and stored at −80 °C until processed.

### 4.4. RNA Extraction

For mouse tissue, the samples were homogenized in Trizol Reagent using Tissue Lyser LT (Qiagen; Hilden, Germany). Total RNA was isolated using Direct-zolTM RNA MiniPrep Kit (Zymo Research; Irvine, CA, USA), according to the manufacturer’s instructions.

For human brain samples, RNA purification was performed as previously described in Oros et al., 2017 [44]. The quality and concentration of each extraction were measured with a Nanodrop ND-1000 spectrophotometer (Thermo Fisher Scientific; Waltham, MA, USA), and integrity was reported by the biobanks as RQI. As expected for post-mortem CNS tissue, some variability in RQI was observed and was managed through assay design and housekeeping-normalized ΔΔCt analyses.

### 4.5. Real-Time PCR

For lncRNA quantification, cDNA was synthesized using the High-Capacity cDNA Reverse Transcription Kit from Applied Biosystems (Thermo Fisher Scientific; Waltham, MA, USA). Reverse transcription quantitative PCR (RT-qPCR) was conducted from diluted cDNA in triplicate using the Quant StudioTM 3 Real Time PCR Instrument from Applied Biosystems (Thermo Fisher Scientific). Custom self-designed Syber Green Primers (Thermo Fisher Scientific) employed in this work are detailed in Table S2.

The relative gene expression was calculated by the 2−∆∆CT method as described by Livak & Schmittgen [45]. In mouse samples, Gapdh and Actb served as housekeeping genes, while GAPDH was used to normalize human samples.

### 4.6. Functional Enrichment Study

To perform the functional enrichment study, a list of all genes and proteins related to each lncRNA was first made using the information present in the EVLncRNAs V3.0 database (https://www.sdklab-biophysics-dzu.net/EVLncRNAs2/ (acessed on 9 April 2025)) [46]. Once this information was obtained, the functional enrichment analysis of genes was carried out with the RStudio (v4.4.1) environment [47]. The Bioconductor R package, clusterProfiler (v4.8.2) [48] was used with default statistical thresholds and the organism (OrgDb) set to “org.Hs.eg.db” and “org.Mm.eg.db”. clusterProfiler is a popular package renowned for its ability to perform comprehensive functional and pathway enrichment analyses, allowing for the analysis and visualization of enrichment across numerous organisms. This analysis specifically focused on Gene Ontology (GO) terms, categorizing them into (1) biological processes, (2) molecular functions, and (3) cellular components. GO scores with a p-value < 0.05 were considered statistically significant. The networkD3 package (v0.4.1) was utilized to make the Sankey diagram [49].

### 4.7. Statistical Analysis

The results are shown as the mean value ± the standard error of the mean (SEM) or the standard deviation (SD), as indicated. To establish significant differences between CNS areas, one-way ANOVA and Student’s t-tests were performed when comparing three (in mice) and two (in humans) different tissues, respectively. Outliers were detected by the iterative Grubb’s test and excluded from the analysis. GraphPad Prism software (version 8.0.1) was used for the statistical analysis. Differences were considered statistically significant if p < 0.05 (*) and highly significant if p < 0.01 (**), p < 0.001 (***).

## 5. Conclusions

This work contributes to the understanding of the differential expression and function of lncRNA across distinct areas of the central nervous system, demonstrating similar patterns between mouse and human and evidencing gender and age influence on lncRNA levels.

The evolutionary conservation in lncRNA expression, along with the association of lncRNAs with crucial roles in CNS development and function, supports the hypothesis that lncRNA function is conserved across species despite the lack of primary structure conservation. However, further studies are needed to investigate the reasons for specific lncRNA enrichment in determined brain regions and to clarify the roles of lncRNAs in the central nervous system function, development, and disease, a field that remains poorly understood.

## Acknowledgements

AcknowledgmentsWe express our gratitude for the generous contribution of the patients and the collaboration of CIEN Tissue Bank (CIEN Foundation, Instituto de Salud Carlos III) and Biobank Network of the Region of Murcia (BIOBANC-MUR, registered on the Registro Nacional de Biobancos with registration number B.0000859). We are also grateful to Elena Tapia and the staff of the animal facility at the Centro de Investigación Biomédica de Aragón for their assistance in managing the mice colony.

## Funding

- Instituto de Salud Carlos IIIPI21/00372PT20/00109
- Fondo Europeo de Desarrollo Regional (FEDER) “Una manera de hacer Europa” from the European Union
- Centro de Investigación Biomédica en Red sobre Enfermedades NeurodegenerativasCB18/05/0037
- Consolidated Groups from Gobierno de AragónA19_23R
- Spanish Ministry of Science and InnovationEuropean Union NextGenerationEURecovery, Transformation and Resilience PlanPRTR-C17.I1
- Autonomous Community of Aragón within the framework of the Biotechnology Plan Applied to Health
- Ministerio de Universidades from Gobierno de EspañaFPU19/05625
- Instituto Murciano de Investigación Biosanitaria Virgen de la Arrixaca (IMIB)
- Consejeria de Salud de la Comunidad Autónoma de la Región de Murcia

## Data Availability

Data Availability StatementThe datasets produced and analyzed during the present study can be obtained from the corresponding author upon reasonable request.

## References

1. 1. HangauerM.J. VaughnI.W. McManusM.T. Pervasive Transcription of the Human Genome Produces Thousands of Previously Unidentified Long Intergenic Noncoding RNAsPLoS Genet.20139e100356910.1371/journal.pgen.100356923818866PMC3688513 [PMID:23818866]
2. 2. PontingC.P. OliverP.L. ReikW. Evolution and Functions of Long Noncoding RNAsCell200913662964110.1016/j.cell.2009.02.00619239885 [PMID:19239885]
3. 3. Camilleri-RoblesC. AmadorR. KleinC.C. GuigóR. CorominasM. Ruiz-RomeroM. Genomic and functional conservation of lncRNAs: Lessons from fliesMamm. Genome20223332834210.1007/s00335-021-09939-435098341PMC9114055 [PMID:35098341]
4. 4. PangK.C. FrithM.C. MattickJ.S. Rapid evolution of noncoding RNAs: Lack of conservation does not mean lack of functionTrends Genet.2006221510.1016/j.tig.2005.10.00316290135 [PMID:16290135]
5. 5. UlitskyI. ShkumatavaA. JanC.H. SiveH. BartelD.P. Conserved function of lincRNAs in vertebrate embryonic development despite rapid sequence evolutionCell20111471537155010.1016/j.cell.2011.11.05522196729PMC3376356 [PMID:22196729]
6. 6. PolicarpoR. SierksmaA. De StrooperB. d’YdewalleC. From Junk to Function: LncRNAs in CNS Health and DiseaseFront. Mol. Neurosci.20211471476810.3389/fnmol.2021.71476834349622PMC8327212 [PMID:34349622]
7. 7. PonjavicJ. OliverP.L. LunterG. PontingC.P. Genomic and transcriptional co-localization of protein-coding and long non-coding RNA pairs in the developing brainPLoS Genet.20095e100061710.1371/journal.pgen.100061719696892PMC2722021 [PMID:19696892]
8. 8. HeZ. BammannH. HanD. XieG. Conserved expression of lincRNA during human and macaque prefrontal cortex development and maturationRNA2014201103111110.1261/rna.043075.11324847104PMC4074677 [PMID:24847104]
9. 9. JohnsonM.B. WangP.P. AtabayK.D. MurphyE.A. DoanR.N. HechtJ.L. WalshC.A. Single-cell analysis reveals transcriptional heterogeneity of neural progenitors in human cortexNat. Neurosci.20151863764610.1038/nn.398025734491PMC5568903 [PMID:25734491]
10. 10. QureshiI.A. MattickJ.S. MehlerM.F. Long non-coding RNAs in nervous system function and diseaseBrain Res.20101338203510.1016/j.brainres.2010.03.11020380817PMC2883659 [PMID:20380817]
11. 11. WeiC. LuoT. ZouS. WuA. The Role of Long Noncoding RNAs in Central Nervous System and Neurodegenerative DiseasesFront. Behav. Neurosci.20181217510.3389/fnbeh.2018.0017530323747PMC6172704 [PMID:30323747]
12. 12. SinghD.K. PrasanthK.V. Functional insights into the role of nuclear-retained long noncoding RNAs in gene expression control in mammalian cellsChromosom. Res.20132169571110.1007/s10577-013-9391-7PMC395118524233053 [PMID:24233053]
13. 13. GoffL.A. RinnJ.L. Linking RNA biology to lncRNAsGenome Res.2015251456146510.1101/gr.191122.11526430155PMC4579330 [PMID:26430155]
14. 14. KazemzadehM. SafaralizadehR. OrangA.V. LncRNAs: Emerging players in gene regulation and disease pathogenesisJ. Genet.20159477178410.1007/s12041-015-0561-626690535 [PMID:26690535]
15. 15. AndersenR.E. LimD.A. Forging our understanding of lncRNAs in the brainCell Tissue Res.2018371557110.1007/s00441-017-2711-z29079882 [PMID:29079882]
16. 16. BriggsJ.A. WolvetangE.J. MattickJ.S. RinnJ.L. BarryG. Mechanisms of Long Non-coding RNAs in Mammalian Nervous System Development, Plasticity, Disease, and EvolutionNeuron20158886187710.1016/j.neuron.2015.09.04526637795 [PMID:26637795]
17. 17. MercerT.R. QureshiI.A. GokhanS. DingerM.E. LiG. MattickJ.S. MehlerM.F. Long noncoding RNAs in neuronal-glial fate specification and oligodendrocyte lineage maturationBMC Neurosci.2010111410.1186/1471-2202-11-1420137068PMC2829031 [PMID:20137068]
18. 18. RamosA.D. DiazA. NelloreA. DelgadoR.N. ParkK.-Y. Gonzales-RoybalG. OldhamM.C. SongJ.S. LimD.A. Integration of genome-wide approaches identifies lncRNAs of adult neural stem cells and their progeny in vivoCell Stem Cell20131261662810.1016/j.stem.2013.03.00323583100PMC3662805 [PMID:23583100]
19. 19. LiuS. WangZ. ChenD. ZhangB. TianR.-R. WuJ. ZhangY. XuK. YangL.-M. ChengC. Annotation and cluster analysis of spatiotemporal- and sex-related lncRNA expression in rhesus macaque brainGenome Res.2017271608162010.1101/gr.217463.11628687705PMC5580719 [PMID:28687705]
20. 20. NavandarM. VenninC. LutzB. GerberS. Long non-coding RNAs expression and regulation across different brain regions in primatesSci. Data20241154510.1038/s41597-024-03380-338806530PMC11133376 [PMID:38806530]
21. 21. KadakkuzhaB.M. LiuX.A. McCrateJ. ShankarG. RizzoV. AfinogenovaA. YoungB. FallahiM. CarvallozaA.C. RaveendraB. Transcriptome analyses of adult mouse brain reveal enrichment of lncRNAs in specific brain regions and neuronal populationsFront. Cell. Neurosci.201596310.3389/fncel.2015.0006325798087PMC4351618 [PMID:25798087]
22. 22. Allen Institute for Brain Science Allen Mouse Brain Atlas. [Dataset]2004Available online: https://mouse.brain-map.org/(accessed on 17 June 2025)
23. 23. Allen Institute for Brain Science Allen Human Brain Atlas. [Dataset]2013Available online: https://mouse.brain-map.org/(accessed on 17 June 2025)
24. 24. López-RoyoT. Moreno-MartínezL. RadaG. Macías-RedondoS. CalvoA.C. García-RedondoA. ManzanoR. OstaR. LncRNA levels in the central nervous system as novel potential players and biomarkers in amyotrophic lateral sclerosisNoncoding RNA Res.20251414515510.1016/j.ncrna.2025.05.01740661236PMC12256294 [PMID:40661236]
25. 25. Allen Institute for Brain Science Allen Human Brain Atlas: Microarray. RRID:SCR_0074162010Available online: https://human.brain-map.org(accessed on 17 June 2025)
26. 26. WanP. SuW. ZhuoY. The Role of Long Noncoding RNAs in Neurodegenerative DiseasesMol. Neurobiol.2017542012202110.1007/s12035-016-9793-626910817 [PMID:26910817]
27. 27. XuX. LiangY. GareevI. LiangY. LiuR. WangN. YangG. LncRNA as potential biomarker and therapeutic target in gliomaMol. Biol. Rep.20235084185110.1007/s11033-022-08056-y36331751 [PMID:36331751]
28. 28. PengZ. LiuC. WuM. New insights into long noncoding RNAs and their roles in gliomaMol. Cancer2018176110.1186/s12943-018-0812-229458374PMC5817731 [PMID:29458374]
29. 29. MishraP. KumarS. Association of lncRNA with regulatory molecular factors in brain and their role in the pathophysiology of schizophreniaMetab. Brain Dis.20213684985810.1007/s11011-021-00692-w33608830 [PMID:33608830]
30. 30. LyuY. BaiL. QinC. Long noncoding RNAs in neurodevelopment and Parkinson’s diseaseAnim. Models Exp. Med.2019223925110.1002/ame2.12093PMC693099431942556 [PMID:31942556]
31. 31. AbrishamdarM. JalaliM.S. RashnoM. MALAT1 lncRNA and Parkinson’s Disease: The role in the Pathophysiology and Significance for Diagnostic and Therapeutic ApproachesMol. Neurobiol.2022595253526210.1007/s12035-022-02899-z35665903 [PMID:35665903]
32. 32. Ghafouri-FardS. SafariM. TaheriM. SamadianM. Expression of Linear and Circular lncRNAs in Alzheimer’s DiseaseJ. Mol. Neurosci.20227218720010.1007/s12031-021-01900-z34415549 [PMID:34415549]
33. 33. Canseco-RodriguezA. MasolaV. AlipertiV. Meseguer-BeltranM. DonizettiA. Sanchez-PerezA.M. Long Non-Coding RNAs, Extracellular Vesicles and Inflammation in Alzheimer’s DiseaseInt. J. Mol. Sci.2022231317110.3390/ijms23211317136361952PMC9654199 [PMID:36361952]
34. 34. LuoQ. ChenY. Long noncoding RNAs and Alzheimer’s diseaseClin. Interv. Aging20161186787210.2147/CIA.S10703727418812PMC4933566 [PMID:27418812]
35. 35. TalkowskiM.E. MaussionG. CrapperL. RosenfeldJ.A. BlumenthalI. HanscomC. ChiangC. LindgrenA. PereiraS. RuderferD. Disruption of a large intergenic noncoding RNA in subjects with neurodevelopmental disabilitiesAm. J. Hum. Genet.2012911128113410.1016/j.ajhg.2012.10.01623217328PMC3516594 [PMID:23217328]
36. 36. TangJ. YuY. YangW. Long noncoding RNA and its contribution to autism spectrum disordersCNS Neurosci. Ther.20172364565610.1111/cns.1271028635106PMC6492731 [PMID:28635106]
37. 37. SchmidtM.J. MirnicsK. Neurodevelopment, GABA system dysfunction, and schizophreniaNeuropsychopharmacology20154019020610.1038/npp.2014.9524759129PMC4262918 [PMID:24759129]
38. 38. ZhaoH. MaoX. ZhuC. ZouX. PengF. YangW. LiB. LiG. GeT. CuiR. GABAergic System Dysfunction in Autism Spectrum DisordersFront. Cell Dev. Biol.2022978132710.3389/fcell.2021.78132735198562PMC8858939 [PMID:35198562]
39. 39. McQuailJ.A. FrazierC.J. BizonJ.L. Molecular aspects of age-related cognitive decline: The role of GABA signalingTrends Mol. Med.20152145046010.1016/j.molmed.2015.05.00226070271PMC4500156 [PMID:26070271]
40. 40. GourasG.K. OlssonT.T. HanssonO. β-Amyloid peptides and amyloid plaques in Alzheimer’s diseaseNeurotherapeutics20151231110.1007/s13311-014-0313-y25371168PMC4322079 [PMID:25371168]
41. 41. HuY. ChenW. WeiC. JiangS. LiS. WangX. XuR. Pathological mechanisms of amyotrophic lateral sclerosisNeural Regen. Res.2024191036104410.4103/1673-5374.38298537862206PMC10749610 [PMID:37862206]
42. 42. NetzahualcoyotziC. TapiaR. Degeneration of spinal motor neurons by chronic AMPA-induced excitotoxicity in vivo and protection by energy substratesActa Neuropathol. Commun.201532710.1186/s40478-015-0205-325968178PMC4429664 [PMID:25968178]
43. 43. LarssonA.J.M. JohnssonP. Hagemann-JensenM. HartmanisL. FaridaniO.R. ReiniusB. SegerstolpeÅ. RiveraC.M. RenB. SandbergR. Genomic encoding of transcriptional burst kineticsNature201956525125410.1038/s41586-018-0836-130602787PMC7610481 [PMID:30602787]
44. 44. OrosD. StrunkM. BretonP. PaulesC. BenitoR. MorenoE. GarcésM. GodinoJ. SchoorlemmerJ. Altered gene expression in human placenta after suspected preterm labourPlacenta201755212810.1016/j.placenta.2017.04.02528623969 [PMID:28623969]
45. 45. LivakK.J. SchmittgenT.D. Analysis of relative gene expression data using real-time quantitative PCR and the 2-ΔΔCT methodMethods20012540240810.1006/meth.2001.126211846609 [PMID:11846609]
46. 46. ZhouB. JiB. ShenC. ZhangX. YuX. HuangP. YuR. ZhangH. DouX. ChenQ. EVLncRNAs 3.0: An updated comprehensive database for manually curated functional long non-coding RNAs validated by low-throughput experimentsNucleic Acids Res.202452D98D10610.1093/nar/gkad105737953349PMC10767905 [PMID:37953349]
47. 47. RStudio Team RStudio: Integrated Development for RRStudio TeamBoston, MA, USA2020Available online: http://www.rstudio.com/(accessed on 9 April 2025)
48. 48. YuG. WangL.G. HanY. HeQ.Y. ClusterProfiler: An R package for comparing biological themes among gene clustersOMICS A J. Integr. Biol.20121628428710.1089/omi.2011.011822455463PMC3339379 [PMID:22455463]
49. 49. GandrudC. NetworkD3: D3 JavaScript Network Graphs from RR Package Version 0.4.1RStudio TeamBoston, MA, USA2014Available online: https://cran.r-project.org/web/packages/networkD3(accessed on 16 July 2025)
