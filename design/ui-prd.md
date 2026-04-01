# vCRO Webapp — UI Product Requirements Document

_Source of truth for component design, data contracts, and visual behaviour._
_Design register: Framer templates (ara.so, Galilee, Anastasis, Prologue, Athos) for visual identity. Notte Labs for run feed structure only._

---

## 1. Layout

Two surfaces. One layout. Always visible simultaneously.

```
┌──────────────────────┬────────────────────────────────────────┐
│                      │                                        │
│   Run Feed           │   Output Panel                         │
│   muted · quiet      │   warm light · editorial               │
│                      │                                        │
│   38%                │   62%                                  │
│                      │                                        │
│   Live while run     │   [SessionHero — full gradient]        │
│   is happening.      │                                        │
│   Collapses to       │   [CardDeck — assembles as pipeline    │
│   RunSummary when    │    produces results]                   │
│   done.              │                                        │
│                      │   [CardDeck]                           │
│                      │                                        │
├──────────────────────┴────────────────────────────────────────┤
│  QueryBar                                           [Run ↗]   │
└───────────────────────────────────────────────────────────────┘
```

- Left panel: own scroll, muted — reads as a quieter companion to the right, not a jarring contrast
- Right panel: own scroll, persists after run — this is the deliverable
- QueryBar: always visible, fixed at bottom
- When a card is clicked → it expands to fill the right panel, back arrow to return to deck
- When run ends → left collapses to RunSummary, right stays

---

## 2. Color System

Two registers, never mixed across surfaces.

### Output panel — warm light
```
--bg-warm:          #F2EFE9   ← parchment-cream (Framer pastel direction)
--surface-warm:     #E9E4DC   ← slightly deeper
--text-primary:     #1A1814
--text-secondary:   #6B6560
--text-faint:       #A09890
--border-warm:      rgba(26, 24, 20, 0.07)
--accent-amber:     #B86E32   ← access routes, open data badges
--accent-blue:      #4A7FA5   ← platform/provider cards
--accent-green:     #4A7A4A   ← confirmed, replicated, open access
--frosted-bg:       rgba(242, 239, 233, 0.72)   ← glassmorphic card overlay
```

### Run feed — muted companion
```
--bg-feed:          #E4DFD8   ← desaturated warm — pulls from the same family as --bg-warm, just dimmer
--surface-feed:     #DDD8D0   ← slightly deeper, for result block backgrounds
--text-feed:        #3A3530   ← dark warm brown — readable but not sharp black
--text-feed-dim:    #7A7470   ← for phase labels, commands, secondary info
--text-feed-faint:  #A8A09A   ← for pending states, timestamps
--border-feed:      rgba(58, 53, 48, 0.10)
--glyph-active:     #B86E32   ← same amber as --accent-amber — active phase, spinner
--glyph-complete:   #4A7A4A   ← same green as --accent-green — ✓ checkmarks
--glyph-pending:    #A8A09A   ← ○ hollow dots
```

The left panel is a desaturated sibling of the right — same warm family, lower brightness. The boundary between panels reads as a tonal shift, not a collision between two different design systems.

### What we are not doing
- No pure black, no `#0F0F11` terminal dark — that's Notte's register, not ours
- No neo-brutalism borders or box-shadow offsets
- No Archivo Black — not in the Framer template register
- No emojis as phase indicators — use dot/glyph vocabulary

---

## 3. Typography

```
Display / card titles:    Instrument Serif (italic weight for cohort names)
UI / metadata / body:     Inter or DM Sans
Monospace (run feed):     JetBrains Mono — phase names, commands, source IDs
```

Two-tone card titles (from Prologue): cohort name in dark, access badge inline in `--accent-amber`.

---

## 4. Component Tree

```
src/components/
├── layout/
│   ├── RunFeed.tsx           ← left surface container
│   ├── OutputPanel.tsx       ← right surface container
│   └── QueryBar.tsx          ← bottom input bar
├── run/
│   ├── PipelineBlock.tsx     ← adaptive phase feed — grows as orchestrator spawns phases
│   ├── ThinkingSpinner.tsx   ← ✦ Triangulating... (18s)  [built]
│   ├── ClarificationGate.tsx ← pause-and-ask for tangential results
│   ├── PhaseLabel.tsx        ← ⟳ phase vcro-extract
│   ├── ResultBlock.tsx       ← ◎ collapsible completed phase
│   ├── ProgressFeed.tsx      ← SSE reader for progress.jsonl
│   └── RunSummary.tsx        ← collapsed state when run ends
├── cards/
│   ├── CardGradient.tsx      ← painting/gradient hero generator
│   ├── CardDeck.tsx          ← stacked ranked deck (Athos-style)
│   ├── CardExpanded.tsx      ← full-panel expanded view
│   ├── CohortCard.tsx        ← cohort sourcing results
│   ├── SignalCard.tsx        ← feasibility / proof-point results
│   ├── ProviderCard.tsx      ← platform comparison results
│   └── BountyCard.tsx        ← procurement / pricing results
├── session/
│   └── SessionHero.tsx       ← full-bleed gradient header in output panel
└── bounty/
    ├── BundleCard.tsx        ← one of three bundle configurations
    ├── CostStack.tsx         ← three-leg cost breakdown
    └── BountyContract.tsx    ← contract / action map display
```

---

## 5. Run Feed Components

### 5.1 PipelineBlock

Phases are not known in advance. The orchestrator decides which skills to invoke based on what the query requires — a pricing question skips extract/signal/rank, a bounty query adds broker and CRO tracks, a feasibility question might not need contacts. The UI reflects what has happened and what is currently happening, never a predetermined checklist.

```
  ✓ understanding your request
  ✓ searching literature
  ● extracting intelligence        ← filled amber dot = currently active
  → ADNI lipidomics: ether lipid decline replicated in ASPREE
  → Michigan ALS: AUC 0.94, strongest diagnostic signal found so far

```

Phases appear as they are initiated — not as a list that was known at the start. There is no total count ("2/9"). The user sees what's done, what's active, and what's been found. That's all.

**Props:**
```ts
interface PipelineBlockProps {
  phases: PipelinePhase[];  // append-only — grows as orchestrator spawns phases
  findings: string[];       // outcome-focused strings from progress.jsonl, interleaved
}

interface PipelinePhase {
  id: string;               // e.g. "vcro-cohort-map-extract"
  label: string;            // human label: "extracting intelligence"
  status: "running" | "complete";
  // "pending" is never shown — phases only appear once initiated
}
```

**Design:** JetBrains Mono, `--bg-feed`. Dot vocabulary: `✓` `●`. Findings (`→`) interleave between phase lines as they arrive from progress.jsonl. No phase list shown ahead of time. No total count. No "○ pending" entries.

---

### 5.2 ThinkingSpinner _(built)_

```
✦ Triangulating... (18s)
```

Four-pointed star glyph in `--glyph-active`, rotating verb, elapsed seconds. Elapsed time is mandatory UX — prevents "is it hung?" anxiety.

---

### 5.3 ClarificationGate

Run pauses here when tangential results are found. User must respond before pipeline continues.

```
CLARIFICATION

  Found 8 results adjacent to your query.
  Include in analysis?

  ◉ Yes — include and flag as tangential
  ○ No — exclude, continue with 22 core results
  ○ Show me first

                                      Continue →
```

**Props:**
```ts
interface ClarificationGateProps {
  tangentialCount: number;
  coreCount: number;
  onChoice: (choice: "include" | "exclude" | "preview") => void;
}
```

**Design:** Radio options with descriptions. The Continue button is disabled until a choice is made. This is the gate from vcro-os Phase 2.5 — the pre-formatted question from the validate subagent digest.

---

### 5.4 PhaseLabel

Single line showing which skill is running.

```
⟳  phase  vcro-extract
```

Connects via vertical pipe spine to the PipelineBlock above and ResultBlock below.

---

### 5.5 ResultBlock

Collapsible. Appears after a phase completes. Shows outcome + command run.

```
◎ cohort-map  12 extracted                              ∨
│
  Extracted intelligence from 12 papers.
  Top signal: ADNI shows 56% statin confounding
  in the metabolomics cohort.

  >_ python3 scripts/pmc_fetch.py --pmc_ids PMC12269576 ...
```

**Props:**
```ts
interface ResultBlockProps {
  phase: string;
  count?: number;
  summary: string;      // 2-3 sentence outcome-focused digest
  command?: string;     // script command if relevant
  defaultExpanded?: boolean;
}
```

---

### 5.6 ProgressFeed

Reads `progress.jsonl` via SSE and dispatches findings to PipelineBlock and ResultBlock in real time. Not a UI component itself — a hook.

```ts
function useProgressFeed(runId: string): {
  findings: ProgressEvent[];
  latestFinding: string;
}
```

Each event from progress.jsonl:
```json
{ "ts": "...", "phase": "extract", "event": "finding", "message": "ADNI lipidomics: ether lipid decline replicated in ASPREE" }
```

---

### 5.7 RunSummary

When the run ends, the left panel collapses to this. Still shows the run happened, what was found, link to the output.

```
RUN COMPLETE  ·  3m 42s

  Top cohorts: ADNI · WRAP · Michigan ALS
  23 papers screened · 12 relevant · 5 ranked

  → Full recommendation in the output panel
```

---

## 6. Output Panel Components

### 6.1 SessionHero

Full-bleed gradient at the top of the output panel. One per session. Stays fixed while cards assemble below.

The gradient encodes the query:
- Blood/plasma query → warm amber-ochre
- Neurological/CSF query → cool blue-gray
- FFPE/tissue query → deep forest green
- Multi-modal → layered, shifting

**Props:**
```ts
interface SessionHeroProps {
  indication: string;   // from request.json
  sampleType: string;   // drives gradient palette
  queryOneLiner: string;
}
```

**Design:** 280px tall, full-bleed. `filter: blur(0.5px) saturate(0.88)`. Gradient overlay fades top-to-bottom into `--bg-warm`.

---

### 6.2 CardGradient

The painting/gradient hero for each card. Generated programmatically — deterministic by `cohortId` so the same run always renders the same card the same way.

**Gradient encodes confidence:**
- High confidence (replicated, large N) → warm, saturated, clear
- Medium → standard treatment
- Tangential / uncertain → desaturated, near grayscale, heavy blur

**Gradient tone mapped to sample type:**
| Sample type | Gradient |
|---|---|
| Blood / plasma | Warm — amber, ochre, rust |
| Tissue / FFPE | Deep — forest green, dark umber |
| CSF / neurological | Cool — blue-gray, silver, slate |
| Urine / metabolic | Soft — sand, pale gold |
| Multi-modal | Abstract — layered, shifting |

**Props:**
```ts
interface CardGradientProps {
  cohortId: string;      // seed for deterministic generation
  sampleType: string;    // drives palette
  confidence: "high" | "medium" | "low" | "tangential";
  height?: number;
}
```

CSS technique:
```css
.card-hero {
  background-size: cover;
  background-position: center;
  transform: scale(1.05);
  filter: blur(1px) saturate(0.9);
}
.card-overlay {
  background: linear-gradient(180deg,
    transparent 0%,
    rgba(242, 239, 233, 0.0) 40%,
    rgba(242, 239, 233, 0.85) 80%,
    rgba(242, 239, 233, 1.0) 100%
  );
}
```

Note: overlay fades into `--bg-warm`, not into black — this is the Framer register, not the Notte dark.

---

### 6.3 CardDeck

The stacked ranked deck. Top-ranked cohort is front and center. Others stack behind with visible colored edges. Each edge color is the card's gradient dominant tone — its color identity.

**Props:**
```ts
interface CardDeckProps {
  cards: CardData[];         // ranked, top-first
  onCardClick: (id: string) => void;
  queryType: "cohort" | "signal" | "provider" | "bounty";
}
```

Clicking cycles through the deck. Card order is set by `ranking.json` — arrives only after Phase 7 (rank) completes. Before that, cards appear in extraction order and reorder when ranking arrives.

---

### 6.4 CohortCard

For cohort sourcing queries. Data from: `ranking.json` + `extracted_cohorts.json` + `access_summary.json`.

```
┌─────────────────────────────────────────┐
│  [CardGradient hero — ~40% card height] │
│                                         │
├─────────────────────────────────────────┤
│  ADNI                    [OPEN ACCESS]  │
│  USC · USA · Est. 2004                  │
├─────────────────────────────────────────┤
│  "AD dementia converters show a 3–4.8%  │
│   reduction in ether lipid species"     │
│  — PMC12269576                          │
├─────────────────────────────────────────┤
│  N=985  ·  Longitudinal  ·  LC-MS  ·  Free  │
└─────────────────────────────────────────┘
```

**Props:**
```ts
interface CohortCardProps {
  rank: number;
  cohortName: string;
  institution: string;
  country: string;
  accessRoute: "open_portal" | "pi_dependent" | "consortium_controlled" | "commercial_biobank" | "unknown";
  evidenceQuote: string;
  paperId: string;           // PMC / PMID for quote attribution
  usableN: number;
  design: string;            // "Longitudinal" | "Cross-sectional"
  modality: string;          // "LC-MS" | "NMR" | "Targeted panel"
  estimatedCost: string;     // "Free" | "€8–25/sample" | "Quote required"
  sampleType: string;
  confidence: "high" | "medium" | "low" | "tangential";
  onClick: () => void;
}
```

**Card reveal sequence** (assembles as pipeline runs):
1. `CardGradient` + cohort name appear first (after extraction)
2. Institution strip populates (after extraction)
3. Evidence quote fades in (after signal phase)
4. Stat footer fills in last (after rank + access phases)

---

### 6.5 SignalCard

For feasibility / proof-point queries. Data from `signal_summary.json`.

Shows: what was found, performance metric (AUC, effect size), replication status, key negative results.

**Props:**
```ts
interface SignalCardProps {
  finding: string;
  sourceQuote: string;
  paperId: string;
  metric: string;            // "AUC 0.83 at baseline"
  replicationStatus: "replicated" | "single_cohort" | "failed_replication";
  replicatedIn?: string;     // cohort name if replicated
  implication: string;       // "which means for your project..."
  negativeResults: string[]; // what NOT to pursue
  onClick: () => void;
}
```

---

### 6.6 ProviderCard

For platform comparison queries. Data from `provider_intelligence.json`.

Shows: platform name, adoption data, top cohorts using it, cost tier, fit for this request.

**Props:**
```ts
interface ProviderCardProps {
  platformName: string;
  adoptionNote: string;       // "Used in 3 of top 5 ADNI lipidomics papers"
  costTier: "free" | "low" | "mid" | "high" | "quote-only";
  topCohortsUsing: string[];
  sampleType: string;
  fit: "exact" | "compatible" | "marginal";
  onClick: () => void;
}
```

Note: ISOSpec is excluded per CLAUDE.md critical rule 8.

---

### 6.7 BountyCard

For procurement / pricing queries. Data from `bundle_candidates.json`.

Shows: three-leg pipeline plan (source → screen/QA → assay), total known cost, timeline, bundle label.

**Props:**
```ts
interface BountyCardProps {
  bundleLabel: "max_coverage" | "fastest" | "cheapest_bypass";
  leg1: { provider: string; n: number; cost: string; timeline: string; accessRoute: string };
  leg2: { provider: string; services: string; cost: string };
  leg3: { platform: string; cost: string; timeline: string };
  totalKnown: string;
  unknownComponents: string[];
  recommended: boolean;
  onClick: () => void;
}
```

---

### 6.8 CardExpanded

Full-panel expanded view. Triggered by clicking any card. Back arrow returns to deck.

```
┌────────────────────────────────────────────────────────────┐
│  ← Back to results                                         │
│                                                            │
│  [CardGradient — scales up, less blur, more visible]       │
│                                                            │
│  ADNI Cohort  ·  Open Access   (Instrument Serif, large)   │
│  University of Southern California · USA · Est. 2004       │
│                                                            │
│  ┌────────────────────────┬───────────────────────────┐    │
│  │ Metadata               │ Signal narrative           │    │
│  │                        │                            │    │
│  │ N (total): 2,396       │ "Ether lipid species show  │    │
│  │ N (usable): 985        │  a 3–4.8% reduction in    │    │
│  │ Design: Longitudinal   │  AD converters..."         │    │
│  │ Sample: Plasma (EDTA)  │                            │    │
│  │ Modality: LC-MS        │ AUC 0.83 at baseline →     │    │
│  │ Institution: USC/UCLA  │ 0.91 at 24 months          │    │
│  │ PI: Peter Meikle       │                            │    │
│  │ Portal: ida.loni.usc.  │ Replicated in ASPREE ✓     │    │
│  │ DUA: required          │                            │    │
│  │ Commercial: yes        │ Negative: acylcarnitines   │    │
│  │ Timeline: 2–4 weeks    │ failed FDR correction      │    │
│  │ Cost: Free             │                            │    │
│  └────────────────────────┴───────────────────────────┘    │
│                                                            │
│  [Longitudinal] [LC-MS Lipidomics] [Statin Confounding]    │  ← dark pills
│  [Open Access] [Replicated]                                │
│                                                            │
│  N=985  ·  4 papers  ·  Open access  ·  2–4 weeks         │  ← stat strip
└────────────────────────────────────────────────────────────┘
```

**Two-column layout inside:**
- Left: structured metadata (from `extracted_cohorts.json` + `access_summary.json` + `contacts.json`)
- Right: signal narrative (from `signal_summary.json`)

**Intelligence dimension tags:** dark pills at bottom from `extracted_cohorts.json` intelligence_dimensions

---

## 7. Card Type Resolution

The right panel renders different card types based on the query. Resolved from `endpoint_schema.json`.

```ts
type QueryType = "cohort" | "feasibility" | "provider" | "bounty";

function resolveCardType(schema: EndpointSchema): QueryType {
  const axes = schema.decision_axes.map(a => a.param);
  if (axes.includes("question") && schema.resolution.question?.values?.includes("sourcing")) return "cohort";
  if (axes.includes("question") && schema.resolution.question?.values?.includes("proof_points")) return "feasibility";
  if (schema.run_id.includes("provider") || schema.run_id.includes("platform")) return "provider";
  if (schema.run_id.includes("bounty")) return "bounty";
  return "cohort"; // default
}
```

| Query type | Card rendered |
|---|---|
| Cohort sourcing | CohortCard |
| Feasibility / proof-points | SignalCard |
| Platform comparison | ProviderCard |
| Pricing / procurement | BountyCard |

---

## 8. Data Flow: Pipeline Phase → UI

| Phase completes | What appears in UI |
|---|---|
| vcro-understand | SessionHero populates (indication + query one-liner) |
| vcro-cohort-map (search) | PipelineBlock updates. First finding in RunFeed via progress.jsonl |
| vcro-validate | ClarificationGate appears if tangential results found |
| pmc_fetch | PhaseLabel shows "Fetching papers" |
| vcro-cohort-map (extract, per batch) | CohortCard heroes + names appear in output panel, one per extracted cohort |
| vcro-signal | Evidence quotes populate on each card |
| vcro-access | Access badges, timeline, cost populate on each card |
| vcro-rank | Cards reorder to ranked sequence. CardDeck stacks. Stat footer fills in. |
| vcro-deliver | RunSummary replaces live RunFeed on left. Full expanded card content available. |

Cards are always present from the moment of extraction. Data arrives on top progressively — the card is never "loading", it assembles.

---

## 9. Bounty Mode UI

Triggered when the query contains a budget figure and desired outcome.

### Left surface (RunFeed)
Same PipelineBlock — adaptive. Phases appear as the bounty orchestrator spawns them. A fast feasibility check that fails early might only produce two phase lines. A full three-leg procurement plan produces more. The UI never predicts what's coming.

```
  ✓ understanding your bounty
  ✓ checking feasibility
  ● discovering sources

  → Lifelines: 150 plasma samples, EUR 3.70–28/sample, volume discount at 500+
  → BioIVT supplies from Michigan ALS clinic — direct bypass possible
```

### Right surface (OutputPanel)
Instead of CardDeck, renders BountyContract view:
- Three BundleCards (max_coverage / fastest / cheapest_bypass)
- CostStack breakdown per bundle
- Recommended bundle highlighted
- Phase 4 user gate blocks progression visually — the "Confirm this bundle" CTA

### BountyContract view (after user confirms)
- Three-leg pipeline plan with status per leg
- Action map items per source (Tier 1 compute / Tier 2 angle / Tier 3 link)
- Draft outreach angles expandable per PI
- Log of actions executed (if authority_level = "execute")

---

## 10. Micro-interactions

- **Card appear:** `opacity 0→1, translateY 8px→0` over 300ms, staggered 80ms per card
- **Card hover:** gradient brightens slightly, border becomes slightly more visible
- **Card expand:** scales up + panel crossfades, 250ms cubic-bezier
- **Gradient on confidence change:** filter transition over 400ms when confidence is reassessed
- **Phase complete:** `✓` fades in with brief green flash, settles to `--glyph-complete`
- **CardDeck reorder (rank arrives):** cards animate to new positions over 400ms
- **ThinkingSpinner:** pulse scale 0.95↔1.05 at 600ms

---

## 11. QueryBar

Always visible. Fixed at bottom. The entry point for both Intelligence Query and Bounty Mode.

```
┌──────────────────────────────────────────────────────┬───────┐
│  What cohorts exist for ALS plasma metabolomics?     │ Run ↗ │
└──────────────────────────────────────────────────────┴───────┘
```

Placeholder rotates between:
- "What cohorts exist for [indication] [modality]?"
- "How much would [N] [sample type] samples cost?"
- "I have €[budget] and need [N] [sample] samples for [outcome]"

Bounty mode is auto-detected when the message contains a budget figure + scientific outcome. No mode toggle needed.

---

## 12. EmptyState

Shown when no messages. Three clickable prompt chips:

```
┌──────────────────────┐  ┌──────────────────────┐  ┌──────────────────────┐
│  Cohort Intelligence │  │  Pricing Estimate     │  │  Procurement Bounty  │
│                      │  │                       │  │                      │
│  "What cohorts exist │  │  "How much would 200  │  │  "I have €50K and    │
│  for AD plasma       │  │   plasma samples cost  │  │   need 150 FFPE      │
│  metabolomics?"      │  │   for metabolomics?"   │  │   samples for..."    │
└──────────────────────┘  └──────────────────────┘  └──────────────────────┘
```

Each chip sets the QueryBar input on click and focuses.

---

## 13. Sidebar

Run history. Fetches `GET /api/runs` on mount.

Each run entry:
- Run ID (date_slug format)
- One-liner from `endpoint_schema.json`
- Status badge: running / complete / crashed
- Click → loads that run's output into the right panel

---

## 14. What This Is Not

- Not a generic chat UI with tool call logs
- Not a dashboard with charts and tables
- Not a report that appears all at once at the end
- Not neo-brutalism — no thick black borders, no box-shadow offsets
- Not dark throughout — the right panel is warm and light

The right panel is a gallery. The left panel is a terminal. They are two moods in one layout.

---

## 15. Files This PRD Drives

Implementation files (to be built on webapp/v0 after merge):

```
src/
├── app/
│   ├── globals.css         ← color tokens, typography, no neo-brutalism
│   ├── layout.tsx          ← Instrument Serif + Inter from Google Fonts
│   └── page.tsx            ← RunFeed + OutputPanel split
├── components/
│   ├── layout/
│   │   ├── RunFeed.tsx
│   │   ├── OutputPanel.tsx
│   │   └── QueryBar.tsx
│   ├── run/
│   │   ├── PipelineBlock.tsx
│   │   ├── ThinkingSpinner.tsx   [built]
│   │   ├── ClarificationGate.tsx
│   │   ├── PhaseLabel.tsx
│   │   ├── ResultBlock.tsx
│   │   ├── ProgressFeed.tsx      [hook, not component]
│   │   └── RunSummary.tsx
│   ├── cards/
│   │   ├── CardGradient.tsx
│   │   ├── CardDeck.tsx
│   │   ├── CardExpanded.tsx
│   │   ├── CohortCard.tsx
│   │   ├── SignalCard.tsx
│   │   ├── ProviderCard.tsx
│   │   └── BountyCard.tsx
│   ├── session/
│   │   └── SessionHero.tsx
│   └── bounty/
│       ├── BundleCard.tsx
│       ├── CostStack.tsx
│       └── BountyContract.tsx
└── lib/
    └── layout/
        ├── resolveCards.ts     ← reads endpoint_schema, picks card type
        └── resolveGradient.ts  ← maps sample type + cohort ID → gradient params
```
