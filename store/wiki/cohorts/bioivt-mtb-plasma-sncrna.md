---
entity_id: bioivt-mtb-plasma-sncrna
type: cohort
canonical_name: "BioIVT Mtb-Infected Plasma sncRNA Cohort (M1–M4)"
aliases:
  - BioIVT tuberculosis plasma cohort
  - Mtb plasma samples M1-M4
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
  primary_signal: "4 Mtb-positive male plasma donors (M1–M4), ages 30–35, purchased from BioIVT; T4 PNK-treated sncRNA-seq reveals immunostimulatory tRNA halves and rRFs; SRA PRJNA986180 open access."
  action: "Re-analysis: access SRA BioProject PRJNA986180 immediately (open). Physical re-order: contact BioIVT for lot availability and antibiotic-treatment status disclosure."
  risk: "N=4 — discovery only. TB treatment status not documented — some donors may be on therapy, confounding the sncRNA signal. Collection site and country unknown."
---

# BioIVT Mtb-Infected Plasma sncRNA Cohort (M1–M4)

## Summary

Four de-identified Mtb-immunoreactive male plasma donors (M1–M4), ages 30–35, were purchased from BioIVT for a discovery study of immunostimulatory sncRNAs in plasma of tuberculosis patients. The study identified tRNA halves and rRNA-derived fragments (rRFs) with TLR7-stimulating capacity that are elevated in Mtb-positive plasma. The T4 PNK pre-treatment protocol is critical: without it, cDNA yields dropped significantly. Raw data are in SRA (BioProject PRJNA986180) under open access. Physical samples require a direct BioIVT commercial order. Authors acknowledge the small sample size and absence of detailed clinical metadata as limitations.

## Real numbers

> "We do acknowledge certain limitations in the present study, including the small sample size and the absence of detailed clinical information for the samples collected from men testing positive for Mtb immunoreactivity."

[ref: PMC10933579]

The usable N for any buyer seeking to validate sncRNA biomarkers is 4 cases vs 4 controls — insufficient for statistical modelling; this dataset is a discovery signal only, which means for the buyer's project that a replication cohort with far larger N is required before any classifier can be built.

## Sample usability

> "When T4 PNK treatment was omitted, cDNA yields significantly decreased, confirming that most plasma sncRNAs lack 5′-P/3′-OH ends, as suggested by previous studies."

[ref: PMC10933579]

Standard small-RNA-seq kits (designed for miRNA) will fail to capture the majority of circulating sncRNAs in this plasma type, which means for the buyer's project that any contract research lab using conventional miRNA-seq on these samples will systematically miss the most informative TB-associated species.

## Demographic composition

> "Given that the expression of tRNA halves and other sncRNAs can be affected by sex hormones and aging, we limited our study to males between 30 and 35 years old to minimize potential impacts of sex and age on sncRNA expression."

[ref: PMC10933579]

The cohort is entirely male and age-restricted; female patients and paediatric/elderly TB populations are unrepresented, which means for the buyer's project that any signature derived here cannot be assumed to generalise to those populations without additional validation.

## Eligibility criteria

> "We limited our study to males between 30 and 35 years old to minimize potential impacts of sex and age on sncRNA expression. We obtained plasma samples for sequencing from four healthy individuals (H1–4) and four patients infected with Mtb (M1–4)."

[ref: PMC10933579]

Inclusion: males 30–35 years, Mtb immunoreactivity positive. No exclusion criteria on antibiotic use, disease severity, or HIV co-infection are documented, which means for the buyer's project that some donors may be on TB therapy — a potential confound for sncRNA signal — and any new plasma collection must document treatment status.

## Provenance chain

> "We obtained the de-identified plasma samples from a biological specimen company, BioIVT."

[ref: PMC10933579]

The provenance chain is a single-hop broker purchase with the origin opaque, which means for the buyer's project that provenance audit is not feasible from the paper alone and any re-order of matched samples would require contacting BioIVT directly to check lot availability.

## Collection protocol detail

> "First, 500-μL aliquots of plasma samples were centrifuged at 16,100 × g for 5 min, after which 400 μL of supernatant were taken and mixed with synthetic spike-in RNAs (Table S3), followed by RNA extraction using TRIzol LS (Invitrogen). Further purification of the extracted RNAs was achieved using the miRNeasy Mini Kit (Qiagen)."

[ref: PMC10933579]

Downstream sncRNA-seq requires T4 PNK pre-treatment to convert non-standard RNA termini (5′-OH, 3′-P, 2′,3′-cP) to 5′-P/3′-OH before library preparation, which means for the buyer's project that any new plasma collection must replicate this specific pre-analytical workflow or face severe underrepresentation of tRNA halves and rRFs.

## Access and consent scope

> "The Office of Human Research (OHR) of Thomas Jefferson University (TJU) approved our use of human plasma samples without any private information, adhering to all federal, institutional, and ethical guidelines. We obtained the de-identified plasma samples from a biological specimen company, BioIVT. The obtained sequence reads are publicly available from the NCBI Sequence Read Archive (BioProject: PRJNA986180)."

[ref: PMC10933579]

Sequencing data are openly accessible via SRA without a DUA; but physical plasma samples require a commercial order from BioIVT (pricing and lot availability unknown), which means for the buyer's project that data re-analysis is immediate but sample re-acquisition requires a vendor quote and lot-matching check.

## Sponsor and funding

> "This study was supported in part by National Institutes of Health grants (GM106047, HL150560, AI151641, AI168975, and AI171366 to Y.K.) and American Cancer Society Research Scholar Grant (RSG-17-059-01-RMC, to Y.K.)."

[ref: PMC10933579]

NIH-funded basic research with standard data-sharing obligations; the open SRA deposit follows from this, which means for the buyer's project that public data access is low-friction, but there is no commercial sponsor controlling sample access — physical samples must be sourced independently through BioIVT.

## Open questions

- TB treatment status, disease severity, and HIV co-infection status are absent from BioIVT sample documentation — check NCBI BioProject PRJNA986180 metadata to see if Table S2 fields were deposited.
- BioIVT lot availability: whether additional matched Mtb-positive male plasma aliquots from the same donor pool can be re-ordered, and at what price, is unknown and requires direct inquiry.
- No freeze-thaw cycle history or cold-chain documentation is reported — a critical pre-analytical gap for any sncRNA validation study.
- The paper does not report whether extracellular vesicle isolation was performed prior to sequencing (bulk plasma vs EV-enriched fraction), which affects comparability with other TB sncRNA datasets.

## Links

- Institution: [[bioivt]]
- Platform: [[illumina-nextseq500-t4pnk-sncrna-seq]]
- Lead PI: [[yohei-kirino-tju]]
- Co-investigator: [[justin-gumas-tju]]
- Sources: PMC10933579
