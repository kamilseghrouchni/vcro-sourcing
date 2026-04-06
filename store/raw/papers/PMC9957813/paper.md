---
pmid: "36321729"
pmc: "PMC9957813"
doi: "10.1002/mus.27744"
title: "Body mass index associates with amyotrophic lateral sclerosis survival and metabolomic profiles"
journal: "Muscle & nerve"
year: 2023
authors:
  - name: "Goutman Stephen A"
    affiliations:
      - ""
  - name: "Boss Jonathan"
    affiliations:
      - ""
  - name: "Iyer Gayatri"
    affiliations:
      - ""
  - name: "Habra Hani"
    affiliations:
      - ""
  - name: "Savelieff Masha G"
    affiliations:
      - ""
  - name: "Karnovsky Alla"
    affiliations:
      - ""
  - name: "Mukherjee Bhramar"
    affiliations:
      - ""
  - name: "Feldman Eva L"
    affiliations:
      - ""
---

# Body mass index associates with amyotrophic lateral sclerosis survival and metabolomic profiles

## Abstract

### Introduction/Aims:

Body mass index (BMI) is linked to amyotrophic lateral sclerosis (ALS) risk and prognosis, but additional research is needed. The aim of this study was to identify if and when historical changes in BMI occurred in ALS participants, how these longer term trajectories associated with survival, and whether metabolomic profiles provided insight into potential mechanisms.

### Methods:

ALS and control participants self-reported body height and weight 10 (reference) and 5 years prior, and at study entry (diagnosis for ALS participants). Generalized estimating equations evaluated differences in BMI trajectories between cases and controls. ALS survival was evaluated by BMI trajectory group using accelerated failure time models. BMI trajectories and survival associations were explored using published metabolomic profiling and correlation networks.

### Results:

10-year BMI trends differed in ALS versus controls, with BMI loss in the 5 years prior to diagnosis despite BMI gains 10 to 5 years prior in both groups. An overall 10-year drop in BMI associated with a 27.1% decrease in ALS survival (p=0.010). Metabolomic networks in ALS participants showed dysregulation in sphingomyelin, bile acid, and plasmalogen sub-pathways.

### Discussion:

ALS participants lost weight in the 5-year period before enrollment. BMI trajectories had 3 distinct groups and the group with significant weight loss in the past 10 years had the worst survival. Participants with a high BMI and increase in weight in the 10 years prior to symptom onset also had shorter survival. Certain metabolomics profiles were associated with the BMI trajectories. Replicating these findings in prospective cohorts is warranted.

## Introduction

Amyotrophic lateral sclerosis (ALS) diagnosis is preceded by a pre-symptomatic phase, characterized by initiation of the disease process but lacking pronounced clinical symptoms.1–3 ALS patients frequently experience a rapid decrease in body mass index (BMI) and the rate of loss early in the disease course is a strong prognostic factor.4 Therefore, BMI loss may reflect an early and pre-symptomatic manifestation of disease. Indeed, individuals with ALS develop BMI loss many years before symptom onset.5 Additionally, lower BMI earlier in life may both increase ALS risk5–9 and decrease ALS survival.5, 10

BMI decreases in ALS patients are linked to lower energy intake from dysphagia and higher energy expenditure,11, 12 including hypermetabolism, altered glucose and lipid metabolism, and mitochondrial dysfunction.13 Perturbations in metabolism in ALS are supported by correlations in basic lipid profiles with risk and outcomes. Increased low-density lipoprotein cholesterol (LDL-C) and apolipoprotein B levels years prior to ALS diagnosis are associated with a higher future risk of ALS onset;14 higher levels of both at diagnosis also associated with a lower risk of death.15 However, basic lipid profiles do not capture the full spectrum of metabolic changes that occur in disease. Rather, the metabolome and lipidome, the cumulative profile of all metabolites and lipids, may more comprehensively reflect the metabolic state. Indeed, metabolomics profiles correlate with BMI16–18 and disease phenotypes, such as cardiometabolic risk.16, 17 Metabolomics signatures may one day be useful in combination with BMI as predictors of disease outcomes.16

However, the correlation of BMI with metabolomics profile and disease outcomes has not been investigated in ALS. Thus, our goal in this current study was to leverage our case/control study to examine trends in BMI trajectory in ALS versus control participants correlated to survival and metabolomics profile.

## Methods

### Participants and Samples

Recruitment and data collection procedures are published.19–22 Briefly, all patients seen at the Pranger ALS Clinic at University of Michigan with an ALS diagnosis, age greater than18 years, and ability to consent in English were asked to participate. Neurologically healthy controls, recruited through population outreach, completed the same procedures. All participants provided oral and written informed consent and the study was approved by the Institutional Review Board. Demographic characteristics and available prior heights and weights from the medical records of the participants were obtained, as were ALS disease characteristics such as Revised El Escorial criteria (rEEC).23 Participants were asked to self-report height in feet and inches and weight in pounds 10 years ago, 5 years ago, and at the present time. For ALS participants, present weight was typically equivalent to weight at diagnosis since enrollment occurred shortly after diagnosis. BMI was calculated from height and weight as follows: weight (kg) / [height (m)]2.24 ALS participants with an interval of more than 5 years from symptom onset to a diagnosis were not included in the analysis as the goal was to investigate pre-symptomatic differences in BMI. A subset of participants provided plasma for metabolomics analysis, as published.25, 26

### Descriptive Analysis

Descriptive statistics were calculated for demographic characteristics including age, sex, ALS disease onset segment frequencies, and disease duration (time from symptom onset to diagnosis). Study population differences were compared between BMI groups by analysis of variance tests and chi-square tests. Lin’s concordance correlation coefficient quantified agreement between available self-reported and measured BMIs.

### BMI Progression Analysis and Group Assignment

Generalized estimating equations (GEE) with unstructured correlation structure assessed differences in BMI changes for ALS and control participants, while accounting for within-participant correlation between self-reported BMI measurements.27 The GEE outcome was self-reported BMI and the covariates were interaction terms between ALS/control status and the three time points adjusted for age and sex at study entry. Differences in average BMI rate of change between ALS and controls were assessed with the Wald test and performed with the R geepack package.28

After subtracting self-reported BMI 10 years prior to consent from all timepoints, k-means clustering for longitudinal data (kml R package29) grouped ALS cases based on their self-reported changes in BMI, for use in ALS survival models. This subtraction step ensured that the k-means procedure clustered exclusively on BMI changes over time, rather than differences in baseline BMI. After considering 2–6 clusters, the selected number of clusters maximized the Calinski and Harabasz criterion30 a measure of between cluster variation relative to within-cluster variation for longitudinal data.31 The distance metric used for clustering was Euclidean distance with Gower adjustment.31

### Survival Analysis

Kaplan Meier plots of survival from diagnosis by cluster were produced. Cox proportional hazards models determined associations between cluster groups and ALS survival, defined as the time from diagnosis to death. Associations were adjusted for sex, age, baseline BMI (i.e., 10 years prior), onset segment, diagnosis rEEC, and time from symptom onset to diagnosis. Proportional hazards assumptions were checked using global and individual Schoenfeld tests with graphical assessment of the rescaled Schoenfeld residuals over time. Due to proportional hazards violations in some models, accelerated failure time (AFT) models were constructed.

### Sensitivity Analyses

Sensitivity analyses for incomplete BMI data (inverse probability weighted models) and non-linear effects of BMI were performed (Supplemental Methods).

For above analyses, a p-value < 0.05 reflected statistical significance.

### Metabolomics Data Analysis

Plasma samples from ALS participants were analyzed by Metabolon (Morrisville, NC) and previously published as case-control analyses.25, 26 Plasma samples were non-fasting as this was deemed not ethical for a large number of ALS participants. Metabolomics analysis included dataset normalization, computing correlations between BMI and metabolites, and selecting metabolites associated with BMI trajectory via least absolute shrinkage and selection operator (lasso) regression (Supplemental Methods). In order to identify highly interconnected metabolic modules further analysis included construction of a partial correlation network using previously published Sparse Partial Correlation algorithm.32,33, 34, followed by consensus clustering35. Finally, group-penalized lasso regression (group lasso) models were created to identify metabolic modules associated with BMI clusters (Supplemental Methods). Group lasso36 is a generalization of lasso regression, which has the advantage of incorporating prior information on the grouping structure of the covariates, i.e., the metabolic modules in this instance. Analyses were performed with R version 4.0.2.

## Results

### Participants

For those with observed BMI at all three timepoints, ALS participants represented a typical patient population, according to onset age, distribution of segment onset, among other variables. Controls (n=266) were slightly younger than cases (n=381) (Table 1). Two ALS participants with an uncertain onset segment and one control with a BMI greater than 100 kg/m2 labeled as an outlier were removed from subsequent analysis.

### BMI Trends in Cases Versus Controls

Lin’s concordance correlation coefficient showed consistency between self-reported and measured BMI values (Supplemental Results). ALS and control participants reported BMI increases in the 10- to 5-year period prior to study entry (Supplemental Figure 1). Unlike controls, however, ALS cases had an overall BMI decrease in the 5-year prior to study entry time window. The age- and sex-adjusted GEE model showed average ALS BMI change from −5 to 0 years was 1.75 kg/m2 (95%CI: 1.35 kg/m2 to 2.16 kg/m2; p<1×10−17), but was only 0.02 kg/m2 for controls (95%CI: −0.35 kg/m2 to 0.40 kg/m2; p=0.9). Thus, ALS participants report BMI loss occurring 5 years before diagnosis/study entry, while control participants had no significant BMI change during the same timeframe. The kml algorithm applied to the ALS participant BMI trajectories identified three clusters, defined as decrease, mild decrease, and increase BMI groups (Supplemental Results, Supplemental Figure 2, Supplemental Table 1).

### Survival Analysis

Unadjusted Kaplan-Meier survival analysis showed decreased absolute median survival times for the decrease BMI cluster (Supplemental Figure 3). Some Cox models violated proportional hazards by Schoenfeld residuals, so AFT models were constructed. After adjusting for age, sex, baseline BMI (i.e., 10 years prior), onset segment, rEEC, and time from symptom onset to diagnosis, participants in the decrease BMI cluster had a 27.1% shorter survival (95%CI: −42.6% to −7.3%; p=0.010) versus the mild decrease group (Table 2, Figure 1). Results were similar in missing BMI data sensitivity analyses and when using base BMI as a categorical variable (see Supplemental Results, Supplemental Figures 4–5, Supplemental Tables 2–5). Interestingly, in sensitivity analyses for interaction effects between baseline BMI and change in BMI over time, ALS participants with an obese baseline BMI and increase BMI trajectory had shorter survival, similar to participants in the decrease BMI trajectory group (Supplemental Table 5).

### Metabolites Associated with BMI Trajectory

Metabolomic differences by BMI cluster (decrease, mild decrease, increase) were investigated for the 207 participants with available previously published untargeted metabolomics.25, 26 The final curated dataset included 607 metabolites from plasma collected near the time of diagnosis. Associations of individual metabolites with BMI trajectory groups are described in the Supplemental Results and Supplemental Tables 6–7.

The partial correlation network was constructed using recently published data from 349 ALS participants,26 of whom 207 were also in this analysis. Including additional samples generated a more informative network since partial correlation methods are sensitive to sample size. The resulting partial correlation network contained 600 metabolites connected by 887 edges (FDR-adjusted p<0.1), of which 31 a negative partial correlation coefficient. Seven metabolites did not have any significant correlations and were not included in the network. Consensus clustering identified 26 metabolic modules spanning 555 highly connected metabolites. The remaining 45 metabolites did not cluster due to poor connectivity. Metabolic module size ranged from 5 to 66 metabolites (Figure 2).

Group lasso selected eight modules containing 152 metabolites, which associated with the decrease and increase BMI clusters (Figure 2, Table 3, Supplementary Table 8), with odds ratios (OR) ranging from 0.92 to 1.1 (Supplemental Table 9). The largest module 1 (47 metabolites) included ceramides and sphingomyelins, of which 36 had OR>1, indicating associations with the increase BMI cluster. The second largest module 2 (30 metabolites) included primary and secondary bile acid metabolites, taurine and its derivatives, AMP, ADP, and sterols. Primary bile acids associated with the increase BMI cluster (OR>1), while most secondary bile acids and taurine metabolites associated with the decrease BMI cluster (OR<1). Module 3 (22 metabolites) primarily contained amino acid and nucleotide metabolites, half of which associated with the decrease BMI cluster. Module 4 (15 metabolites) was composed of plasmalogens, lyso-plasmalogens, and phosphatidylcholines, 11 of which associated with the decrease BMI cluster. Module 5 (13 metabolites) had mostly acyl carnitines, acyl amino acids, and some other amino acid metabolites, which mostly associated with the decrease BMI cluster. The remaining smaller module 6 (13 metabolites; sugar and nucleotide metabolites, xenobiotics, amino-sugar), module 7 and module 8 (6 metabolites each; xenobiotics, cofactors, vitamins, modified amino acids) contained various metabolites.

Overall, these results suggest that unique metabolomic profiles correlate with BMI trends in participants with ALS, especially metabolism centered on ceramides, sphingomyelins, and primary and secondary bile acids.

## Discussion

This study adds to the growing body of evidence that pre-symptomatic BMI loss is linked to ALS risk and survival. We show that ALS participants are characterized by significant BMI loss five years, but not 10 years, prior to study entry versus control participants. A decrease in BMI trajectory was associated with shorter survival in ALS, which also correlated with a distinct metabolomic profile. Our study also suggests that BMI loss may occur during the pre-symptomatic phase of ALS leading up to diagnosis. Several other studies have similarly shown BMI decrease preceding ALS diagnosis, out to 10 years prior to onset5 and even within the decades preceding ALS.6, 9 Although we found BMI trajectories differed over the 10-year window, we found that absolute BMI did not vary between ALS and control participants 10 years before study entry when participants would have had a mean age of 54.9 (ALS) and 51.3 (controls) years. In contrast, other studies report that lower mid-to-late life BMI increases ALS risk,8, 9, 37 although one study reported ALS survival depends on BMI change, not on BMI before or at diagnosis.4 Another recent study suggests that BMI in ALS patients diverges from controls 10 years prior to disease onset.38

Next, we found that that ALS participants with a 10-year decrease BMI trend had shorter survival. Our results are consistent with several studies demonstrating that a drop in BMI prior to ALS diagnosis correlates with poorer survival.4, 5, 9, 39 In particular, analysis of the Piemonte and Valle d’Aosta Register for ALS found that BMI loss at diagnosis was more prognostic of survival than BMI either before or at diagnosis.4 However, since there is literature that BMI is an ALS risk factor,8, 9, 37 we conducted sensitivity analyses to assess the interaction of baseline BMI with BMI trajectory. We found that normal baseline BMI lengthened survival in the decrease BMI trajectory group, whereas obese baseline BMI shortened survival in the increase BMI trajectory group. Baseline BMI only marginally influenced survival in the mild decrease BMI trajectory group. Interestingly, the European Prospective Investigation into Cancer and Nutrition study also showed that obese females had shorter survival that did not reach significance,10 whereas the Piemonte and Valle d’Aosta Register found no impact of BMI on survival.4

The reasons for survival differences by BMI or BMI change in ALS are not known. However, the prevailing theories are related to impaired energy homeostasis,11 with lowered energy intake fighting against higher energy expenditure. Dysphagia is a frequent cause of reduced energy intake, however in ALS BMI loss also occurs independent of dysphagia,4, 39 indicating the presence of significantly elevated energy expenditure. Indeed, hypermetabolism is more frequent in ALS versus control participants and correlates inversely with survival.12 Resting energy expenditure may additionally interact with BMI and fat mass to influence survival in ALS.40, 41

In the current study, we employed data driven network analysis to identify highly interconnected metabolic modules and assessed their correlation with BMI trajectory groups. The largest of these, module 1, contained ceramides (13 species) and sphingomyelins (33 species). The latter were primarily associated with the increase BMI group. We and others previously found that sphingomyelins also differ in analyses of ALS versus control participant plasma.25, 26, 42–45 Further, one recent study reported that higher sphingomyelin levels may correlate with faster disease progression.45 Sphingomyelins are a large class of lipids that have structural roles in cell membranes and lipid rafts, and, through hydrolysis to ceramides, with signaling activity, e.g., pro-apoptotic, excitotoxic, neurotoxic.46, 47 Impaired sphingomyelin metabolism may be an integral factor in ALS as supported by investigations of genetic models.48 Of the 47 metabolites in module 1, only 13 significantly correlated with BMI at diagnosis, suggesting associations of the remaining 34 metabolites with BMI trajectory may be related to the ALS disease process..

The second largest module 2 mostly contained primary and secondary bile acids, which generally associated with the increase BMI trajectory, in addition to metabolites of methionine, cysteine, S-adenosyl methionine, and taurine metabolism and oxidative phosphorylation. Nearly half of the metabolites in this module also significantly correlated with diagnosis BMI (13 species). Bile acids play important roles in nutrient absorption, regulation of cholesterol metabolism, and systemic energy expenditure,49 so the correlation with BMI trajectory herein is unsurprising. Interestingly, although not present in the module, two bile acids ursodeoxycholic and its taurine derivative tauroursodeoxycholic acid (taurursodiol) have shown some efficacy in ALS clinical trials.50–53

Module 3 contained modified amino acids and nucleotide derivatives spanning 22 species evenly split between the decrease and increase BMI groups, of which 9 significantly correlated with diagnosis BMI. Module 4 contained several bioactive lipids, plasmalogens (10 species), lyso-plasmalogens (3 species), and phosphatidylcholines (2 species), which mostly associated with the decrease BMI group, i.e., poorer survival. Only two species were significantly linked to diagnosis BMI. We26 and others42, 45, 54, 55 have previously shown phosphatidylcholines differentiate ALS from control participants, in particular, phosphatidylcholine 36:4.45, 54

Modules 5 and 6 comprised candidates related to energy metabolism. Module 5 contained four short-chain acyl-carnitines, intermediates of, which all save one correlated with the decrease BMI group. We previously reported acyl-carnitines, along with free fatty acids, contributed to the discrimination between ALS versus control participants,25, 26 which we attributed to either dysfunctional or at capacity β-oxidation.56 Modules 6, 7 and 8 contained few metabolites equally divided in their correlation with either the decrease or increase BMI trajectory group, suggesting ALS status may be a stronger determinant of these metabolites than BMI trajectory.

Overall, across some modules, e.g., module 5, there were more metabolites from various biochemical pathways relating to energy utilization (e.g. fatty acid β-oxidation) that are more discerning of ALS versus control participants than of BMI trajectories. These findings suggest that ALS status is an important determinant of energy metabolism. One possibility is that metabolites correlate with fat mass loss in ALS patients,57 an idea supported by studies where ALS polygenic risk associates with body fat percentage in addition to BMI.58, 59 Interestingly, neither creatine nor creatinine were among the metabolites correlating with BMI change or diagnosis BMI, indicating weight changes may be more pronounced for fat mass than muscle mass. However, lacking body composition measures, we could not evaluate this possibility in this study.

This study has limitations. Participants self-reported weight, potentially incurring recall bias; however, Lin’s concordance correlation coefficient was high for participants with available weight, indicating good recall. Our study did not query weight at frequent intervals, so we cannot determine if BMI loss in ALS participants was linear in the 5 years prior to study entry or more pronounced closer to diagnosis. It is also possible we failed to detect an onset in BMI changes between the 10-to-5-year window before diagnosis due to the lack of granular BMI information. Next, we only asked participants to report current height, and use this for BMI calculations at all timepoints. However, such changes in height over the life course are not anticipated to cause bias in statistical models.60 We also did not collect a dietary or physical activity survey for this analysis. Additionally, our metabolomics analysis was untargeted, and thus did not measure all metabolites in every relevant biochemical pathway. While BMI analysis was longitudinal, metabolomics analysis was cross-sectional. Plasma samples for untargeted metabolomics were non-fasted for ethical reasons, as noted in our prior publications.25, 26

In summary, we found that ALS participants have distinct BMI trajectories versus controls, with the most significant BMI drop occurring within 5 years before diagnosis. ALS participants with normal baseline BMI and decrease BMI trajectory, or baseline obese BMI and increase BMI trajectory have shorter survival. BMI trajectories correlate with metabolic changes, especially with sphingomyelins and bile acids.

## Supplementary Material

supinfo

## Acknowledgements

AcknowledgementsWe are indebted to the participants who provided samples. We thank Crystal Pacut, Stacey Jacoby, PhD, Blake Swihart, Jayna Duell, RN, Daniel Burger, Amanda Williams, and Adam Patterson for study support.Funding:National ALS Registry/CDC/ATSDR (1R01TS000289); National ALS Registry/CDC/ATSDR CDCP-DHHS-US (CDC/ATSDR 200-2013-56856); NIEHS K23ES027221; NIEHS R01ES030049; NINDS R01NS127188; NeuroNetwork for Emerging Therapies, University of Michigan; National Center for Advancing Translational Sciences at the National Institutes of Health (UL1TR002240); the NeuroNetwork Therapeutic Discovery Fund, the Peter R. Clark Fund for ALS Research, the Sinai Medical Staff Foundation, Scott L. Pranger.

## Data Availability

Data Availability Statement:Deidentified data may be made available to qualified investigators upon reasonable request.

## References

1. 1.GoutmanSA, HardimanO, Al-ChalabiA, Recent advances in the diagnosis and prognosis of amyotrophic lateral sclerosis. The Lancet Neurology. May 2022;21(5):480–493. doi:10.1016/S1474-4422(21)00465-835334233PMC9513753 [PMID:35334233]
2. 2.GoutmanSA, HardimanO, Al-ChalabiA, Emerging insights into the complex genetics and pathophysiology of amyotrophic lateral sclerosis. The Lancet Neurology. May 2022;21(5):465–479. doi:10.1016/S1474-4422(21)00414-235334234PMC9513754 [PMID:35334234]
3. 3.BenatarM, TurnerMR, WuuJ. Defining pre-symptomatic amyotrophic lateral sclerosis. Amyotrophic lateral sclerosis & frontotemporal degeneration. Aug 2019;20(5–6):303–309. doi:10.1080/21678421.2019.158763430892087PMC6613999 [PMID:30892087]
4. 4.MogliaC, CalvoA, GrassanoM, Early weight loss in amyotrophic lateral sclerosis: outcome relevance and clinical correlates in a population-based cohort. J Neurol Neurosurg Psychiatry. Jun 2019;90(6):666–673. doi:10.1136/jnnp-2018-31961130630957 [PMID:30630957]
5. 5.PeterRS, RosenbohmA, DupuisL, Life course body mass index and risk and prognosis of amyotrophic lateral sclerosis: results from the ALS registry Swabia. Eur J Epidemiol. Oct 2017;32(10):901–908. doi:10.1007/s10654-017-0318-z28975435 [PMID:28975435]
6. 6.NakkenO, MeyerHE, StigumH, HolmoyT. High BMI is associated with low ALS risk: A population-based study. Neurology. Jul 30 2019;93(5):e424–e432. doi:10.1212/WNL.000000000000786131243073 [PMID:31243073]
7. 7.O’ReillyÉJ, WangH, WeisskopfMG, Premorbid body mass index and risk of amyotrophic lateral sclerosis. Amyotroph Lateral Scler Frontotemporal Degener. Apr 2013;14(3):205–11. doi:10.3109/21678421.2012.73524023134505PMC3615420 [PMID:23134505]
8. 8.O’ReillyEJ, WangM, AdamiHO, Prediagnostic body size and risk of amyotrophic lateral sclerosis death in 10 studies. Amyotrophic lateral sclerosis & frontotemporal degeneration. Aug 2018;19(5–6):396–406. doi:10.1080/21678421.2018.145294429658324PMC6423444 [PMID:29658324]
9. 9.MariosaD, BeardJD, UmbachDM, Body Mass Index and Amyotrophic Lateral Sclerosis: A Study of US Military Veterans. Am J Epidemiol. Mar 1 2017;185(5):362–371. doi:10.1093/aje/kww14028158443PMC5860019 [PMID:28158443]
10. 10.GalloV, WarkPA, JenabM, Prediagnostic body fat and risk of death from amyotrophic lateral sclerosis: the EPIC cohort. Neurology. Feb 26 2013;80(9):829–38. doi:10.1212/WNL.0b013e318284068923390184PMC3598455 [PMID:23390184]
11. 11.IoannidesZA, NgoST, HendersonRD, McCombePA, SteynFJ. Altered Metabolic Homeostasis in Amyotrophic Lateral Sclerosis: Mechanisms of Energy Imbalance and Contribution to Disease Progression. Neuro-degenerative diseases. 2016;16(5–6):382–97. doi:10.1159/00044650227400276 [PMID:27400276]
12. 12.SteynFJ, IoannidesZA, van EijkRPA, Hypermetabolism in ALS is associated with greater functional decline and shorter survival. Journal of neurology, neurosurgery, and psychiatry. Oct 2018;89(10):1016–1023. doi:10.1136/jnnp-2017-31788729706605PMC6166607 [PMID:29706605]
13. 13.DupuisL, PradatPF, LudolphAC, LoefflerJP. Energy metabolism in amyotrophic lateral sclerosis. The Lancet Neurology. Jan 2011;10(1):75–82. doi:10.1016/S1474-4422(10)70224-621035400 [PMID:21035400]
14. 14.MariosaD, HammarN, MalmstromH, Blood biomarkers of carbohydrate, lipid, and apolipoprotein metabolisms and risk of amyotrophic lateral sclerosis: A more than 20-year follow-up of the Swedish AMORIS cohort. Annals of neurology. May 2017;81(5):718–728. doi:10.1002/ana.2493628437840 [PMID:28437840]
15. 15.IngreC, ChenL, ZhanY, TermorshuizenJ, YinL, FangF. Lipids, apolipoproteins, and prognosis of amyotrophic lateral sclerosis. Neurology. Apr 28 2020;94(17):e1835–e1844. doi:10.1212/WNL.000000000000932232221024PMC7274849 [PMID:32221024]
16. 16.CirulliET, GuoL, Leon SwisherC, Profound Perturbation of the Metabolome in Obesity Is Associated with Health Risk. Cell Metab. Feb 5 2019;29(2):488–500.e2. doi:10.1016/j.cmet.2018.09.02230318341PMC6370944 [PMID:30318341]
17. 17.HoJE, LarsonMG, GhorbaniA, Metabolomic Profiles of Body Mass Index in the Framingham Heart Study Reveal Distinct Cardiometabolic Phenotypes. PLoS One. 2016;11(2):e0148361. doi:10.1371/journal.pone.014836126863521PMC4749349 [PMID:26863521]
18. 18.KrausWE, PieperCF, HuffmanKM, Association of Plasma Small-Molecule Intermediate Metabolites With Age and Body Mass Index Across Six Diverse Study Populations. J Gerontol A Biol Sci Med Sci. Nov 2016;71(11):1507–1513. doi:10.1093/gerona/glw03126984390PMC6279215 [PMID:26984390]
19. 19.GoutmanSA, BossJ, PattersonA, MukherjeeB, BattermanS, FeldmanEL. High plasma concentrations of organic pollutants negatively impact survival in amyotrophic lateral sclerosis. Journal of neurology, neurosurgery, and psychiatry. Aug 2019;90(8):907–912. doi:10.1136/jnnp-2018-31978530760645PMC6625908 [PMID:30760645]
20. 20.SuFC, GoutmanSA, ChernyakS, Association of Environmental Toxins With Amyotrophic Lateral Sclerosis. JAMA neurology. Jul 1 2016;73(7):803–11. doi:10.1001/jamaneurol.2016.059427159543PMC5032145 [PMID:27159543]
21. 21.YuY, SuFC, CallaghanBC, GoutmanSA, BattermanSA, FeldmanEL. Environmental Risk Factors and Amyotrophic Lateral Sclerosis (ALS): A Case-Control Study of ALS in Michigan. PloS one. Jun 30 2014;9(6):e101186. doi:ARTN e101186 10.1371/journal.pone.010118624979055PMC4076303 [PMID:24979055]
22. 22.GoutmanSA, BossJ, GodwinC, MukherjeeB, FeldmanEL, BattermanSA. Associations of self-reported occupational exposures and settings to ALS: a case-control study. Int Arch Occup Environ Health. Sep 2022;95(7):1567–1586. doi:10.1007/s00420-022-01874-435593931PMC9424174 [PMID:35593931]
23. 23.BrooksBR, MillerRG, SwashM, MunsatTL, World Federation of Neurology Research Group on Motor Neuron D. El Escorial revisited: revised criteria for the diagnosis of amyotrophic lateral sclerosis. Amyotrophic lateral sclerosis and other motor neuron disorders : official publication of the World Federation of Neurology, Research Group on Motor Neuron Diseases. Dec 2000;1(5):293–9. doi:10.1080/14660820030007953611464847 [PMID:11464847]
24. 24.KeysA, FidanzaF, KarvonenMJ, KimuraN, TaylorHL. Indices of relative weight and obesity. J Chronic Dis. Jul 1 1972;25(6):329–43. doi:10.1016/0021-9681(72)90027-64650929 [PMID:4650929]
25. 25.GoutmanSA, BossJ, GuoK, Untargeted metabolomics yields insight into ALS disease mechanisms. Journal of neurology, neurosurgery, and psychiatry. Dec 2020;91(12):1329–1338. doi:10.1136/jnnp-2020-32361132928939PMC7677469 [PMID:32928939]
26. 26.GoutmanSA, GuoK, SavelieffMG, Metabolomics identifies shared lipid pathways in independent amyotrophic lateral sclerosis cohorts. Brain : a journal of neurology. Jan 28 2022;doi:10.1093/brain/awac025PMC976294335088843 [PMID:35088843]
27. 27.LiangKY, ZegerSL. Longitudinal Data-Analysis Using Generalized Linear-Models. Biometrika. Apr 1986;73(1):13–22. doi:DOI 10.1093/biomet/73.1.13
28. 28.HalekohU, HøjsgaardS, YanJ. TheRPackagegeepackfor Generalized Estimating Equations. Journal of Statistical Software. 12/22 2006;15(2):1–11. doi:10.18637/jss.v015.i02
29. 29.GenoliniC, AlacoqueX, SentenacM, ArnaudC. kml and kml3d: R Packages to Cluster Longitudinal Data. 2015. 2015-06-01 2015;65(4):34. doi:10.18637/jss.v065.i04
30. 30.CalinskiT, HarabaszJ. A dendrite method for cluster analysis. Communications in Statistics - Theory and Methods. 1974/01/01 1974;3(1):1–27. doi:10.1080/03610927408827101
31. 31.GowerJC. Some Distance Properties of Latent Root and Vector Methods Used in Multivariate Analysis. Biometrika. 1966;53(3/4):325–&. doi:DOI 10.1093/biomet/53.3-4.325
32. 32.BasuS, DurenW, EvansCR, BurantCF, MichailidisG, KarnovskyA. Sparse network modeling and metscape-based visualization methods for the analysis of large-scale metabolomics data. Bioinformatics. May 15 2017;33(10):1545–1553. doi:10.1093/bioinformatics/btx01228137712PMC5860222 [PMID:28137712]
33. 33.IyerGR, WiggintonJ, DurenW, Application of Differential Network Enrichment Analysis for Deciphering Metabolic Alterations. Metabolites. Nov 24 2020;10(12)doi:10.3390/metabo10120479PMC776124333255384 [PMID:33255384]
34. 34.MaJ, KarnovskyA, AfshinniaF, Differential network enrichment analysis reveals novel lipid pathways in chronic kidney disease. Bioinformatics. Sep 15 2019;35(18):3441–3452. doi:10.1093/bioinformatics/btz11430887029PMC6748777 [PMID:30887029]
35. 35.LancichinettiA, FortunatoS. Consensus clustering in complex networks. Sci Rep. 2012/03/27 2012;2(1):336. doi:10.1038/srep0033622468223PMC3313482 [PMID:22468223]
36. 36.FriedmanJ, HastieT, TibshiraniR. A Note on the Group Lasso and a Sparse Group Lasso. arXiv:10010736. 01/05 2010;22
37. 37.HuismanMH, SeelenM, van DoormaalPT, Effect of Presymptomatic Body Mass Index and Consumption of Fat and Alcohol on Amyotrophic Lateral Sclerosis. JAMA neurology. Oct 2015;72(10):1155–62. doi:10.1001/jamaneurol.2015.158426280944 [PMID:26280944]
38. 38.WestenengHJ, van VeenhuijzenK, van der SpekRA, Associations between lifestyle and amyotrophic lateral sclerosis stratified by C9orf72 genotype: a longitudinal, population-based, case-control study. The Lancet Neurology. May 2021;20(5):373–384. doi:10.1016/S1474-4422(21)00042-933894192 [PMID:33894192]
39. 39.Janse van MantgemMR, van EijkRPA, van der BurghHK, Prognostic value of weight loss in patients with amyotrophic lateral sclerosis: a population-based study. J Neurol Neurosurg Psychiatry. Aug 2020;91(8):867–875. doi:10.1136/jnnp-2020-32290932576612 [PMID:32576612]
40. 40.NakamuraR, KuriharaM, OgawaN, Prognostic prediction by hypermetabolism varies depending on the nutritional status in early amyotrophic lateral sclerosis. Sci Rep. Sep 9 2021;11(1):17943. doi:10.1038/s41598-021-97196-534504168PMC8429558 [PMID:34504168]
41. 41.JésusP, FayemendyP, NicolM, Hypermetabolism is a deleterious prognostic factor in patients with amyotrophic lateral sclerosis. Eur J Neurol. Jan 2018;25(1):97–104. doi:10.1111/ene.1346828940704 [PMID:28940704]
42. 42.BjornevikK, ZhangZ, O’ReillyÉJ, Prediagnostic plasma metabolomics and the risk of amyotrophic lateral sclerosis. Neurology. Apr 30 2019;92(18):e2089–e2100. doi:10.1212/wnl.000000000000740130926684PMC6512888 [PMID:30926684]
43. 43.LawtonKA, BrownMV, AlexanderD, Plasma metabolomic biomarker panel to distinguish patients with amyotrophic lateral sclerosis from disease mimics. Amyotrophic lateral sclerosis & frontotemporal degeneration. Sep 2014;15(5–6):362–70. doi:10.3109/21678421.2014.90831124984169 [PMID:24984169]
44. 44.LawtonKA, CudkowiczME, BrownMV, Biochemical alterations associated with ALS. Amyotrophic lateral sclerosis : official publication of the World Federation of Neurology Research Group on Motor Neuron Diseases. Jan 2012;13(1):110–8. doi:10.3109/17482968.2011.61919722117131 [PMID:22117131]
45. 45.SolJ, JovéM, PovedanoM, Lipidomic traits of plasma and cerebrospinal fluid in amyotrophic lateral sclerosis correlate with disease progression. Brain Commun. 2021;3(3):fcab143. doi:10.1093/braincomms/fcab14334396104PMC8361390 [PMID:34396104]
46. 46.CutlerRG, PedersenWA, CamandolaS, RothsteinJD, MattsonMP. Evidence that accumulation of ceramides and cholesterol esters mediates oxidative stress-induced death of motor neurons in amyotrophic lateral sclerosis. Annals of neurology. Oct 2002;52(4):448–57. doi:10.1002/ana.1031212325074 [PMID:12325074]
47. 47.WangG, BieberichE. Sphingolipids in neurodegeneration (with focus on ceramide and S1P). Adv Biol Regul. Dec 2018;70:51–64. doi:10.1016/j.jbior.2018.09.01330287225PMC6251739 [PMID:30287225]
48. 48.MohasselP, DonkervoortS, LoneMA, Childhood amyotrophic lateral sclerosis caused by excess sphingolipid synthesis. Nat Med. Jul 2021;27(7):1197–1204. doi:10.1038/s41591-021-01346-134059824PMC9309980 [PMID:34059824]
49. 49.Di CiaulaA, GarrutiG, Lunardi BaccettoR, Bile Acid Physiology. Ann Hepatol. Nov 2017;16(Suppl. 1: s3-105.):s4–s14. doi:10.5604/01.3001.0010.549329080336 [PMID:29080336]
50. 50.PaganoniS, MacklinEA, HendrixS, Trial of Sodium Phenylbutyrate-Taurursodiol for Amyotrophic Lateral Sclerosis. The New England journal of medicine. Sep 3 2020;383(10):919–930. doi:10.1056/NEJMoa191694532877582PMC9134321 [PMID:32877582]
51. 51.PaganoniS, HendrixS, DicksonSP, Long-term survival of participants in the CENTAUR trial of sodium phenylbutyrate-taurursodiol in amyotrophic lateral sclerosis. Muscle & nerve. Jan 2021;63(1):31–39. doi:10.1002/mus.2709133063909PMC7820979 [PMID:33063909]
52. 52.ParryGJ, RodriguesCM, AranhaMM, Safety, tolerability, and cerebrospinal fluid penetration of ursodeoxycholic Acid in patients with amyotrophic lateral sclerosis. Clin Neuropharmacol. Jan-Feb 2010;33(1):17–21. doi:10.1097/WNF.0b013e3181c4756919935406 [PMID:19935406]
53. 53.MinJH, HongYH, SungJJ, KimSM, LeeJB, LeeKW. Oral solubilized ursodeoxycholic acid therapy in amyotrophic lateral sclerosis: a randomized cross-over trial. J Korean Med Sci. Feb 2012;27(2):200–6. doi:10.3346/jkms.2012.27.2.20022323869PMC3271295 [PMID:22323869]
54. 54.BlascoH, Veyrat-DurebexC, BoccaC, Lipidomics Reveals Cerebrospinal-Fluid Signatures of ALS. Sci Rep. Dec 15 2017;7(1):17652. doi:10.1038/s41598-017-17389-929247199PMC5732162 [PMID:29247199]
55. 55.ChangKH, LinCN, ChenCM, Altered Metabolic Profiles of the Plasma of Patients with Amyotrophic Lateral Sclerosis. Biomedicines. Dec 18 2021;9(12)doi:10.3390/biomedicines9121944PMC869901834944760 [PMID:34944760]
56. 56.van EunenK, SimonsSM, GerdingA, Biochemical competition makes fatty-acid β-oxidation vulnerable to substrate overload. PLoS Comput Biol. 2013;9(8):e1003186. doi:10.1371/journal.pcbi.100318623966849PMC3744394 [PMID:23966849]
57. 57.LeeI, KazamelM, McPhersonT, Fat mass loss correlates with faster disease progression in amyotrophic lateral sclerosis patients: Exploring the utility of dual-energy x-ray absorptiometry in a prospective study. PLoS One. 2021;16(5):e0251087. doi:10.1371/journal.pone.025108733956876PMC8101939 [PMID:33956876]
58. 58.LiC, OuR, WeiQ, ShangH. Shared genetic links between amyotrophic lateral sclerosis and obesity-related traits: a genome-wide association study. Neurobiol Aging. Jun 2021;102:211 e1–211 e9. doi:10.1016/j.neurobiolaging.2021.01.02333640203 [PMID:33640203]
59. 59.ZhangL, TangL, HuangT, FanD. Life Course Adiposity and Amyotrophic Lateral Sclerosis: A Mendelian Randomization Study. Annals of neurology. Mar 2020;87(3):434–441. doi:10.1002/ana.2567131916305 [PMID:31916305]
60. 60.FernihoughA, McGovernME. Physical stature decline and the health status of the elderly population in England. Econ Hum Biol. Jan 2015;16:30–44. doi:10.1016/j.ehb.2013.12.01024508050PMC4103973 [PMID:24508050]
