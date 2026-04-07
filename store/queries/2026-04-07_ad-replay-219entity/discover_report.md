# Discover Report — AD Plasma Metabolomics Validation

**Request:** `ad-plasma-metabolomics-validation-200n`
**Wiki entities scanned:** 219 (61 cohorts, 66 institutions, 69 investigators, 23 platforms)
**Run date:** 2026-04-07

---

## Verdict

**wiki_partial** — Two strong candidates and one partial survive hard filters. Both strong matches carry unverified commercial-use terms (the hard gating risk) and the most comprehensive new candidate uses serum rather than plasma. Wiki coverage has expanded significantly from the 31-entity baseline but ADNI-lineage cohorts dominate; independent non-ADNI longitudinal plasma metabolomics cohorts in AD remain absent.

---

## Strong matches

- **`adni-go2-plasma-lipidomics`** — ADNI-1/GO/2 plasma lipidomics (Baker Institute LC-MS/MS, 781 species). 1517 participants, 4730 samples across up to 10 visits. Statin confounding formally quantified (423 species mapped, Supplementary Table S6). External validation in ASPREE (C-index 0.75). Commercial-use terms unverified — must confirm with ADMC/Duke team beyond standard LONI DUA.

- **`adni-go2-serum-metabolomics-mxp500`** _(new in this run)_ — ADNI-1/GO/2 serum metabolomics (Biocrates MXP Quant 500, 506 post-QC metabolites across 26 biochemical classes). 1430 participants, 4063 fasting samples, 7-year longitudinal span. Provenance depth 0.62 — highest-quality entity in the AD metabolomics space in the wiki. Statin confounding formally modelled (Boruta, 41 baseline + 21 longitudinal medication-metabolite associations). **Key caveat: serum, not plasma** — buyer must explicitly accept this matrix before proceeding. Dual DUA: AD Knowledge Portal + LONI.

---

## Partial matches

- **`aspree-dementia-casecohort-lipidomics`** — ASPREE plasma lipidomics (Baker Institute Agilent 6495C, 781 species). 3495 participants, 402 incident dementia cases, 6.5-year prospective follow-up. Same platform as ADNI — cross-cohort harmonised. PI-request only (Paul Lacaze, Monash). Statin status undocumented. Commercial use unspecified. Depth 0.14 — thin wiki coverage.

---

## Weak matches

- **`lleida-ad-mci-plasma-csf-gcfid`** _(new in this run)_ — Lleida AD/MCI plasma GC-FID fatty acid profiling. 289 participants (103 AD / 89 MCI / 94 CTL); paired CSF ATN biomarkers; MCI follow-up ~58 months (48 converters). IRBLleida Biobank B.0000682. **Statin use not documented** — direct violation of buyer's hard negative. GC-FID provides total FA mol% only (no lipid class resolution). FA profile did not significantly improve AUC over APOE ε4 alone. N borderline at 289.

---

## Rejected (representative sample)

- **`adni-go2-plasma-oxylipin-endocannabinoid`** — cross-sectional baseline only; fails longitudinal filter.
- **`adni-bile-acid-serum-biocrates-1464`** — serum matrix + cross-sectional bile acid layer; fails plasma + longitudinal filters.
- **`adni1-serum-metabolomics-biocrates-p180`** — serum matrix + cross-sectional; fails plasma + longitudinal filters.
- **`adni-multiwave-csf-plasma-biomarker`** — immunoassay biomarkers, not metabolomics; modality mismatch.
- **`uk-biobank-plasma-nmr-metabolomics`** — not a clinical AD cohort; AD relevance is Mendelian randomisation genetics only.
- **`alspac-offspring-plasma-nmr-metabolomics`** — not an AD patient cohort; genetics-only AD relevance.
- **`blsa-serum-metabolomics-preclinical-ad`** — serum matrix + MTA-only access + statin undocumented.
- **`ages-reykjavik-serum-metabolomics-ad`** — serum matrix + near-chance classification (negative control, not validation candidate).
- All ALS, SMA, brain RNA-seq, brain tissue, urine, and stool cohorts — indication or modality mismatch.

---

## Gaps

1. **commercial_use_unverified** — Neither strong candidate has explicit commercial-use clearance in the wiki; this is the single biggest pre-commitment blocker. _Action: verify ADNI/ADMC DUA terms and AMP-AD Knowledge Portal commercial terms before project sign-off._

2. **modality_gap_targeted_only** — All surviving AD plasma/serum metabolomics cohorts use targeted platforms. No untargeted metabolomics cohort (covering TCA intermediates, organic acids, broad amino acid panels) exists in the wiki for AD. _Action: buyer should confirm targeted vs. untargeted requirement; if untargeted is required, trigger ingest for papers with Metabolon/HMDB-anchored global profiling in AD._

3. **plasma_vs_serum_ambiguity** — The highest-quality new candidate (adni-go2-serum-metabolomics-mxp500, depth=0.62) uses serum not plasma. _Action: buyer should confirm whether serum is acceptable; if yes, the effective strong-match pool doubles and metabolomics coverage (506 metabolites vs. 781 lipid species) substantially improves._

4. **statin_confounding_undocumented** — Only ADNI plasma lipidomics and ADNI serum MXP500 address statin confounding. ASPREE and Lleida cohorts are silent. _Action: treat statin documentation as a hard screen — only ADNI-lineage cohorts currently pass._

5. **multi_site_aggregation_possible** — ADNI plasma lipidomics (adni-go2-plasma-lipidomics) + ASPREE (aspree-dementia-casecohort-lipidomics) share the same Baker Institute platform and are cross-cohort harmonised via NIST SRM 1950. Aggregating these two datasets yields ~5225 total plasma samples for combined discovery + validation, including 402 confirmed dementia cases in a population-based setting. _Action: explore ADNI+ASPREE joint analysis as the strongest multi-site option currently available in the wiki._

6. **thin_coverage_non_adni** — The 219-entity wiki is dominated by ADNI sub-cohorts. AIBL, PREVENT-AD, and PREVENT-Dementia are not represented. _Action: if the buyer wants non-ADNI independent cohorts, orchestrator should trigger ingest for these programmes._
