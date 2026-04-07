# Discover Report

**Verdict:** `wiki_partial`

1 strong candidate and 1 partial candidate survive hard filters. Wiki has 4 cohort entities total; 2 pass indication + modality + longitudinal + n≥200. Both use targeted lipidomics (not broad untargeted metabolomics). Commercial use is partially cleared for ADNI and unresolved for ASPREE.

---

## Strong matches

- **adni-go2-plasma-lipidomics** — ADNI-1/GO/2 Longitudinal Plasma Lipidomics Cohort (Baker Institute LC-MS/MS). 4730 plasma samples from 1517 participants, up to 10-year follow-up, statin confounders explicitly mapped (423 species), AUC 0.84 AD vs CN. Base LONI DUA permits commercial use (pricing-data.md); ADMC lipidomics sublayer commercial terms require separate verification.

## Partial matches

- **aspree-dementia-casecohort-lipidomics** — ASPREE Dementia Case-Cohort Lipidomics Subset. 402 incident dementia cases with 6.5-year prospective follow-up, same Baker Institute platform as ADNI (Agilent 6495C). PI-request-only access (Paul Lacaze, Monash). Commercial use unspecified. Statin confounders not documented in wiki (depth=0.14).

## Rejected

- **adni-phase1-serum-lipidomics** — Fails two hard filters: modality is serum (not plasma) and serum lipidomics is cross-sectional (baseline only, longitudinal_required=true not met).
- **university-of-michigan-als-microbiome-metabolomics** — Indication mismatch: ALS, not Alzheimer's disease.

## Gaps

- **commercial_use_unverified**: Neither candidate has fully documented commercial-use clearance. ADNI base DUA is confirmed; ADMC lipidomics sublayer is not. ASPREE has no commercial pathway documented.
- **modality_gap**: Both candidates are targeted lipidomics only, not broad untargeted metabolomics. Buyer should confirm whether targeted lipid panel meets their scope.
- **thin_wiki_coverage**: Only 4 cohorts in wiki; 2 survive. The AD plasma metabolomics space is larger. Consider ingest of additional AD plasma metabolomics papers.
- **statin_confounding_undocumented**: ASPREE statin prevalence not in wiki. ADNI addresses this strongly.
- **mci_adjacent_cohorts_excluded**: MCI sub-cohorts in ADNI not explicitly confirmed as in scope by buyer.
