# Discover Report — AD Plasma Metabolomics (2026-04-06)

**Request:** Longitudinal plasma metabolomics cohorts in Alzheimer's disease, ≥200 participants, biomarker validation, commercial-use rights, statin effects minimised.

---

## Verdict

**wiki_partial** — 1 strong match and 1 partial match found from 31 wiki entities (4 cohorts). Neither has confirmed commercial-use clearance; both use targeted lipidomics rather than broad untargeted metabolomics. Wiki coverage is thin. Orchestrator should decide whether to proceed or trigger ingest.

---

## Strong matches (1)

- **ADNI-1/GO/2 Longitudinal Plasma Lipidomics Cohort** (`adni-go2-plasma-lipidomics`) — 4730 plasma samples from 1517 participants, Baker Institute targeted LC-MS/MS (781 species), up to 10-year longitudinal follow-up, AD vs CN AUC 0.84, validated externally in ASPREE (C-index 0.75). Statin confounders documented and handled as covariates (423 species mapped). Access via LONI portal (ida.loni.usc.edu). *Commercial use terms unspecified — must verify DUA and ADMC agreement before committing.*

---

## Partial matches (1)

- **ASPREE Dementia Case-Cohort Lipidomics Subset** (`aspree-dementia-casecohort-lipidomics`) — 402 incident dementia cases from 3495 participants, 6.5-year prospective follow-up, same Baker Institute platform as ADNI (781 species, NIST-harmonised). Population-based (not clinic-recruited), making it a strong external validation platform. *PI-request-only access (Paul Lacaze, Monash); 3–12 month timeline; statin status undocumented; commercial use unspecified. Provenance depth low (0.14).*

---

## Rejected (2)

- **ADNI Phase 1 Serum Lipidomics Cohort** (`adni-phase1-serum-lipidomics`) — Fails two hard filters: matrix is serum (not plasma), and lipidomics is cross-sectional (baseline only, not longitudinal). N=313 is acceptable but the modality and longitudinal requirements are unmet.
- **University of Michigan ALS Cohort** (`university-of-michigan-als-microbiome-metabolomics`) — Indication mismatch (ALS, not AD). Eliminated at index level.

---

## Gaps

1. **Commercial use unverified (critical):** Neither candidate has confirmed commercial-use clearance in the wiki. ADNI DUA has known academic-bias history; ASPREE is PI-request-only. This is a pre-commitment blocker — buyer must verify terms before signing any project agreement.
2. **Modality scope (important):** Both candidates provide targeted lipidomics (~781 species), not broad untargeted metabolomics. If the buyer requires amino acids, organic acids, or TCA intermediates, neither cohort satisfies the scope. Buyer should clarify targeted vs. untargeted requirement.
3. **Thin wiki coverage:** Only 4 cohort entities in the wiki, 3 AD-indication. The longitudinal AD plasma metabolomics landscape is much broader. Consider ingest trigger for additional papers (suggested PubMed query: `"Alzheimer disease" plasma metabolomics longitudinal biomarker validation`).
4. **Statin confounding undocumented in ASPREE:** ASPREE entity has provenance_depth 0.14; statin prevalence is likely high in an elderly Australian RCT population but is not documented. Surface to buyer as unresolved concern.
5. **MCI sub-cohorts not addressed:** Both ADNI cohorts enroll MCI participants alongside AD. Buyer should confirm whether MCI-to-AD conversion sub-cohorts are acceptable — this expands usable N and enables conversion-prediction modelling.
