# Evidence Standard

The non-negotiable quality bar for every claim that lands in the wiki, a recommendation, a catalog listing, or a bundle.

## The rule

**Every fact carries a verbatim source quote, a source ID, and an implication.** Missing any of the three = drop the fact.

1. **Verbatim source quote.** A blockquote from `store/raw/papers/PMC{id}/paper.md` or `store/raw/trials/NCT{id}/trial.md`. No paraphrase. No "approximately as stated". The exact text the agent read.
2. **Source ID.** PMC{id}, PMID:{id}, NCT{id}, DOI:{...}, or a full URL. The ID must be retrievable from `store/raw/` (or, for catalog/bundles, from a wiki entity that itself meets this standard).
3. **Implication.** A sentence ending with "which means for the buyer's project ...". If you cannot finish that sentence, the fact is noise — drop it.

## What this rules out

- **Composite facts pulled across two sources without separate quotes for each.** If a claim depends on two papers, both papers get cited with their own quotes.
- **Inferred numbers.** "Probably about 200 patients" is not a fact. "188 enrolled per Methods, with 12 excluded for missing endpoints, leaving n=176 analysable" is.
- **PI credentials assertions** without a paper or institutional page citation.
- **Pricing claims** that do not trace to `references/pricing-data.md` (which itself cites verifiable sources).
- **Implications without consequences.** "The cohort has longitudinal data" is a fact, not an implication. "The 10-year follow-up means a buyer can model trajectories at quarterly resolution" is the implication.

## What this requires

Every entity article body has dimension sections; each dimension section has at least one paragraph that ends with the implication and at least one verbatim quote in a blockquote with `[ref: PMC...]`. The compiler enforces this at extract time. Lint catches drift.

## Cross-domain examples (per `.claude/rules/example-rotation.md`)

- **A**: "5,000 ADNI participants with paired plasma + amyloid PET, longitudinal 2-year follow-up [ref: PMC10103184]. **Which means** the buyer can validate plasma biomarker hits against amyloid PET ground truth in the same individuals — rare in non-ADNI cohorts."
- **B**: "TCGA-LUAD has 522 cases with FFPE + matched normal + RNA-seq [ref: PMC...]. **Which means** the buyer can train a tumor-vs-normal expression classifier without recruiting new patients, but block age >5 years on most cases requires a degradation-aware preprocessing step."
- **C**: "PRISM IBD study excluded antibiotics within 14 days, captured 15-30 day exposure as covariate, 18% of cases affected [ref: PMC...]. **Which means** the buyer's biomarker development study can stratify by recent antibiotic use rather than discarding ~1 in 5 samples."

## Scope: the standard applies to scoring verdicts too

The evidence standard was originally written for entity articles. It extends to **scoring verdicts and recommendations**. When the score skill writes "WGBS requires DIN>6 and 500ng input", that is a fact — it needs a source. When a recommendation says "$150-300/sample for WGBS", that is a fact — it needs a citation to `references/pricing-data.md` or a vendor URL.

Assay requirements, cost ranges, and pre-analytical thresholds are grounded in `references/providers/<provider>-<assay>.md` and `references/pricing-data.md`. Each entry in those files itself cites a manufacturer protocol, methods paper, or vendor page. If no grounded source exists, the claim is `[open_question]` — never a training-data fill.

This closes the gap where entity articles met the evidence standard but scoring verdicts did not.

## Failure modes the rule prevents

- **Authority drift**: an early extraction makes a soft claim, a downstream summary repeats it, by the third pass the soft claim is presented as fact. The rule blocks this because each pass must re-cite the original quote.
- **Implication bloat**: every fact carries an implication, so the compiler cannot accumulate facts that have no consequence. Noise is filtered at the source, not the sink.
- **Source-hostile reuse**: if the original paper is later corrected or retracted, every wiki claim derived from it is discoverable via `provenance.sources` and can be re-evaluated.
- **Training-data opacity**: without the scoring extension, the system could produce entity articles with perfect provenance and then wrap them in scoring verdicts built from LLM parametric memory — the exact broker opacity the system exists to dissolve.
