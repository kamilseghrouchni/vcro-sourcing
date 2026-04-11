# The aha moment

You ask: "I need stool samples from IBD patients to run shotgun metagenomics, treatment-naive, at least 100 subjects."

Ten seconds later you see:

```
Can you get it?  Yes, partially — 5 biobanks hold IBD stool at scale.
Best path:       SPARC-IBD → Cornell Microbiome Core, ~$25K for 100 samples.
What blocks it:  Treatment-naive subset count — one inquiry to CCF unlocks it.
```

Then a table showing every sourcing path with per-link evidence states. Green = grounded (URL you can click). Open = unknown (we looked, here's who to contact). No fake numbers. No "approximately $150-300." Either we found it on the provider's page or we say we didn't.

That's the product.

---

## What makes this different

### 1. Every number traces to a source

Brokers say "WGBS costs $150-300/sample." We say "IMR charges $875/sample for 22Gb depth [verified: imr.bio/pricing.html]. Cornell charges $250/sample standard depth [verified: epicore.med.cornell.edu]. Novogene says $30/sample but only at 200+ samples and standard depth [verified: novogene.com promotional page]."

The buyer clicks the link and sees the same number. That's trust you can't fake.

### 2. The system goes and looks

Ask about a domain with zero wiki data — IBD stool metagenomics, NSCLC spatial transcriptomics, anything new. The system doesn't say "nothing found." It searches PubMed for prior art, ClinicalTrials.gov for trials retaining specimens, the web for biobanks and providers. It visits provider pages and extracts their stated requirements. It delivers a sourcing chain from what it found. Then it compiles the findings into the wiki in the background so the next person asking the same question gets an instant answer.

### 3. The answer is a chain, not a report

Not 25 pages of prose. A chain: specimen source → specimen fitness → provider → cost → timeline. Each link grounded or flagged. The buyer sees which links are solid and which need one phone call. The decision is obvious from the table.

### 4. Fit-for-purpose is provider-specific

"Will these specimens work for my assay?" depends on who runs it. Psomagen needs >200ng and DIN>7.0. Cornell accepts standard input. EM-seq works with 10ng. The system pairs your specimen source with a specific provider and evaluates fitness against THAT provider's stated requirements — not a generic "assay requirements" document.

### 5. Honest gaps are more valuable than fake answers

When the system can't ground a claim, it says so: `[open_question — searched psomagen.com, no DIN threshold found for stool matrix]`. The buyer knows exactly what's unknown AND knows the system already tried. A gap with provenance ("we looked here and didn't find it") is infinitely more useful than a confident-sounding number from training data.

### 6. The wiki compounds but never blocks

First query in a new domain: search → score thin leads → deliver immediately → compile in background. Second query in the same domain: wiki has entities → discover finds them instantly → full scoring with provenance depth, dimension sections, prior art baked in. The product gets faster and richer with every query. But the first buyer never waits.

---

## The less-is-more principle

The aha is not more features. It's fewer lies.

- No composite score. Three axes, buyer picks the weight.
- No training-data fills. `[open_question]` over a plausible guess.
- No compile gate. Search results are immediately usable.
- No forced empty legs. The chain has the links that matter, nothing more.
- No wiki-link to a nonexistent entity. Source URL or nothing.
- No prose where a table works. The chain table IS the recommendation.

Every piece of information the buyer sees is either grounded (they can verify it) or honestly flagged (they know it's unverified). The system never smooth-talks. It shows its work.

---

## One sentence

The product finds specimens that match what you want to do, tells you whether they'll work for your specific assay at your specific provider, and shows you exactly which claims are verified and which need one phone call — all in under a minute, with every number traceable to a source.
