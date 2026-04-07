---
entity_id: target-als-longitudinal-biofluid-proteomics
type: cohort
canonical_name: "Target ALS Longitudinal Biofluid Core — ALS Clinical Proteomics Cohort (TMTpro 35-plex, n=90–100 donors)"
aliases:
  - Target ALS biofluid cohort
  - Target ALS ALS CSF plasma proteomics
parent_institution: target-als-foundation
opportunity_type: published_cohort
evidence_type: direct
disease_area: [amyotrophic lateral sclerosis, ALS]
modality: [clinical proteomics, CSF, plasma, TMTpro 35-plex, DIA-PASEF]
provenance:
  sources: [PMC12927225]
  last_compiled: "2026-04-07"
card:
  primary_signal: "90–100 ALS donors (and healthy controls) with up to 5 longitudinal timepoints; 231 CSF + 297 plasma samples; TMTpro 35-plex quantitative proteomics; 2,939 CSF proteins / 1,139 plasma proteins quantified; intra-sample CV 13% (CSF) / 19% (plasma); open MS data at MassIVE MSV000099682."
  action: "Download proteomics data from Target ALS data engine (https://dataengine.targetals.org/collections) or MassIVE MSV000099682; for physical biofluid samples contact Target ALS Foundation (https://www.targetals.org/) — structured access process exists but commercial-use terms not stated."
  risk: "90–100 donors — modest N for subgroup analyses; clinical metadata (ALSFRS-R, disease stage, medication) not reported in this paper — must be retrieved from Target ALS data engine; physical biofluid commercial-use terms unconfirmed; depletion workflow removes specific off-target proteins (see Supplementary Table 2)."
scoring:
  scale:   {confidence: high}
  cost:    {confidence: medium}
  quality: {provenance_depth: 0.43, confidence: high}
---

## Overview

The Target ALS Longitudinal Biofluid Core Proteomics Cohort applies the validated Sahlgrenska "shake-and-bake" sample preparation workflow (High-Select Top14 immunodepletion + two-step Lys-C/trypsin digestion + TMTpro 35-plex labelling) to 231 CSF and 297 plasma samples from 90–100 ALS patients and healthy controls with up to 5 longitudinal timepoints. Samples were obtained from the Target ALS Foundation Longitudinal Biofluid Core. Proteomics performed on Tribrid Orbitrap (Lumos/Eclipse) and timsTOF HT (Evosep One LC, DIA-PASEF). MS data deposited to MassIVE (MSV000099682) and Target ALS data engine (PMC12927225).

**N:** 90–100 donors; 231 CSF + 297 plasma samples; up to 5 longitudinal timepoints per donor.
**Proteins quantified:** 2,939 in CSF; 1,139 in plasma (after Top14 depletion).
**Input volume:** 10 µL plasma; 50–75 µL CSF per sample.
**Technical reproducibility:** Intra-sample CV 13% CSF / 19% plasma (validated on 528-sample run).
**Access:** Open MS data (MassIVE MSV000099682, Target ALS data engine); physical samples via Target ALS Foundation.

## Key Findings (PMC12927225)

- 12 brain-enriched proteins (Human Protein Atlas category iii) detectable in plasma after Top14 depletion vs only 4 without — depletion expands brain-biomarker plasma coverage.
- DOC detergent marginally increased proteome coverage (+46 protein groups, ~4%) but reduced precision (CV 25% vs 20%) and throughput — closed dead end for high-throughput workflows.
- Paired CSF + plasma on same donors enables within-individual cross-biofluid biomarker validation.
- Open MS data enables immediate feasibility analysis before committing to a wet-lab engagement.

## Cohort-Level Flags

- Clinical metadata (ALSFRS-R, disease stage, time from diagnosis, medication, genetic variants) not reported in this methods paper — retrieve from Target ALS data engine linked files.
- Depletion removes some off-target protein groups including ANXA1 and MUC16; confirm target protein is not in the off-target loss list (Supplementary Table 2) before designing a study.
- Commercial-use terms for physical biofluid access must be confirmed with Target ALS Foundation before designing a commercial assay programme.
- Longitudinal coverage per individual varies; confirm per-donor visit count from the Target ALS portal before modelling trajectory biomarkers.
