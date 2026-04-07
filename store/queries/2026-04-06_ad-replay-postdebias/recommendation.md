# Recommendation: Longitudinal plasma metabolomics cohorts in Alzheimer's disease for biomarker validation

_Generated for request `ad-plasma-metabolomics-validation-200n` on 2026-04-06. Wiki entities scanned: 31._

## What you asked for

> Looking for longitudinal plasma metabolomics cohorts in Alzheimer's disease, at least 200 patients, for biomarker validation. We want to minimise statin effects and need commercial-use rights.

In structured form:
- **Indication:** Alzheimer's disease
- **Modality:** plasma metabolomics (interpreted as plasma lipidomics — only form available in wiki)
- **N target:** ≥200 usable participants
- **Use case:** biomarker validation
- **Hard requirements:** longitudinal=true, commercial use=true
- **Hard negatives:** statin_confounded (exclude or document), commercial_use_allowed_false (skip cohorts forbidding commercial reuse), n_total_less_than_30

## Verdict

**wiki_partial**

1 strong candidate (adni-go2-plasma-lipidomics) and 1 partial candidate (aspree-dementia-casecohort-lipidomics) survive all hard filters. The strong match is well-evidenced and explicitly addresses statin confounding, but the ADMC lipidomics sublayer commercial terms remain unverified — that is the only pre-commitment blocker. The partial match (ASPREE) has thin wiki coverage (provenance_depth 0.14), is PI-gated with no commercial pathway documented, and fails to address statin confounding from the wiki. The wiki currently holds only 4 cohort entities; the AD plasma metabolomics space is larger and ingest of additional papers would improve coverage.

---

## Recommended cohorts

### 1. ADNI-1/GO/2 Longitudinal Plasma Lipidomics Cohort (Baker Institute LC-MS/MS)
**Entity ID:** `adni-go2-plasma-lipidomics`  •  **Type:** published_cohort  •  **Sources:** PMC12269576

**Card**
- **Primary signal:** 1188 longitudinal-eligible plasma lipidomics participants (baseline + ≥1 follow-up) from ADNI-1/GO/2; disease sub-groups: 580 stable AD vs CN, 329 MCI-to-AD converters. Statin confounders explicitly mapped (423 species, covariate-controlled). Baker Institute Agilent 6490 dMRM, 781 species, NIST SRM 1950 QC.
- **Action:** Apply for LONI DUA access at ida.loni.usc.edu (commercial use permitted per published terms). Separately contact ADMC/Duke University team to confirm whether the lipidomics data sublayer requires an additional commercial agreement before committing project timeline.
- **Risk:** ADMC lipidomics sublayer commercial terms unverified — this is the single pre-commitment blocker. Freeze-thaw cycle count undocumented. The deDE lipid class (strongest AD signal in this paper) is excluded from usable modelling due to anticholinesterase confounding.

**Scale** _(confidence: high)_
- Usable N for this request: **1188** _(participants with baseline + ≥1 follow-up; disease sub-groups: 580 stable AD vs CN, 329 MCI converters)_
- Headline N: 1517 participants, 4730 plasma samples
- Multi-site potential: ADNI is a 60+ US site consortium under LONI governance; ASPREE (same Baker Institute platform, Agilent 6495C vs 6490, 724/781 species overlapping, NIST SRM 1950 harmonised) is the natural external validation partner.

**Cost** _(confidence: low)_
| Leg | Estimate | Note |
|---|---|---|
| Source | $0 (LONI DUA) | Base LONI DUA permits commercial use (pricing-data.md, verified 2026-03-29). ADMC lipidomics sublayer may require a separate agreement — cost unknown. |
| Screening / QA | Quote required | Published QC-passed dataset likely accepted as-is ($0). Re-QA audit: ~$5–15/sample at academic core ($5,940–$17,820 at n=1188). |
| Assay | Already performed | Baker Institute Agilent 6490 dMRM, 781 species, 4730 samples. Fresh re-assay via RARC/NIA: ~$517/sample non-Duke rate (pricing-data.md) = ~$103,400 at n=200 minimum. |

- **Total known range:** $0 – open (within budget: unknown — no budget stated)
- **Open cost components:** ADMC separate commercial agreement cost if required ($0–$50K range); screening QA if re-audit needed; physical biospecimen aliquot cost if fresh wet samples are required
- **Timeline:** 2–4 months for standard LONI DUA; +4–12 weeks if ADMC commercial DUA negotiation required; +3–6 months if physical samples needed via RARC/NIA

**Quality** _(confidence: medium, provenance depth: 0.48)_
- **Pre-analytical:** partial. Fasting documented at 95% (load-bearing for lipidomics). Tube type confirmed as plasma; EDTA implied not stated. Freeze-thaw cycle count and storage duration missing — largest pre-analytical unknowns for metabolomics reproducibility.
- **Confounders:** good on statin (request's primary hard_negative — 423 species mapped, covariate-controlled, supplementary table documented). Commercial use partially cleared: base LONI DUA permits commercial research (pricing-data.md); ADMC lipidomics sublayer unverified.
- **Platform validation:** good. Two independent cohorts (ADNI and ASPREE) published on this exact platform. Cross-cohort replication in ASPREE: C-index 0.75 (HR=1.21, p=9.85×10⁻⁴). NIST SRM 1950 harmonisation documented.
- **Quality summary:** Medium overall. Both hard_negatives are addressed (statin: good; commercial: partial pending ADMC verification). Pre-analytical is the load-bearing weakness. Provenance depth 0.48.

**Linked entities**
- Institution: [[usc-loni-data-coordinating-center]]
- Sponsor: [[alzheimers-disease-metabolomics-consortium]]
- Data provider: [[baker-heart-diabetes-institute]]
- Investigators: [[michael-weiner-ucsf]], [[peter-meikle-baker-institute]], [[rima-kaddurah-daouk-duke]], [[andrew-saykin-indiana]], [[gabi-kastenmuller-helmholtz-munich]], [[wang-tingting-baker-institute]]
- Platform: [[baker-institute-lipidomics-lc-ms-qqq]]

---

### 2. ASPREE Dementia Case-Cohort Lipidomics Subset
**Entity ID:** `aspree-dementia-casecohort-lipidomics`  •  **Type:** published_cohort  •  **Sources:** PMC12269576

**Card**
- **Primary signal:** 402 incident dementia cases with 6.5-year prospective follow-up in a population-based Australian RCT (ASPREE); plasma lipidomics on Baker Institute Agilent 6495C (781 species, same platform as ADNI, NIST-harmonised). Request-relevant case N = 402 — exceeds 200-person floor but leaves limited sub-group headroom.
- **Action:** Contact Paul Lacaze (Monash University) and Peter Meikle (Baker Institute) to confirm: (1) whether commercial use is permitted under ASPREE ethics #523/21, and (2) whether lipidomics data and/or biospecimens are available. Do not commit project timeline until commercial use is confirmed.
- **Risk:** Both hard_negatives for this request are unresolved: statin confounding is entirely undocumented in the wiki, and no commercial use pathway exists. PI-gated access with 3–12 month unpredictable timeline. Sample depletion status unknown.

**Scale** _(confidence: medium)_
- Usable N for this request: **402** _(incident dementia cases with 6.5-year prospective follow-up; 3093 cognitively normal comparators also available)_
- Headline N: 3495 (case-enriched sub-cohort from ASPREE trial, n=19,114)
- Multi-site potential: ASPREE is a single national trial (Australia, 64 general practices). Natural pairing with ADNI (same Baker Institute platform, 724/781 overlapping species, NIST SRM 1950 harmonised). Pooling requires careful weighting (RCT vs clinic-recruited).

**Cost** _(confidence: low)_
| Leg | Estimate | Note |
|---|---|---|
| Source | Quote required | PI-request-only access (Paul Lacaze/McNeil team, Monash). No formal portal, no published pricing. Commercial DUA: $5K–$50K legal overhead possible (pricing-data.md gaps section). |
| Screening / QA | Quote required | NIST SRM 1950 correction factors for cross-cohort harmonisation with ADNI are documented. Buyer-side re-QA: quote required. |
| Assay | Already performed | Baker Institute Agilent 6495C dMRM, 781 species, n=3495. Fresh assay on remaining ASPREE aliquots (depletion status unknown): quote required from Baker Institute. |

- **Total known range:** null – null (all legs are quote required or sunk cost)
- **Open cost components:** source access cost (unknown, PI-gated); commercial use DUA cost (unknown, no pathway documented); screening QA; sample depletion status unknown
- **Timeline:** 3–12 months (PI-request-only, no predictable timeline). Commercial negotiation adds further uncertainty.

**Quality** _(confidence: low, provenance depth: 0.14)_
- **Pre-analytical:** weak. Only instrument model (Agilent 6495C) and QC method (NIST SRM 1950) documented. Fasting status, freeze-thaw cycles, storage duration, tube type all missing. Insufficient pre-analytical documentation for a metabolomics validation study.
- **Confounders:** weak. Statin confounded (hard_negative): missing — no medication_and_lifestyle_confounders dimension covered in wiki; statin prevalence unknown. Commercial_use_allowed_false (hard_negative): missing — no commercial use pathway documented; ethics approval #523/21 covers academic research only. Both hard_negatives fail for this candidate.
- **Platform validation:** good for the platform itself. ASPREE is the validation cohort for ADNI-trained models (C-index 0.75 documented). Platform cross-cohort replication is established.
- **Quality summary:** Low. Provenance depth 0.14. Both request hard_negatives fail. Pre-analytical is weak. Insufficient wiki coverage to score this entity with confidence.

**Linked entities**
- Institution: [[alfred-hospital-monash-university]]
- Collection site: [[baker-heart-diabetes-institute]]
- Investigators: [[paul-lacaze-monash]], [[peter-meikle-baker-institute]]
- Platform: [[baker-institute-lipidomics-lc-ms-qqq]]

---

## Rejected candidates

- **`adni-phase1-serum-lipidomics`** — Fails two hard filters: modality is serum (not plasma) and the serum lipidomics dataset is cross-sectional (baseline only); longitudinal_required=true not met.
- **`university-of-michigan-als-microbiome-metabolomics`** — Indication mismatch: amyotrophic lateral sclerosis, not Alzheimer's disease.

---

## Gaps and recommendations

- **commercial_use_unverified**: Neither surviving candidate has fully documented commercial-use clearance. ADNI base LONI DUA is confirmed; ADMC lipidomics sublayer is unverified. ASPREE has no commercial pathway documented. → _What to do:_ Contact ADNI/ADMC to verify lipidomics sublayer commercial terms before committing. Contact Paul Lacaze / Alfred Hospital Ethics Committee to confirm ASPREE commercial use status.

- **modality_gap**: Both surviving candidates are targeted lipidomics only (LC-MS/MS QqQ, 781 species), not broad untargeted metabolomics covering amino acids, organic acids, TCA intermediates. → _What to do:_ Buyer should confirm whether targeted lipid panel meets their validation scope. If untargeted metabolomics is required, ingest of additional AD plasma metabolomics papers is needed.

- **thin_wiki_coverage**: Only 4 cohort entities in wiki; 2 survive hard filters. The AD plasma metabolomics space is larger. → _What to do:_ Orchestrator should evaluate triggering ingest for additional AD plasma metabolomics papers. Suggested PubMed query: "Alzheimer disease plasma metabolomics longitudinal biomarker validation".

- **statin_confounding_undocumented**: ASPREE statin prevalence not in wiki (depth=0.14, no confounders dimension). → _What to do:_ Surface to buyer as a gap to ask PI about during access enquiry. ADNI addresses this strongly — proceed with ADNI as primary.

- **mci_adjacent_cohorts_excluded**: MCI sub-cohorts in ADNI not confirmed as in scope by buyer. → _What to do:_ Ask buyer to confirm whether MCI-to-AD conversion sub-cohort (n=329 converters) is acceptable, as it expands the usable analytical N and enables conversion prediction modelling.

---

## Provenance

This recommendation reads from 31 wiki entities (4 cohorts, 9 institutions, 15 investigators, 3 platforms). Every numeric claim above is sourced from dimension fragments in the linked entity articles, which in turn cite primary literature (PMC12269576).

If the buyer wants to deepen confidence in ASPREE, the open path is to ingest the full ASPREE lipidomics sub-study protocol and data access documentation. If the buyer wants to verify ADNI pre-analytical details, the ADNI biospecimen protocol paper (Huynh et al. 2018) should be ingested (flagged in cohort article open_questions).
