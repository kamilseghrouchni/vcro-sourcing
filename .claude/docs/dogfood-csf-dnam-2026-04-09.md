# Dogfood: CSF DNA methylation commission query (2026-04-09)

**Query:** "I want to find patient samples case matched for running DNA methylation assays on CSF, for AD and ALS. I also need a provider for the assay."

**Run:** `store/queries/2026-04-09_csf-dnam-ad-als-commission/`

## What worked (product reframe validated)

- understand classified `intent: commission`, `specimen_type_needed: ["CSF"]` — correct
- vcro-os routed to bounty-style scoring (commission intent gate fired)
- discover tagged `specimen_match` per entity (1 `has_banked_specimens`, rest `has_existing_data_only`)
- score used commission axes (Scale = banked CSF count, not blood data points) and assigned `finding_type: sourcing_path` vs `pivot`
- deliver used the three-section format: Sourcing paths first, Alternative approaches second, no "Wiki partial"
- recommendation never says "Wiki partial" — says "No published study has performed de novo DNA methylation assays on banked CSF specimens"
- Target ALS correctly surfaced as the only confirmed banked CSF source (ALS)
- ADNI correctly surfaced as conditional AD sourcing path ($29.09/vial verified)
- Negative results surfaced correctly (Navarra cfDNA contamination, EHBS null EWAS)

## What fell short (5 gaps to fix)

### 1. No contact block in the recommendation
The deliver skill lists entity IDs and institution names but doesn't produce a ready-to-act contact block. The buyer shouldn't have to grep the wiki for emails and portal URLs.

**What the buyer needs:**
| Who | Contact | What to ask |
|---|---|---|
| Target ALS Foundation | info@targetals.org | Residual CSF volume, specimen access terms, DNA yield feasibility |
| ADNI / NIA RARC | adni.loni.usc.edu (DUA), then NIA biobank | CSF aliquot availability, residual volume after immunoassay, freeze-thaw count |
| UKSH Kiel (assay lead) | Via Katie Lunnon (Exeter) or ICMB Kiel direct | Low-input EPIC quote for CSF cfDNA (~5-50 ng input) |

**Fix:** Add a "## Contacts and next steps" section to the deliver SKILL's sourcing path template with: institution, contact method (email/portal/PI name), and a one-sentence ask. The wiki already has this info in entity `card.action` fields and institution articles — deliver just needs to pull it.

### 2. Cost floor not computed from partial data
When 1 of 3 legs is verified ($29.09/vial ADNI) and the other 2 have reference ranges in `pricing-data.md`, the recommendation should compute a rough floor + ceiling. Currently says "all legs require quotes" when it could say "$63K-$130K for 200 samples (floor from verified anchor + reference ranges, ceiling from commercial CRO rates)."

**Fix:** Update the score SKILL to compute `total_estimated_floor` and `total_estimated_ceiling` from any combination of verified prices + reference ranges in pricing-data.md. Tag the estimate with `[inferred from reference ranges]` so the buyer knows it's not a quote.

### 3. No platform recommendation despite specimen constraints
CSF cfDNA yield is 1-100 ng per 500 µL aliquot. Standard EPIC requires 250 ng input. The recommendation correctly flags this as a gap but doesn't give an opinion. It should say:

"Low-input EPIC with amplification if cross-study comparability with ADNI/EMIF-AD matters. RRBS (≥10 ng input) if yield is too low for any EPIC variant. Get QC results on 3-5 pilot aliquots first — the yield number determines the platform."

**Fix:** Update the score SKILL to compare `specimen yield expectations` against `platform input requirements` and emit a platform recommendation when the constraint is clear. This is an inference, tagged `[inferred]`, not a verified fact — but it's the kind of inference the buyer is paying for.

### 4. Specimen availability not populated in existing entities
The ADNI and EMIF-AD entities lack dim 15 (biospecimen retention) and the `specimens:` frontmatter block. The extract SKILL emphasis landed this session but the existing 15 methylation cohort entities were compiled before it. A re-extract with the updated SKILL would populate `banked_specimens` hints.

**Fix:** Re-compile the 13 AD/ALS methylation papers with the updated extract SKILL. The extract cache will miss (SKILL changed → different output expected) so all 13 get fresh extracts. After merge, the entities will have dim 15 sections and `specimens:` blocks, and discover's `specimen_match` tagging will be more accurate.

### 5. No assay provider entities in the wiki
Diagenode, EpigenDx, Zymo Research, Active Motif are named as unverified leads in the gaps section but not onboarded as wiki entities. Without provider entities, the assay leg of every sourcing path is "quote required."

**Fix:** Run `vcro onboard "Diagenode"`, `vcro onboard "Zymo Research"`, etc. to create institution + platform entities with pricing from their published service pages. Then the score SKILL can pull verified assay costs from entity articles instead of saying "blocked."

## Priority order for fixes

1. **Re-compile** the 13 papers with updated extract SKILL (dim 15 emphasis) — makes specimen_match tagging accurate
2. **Onboard 2-3 assay providers** (Diagenode + Zymo at minimum) — unblocks the assay cost leg
3. **Deliver: add contact block** to sourcing path template — immediate buyer usability
4. **Score: compute cost floor/ceiling from partial data** — better than "all legs require quotes"
5. **Score: platform recommendation when specimen constrains platform** — valuable inference

## Inter-phase messaging (CLI UX gap for /query)

When running via `/query` inside Claude Code, the user sees raw tool traces (`Agent(...)`, `Read(...)`) instead of the spinner + outcome summary from `bin/vcro`. The orchestrator should print insight-bearing status lines between phases:

```
✓ understood: commission intent, CSF specimens for AD + ALS methylation
✓ scanned 328 entities — 8 candidates with CSF or methylation signal
✓ 1 confirmed CSF biobank (Target ALS, 231 samples), 1 conditional (ADNI $29/vial)
  scoring specimen fitness for EPIC input...
✓ 2 sourcing paths, 6 pivots — no existing CSF methylation data anywhere
  drafting sourcing path recommendation...
```

**Fix:** Add inter-phase messaging rules to `vcro-os.md` — after each subagent returns, print a one-line insight from the digest before spawning the next phase. The line should complete the sentence "I just figured out that..." — not "Phase X done, starting Phase Y."
