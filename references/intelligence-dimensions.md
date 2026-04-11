# Intelligence Dimensions

Every cohort recommendation must go beyond "this cohort exists" to
"here is what it means for your project." These are the 21 dimensions
the compiler extracts and the implications it surfaces.

The cue text under each dimension uses the locked example rotation
defined in `.claude/rules/example-rotation.md`:

- **A** Neuro fluid biomarker (AD plasma metabolomics, ADNI lineage)
- **B** Oncology tissue genomics (NSCLC FFPE bulk RNA-seq, TCGA-style)
- **C** Microbiome stool sequencing (IBD 16S + shotgun metagenomics)

The dimension frames are constant. The cue examples rotate. If a
cue only has an A, that is a bug in this file — extract may then
silently apply A's framing to non-A papers.

---

## 1. Sample usability

**Frame:** is this sample fit for the buyer's intended assay? Sample
medium, container or fixative, processing protocol, storage, freeze
or thaw or block-age history.

**Cues:**
- **A** Tube type (EDTA, heparin, citrate), fasting status, storage
  temperature, freeze-thaw cycles. Mismatches reshape metabolite or
  lipid panels.
- **B** Fixation type (FFPE vs FF), fixation time, block age, tumor
  cellularity, macrodissection or LCM applied. Long fixation degrades
  RNA; old blocks lose extractability.
- **C** Collection container (OMNIgene-GUT, ethanol, dry tube), time
  to freeze, transport temperature, homogenisation protocol. Cold
  chain breaks shift community composition within hours.

**Implication frame:** which downstream assays this sample is fit
for, which it is not, and what re-QA the buyer must budget for.

## 2. Real numbers vs headline numbers

**Frame:** the headline N is the published cohort size; the usable N
is the count of subjects that survive filtering by THIS request.
Always report the usable N first.

**Cues:**
- **A** UK Biobank says 274,259 but the AD subset is ~2,300. ADNI
  says 1,517 but the converters are 329. The model's training set is
  the converter count, not the headline.
- **B** TCGA-LUAD says 522 cases but only ~430 have FFPE blocks
  available, only ~340 have RNA-seq, and only ~190 have paired
  normal. The buyer's design dictates which intersection is the
  real N.
- **C** A 600-participant IBD cohort may have only ~210 with both
  baseline and post-flare stool, and only ~120 sequenced at shotgun
  depth (the rest 16S only).

**Implication frame:** the buyer plans their study on the usable N.
If the request is silent on filters, surface the largest defensible
intersection plus its derivation.

## 3. Longitudinal structure

**Frame:** number of timepoints, interval between visits, dropout per
timepoint, which timepoints have the relevant assay data, when the
event of interest occurs.

**Cues:**
- **A** Baseline / 12mo / 24mo with 22% dropout by year 2. Sparse
  beyond visit 3 limits long-term trajectory modelling.
- **B** Pre-treatment, on-treatment, progression biopsies. Repeat
  tissue collection is rare and selection-biased toward the worst
  responders, so dropout is non-random.
- **C** Daily or weekly stool sampling around a flare or therapy
  initiation. Adherence drops fast after week 2; the analysable
  window is usually shorter than the protocol claims.

**Implication frame:** is the longitudinal density sufficient for
the buyer's modelling horizon? Where is the dropout that breaks
power?

## 4. Confounders and exposures

**Frame:** documented exposures that alter the assay readout. The
named confounders depend on assay and disease area; the dimension
frame is constant.

**Cues:**
- **A** Lipid-modifying drugs (statins, fibrates, omega-3),
  antihypertensives, metformin. % of cohort on each, and whether the
  paper adjusted for it.
- **B** Neoadjuvant chemotherapy or radiation prior to the analysed
  biopsy. Tumor mutational burden and expression profiles shift
  systematically post-treatment.
- **C** Recent antibiotics (within 1, 3, 6 months), PPIs, dietary
  fibre intake, recent travel. Antibiotics within 30 days erase the
  community signal entirely.

**Implication frame:** which confounders are documented, at what
granularity, with what fraction affected, and whether the paper
adjusted for them. Silent on a load-bearing confounder = downgrade.

## 5. Demographic composition

**Frame:** age, sex, ancestry, relevant comorbidities, social
determinants. The composition determines what populations the
findings generalise to.

**Cues:**
- **A** 91% non-Hispanic White, 70% APOE e4 in disease arm vs 10%
  controls, mean age 74. Will not generalise to early-onset or
  diverse populations.
- **B** TCGA cohorts skew toward US academic medical centres,
  underrepresent Asian populations relative to disease incidence,
  and are enriched for surgical-eligible (early-stage) cases.
- **C** IBD cohorts are usually skewed toward European ancestry and
  Crohn's-vs-UC ratio varies by site. Pediatric vs adult onset are
  almost different diseases biologically.

**Implication frame:** does the buyer's target market match the
cohort's composition? Where is the diversity gap that limits
generalisation?

## 6. Co-modalities and multi-omics value

**Frame:** what else has been measured on the same participants. The
more orthogonal layers, the more the buyer's signal can be
cross-validated.

**Cues:**
- **A** Amyloid PET, CSF p-tau, structural MRI, GWAS — multimodal
  validation against gold-standard pathology markers.
- **B** Paired WES, methylation, proteomics on the same FFPE block.
  Tumor purity estimates from any one layer can be cross-checked
  against another.
- **C** Paired metabolomics, host transcriptomics from biopsy, serum
  cytokine panel, dietary records. Multi-kingdom integration.

**Implication frame:** can the buyer cross-validate their primary
hit against an orthogonal layer in the same participants?

## 7. Effect sizes and model performance

**Frame:** reported AUCs, fold changes, hazard ratios, p-values,
confidence intervals, and (critically) comparison to existing
benchmarks. Effect size sets the N the buyer needs to replicate.

**Cues:**
- **A** AUC 0.83 for case vs control, 3-5% fold change in lipid
  classes. Decent but not diagnostic. Pilots under n=100 will not
  see it.
- **B** Hazard ratio 1.4 for a TMB cutoff, 5-gene signature C-index
  ~0.65. Modest effect; plenty of room for spurious overfitting at
  small N.
- **C** Effect size for a single-taxon biomarker rarely exceeds
  log2-fold ~2 with high variance. Community-level metrics
  (alpha/beta diversity) are more reproducible than individual
  taxa.

**Implication frame:** what N does the buyer need to replicate?
Is the reported AUC plausible, or a sign of overfitting?

## 8. Replication and validation

**Frame:** whether the result was validated in an independent cohort,
which cohort, sample size, concordance of effect direction.

**Cues:**
- **A** Cross-validated in ASPREE (or AIBL, or J-ADNI). High
  confidence the signal is real and platform-portable.
- **B** TCGA discovery validated in CPTAC or ICGC at the protein and
  multi-omics level. Cross-platform replication is the gold
  standard.
- **C** A microbiome signal validated across both 16S and shotgun
  metagenomics on the same samples, plus across geographically
  distinct cohorts. Most published microbiome biomarkers fail
  external replication.

**Implication frame:** is the signal cohort-specific or platform-
specific, or does it hold across independent data?

## 9. Access and consent scope

**Frame:** the operational route from request to data or samples.
Consent terms, commercial use, DUA process, ethics, timeline.

**Cues:**
- **A** Open data portal (e.g. LONI, AD Knowledge Portal) with DUA.
  Standard 2-4 month process. Verify commercial-use terms.
- **B** Institutional biobank request, MTA negotiation, ethics
  amendment if not in original consent. 3-9 months. Some tumor
  biobanks restrict commercial use entirely.
- **C** Consortium portal (e.g. SRA, ENA) for sequence data, but
  raw stool samples are usually not retained. Live sample
  collection requires a fresh study.

**Implication frame:** does this access route fit the buyer's
timeline and commercial requirements? What is the highest-risk
gating step?

## 10. Sample depletion risk

**Frame:** are there enough physical aliquots left, given prior
consumption and any replenishment policy?

**Cues:**
- **A** N participants × M aliquots minus prior metabolomics studies.
  ADNI is well-aliquoted; smaller plasma cohorts may be near
  exhaustion after two prior assays.
- **B** FFPE blocks degrade with each section taken. A block already
  used for IHC, WES, and RNA-seq may not have enough material left
  for the buyer's protocol.
- **C** Stool aliquots are usually bulk-frozen; depletion is less
  about volume and more about freeze-thaw history (each thaw shifts
  community composition).

**Implication frame:** can the buyer's intended assay actually be
run on the remaining material? Is the cohort still being collected?

## 11. Negative results

**Frame:** what was tried and did not work. Negative results are
worth as much as positive ones — they prevent the buyer from
walking down the same dead end.

**Cues:**
- **A** "No significant association for acylcarnitines after FDR
  correction" — saves the buyer from chasing acylcarnitines as AD
  biomarkers in this cohort.
- **B** "Mutational signature X did not predict response to the
  buyer's drug class" — negative biomarker, just as actionable as
  a positive.
- **C** "Diversity metrics did not separate responders from
  non-responders; only specific taxa did" — narrows the buyer's
  feature set.

**Implication frame:** which paths are closed off, so the buyer
does not waste a study testing them again.

## 12. Published analysis code

**Frame:** are the analysis scripts public, in what language, and
is the raw data accessible?

**Cues:**
- **A** R or Python notebooks on GitHub, often archived on Zenodo
  with a DOI. Reproducibility is high in the consortium-driven
  neuro space.
- **B** Bioinformatics pipelines published as Snakemake or Nextflow
  workflows; raw FASTQ on dbGaP or EGA (controlled access).
  Reproducibility requires DUA approval first.
- **C** QIIME2 or DADA2 pipelines published as Jupyter notebooks;
  raw reads on SRA. Reproducibility is usually achievable but
  parameter sensitivity is high.

**Implication frame:** can the buyer reproduce the published
analysis as a sanity check before building on top?

## 13. Multi-site recruitment

**Frame:** number of participating sites, geographic spread,
protocol harmonisation across sites.

**Cues:**
- **A** ADNI runs at 60+ US sites with a centralised protocol and
  reference labs. Site effects are managed but not eliminated.
- **B** TCGA tissue contributions came from a small number of US
  academic medical centres. Geographic and ethnic diversity are
  limited.
- **C** Consortium IBD cohorts often span 5-15 sites across Europe
  and North America. Protocol harmonisation is the dominant
  technical risk.

**Implication frame:** does the multi-site structure broaden the
population the buyer's findings will apply to, or introduce site
effects that need to be modelled out?

## 14. Eligibility criteria

**Frame:** the inclusion and exclusion rules that defined the
cohort. These define exactly what population the buyer's model
will learn from.

**Cues:**
- **A** "MMSE >= 20, age 55-90" → mild AD only, no early-onset.
  Severe disease excluded.
- **B** "Stage I-IIIA NSCLC, surgical candidates, no neoadjuvant
  treatment" → biased toward early-stage operable disease, missing
  the metastatic population.
- **C** "Crohn's diagnosed >1 year prior, no biologics in 12 weeks,
  no antibiotics in 30 days" → washes out exactly the population
  most likely to be on therapy in clinical practice.

**Implication frame:** what population is excluded, and does the
buyer's intended use overlap with that exclusion?

## 15. Biospecimen retention and types

**Frame:** what was actually banked, in what format, and at what
volume.

**Cues:**
- **A** "plasma, serum, DNA, CSF, iPSC available" → full
  multi-omics + functional follow-up potential.
- **B** "FFPE blocks and matched frozen tissue, with adjacent
  normal" → enables both DNA/RNA workflows and validation in
  protein space.
- **C** "Whole stool aliquots at -80, plus DNA extracts" →
  re-sequencing or alternative protocols are feasible without
  requesting new samples.

**Implication frame:** does the banked material support the
buyer's specific workflow, or only the readouts already published?

## 16. Clinical endpoints and scales

**Frame:** what clinical or functional outcome the cohort tracks,
how often, with what scale.

**Cues:**
- **A** CDR, MMSE, ADAS-Cog at each visit; conversion to AD
  dementia as the event. Buyer can correlate molecular signal to
  cognitive trajectory.
- **B** OS, PFS, RECIST response, treatment regimen captured.
  Survival endpoints with censoring; mature follow-up matters more
  than headline N.
- **C** Disease activity index (Mayo, HBI, PUCAI), endoscopic
  scores (SES-CD, UCEIS), flare events, treatment escalations.
  Heterogeneous endpoint definitions across sites are the norm.

**Implication frame:** does the cohort track the outcome the buyer
needs to predict, with sufficient frequency and standardisation?

## 17. Sponsor and funding

**Frame:** who funds the cohort. Funding source is a strong proxy
for data-sharing posture and cohort longevity.

**Cues:**
- **A** NIH/NIA funded with explicit data-sharing requirements
  (e.g. ADNI, AMP-AD). Long-term maintenance is mandated.
- **B** NCI Cooperative Group or industry-sponsored trial. Industry
  data may be controlled-access; cooperative-group data is usually
  open after embargo.
- **C** Foundation- or charity-funded (e.g. Helmsley, Crohn's &
  Colitis Foundation). Data-sharing varies; community engagement is
  usually strong.

**Implication frame:** does the sponsor's posture make access
realistic for the buyer's commercial or academic intent?

## 18. Study timeline and status

**Frame:** when the cohort was collected, whether it is closed or
still recruiting, whether the data is fully released.

**Cues:**
- **A** Completed multi-year observational study with all
  timepoints released. Fixed sample set.
- **B** Trial completed years ago; biospecimens may or may not still
  be retained depending on sponsor IRB. Worth confirming before
  designing on assumed availability.
- **C** Still recruiting at participating sites. Buyer can time
  their request to a planned data freeze, or propose a
  collaboration on the next batch.

**Implication frame:** is the cohort growing, fixed, or shrinking?
Does the timeline align with the buyer's project window?

## 19. Provenance chain

**Frame:** the chain from patient to freezer to assay to data.
Which institution collected the sample, whether a broker or
intermediary was involved, which prior dataset this builds on.
Each link is either documented with a citation or marked UNKNOWN.

**Cues:**
- **A** "Samples obtained from the ADNI biorepository" — prior
  consortium chain, well-documented to the collection site level
  but rarely to the individual freezer.
- **B** "FFPE blocks provided by the institutional pathology
  department under MTA" — direct chain, single hop, easy to
  audit. Or: "purchased from a commercial vendor" — broker chain,
  origin opaque.
- **C** "Self-collected at home using shipped collection kits, sent
  by post to a central processing lab" — patient → courier →
  processor chain, explicit and unusual.

**Implication frame:** how trustworthy is the result given which
links are documented vs. inferred? This is the transparency
differentiator vCRO exists to surface.

## 20. Collection protocol detail

**Frame:** the specific operational steps that determine whether
the sample produces clean signal. The load-bearing pre-analytical
attribute varies by assay, but the dimension frame is constant.

**Cues:**
- **A** Tube catalogue number, centrifuge speed/time/temperature,
  time from venipuncture to freeze, aliquot volume, freeze-thaw
  cycle log.
- **B** Time from excision to fixation (cold ischaemia), fixation
  duration, fixative type, embedding date, storage humidity,
  block age at the time of sectioning.
- **C** Time from defecation to first freeze, container preservative
  (or none), homogenisation protocol, DNA extraction kit and lot,
  sequencing platform and read depth.

**Implication frame:** which downstream assays this protocol is fit
for, which it is not. Pre-analytical variability is the largest
source of noise in most reproducibility failures.

## 21. Institutional capacity

**Frame:** how active and how equipped this institution is as a
sample source. Trial count in the indication, publication count,
clinic patient volume estimates, presence of a dedicated biobank
with staff, prior experience with commercial requests.

**Cues:**
- **A** Large academic medical centre running multiple
  consortium-driven cohorts in the same indication. Dedicated
  biorepository with formal request process.
- **B** NCI-designated cancer centre with a tissue procurement core
  and a track record of MTAs to industry. Likely has standing
  pricing.
- **C** Smaller IBD specialty clinic that participates in a
  consortium but does not maintain its own sequencing pipeline.
  Capacity is collection, not analysis.

**Implication frame:** what is the realistic ceiling on what can be
sourced from this institution, and how much friction should the
buyer expect?

---

## How to use this file

These 21 dimensions are a vocabulary, not a checklist. Do NOT
extract all 21 for every cohort — that produces noise.

The extraction subagent reads the `scope_notes` from request.json
and uses judgment to decide which dimensions matter for THIS
specific request. The scope_notes are the brief.

Examples of selection by scope (one per locked example domain):

- **A** "Need longitudinal plasma samples for AD biomarker
  validation, n>=200, commercial use." → Focus on real numbers (2),
  longitudinal structure (3), confounders (4), access scope (9),
  collection protocol (20). Skip eligibility criteria (14) unless
  the request named exclusions.
- **B** "Looking for FFPE NSCLC blocks with paired RNA-seq for a
  tumor microenvironment signature." → Focus on sample usability (1),
  biospecimen retention (15), eligibility (14), confounders (4 — for
  neoadjuvant treatment), provenance chain (19), collection protocol
  (20 — for fixation time and block age).
- **C** "Stool samples from IBD patients pre and post biologic
  initiation, cold-chain documented." → Focus on sample usability
  (1), longitudinal structure (3), confounders (4 — for antibiotics
  and PPIs), access scope (9), collection protocol (20 — for
  cold-chain).

The subagent picks 5 to 8 dimensions per cohort based on the brief.
For each picked dimension, it extracts the fact AND the implication.
Dimensions not relevant to the request are omitted entirely.

## The rule

Never include a dimension without its implication. If you cannot
finish the sentence with "which means for the buyer's project..."
then do not include it. Facts without consequences are noise.
Intelligence is facts plus what they mean for the decision.
