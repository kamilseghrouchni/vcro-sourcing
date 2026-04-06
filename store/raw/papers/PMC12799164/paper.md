---
pmid: "41512036"
pmc: "PMC12799164"
doi: "10.1073/pnas.2513311123"
title: "Highly sensitive chemiluminescence imaging of misfolded proteins in neurodegenerative models"
journal: "Proceedings of the National Academy of Sciences of the United States of America"
year: 2026
authors:
  - name: "Zhu Biyue"
    affiliations:
      - ""
  - name: "Liu Zhenhua"
    affiliations:
      - ""
  - name: "Van Richard"
    affiliations:
      - ""
  - name: "Wang Huizhe"
    affiliations:
      - ""
  - name: "Kuang Shi"
    affiliations:
      - ""
  - name: "Jia Yuntao"
    affiliations:
      - ""
  - name: "Leon Erick Calderon"
    affiliations:
      - ""
  - name: "Yang Fan"
    affiliations:
      - ""
  - name: "Zhang Jing"
    affiliations:
      - ""
  - name: "Yang Jun"
    affiliations:
      - ""
  - name: "Hong Howard"
    affiliations:
      - ""
  - name: "Lobo Fleur"
    affiliations:
      - ""
  - name: "Yu Astra"
    affiliations:
      - ""
  - name: "Wang Johnson"
    affiliations:
      - ""
  - name: "Tanzi Rudolph E."
    affiliations:
      - ""
  - name: "Zhang Can"
    affiliations:
      - ""
  - name: "Mao Xiaobo"
    affiliations:
      - ""
  - name: "Shao Yihan"
    affiliations:
      - ""
  - name: "Ran Chongzhao"
    affiliations:
      - ""
---

# Highly sensitive chemiluminescence imaging of misfolded proteins in neurodegenerative models

## Abstract

Protein misfolding in the brain is a key pathological hallmark of neurodegenerative diseases. Optical imaging of misfolded proteins in disease models is essential for elucidating etiology and early diagnosis. However, developing specific optical imaging probes for each misfolded protein is time-consuming and challenging, leaving many pathological targets without effective detection tools, especially for in vivo imaging. Here, we present a dual-mode chemiluminescence strategy that enables both generic and specific detection of misfolded proteins using a single probe platform. In the generic mode, we demonstrate that ADLumin-1, a chemiluminescent probe, enables highly sensitive detection of diverse misfolded proteins in vitro, achieving up to 128-fold higher signal enhancement than Thioflavin T, and allows noninvasive imaging in mice models of Parkinson’s disease, Alzheimer’s disease, and amyotrophic lateral sclerosis. In the specific mode, ADLumin-1 combined with protein misfolding cyclic amplification allows femtomolar-level detection of α-synuclein in cerebrospinal fluid, while integration with a bio-orthogonal chemiluminescence resonance energy transfer technique enables in vivo discrimination of α-synuclein from Aβ. This dual-mode, modular approach offers a practical solution to the current probe limitations, with potential preclinical and clinical applications in neurodegenerative disorders.

## Introduction

Neurodegenerative diseases such as Alzheimer’s disease (AD) and Parkinson’s disease (PD) are progressive disorders affecting millions of individuals (1–4). Abnormal protein misfolding in the brain is the central pathological hallmark driving neurodegeneration (1–4). The most extensively studied misfolded proteins include β-amyloid (Aβ) (5, 6), tau (7), α-synuclein (α-syn) (8) amylin (9), polyglutamine (PolyQ) (10), transthyretin (TTR) (11), and serum amyloid A (SAA) (12). Structural studies using Cryo-EM microscopy have revealed that despite differences in primary sequence, many misfolded proteins share conserved β-sheet-rich architectures with hydrophobic pockets formed by residues such as Ala, Val, Ile, Leu, and Phe (13–16). However, the underlying etiology remains elusive, and effective targeted therapies are still lacking (1–4). Therefore, dynamic monitoring of misfolded proteins is critical for advancing disease understanding and accelerating the development of diagnostic and therapeutic strategies.

Optical imaging probes represent powerful tools for detecting protein aggregates. Thioflavin T (ThT) is widely used for in vitro and ex vivo detection (17–19), and recently showed promise in biofluid-based diagnosis (20–23). However, its utility is limited by low sensitivity, autofluorescence, poor brain permeability, and shallow tissue penetration (17–19). While recent fluorescent probes targeting Aβ and tau have improved detection in vitro and in vivo (24–26), fluorescence-based imaging still faces sensitivity challenges due to biological autofluorescence and light scattering (27–29). More recently, chemiluminescence imaging has emerged as a promising technology for highly sensitive detection (30–33). Without the need for excitation light, chemiluminescence effectively avoids interference from biological autofluorescence, thereby improving sensitivity and enabling deeper tissue penetration (28). However, most chemiluminescent moieties require enzymes or hydrogen peroxide for activation, and very few chemiluminescent probes are available for detecting cerebral misfolded proteins (30–33). To date, many misfolded protein targets still lack specific and sensitive detection tools, particularly for in vivo application (24–26). Thus, the development of probes with high sensitivity and in vivo imaging capability remains resource-intensive and slow.

To address this gap, we developed a dual-mode chemiluminescence imaging strategy based on a single small-molecule probe, ADLumin-1. This platform supports both generic detection of diverse misfolded proteins and target-specific detection when integrated with protein misfolding cyclic amplification technologies in vitro and bio-orthogonal chemiluminescence resonance energy transfer (ChRET) in vivo. ADLumin-1 targets conserved hydrophobic sites within β-sheet structures, enabling sensitive detection of multiple misfolded species and imaging of α-syn, tau, and TDP-43 deposits in transgenic mice. Notably, the combination with cyclic amplification allows highly sensitive detection of α-synuclein in cerebrospinal fluid at femtomolar levels. Additionally, the ChRET technique enables selective in vivo imaging of α-synuclein distinct from Aβ. This work establishes a modular and broadly applicable strategy for sensitive detection of misfolded proteins, with implications for both basic research and clinical diagnosis.

## Results

### ADLumin-1’s specificity to β-sheet-rich structures

In our previous work, we showed that ADLumin-1 exhibits strong chemiluminescence turn-on upon binding to hydrophobic cavities within Aβ fibrils. This signal is specifically triggered in autooxidation upon binding with β-sheet-rich environments, where restricted molecular motion inhibits the twisted intramolecular charge transfer (TICT) process (28). Given the prevalence of conserved β-sheet architectures among misfolded proteins (13, 14) (34, 35) and the binding pose of the β-sheet-responsive dye ThT (Fig. S1), we hypothesized that ADLumin-1 could serve as a generic probe for β-sheet-rich structures (Fig. 1A).

To investigate the specificity of ADLumin-1 for β-sheet-rich fibrils, we employed four peptide amphiphiles (PAs, PA-K, PA-K2, PA-E, and PA-E2) with distinct self-assembly properties (Fig. 1B, S2A)(36). While PA-E and PA-K is driven mainly by electrostatic interactions, PA-E2 and PA-K2 incorporate β-sheet-promoting valine and alanine residues, enabling fibrillization via van der Waals forces and hydrogen bonding (36). After 72 hours of incubation under aggregating conditions, TEM revealed abundant fibrils in PA-K2 and PA-E2 samples, with sparse formation in PA-K and PA-E groups (Fig. 1C, S2B). Circular dichroism (CD) spectroscopy confirmed dominant β-sheet signatures in PA-K2 and PA-E2, whereas PA-K exhibited minimal β-sheet content and PA-E adopted random coil conformations (Fig. 1D, S2C).

We next assessed ADLumin-1’s responsiveness to β-sheet-rich fibrils. Incubation with PA-K2 produced a dramatic chemiluminescence signal enhancement (4170 ± 88-fold), substantially higher than with PA-K (248 ± 20-fold), yielding a 17-fold specificity ratio for β-sheet-rich structures (Fig. 1E). Moreover, ADLumin-1 achieved a 128-fold higher signal enhancement than Thioflavin T when bound to PA-K2 (Fig. 1F). The probe also displayed concentration-dependent linear response across 10–500 μM PA-K2 (Fig. 1G, H), indicating its quantitative detection capability.

We next evaluated the chemiluminescence response of ADLumin-1 to PA-E and PA-E2. Consistent with the PA-K/PA-K2 results, ADLumin-1 produced a selectively stronger signal with PA-E2 than with PA-E (Fig. S2D), and achieved a 52-fold higher signal enhancement than ThT when bound to PA-E2 (Fig. S2E). The probe also exhibited a concentration-dependent linear increase in signal across PA-E2 concentrations ranging from 1 to 100 μM (Fig. S2F, G). Notably, the two β-sheet-forming peptides displayed distinct decay kinetics: PA-K2 had a half-life of 31 min, while PA-E2 showed a longer half-life of 42 min, likely reflecting differential turnover rates of ADLumin-1 within the hydrophobic channels of β-sheet fibrils (28). Furthermore, interaction with α-helix-rich human serum albumin (HSA) resulted in rapid signal decay. After 30 minutes, the chemiluminescence intensity for PA-K2 was 106-fold higher than that for HSA (Fig. S2H, I), indicating strong and specific binding of ADLumin-1 to β-sheet-rich hydrophobic cavities, in contrast to transient, non-specific interactions with helical structures.

We further examined whether ADLumin-1 could detect oligomeric species, which are toxic intermediates in early protein misfolding (37), and poorly detected by ThT (38). Using the CATCH peptide (CATCH+ and CATCH-), which rapidly assembles into β-sheet-rich oligomers upon mixing (Fig. S3A–C)(39, 40), we observed a strong chemiluminescence response from ADLumin-1 (Fig. S3D, E), yielding a 1.7-fold higher signal enhancement than ThT (Fig. S3D).

Together, these findings demonstrate that ADLumin-1 exhibits high sensitivity, selectivity, and robust response for β-sheet-rich fibrils and oligomers, outperforming conventional ThT-based detection.

### ADLumin-1 is a generic chemiluminescence probe for misfolded proteins

To evaluate the interaction of ADLumin-1 with misfolded proteins, we prepared fibrillar aggregates of α-syn, Aβ, tau, and TDP-43, as confirmed by TEM and ThT fluorescence (Fig. S4). ADLumin-1 exhibited substantial chemiluminescence enhancement upon binding, with signal increases of 112 ± 13-fold for α-syn, 171 ± 23-fold for Aβ, 26.2 ± 4.1-fold for tau, and 14.7 ± 1.4-fold for TDP-43. These values substantially exceeded those of ThT, outperforming it by 82.8 ± 9.7-fold for α-syn, 74.5 ± 10.2-fold for Aβ, 14.9 ± 2.3-fold for tau, and 11.4 ± 1.1-fold for TDP-43 (Fig. 2A). Furthermore, ADLumin-1 discriminated strongly between fibrillar and monomeric forms, showing 26.4 ± 3.1-fold higher signal for α-syn fibrils, 22.8 ± 1.4-fold for Aβ, 2.83 ± 0.37-fold for tau, and 6.54 ± 0.49-fold for TDP-43 (Fig. S5). Interestingly, distinct decay half-lives were observed among different proteins (Table S1), suggesting the potential of ADLumin-1 for differentiating misfolded species.

We further elucidated the key chemical moieties of ADLumin-1 responsible for its β-sheet selectivity and signal amplification using structure-activity relationship (SAR) analysis. Molecular docking with Cryo-EM structures revealed that ADLumin-1 binds along the longitudinal axis of fibrils, engaging hydrophobic tunnels lined by Ala, Val, or Phe residues (Fig. 2B, C; Table S2). Key interactions include π–π stacking between the dimethylaminophenyl group and hydrophobic/aromatic residues (e.g., F19 in Aβ, V74 and A56 in α-synuclein, V350 in tau, F239 in TDP-43), as well as electrostatic/cation–π interactions involving the imidazo[1,2-a]pyrazin-3(7H)-one heterocycle and basic/hydrophobic residues (e.g., K28 in Aβ, V350 in tau). This binding mode restricts intramolecular rotation, facilitating signal amplification via the twisted intramolecular charge transfer (TICT) mechanism (28). In addition, this binding mode was consistent across additional misfolded proteins including prion, amylin, and transthyretin, where ADLumin-1 again showed higher signal enhancement than ThT (Fig. S6A) and similar structural interactions with Val and Phe within β-sheet grooves (Fig. S6B).

To evaluate ADLumin-1’s binding behavior across structural variants, we performed docking studies using multiple human-derived and recombinant fibril polymorphs of Aβ, α-syn, and TDP-43 (41–44). Molecular docking revealed that ADLumin-1 consistently binds along the long-axis of various recombinant and patient-derived fibrils, primarily via hydrophobic interactions with residues such as Ala, Val, Phe, and Tyr (Fig. S7). Notably, its binding affinity varied among β-sheet polymorphs (Table S3). For instance, affinity for patient-derived α-synuclein polymorph 6XYQ was high (-8.79 kcal/mol), but substantially weaker for 8A9L (-4.97 kcal/mol). A similar trend was observed for recombinant α-synuclein fibrils (e.g., 6PEO: -8.80 kcal/mol vs. 6SSX: -6.88 kcal/mol) and extended to Aβ, tau, and TDP-43 fibrils. These differences suggest that while ADLumin-1 maintains a consistent binding mode, the accessibility and complementarity of the binding site are polymorph-dependent. Interestingly, human-derived fibrils (Aβ: 2M4J, 8QN6, 8QN7; α-syn: 8A9L; TDP-43: 8CGG) exhibited more complex binding modes, reflecting greater structural heterogeneity. Tau fibrils also showed diverse binding poses, consistent with their known isoform and morphological variability (41).

We further assessed ADLumin-1’s responsiveness to oligomeric species (Fig. S8, 9). Compared to ThT, which showed minimal signal changes, ADLumin-1 produced substantial chemiluminescence enhancement with purified oligomers of Aβ (42.4 ± 3.3-fold), tau (25.0 ± 0.6-fold), and TDP-43 (17.2 ± 3.6-fold) (Fig. S9A). The signal enhancement of ADLumin-1 relative to ThT reached 34.5 ± 2.7 for Aβ, 23.8 ± 0.6 for tau, and 16.5 ± 3.4 for TDP-43 oligomers (Fig. S9B).

To specifically investigate β-sheet-dependent recognition, we compared dopamine-induced α-syn oligomers (disordered, lack β-sheet) and unmodified α-syn oligomers (β-sheet-rich) (Fig. S8) (45, 46). ThT showed negligible response to dopamine-induced oligomers and only a mild signal increase with unmodified oligomers. In contrast, ADLumin-1 exhibited strong signal for β-sheet-rich unmodified oligomers (91.6 ± 12.1-fold) and minimal response to disordered oligomers (1.31 ± 0.04-fold) (Fig. 2D). The signal enhancement ratio of ADLumin-1 to ThT was 66.1 ± 8.7 for unmodified oligomers and 1.21 ± 0.04 for dopamine-induced oligomers (Fig. 2E), underscoring the probe’s selectivity toward β-sheet-rich conformations.

Taken together, our results suggested that ADLumin-1 could serve as a highly sensitive generic chemiluminescence probe for detecting misfolded β-sheet structures.

### ADLumin-1 for visualizing misfolded tau and TDP-43 in vitro and in vivo

To explore its utility for visualizing other disease-relevant proteinopathies, we evaluated ADLumin-1 for non-invasive imaging of tau and TDP-43. Tau misfolding is a key pathological driver of Alzheimer’s disease, Pick’s disease, progressive supranuclear palsy, and related tauopathies (7). Binding affinity measurements yielded a moderate dissociation constant (Kd = 2.2 μM) between ADLumin-1 and tau aggregates (Fig. S10A). TDP-43 misfolding represents a key hallmark in amyotrophic lateral sclerosis (ALS) (47, 48). We measured the dissociation constant with the TDP-43 aggregates, showing Kd of 2.3 μM (Fig. S10B).

We further validated ADLumin-1’s specificity using postmortem AD brain sections, where ADLumin-1 clearly stained tau tangles, which confirmed by subsequent anti-p-tau immunostaining (Fig. S10C). Similarly. The probe clearly highlighted TDP-43 inclusions in brain sections from 6-month-old A315T transgenic mice, which was confirmed by anti-TDP-43 antibody staining (Fig. S10D).

Next, we evaluated the blood-brain barrier (BBB) permeability of ADLumin-1. After intravenous (i.v.) injection of ADLumin-1 into Balb/c mice, the probe effectively entered the brain within 5 min and was washed out by 60 min (Fig. S10E, F), achieving a %ID/g of 1.62 at 5 min. To assess in vivo imaging performance, we administered ADLumin-1 intraperitoneally to 10-month-old P301L tau transgenic mice and wild-type controls. The probe produced significantly stronger signals in transgenic animals across multiple time points, with a maximal differential of approximately 3.0-fold at 360 minutes post-injection (Fig. S10G, H). In addition, intravenous administration of ADLumin-1 in A315T ALS mice revealed a 3.6-fold signal increase compared to wild-type controls (Fig. S10I, J). In contrast to Aβ, tau, or α-syn models, successful TDP-43 imaging required intravenous rather than intraperitoneal injection. This suggests potential differences in the peritoneal microenvironment or biodistribution specific to the TDP-43 model.

Taken together, our data indicated that ADLumin-1 was capable of targeting tau and TDP-43 both in vitro and in vivo and could be used to monitor cerebral tau and TDP-43 misfolding in transgenic mouse models.

### ADLumin-1 enables highly sensitive and selective detection of misfolded α-syn in vitro

To further evaluate the detection capacity of ADLumin-1, we focused on α-synuclein (α-syn), a key pathological hallmark of Parkinson’s disease (PD) and Lewy body dementia (LBD) (8). Despite the availability of a few fluorescent probes for α-syn fibril detection (49, 50), highly sensitive detection of α-syn aggregates remain challenging (51).

First, we confirmed that ADLumin-1 could respond to both recombinant α-syn fibril (α-syn-R) and amplified α-syn fibril from patient brain extract (α-syn-P) (Fig. S11A). Next, we confirmed the binding affinity of ADLumin-1 to α-syn-R, with a dissociation constant (Kd) of 0.76 μM tested by chemiluminescence-based saturation assay (Fig. S11B) and a Kd of 0.77 μM tested by Bio-layer interferometry (BLI) (Fig. 3A). Furthermore, we investigated the binding of ADLumin-1 to α-syn-P. The saturation assay (Fig. S11B) and BLI assay (Fig. 3A) yielded Kd values of 1.48 μM and 1.12 μM, respectively. Interestingly, the chemiluminescence signal decay profiles differed between α-Syn-R and α-Syn-P fibrils (Fig. S11C), which may be attributed to their distinct structural polymorphs and binding affinities. The probe exhibited aggregation-dependent signal increase over 12–72 hours (Fig. S11D), which were confirmed by ThT (Fig. S11E). To validate specificity toward β-sheet-rich structures, we employed the aggregation inhibitors Apigenin and Resveratrol (52, 53). Sedimentation assays (54) revealed time-dependent fibril formation in untreated α-syn samples, indicated by rising chemiluminescence, whereas inhibitor-treated groups showed minimal signal change (Fig. S11F), confirming fibrillization inhibition that could be detected by ADLumin-1. Furthermore, ADLumin-1 demonstrated a lower limit of detection (LLOD) of 1 pg/mL (70 fM) for α-syn fibrils in PBS, yielding a signal enhancement fold of 2.31 ± 0.39 (Fig. S11G). A linear response was observed between 1–10 pg/mL (70–700 fM). In contrast, ThT failed to distinguish these concentrations (Fig. S11H), underscoring the superior sensitivity of ADLumin-1 for α-syn detection.

Given the established correlation between elevated misfolded α-syn levels in cerebrospinal fluid (CSF) and PD pathology (55, 56), we assessed the potential of ADLumin-1 to detect α-syn fibrils in CSF for possible in vitro diagnostic applications in PD and LBD. Initial attempts to detect spiked-in α-syn fibrils (70 fM) in CSF using ADLumin-1 alone were unsuccessful, which may due to nonspecific background interference.

To overcome this limitation, we leveraged the seeding capacity of α-syn fibrils, whereby preformed seeds accelerate monomer aggregation (Fig. 3B) (8, 57). ADLumin-1 reliably detected α-syn seeding activity in buffer, showing strong signal enhancement specifically in samples containing α-syn seeds, but weak enhancement in those with Aβ seeds and negligible change in seed-free controls (Fig. 3C). We therefore integrated ADLumin-1 with protein misfolding cyclic amplification (PMCA), which employs cyclic sonication to amplify seeding activity (Fig. 3D) (55, 58). This combination enabled robust detection of 70 fM α-syn in CSF, yielding a signal increase of 3956 ± 32-fold over controls (Fig. 3E).

In addition, we evaluated ADLumin-1’s ability to detect α-syn in human CSF using a plate-based cyclic amplification assay (Fig. 3F). In seeding experiments, ADLumin-1 showed 52.8 ± 9.4-fold signal enhancement when spiked with 35 pM α-synuclein seeds, outperforming ThT with a 32.2 ± 5.7-fold increase (Fig. 3G–I). Based on these results, we conducted a preliminary detection experiment using CSF samples from PD patients and non-PD controls. Importantly, ADLumin-1 successfully distinguished PD samples from controls (p < 0.0001), exhibiting 69.3 ± 14.4-fold signal enhancement, which was 19.7 ± 3.1-fold higher than that of ThT (Fig. 3J–L).

In addition, we evaluate the binding of ADLumin-1 to pathological α-syn aggregates in postmortem PD patient brain tissue (temporal lobe sections, 85-year-old, male) (59). ADLumin-1 robustly highlighted Lewy bodies and Lewy neurites (Fig. S12), demonstrating strong binding to patient-derived α-syn pathology (note: ADLumin-1 is intrinsically fluorescent).

These results demonstrate that ADLumin-1, when coupled with protein misfolding cyclic amplification technologies, enables highly sensitive detection of misfolded α-syn in CSF, highlighting its potential as an in vitro diagnostic tool for synucleinopathies.

### In vivo detection of α-syn fibrils with ADLumin-1

To assess in vivo detection of cerebral α-syn pathology, we intracranially injected α-syn fibrils (62.5 μM, 400 nL) into the substantia nigra of 22-month-old female C57/BL6J mice (n = 5). After one month, ADLumin-1 was administered and 3D diffuse luminescent imaging tomography (DLIT) was performed (Fig. 4A). ADLumin-1 specifically labeled deep-brain α-syn aggregates and produced robust chemiluminescence signals (Fig. 4B). Reconstructed images further confirmed high selectivity for α-syn with minimal off-target binding.

We next evaluated ADLumin-1 in transgenic A53T mice expressing human mutant α-syn under a prion promoter, which recapitulate cerebral α-syn accumulation (60). Female A53T (n = 5) and wild-type (WT, n = 5) mice were imaged longitudinally from 4 to 12 months of age. Following intraperitoneal injection of ADLumin-1, transgenic mice exhibited stronger brain signals than WT controls (Fig. 4C, D). Signal intensity peaked at ∼40 min post-injection, with a 2.1-fold difference between groups (Fig. 4D). ADLumin-1 also demonstrated prolonged emission in transgenic mice, maintaining a signal enhancement of 177 ± 75 at 180 minutes over the pre-injection background (Fig. S13A). Interestingly, a significant signal difference (1.3-fold) was detectable as early as 4 months (Fig. 4E). The probe enabled continuous monitoring of α-syn progression, with the A53T/WT signal ratio increasing over time and reaching 2.6-fold by 12 months (Fig. 4E). Post-imaging histology at 12 months confirmed colocalization of ADLumin-1 with anti-α-syn antibody-stained Lewy bodies and diffuse cytoplasmic inclusions in transgenic brains (Fig. 4F), supporting specific in vivo binding and biodistribution of the probe.

In addition, we conducted correlation analyses ex vivo using brain extracts containing fibrils and oligomers from transgenic mice (5, 7, and 9 months old). Post-mortem biochemical analysis with ELISA revealed a strong correlation (Pearson’s R2 = 0.99, P < 0.05) between ADLumin-1 imaging signals and the concentrations of both oligomers (Fig. S13B) and fibrils (Fig. S13C), supporting the probe’s high sensitivity to pathological burden.

Together, these findings demonstrate that ADLumin-1 enables non-invasive, sensitive, and longitudinal detection of α-syn aggregates in live mice.

### Discovery of NIR fluorophores for selective bio-orthogonal-ChRET imaging of misfolded α-syn

For specific in vivo imaging of α-syn, we developed a bio-orthogonal chemiluminescence resonance energy transfer (ChRET) strategy (28, 61), employing ADLumin-1 as a chemiluminescent donor targeting β-sheets and a near-infrared (NIR) fluorescent acceptor selective for α-syn. When both probes co-bind the same fibril within 10 nm and their spectra overlap, ChRET produces redshifted emission, enabling proximity-based specific imaging (Fig. 5A).

However, selective small molecular NIR fluorescence probes for in vivo imaging of α-syn fibrils are limited (50). To identify a suitable acceptor, we screened a NIR fluorophore library (24, 25, 28, 62) by measuring fluorescence changes upon addition of α-syn fibrils (Fig. 5B). CRANAD-14 (Fig. 5C, S14–S16) exhibited the strongest fluorescence enhancement (Fig. S17A, B; Fig. 5D) and a suitable wavelength for ChRET (Fig. S17C). With high affinity (Kd = 13.0 ± 2.3 nM) and selectivity for α-syn over Aβ (Fig. S18), CRANAD-14 robustly labeled α-syn inclusions in postmortem PD brain sections with minimal Aβ cross-reactivity (Fig. 5E) and discriminated transgenic α-syn mice from wild-type controls via specific labeling of cerebral α-syn aggregates (Fig. 5F–I, Fig. S19).

We next assessed ChRET via spectral unmixing in solution and in nude mice. A pronounced dual-emission turn-on was observed only in samples containing both α-syn aggregates and CRANAD-14, while controls showed minimal emission, confirming robust α-syn-dependent ChRET in PBS (Fig. S20A–C) and mouse brain homogenates (Fig. S20D, E). ChRET was also confirmed in nude mice, showing two distinct emission peaks (Fig. S20F–J). These results establish CRANAD-14 as a highly specific α-syn acceptor suitable for in vivo bio-orthogonal ChRET imaging.

### In vivo bio-orthogonal-ChRET Imaging with ADLumin-1/CRANAD-14 pair

To validate in vivo ChRET imaging, A53T transgenic and wild-type (WT) mice received intravenous CRANAD-14 (4 mg/kg) followed by intraperitoneal ADLumin-1 (8 mg/kg) 30 minutes later. Chemiluminescence signals were acquired across 500–800 nm and automatically unmixed (Fig. 6A). Unmixed images and quantitative analysis revealed significantly higher signal in A53T mice compared to WT controls (Fig. 6B, C). The bio-orthogonal ChRET strategy produced a 2.98 ± 0.27-fold higher signal in A53T mice, outperforming CRANAD-14 fluorescence imaging (2.26 ± 0.25) and ADLumin-1 chemiluminescence imaging (2.06 ± 0.57) alone (Fig. 6D).

To confirm α-syn specificity, 5xFAD mice (Aβ model) were imaged under identical conditions. Normalized in vivo emission spectra from 5xFAD brains differed markedly from A53T, with distinct peaks at 600 nm after WT background subtraction, compared to the 700 nm peak characteristic of α-syn-dependent ChRET in A53T mice (Fig. 6E, F). This redshift, consistent with in vitro ChRET emission (Fig. S20), indicates selective energy transfer occurs only in the presence of misfolded α-syn, not Aβ.

Together, these results demonstrate that the ADLumin-1/CRANAD-14 ChRET strategy enables selective in vivo imaging of cerebral α-syn aggregates with enhanced sensitivity and spectral specificity.

## Discussion

In this study, we present ADLumin-1, a chemiluminescence probe capable of detecting multiple misfolded proteins in vitro and in transgenic models of AD, ALS, and PD. ADLumin-1 offers key advantages over current gold standard ThT dye and previously reported probes: 1) high sensitivity via excitation-free emission and low autofluorescence (30–33); 2) enable oligomer detection (17–19); 3) suitability for in vivo imaging; 4) flexible administration (IV or IP), unlike IV-restricted fluorescent probes (24, 26, 63).

Using α-syn as an example, we demonstrated that ADLumin-1 enables detection of α-syn-R, α-syn-P, and oligomers. Longitudinal imaging showed that chemiluminescence signals in the brains of transgenic mice increased from 4 to 12 months of age, indicating early-stage protein misfolding in A53T mice, consistent with recent evidence (64). However, a major challenge remains in distinguishing oligomers from fibrils by in vivo imaging, and further efforts are urgently needed.

Furthermore, we demonstrated the dual capacity of ADLumin-1 for both generic and selective detection. For in vitro specific detection, we combined ADLumin-1 with protein misfolding cyclic amplification technology (22, 23, 58). Using either CSF samples spiked with α-syn seeds or CSF from PD patients, we showed that ADLumin-1 acts as a highly sensitive and selective probe for α-syn detection in biofluids, exhibiting a substantially higher signal enhancement than ThT. These findings lay the foundation for the translational development of ADLumin-1 as a promising diagnostic tool. Future clinical validation of ADLumin-1 combined with PMCA or RT-QuIC is warranted to further assess its diagnostic performance and benchmark it against existing platforms such as SIMOA. Ongoing studies in our laboratory are expanding in vitro diagnostic and binding analyses using clinical isolates.

For specific in vivo imaging, a non-conjugated bio-orthogonal ChRET approach was applied, successfully differentiating α-syn from Aβ pathology, which remains a key bottleneck in neurodegeneration imaging (28, 61). With ongoing advances in imaging probes, spectral unmixing algorithms, and 3D reconstruction, this methodology could be extended to distinguish a broad range of proteinopathies in living systems and potentially enable multiplexed imaging of Aβ, tau, and α-syn.

In summary, we validated the high specificity of ADLumin-1 for β-sheet-rich fibrils, achieving up to 128-fold signal enhancement over ThT and broad detection across multiple misfolded proteins. ADLumin-1 enabled in vivo imaging of α-syn, tau, and TDP-43 pathologies in transgenic mice and achieved selective α-syn detection through integration with PMCA in vitro and bio-orthogonal ChRET imaging in vivo. With its high sensitivity, versatility, and low cost, ADLumin-1 provides a powerful and practical tool for detecting misfolded proteins, offering strong potential for early diagnosis and therapeutic development in neurodegeneration.

## Materials and Methods

### General Information.

All reagents were commercial products and used without further purification. Palmitic peptide PA-K (sequence: KKK), PA-K2 (sequence: VVVAAAKKK), PA-E (sequence: EEE), PA-E2 (sequence: VVVAAAEEE), CATCH+ (QQKFKFKFKQQ) and CATCH- (EQEFEFEFEQE) were purchased from Genscript. Synthetic α-syn and Aβ1–40 peptide were purchased from rPeptide. Tau preformed fibrils were purchased from StressMarq. Transthyretin protein was purchased from Sinobiological. Prion protein and amylin were purchased from Sigma-Aldrich. Anti-Alpha-synuclein aggregate antibody [MJFR-14–6–4–2] (ab209538), Anti-Tau (phospho S404) antibody [EPR2605], (ab92676), Anti-TDP43 antibody [EPR5810] (ab109535) were purchased from Abcam. Alexa Fluo555-conjugated goat anti-rabbit IgG (H+L) secondary antibody was purchased from Thermofisher (A-21428). Cerebrospinal fluid (CSF) and paraffin brain tissue samples are commercially available products from Innovative Research or Novus Biologicals. B6;C3-Tg(Prnp-SNCA*A53T)83Vle/J mice (RRID:IMSR_JAX:004479), STOCK Mapttm1.1Cole/J (RRID:IMSR_JAX:033373), B6.Cg-Tg(Prnp-TARDBP*A315T)95Balo/J (RRID:IMSR_JAX:010700), and wild-type mice were purchased from the Jackson lab. All animal experiments were approved by the Institutional Animal Use and Care Committee (IACUC) at Massachusetts General Hospital (approval number: 2011N000161), and carried out in accordance with the approved guidelines. CSF samples from both PD and non-PD individuals were collected from Xiangya Hospital of Central South University. The collection and use of these samples were approved by the Hospital’s Medical Ethics Review Committee (Approval No. 2024121568) and adhered to strict ethical guidelines, including the procurement of written informed consent from all participants.

### Protein Aggregates Preparation.

α-syn protein (70 μM) was dissolved in PBS buffer (1X, pH = 7.4) and incubated for 72 h with constant shaking. Other misfolded proteins were prepared by following a similar incubation protocol as α-syn protein, and the successful formation of protein aggregates was confirmed by the standard dye of thioflavin T (15 μM). The samples are characterized by following previously reported methods (46, 65). The detailed preparation methods are in SI.

### Chemiluminescence Detection with ADLumin-1.

Protein samples were dissolved in PBS buffer (1X, pH = 7.4). To a solution of protein aggregates, an ADLumin-1 DMSO stock solution was added (final concentration: 15 μM in 5% DMSO/PBS buffer). Misfolded proteins were tested at a concentration of 50 μM unless specified. The mixture was immediately transferred to a black 96 or 384 well and observed with an IVIS®Spectrum imaging system (Caliper Life-Sciences, Perkin Elmer) with an open filter. The signals were recorded from 5 min to 200 min, and the region-of-interests (ROI) were quantified by LivingImage® 4.2.1 software. The signal increase was calculated by the ratio of the highest chemiluminescence intensity of samples to the blank control group. Half-life times of the signal decay were calculated by using GraphPad Prism 8.0 with nonlinear regression decay.

### Molecular Docking.

The ligand structure was built and optimized using IQmol (IQmol, version 2.15.3). The receptor structures (PDB: 6LNI, 6VW2, 5O3L, 6PEO, 5OQV, 7OB4) were then loaded in UCSF Chimera (UCSF Chimera, version 1.15). The receptor structures were then prepared for docking through Dock Prep, which added hydrogen atoms and assigned atomic partial charges. For standard residues, AMBER ff14SB charges were used, while Gasteiger charges were assigned for nonstandard residues. AutoDock Vina 1.2 was used to dock the ligand to the receptor using the default settings. The initial docking was conducted by constructing a box encompassing the entire protein and finding the best (global) docking position within that box. Ligand plots were generated using Schrödinger Maestro (Schrödinger Maestro, version 13.0.137) by using a ligand-protein complex of each of the best docking results for each protein that was made using Chimera.

### Binding Affinity.

For chemiluminescence-based saturation assay, different concentrations of ADLumin-1 (0–40 μM, 10% DMSO/PBS) were mixed with α-syn fibrils (250 nM) or PBS solution. The mixture was immediately transferred to a 96-well black plate, and the chemiluminescence intensity was recorded using an IVIS imaging system. Dissociation constants (Kd) were calculated using GraphPad Prism 8.0 with nonlinear one-site binding regression. The binding affinity of CRANAD-14 for α-syn aggregates or Aβ aggregates was measured by the following procedure: Aβ aggregates (500 nM), α-syn aggregates (500 nM) or PBS solution were mixed with different concentrations of CRANAD-14 (0–500 nM). The mixture was added into a quartz cuvette, and the fluorescence intensities were quantified by an F-7100 fluorescence spectrometer (Hitachi, Japan). Dissociation constants (Kd) were calculated using GraphPad Prism 8.0 with nonlinear one-site binding regression.

BLI assays were performed on an Octet RED384 system. Streptavidin-coated biosensors were loaded with biotinylated α-synuclein fibrils (250 nM). Association kinetics were measured by exposing the sensors to a concentration gradient of ADLumin-1 (0 – 40 μM) in PBS buffer, followed by dissociation in PBS. Sensorgrams were reference-subtracted (biosensor dipped in buffer only) and globally fitted to a 1:1 binding model to determine the association (k_on) and dissociation (k_off) rates. The equilibrium dissociation constant (Kd) was calculated as k_off/k_on.

### Protein Misfolding Cyclic Amplification (PMCA) Assay.

Seed samples were prepared by spiking α-syn aggregates (70 fM, final concentration, sonicated before adding) into cerebrospinal fluid (CSF). 40 μL of seed samples or CSF were added to 200 μL 70 μM α-syn monomer solution in 100 mM PIPES, pH 6.5, and 500 mM NaCl. Samples were subjected to cyclic amplification (1 min shaking followed by 29 min incubation) at 37 °C (66). After cyclic amplification, samples were transferred to a 384-well black plate, followed by adding ADLumin-1 (15 μM in 5% DMSO/PBS buffer) and measured with an IVIS®Spectrum imaging system (Caliper Life-Sciences, Perkin Elmer) equipped with a bioluminescence filter. The signals were recorded at 5 min to 200 min and the ROIs were quantified by LivingImage® 4.2.1 software. Microplate-based cyclic amplification assays were performed using similar protocols. Detailed procedures are provided in the supplementary materials.

### 3D Imaging of Cerebral α-syn.

Stereotactic injection surgery was conducted by using C57BL/6J mice (female, 9-month-old, n = 5). Freshly prepared α-syn aggregates (62.5 μM, 400 nL, 0.02 nL/sec) were injected into the substantial nigra region of mice (AP: -3.29 mm; ML: ±1.25 mm; DV: -4.35 mm). After recovering for 1 month, the mice were anesthetized and head-shaved, followed by scanning background signals with an IVIS®Spectrum animal imaging system (Caliper Life-Sciences, Perkin Elmer). A solution of ADLumin-1 (8 mg/kg) was freshly prepared in the mixed solvent (15% DMSO, 15% cremorphor and 70% PBS). 100 μL of ADLumin-1 was intravenously injected to the mice, followed by acquiring CT images. At the same time, the chemiluminescence signals were recorded with the blocked excitation and several filters of emission (560 nm to 660 nm) under the DLIT mode of the IVIS system. The images were automatically reconstructed by a LivingImage software® 4.2.1.

### In Vivo Imaging.

Female transgenic α-syn A53T mice (Tg) and age-matched wild-type mice (WT) (n = 5, 4–12 months old) were anesthetized and shaved in the brain region. Background signals were recorded by using an IVIS®Spectrum animal imaging system (Caliper Life-Sciences, Perkin Elmer). 100 μL freshly prepared ADLumin-1 (8 mg/kg, 15% DMSO, 15% cremorphor, and 70% PBS) was intraperitoneally injected into the mice, and chemiluminescence signals were recorded with the parameter of blocked excitation and open filter of emission by using IVIS system. Same imaging protocol was used for P301L tau (n = 3, 10 months old) and A315T transgenic mice (n = 3, 6 months old). For CRANAD-14 imaging, 4 mg/kg CRANAD-14 in a mixed solvent (15% DMSO, 15% cremorphor, and 70% PBS) was intravenously injected to 9-month-old A53T or wild-type mice. Then, the mice images were acquired from 0 to 60 min under an excitation wavelength of 605 nm and emission wavelength of 680 nm. Data analysis was conducted by calculating the average radiance [p/s/cm2/sr] of ROI with LivingImage® 4.2.1 software. The signal intensity at each time point was normalized by deducting the background signal.

### Fluorophore Screening.

CRANAD-X library with 137 small molecules were synthesized by our lab. 50 μL of α-syn aggregates (50 nM) or PBS solution were added to each well of a black 96-well plate, followed by adding a 2.5 μL solution of CRANAD-X (final concentration: 5 μM, in 5% DMSO/PBS). After incubating for 30 min in a dark room, the plate with or without α-syn aggregates were scanned by an IVIS®Spectrum imaging system (Caliper Life-Sciences, Perkin Elmer) equipped with fluorescence filters (excitation = 605~710 nm; emission = 660~840 nm). The signal was quantified by the LivingImage software, and the fluorescence intensity of test groups at each filter was normalized by deducting the signal of blank control groups.

### Bio-orthogonal-ChRET.

For in vitro studies, 200 μL 25uM α-syn aggregates or PBS solution was mixed with 5 μL CRANAD-14 (final concentration: 25 uM in 2.5% DMSO/PBS) or DMSO solution. The samples were incubated for 30 min, followed by the addition of ADLumin-1 (15 μM in 5% DMSO/PBS buffer). For in vivo mimic studies, 45 μL 25uM α-syn aggregates were added into 2.5 μL 15 μM ADLumin-1 solution and mixed with or without 2.5 μL 25 uM CRANAD-14 solution. Nude mice (female, 6 weeks old, n = 3) were anesthetized, and the left and right hind limbs were subcutaneously injected with different sample solutions. For in vivo studies, head-shaved transgenic A53T, 5xFAD and wild-type mice (female, 9-month-old, n = 3) were intravenously injected with CRANAD-14 (4 mg/kg). After 30 min, the mice were intraperitoneally injected with 8 mg/kg ADLumin-1. The samples or mice were placed into an IVIS system, and the sequence images were acquired with open filter and different emission filters (open filter and 500~800 nm). ROI was drawn around the wells or mice brains for quantifying the signal. The data were analyzed by Living Image 4.2.1 software with guided spectra unmixing method and default parameters.

### Statistical analysis.

Quantitative data shown as mean ± s.e.m. were analyzed by GraphPad Prism 8.0 software. P values were determined by unpaired two-tailed Student’s t-tests. The differences were considered significant when P ≤ 0.05.

## Supplementary Material

Supplemental Materials

## Acknowledgements

AcknowledgmentsNational Institutes of Health grant R01AG055413 (NIH, CR)National Institutes of Health grant R01AG083759 (NIH, CR)National Institutes of Health grant R01AG085562 (NIH, CR)National Institutes of Health grant R21AG059134 (NIH, CR)National Institutes of Health grant R56AG059814 (NIH, CR)National Institutes of Health grant R21AG078749 (NIH, CR)National Institutes of Health grant S10OD028609 (NIH, CR)Natural Science Foundation of Chongqing Municipality CSTB2024NSCQ-MSX0365 (NSCQ, BZ)Chongqing Science and Health Joint Medical Research Project 2025MSXM061 (BZ)

## References

1. 1.FraserPE (2014) Prions and prion-like proteins. J. Biol. Chem 289(29):19839–19840.24860092 10.1074/jbc.R114.583492PMC4106303 [PMID:24860092]
2. 2.FrostB & DiamondMI (2010) Prion-like mechanisms in neurodegenerative diseases. Nat. Rev. Neurosci 11(3):155–159.20029438 10.1038/nrn2786PMC3648341 [PMID:20029438]
3. 3.MarciniukK, TaschukR, & NapperS (2013) Evidence for prion-like mechanisms in several neurodegenerative diseases: potential implications for immunotherapy. Clin Dev Immunol 2013:473706.24228054 10.1155/2013/473706PMC3817797 [PMID:24228054]
4. 4.HallidayM, RadfordH, & MallucciGR (2014) Prions: generation and spread versus neurotoxicity. J. Biol. Chem 289(29):19862–19868.24860100 10.1074/jbc.R114.568477PMC4106307 [PMID:24860100]
5. 5.TzotzosS & DoigAJ (2010) Amyloidogenic sequences in native protein structures. Protein Sci. 19(2):327–348.20027621 10.1002/pro.314PMC2865711 [PMID:20027621]
6. 6.ChenGF, (2017) Amyloid beta: structure, biology and structure-based therapeutic development. Acta Pharmacol. Sin 38(9):1205–1235.28713158 10.1038/aps.2017.28PMC5589967 [PMID:28713158]
7. 7.WangY & MandelkowE (2016) Tau in physiology and pathology. Nat. Rev. Neurosci 17(1):5–21.26631930 10.1038/nrn.2015.1 [PMID:26631930]
8. 8.StefanisL (2012) alpha-Synuclein in Parkinson’s disease. Cold Spring Harb. Perspect. Med 2(2):a009399.22355802 10.1101/cshperspect.a009399PMC3281589 [PMID:22355802]
9. 9.LorenzoA, RazzaboniB, WeirGC, & YanknerBA (1994) Pancreatic islet cell toxicity of amylin associated with type-2 diabetes mellitus. Nature 368(6473):756–760.8152488 10.1038/368756a0 [PMID:8152488]
10. 10.FanHC, (2014) Polyglutamine (PolyQ) diseases: genetics to treatments. Cell Transplant. 23(4–5):441–458.24816443 10.3727/096368914X678454 [PMID:24816443]
11. 11.GreveAM, ChristoffersenM, Frikke-SchmidtR, NordestgaardBG, & Tybjaerg-HansenA (2021) Association of Low Plasma Transthyretin Concentration With Risk of Heart Failure in the General Population. JAMA cardiology 6(3):258–266.33237279 10.1001/jamacardio.2020.5969PMC7689572 [PMID:33237279]
12. 12.LiuzzoG, (1994) The prognostic value of C-reactive protein and serum amyloid a protein in severe unstable angina. N. Engl. J. Med 331(7):417–424.7880233 10.1056/NEJM199408183310701 [PMID:7880233]
13. 13.ChouPY & FasmanGD (1974) Conformational parameters for amino acids in helical, beta-sheet, and random coil regions calculated from proteins. Biochemistry 13(2):211–222.4358939 10.1021/bi00699a001 [PMID:4358939]
14. 14.ChouPY & FasmanGD (1974) Prediction of protein conformation. Biochemistry 13(2):222–245.4358940 10.1021/bi00699a002 [PMID:4358940]
15. 15.SawayaMR, HughesMP, RodriguezJA, RiekR, & EisenbergDS (2021) The expanding amyloid family: Structure, stability, function, and pathogenesis. Cell 184(19):4857–4873.34534463 10.1016/j.cell.2021.08.013PMC8772536 [PMID:34534463]
16. 16.ScheresSHW, Ryskeldi-FalconB, & GoedertM (2023) Molecular pathology of neurodegenerative diseases by cryo-EM of amyloids. Nature 621(7980):701–710.37758888 10.1038/s41586-023-06437-2 [PMID:37758888]
17. 17.LeVineH, 3rd (1999) Quantification of beta-sheet amyloid fibril structures with thioflavin T. Methods Enzymol 309:274–284.10507030 10.1016/s0076-6879(99)09020-5 [PMID:10507030]
18. 18.PeccatiF, (2017) Binding of Thioflavin T and Related Probes to Polymorphic Models of Amyloid-beta Fibrils. J Phys Chem B 121(38):8926–8934.28851223 10.1021/acs.jpcb.7b06675 [PMID:28851223]
19. 19.WolfeLS, (2010) Protein-induced photophysical changes to the amyloid indicator dye thioflavin T. Proc Natl Acad Sci U S A 107(39):16863–16868.20826442 10.1073/pnas.1002867107PMC2947910 [PMID:20826442]
20. 20.SaborioGP, PermanneB, & SotoC (2001) Sensitive detection of pathological prion protein by cyclic amplification of protein misfolding. Nature 411(6839):810–813.11459061 10.1038/35081095 [PMID:11459061]
21. 21.MakaravaN, SavtchenkoR, & BaskakovIV (2017) Methods of Protein Misfolding Cyclic Amplification. Methods Mol Biol 1658:169–183.28861790 10.1007/978-1-4939-7244-9_13PMC7052956 [PMID:28861790]
22. 22.AtarashiR, SanoK, SatohK, & NishidaN (2011) Real-time quaking-induced conversion: a highly sensitive assay for prion detection. Prion 5(3):150–153.21778820 10.4161/pri.5.3.16893PMC3226039 [PMID:21778820]
23. 23.AtarashiR, (2011) Ultrasensitive human prion detection in cerebrospinal fluid by real-time quaking-induced conversion. Nat Med 17(2):175–178.21278748 10.1038/nm.2294 [PMID:21278748]
24. 24.RanC, (2009) Design, synthesis, and testing of difluoroboron-derivatized curcumins as near-infrared probes for in vivo detection of amyloid-beta deposits. J. Am. Chem. Soc 131(42):15257–15261.19807070 10.1021/ja9047043PMC2784241 [PMID:19807070]
25. 25.ZhangX, (2013) Design and synthesis of curcumin analogues for in vivo fluorescence imaging and inhibiting copper-induced cross-linking of amyloid beta species in Alzheimer’s disease. J. Am. Chem. Soc 135(44):16397–16409.24116384 10.1021/ja405239vPMC3927838 [PMID:24116384]
26. 26.CuiM, (2014) Smart near-infrared fluorescence probes with donor-acceptor structure for in vivo detection of beta-amyloid deposits. J. Am. Chem. Soc 136(9):3388–3394.24555862 10.1021/ja4052922 [PMID:24555862]
27. 27.VerwilstP, (2017) Rational Design of in Vivo Tau Tangle-Selective Near-Infrared Fluorophores: Expanding the BODIPY Universe. J. Am. Chem. Soc 139(38):13393–13403.28857559 10.1021/jacs.7b05878 [PMID:28857559]
28. 28.YangJ, (2020) Turn-on chemiluminescence probes and dual-amplification of signal for detection of amyloid beta species in vivo. Nature communications 11(1):4052.10.1038/s41467-020-17783-4PMC742643132792510 [PMID:32792510]
29. 29.JiangY & PuK (2021) Molecular Probes for Autofluorescence-Free Optical Imaging. Chem. Rev 121(21):13086–13131.34558282 10.1021/acs.chemrev.1c00506 [PMID:34558282]
30. 30.YangM, (2020) Chemiluminescence for bioimaging and therapeutics: recent advances and challenges. Chem Soc Rev 49(19):6800–6815.32929428 10.1039/d0cs00348d [PMID:32929428]
31. 31.RanC & PuK (2023) Molecularly generated light and its biomedical applications. Angew Chem Int Ed Engl:e202314468.37955419 10.1002/anie.202314468 [PMID:37955419]
32. 32.ZhangJ, (2023) In vivo three-dimensional brain imaging with chemiluminescence probes in Alzheimer’s disease models. Proc. Natl. Acad. Sci. U. S. A 120(50):e2310131120.38048460 10.1073/pnas.2310131120PMC10723133 [PMID:38048460]
33. 33.LiuJ, HuangJ, WeiX, ChengP, & PuK (2024) Near-Infrared Chemiluminescence Imaging of Chemotherapy-Induced Peripheral Neuropathy. Adv. Mater 36(11):e2310605.38040414 10.1002/adma.202310605 [PMID:38040414]
34. 34.ZhuB, (2022) Epitope alteration by small molecules and applications in drug discovery. 13(27):8104–8116.10.1039/d2sc02819kPMC927812035919434 [PMID:35919434]
35. 35.ShabanHA, Valades-CruzCA, SavatierJ, & BrasseletS (2017) Polarized super-resolution structural imaging inside amyloid fibrils using Thioflavine T. Sci. Rep 7(1):12482.28970520 10.1038/s41598-017-12864-9PMC5624930 [PMID:28970520]
36. 36.WesterJR, (2020) Supramolecular Exchange among Assemblies of Opposite Charge Leads to Hierarchical Structures. J Am Chem Soc 142(28):12216–12225.32598851 10.1021/jacs.0c03529 [PMID:32598851]
37. 37.SotoC & PritzkowS (2018) Protein misfolding, aggregation, and conformational strains in neurodegenerative diseases. Nat. Neurosci 21(10):1332–1340.30250260 10.1038/s41593-018-0235-9PMC6432913 [PMID:30250260]
38. 38.ReinkeAA, AbulwerdiGA, & GestwickiJE (2010) Quantifying prefibrillar amyloids in vitro by using a “thioflavin-like” spectroscopic method. Chembiochem 11(13):1889–1895.20677203 10.1002/cbic.201000358PMC3244937 [PMID:20677203]
39. 39.ShaoQ, (2020) Anatomy of a selectively coassembled beta-sheet peptide nanofiber. Proc. Natl. Acad. Sci. U. S. A 117(9):4710–4717.32071201 10.1073/pnas.1912810117PMC7060663 [PMID:32071201]
40. 40.SeroskiDT, (2020) Charge guides pathway selection in β-sheet fibrillizing peptide co-assembly. Communications Chemistry 3(1):172.36703436 10.1038/s42004-020-00414-wPMC9814569 [PMID:36703436]
41. 41.LimorenkoG & LashuelHA (2022) Revisiting the grammar of Tau aggregation and pathology formation: how new insights from brain pathology are shaping how we study and target Tauopathies. Chem. Soc. Rev 51(2):513–565.34889934 10.1039/d1cs00127b [PMID:34889934]
42. 42.YangY, (2023) Cryo-EM structures of Abeta40 filaments from the leptomeninges of individuals with Alzheimer’s disease and cerebral amyloid angiopathy. Acta neuropathologica communications 11(1):191.38049918 10.1186/s40478-023-01694-8PMC10694933 [PMID:38049918]
43. 43.BalanaAT, (2024) O-GlcNAc forces an alpha-synuclein amyloid strain with notably diminished seeding and pathology. Nat. Chem. Biol 20(5):646–655.38347213 10.1038/s41589-024-01551-2PMC11062923 [PMID:38347213]
44. 44.LukavskyPJ, (2013) Molecular basis of UG-rich RNA recognition by the human splicing factor TDP-43. Nat. Struct. Mol. Biol 20(12):1443–1449.24240615 10.1038/nsmb.2698 [PMID:24240615]
45. 45.KumarST, (2020) How specific are the conformation-specific alpha-synuclein antibodies? Characterization and validation of 16 alpha-synuclein conformation-specific antibodies using well-characterized preparations of alpha-synuclein monomers, fibrils and oligomers with distinct structures and morphology. Neurobiol. Dis 146:105086.32971232 10.1016/j.nbd.2020.105086 [PMID:32971232]
46. 46.KumarST, DonzelliS, ChikiA, SyedMMK, & LashuelHA (2020) A simple, versatile and robust centrifugation-based filtration protocol for the isolation and quantification of alpha-synuclein monomers, oligomers and fibrils: Towards improving experimental reproducibility in alpha-synuclein research. J. Neurochem 153(1):103–119.31925956 10.1111/jnc.14955PMC7155127 [PMID:31925956]
47. 47.ChhanganiD, Martín-PeñaA, & Rincon-LimasDE (2021) Molecular, functional, and pathological aspects of TDP-43 fragmentation. iScience 24(5):102459.34013172 10.1016/j.isci.2021.102459PMC8113996 [PMID:34013172]
48. 48.MeadRJ, ShanN, ReiserHJ, MarshallF, & ShawPJ (2023) Amyotrophic lateral sclerosis: a neurodegenerative disorder poised for successful therapeutic translation. Nature Reviews Drug Discovery 22(3):185–212.36543887 10.1038/s41573-022-00612-2PMC9768794 [PMID:36543887]
49. 49.Xu M-m, (2020) Advances in the development of imaging probes and aggregation inhibitors for alpha-synuclein. Acta Pharmacol. Sin 41(4):483–498.31586134 10.1038/s41401-019-0304-yPMC7470848 [PMID:31586134]
50. 50.ZengQ & CuiM (2022) Current Progress in the Development of Probes for Targeting alpha-Synuclein Aggregates. ACS Chem. Neurosci 13(5):552–571.35167269 10.1021/acschemneuro.1c00877 [PMID:35167269]
51. 51.WangQ, (2023) Compact Luminol Chemiluminophores for In Vivo Detection and Imaging of β-Sheet Protein Aggregates. Anal Chem 95(2):1065–1073.36542087 10.1021/acs.analchem.2c03776 [PMID:36542087]
52. 52.StaatsR, (2020) Screening of small molecules using the inhibition of oligomer formation in α-synuclein aggregation as a selection parameter. Communications Chemistry 3(1):1–9.36703335 10.1038/s42004-020-00412-yPMC9814678 [PMID:36703335]
53. 53.ZhangLF, (2018) Resveratrol alleviates motor and cognitive deficits and neuropathology in the A53T-synuclein mouse model of Parkinson’s disease. Food & Function (12):9.10.1039/c8fo00964c30462117 [PMID:30462117]
54. 54.BuraiR, Ait-BouziadN, ChikiA, & LashuelHA (2015) Elucidating the Role of Site-Specific Nitration of alpha-Synuclein in the Pathogenesis of Parkinson’s Disease via Protein Semisynthesis and Mutagenesis. J. Am. Chem. Soc 137(15):5041–5052.25768729 10.1021/ja5131726 [PMID:25768729]
55. 55.ShahnawazM, (2017) Development of a Biochemical Diagnosis of Parkinson Disease by Detection of alpha-Synuclein Misfolded Aggregates in Cerebrospinal Fluid. JAMA neurology 74(2):163–172.27918765 10.1001/jamaneurol.2016.4547 [PMID:27918765]
56. 56.BhumkarA, (2021) Single-Molecule Counting Coupled to Rapid Amplification Enables Detection of alpha-Synuclein Aggregates in Cerebrospinal Fluid of Parkinson’s Disease Patients. Angew. Chem. Int. Ed. Engl 60(21):11874–11883.33511725 10.1002/anie.202014898PMC8251908 [PMID:33511725]
57. 57.KlugeA, (2022) Detection of neuron-derived pathological alpha-synuclein in blood. Brain 145(9):3058–3071.35722765 10.1093/brain/awac115 [PMID:35722765]
58. 58.SotoC, SaborioGP, & AnderesL (2002) Cyclic amplification of protein misfolding: application to prion-related disorders and beyond. Trends Neurosci. 25(8):390–394.10.1016/s0166-2236(02)02195-112127750 [PMID:12127750]
59. 59.AltayMF, (2023) Development and validation of an expanded antibody toolset that captures alpha-synuclein pathological diversity in Lewy body diseases. NPJ Parkinson’s disease 9(1):161.10.1038/s41531-023-00604-yPMC1070384538062007 [PMID:38062007]
60. 60.GiassonBI, (2002) Neuronal alpha-synucleinopathy with severe movement disorder in mice expressing A53T human alpha-synuclein. Neuron 34(4):521–533.12062037 10.1016/s0896-6273(02)00682-7 [PMID:12062037]
61. 61.YangJ, ZhuB, & RanC (2023) The Application of Bio-orthogonality for In Vivo Animal Imaging. Chem Biomed Imaging 1(5):434–447.37655167 10.1021/cbmi.3c00033PMC10466453 [PMID:37655167]
62. 62.ZhangX, (2015) Near-infrared fluorescence molecular imaging of amyloid beta species and monitoring therapy in animal models of Alzheimer’s disease. Proc. Natl. Acad. Sci. U. S. A 112(31):9734–9739.26199414 10.1073/pnas.1505420112PMC4534214 [PMID:26199414]
63. 63.VerwilstP, KimHS, KimS, KangC, & KimJS (2018) Shedding light on tau protein aggregation: the progress in developing highly selective fluorophores. Chem. Soc. Rev 47(7):2249–2265.29484335 10.1039/c7cs00706j [PMID:29484335]
64. 64.PellegriniC, (2022) Enteric alpha-synuclein impairs intestinal epithelial barrier through caspase-1-inflammasome signaling in Parkinson’s disease before brain pathology. NPJ Parkinson’s disease 8(1):9.10.1038/s41531-021-00263-xPMC875578335022395 [PMID:35022395]
65. 65.LauA, (2020) alpha-Synuclein strains target distinct brain regions and cell types. Nat. Neurosci 23(1):21–31.31792467 10.1038/s41593-019-0541-xPMC6930851 [PMID:31792467]
66. 66.ShahnawazM, (2020) Discriminating alpha-synuclein strains in Parkinson’s disease and multiple system atrophy. Nature 578(7794):273–277.32025029 10.1038/s41586-020-1984-7PMC7066875 [PMID:32025029]
