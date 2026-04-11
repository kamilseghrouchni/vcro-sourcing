---
entity_id: bioivt-healthy-plasma-sncrna
type: cohort
canonical_name: "BioIVT Healthy Donor Plasma sncRNA Cohort (H1–H4)"
aliases:
  - BioIVT healthy plasma controls
  - healthy plasma samples H1-H4
parent_institution: bioivt
opportunity_type: hospital_inventory_signal
evidence_type: direct
disease_area:
  - "tuberculosis"
  - "infectious disease"
modality:
  - plasma sncRNA-seq
provenance:
  sources: [PMC10933579]
  last_compiled: 2026-04-07T00:00:00Z
  provenance_coverage:
    sample_usability: {status: covered, sources: 1}
    real_numbers: {status: covered, sources: 1}
    demographic_composition: {status: covered, sources: 1}
    eligibility_criteria: {status: covered, sources: 1}
    provenance_chain: {status: covered, sources: 1}
    collection_protocol_detail: {status: covered, sources: 1}
    access_and_consent_scope: {status: covered, sources: 1}
    sponsor_and_funding: {status: covered, sources: 1}
    overall_depth: 0.38
referenced_by: []
scoring:
  scale: {confidence: low}
  cost: {confidence: low}
  quality: {provenance_depth: 0.38, confidence: medium}
card:
  primary_signal: "4 healthy male plasma donors (H1–H4), ages 30–35, purchased from BioIVT; matched controls to the Mtb arm; T4 PNK-treated sncRNA-seq; raw data in SRA PRJNA986180."
  action: "Re-analysis: access SRA BioProject PRJNA986180 immediately (open). Physical re-order: contact BioIVT directly for lot availability and price per healthy donor aliquot."
  risk: "N=4 — discovery only, not suitable for classifier building. Provenance opaque: collection site, country of origin, and freeze-thaw history unknown."
---

# BioIVT Healthy Donor Plasma sncRNA Cohort (H1–H4)

## Summary

Four de-identified healthy male plasma donors (H1–H4), ages 30–35, were purchased from BioIVT as matched controls to the Mtb-positive arm in a study of immunostimulatory sncRNAs in circulation. Plasma was processed with T4 polynucleotide kinase (T4 PNK) pre-treatment to rescue non-standard RNA termini before sncRNA-seq on Illumina NextSeq 500 at Thomas Jefferson University's MetaOmics Core. Raw sequencing data are deposited in SRA (BioProject PRJNA986180) under open access. Physical samples require a commercial order from BioIVT with lot-matching.

## Real numbers

> "We do acknowledge certain limitations in the present study, including the small sample size and the absence of detailed clinical information for the samples collected from men testing positive for Mtb immunoreactivity."

[ref: PMC10933579]

The usable N for any buyer seeking to validate sncRNA biomarkers is 4 cases vs 4 controls — insufficient for statistical modelling; this dataset is a discovery signal only, which means for the buyer's project that a replication cohort with far larger N is required before any classifier can be built.

## Sample usability

> "When T4 PNK treatment was omitted, cDNA yields significantly decreased, confirming that most plasma sncRNAs lack 5′-P/3′-OH ends, as suggested by previous studies."

[ref: PMC10933579]

Standard small-RNA-seq kits (designed for miRNA) will fail to capture the majority of circulating sncRNAs in this plasma type, which means for the buyer's project that any contract research lab using conventional miRNA-seq on these samples will systematically miss the most informative species.

## Demographic composition

> "Given that the expression of tRNA halves and other sncRNAs can be affected by sex hormones and aging, we limited our study to males between 30 and 35 years old to minimize potential impacts of sex and age on sncRNA expression."

[ref: PMC10933579]

The cohort is entirely male and age-restricted; female patients and paediatric/elderly populations are unrepresented, which means for the buyer's project that any signature derived here cannot be assumed to generalise to those populations without additional validation.

## Eligibility criteria

> "We limited our study to males between 30 and 35 years old to minimize potential impacts of sex and age on sncRNA expression. We obtained plasma samples for sequencing from four healthy individuals (H1–4) and four patients infected with Mtb (M1–4)."

[ref: PMC10933579]

Healthy donor status was the inclusion criterion with age and sex restricted; no exclusion criteria on medications or comorbidities are documented, which means for the buyer's project that comorbidity status is unknown and cannot be controlled for.

## Provenance chain

> "We obtained the de-identified plasma samples from a biological specimen company, BioIVT."

[ref: PMC10933579]

The provenance chain is a single-hop broker purchase with the origin opaque, which means for the buyer's project that provenance audit is not feasible from the paper alone and any re-order of matched samples would require contacting BioIVT directly to check lot availability.

## Collection protocol detail

> "First, 500-μL aliquots of plasma samples were centrifuged at 16,100 × g for 5 min, after which 400 μL of supernatant were taken and mixed with synthetic spike-in RNAs (Table S3), followed by RNA extraction using TRIzol LS (Invitrogen). Further purification of the extracted RNAs was achieved using the miRNeasy Mini Kit (Qiagen)."

[ref: PMC10933579]

Downstream sncRNA-seq, especially for non-miRNA species with non-standard termini, requires T4 PNK pre-treatment — a step absent from standard miRNA kits — which means for the buyer's project that any new plasma collection must replicate this specific pre-analytical workflow or face severe underrepresentation of tRNA halves and rRFs.

## Access and consent scope

> "The Office of Human Research (OHR) of Thomas Jefferson University (TJU) approved our use of human plasma samples without any private information, adhering to all federal, institutional, and ethical guidelines. We obtained the de-identified plasma samples from a biological specimen company, BioIVT. The obtained sequence reads are publicly available from the NCBI Sequence Read Archive (BioProject: PRJNA986180)."

[ref: PMC10933579]

Sequencing data are openly accessible via SRA without a DUA; but physical plasma samples require a commercial order from BioIVT (pricing and lot availability unknown), which means for the buyer's project that data re-analysis is immediate but sample re-acquisition requires a vendor quote and lot-matching check.

## Sponsor and funding

> "This study was supported in part by National Institutes of Health grants (GM106047, HL150560, AI151641, AI168975, and AI171366 to Y.K.) and American Cancer Society Research Scholar Grant (RSG-17-059-01-RMC, to Y.K.)."

[ref: PMC10933579]

NIH-funded basic research with standard data-sharing obligations; the open SRA deposit follows from this, which means for the buyer's project that public data access is low-friction, but there is no commercial sponsor controlling sample access — physical samples must be sourced independently through BioIVT.

## Open questions

- BioIVT lot availability: whether additional healthy male plasma aliquots from the same donor pool can be re-ordered, and at what price, is unknown and requires direct inquiry to BioIVT.
- No freeze-thaw cycle history or cold-chain documentation is reported for the BioIVT plasma aliquots — a critical pre-analytical gap for any sncRNA validation study.
- Clinical metadata (country of origin, comorbidities, medications) are absent from BioIVT sample documentation — check NCBI BioProject PRJNA986180 metadata to see if Table S2 fields were deposited.
- The paper does not report whether extracellular vesicle isolation was performed on the plasma prior to sequencing (bulk plasma vs EV-enriched fraction).

## Links

- Institution: [[bioivt]]
- Platform: [[illumina-nextseq500-t4pnk-sncrna-seq]]
- Lead PI: [[yohei-kirino-tju]]
- Co-investigator: [[justin-gumas-tju]]
- Sources: PMC10933579
