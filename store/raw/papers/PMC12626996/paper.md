---
pmid: "41268542"
pmc: "PMC12626996"
doi: "10.3389/fimmu.2025.1662197"
title: "Tofacitinib extends survival in a mouse model of ALS through NK cell-independent mechanisms"
journal: "Frontiers in Immunology"
year: 2025
authors:
  - name: "Baird Lillia A."
    affiliations:
      - "1 Department of Neurology, University of Michigan, Ann Arbor, MI, United States"
      - "2 Graduate Program in Immunology, University of Michigan, Ann Arbor, MI, United States"
  - name: "Teener Samuel J."
    affiliations:
      - "1 Department of Neurology, University of Michigan, Ann Arbor, MI, United States"
  - name: "Webber-Davis Ian F."
    affiliations:
      - "1 Department of Neurology, University of Michigan, Ann Arbor, MI, United States"
  - name: "Carter Andrew D."
    affiliations:
      - "1 Department of Neurology, University of Michigan, Ann Arbor, MI, United States"
  - name: "Huang Fang"
    affiliations:
      - "3 School of Medicine & Health Sciences, University of North Dakota, Grant Forks, ND, United States"
  - name: "Jang Dae-Gyu"
    affiliations:
      - "1 Department of Neurology, University of Michigan, Ann Arbor, MI, United States"
  - name: "Famie Joshua P."
    affiliations:
      - "1 Department of Neurology, University of Michigan, Ann Arbor, MI, United States"
  - name: "Piecuch Caroline E."
    affiliations:
      - "1 Department of Neurology, University of Michigan, Ann Arbor, MI, United States"
  - name: "Guo Kai"
    affiliations:
      - "1 Department of Neurology, University of Michigan, Ann Arbor, MI, United States"
  - name: "Feldman Eva L."
    affiliations:
      - "1 Department of Neurology, University of Michigan, Ann Arbor, MI, United States"
  - name: "Murdock Benjamin J."
    affiliations:
      - "1 Department of Neurology, University of Michigan, Ann Arbor, MI, United States"
---

# Tofacitinib extends survival in a mouse model of ALS through NK cell-independent mechanisms

## Abstract

### Background

Amyotrophic lateral sclerosis (ALS) is a lethal neurodegenerative disease with few treatment options, rendering the development of new, effective therapeutics of critical importance. The immune system plays a substantial role in ALS pathology, with multiple cell populations implicated in disease progression. Natural killer (NK) cells are innate immune cells that accumulate in the brain and spinal cord during ALS, increasing neuroinflammation and killing motor neurons. Depleting NK cells extends survival in mouse models of ALS. Tofacitinib, an FDA-approved janus kinase (Jak) and signal transducer and activator (STAT) pathway inhibitor, reduces NK cytotoxicity and decreases overall levels in peripheral blood and may represent a potential ALS therapy. Therefore, we aimed to evaluate the effects of tofacitinib treatment on survival and phenotype in an ALS mouse model. Additionally, we sought to determine the impact of dose and regimen on efficacy.

### Methods

SOD1 G93A mice, the most used rodent model of ALS, were treated with low- (5 mg/kg) and high-dose (30 mg/kg) tofacitinib following a prevention regimen, an intervention regimen, or a drug-cycling regimen, with survival being the primary outcome. Symptom onset was assessed via body weight, agility, and grip strength measurements. At end-stage disease (i) motor neurons and neuromuscular junctions were counted, (ii) immune populations were quantified via flow cytometry in peripheral blood and spinal cord, (iii) microglial surface marker expression was quantified to assess neuroinflammation, and (iv) bulk RNA-seq was performed on spinal cord.

### Results

Low-dose, but not high-dose, tofacitinib significantly increased survival and delayed weight loss. Notably, beginning treatment before symptom onset (prevention) did not offer any survival advantage over the intervention nor cycling regimen; further analyses were pooled by dose. There were no differences in motor neuron or neuromuscular junction counts. Peripheral NK and CD8+ T cells were decreased dose-dependently. Interestingly, spinal cord infiltrating NK cells increased with low-dose tofacitinib, though no other changes in neuroinflammation were observed. RNA-seq revealed that low-dose tofacitinib treatment reversed the dysregulation of multiple immune and metabolic pathways.

### Conclusions

These data support the repurposing of tofacitinib as a potential ALS treatment.

## Introduction

Amyotrophic lateral sclerosis (ALS) is a lethal neurodegenerative disease characterized by the destruction of upper and lower motor neurons in the central nervous system (1). Individuals with ALS initially experience muscle weakness with progressive loss in their ability to speak, eat, move, and, eventually, breathe. Death typically occurs 2–4 years from the time of diagnosis. Despite the rapid and ultimately lethal nature of ALS, only a handful of treatments of limited efficacy exist (2), necessitating the development of new treatment options.

The immune system plays a role in ALS pathology in both humans afflicted with the disease and mouse models (3–5). In humans, many immune cell types and pathways in peripheral blood are associated with ALS survival and progression, including monocytes, neutrophils, CD4+ T cells, and natural killer (NK) cells (6–17). Multiple postmortem studies also report corresponding immune infiltration into human ALS spinal cord tissue (10, 18), findings that have been replicated in mouse models (19–21). More recently, we showed that changes in peripheral immune markers occur upstream of clinical changes, reinforcing the idea that the immune system plays an active role in shaping ALS pathology (6). In mice, the role of the immune system in ALS is even more evident, as manipulating specific immune cells can slow or accelerate disease progression (7, 18, 21–27). Together, these data demonstrate that the immune system is a viable therapeutic target in ALS; however, global immune suppression has proven ineffective or accelerated disease, indicating that target-specific immunotherapies against detrimental immune populations and pathways are needed (28–32).

NK cells are a promising target for focused immunotherapy for ALS. These innate immune cells are responsible for destroying cancerous, infected, and damaged cells in the body (33). Typically excluded from the central nervous system, NK cells accumulate in affected regions of the spinal cord and motor cortex in ALS (7, 18), exacerbating neuroinflammation, polarizing microglia to a pro-inflammatory phenotype, and decreasing regulatory T cell (Treg) numbers (18). Moreover, NK cells are cytotoxic to ALS neurons in vitro (34), and their depletion extends the lifespan of ALS mice (7). Tofacitinib, an FDA-approved janus kinase (Jak) and signal transducer and activator (STAT) pathway inhibitor, preferentially inhibits Jak1/3 primarily utilized by NK cells (35). We recently demonstrated that tofacitinib can inhibit NK cell interferon-gamma production, suppress cytotoxicity, and decrease overall NK cell levels in the peripheral blood of mice in a dose-dependent manner (34). These findings suggest that suppression of NK cell function by tofacitinib treatment may slow ALS progression.

The aims of this study were to test the efficacy of tofacitinib in mutant SOD1 G93A mice, the most used rodent model of ALS. Both male and female mice were included, as we previously showed sex differences in the immune mechanisms of ALS, particularly with NK cells (7). Low (5 mg/kg) and high (30 mg/kg) dosages were examined, as tofacitinib’s effects can be dose-dependent (34). For each dose, three treatment regimens were compared: daily prevention beginning before symptom onset, daily intervention beginning near disease onset, and a cycle beginning before symptom onset consisting of one week on tofacitinib and one week without treatment (36). The cycle regimen was designed to target NK cells while sparing protective Tregs; T cell numbers and function recover more rapidly after tofacitinib is discontinued compared to NK cells, and prolonged tofacitinib treatment disproportionally affects Tregs (37–39). Low-dose, but not high-dose, tofacitinib increased survival and delayed weight loss in ALS mice compared to untreated mice. Notably, the treatment regimen had little effect on survival or symptoms. Peripheral NK cell and CD8+ T cells were reduced dose-dependently. Interestingly, low-dose tofacitinib increased NK cell numbers in the spinal cord, though other sources of neuroinflammation were not increased, and RNA-seq analysis found that tofacitinib reversed changes seen in multiple pathways in ALS spinal cord. Together, these results suggest tofacitinib slows ALS progression via NK cell-independent mechanisms and supports the continued study of tofacitinib and other JAK-STAT inhibitors for treating ALS.

## Materials and methods

### Reagents

Phosphate-buffered saline (PBS), Roswell Park Memorial Institute (RPMI) media, and sodium azide were purchased from Thermo Fisher Scientific (Waltham, MA). Ammonium chloride, potassium bicarbonate, ethylenediaminetetraacetic acid (EDTA), and heat-inactivated fetal bovine serum (FBS) were purchased from Millipore-Sigma (St. Louis, MO). Optimal cutting temperature (O.C.T.) medium was purchased from Sakura (Torrance, CA).

4% Paraformaldehyde (PFA) solution was prepared from powder (Millipore-Sigma) in PBS. Red blood cell lysis buffer consisted of 150 mM ammonium chloride, 10 mM potassium bicarbonate, 0.1 mM EDTA, and 14 mM 4-(2-hydroxyethyl)-1-piperazineethanesulfonic acid (HEPES) (Corning, Corning, NY) in water. Flow cytometry buffer consisted of 2% FBS and 154 µM sodium azide in PBS.

### Mouse model

Mice for this study were purchased from Jackson Laboratory (Bar Harbor, ME) and included male and female low-copy SOD1 G93A ALS mice (B6.Cg-Tg(SOD1*G93A)1Gur/J; Jackson Stock #004435) as well as non-carrier, wild-type (WT) littermates. All mice were housed under specific pathogen-free conditions in a dedicated facility maintained at 20 ± 2°C with a 12/12-hour light/dark cycle. Animals were fed ad libitum either AIN-76A rodent diet (WT and untreated ALS mice) or chow containing tofacitinib (Research Diets, New Brunswick, NJ). Three separate cohorts with staggered birth dates were used to ensure reproducibility. Eight different treatment groups were assessed: an untreated ALS group (UT) to serve as a control, three low-dose treated ALS mouse groups (prevention, intervention, cycle; see below and Figure 1A ), three high-dose treated ALS mouse groups (prevention, intervention, cycle), and an untreated WT group to serve as a reference ( Supplementary Table S1 ). Each cohort was composed of both male and female mice, as we have previously observed sex-based differences in immune mechanisms that contribute to ALS progression (7, 10, 19). All mouse studies were performed in accordance with University of Michigan Institutional Animal Care & Use Committee approved protocols (#PRO00010247). Mice were monitored daily by veterinary staff with additional checks by lab personnel at later stages of disease. All studies were conducted in accordance with the United States Public Health Service’s policy on Humane Care and Use of Laboratory Animals.

> **Figure 1: Survival of tofacitinib-treated and untreated SOD1 G93A mice. (A) SOD1 G93A mice were administered tofacitinib through chow formulated to deliver 5 mg/kg (low-dose) or 30 mg/kg (high-dose) daily. Tofacitinib chow was given following three regimens: continuously beginning at 60 days of age (prevention), continuously beginning at 90 days of age (intervention), or weekly cycled regimen beginning at 60 days of age alternating between tofacitinib and normal chow (cycle). Untreated SOD1 G93A mice on normal chow served as controls. (B) Survival was compared between untreated ALS mice and all six tofacitinib dose-regimen combinations. (C) Survival was compared between regimens for low-dose and high-dose tofacitinib. (D, E) Survival was compared by tofacitinib dose alone (N = 129, 29–60 mice per group).**

### Power calculations and randomization

Cohort sizes were determined by doubling cohort sizes from our previous study examining the role of NK cells in ALS, which found a near-significant (p = 0.0615) survival effect (7). Researchers were blinded to drug regimen for immunohistochemistry quantification and immunophenotyping analysis. Half of all animals were used for flow cytometry immunophenotyping and half for RNA-Seq analysis; collection for each type of analysis was alternated in each treatment group with the death of each animal to ensure that samples evenly covered the entire window in which animals reached the terminal endpoint of disease.

### Tofacitinib treatment

Tofacitinib-treated mice received either low-dose (5 mg/kg) or high-dose (30 mg/kg) tofacitinib in specially formulated mouse chow, as previously described (34). Treated mice were placed on one of three treatment schedules: a preventative daily treatment beginning at 60 days of age, an intervention daily treatment beginning at 90 days of age, and a weekly cycled regimen beginning at 60 days of age alternating between tofacitinib and normal chow ( Figure 1A ). All data were generated from at least 2 separate cohorts apart from high-dose prevention and intervention treatments which were discontinued due to lack of efficacy ( Supplementary Table S1 ).

### Survival

All ALS mice were allowed to reach the terminal endpoint (ca. 160 days) and euthanized when they were no longer able to right themselves after 10 seconds (7). Age-matched WT mice were sacrificed in parallel to provide data at matching timepoints for RNA-seq analysis. Mice were euthanized using a lethal dose of pentobarbital (Vortech Pharmaceutical, Dearborn, MI) followed by exsanguination to ensure euthanasia.

### Physical phenotyping

#### Weight

SOD1 G93A and WT mice were weighed weekly until the terminal endpoint of disease.

#### Grip strength

Forelimb grip strength was evaluated biweekly beginning at 35 days of age for each animal using a grip strength meter with a single sensor and a standard pull bar and software (Columbus Instruments, Columbus, OH) (19). For each assessment the peak force (g) was recorded in three consecutive trials of three tests each, averaged, and normalized to body weight (g) obtained the same day to report an average grip strength. Grip strength was not evaluated for cohort 3.

#### Rotarod

Motor function was assessed using a Rotamex-5 rotarod instrument (Columbus Instruments) (7). Mice began training 4 days after arrival, and measurements were performed biweekly beginning at 35 days of age. Mice were acclimated before trials with 5 rpm for 5 min; assessments were performed starting at 0 rpm and increasing by 0.1 rpm/s to a maximum of 30 rpm over 5 min. Time to fall was recorded for 3 trials per mouse with 10-min rest intervals between trials. Values for each trial were averaged to generate a single final value for analysis. Rotarod was not evaluated for cohort 3.

### Sample collection

#### Blood

Following euthanasia, the abdominal and thoracic cavity were opened and blood was collected from the vena cava in a 1 mL syringe (BD Biosciences, Franklin Lakes, NJ), transferred to an EDTA vacutainer (BD Biosciences), and stored on ice until flow cytometry processing (< 1 h).

#### Spinal cord

Following blood collection, the circulatory system was perfused with cold PBS, and the spinal cord from C6 to L6 was excised. C6-T12 was either kept on ice in RPMI until flow cytometry processing (< 1 h) or flash frozen in liquid nitrogen and stored at -80°C until processing for RNA-seq. L1-L6 was placed in PFA for immunohistochemistry.

#### Muscle

Following blood collection and perfusion, the gastrocnemius and tibialis anterior were isolated from the left rear leg, flash frozen in liquid nitrogen, and stored at -80°C until time of analysis.

### Immunohistochemistry

#### Spinal cord

Lumbar spinal cord (L1-L6) segments were processed and analyzed as previously described (19). Briefly, spinal cord segments were fixed in 4% PFA for 24 h then moved through a sucrose gradient before being embedded in O.C.T. medium. Blocks were stored at -80°C until cryostat sectioning, after which 14 µm sections were mounted and stained using standard hematoxylin and eosin (H&E) methods and imaged with an Olympus BX43 microscope (Olympus USA, Center Valley, PA). Motor neurons with an area greater than 300 µm2 were counted from 5–6 sections per animal by a blinded observer.

#### Neuromuscular junctions

Muscles were processed and analyzed as previously described (19). Briefly, flash-frozen gastrocnemius and tibialis anterior muscles were embedded in O.C.T. medium and stored at -80°C before preparing 14 µm cryostat sections. Sections were stained for motor endplates, indicated by acetylcholinesterase staining using 5-bromoindoxyl acetate, and for nerve fibers [anti-neurofilament (Millipore-Sigma)], mounted, and imaged with an Olympus BX43 microscope (Olympus USA, Center Valley, PA). NMJs, defined as colocalization of motor endplates and nerve fibers, were counted from 4 sections per muscle per mouse by a blinded observer.

### Flow cytometry

#### Blood

Blood was processed as previously described (19). Briefly, blood was lysed, washed 3 times, and kept in flow cytometry buffer on ice until staining. Cells were counted using a hemacytometer to determine total cell numbers. Cells/µL was calculated by dividing the total cell number with the volume of blood used (µL). Samples were excluded from analysis if they had more than 2x105 cells/µL, 4 times the average white blood cell count for 16-week-old C57BL/6J reported by Jackson Laboratory (Bar Harbor, ME).

#### Spinal cord

Spinal cord was processed as previously described (7, 19). Briefly, isolated thoracic spinal cord (C6-T12) was mechanically and enzymatically dissociated and pressed through a cell strainer. Myelin and debris were removed via Percoll (Cytiva) gradient, and the resulting single cell suspension was washed before staining.

#### Staining and analysis

Cells were treated with Fc blocking antibody (BioLegend, San Diego, CA) for 20 minutes, stained with a panel of antibodies for 30 minutes ( Supplementary Table S2 ), washed, and fixed in stabilizing fixative (BD Biosciences) before analysis on a BD Fortessa. Gating was performed as previously described and summarized in Supplementary Table S2 (7, 19). Microglial size was assessed using forward scatter (FSC), and mean fluorescence intensity (MFI) of CD11c and F4/80 on microglia were normalized to the MFI of microglia stained with a full minus multiple (FMM) panel to account for run-to-run variation. Absolute numbers of cells in blood were calculated using the total cell number and the percentage of each population.

### RNA-seq

#### RNA isolation and sequencing

Following isolation, thoracic (C6-T12) spinal cords were flash frozen in liquid nitrogen and stored at -80°C until RNA extraction. Samples from all cohorts were processed and submitted together after the last cohort was processed to prevent run-to-run variation. Spinal cords were mechanically dissociated before undergoing a TRIzol-chloroform RNA isolation, followed by a clean-up and concentration kit (Norgen Biotek, Thorold, Ontario). Multiplex amplification was used to prepare cDNA with a paired-end read length of 100 bases using an Illumina HiSeq 2000 (Illumina, Inc., San Diego, CA, USA). Library preparation and next generation sequencing were performed by the Advanced Genomics Core at the University of Michigan.

#### RNA-seq data processing

Trimmomatic software was used to remove low-quality reads (Q<30) and sequencing adapters from raw reads (40). The clean reads were subsequently mapped to the mouse reference genome (GRCm38) using HISAT2 (41). The unique mapped reads to mouse genes were summarized with featureCounts (42). Principal component analysis assessed clustering by cohort and sex. If clusters were separated, this was corrected using the ComBat-Seq function from the sva package (V.3.42.0), considering the cohort as a known batch variable (43).

#### Differential gene expression identification

DESeq2 identified differentially expressed genes (DEGs) with a cutoff of p < 0.05 and |log2(fold-change)| > 1 (44). Shared and unique DEGs were determined using our in-house gene-set overlap analysis R package, VennDetail (https://github.com/hurlab/VennDetail).

#### Functional enrichment analysis

The functional enrichment analysis of the Kyoto Encyclopedia of Genes and Genomes (KEGG) and gene set enrichment analysis (GSEA) were performed using our in-house richR package (https://github.com/hurlab/richR). Significant pathways were identified with a p-value <0.05 for KEGG enrichment GSEA.

### Collection of RNA from fixed spinal cord tissue

RNA was collected from fixed spinal cord sections using the RNeasy FFPE kit (Qiagen) as per the manufacturer’s instructions. In brief, OCT was thawed and carefully removed from the tissue section. Tissue was minced and washed to remove additional OCT. After washing, the tissue was incubated with PKD buffer and proteinase K, centrifuged, and the supernatant collected. The supernatant was incubated with DNase booster buffer and DNase 1, then buffer and 100% ethanol were added and the supernatant transferred to RNeasy spin columns. RPE buffer was added and columns were spun multiple times to wash the sample before and RNA was eluted using RNase-free H2O. Following RNA quantification, samples were frozen at -80° C until time of qRT-PCR analysis.

### Cell culture

Validation studies examining the impact of tofacitinib treatment on NK cell function were performed as previously described using an NK cell line (NK-92, ATCC Cat# CRL-2408) (34). Three concentrations of tofacitinib were used: 15.62 ng/ml (previous in vitro concentration), 80 ng/ml (low-dose), and 530 ng/ml (high-dose). Concentrations were calculated based on the mg/kg administered to each mouse divided by the average blood volume (1.5 ml) per mouse. Monocultures of NK-92 cells were cultured overnight with IL-15 stimulation alone (2.33 nM, PeproTech) or with IL-15 stimulation in conjunction with tofacitinib treatment, then cells were collected, washed, and frozen at -80° C until time of analysis. Co-cultures with K-562 cancer cells (ATCC Cat# CCL-243) were conducted at a 10:1 ratio for four hours with IL-15 stimulation alone or with tofacitinib treatment. Following co-culture, cells were collected, washed and RNA isolated using the RNeasy isolation kit (Qiagen) and frozen at -80° C until time of analysis.

### Quantitative real-time PCR

Gene expression in NK-92 cell pellets and spinal cord tissue sections was quantitated using qRT-PCR as previously described (34). In brief, cDNA was first generated using iScript Reverse Transcription Supermix (Bio-Rad) as per the manufacturer’s instructions, run in a ProFlex PCR Thermal Cycler (Applied Biosystems). Next, qPCR reactions were run in triplicate in a StepOnePlus System (Applied Biosystems) using TaqMan Universal PCR Master Mix (Applied Biosystems). For NK-92 cells, probes for IL-10 (Hs00961622_m1), TNF-α (Hs00174128_m1), and IFN-γ (Hs99999041_m1) were used, multiplexed with β-actin (Hs01060665_g1) serving as a control. CT values were used to calculate ΔCT and ΔΔCT using the housekeeping gene and IL-15-alone samples. For spinal cord samples, probes for Btnl10 (Mm00507067_m1), Ctsg (Mm00456011_m1), and Elane (Mm00469310_m1) were used, with Ywhaz (Mm03950126_s1) serving as a control. CT values were used to calculate ΔCT and ΔΔCT using the housekeeping gene and WT samples.

### Western blots

Western blot analysis was performed as previously described to examine STAT3 and STAT5 phosphorylation (34). In brief, cell pellets were lysed in RIPA buffer (Thermo Fisher Scientific), and protein was isolated. Blots were prepared via SDS-PAGE in 10% acrylamide gels, transferred to Immobilon-FL PDVF membranes (Millipore), and immunoblotted with Phospho-STAT3 antibody (Cell Signaling Technology, Cat# 9145) or Phospho-STAT5 antibody (AbCam, Cat# ab32364). Anti-tubulin (Abcam, Cat #ab6160) was used as a control.”

### Statistics

#### Basic statistics

Data were assessed for normality by Shapiro-Wilk test. Three or more groups at the endpoint of disease with normally distributed data were analyzed by ANOVA and a post-hoc Tukey’s test was performed for significant comparisons. Three or more groups with non-normally distributed data were analyzed by Kruskal-Wallis and a post-hoc Dunn’s test was performed for significant comparisons with p-values corrected for multiple comparisons using Bonferroni correction.

#### Controlling for cohort effects

Data were assessed to determine if cohorts were a significant confounding factor. Untreated ALS mice were used to identify differences between cohorts, and corrections were then applied to all mouse groups ( Supplementary Figure S1 ). A significant cohort effect was observed for body weight, motor neuron count, and immune markers in the CNS, including CD4+ T cells, neutrophils, microglial size (FSC), and microglial CD11c expression. Body weight linear mixed model analysis was adjusted for cohort variation. Motor neuron count, spinal CD4+ T cells, and spinal neutrophils were normalized by dividing values by the average values for untreated mice in that cohort, then multiplying by the average of all untreated mice. Microglial FSC and CD11c were normalized by dividing values by the average values for untreated mice in that cohort.

#### Survival

Survival curves for each treatment group were generated using Kaplan-Meier methods and significance was assessed using a log-rank test.

#### Physical phenotyping

Segmented linear mixed models were used to determine the inflection point when loss of function began or accelerated for each group of mice, including loss of weight, grip strength, and agility. Body weight percentage was calculated using the body weight at 60 days of age as baseline.

#### Covariates

Where appropriate, the cohort of the mice was used as a covariate.

## Results

### Low-dose tofacitinib extends survival in ALS mice

To test whether tofacitinib can slow the rate of ALS progression and reduce neuroinflammation, we treated SOD1 G93A ALS mice orally with tofacitinib pressed into chow at low (5 mg/kg) or high (30 mg/kg) doses, which we compared to untreated SOD1 G93A mice. We tested 3 separate treatment regimens for each tofacitinib dose: a preventative model starting at 60 days of age before symptom onset, an intervention model starting at 90 days of age following initial symptom onset, and an intermittent “cycle” regimen where mice were placed on tofacitinib chow or control chow on alternate weeks starting at 60 days of age ( Figure 1A ).

First, we examined the impact of tofacitinib dose and regimen on ALS survival. Low-dose tofacitinib significantly extended survival of ALS mice compared to untreated control ALS mice in the intervention (6.2 day increase; p = 0.02) and cycle (7.3 day increase, p = 0.004) regimens and showed a trend towards improvement in the prevention regimen (p = 0.06; Figure 1B ). In contrast, no high-dose tofacitinib regimen increased ALS mouse survival, with prevention and intervention paradigms trending towards a decrease in survival. Consequently, based on the findings in the first cohort, high-dose prevention and intervention treatment groups were discontinued for the remainder of the study. Slight differences were observed between male and female mice, though patterns were consistent throughout ( Supplementary Figure S2 ). Direct comparisons of treatment regimens did not find differences for either low- or high-dose tofacitinib ( Figures 1C, D ). Thus, subsequent analyses pooled dosage groups to increase power and facilitate interpretation. Results were consistent in this combined analysis: low-dose, but not high-dose, tofacitinib significantly increased survival ( Figure 1E ). Together, these data suggest that low-dose tofacitinib improves ALS survival.

### Tofacitinib delays weight loss but does not improve end-stage motor neuron or NMJ counts

Next, we explored whether tofacitinib improves physical phenotypes during ALS, assessed via change point in a linear mixed-model analysis of the decline in body weight, grip strength, and agility, as well as the end-stage motor neuron and NMJ counts. Low-dose tofacitinib significantly delayed the onset of weight loss (7.6 days) in ALS mice but did not impact agility or grip strength ( Figure 2A ). Regimen had a moderate effect, with the onset of weight loss significantly delayed in mice on the low-dose cycle regimen and slightly, but not significantly, hastened with high-dose intervention ( Figure 2B , Supplementary Figure S3A ). Interestingly, male, but not female, mice receiving high-dose tofacitinib on the prevention or cycling regimens had a significant delay in grip strength decline inflection point not seen with low-doses ( Supplementary Figures S3A-C ). Tofacitinib did not affect the number of motor neurons in lumbar spinal cord sections ( Figure 2C ) nor NMJ counts in the tibialis anterior or gastrocnemius ( Figure 2D ). These data suggest that tofacitinib can delay disease onset but does not result in improvement of end-stage motor neuron or NMJ counts.

> **Figure 2: Physical phenotyping of tofacitinib-treated and untreated SOD1 G93A mice. (A, B) Body weight, grip strength, and rotarod phenotyping was performed every 2 weeks beginning at 60 days of age and analyzed via linear mixed model for change point (A) by dose and (B) by regimen. Body weight is presented as percentage of body weight at 60 days of age and is normalized by cohort. Grip strength was normalized to weight (N = 129; 10–60 mice per group). (C) Motor neurons were counted in stained lumbar spinal cord sections (N = 122; 26–58 mice per group). (D) Neuromuscular junctions were counted in sections of the tibialis anterior (N = 118; 24–56 mice per group) and gastrocnemius muscles (N = 120; 26–56 mice per group). WT mice included for reference only and are excluded from statistical analysis. *p < 0.05, **p < .01, and ***p < .001, by linear mixed models (A, B), Kruskal-Wallis (C), or one-way ANOVA (D).**

### Tofacitinib affects peripheral and infiltrating immune populations without any change in neuroinflammation

To assess the effect of tofacitinib treatment on immune populations and inflammation we quantified immune cell numbers by flow cytometry in peripheral blood and thoracic spinal cord at the terminal endpoint of disease. Tofacitinib significantly reduced the total number of NK cells in peripheral blood in a dose-dependent manner ( Figure 3 ). CD8+ T cells were similarly affected in a dose-dependent manner, though the reduction of CD8+ T cells with low-dose tofacitinib did not reach significance. Few differences were observed when stratified by sex or regimen ( Supplementary Figure S4 ).

> **Figure 3: Immune phenotyping in peripheral blood of tofacitinib-treated and untreated SOD1 G93A mice. SOD1 G93A mice were sacrificed at end-stage disease with age-matched WT mice. Peripheral blood immune cell populations were analyzed via flow cytometry, as indicated. N = 63, 12–30 mice per group (CD4+ T cells, CD8+ T cells, NK cells, neutrophils); N = 59, 10–20 mice per group (Ly6c- and Ly6c+ monocytes). WT mice included for reference only and are excluded from statistical analysis. *p < 0.05, **p < 0.01, by Kruskal-Wallis with post-hoc Dunn’s test with Bonferroni correction.**

Given its effects on survival and peripheral immune populations, we next sought to determine if tofacitinib altered neuroinflammation in the spinal cord of ALS mice. Surprisingly, low-dose tofacitinib increased the proportion of NK cells in the spinal cord compared to untreated ALS mice ( Figure 4A ). There were no other differences in proportions of infiltrating immune cells or microglia, and no effect of sex or regimen was observed ( Supplementary Figure S5 ). Microglial activation was also evaluated, and tofacitinib did not affect microglial size – assessed using FSC – or surface expression of activation markers CD11c and F4/80 ( Figure 4B ). The impact of these doses on NK cell function was validated in vitro using an NK cell line to assess expression of genes for IFN-γ, TNF-α, and IL-10 (34). Interestingly, we found that high-dose tofacitinib increased cytokine expression in NK cells, though this effect did not reach statistical significance ( Supplementary Figure 6A ). The impact of tofacitinib on NK cell STAT phosphorylation was also examined using Western blot and showed that increased dosages of tofacitinib did not adversely impact other members of the Stat family at higher doses ( Supplementary Figure 6B ). Together, these results suggest that tofacitinib treatment suppresses peripheral NK cell and CD8 T cell levels but does not significantly decrease immune accumulation or microglial activation in the spinal cord.

> **Figure 4: Immune phenotyping in the spinal cord of tofacitinib-treated and untreated SOD1 G93A mice. SOD1 G93A mice were sacrificed at end-stage disease and flow cytometry analyzed spinal cord immune cell populations. (A) Immune populations in the spinal cord. (B) Microglia phenotype markers. CD4+ T cells and neutrophils were normalized by cohort (A), as were forward scatter (FSC) and CD11c (B). N = 69, 13–32 mice per group. WT mice included for reference only and are excluded from statistical analysis. *p < 0.05, by Kruskal-Wallis with post-hoc Dunn’s test with Bonferroni correction or by one-way ANOVA with post-hoc Tukey test as indicated by a Shapiro-Wilk test using p=0.05.**

### Tofacitinib alters regulation of immune and metabolic pathways in the spinal cord

Finally, we examined gene expression in thoracic spinal cord using bulk RNA-seq to identify which pathways were altered by tofacitinib treatment. Untreated WT littermates served as a reference to identify ALS-dysregulated pathways and determine which pathways were improved by tofacitinib treatment. We first performed principal component analysis to assess significant gene expression differences that resulted from cohort, sex, or dose-regimen combination. Different clusters were observed when comparing cohorts, which were batched-corrected ( Supplementary Figure S7 ). Unsurprisingly, genotype, i.e., WT vs SOD1 G93A, most strongly influenced clustering contributing to over 40% of variation ( Figure 5A ). Within ALS mice, neither treatment nor sex profoundly separated clusters.

> **Figure 5: Transcriptomics analysis of spinal cord from tofacitinib-treated and untreated SOD1 G93A mice. (A) Principal component analysis; color indicates treatment group after correction by cohort. (B) Comparisons of overlapping and unique differentially expressed genes (DEGs) across all three comparisons – untreated ALS versus untreated wild-type (UT v WT), low-dose tofacitinib versus untreated ALS mice (Low v UT), and high-dose tofacitinib versus untreated ALS mice (High v UT). (C) Expression levels of eight DEGs shared by all three comparisons. (D) Expression levels of top 10 DEGs each for untreated ALS versus untreated WT and low-dose tofacitinib versus untreated ALS by log2(fold-change) (log2FC). See Supplementary Table S3 for the complete list of DEGs. (E) Gene set enrichment analysis of untreated ALS versus untreated WT and low-dose tofacitinib versus untreated ALS. See Supplementary Table S4 for the complete list of GSEA results. A cutoff of p < 0.05 and |log2(fold-change)| > 1 was used to identify DEGs. N = 58, 8–12 mice per group (A), 8–28 mice per group (B-E).**

DEG analysis was then performed for 3 comparisons: untreated ALS versus untreated WT (to identify ALS-dysregulated DEGs), low-dose tofacitinib versus untreated ALS mice (to identify ALS-dysregulated DEGs that low-dose tofacitinib reverses), and high-dose tofacitinib versus untreated ALS mice (to identify ALS-dysregulated DEGs that high-dose tofacitinib reverses). We identified over 2,000 DEGs in untreated ALS versus WT mice, 155 DEGs in low-dose versus untreated ALS mice and 172 DEGs in high-dose versus untreated ALS mice ( Figure 5B , Supplementary Table S3 ). Of these, there were eight DEGs shared by all three comparisons, including Cox8b, Mstn, Azgp1, and Ms4a2 ( Figure 5C ).

Our subsequent analysis focused on DEGs and pathways that were reversed by low-dose tofacitinib, as high-dose treatment did not improve survival. We found that 80 DEGs were reversed by low-dose treatment but not high-dose treatment, including Gata1, Fcnb, Ctsg, Btnl10, and Elane ( Figure 5D ). These findings were validated by isolating RNA from fixed spinal cord tissue and using qRT-PCR to quantify btnl10, ctsg, elane expression. Consistent with the RNA-Seq findings, gene expression for these three genes was increased in untreated ALS mice but reversed by low-dose tofacitinib treatment ( Supplementary Figure S8 ). Pathway analysis by GSEA identified ALS-dysregulated pathways reversed by low-dose tofacitinib treatment. In untreated ALS spinal cords, multiple pathways associated with inflammation were upregulated compared to WT mice, and tofacitinib reversed many of these dysregulated pathways, including those associated with cytokine-cytokine receptor interaction, platelet activation, neutrophil extracellular trap formation, and complement and coagulation cascades ( Figure 5E , Supplementary Table S4 ). Tofacitinib also impacted numerous other pathways that were not dysregulated in ALS versus WT, including metabolism of cofactors and vitamins, lipid metabolism, the endocrine system, and cell motility. Together, these findings indicate that tofacitinib downregulates neuroinflammatory pathways dysregulated in ALS, and affects metabolic pathways not dysregulated in the spinal cord in untreated ALS.

## Discussion

The immune system contributes to ALS progression (3, 4), with NK cells playing a key role (6, 7). We previously demonstrated that tofacitinib, a JAK/STAT inhibitor (45–47), suppresses overall NK cell numbers, cytotoxicity, and cytokine production in vitro, ex vivo, and in vivo (34). Therefore, to determine whether tofacitinib has therapeutic potential for treating ALS, we treated SOD1 G93A mice with low-dose (5 mg/kg) or high-dose (30 mg/kg) tofacitinib using multiple dosing regimens. Low-dose tofacitinib treatment significantly prolonged survival and delayed the onset of weight loss, while high-dose treatment had no effect or exacerbated disease. Initiating tofacitinib after symptom onset did not drastically differ from initiating treatment before symptom onset, a particularly promising finding since patients often face years-long delays between ALS disease onset and diagnosis (1). Despite these salutary benefits, tofacitinib did not perceptibly alter motor neuron or NMJ number at disease end-stage, and there was no drug-mediated improvement in grip strength or agility. Tofacitinib decreased peripheral NK cells in a dose-dependent manner, and high-dose tofacitinib also significantly decreased peripheral CD8+ T cells. Interestingly, low-dose tofacitinib increased spinal cord infiltration of NK cells, though no increase in microglial activation or other markers of neuroinflammation were observed. Transcriptomics analysis of spinal cord at end-stage disease found that low-dose tofacitinib reversed several ALS-dysregulated DEGs primarily linked to immune pathways and additionally influenced metabolic pathways unrelated to ALS.

Interestingly, the tofacitinib regimen used did not have a significant effect on the response to treatment. No differences in survival or immune populations and only slight differences in phenotype were observed between mice on prevention or intervention regimens for both low- and high-doses. One potential explanation is that NK cells and CD8+ T cells do not play major protective roles at any point in ALS and, thus, there may be limited advantage with earlier tofacitinib treatment (3, 4, 48). Another possibility is that the use of the intervention regimen beginning at 90 days of age preceded inflammatory changes in ALS, as the immune system shifts from an anti-inflammatory phenotype to a pro-inflammatory phenotype between 90 and 120 days of age in mice (19), after both prevention and intervention regimens were initiated.

Despite an increase in survival and delay in weight-loss onset, the only significant change in immune populations in the spinal cord with tofacitinib treatment was a slight increase in infiltrating NK cells, counter to our hypothesis that infiltrating NK cells are detrimental in ALS. One possible explanation is that NK cell function is more important than NK cell number; we have found that NK cell expression of NKp46, NKp30, and NKG2D, as well as CD62L+ and CD27+ subpopulations, are better predictors of ALS progression than the number of NK cells alone (6). Others have found that tofacitinib has a greater impact on NK cell phenotype, such as cytotoxicity, than on viability (49). This potential decrease in NK cell activity is supported by the lack of subsequent microglial activation, though in vivo NK cell function was not tested in the current study. Indeed, specific NK cell subpopulations may play a role in disease: in our own studies we have found significant dysregulation of NK cells in individuals with ALS Previous studies have shown that CD11b and CD27 expression on human NK cells identify subpopulations with increased ability to differentiate, express cytokines, or lyse target cells depending on their surface expression (50). Moreover, a recent report suggested that specific NK cell subpopulations may contribute to disease progression in individuals with ALS (51). Indeed, at least one study reported that NK cells can drive ALS via the release of IFN-γ inside the CNS which in turn drives activation of resident Immune cells, particularly the microglia (18). These findings suggest that the NK cells accumulating in the CNS of low-dose mice may have altered functionality, particularly reduced release of IFN-γ, though this was not tested in the current study.

The unexpected finding that low-dose tofacitinib extended survival, while high-dose tofacitinib may exacerbate disease, may be due to a number of factors. First, tofacitinib may adversely impact CD4+ T cell function, including Th2 cells and Tregs which have a net protective effect particularly in early stages of disease (12, 26). As ALS progresses, the balance shifts towards Th1 T cells, which drive disease through microglial polarization and Treg inhibition (52, 53). Tofacitinib exerts differing effects on CD4+ T cells based on dose: low-dose tofacitinib impacts effector T cell function, including Th1 polarization, while higher doses may adversely impact the function of protective Tregs (39, 54–56). Thus, a reduction of Treg function early in disease may explain why the high-dose prevention regimen was associated with reduced survival, though T cell function and polarization was not tested in the current study. With regards to NK cells, we found that higher concentrations of tofacitinib were associated with increased cytokine production, though these changes were not statistically significant. Nonetheless, this may explain why mice receiving high-dose regimens saw reduced survival rates. While tofacitinib primarily inhibits Jak1/3 it can affect the activity of other members of the Jak family (57), so it is possible that higher doses adversely impact associated pathways in NK cells, other immune cells, or other cell types such as neurons. Though we observed no off-target effects in NK cells culture in vitro, other cell types were not tested. In addition, mice receiving high doses tofacitinib experienced a trend towards more rapid weight loss. Clearance of the drug, particularly at high doses in female mice, may also have played a role. Our previous pharmacokinetic analyses showed increased maximal concentration in the blood of female mice following drug administration as well reduced drug clearance (34); this may explain why female mice in particular benefited from the use of drug cycles. Other off-target tofacitinib effects, including increased toxicity, likely did not contribute to reduced survival in the high-dose regimens, as tofacitinib is routinely prescribed at higher doses with minimal increase in adverse events (58, 59), and we did not previously observe any signs of toxicity or infection in low-dose or high-dose mice (34). However, it is also unclear whether prolonged use of tofacitinib is toxic to neurons: tofacitinib is somewhat able to cross the blood-brain barrier (60), has shown mixed results in animal models of multiple sclerosis (61, 62), and has caused demyelination in at least one case report (63). Therefore, it is possible that higher doses of tofacitinib may be toxic to motor neurons through heretofore unexplored mechanisms.

Transcriptomics analysis of the spinal cord revealed that tofacitinib reversed pathways dysregulated during ALS. These pathways were primarily related to inflammation, but metabolic pathways were impacted as well. Tofacitinib reversed the most upregulated pathways in ALS, including pathways associated with hematopoietic cell lineage, neutrophil extracellular trap formation, and cytokine-cytokine receptor interactions. Interestingly, tofacitinib treatment also resulted in the downregulation of multiple metabolic pathways that were not dysregulated in untreated ALS mice. These included pathways associated with lipid metabolism for steroid hormone biosynthesis, linoleic acid metabolism, arachidonic acid metabolism, and fatty acid degradation. Tofacitinib’s association with altered lipid metabolism is well-established, primarily observed as increases in LDL and HDL cholesterol in multiple studies of patients on tofacitinib (64, 65). Additionally, tofacitinib has been shown to reduce cachexia in rodent arthritis models (66, 67), and is associated with weight gain in humans (68, 69). This is particularly promising given that ALS has long been associated with metabolism alterations observed in plasma (70, 71), and dysregulation of lipid metabolism is a top predictor of disease progression (72).

There are limitations to this study. Tofacitinib blood levels were not assessed, and differences in the ease and ability for ALS mice to reach the chow may have affected dosing at later stages of disease. We have also previously found sex differences in tofacitinib clearance rates (34). The impact of tofacitinib was not assessed in other mouse models of ALS. SOD1 G93A mice, as well as ALS patients harboring SOD1 mutations, do not develop the TDP-43 proteinopathy seen in 95% of ALS patients (73, 74). Thus, additional experiments using alternate mouse models, such as those based on C9orf72 expansions, may be warranted. Mouse models also present issues in both the lack of upper motor neuron disease and the limited amount of tissue. For this reason, motor neurons were counted in the lumbar spinal cord, and the thoracic spinal cord was used for flow cytometry and transcriptomics. Moreover, while specific NK cell subpopulations may contribute to ALS progression (51), NK cell subpopulations were not characterized in this study. In addition, clinical trials could benefit from a better understanding of the role of NK cells and NK cell subpopulations in ALS. Preclinical studies including adoptive transfer of specific subpopulations of NK cells or NK cells pre-treated them with tofacitinib could further elucidate the mechanisms by which low-dose tofacitinib slow disease progression. Finally, it must be acknowledged that few ALS treatments have translated from mouse to man (73, 74). However, it is likely that tofacitinib will be effective in human ALS as well, as similar dysregulation of Jak3 is seen in both mouse and man (75). Tofacitinib preferentially inhibits Jak1/3; however, other jakinibs, such as baricitinib, may also warrant study as they differ slightly in Jak-specificity and blood-brain barrier penetrability (47, 76–78).

## Conclusion

There is great potential for tofacitinib as an ALS therapeutic. Further preclinical studies, particularly those in ALS mouse models that develop TDP-43 proteinopathy or studies designed for increased sensitivity for symptom onset and progression, may be helpful in guiding clinical translation. However, these studies face diminishing returns due to the poor predictive power of mouse studies for human translation. Additionally, there is already a significant body of research on tofacitinib in humans, including studies on dose-effect, long-term use, and the impact of tofacitinib on other immune cell types including monocytes, T cells, and B cells, facilitating dosing in individuals with ALS and translation to the clinic (37, 58, 79). Lastly, tofacitinib is not predicted to interact with either riluzole or edaravone, the two most commonly prescribed ALS medications (80, 81). Based on those factors and the findings presented here, tofacitinib is a promising therapeutic candidate for ALS and is ready for translation into clinical trials.

## Acknowledgements

AcknowledgmentsThe authors acknowledge Mrs. Elizabeth Taylor for administrative support and Dr. Stacey A. Sakowski Jacoby, Dr. Emily J. Koubek, and Dr. Masha G. Savelieff for expert editorial assistance. The authors also acknowledge Dr. Stephen Goutman’s mentorship of LB.

## Funding

- U.S. Department of Defense 10.13039/100000005AL200064
- ALS Association 10.13039/10000097120-IIA-431
- National Institutes of Health 10.13039/100000002R01NS120926, R01NS127188, F31NS139629

## Data Availability

Data availability statementThe original bulk RNA-Seq data presented in this study can be found at ArrayExpress (https://www.ebi.ac.uk/biostudies/arrayexpress), accession number E-MTAB-16025. Differentially expressed gene (DEG) data and gene set enrichment analysis (GSEA) data are available in Supplementary Materials . All other original data will be made available by the authors upon request.

## References

1. 1 FeldmanELGoutmanSAPetriSMazziniLSavelieffMGShawPJ. Amyotrophic lateral sclerosis. Lancet. (2022) 400:1363–80. doi: 10.1016/S0140-6736(22)01272-7, PMID: 36116464 PMC10089700 [PMID:36116464]
2. 2 GoutmanSAHardimanOAl-ChalabiAChióASavelieffMGKiernanMC. Recent advances in the diagnosis and prognosis of amyotrophic lateral sclerosis. Lancet Neurol. (2022) 21:480–93. doi: 10.1016/S1474-4422(21)00465-8, PMID: 35334233 PMC9513753 [PMID:35334233]
3. 3 BélandL-CMarkovinovicAJakovacHDe MarchiFBilicEMazziniL. Immunity in amyotrophic lateral sclerosis: Blurred lines between excessive inflammation and inefficient immune responses. Brain Commun. (2020) 2:fcaa124. doi: 10.1093/braincomms/fcaa124, PMID: 33134918 PMC7585698 [PMID:33134918]
4. 4 McCombePALeeJDWoodruffTMHendersonRD. The peripheral immune system and amyotrophic lateral sclerosis. Front neurol. (2020) 11:279. doi: 10.3389/fneur.2020.00279, PMID: 32373052 PMC7186478 [PMID:32373052]
5. 5 GoutmanSAHardimanOAl-ChalabiAChióASavelieffMGKiernanMC. Emerging insights into the complex genetics and pathophysiology of amyotrophic lateral sclerosis. Lancet Neurol. (2022) 21:465–79. doi: 10.1016/S1474-4422(21)00414-2, PMID: 35334234 PMC9513754 [PMID:35334234]
6. 6 MurdockBJZhaoBPawlowskiKDFamieJPPiecuchCEWebber-DavisIF. Peripheral immune profiles predict ALS progression in an age-and sex-dependent manner. Neurol: Neuroimmunol Neuroinflammation. (2024) 11:e200241. doi: 10.1212/NXI.0000000000200241, PMID: 38626361 PMC11087030 [PMID:38626361]
7. 7 MurdockBJFamieJPPiecuchCEPawlowskiKDMendelsonFEPieroniCH. NK cells associate with ALS in a sex-and age-dependent manner. JCI Insight. (2021) 6:e147129. doi: 10.1172/jci.insight.147129, PMID: 33974561 PMC8262328 [PMID:33974561]
8. 8 MurdockBJBenderDEKashlanSRFigueroa-RomeroCBackusCCallaghanBC. Increased ratio of circulating neutrophils to monocytes in amyotrophic lateral sclerosis. Neurol: Neuroimmunol Neuroinflammation. (2016) 3:e242. doi: 10.1212/NXI.0000000000000242, PMID: 27308304 PMC4897983 [PMID:27308304]
9. 9 MurdockBJZhouTKashlanSRLittleRJGoutmanSAFeldmanEL. Correlation of peripheral immunity with rapid amyotrophic lateral sclerosis progression. JAMA neurol. (2017) 74:1446–54. doi: 10.1001/jamaneurol.2017.2255, PMID: 28973548 PMC5822195 [PMID:28973548]
10. 10 MurdockBJGoutmanSABossJKimSFeldmanEL. Amyotrophic lateral sclerosis survival associates with neutrophils in a sex-specific manner. Neurol: Neuroimmunol Neuroinflammation. (2021) 8:e953. doi: 10.1212/NXI.0000000000000953, PMID: 33531377 PMC8057067 [PMID:33531377]
11. 11 GustafsonMPStaffNPBornschleglSButlerGWMaasMLKazamelM. Comprehensive immune profiling reveals substantial immune system alterations in a subset of patients with amyotrophic lateral sclerosis. PLoS One. (2017) 12:e0182002. doi: 10.1371/journal.pone.0182002, PMID: 28742871 PMC5526569 [PMID:28742871]
12. 12 HenkelJSBeersDRWenSRiveraALToennisKMAppelJE. Regulatory T-lymphocytes mediate amyotrophic lateral sclerosis progression and survival. EMBO Mol Med. (2013) 5:64–79. doi: 10.1002/emmm.201201544, PMID: 23143995 PMC3569654 [PMID:23143995]
13. 13 BeersDRZhaoWWangJZhangXWenSNealD. ALS patients’ regulatory T lymphocytes are dysfunctional, and correlate with disease progression rate and severity. JCI Insight. (2017) 2:e89530. doi: 10.1172/jci.insight.89530, PMID: 28289705 PMC5333967 [PMID:28289705]
14. 14 CuiCSunJPawitanYPiehlFChenHIngreC. Creatinine and C-reactive protein in amyotrophic lateral sclerosis, multiple sclerosis and Parkinson’s disease. Brain Commun. (2020) 2:fcaa152. doi: 10.1093/braincomms/fcaa152, PMID: 33543134 PMC7850290 [PMID:33543134]
15. 15 CuiCIngreCYinLLiXAnderssonJSeitzC. Correlation between leukocyte phenotypes and prognosis of amyotrophic lateral sclerosis. Elife. (2022) 11:e74065. doi: 10.7554/eLife.74065, PMID: 35287794 PMC8923665 [PMID:35287794]
16. 16 YazdaniSSeitzCCuiCLovikAPanLPiehlF. T cell responses at diagnosis of amyotrophic lateral sclerosis predict disease progression. Nat Commun. (2022) 13:6733. doi: 10.1038/s41467-022-34526-9, PMID: 36347843 PMC9643478 [PMID:36347843]
17. 17 YazdaniSMariosaDHammarNAnderssonJIngreCWalldiusG. Peripheral immune biomarkers and neurodegenerative diseases: a prospective cohort study with 20 years of follow-up. Ann neurol. (2019) 86:913–26. doi: 10.1002/ana.25614, PMID: 31604369 PMC7611591 [PMID:31604369]
18. 18 GarofaloSCocozzaGPorziaAInghilleriMRaspaMScavizziF. Natural killer cells modulate motor neuron-immune cell cross talk in models of Amyotrophic Lateral Sclerosis. Nat Commun. (2020) 11:1773. doi: 10.1038/s41467-020-15644-8, PMID: 32286313 PMC7156729 [PMID:32286313]
19. 19 Figueroa-RomeroCGuoKMurdockBJPaez-ColasanteXBassisCMMikhailKA. Temporal evolution of the microbiome, immune system and epigenome with disease progression in ALS mice. Dis Models Mech. (2019) 13. doi: 10.1242/dmm.041947, PMID: 31597644 PMC6906635 [PMID:31597644]
20. 20 ChiuIMChenAZhengYKosarasBTsiftsoglouSAVartanianTK. T lymphocytes potentiate endogenous neuroprotective inflammation in a mouse model of ALS. Proc Natl Acad Sci. (2008) 105:17913–8. doi: 10.1073/pnas.0804610105, PMID: 18997009 PMC2581614 [PMID:18997009]
21. 21 FinkelsteinAKunisGSeksenyanARonenABerkutzkiTAzoulayD. Abnormal changes in NKT cells, the IGF-1 axis, and liver pathology in an animal model of ALS. PLoS One. (2011) 6:e22374. doi: 10.1371/journal.pone.0022374, PMID: 21829620 PMC3149057 [PMID:21829620]
22. 22 BeersDRHenkelJSXiaoQZhaoWWangJYenAA. Wild-type microglia extend survival in PU. 1 knockout mice with familial amyotrophic lateral sclerosis. Proc Natl Acad Sci. (2006) 103:16021–6. doi: 10.1073/pnas.0607423103, PMID: 17043238 PMC1613228 [PMID:17043238]
23. 23 ZhaoWBeersDRHenkelJSZhangWUrushitaniMJulienJP. Extracellular mutant SOD1 induces microglial-mediated motoneuron injury. Glia. (2010) 58:231–43. doi: 10.1002/glia.20919, PMID: 19672969 PMC2784168 [PMID:19672969]
24. 24 BeersDRHenkelJSZhaoWWangJHuangAWenS. Endogenous regulatory T lymphocytes ameliorate amyotrophic lateral sclerosis in mice and correlate with disease progression in patients with amyotrophic lateral sclerosis. Brain. (2011) 134:1293–314. doi: 10.1093/brain/awr074, PMID: 21596768 PMC3097891 [PMID:21596768]
25. 25 HenkelJSBeersDRSiklósLAppelSH. The chemokine MCP-1 and the dendritic and myeloid cells it attracts are increased in the mSOD1 mouse model of ALS. Mol Cell Neurosci. (2006) 31:427–37. doi: 10.1016/j.mcn.2005.10.016, PMID: 16337133 [PMID:16337133]
26. 26 BeersDRHenkelJSZhaoWWangJAppelSH. CD4+ T cells support glial neuroprotection, slow disease progression, and modify glial morphology in an animal model of inherited ALS. Proc Natl Acad Sci. (2008) 105:15558–63. doi: 10.1073/pnas.0807419105, PMID: 18809917 PMC2547419 [PMID:18809917]
27. 27 ButovskyOSiddiquiSGabrielyGLanserAJDakeBMurugaiyanG. Modulating inflammatory monocytes with a unique microRNA gene signature ameliorates murine ALS. J Clin Invest. (2012) 122:3063–87. doi: 10.1172/JCI62636, PMID: 22863620 PMC3428086 [PMID:22863620]
28. 28 CudkowiczMEShefnerJMSchoenfeldDAZhangHAndreassonKIRothsteinJD. Trial of celecoxib in amyotrophic lateral sclerosis. Ann neurol. (2006) 60:22–31. doi: 10.1002/ana.20903, PMID: 16802291 [PMID:16802291]
29. 29 GordonPHMooreDHMillerRGFlorenceJMVerheijdeJLDoorishC. Efficacy of minocycline in patients with amyotrophic lateral sclerosis: a phase III randomised trial. Lancet Neurol. (2007) 6:1045–53. doi: 10.1016/S1474-4422(07)70270-3, PMID: 17980667 [PMID:17980667]
30. 30 MeiningerVAsselainBGuilletPLeighPLudolphALacomblezL. Pentoxifylline in ALS: a double-blind, randomized, multicenter, placebo-controlled trial. Neurology. (2006) 66:88–92. doi: 10.1212/01.wnl.0000191326.40772.62, PMID: 16401852 [PMID:16401852]
31. 31 MeiningerVDroryVELeighPNLudolphARobberechtWSilaniV. Glatiramer acetate has no impact on disease progression in ALS at 40 mg/day: a double-blind, randomized, multicentre, placebo-controlled trial. Amyotrophic Lateral Sclerosis. (2009) 10:378–83. doi: 10.3109/17482960902803432, PMID: 19922128 [PMID:19922128]
32. 32 De MarchiFMuniticIAmedeiABerryJDFeldmanELAronicaE. Interplay between immunity and amyotrophic lateral sclerosis: Clinical impact. Neurosci Biobehav Rev. (2021) 127:958–78. doi: 10.1016/j.neubiorev.2021.06.027, PMID: 34153344 PMC8428677 [PMID:34153344]
33. 33 VivierETomaselloEBaratinMWalzerTUgoliniS. Functions of natural killer cells. Nat Immunol. (2008) 9:503–10. doi: 10.1038/ni1582, PMID: 18425107 [PMID:18425107]
34. 34 Figueroa-RomeroCMonteagudoAMurdockBJFamieJPWebber-DavisIFPiecuchCE. Tofacitinib suppresses natural killer cells in vitro and in vivo: implications for amyotrophic lateral sclerosis. Front Immunol. (2022) 13:773288. doi: 10.3389/fimmu.2022.773288, PMID: 35197969 PMC8859451 [PMID:35197969]
35. 35 McInnesIBByersNLHiggsRELeeJMaciasWLNaS. Comparison of baricitinib, upadacitinib, and tofacitinib mediated regulation of cytokine signaling in human leukocyte subpopulations. Arthritis Res Ther. (2019) 21:1–10. doi: 10.1186/s13075-019-1964-1, PMID: 31375130 PMC6679539 [PMID:31375130]
36. 36 GurneyMEPuHChiuAYDal CantoMCPolchowCYAlexanderDD. Motor neuron degeneration in mice that express a human Cu, Zn superoxide dismutase mutation. Science. (1994) 264:1772–5. doi: 10.1126/science.8209258, PMID: 8209258 [PMID:8209258]
37. 37 WeinholdKJBukowskiJFBrennanTVNoveckRJStaatsJSLinL. Reversibility of peripheral blood leukocyte phenotypic and functional changes after exposure to and withdrawal from tofacitinib, a Janus kinase inhibitor, in healthy volunteers. Clin Immunol. (2018) 191:10–20. doi: 10.1016/j.clim.2018.03.002, PMID: 29518577 PMC6036921 [PMID:29518577]
38. 38 van VollenhovenRLeeEBStrengholtSMojcikCValdezHKrishnaswamiS. Evaluation of the short-, mid-, and long-term effects of tofacitinib on lymphocytes in patients with rheumatoid arthritis. Arthritis Rheumatol. (2019) 71:685–95. doi: 10.1002/art.40780, PMID: 30427585 PMC6593802 [PMID:30427585]
39. 39 van GurpEASchoordijk-VerschoorWKlepperMKorevaarSSChanGWeimarW. The effect of the JAK inhibitor CP-690,550 on peripheral immune parameters in stable kidney allograft patients. Transplantation. (2009) 87:79–86. doi: 10.1097/TP.0b013e31818bbea7, PMID: 19136895 [PMID:19136895]
40. 40 BolgerAMLohseMUsadelB. Trimmomatic: a flexible trimmer for Illumina sequence data. Bioinformatics. (2014) 30:2114–20. doi: 10.1093/bioinformatics/btu170, PMID: 24695404 PMC4103590 [PMID:24695404]
41. 41 KimDLangmeadBSalzbergSL. HISAT: a fast spliced aligner with low memory requirements. Nat Methods. (2015) 12:357–60. doi: 10.1038/nmeth.3317, PMID: 25751142 PMC4655817 [PMID:25751142]
42. 42 LiaoYSmythGKShiW. featureCounts: an efficient general purpose program for assigning sequence reads to genomic features. Bioinformatics. (2014) 30:923–30. doi: 10.1093/bioinformatics/btt656, PMID: 24227677 [PMID:24227677]
43. 43 ZhangYParmigianiGJohnsonWE. ComBat-seq: batch effect adjustment for RNA-seq count data. NAR Genom Bioinform. (2020) 2:lqaa078. doi: 10.1093/nargab/lqaa078, PMID: 33015620 PMC7518324 [PMID:33015620]
44. 44 LoveMIHuberWAndersS. Moderated estimation of fold change and dispersion for RNA-seq data with DESeq2. Genome Biol. (2014) 15:550. doi: 10.1186/s13059-014-0550-8, PMID: 25516281 PMC4302049 [PMID:25516281]
45. 45 DowtyMELinJRyderTFWangWWalkerGSVazA. The pharmacokinetics, metabolism, and clearance mechanisms of tofacitinib, a janus kinase inhibitor, in humans. Drug Metab Disposition. (2014) 42:759–73. doi: 10.1124/dmd.113.054940, PMID: 24464803 [PMID:24464803]
46. 46 McLornanDPPopeJEGotlibJHarrisonCN. Current and future status of JAK inhibitors. Lancet. (2021) 398:803–16. doi: 10.1016/S0140-6736(21)00438-4, PMID: 34454676 [PMID:34454676]
47. 47 HuXLiJFuMZhaoXWangW. The JAK/STAT signaling pathway: from bench to clinic. Signal transduction targeted Ther. (2021) 6:402. doi: 10.1038/s41392-021-00791-1, PMID: 34824210 PMC8617206 [PMID:34824210]
48. 48 MurdockBJBenderDESegalBMFeldmanEL. The dual roles of immunity in ALS: injury overrides protection. Neurobiol disease. (2015) 77:1–12. doi: 10.1016/j.nbd.2015.02.017, PMID: 25726748 [PMID:25726748]
49. 49 MeudecLRichebéPPascaudJMarietteXNocturneG. Janus kinase inhibitors alter NK cell phenotypes and inhibit their antitumour capacity. Rheumatology. (2023) 62:2855–63. doi: 10.1093/rheumatology/keac710, PMID: 36583542 [PMID:36583542]
50. 50 FuBWangFSunRLingBTianZWeiH. CD11b and CD27 reflect distinct population and functional specialization in human natural killer cells. Immunology. (2011) 133:350–9. doi: 10.1111/j.1365-2567.2011.03446.x, PMID: 21506999 PMC3112344 [PMID:21506999]
51. 51 Álvarez-SánchezECarbayoÁValle-TamayoNMuñozLAumatellJTorresS. Single-cell RNA sequencing highlights the role of distinct natural killer subsets in sporadic amyotrophic lateral sclerosis. J Neuroinflammation. (2025) 22:15. doi: 10.1186/s12974-025-03347-0, PMID: 39849490 PMC11756089 [PMID:39849490]
52. 52 SheeanRKMcKayFCCretneyEByeCRPereraNDTomasD. Association of regulatory T-cell expansion with progression of amyotrophic lateral sclerosis: a study of humans and a transgenic mouse model. JAMA neurol. (2018) 75:681–9. doi: 10.1001/jamaneurol.2018.0035, PMID: 29507931 PMC5885208 [PMID:29507931]
53. 53 JinMGüntherRAkgünKHermannAZiemssenT. Peripheral proinflammatory Th1/Th17 immune cell shift is linked to disease severity in amyotrophic lateral sclerosis. Sci Rep. (2020) 10:5941. doi: 10.1038/s41598-020-62756-8, PMID: 32246039 PMC7125229 [PMID:32246039]
54. 54 TexlerBZollnerAReinstadlerVReiderSJMacheinerSJelusicB. Tofacitinib-induced modulation of intestinal adaptive and innate immunity and factors driving cellular and systemic pharmacokinetics. Cell Mol Gastroenterol Hepatol. (2022) 13:383–404. doi: 10.1016/j.jcmgh.2021.09.004, PMID: 34624526 PMC8688178 [PMID:34624526]
55. 55 PiscianzEValencicECuzzoniEDe IudicibusSDe LorenzoEDecortiG. Fate of lymphocytes after withdrawal of tofacitinib treatment. PLoS One. (2014) 9:e85463. doi: 10.1371/journal.pone.0085463, PMID: 24416411 PMC3887061 [PMID:24416411]
56. 56 NocturneGPascaudJLyBTahmasebiFMarietteX. JAK inhibitors alter NK cell functions and may impair immunosurveillance against lymphomagenesis. Cell Mol Immunol. (2020) 17:552–3. doi: 10.1038/s41423-019-0320-3, PMID: 31664224 PMC7193549 [PMID:31664224]
57. 57 ChangelianPSMoshinskyDKuhnCFFlanaganMEMunchhofMJHarrisTM. The specificity of JAK3 kinase inhibitors. Blood J Am Soc Hematol. (2008) 111:2155–7. doi: 10.1182/blood-2007-09-115030, PMID: 18094329 [PMID:18094329]
58. 58 CohenSBTanakaYMarietteXCurtisJRLeeEBNashP. Long-term safety of tofacitinib up to 9.5 years: a comprehensive integrated analysis of the rheumatoid arthritis clinical development programme. RMD Open. (2020) 6:e001395. doi: 10.1136/rmdopen-2020-001395, PMID: 33127856 PMC7722371 [PMID:33127856]
59. 59 TanejaVEl-DallalMHaqZTripathiKSystromHKWangLF. Effectiveness and safety of tofacitinib for ulcerative colitis: systematic review and meta-analysis. J Clin Gastroenterol. (2022) 56:e323–e33. doi: 10.1097/MCG.0000000000001608, PMID: 34516458 [PMID:34516458]
60. 60 FukuyamaTTschernigTQiYVolmerDABäumerW. Aggression behaviour induced by oral administration of the Janus-kinase inhibitor tofacitinib, but not oclacitinib, under stressful conditions. Eur J Pharmacol. (2015) 764:278–82. doi: 10.1016/j.ejphar.2015.06.060, PMID: 26164790 [PMID:26164790]
61. 61 ZhouYLengXLuoSSuZLuoXGuoH. Tolerogenic dendritic cells generated with tofacitinib ameliorate experimental autoimmune encephalomyelitis through modulation of Th17/Treg balance. J Immunol Res. (2016) 2016:5021537. doi: 10.1155/2016/5021537, PMID: 28070525 PMC5187469 [PMID:28070525]
62. 62 YoshidaHKimuraAFukayaTSekiyaTMoritaRShichitaT. Low dose CP-690,550 (tofacitinib), a pan-JAK inhibitor, accelerates the onset of experimental autoimmune encephalomyelitis by potentiating Th17 differentiation. Biochem Biophys Res Commun. (2012) 418:234–40. doi: 10.1016/j.bbrc.2011.12.156, PMID: 22252297 [PMID:22252297]
63. 63 MassoudFIsmailIIAl-HashelJYAbboudH. CNS demyelination during tofacitinib therapy: first report. Multiple Sclerosis Related Disord. (2020) 46:102568. doi: 10.1016/j.msard.2020.102568, PMID: 33296970 [PMID:33296970]
64. 64 BottaEEPieriniFMartinMCerdaOChiappeELCiteraG. Modifications on lipid profile and high-density lipoprotein function related to treatment with tofacitinib in female patients with rheumatoid arthritis: Impact of previous therapy with biological agents. J Clin Lipidol. (2025), 659–69. doi: 10.1016/j.jacl.2025.02.013, PMID: 40133148 [PMID:40133148]
65. 65 WolkRArmstrongEJHansenPRThiersBLanSTallmanAM. Effect of tofacitinib on lipid levels and lipid-related parameters in patients with moderate to severe psoriasis. J Clin lipidol. (2017) 11:1243–56. doi: 10.1016/j.jacl.2017.06.012, PMID: 28751001 [PMID:28751001]
66. 66 Bermejo-ÁlvarezIPérez-BaosSGratalPMedinaJPLargoRHerrero-BeaumontG. Effects of tofacitinib on muscle remodeling in experimental rheumatoid sarcopenia. Int J Mol Sci. (2023) 24:13181. doi: 10.3390/ijms241713181, PMID: 37685986 PMC10487422 [PMID:37685986]
67. 67 da RosaTHBartikoskiBJdo Espírito SantoRCFarinonMde Souza SilvaJMPedóRT. Treatment with tofacitinib attenuates muscle loss through myogenin activation in the collagen-induced arthritis. Adv Rheumatol. (2024) 64:85. doi: 10.1186/s42358-024-00416-5, PMID: 39538350 [PMID:39538350]
68. 68 XiongGYuEHeungMYangJLoweMAbu-HilalM. Weight gain secondary to the use of oral Janus kinase inhibitors: A systematic review and meta-analysis. JAAD Int. (2024) 6–9. doi: 10.1016/j.jdin.2024.11.009, PMID: 39872731 PMC11763511 [PMID:39872731]
69. 69 NovikovaDSUdachkinaHVMarkelovaEIKirillovaIGMisiyukASDemidovaNV. Dynamics of body mass index and visceral adiposity index in patients with rheumatoid arthritis treated with tofacitinib. Rheumatol Int. (2019) 39:1181–9. doi: 10.1007/s00296-019-04303-x, PMID: 31053871 [PMID:31053871]
70. 70 FunalotBDesportJ-CSturtzFCamuWCouratierP. High metabolic level in patients with familial amyotrophic lateral sclerosis. Amyotrophic Lateral Sclerosis. (2009) 10:113–7. doi: 10.1080/17482960802295192, PMID: 18792852 [PMID:18792852]
71. 71 LudolphADupuisLKasarskisESteynFNgoSMcDermottC. Nutritional and metabolic factors in amyotrophic lateral sclerosis. Nat Rev Neurol. (2023) 19:511–24. doi: 10.1038/s41582-023-00845-8, PMID: 37500993 [PMID:37500993]
72. 72 GuoKSavelieffMGJangDGTeenerSJZhaoLHurJ. Longitudinal metabolomics in amyotrophic lateral sclerosis implicates impaired lipid metabolism. Ann Neurol. (2025), 19–34. doi: 10.1002/ana.27208, PMID: 39976286 PMC12174748 [PMID:39976286]
73. 73 RobertsonJSanelliTXiaoSYangWHornePHammondR. Lack of TDP-43 abnormalities in mutant SOD1 transgenic mice shows disparity with ALS. Neurosci letters. (2007) 420:128–32. doi: 10.1016/j.neulet.2007.03.066, PMID: 17543992 [PMID:17543992]
74. 74 MackenzieIRBigioEHIncePGGeserFNeumannMCairnsNJ. Pathological TDP-43 distinguishes sporadic amyotrophic lateral sclerosis from amyotrophic lateral sclerosis with SOD1 mutations. Ann Neurol. (2007) 61:427–34. doi: 10.1002/ana.21147, PMID: 17469116 [PMID:17469116]
75. 75 MorelloGSpampinatoAGConfortiFLD’AgataVCavallaroS. Selection and prioritization of candidate drug targets for amyotrophic lateral sclerosis through a meta-analysis approach. J Mol Neurosci. (2017) 61:563–80. doi: 10.1007/s12031-017-0898-9, PMID: 28236105 PMC5359376 [PMID:28236105]
76. 76 SpinelliFRMeylanFO’SheaJJGadinaM. JAK inhibitors: Ten years after. Eur J Immunol. (2021) 51:1615–27. doi: 10.1002/eji.202048922, PMID: 33930196 [PMID:33930196]
77. 77 GadinaMLeMTSchwartzDMSilvennoinenONakayamadaSYamaokaK. Janus kinases to jakinibs: from basic insights to clinical practice. Rheumatology. (2019) 58:i4–i16. doi: 10.1093/rheumatology/key432, PMID: 30806710 PMC6657570 [PMID:30806710]
78. 78 AlimKBruyèreALescoatAJouanELecureurVLe VéeM. Interactions of janus kinase inhibitors with drug transporters and consequences for pharmacokinetics and toxicity. Expert Opin Drug Metab toxicol. (2021) 17:259–71. doi: 10.1080/17425255.2021.1862084, PMID: 33292029 [PMID:33292029]
79. 79 PalmrothMKuulialaKPeltomaaRVirtanenAKuulialaAKurttilaA. Tofacitinib suppresses several JAK-STAT pathways in rheumatoid arthritis in vivo and baseline signaling profile associates with treatment response. Front Immunol. (2021) 12:738481. doi: 10.3389/fimmu.2021.738481, PMID: 34630419 PMC8498592 [PMID:34630419]
80. 80 VeeravalliVDashRPThomasJABabuRJMadgulaLMVSrinivasNR. Critical assessment of pharmacokinetic drug–drug interaction potential of tofacitinib, baricitinib and upadacitinib, the three approved janus kinase inhibitors for rheumatoid arthritis treatment. Drug safety. (2020) 43:711–25. doi: 10.1007/s40264-020-00938-z, PMID: 32367507 [PMID:32367507]
81. 81 DorstJLudolphACHuebersA. Disease-modifying and symptomatic treatment of amyotrophic lateral sclerosis. Ther Adv neurological Disord. (2018) 11:1756285617734734. doi: 10.1177/1756285617734734, PMID: 29399045 PMC5784546 [PMID:29399045]
