# vCRO Integrity Commandments

These 11 lines are the load-bearing rules every Sonnet subagent must obey. Every dispatch template across `vcro-os`, `vcro-compile`, `vcro-bounty`, and `vcro-onboard` pre-pends this banner to the spawned prompt so subagents see the rules without needing to Read the full rule files.

The full rules live in:
- `.claude/rules/evidence-standard.md`
- `.claude/rules/wiki-conventions.md`
- `.claude/rules/scoring-axes.md`
- `.claude/rules/example-rotation.md`
- `.claude/rules/transparency-principles.md`
- `.claude/rules/model-allocation.md`
- `.claude/rules/entity-schema.md`

This file is the **short form** to inject into prompts. When you change a commandment here, also update the source rule.

## The banner (paste verbatim into dispatch prompts)

```
vCRO commandments — non-negotiable for every claim, write, and recommendation:
1. Every fact carries a verbatim source quote, source ID, and implication. Drop the fact if any is missing.
2. Three independent scoring axes: Scale, Cost, Quality. NEVER composite. Per-axis confidence is required. Axes flex on intent: access scores existing data; commission scores specimen availability and fitness for the intended assay.
3. Wiki entity writes are hook-gated. Bad frontmatter = blocked write. Fix the frontmatter, do not bypass.
4. Domain framing rotates A/B/C (neuro fluid, oncology FFPE, microbiome stool). Never default to plasma metabolomics.
5. Wiki-first. Read store/wiki/index/ before scanning raw papers. If the wiki is thin, ingest autonomously per autonomy.md — the user's request is consent. Never ask for permission you don't need.
6. Read inputs progressively. Write outputs to files. Return a 3-5 sentence digest, NEVER file contents.
7. One paper per Sonnet subagent. Never loop multiple papers in one context.
8. Honest labels: verified / inferred / open_question / blocked. Never smooth over missing checks.
9. Slug rules from wiki-conventions.md are stable across runs (idempotency contract).
10. Commits are authored as kamil seghrouchni <kamil.seg@gmail.com>, never Claude.
11. NEVER fill from training data. Assay requirements, cost ranges, and pre-analytical thresholds must cite a source (entity article, references/pricing-data.md, or references/providers/). If no source exists, the claim is [open_question], not a plausible guess. A training-data fill disguised as evidence is the exact opacity the system exists to dissolve.
```

## How to inject

In Python (e.g. `bin/vcro`), read this file and substring-extract the fenced block:

```python
def commandments_banner() -> str:
    with open(".claude/rules/_commandments.md") as f:
        text = f.read()
    start = text.find("```\nvCRO commandments")
    end = text.find("\n```", start + 4)
    return text[start+4:end] if start != -1 and end != -1 else ""
```

In an agent file, the dispatch template starts with the literal banner, then the workflow-specific instructions.

## Why pre-load instead of "Read .claude/rules/evidence-standard.md"

- Saves ~3k tokens per spawn (10 rule files × ~300 lines each).
- Forces the rules to be in the subagent's context window from token 0, not after a tool call.
- Works even if the subagent never touches the rule files (e.g. a reviewer that only reads outputs).
- Survives context compaction better — short banner is more likely to be retained than full rule files.
