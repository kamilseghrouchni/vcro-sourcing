# Catalog listing draft: Department of Neurology, University of Michigan

_Generated from 10 wiki entities linked to `university-of-michigan-neurology`. Last compiled 2026-04-06._

## Pitch

This draft summarises what vCRO already knows about your collections from published evidence. Review, correct anything wrong, fill in what is missing. The corrections feed back into the wiki and the listing publishes with verified provenance.

The University of Michigan Department of Neurology (`university-of-michigan-neurology`) is the primary clinical collection site for the ALS cohort described below. The NeuroNetwork for Emerging Therapies at the University of Michigan (`neuronetwork-emerging-therapies-michigan`) acts as the named sponsoring research unit for the same cohort, with overlapping investigators. Both are treated as the same institutional family in this draft; the anchor slug is `university-of-michigan-neurology`.

---

## What we know

### Sample types and quantities

Two distinct biological sample streams have been collected and assayed on the same ALS participants (cohort: `university-of-michigan-als-microbiome-metabolomics`, source: PMC10834248):

| Sample stream | Assay applied | Largest cited N | Source |
|---|---|---|---|
| Stool (gut microbiome) | 16S rRNA amplicon sequencing | UNKNOWN — not stated in available abstract | PMC10834248 |
| Plasma | Untargeted metabolomics (platform vendor unspecified) | UNKNOWN — not stated in available abstract | PMC10834248 |

Both streams were collected from the same longitudinal ALS cases and controls, enabling paired microbiome-metabolome analysis. Both headline N and usable case/control subgroup N are unknown from abstract-only extraction; the full Methods section is publisher-restricted (Oxford University Press / Brain journal).

### Disease areas

| Indication | Cohort entity_id |
|---|---|
| Amyotrophic lateral sclerosis (ALS) | `university-of-michigan-als-microbiome-metabolomics` |

No other disease areas are currently documented for this institutional family. All linked entities derive from a single published study (PMC10834248).

### Collection protocols

**Cohort: `university-of-michigan-als-microbiome-metabolomics`** (source: PMC10834248)

_Stool / gut microbiome stream (dim 20):_
- Collection container: UNKNOWN
- Time from defecation to first freeze: UNKNOWN
- Transport temperature and cold-chain documentation: UNKNOWN
- DNA extraction kit and lot: UNKNOWN
- Sequencing platform instrument: UNKNOWN (technique identified as 16S rRNA; vendor and variable region not reported in abstract)
- Variable region (e.g. V3-V4): UNKNOWN

_Plasma / metabolomics stream (dim 20):_
- Tube type (EDTA, heparin, citrate): UNKNOWN
- Fasting status at collection: UNKNOWN
- Time from venipuncture to freeze: UNKNOWN
- Aliquot volume: UNKNOWN
- Freeze-thaw cycle count: UNKNOWN
- Metabolomics platform vendor (e.g. Metabolon, Biocrates, in-house LC/MS): UNKNOWN

All protocol attributes for both streams are unknown from abstract-only extraction. The full Methods section is required to assess pre-analytical fitness for any reuse assay.

### Published analytical work

| Platform | Assay applied | Cohort citing | Source |
|---|---|---|---|
| 16S rRNA gut microbiome sequencing (`16s-rrna-gut-microbiome-sequencing`) | Gut microbiome community profiling; differential abundance at phylum and genus level; microbe-metabolite module construction | `university-of-michigan-als-microbiome-metabolomics` | PMC10834248 |
| Plasma metabolomics (vendor unknown) | Untargeted plasma metabolome profiling; Mendelian randomization on fatty acid and acylcarnitine lipids | `university-of-michigan-als-microbiome-metabolomics` | PMC10834248 |

Findings: gut microbial structure at the phylum level differed in ALS versus controls, with differential abundance at several genera. Unsupervised clustering identified microbe-metabolite modules that differed significantly between ALS and controls. Mendelian randomization indicated possible (not confirmed) causality from lipids related to fatty acid and acylcarnitine metabolism (PMC10834248).

### Estimated capacity

These are evidenced minima — the real capacity is usually larger.

| Metric | Count | Basis |
|---|---|---|
| Cohorts linked to this institutional family in the wiki | 1 | `university-of-michigan-als-microbiome-metabolomics` |
| Papers in the wiki for this institution | 1 | PMC10834248 |
| Investigators on file (UMich-affiliated) | 4 | eva-feldman-michigan, stephen-goutman-michigan, kai-guo-michigan, claudia-figueroa-romero-michigan |
| Related clinical trials at this institution | UNKNOWN — no NCT back-references in wiki yet |
| Aliquot counts remaining | UNKNOWN — not reported in available content |

Funding sources documented (PMC10834248): NIH/NCATS UL1TR002240, NINDS R01NS127188, NIEHS R01ES030049, NIEHS K23ES027221. Multi-agency federal funding with data-sharing obligations is confirmed.

### Access and consent (best evidence)

Source for all access information: cohort `university-of-michigan-als-microbiome-metabolomics`, dim 9, PMC10834248.

- **Publisher copyright on full text:** "© The Author(s) 2023. Published by Oxford University Press on behalf of the Guarantors of Brain. All rights reserved." This restricts full-text method access; it does not constrain sample or data access directly.
- **NIH funding data-sharing obligations:** Multi-agency NIH grants with data-sharing requirements suggest a formal data access mechanism (DUA or institutional agreement) is likely available, but not confirmed in the abstract.
- **Data deposition status:** Whether raw 16S reads are deposited in NCBI SRA and whether plasma metabolomics data are deposited in Metabolomics Workbench is UNKNOWN; the data availability statement in meta.json is empty.
- **Consent terms for commercial use:** UNKNOWN — not reported in available content.
- **Most permissive access path documented:** PI contact — Eva L. Feldman (corresponding author, UMich Dept. of Neurology / NeuroNetwork) is the documented first point of contact.
- **Least permissive constraint documented:** UNKNOWN — consent terms not captured.

---

## What we are missing

- **Total sample N (cases and controls)** — dim 2 (real numbers). Abstract does not state N. A buyer cannot assess statistical power or subgroup feasibility without this. Retrieve from full Methods.
- **Number of longitudinal timepoints and visit intervals** — dim 3 (longitudinal structure). Longitudinal design is confirmed but the number of visits and intervals are not stated. A buyer building a trajectory model cannot judge whether the temporal density is sufficient.
- **Dropout rate per timepoint** — dim 3 (longitudinal structure). Required to assess whether a longitudinal subgroup analysis is powered after attrition.
- **Stool collection container and time-to-freeze** — dim 20 (collection protocol, stool stream). Cold-chain documentation is entirely absent. A buyer running shotgun metagenomics or any community-sensitive assay needs this to estimate community-shift risk; 16S findings may not replicate at shotgun depth if cold chain was not controlled.
- **Stool DNA extraction kit and sequencing variable region** — dim 20 (collection protocol, stool stream). Without the extraction kit identity and variable region (e.g. V3-V4), a buyer cannot compare taxonomic resolution to their own prior studies or assess inter-study compatibility.
- **Plasma tube type, fasting status, and freeze-thaw cycle count** — dim 20 (collection protocol, plasma stream). These are the three highest-risk pre-analytical variables for plasma metabolomics reuse. Buyers running targeted or untargeted LC/MS cannot confirm assay compatibility without them.
- **Metabolomics platform vendor and method** — dim 1 (sample usability) and dim 20. Platform identity (e.g. Metabolon GlobalDiscovery, Biocrates AbsoluteIDQ, in-house UHPLC-QTOF) determines whether data can be reused directly and which assay a buyer might extend. Currently UNKNOWN.
- **Data deposition location** — dim 9 (access and consent). Whether 16S reads are on NCBI SRA and metabolomics data on Metabolomics Workbench is unknown. A buyer's access planning depends entirely on this.
- **Consent terms for commercial use** — dim 9 (access and consent). Commercial or for-profit research constraints are not documented. This is the primary gating risk for industry buyers.
- **Demographic composition: ancestry and APOE status** — dim 5 (demographic composition). Ethnicity/ancestry breakdown and APOE genotype distribution are not reported. Demographic transferability of ALS microbiome-metabolome findings to non-White or non-North-American populations is unknown.
- **Medication confounders: antibiotic and PPI use** — dim 4 (confounders and exposures). Recent antibiotic use is the single most disqualifying confounder for microbiome signal; it is not documented in the abstract. PPI use is similarly relevant. A buyer cannot assess signal validity without this.
- **ALS disease severity and staging at collection** — dim 16 (clinical endpoints and scales). Whether ALSFRS-R or equivalent functional scale was collected at each timepoint is unknown. Buyers correlating molecular data to clinical trajectory need this.
- **Whether the cohort is still recruiting** — dim 18 (study timeline and status). Current enrollment status is not documented. A buyer proposing a fresh sample collection or an add-on study needs to know whether the cohort is open.
- **Aliquot counts remaining** — dim 10 (sample depletion risk). Number of residual stool aliquots and plasma aliquots after prior assay use is unknown. A buyer cannot size their order without this.
- **Clinical trial back-references (NCT IDs)** — dim 21 (institutional capacity). No NCT-linked trials are in the wiki for this institution. UMich Neurology runs ALS trials; the gap understates institutional capacity.

---

## Linked entities

- **Cohort** — `university-of-michigan-als-microbiome-metabolomics` (University of Michigan ALS Gut Microbiome and Plasma Metabolomics Cohort)
- **Institution (anchor)** — `university-of-michigan-neurology` (Department of Neurology, University of Michigan) — role: collection_site
- **Institution (family)** — `neuronetwork-emerging-therapies-michigan` (NeuroNetwork for Emerging Therapies, University of Michigan) — role: sponsor
- **Investigator** — `eva-feldman-michigan` (Eva L. Feldman) — role: lead_pi, corresponding author
- **Investigator** — `stephen-goutman-michigan` (Stephen A. Goutman) — role: co_investigator, senior author
- **Investigator** — `kai-guo-michigan` (Kai Guo) — role: co_investigator
- **Investigator** — `claudia-figueroa-romero-michigan` (Claudia Figueroa-Romero) — role: co_investigator
- **Investigator** — `junguk-hur-north-dakota` (Junguk Hur, University of North Dakota) — role: co_investigator, bioinformatics lead
- **Platform** — `16s-rrna-gut-microbiome-sequencing` (16S rRNA Gut Microbiome Sequencing)
- **Source paper** — PMC10834248 (single source for all entities above)

---

## How to update this listing

Three options for the biobank reviewer:

1. **Confirm**: reply that everything is correct. The listing publishes as-is with a verified-by-institution flag.
2. **Correct**: reply with specific fixes. Each correction feeds back into the corresponding wiki entity through the compile/merge skill.
3. **Augment**: provide additional information for the gaps. Each new fact becomes a fragment that compile/extract turns into a wiki update.

Priority asks (gaps that block commercial access planning):

- Total N (cases + controls), timepoints, and dropout rate — needed to size any study.
- Stool collection container, time-to-freeze, and cold-chain log — needed for microbiome reuse feasibility.
- Plasma tube type, fasting status, freeze-thaw cycles — needed for metabolomics reuse feasibility.
- Data deposition location and consent terms for commercial use — needed before any access commitment.
