---
name: catalog-catalog
description: Generate a catalog listing draft for an institution from the wiki entities already linked to it. Reads the wiki only; surfaces gaps for the biobank to fill. Writes catalog/{slug}/listing.md.
---

# catalog/catalog

You take an institution slug (or an institution name to resolve) and produce a draft catalog listing for that institution by reading the wiki entities already linked to it. The pitch to the biobank is "here is what we already know about your collections from published evidence — review, correct, fill in what is missing." You write the draft. You do NOT contact the institution. You do NOT modify the wiki.

Domain framing rotates per `.claude/rules/example-rotation.md`. Catalog examples in this doc cycle through A neuro fluid biomarker, B oncology tissue genomics, C microbiome stool sequencing.

## Inputs

- `institution_slug`: the wiki slug for the institution. If the user gave a name, the orchestrator (vcro-os) resolves it to a slug first via the master index.
- `wiki_root`: absolute path to `store/wiki/`.
- `out_dir`: `store/catalog/{institution_slug}/`. You write `listing.md` here.
- Optional `prior_listing_path`: if a prior draft exists for this institution, read it and produce an incremental update rather than a fresh draft. Mark new sections vs reused sections in the run summary.

## What you read

1. The institution's own entity article at `store/wiki/institutions/{slug}.md`. Frontmatter and `referenced_by` list are load-bearing.
2. Every cohort article whose `parent_institution` matches the slug, or whose `Links` section names the institution.
3. Every investigator article whose affiliation maps to the institution.
4. Every platform article that any of those cohorts use.
5. `store/wiki/index/by-institution.md` for the cross-cut view.
6. `references/intelligence-dimensions.md` so you know which dimensions to surface in the listing's "what we know" section.
7. NOTHING from `store/raw/`. Wiki is the queryable layer.

## What you produce

A single markdown file at `out_dir/listing.md`:

```markdown
# Catalog listing draft: <institution canonical name>

_Generated from <N> wiki entities linked to `<institution_slug>`. Last compiled <date>._

## Pitch

This draft summarises what vCRO already knows about your collections from published evidence. Review, correct anything wrong, fill in what is missing. The corrections feed back into the wiki and the listing publishes with verified provenance.

## What we know

### Sample types and quantities

A short paragraph or table of every sample medium that appears in any linked cohort, with the largest cited N for that medium and the source PMC ID. Cross-domain cues for what to look for:
- A: plasma, serum, CSF, PBMC counts; longitudinal vs cross-sectional totals.
- B: FFPE blocks, fresh-frozen tumor, paired normal; counts by tissue type and stage.
- C: stool aliquots, biopsy tissue, paired serum; counts by disease activity state.

### Disease areas

List the indications covered by linked cohorts, with the cohort entity_id citing each.

### Collection protocols

For each linked cohort, the protocol attributes that are documented (from dimension 20). Mark UNKNOWN attributes explicitly.

### Published analytical work

The platforms used on these collections, with the cohort entity_id citing each. This is the "what was already done with our samples" section.

### Estimated capacity

Counts: number of trials at this institution (from related_trial back-references), number of papers in the wiki, number of investigators on file. Mark these as evidenced minima — the real capacity is usually larger.

### Access and consent (best evidence)

Pull from the access_and_consent_scope dimension (dim 9) of every linked cohort. Note the most permissive and least permissive consent terms across cohorts.

## What we are missing

A bulleted list, one entry per gap. Each entry says (a) the missing attribute, (b) which dimension it belongs to, (c) why the buyer cares. Cross-domain examples:
- A: "Freeze-thaw cycle counts not documented for any plasma cohort (dim 20). Buyers running new metabolomics assays need this to estimate batch effect risk."
- B: "Block age at sectioning not documented for any FFPE cohort (dim 20). Buyers running RNA-seq need this to estimate extractability risk."
- C: "Cold-chain handoff not documented for stool collection (dim 20). Buyers running shotgun sequencing need this to estimate community-shift risk."

## Linked entities

Bulleted list of every wiki entity used to build this listing, with type and slug. The biobank can click through to verify each one.

## How to update this listing

Three options for the biobank reviewer:
1. **Confirm**: reply that everything is correct. The listing publishes as-is with a verified-by-institution flag.
2. **Correct**: reply with specific fixes. Each correction feeds back into the corresponding wiki entity through the compile/merge skill.
3. **Augment**: provide additional information for the gaps. Each new fact becomes a fragment that compile/extract turns into a wiki update.
```

## Hard rules

1. **Wiki-only.** No raw paper reads, no web search, no PI contact.
2. **No invented capacity.** If the wiki does not have a number for trial count, paper count, or aliquot count, say UNKNOWN. The institution will fill it in.
3. **Cite every fact.** Every entry in "what we know" cites the cohort entity_id (and through it, the source PMC).
4. **Surface every gap.** "What we are missing" must list every dimension that is missing for at least one linked cohort. Silent gaps train the institution to skip review.
5. **Domain framing rotates.** When you describe what to look for in each section, do NOT default to plasma or metabolomics phrasing. The institution may be a tumor bank or a microbiome consortium.
6. **One file write per run.** If the institution slug yields zero linked entities, write a stub listing that says "The wiki has no entities yet for this institution. Compile/extract on relevant papers must run first." Empty drafts are valid.

## What you do NOT do

- Do not run compile/extract. The catalog skill is read-only on the wiki.
- Do not score Scale/Cost/Quality. The score skill is request-specific; the catalog is institution-specific.
- Do not contact the institution. The orchestrator decides the outreach step.
- Do not write to `store/wiki/`. Corrections from the institution feed back through compile/merge.

## When the institution is well-represented

Even with 1-2 linked cohorts, the listing is useful because the gaps section is the load-bearing output. The biobank reviewer fills the gaps and the wiki gets richer. Do not skip the listing because evidence is thin.

## When the institution is sparse

Zero linked entities → write the stub listing and recommend the orchestrator triggers compile/extract on the institution's recent papers (the orchestrator will run search → ingest → extract → merge → re-run catalog).
