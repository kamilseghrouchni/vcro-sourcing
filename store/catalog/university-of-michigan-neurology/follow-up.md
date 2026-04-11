# Follow-up checklist: Department of Neurology, University of Michigan

_Aggregated from listing.md (15 gaps), compliance.md, and pricing.md. Last compiled 2026-04-07._

This checklist is the operator's handoff to the institution's contact. Each bullet is one question or deliverable the institution must answer before the catalog listing publishes in full. Sorted by section. Items that were independently flagged by more than one source file are marked **(multi-source)**.

---

## Sample types and real numbers

- [ ] **Total participant N (cases and controls).** Abstract does not state N. Retrieve from full Methods. Without this, no buyer can assess statistical power or subgroup feasibility. _(listing.md dim 2)_
- [ ] **Number of longitudinal timepoints and visit intervals.** Longitudinal design is confirmed; number of visits and intervals are not stated. A buyer building a trajectory model cannot judge temporal density. _(listing.md dim 3)_
- [ ] **Dropout rate per timepoint.** Required to assess whether a longitudinal subgroup analysis is powered after attrition. _(listing.md dim 3)_
- [ ] **Remaining aliquot counts — stool.** How many stool aliquots remain after prior 16S assay use? Buyers cannot size an order without this. _(listing.md dim 10; pricing.md)_ **(multi-source)**
- [ ] **Remaining aliquot counts — plasma.** How many plasma aliquots remain after prior metabolomics use? Same rationale. _(listing.md dim 10; pricing.md)_ **(multi-source)**

---

## Collection protocols and pre-analytical

- [ ] **Stool collection container and time-to-freeze.** Cold-chain documentation is entirely absent. Required for microbiome reuse feasibility — 16S findings may not replicate at shotgun depth if cold chain was not controlled. _(listing.md dim 20)_
- [ ] **Stool DNA extraction kit and sequencing variable region (e.g. V3-V4).** Without the extraction kit identity and variable region, a buyer cannot compare taxonomic resolution to their own prior studies or assess inter-study compatibility. _(listing.md dim 20)_
- [ ] **16S sequencing vendor and instrument model.** The platform entity (`16s-rrna-gut-microbiome-sequencing`) is technique-level only; vendor and instrument are unspecified. Required for QA pricing and platform compatibility assessment. _(listing.md dim 20; pricing.md)_ **(multi-source)**
- [ ] **Plasma tube type, fasting status, and freeze-thaw cycle count.** The three highest-risk pre-analytical variables for plasma metabolomics reuse. Buyers running targeted or untargeted LC/MS cannot confirm assay compatibility without them. _(listing.md dim 20)_
- [ ] **Metabolomics platform vendor and method (e.g. Metabolon GlobalDiscovery, Biocrates AbsoluteIDQ, in-house UHPLC-QTOF).** Determines whether existing data can be reused and which assay a buyer would extend. Currently unknown. Required for assay-leg pricing anchor. _(listing.md dim 1 / dim 20; pricing.md)_ **(multi-source)**

---

## Consent and IRB

- [ ] **Consent regime (broad / disease-specific / academic-only / commercial-permitted).** The IRB-approved participant consent form has not been captured. This determines who can access samples and data and under what constraints. _(compliance.md)_ **(multi-source with listing.md dim 9)**
- [ ] **Commercial-use clause — explicit yes / no / requires-negotiation.** Whether industry buyers (pharmaceutical, CRO, diagnostics) may access the cohort under current consent is the primary gating risk for commercial access planning. The listing should not publish without an explicit answer. _(listing.md dim 9; compliance.md)_ **(multi-source)**
- [ ] **Re-consent or IRB amendment requirement for new analytes.** Would a buyer requesting fresh shotgun metagenomics or proteomics on banked material trigger a re-consent or IRB amendment? What is the estimated timeline? _(compliance.md)_
- [ ] **IRB protocol number.** Not captured in the wiki; required for any formal DUA or MTA negotiation. _(compliance.md)_

---

## Data deposition and access

- [ ] **Data deposition location — 16S raw reads.** Whether raw 16S sequencing reads are deposited in NCBI SRA (or another public/controlled-access repository) is unknown. Access planning depends entirely on this. _(listing.md dim 9; compliance.md)_ **(multi-source)**
- [ ] **Data deposition location — plasma metabolomics data.** Whether metabolomics data are deposited in Metabolomics Workbench or another repository is unknown. _(listing.md dim 9; compliance.md)_ **(multi-source)**
- [ ] **NIH Data Management and Sharing Plans (DMSP) for active grants.** Retrieve the filed DMSPs for UL1TR002240, R01NS127188, R01ES030049, and K23ES027221. These specify deposition timelines and access conditions. _(compliance.md)_
- [ ] **Standard DUA / MTA template.** Does the University of Michigan Office of Research have a standard DUA and/or MTA template for external data or sample requests? Buyers need to know whether a standard agreement exists or whether negotiation starts from scratch. _(compliance.md; pricing.md)_ **(multi-source)**

---

## Demographics and confounders

- [ ] **Demographic composition — ancestry and APOE status.** Ethnicity/ancestry breakdown and APOE genotype distribution are not reported. Demographic transferability of ALS microbiome-metabolome findings to non-White or non-North-American populations is unknown. _(listing.md dim 5)_
- [ ] **Medication confounders — antibiotic and PPI use.** Recent antibiotic use is the single most disqualifying confounder for microbiome signal and is not documented. PPI use is similarly relevant. Buyers cannot assess signal validity without this. _(listing.md dim 4)_

---

## Clinical endpoints and study status

- [ ] **ALS disease severity and staging at collection (e.g. ALSFRS-R scores).** Whether ALSFRS-R or equivalent functional scale was collected at each timepoint is unknown. Buyers correlating molecular data to clinical trajectory need this. _(listing.md dim 16)_
- [ ] **Current enrollment status — open / closed / on hold.** Whether the cohort is still recruiting is not documented. A buyer proposing a fresh sample collection or an add-on study needs to know. _(listing.md dim 18)_

---

## Pricing

- [ ] **Stool / 16S stream — per-sample cost for fresh 16S sequencing on banked aliquots.** If a buyer wants fresh sequencing rather than deposited data, the institution should provide a recent invoiced cost per sample. _(pricing.md)_
- [ ] **Plasma metabolomics stream — per-sample assay cost for the platform used.** The metabolomics platform vendor is unknown; the assay leg cannot be anchored to a pricing-data.md row. Institution should provide vendor name and per-sample cost or a recent invoice. _(pricing.md)_
- [ ] **DUA / MTA administrative overhead.** Does UMich charge a per-agreement administrative fee for DUA or MTA processing? If so, what is the standard rate? _(pricing.md)_
- [ ] **Stool aliquot physical shipping rate.** Per-box or per-shipment dry-ice shipping cost for stool aliquots to external buyers. _(pricing.md)_
- [ ] **Source-leg cost-recovery rate confirmation.** The per-aliquot source-leg estimates in pricing.md are based on USA Health Biobank and Boston Medical Center LABS Core analogues. UMich should confirm or replace with their actual cost-recovery rates. _(pricing.md)_

---

## Institutional capacity

- [ ] **Clinical trial back-references (NCT IDs).** No NCT-linked trials are in the wiki for this institution. UMich Neurology runs ALS trials; the gap understates institutional capacity and may represent additional cohorts that could be listed. _(listing.md dim 21)_

---

## Summary counts

| Section | Gap count |
|---|---|
| Sample types and real numbers | 5 |
| Collection protocols and pre-analytical | 5 |
| Consent and IRB | 4 |
| Data deposition and access | 4 |
| Demographics and confounders | 2 |
| Clinical endpoints and study status | 2 |
| Pricing | 5 |
| Institutional capacity | 1 |
| **Total** | **28** |

_Of the 28 gaps: 15 originated in listing.md, 8 are new from compliance.md, 5 are new from pricing.md. 6 gaps are multi-source (flagged in two or more files and consolidated into a single bullet above, counted once)._
