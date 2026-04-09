# Product reframe: score specimens, not existing data

**Date:** 2026-04-09
**Trigger:** Reviewing the AD/ALS CSF DNA methylation recommendation (`store/queries/2026-04-08_ad-als-methylation-case-matched/recommendation.md`). The recommendation scored 6 cohorts on their existing blood methylation data quality when the buyer asked for CSF samples to run new assays on. The answer was framed as "zero CSF methylation cohorts" when it should have been "4 cohorts have banked CSF, here's the sourcing + assay path."

## The insight

The buyer's question was: "find patient samples case-matched **for running** DNA methylation assays, for AD and ALS."

"For running" means the buyer will commission the assay. They need:
1. **Specimens** (CSF from the right patients, banked, accessible, with the right consent)
2. **A provider** to run the methylation array on those specimens
3. **Case-matching metadata** (age, sex, APOE, diagnosis) to construct paired designs

They do NOT need existing methylation data as a primary deliverable. Existing data is a bonus (proves feasibility, validates platform, provides a comparator) — but the answer is about specimen sourcing, not data access.

## What was scored vs what should have been scored

| Axis | What the recommendation scored | What the buyer needed scored |
|---|---|---|
| **Scale** | How many blood EPIC data points exist (885, 202, 448) | How many CSF specimens are banked and requestable |
| **Cost** | Data access fee + existing QC | Biobank specimen fee + shipping + assay provider quote |
| **Quality** | Blood EPIC pre-analytical quality, batch effects | CSF specimen quality: freeze-thaw cycles, volume per vial, storage duration, expected cfDNA yield for EPIC input |

The recommendation actually contains most of the right intelligence (ADNI CSF is $29.09/vial via NIA RARC, EMIF-AD has CSF at 11 sites, case-matching is feasible post-hoc from metadata). But it's structured as footnotes inside data-centric cards instead of leading with the specimen sourcing path.

## The routing error

The user's question is a **bounty**, not a **query**:

- **Query** = "what cohorts exist for AD plasma metabolomics?" → answer with data cards, three-axis scoring on existing data
- **Bounty** = "I need CSF specimens for running methylation assays on AD/ALS samples" → answer with a sourcing path: source (biobank) + screening/QA (specimen validation) + assay (provider to run EPIC)

The vcro-os orchestrator routed this to the query workflow because the verb was "find." But the intent was procurement ("for running assays" = commissioning new work). The routing should detect "for running [assay]" or "to run [assay]" as a bounty signal, not a query signal.

## Three product-level changes

### 1. Understand skill must detect "commission" vs "access" intent

The `query/understand` skill should classify the request intent:

- **Access intent** — "find existing data," "what cohorts have [modality] data," "show me [assay] results" → query workflow, score existing data
- **Commission intent** — "find samples for running [assay]," "source specimens," "I need [N] samples to [verb]," "provider for [assay]" → bounty workflow, score specimen availability + provider + cost

This classification goes into `request.json` as `intent: access | commission | mixed`. The orchestrator uses it to pick the workflow.

### 2. Scoring axes flex based on intent

For **commission intent**, the three axes reframe:

- **Scale** = banked specimen count, not existing data points. "ADNI has 202 subjects with banked CSF" — the 202 is the number of vials requestable, not the number of existing EPIC arrays.
- **Cost** = three legs physically: (1) specimen access fee ($29.09/vial NIA RARC), (2) specimen QC/validation (vendor quote), (3) assay commission ($150-250/sample EPIC array). This already matches the bounty three-leg model.
- **Quality** = specimen fitness for the intended assay. Pre-analytical questions become: freeze-thaw history? Volume per aliquot? Storage temperature? Expected DNA yield for EPIC input? NOT: was the existing blood EPIC batch-processed correctly?

For **access intent**, the existing axes stay as-is — they score existing data quality.

### 3. The deliver format has three shapes, not one

| Finding type | Format | When |
|---|---|---|
| **Direct match** | Ranked cards with full three-axis scoring | Wiki has existing data matching the request |
| **Sourcing path** | Source → QC → Assay pipeline with concrete numbers | Commission intent; specimens exist but assay hasn't been run |
| **Pivot** | Short verdict + alternative approaches | Neither data nor specimens match; field gap |

The current deliver skill writes the same "ranked cards" format for everything. The CSF methylation query needed "sourcing path" and got "ranked cards on blood data."

## What the CSF methylation answer should have looked like

```
## Sourcing path: CSF DNA methylation for AD

### Source leg
4 cohorts have banked CSF from lumbar punctures. Ranked by accessibility:

1. ADNI (n=202 CSF vials, NIA RARC, $29.09/vial, commercial use OK)
2. EMIF-AD (n=885 subjects with CSF, distributed across 11 EU sites, commercial TBD)
3. DELCODE (n=448, DZNE, access terms TBD)
4. EHBS (n=495 controls only — value as matched control arm with ADNI cases)

### Assay leg
No provider cataloged yet. Known vendors for low-input EPIC on CSF cfDNA:
- Diagenode (Belgium) — EPIC services, low-input protocols
- EpigenDx (MA) — targeted bisulfite + EPIC
- Zymo (CA) — WGBS, RRBS, EPIC
- Active Motif (CA) — EPIC services
→ Request quotes specifying: CSF cfDNA, expected yield 1-100 ng/mL, EPIC array

### QC/risk leg
CSF cfDNA yield is low. Navarra experience (plasma, n=63): ~50% contamination,
zero DMPs surviving FDR. CSF may perform better (higher neuronal fraction per
Sheffield WGBS: ~13%) but this is uncharted. Budget for QC failures on first batch.

### Case-matching
No cohort has formal pre-matched pairs. ADNI and EMIF-AD provide age/sex/APOE
metadata sufficient for post-hoc matching.

### ALS leg
No ALS CSF methylation exists anywhere. Source ALS CSF from Target ALS
Biofluid Core or Northeast ALS Consortium. Same assay providers apply.
```

That's the answer. It's a sourcing path (source + assay + QC), not a data catalog.

## The blueprint already says this

`references/vcro-v2-blueprint.md` Part 1 explicitly defines vCRO as a specimen-sourcing system, not a data catalog:

> "vCRO builds the transparency layer the market lacks. It reads the biomedical literature and compiles a structured knowledge graph of **who has what samples, where, at what quality, under what consent, at what estimated cost, and how to access them.**"

The three scoring axes in the blueprint are:
- **Scale** = "how many usable samples exist for THIS specific request? Not headline N. Not published N. **Estimated available N after filtering by sample type, disease status, consent scope.**"
- **Cost** = "total cost from freezer to data. Three legs: **sample acquisition + screening/QA + assay.** Anchored to verified pricing data."
- **Quality** = "will the samples **produce the signal**? Pre-analytical quality (fasting, tube type, storage, freeze/thaw), confounder control, platform validation history, and provenance depth."

All three are framed around **specimens going to an assay**, not around existing data products. The CSF methylation recommendation inverted this framing — it scored blood EPIC data quality when the blueprint says score "will the samples produce the signal for the buyer's intended assay."

This is not a new feature request. The blueprint already specifies the correct behavior. The implementation drifted by treating the scoring axes as data-quality axes instead of specimen-fitness axes.

The first-order pains listed in the blueprint (Part 1 § First-order pains) are also specimen-centric: demographics (right patients), quality (fit for the intended assay), scale (hundreds of samples), fit for purpose (sample-assay match), ethics (consent scope). None of them say "find existing assay results."

The system should always be ready to propose commissioning a new assay on banked specimens — that's the normal case in this market, not the exception. Most cohorts with banked biospecimens have NOT had every possible assay run on them. The buyer's question "find samples for running X" is the primary use case, not an edge case the system handles as a fallback.

## What this does NOT change

- The wiki structure stays. Entities are still cohorts, institutions, platforms.
- The compile pipeline stays. It enriches the wiki with specimen-level intelligence.
- The three-axis model stays. The axes just flex their meaning based on intent.
- The evidence standard stays. Every claim still needs quote + ID + implication.

What changes is: (a) the understand skill classifies intent, (b) the scoring axes adapt to the intent, (c) the deliver format has three shapes.

## For the wiki

The wiki's value in a commission-intent query is:
- It tells us which cohorts have banked specimens (even if the wiki entity was compiled from papers about existing blood data — the paper's Methods section mentions CSF collection)
- It links to institutions and investigators (the buyer contacts them for specimens)
- It accumulates negative results (the Navarra cfDNA contamination finding saves the buyer from repeating the experiment blind)

The wiki is NOT mentioned in the recommendation as "wiki partial" or "325 entities scanned." It's invisible infrastructure. The buyer sees "ADNI has 202 CSF vials at $29/each" — they don't care that this fact came from a wiki entity compiled from PMC9980279.

## Next actions

1. Update `query/understand/SKILL.md` — add `intent: access | commission | mixed` classification to `request.json` schema.
2. Update `vcro-os.md` — route commission-intent requests through the bounty workflow (or a new hybrid that combines query discover + bounty composition).
3. Update `query/deliver/SKILL.md` — add the three format shapes (direct match / sourcing path / pivot).
4. Update `query/score/SKILL.md` — scoring axes flex based on `request.intent`.
5. Do NOT change the extract/resolve/merge pipeline. The extract already captures specimen-level facts (banked CSF, vial counts, biobank access routes) as dimension fragments. The problem is downstream formatting, not upstream extraction.
