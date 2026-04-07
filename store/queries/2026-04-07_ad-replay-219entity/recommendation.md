# Recommendation: Longitudinal Plasma Metabolomics Cohorts for AD Biomarker Validation

_Generated for request `ad-plasma-metabolomics-validation-200n` on 2026-04-07. Wiki entities scanned: 219 (61 cohorts, 66 institutions, 69 investigators, 23 platforms)._

---

## What you asked for

> Looking for longitudinal plasma metabolomics cohorts in Alzheimer's disease, at least 200 patients, for biomarker validation. We want to minimise statin effects and need commercial-use rights.

In structured form:
- **Indication:** Alzheimer's disease
- **Modality:** plasma, metabolomics
- **N target:** ≥200
- **Use case:** biomarker validation
- **Hard requirements:** longitudinal=true, commercial use=true, n≥200
- **Hard negatives:** statin_confounded (cohorts silent on statin use are flagged), commercial_use_allowed_false (cohorts without commercial access are disqualified), n_total_less_than_30

---

## Verdict

**wiki_partial** — Two strong candidates and two weaker candidates survive the hard filters across 61 cohorts in the wiki. The primary AD plasma lipidomics cohort (ADNI-1/GO/2) is unchanged from the prior 31-entity baseline run but is now accompanied by a new, higher-quality serum metabolomics candidate (ADNI MXP500) that substantially broadens metabolic coverage beyond lipids. Both strong candidates address the statin hard negative with formal quantification. However, commercial-use terms are unverified for all four candidates, and the most comprehensive new candidate uses serum rather than plasma — requiring buyer confirmation before proceeding.

The 219-entity wiki is a meaningful improvement over the prior 31-entity baseline for depth (the ADNI serum MXP500 entity has provenance depth 0.62, the highest in the AD metabolomics space) but does not yet include major non-ADNI longitudinal plasma metabolomics cohorts (AIBL, PREVENT-AD). The recommendation to proceed has not changed; the actionable cohort path has expanded.

---

## Recommended cohorts

### 1. ADNI-1/GO/2 Longitudinal Plasma Lipidomics Cohort (Baker Institute LC-MS/MS)
**Entity ID:** `adni-go2-plasma-lipidomics`  •  **Type:** published_cohort  •  **Sources:** PMC12269576, PMC12445873

**Card**
- **Primary signal:** 580 usable AD-vs-CN subjects (329 conversion arm) from 1517 ADNI-1/GO/2 plasma lipidomics participants; statin confounding formally quantified (423 species mapped); ASPREE-validated signal (C-index 0.75).
- **Action:** Request access at ida.loni.usc.edu and simultaneously contact ADMC/Duke (Kaddurah-Daouk lab) to confirm commercial-use terms for the lipidomics data layer — resolve this before any project commitment.
- **Risk:** ADMC lipidomics data layer commercial-use terms are unverified; deDE lipid class (strongest AD signal) unusable without anticholinesterase control in target cohort.

**Scale** _(confidence: high)_
- Usable N for this request: **580** _(AD-vs-CN discriminator set: 243 stable AD + 337 stable CN at baseline)_
- Headline N: 1517 participants, 4730 samples
- Multi-site potential: ADNI runs at 60+ US sites; Baker Institute platform shared with ASPREE (Australia); ADNI+ASPREE joint plasma lipidomics analysis is cross-cohort harmonised (NIST SRM 1950 documented) and yields ~5225 total samples including 402 dementia cases.

**Cost** _(confidence: medium)_
| Leg | Estimate | Note |
|---|---|---|
| Source | Free (data access) | DUA signature via ida.loni.usc.edu; ADMC lipidomics layer may need separate Duke agreement |
| Screening / QA | $0 (data already QC'd) | NIST SRM 1950 QC, 95% fasting compliance; no wet-lab re-QC for deposited dataset |
| Assay | Already performed | Baker Institute LC-MS/MS already run; $58K–$84K if new assay needed at 580 samples |

- **Total known range:** $0 – $50,000 USD (legal/DUA overhead range)
- **Open cost components:** ADMC/Duke commercial-use DUA overhead ($5K–$50K per pricing-data.md); physical aliquot request fees if new wet-lab assay required
- **Timeline:** 2–4 months for LONI DUA; additional 1–3 months for ADMC commercial-use verification

**Quality** _(confidence: medium, provenance depth: 0.48)_
- **Pre-analytical:** partial. Fasting compliance excellent (~95%, the dominant lipidomics pre-analytical variable); EDTA plasma confirmed; freeze-thaw cycle count not documented — consult ADNI biospecimen protocol paper (Huynh et al. 2018) before committing.
- **Confounders:** good. **Statins: yes, formally documented.** 423 lipid species significantly associated with statin use identified (Supplementary Table S6 in PMC12269576) — statin-sensitive species are quantified and can be excluded or adjusted. Omega-3 usage also mapped (398 species). Anticholinesterase confounding flagged and acted on (deDE class excluded). APOE genotype, age, sex all captured.
- **Platform validation:** good. Same Baker Institute platform validated externally in ASPREE (C-index 0.75); internal cross-platform replication with ADNI serum MXP500 (68.25% lipid overlap).
- **Quality summary:** Statin hard negative fully addressed; fasting and platform validation are strengths; freeze-thaw gap is the residual pre-analytical risk.

**Linked entities**
- Institution: [[usc-loni-data-coordinating-center]]
- Sponsor: [[alzheimers-disease-metabolomics-consortium]]
- Data provider: [[baker-heart-diabetes-institute]]
- Investigators: [[michael-weiner-ucsf]], [[peter-meikle-baker-institute]], [[rima-kaddurah-daouk-duke]], [[andrew-saykin-indiana]], [[gabi-kastenmuller-helmholtz-munich]], [[wang-tingting-baker-institute]]
- Platform: [[baker-institute-lipidomics-lc-ms-qqq]]

---

### 2. ADNI-1/GO/2 Longitudinal Serum Metabolomics Cohort (Biocrates MXP Quant 500, n=1,430) _(new in this run)_
**Entity ID:** `adni-go2-serum-metabolomics-mxp500`  •  **Type:** published_cohort  •  **Sources:** PMC12706616

> **Matrix note:** This cohort uses **fasting SERUM**, not plasma. Serum and plasma metabolomics are not interchangeable — differences affect ~15–30% of quantified species. Buyer must explicitly confirm whether serum is acceptable before building a programme on this cohort.

**Card**
- **Primary signal:** 647 usable AD-vs-CN subjects (294 AD converter arm) from 1430 ADNI-1/GO/2 SERUM metabolomics participants; Biocrates MXP500, 506 post-QC metabolites, 26 biochemical classes; statin confounding formally modelled (Boruta); broadest metabolic coverage in the AD wiki.
- **Action:** Confirm with buyer whether SERUM is acceptable as matrix; if yes, access at AD Knowledge Portal (doi:10.7303/9618123) and LONI simultaneously; verify AMP-AD commercial-use terms in parallel.
- **Risk:** Serum not plasma — for lipidomics applications this alters ~15–30% of quantified species; no external cohort validation published (all replication is internal ADNI cross-platform).

**Scale** _(confidence: high)_
- Usable N for this request: **647** _(264 stable AD + 383 stable CN; 294 in the AD converter arm)_
- Headline N: 1430 participants, 4063 fasting serum samples, 10 visit timepoints over 7 years
- Multi-site potential: Same ADNI 60+ US site infrastructure; Biocrates MXP500 used at multiple academic cores (Duke ADMC, NIEHS NIA platform) enabling future aggregation; internal cross-platform replication with ADNI plasma lipidomics documented (68.25% lipid overlap).

**Cost** _(confidence: medium)_
| Leg | Estimate | Note |
|---|---|---|
| Source | Free (data access) | Dual DUA: AD Knowledge Portal (AMP-AD) + LONI; both required |
| Screening / QA | $0 (data already QC'd) | Met-So degradation QC applied; non-fasting samples already removed |
| Assay | Already performed | Deposited at doi:10.7303/9618123; ~$65K if new kit run required at 647 samples |

- **Total known range:** $0 – $100,000 USD (dual DUA legal overhead)
- **Open cost components:** AMP-AD Knowledge Portal commercial-use terms; LONI commercial-use terms; dual DUA legal overhead (two institutions); Bruker/Biocrates MXP500 kit pricing post-June 2025 acquisition if new assay needed
- **Timeline:** 3–6 months for dual DUA; additional 1–3 months for commercial-use verification

**Quality** _(confidence: high, provenance depth: 0.62)_
- **Pre-analytical:** partial. 100% fasting compliance in analysed set (non-fasting samples removed); Met-So QC is a strength; **matrix is serum not plasma** — operative pre-analytical concern for this buyer; freeze-thaw cycles not documented.
- **Confounders:** good. **Statins: yes, formally modelled.** Boruta feature selection identified 41 baseline and 21 longitudinal medication-metabolite associations across all drugs including statins [PMC12706616]. Dietary/microbiome confounders are documented gaps for bile acid and tryptophan pathway analyses.
- **Platform validation:** partial. Strong internal cross-platform replication (68.25% with Baker lipidomics; persistent-class 85.51%). No external cohort validation published for MXP500 findings — all replication is within ADNI datasets.
- **Quality summary:** Highest provenance depth (0.62) in AD metabolomics wiki; statin formally addressed; 506-metabolite coverage (vs 781 lipids in candidate #1) adds amino acids, bile acids, acylcarnitines; serum matrix is the operative constraint.

**Linked entities**
- Institution: [[usc-loni-data-coordinating-center]]
- Sponsor: [[alzheimers-disease-metabolomics-consortium]]
- Investigators: [[rima-kaddurah-daouk-duke]], [[andrew-saykin-indiana]]
- Platform: [[biocrates-mxp-quant-500]]

---

### 3. ASPREE Dementia Case-Cohort Lipidomics Subset
**Entity ID:** `aspree-dementia-casecohort-lipidomics`  •  **Type:** published_cohort  •  **Sources:** PMC12269576

**Card**
- **Primary signal:** 402 incident dementia cases (est. ~240–280 confirmed AD) in 3495 plasma lipidomics participants; population-based Australian RCT; same Baker Institute platform as ADNI with NIST cross-cohort harmonisation — the only published external validation cohort for ADNI lipidomics.
- **Action:** Contact Paul Lacaze (Monash University) and explicitly ask: (1) commercial-use terms, (2) statin use documentation and adjustment capability, (3) residual aliquot inventory status.
- **Risk:** Statin use undocumented in wiki — direct violation of buyer's hard negative; PI-request-only access with no predictable timeline or pricing.

**Scale** _(confidence: medium)_
- Usable N for this request: **402** _(incident dementia cases; est. 240–280 confirmed AD within that)_
- Headline N: 3495 sub-cohort (19,114 ASPREE full RCT)
- Multi-site potential: ASPREE is multi-site across Australia; Baker Institute platform identical to ADNI (Candidate #1) with documented NIST SRM 1950 cross-cohort harmonisation — joint analysis with ADNI plasma lipidomics is the strongest multi-site aggregation path in the wiki.

**Cost** _(confidence: low)_
| Leg | Estimate | Note |
|---|---|---|
| Source | Quote required | PI-request only (Paul Lacaze, Monash); no published fee schedule; commercial terms unspecified |
| Screening / QA | Quote required | Aliquot depletion status unknown; freeze-thaw history undocumented |
| Assay | Already performed | 781-species lipidomics run at Baker Institute; data available upon request |

- **Total known range:** null (all legs quote-required)
- **Open cost components:** PI-negotiated access fee; commercial-use DUA/ethics amendment; aliquot request fees if physical samples needed
- **Timeline:** 3–12 months (PI-request dependent, no predictable timeline)

**Quality** _(confidence: low, provenance depth: 0.14)_
- **Pre-analytical:** weak. Plasma matrix confirmed (Baker Institute EDTA plasma, same as ADNI); fasting status, freeze-thaw cycles, and collection protocol undocumented — provenance depth 0.14 means most pre-analytical facts are gaps.
- **Confounders:** weak. **Statins: no, not documented.** Statin use is not captured in the wiki entity for ASPREE. Statin prevalence in elderly Australian community-dwelling adults is typically 30–50%, making this a material confounder gap that directly violates the buyer's hard negative. Buyer must confirm statin documentation capability before treating this as a qualifying candidate.
- **Platform validation:** good. Baker Institute platform; ASPREE is the external validation cohort for ADNI lipidomics (C-index 0.75 reported in PMC12269576).
- **Quality summary:** Strongest replication value (population-based external validation for ADNI); statin gap is the operative disqualifier unless buyer confirms documentation with PI.

**Linked entities**
- Institution: [[alfred-hospital-monash-university]]
- Data provider: [[baker-heart-diabetes-institute]]
- Investigators: [[paul-lacaze-monash]], [[peter-meikle-baker-institute]]
- Platform: [[baker-institute-lipidomics-lc-ms-qqq]]

---

### 4. Hospital Universitari Santa Maria de Lleida AD/MCI Plasma and CSF Cohort (GC-FID)
**Entity ID:** `lleida-ad-mci-plasma-csf-gcfid`  •  **Type:** published_cohort  •  **Sources:** PMC11095469

> **Modality note:** GC-FID provides total fatty acid mol% only — not a full metabolomics panel. If buyer requires LC-MS metabolomics, this cohort requires a new assay run on existing aliquots (availability unconfirmed).

**Card**
- **Primary signal:** 289 AD/MCI/CTL participants (Lleida, Spain) with paired EDTA plasma (GC-FID FA profiling) + CSF ATN biomarkers + APOE; MCI sub-cohort: 48 converters over 58 months; IRBLleida Biobank B.0000682.
- **Action:** Contact Farida Dakterzada (IRBLleida); explicitly ask about statin use documentation and commercial-use terms before any further evaluation — these are pre-conditions for suitability given buyer's hard negatives.
- **Risk:** Statin use undocumented — hard-negative unaddressed; GC-FID modality is total FA mol% only, not a metabolomics panel; N=289 is borderline and any attrition drops below the 200-participant minimum.

**Scale** _(confidence: medium)_
- Usable N for this request: **289** _(103 AD + 94 CTL for discrimination = 197, borderline; 92 for MCI conversion analysis)_
- Headline N: 289 participants (103 AD / 89 MCI / 94 CTL); paired plasma+CSF = 117
- Multi-site potential: single-site (Hospital Universitari Santa Maria, Lleida, Spain); no aggregation path identified in wiki.

**Cost** _(confidence: low)_
| Leg | Estimate | Note |
|---|---|---|
| Source | Quote required | IRBLleida Biobank B.0000682; PI approval required; commercial terms unknown |
| Screening / QA | Quote required | Aliquot volumes undocumented; LC-MS re-run requires fresh aliquots if GC-FID data insufficient |
| Assay | Quote required / ~$82K (if new run) | GC-FID data exists; new LC-MS metabolomics: ~$285/sample × 289 = $82K (non-academic rate) |

- **Total known range:** null (all legs quote-required)
- **Open cost components:** IRBLleida commercial-use terms; ethics amendment for commercial use; new assay cost if LC-MS metabolomics required
- **Timeline:** 3–9 months (academic biobank Spain)

**Quality** _(confidence: medium, provenance depth: 0.52)_
- **Pre-analytical:** partial. EDTA plasma and −80°C storage confirmed; fasting status not documented; freeze-thaw not documented; GC-FID is less pre-analytically sensitive than LC-MS.
- **Confounders:** weak. **Statins: no, not documented.** Wiki explicitly flags statin use as a "major confounder gap for fatty acid signals" [PMC11095469]. GC-FID fatty acid signals are among the most statin-sensitive measurements (statins directly modulate membrane FA composition). This is a direct hard-negative violation for this request.
- **Platform validation:** weak. Single-site, single-source; no external replication for Lleida GC-FID findings.
- **Quality summary:** Statin gap explicitly documented as major concern; GC-FID modality limitation; single-site; borderline N — lowest priority candidate.

**Linked entities**
- Institution: [[hospital-santa-maria-lleida]]
- Platform: [[agilent-gc-fid-7890a-fatty-acid]]

---

## Rejected candidates

- **`adni-go2-plasma-oxylipin-endocannabinoid`** — cross-sectional baseline only; fails longitudinal filter.
- **`adni-bile-acid-serum-biocrates-1464`** — serum matrix + cross-sectional bile acid layer; fails plasma + longitudinal filters.
- **`adni1-serum-metabolomics-biocrates-p180`** — serum matrix + cross-sectional; fails plasma + longitudinal filters.
- **`adni-phase1-serum-lipidomics`** — serum matrix + limited longitudinal lipidomics structure.
- **`adni-multiwave-csf-plasma-biomarker`** — immunoassay biomarkers (p-tau, NfL, Aβ), not metabolomics.
- **`adni-plasma-ad-csvd-comorbidity-330`** — immunoassay biomarkers (GFAP, NfL, p-tau217, Aβ42/40), not metabolomics.
- **`adni-plasma-bmi-pet-subcohort-407`** — immunoassay biomarkers, not metabolomics.
- **`adni2-plasma-mirna-cn-mci-baseline`** — miRNA (RT-qPCR), not metabolomics; N<200; cross-sectional.
- **`blsa-serum-metabolomics-preclinical-ad`** — serum matrix; MTA-only; statin undocumented.
- **`ages-reykjavik-serum-metabolomics-ad`** — serum matrix; near-chance classification (negative control status).
- **`rosmap-serum-brain-bile-acid`** — serum matrix; AD arm n=11 (severely underpowered); bile acid layer only.
- **`uk-biobank-plasma-nmr-metabolomics`** — not a clinical AD cohort; AD via genetics only.
- **`alspac-offspring-plasma-nmr-metabolomics`** — not an AD patient cohort; genetics/MR study only.
- **`delcode-urine-nmr-metabolomics`** — urine, not plasma; n=34 AD.
- **`shandong-ad-urine-lcms-metabolomics`** — urine, not plasma.
- **`amyloid-biomarker-study-pooled`** — amyloid immunoassay, not metabolomics.
- **`dian-obs-natural-history`** — rare DIAD mutations only; no metabolomics.
- **`adni-go2-plasma-lipidomics-aa`** — sub-cohort of candidate #1; n=37–62, below 200 threshold.
- **`blsa-autopsy-brain-metabolomics`** — postmortem brain tissue, not plasma; n=44.
- **`mayo-brain-bank-rnaseq-adkp`** — brain RNA-seq, not plasma metabolomics.
- **`rosmap-brain-rnaseq-adkp`** — brain RNA-seq, not plasma metabolomics.
- _All ALS, SMA, non-AD indication cohorts_ — indication mismatch at index level.

---

## Gaps and recommendations

- **commercial_use_unverified**: Neither of the two strong candidates (adni-go2-plasma-lipidomics, adni-go2-serum-metabolomics-mxp500) has explicit commercial-use clearance in the wiki. ADNI operates under LONI DUA and AMP-AD governance; commercial terms must be verified directly. → _What to do:_ Contact LONI data management (ida.loni.usc.edu) and ADMC/Duke (Kaddurah-Daouk lab) to request the DUA commercial-use clause in writing; review AMP-AD Knowledge Portal terms for the serum MXP500 dataset. Treat as a hard pre-condition before project sign-off.

- **modality_gap_targeted_only**: All AD plasma/serum metabolomics cohorts in the wiki use targeted platforms. No untargeted metabolomics (Metabolon Global Discovery, Agilent QTOF global scan) cohort in AD with longitudinal plasma is in the wiki. → _What to do:_ If buyer requires broad untargeted metabolomics (TCA intermediates, organic acids beyond lipids), trigger ingest for AD papers citing Metabolon or high-resolution QTOF global profiling in plasma.

- **plasma_vs_serum_ambiguity**: The highest-quality new candidate (adni-go2-serum-metabolomics-mxp500, depth=0.62, 506 metabolites across 26 classes) uses serum not plasma. If serum is acceptable, the effective strong-match pool doubles and metabolic coverage improves substantially. → _What to do:_ Buyer should decide on serum acceptability before discover is re-run; if acceptable, candidate #2 should be upgraded to primary recommendation given its higher provenance depth and broader metabolite coverage.

- **statin_confounding_undocumented**: Only ADNI plasma lipidomics and ADNI serum MXP500 formally document statin confounding. ASPREE and Lleida are silent. → _What to do:_ Treat statin documentation as a hard qualitative screen — only ADNI-lineage cohorts currently pass. For ASPREE, ask PI directly whether statin use is in the ASPREE clinical dataset (it almost certainly is, given the RCT design); if confirmed, ASPREE could be upgraded to strong.

- **multi_site_aggregation_possible**: ADNI plasma lipidomics + ASPREE share the same Baker Institute platform with documented NIST SRM 1950 cross-cohort harmonisation. Aggregating these two yields ~5225 plasma samples with 402 confirmed dementia cases. → _What to do:_ If buyer's validation plan requires an independent replication cohort, the ADNI (discovery) + ASPREE (validation) design is already technically feasible on the same analytic pipeline — pursue both cohort access routes in parallel.

- **thin_coverage_non_adni**: Wiki is ADNI-lineage dominated. AIBL (Australian Imaging, Biomarker & Lifestyle), PREVENT-AD, PREVENT-Dementia, and WRAP are not in the wiki. → _What to do:_ If buyer wants non-ADNI independent replication, orchestrator should trigger ingest for AIBL plasma metabolomics papers (Biocrates and global profiling studies exist in the literature).

---

## Provenance

This recommendation reads from 219 wiki entities (61 cohorts, 66 institutions, 69 investigators, 23 platforms). Every numeric claim above is sourced from dimension fragments in the linked entity articles, which in turn cite primary literature (PMC12269576, PMC12706616, PMC11095469 listed under the respective candidates).

If the buyer wants to deepen confidence in candidate #2 (adni-go2-serum-metabolomics-mxp500), the open path is to ingest the external replication validation papers cited as an open question in its entity article — currently all replication is internal to ADNI. For candidate #3 (ASPREE), the open path is PI contact to close the statin documentation gap, which if resolved would upgrade ASPREE from partial to strong.
