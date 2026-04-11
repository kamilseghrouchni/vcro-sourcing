# Pricing draft: Department of Neurology, University of Michigan

_Generated from 1 linked cohort and 6 pricing analogues from references/pricing-data.md. NOT a binding quote — review and adjust to actual cost-recovery rates before publishing._

---

## Three-leg pricing model

vCRO prices in three legs per cohort, mirroring how buyers think about total cost from request to data:

1. **Source leg** — cost to release the sample or data. Includes DUA administration, aliquot fee, and biospecimen handling.
2. **Screening / QA leg** — re-QA the buyer commissions before running the assay. For a microbiome cohort: sequencing quality check, chimera filtering, rarefaction depth confirmation. For a plasma metabolomics cohort: depletion check, freeze-thaw history verification.
3. **Assay leg** — the analytical workflow itself, if not already performed on the requested material.

---

## Per-cohort estimates

| Cohort | Source leg | Screening / QA | Assay leg | Currency | Confidence | Analogue source |
|---|---|---|---|---|---|---|
| `university-of-michigan-als-microbiome-metabolomics` — **stool / 16S stream** | $8–$15 per aliquot | quote required | quote required | USD | low | pricing-data.md: USA Health Biobank, blood/urine/fluid procurement $10/sample; dissemination stored blood/plasma $8/unit |
| `university-of-michigan-als-microbiome-metabolomics` — **plasma metabolomics stream** | $8–$15 per aliquot | $0–$15 per sample (est.) | $100–$300 per sample (academic core; quote required for commercial) | USD | low–medium | pricing-data.md: USA Health Biobank $8 dissemination; General Metabolics $100/sample (academic); Baylor College of Medicine $300/sample untargeted |

### Load-bearing pricing assumptions

**Stool / 16S stream — source leg:** Priced as a stored biological aliquot dissemination using the USA Health Biobank analogue ($8/unit for stored blood/urine/fluid; pricing-data.md). Stool is the closest governed category. The University of Michigan is not a public fee-schedule biobank, so the actual cost-recovery rate may differ significantly. DUA administration overhead is additional and is not priced here (see Pricing gaps).

**Stool / 16S stream — screening / QA leg:** Cannot be valued. The sequencing vendor, instrument, variable region, and read depth are not documented in the wiki for the 16S platform entity (`16s-rrna-gut-microbiome-sequencing`). A buyer running a new 16S batch cannot price QC gating without knowing the original protocol parameters.

**Stool / 16S stream — assay leg:** Cannot be valued. If the buyer wants raw sequence data already generated, this leg may be zero (subject to data deposition availability). If the buyer wants fresh 16S sequencing on stored stool aliquots, the assay cost depends on vendor, read depth, and whether stool aliquots survive thaw at usable quality — none of which is documented. Quote required from the institution.

**Plasma metabolomics stream — source leg:** Priced as stored plasma aliquot dissemination ($8/unit; USA Health Biobank analogue, pricing-data.md). Boston Medical Center LABS Core lists plasma (cohort) at $15 per 0.5mL or 1.0mL aliquot as an upper bound for academic hospital pricing (pricing-data.md). Actual UMich cost-recovery rate is unknown.

**Plasma metabolomics stream — screening / QA leg:** Plasma QC (freeze-thaw history verification, hemolysis check) can often be absorbed into sample preparation at academic core facilities. The EMBL Metabolomics Core charges EUR 10–15/sample for sample prep (pricing-data.md). Using $0–$15/sample as a placeholder; this leg may be bundled into the assay leg by the core facility.

**Plasma metabolomics stream — assay leg:** Untargeted metabolomics costs vary widely by platform vendor. Anchors from pricing-data.md:
- General Metabolics: from $100/sample (academic, untargeted; pricing-data.md)
- Baylor College of Medicine Metabolomics Core: $300/sample untargeted (internal/MoU; pricing-data.md)
- EMBL Metabolomics Core: EUR 105–130/sample (non-member/non-academic; pricing-data.md)
- Metabolon Global Discovery: NO PUBLIC PRICING; industry estimates $800–1,500/sample unverified (pricing-data.md)

Because the metabolomics platform vendor used by the UMich cohort is unknown, the relevant assay analogue cannot be selected with confidence. The $100–$300/sample range applies only if an academic core facility is used. If the original data was generated on Metabolon, re-running on the same platform would cost $800–1,500/sample (unverified; pricing-data.md).

---

## Composite estimates

**Stool / 16S stream:** No composite. Screening / QA and assay legs are both "quote required". Total remains open.

**Plasma metabolomics stream:** Partial composite only. Source + screening/QA legs: $8–$30/sample (low confidence). Assay leg: $100–$300/sample (academic core, low confidence) or quote required (if commercial platform). No aggregate total is produced because:
1. The assay leg cannot be anchored without knowing the platform vendor.
2. DUA and MTA administrative overhead (estimated $5K–$50K per agreement; pricing-data.md Gaps section) is not per-sample and cannot be amortised without knowing the buyer's N.

---

## Pricing gaps

The following legs could not be valued; the institution must provide estimates or invoices for these before the listing publishes with a pricing section:

- **Cohort `university-of-michigan-als-microbiome-metabolomics` — stool / 16S stream — screening / QA leg:** No platform analogue in the wiki for the specific 16S sequencing vendor, instrument, or variable region. The institution should provide the sequencing vendor (e.g. Illumina MiSeq, PacBio, Oxford Nanopore) and per-sample QC protocol.
- **Cohort `university-of-michigan-als-microbiome-metabolomics` — stool / 16S stream — assay leg:** Cannot be valued. If raw sequence data is available in a repository, this leg is zero (subject to data access). If fresh sequencing is needed, the institution should provide a recent invoiced cost per sample for 16S amplicon sequencing at the variable region used in the original study.
- **Cohort `university-of-michigan-als-microbiome-metabolomics` — plasma metabolomics stream — assay leg (platform-specific):** The metabolomics platform vendor is unknown. The institution should name the platform (e.g. Metabolon GlobalDiscovery, Biocrates, in-house UHPLC-QTOF) and provide a per-sample cost or a recent invoice. Without this, the assay leg cannot be anchored to a specific pricing-data.md row.
- **DUA / MTA administrative overhead:** The legal and contract overhead per access agreement is not priced in any per-sample row. The pricing-data.md Gaps section notes estimates of $5K–$50K per agreement, which is institution-dependent. The UMich Office of Research should provide a standard DUA processing fee if one exists.
- **Stool aliquot physical shipping:** Dry-ice shipping of stool aliquots is a separate cost not captured in source leg analogues. The USA Health Biobank analogue does not include shipping (pricing-data.md). UMich should provide a per-box or per-shipment rate.
- **Physical aliquot counts remaining:** The source leg per-sample estimate is moot if no aliquots remain. The institution should confirm remaining stool and plasma aliquot counts before any source-leg pricing is published.

---

## How to use this draft

The institution's contracting office should:
1. Review each row and adjust source-leg figures to UMich's actual cost-recovery rates.
2. Fill in the three "quote required" legs with recent invoiced amounts or vendor-provided estimates.
3. Confirm the metabolomics platform vendor so the assay leg can be anchored to a specific pricing-data.md row.
4. Add DUA / MTA administrative overhead as a per-agreement line item.
5. Sign off on the final figures before vCRO publishes the pricing section of the listing.
