# Provider Reference Convention

Each file documents ONE provider's capability for ONE assay type. The score skill reads these to populate the `sourcing_chain.provider` and `sourcing_chain.specimen_fitness` links.

## The rule

Every number must cite the provider's own page (URL) or a published source (PMC/DOI). No training-data fills. If a field can't be grounded, write `unknown — not published on provider page`. These files are cached evidence — created by the gap-resolution step (Gate 3c) on first encounter, reused across queries.

## File format

Filename: `<provider-slug>-<assay-slug>.md`

```markdown
# <Provider Name> — <Assay Name>

**URL:** <provider service page>
**Location:** <city, country>
**Verified:** <date last checked>

## Specimen requirements
- **Input quantity:** <amount> — [ref: <URL>]
- **Integrity (DIN/RIN):** <threshold> — [ref: <URL>]
- **Specimen types accepted:** <list> — [ref: <URL>]
- **Matrix validations documented:** <which matrices they've run> — [ref: <URL or "not stated">]

## Pricing
- **Per-sample cost:** <amount or "quote required"> — [ref: <URL>]
- **Pricing model:** <per-sample / per-plate / per-Gb / quote> — [ref: <URL>]
- **Academic vs commercial rates:** <if different> — [ref: <URL>]

## Service details
- **Turnaround:** <time> — [ref: <URL>]
- **Minimum batch size:** <if stated> — [ref: <URL>]
- **Bioinformatics included:** <yes/no/optional> — [ref: <URL>]
- **Certifications:** <CLIA, CAP, ISO, etc.> — [ref: <URL>]
```

## Naming

`<provider-slug>-<assay-slug>.md` — both lowercase, hyphens. Examples:
- `psomagen-wgbs.md`
- `bgi-wgbs.md`
- `iu-proteomics-olink-explore.md`
- `uh-cibc-somascan-11k.md`
- `cornell-epigenomics-wgbs.md`
- `embl-metabolomics-untargeted.md`

## Relationship to pricing-data.md

`references/pricing-data.md` is the legacy flat reference with verified academic core pricing across many assays. Provider files are per-provider and include specimen requirements, not just pricing. Over time, entries in pricing-data.md should be promoted to provider files when a commission query needs them. pricing-data.md stays as a quick-lookup index; provider files are the detailed evidence.
