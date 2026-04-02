# vCRO UI Design Guidelines

_Drawn from: Notte Labs, ara.so, Athos, Galilee, Anastasis, Prologue, HuggingFace, OpenDataBay, Pretext_
_Rule: history rhymes, it does not repeat. No direct copying of colors, icons, or wording._

---

## 1. The Core Concept

vCRO is two surfaces in one interface.

**Left — the run feed.** The agent working. Pipeline phases, thinking indicators, plan steps completing, inline findings, clarification questions. This surface is alive while the run is happening, then collapses to a summary when it ends. Dark register. Terminal energy.

**Right — the output panel.** Cards assembling as the pipeline produces results. This is the deliverable. Warm register. Gallery energy. When the run ends this is what stays — what the user reads, shares, sends to Notion.

Two moods. One layout.

---

## 2. Visual Identity

### The mood
Warm, precise, editorial. Not a dashboard. Not a chat window. Closer to a research dossier that assembles itself in front of you. Scientific but not clinical. Data-driven but not cold.

### What it is not
Not Notte (pure developer terminal). Not HuggingFace (dense catalog). Not a generic SaaS landing page. It's a research tool for life scientists — it should feel like something between a museum and a lab notebook.

---

## 3. The Card System

### ZelijHero — the card hero technique

Every result card has a **zelij-aquarelle hero**: a sharp Islamic khatem (8-pointed star) geometric lattice overlaid on a soft watercolor wash. Fully programmatic SVG — no images, no external API.

**Reference prototype:** `/tmp/zelij-final.html`
**What zelij-test.html got right (keep exactly):**
- Khatem pattern: `<polygon>` (octagon) + `<rect rotate(45)>` as SVG `<pattern>`, white stroke at `opacity: 0.15`. Sharp, crisp, geometric.
- Aquarelle wash: 3–4 `<ellipse>` elements behind the pattern, rendered through a blur filter.
- Bottom fade: `linearGradient` from transparent → `--bg-warm`.

**The one improvement in zelij-final.html:**
```svg
<!-- Old (zelij-test): just blur — smooth perfect circles -->
<filter id="f"><feGaussianBlur stdDeviation="14"/></filter>

<!-- New (zelij-final): displace THEN blur — organic, paint-like blobs -->
<filter id="f" x="-20%" y="-20%" width="140%" height="140%">
  <feTurbulence type="turbulence" baseFrequency="0.009 0.007" numOctaves="5" seed="{n}" result="noise"/>
  <feDisplacementMap in="SourceGraphic" in2="noise" scale="22" xChannelSelector="R" yChannelSelector="G" result="disp"/>
  <feGaussianBlur in="disp" stdDeviation="13"/>
</filter>
```

**Confidence encoding — hue stays teal, saturation changes:**
| Confidence | Filter treatment |
|---|---|
| High — large N, replicated | `saturate: 1.0`, blur `stdDeviation="13"` |
| Medium | `saturate: 0.85`, blur `stdDeviation="15"` |
| Low | `saturate: 0.55`, blur `stdDeviation="18"` |
| Tangential | `saturate: 0.14`, blur `stdDeviation="22"`, lattice `opacity: 0.10` |

**Hue stays in the brand teal family across all sample types** — this is deliberate. The zelij is a unifying visual, not a per-type differentiation signal. Confidence differentiation is done through saturation + blur depth, not hue shifts.

**Programmatic parameters (`resolveZelij.ts`):**
```ts
interface ZelijParams {
  ellipses: Array<{ cx,cy,rx,ry: number; hsl: [number,number,number]; opacity: number }>
  filterSeed: number      // deterministic from cohortId hash
  displacementScale: number  // 18–24 based on confidence
  blurStdDev: number         // 13–22 based on confidence
  patternRotation: 0|15|30|45  // rotates the khatem grid, from cohortId hash
  latticeOpacity: number     // 0.10–0.15 based on confidence
}
```

**Usage:**
```tsx
<ZelijHero
  cohortId="PMC12269576"
  confidence="high"
  height={160}       // card hero: 160px (40% of 400px card)
  fadeInto="--bg-warm"
/>

<ZelijHero
  cohortId={runId}
  confidence="high"
  height={280}       // session hero: 280px
  fullBleed
  fadeInto="--bg-warm"
/>
```

### Card anatomy

Inspired by Anastasis's case study card + Athos's metadata split + HuggingFace's metadata density:

```
┌─────────────────────────────────────────┐
│  [gradient/painting hero]               │
│                                         │  ← ~40% of card height
│                                         │
├─────────────────────────────────────────┤
│  COHORT NAME          [ACCESS BADGE]    │
│  Institution · Country · Est. year      │  ← metadata strip
├─────────────────────────────────────────┤
│  Evidence quote in italic               │  ← key finding
│  — Source (PMID / PMC / NCT)            │
├─────────────────────────────────────────┤
│  N=412  ·  Longitudinal  ·  LC-MS  ·  Open  │  ← stat footer
└─────────────────────────────────────────┘
```

The `·` separator (from HuggingFace) between stats. Never commas, never slashes.

### Card reveal sequence

Cards don't appear fully formed. They assemble:
1. Gradient hero + name appear first
2. Metadata strip populates
3. Evidence quote fades in
4. Stat footer fills in last

This happens naturally as the extract phase runs — the card is always present, the data arrives on top.

### The ranked deck

From Athos: top-ranked cohort is front, others stack behind with visible colored edges. The edges use the gradient's dominant color — each card's stack edge is its color identity. The user sees 5 colored edges and one full card. Clicking cycles through.

### Expanded card

When clicked open in the side panel:
- Gradient scales up, less blur, more visible — it breathes
- Two-column layout inside (from Athos screenshot 4):
  - Left: structured metadata (N, sample type, design, institution, PI, access route, timeline, cost)
  - Right: signal narrative (what was found, effect sizes, what failed, replication status)
- Intelligence dimension tags as dark pills at the bottom (from Athos): `Longitudinal` `Statin Confounding` `Open Access` `Fasting Status`
- Large stat strip at very bottom: `N=412` · `4 papers` · `Open access` · `48h response`

---

## 4. The Run Feed (Left Surface)

### Phase block

Inspired by Notte's PLAN block, in vCRO's own vocabulary:

```
PIPELINE  2 / 9  ·  running

  ● vcro-cohort-map          ← filled = active
  ✓ vcro-understand          ← check = complete
  ○ vcro-validate            ← hollow = pending
  ○ vcro-signal
  ...

  Findings so far:
  → 47 papers found across PubMed + EPMC
  → 12 contain longitudinal blood metabolomics
```

Findings appear inline under the completed phase — not in a separate section. The run IS the content.

### Thinking indicator

```
✦ Triangulating... (18s)
```

Four-pointed star glyph (from Prologue's logo) + rotating verb + elapsed seconds. The elapsed time is critical UX — the user knows it's not hung.

### Clarification gate

When tangential results are found, the run pauses:

```
CLARIFICATION

  Found 8 results adjacent to your query.
  Include in analysis?

  ◉ Yes — include and flag as tangential
  ○ No — exclude, continue with 22 core results
  ○ Show me first

                                    Continue →
```

From Notte's QUESTION block, in vCRO's own wording. Radio options with descriptions. The run does not proceed until answered.

### Phase label

```
⟳  phase  vcro-extract
```

Single line showing which skill is running. Connects to phase block above and result below via a vertical line.

### Result block

```
◎ cohort-map  12 extracted                    ∨
│
  Extracted intelligence from 12 papers.
  Top signal: ADNI shows 56% statin confounding
  in the metabolomics cohort.

  >_  python3 scripts/pmc_fetch.py --pmc_ids ...
```

Collapsible. `◎` for completed phase. Chevron on right. Prose + inline command shown. Vertical pipe connects to next phase.

---

## 5. Typography

**Display / card titles:** Serif — something with weight and character. GT Walsheim, Instrument Serif (italic), or similar. Used for cohort names, section headers in expanded cards.

**UI / metadata / body:** Clean geometric sans — Inter, DM Sans. Everything functional.

**Monospace:** Run feed only — phase names, commands, source IDs, evidence quotes. JetBrains Mono or similar.

**Two-tone headlines (from Prologue):**
Key descriptor in accent color inline with the title:
`ADNI Cohort  ·  Open Access` — where "Open Access" is in the warm accent.

---

## 6. Color System

### Brand palette — sourced from `real-tiles/main-colors.png`

The brand color is **cyan-teal** — hsl(185, 100%, 35%). Every interactive element, zelij card hero, and accent in the UI draws from this family. Extracted from the real zelij watercolor tile reference images.

```
--brand-primary:    #00a5b4   hsl(185,100%,35%)   deep teal — CTAs, active states, links
--brand-mid:        #00b4c3   hsl(185,100%,38%)   mid teal — hover states
--brand-vivid:      #00d2e1   hsl(184,100%,44%)   bright cyan — highlights, badges
--brand-light:      #87e1f0   hsl(189, 78%,74%)   sky — light backgrounds, tints
--brand-pale:       #a5e1f0   hsl(192, 71%,79%)   pale wash — very subtle tints
--brand-faint:      #c3f0f0   hsl(180, 60%,85%)   near-white teal — hairlines, dividers
```

### Surfaces

```
--bg-warm:          #F2EFE9   output panel background (warm off-white)
--bg-feed:          #E4DFD8   run feed background (muted warm)
--bg-surface:       #ECEAE4   card surface inside output panel
```

### Text

```
--text-primary:     #1A1814   main body text
--text-secondary:   #6B6560   metadata, secondary labels
--text-faint:       #A09890   placeholders, disabled
```

### Accents

```
--glyph-active:     #B86E32   amber — thinking glyph ✦, active phase dot, open access badge
--accent-confirm:   #4A7A4A   muted green — ✓ phase complete, confirmed replication
--border:           rgba(26,24,20,0.08)
```

### Run feed — dark terminal

```
--feed-bg:          #0F0F11
--feed-surface:     #161618
--feed-text:        #E8E6E0
--feed-secondary:   #888680
--feed-faint:       #555350
--feed-border:      rgba(232,230,224,0.08)
```

### What we are NOT doing
- Not using the brand teal for backgrounds — it lives in the zelij hero and interactive elements only
- Not ara.so's gold `#e8b84b`
- Not pure black or pure white backgrounds
- The warm surface (`#F2EFE9`) and the brand teal (`#00a5b4`) never appear simultaneously at large scale — they are on different surfaces

---

## 7. Layout

```
┌────────────────┬──────────────────────────────────┐
│                │                                  │
│   Run Feed     │      Output Panel                │
│   (dark)       │      (warm light)                │
│                │                                  │
│   ~38%         │      ~62%                        │
│                │                                  │
│                │   [session hero — full gradient] │
│                │                                  │
│                │   [card deck]                    │
│                │   [card deck]                    │
│                │   [card deck]                    │
│                │                                  │
├────────────────┴──────────────────────────────────┤
│  Query input                           [Run ↗]    │
└───────────────────────────────────────────────────┘
```

- Left: run feed, collapses to summary when done
- Right: output panel, persists — this is the deliverable
- Bottom: always-visible query input bar
- Right panel has its own scroll
- When a card is clicked → it expands to fill the right panel, with a back arrow to return to the deck

---

## 8. Micro-interactions

From across all templates:

- **Card appear:** `opacity 0→1, translateY 8px→0` over 300ms, staggered by 80ms per card
- **Card hover:** gradient brightens slightly, border becomes slightly more visible
- **Expand:** card scales up + panel crossfades, 250ms cubic-bezier
- **Thinking glyph:** pulse animation, scale 0.95↔1.05 at 600ms
- **Phase complete:** `✓` fades in with a brief green flash, then settles to muted green
- **Gradient on confidence change:** filter transition over 400ms when a paper's confidence is reassessed

---

## 9. Component File Structure

```
src/
├── components/
│   ├── cards/
│   │   ├── CohortCard.tsx          ← cohort sourcing results
│   │   ├── SignalCard.tsx          ← feasibility / proof-point results
│   │   ├── ProviderCard.tsx        ← platform comparison results
│   │   ├── BountyCard.tsx          ← pricing / access results
│   │   ├── ZelijHero.tsx           ← zelij-aquarelle SVG hero (replaces CardGradient)
│   │   ├── CardDeck.tsx            ← stacked ranked deck
│   │   └── CardExpanded.tsx        ← full-panel expanded view
│   ├── run/
│   │   ├── PipelineBlock.tsx       ← PIPELINE 2/9 · running
│   │   ├── ThinkingSpinner.tsx     ← ✦ Triangulating... (18s)
│   │   ├── ClarificationGate.tsx  ← pause-and-ask block
│   │   ├── PhaseLabel.tsx          ← ⟳ phase vcro-extract
│   │   └── ResultBlock.tsx         ← ◎ result collapsible
│   ├── layout/
│   │   ├── RunFeed.tsx             ← left surface
│   │   ├── OutputPanel.tsx         ← right surface
│   │   └── QueryBar.tsx            ← bottom input
│   └── session/
│       └── SessionHero.tsx         ← uses ZelijHero at height=280, fullBleed
├── lib/
│   └── layout/
│       ├── resolveCards.ts         ← reads endpoint_schema, picks card types
│       └── resolveZelij.ts         ← maps cohortId + confidence → ZelijParams
```

---

## 12. UI Build Instructions

### What to build, in order

**Phase 1 — Shell (no data)**
1. `RunFeed` left surface at `--bg-feed` (#E4DFD8), `OutputPanel` right at `--bg-warm` (#F2EFE9)
2. `QueryBar` pinned to bottom, full width
3. `ThinkingSpinner` (already built) — verify it uses `--glyph-active: #B86E32`
4. Static `PipelineBlock` with hardcoded phases — no data needed, just the layout

**Phase 2 — ZelijHero + cards (fixture data)**
1. Build `resolveZelij.ts` — pure function, no DOM. Input: `cohortId`, `confidence`. Output: `ZelijParams`.
   - `filterSeed` = sum of char codes of `cohortId` mod 97
   - `patternRotation` = `[0,15,30,45][seed % 4]`
   - Ellipse positions from seed (4–5 ellipses, hsl from `--brand-primary` family)
2. Build `ZelijHero.tsx` — SVG component. Exact structure from `/tmp/zelij-final.html`. No clipPath. Three layers: blurred wash → khatem pattern → fade gradient.
3. Wire into `CohortCard` at `height={160}`, `SessionHero` at `height={280}`
4. Test with fixture run IDs: `fixture_cohort`, `fixture_bounty`

**Phase 3 — Run feed live (SSE)**
1. `GET /api/runs/[runId]/progress` SSE route
2. `PipelineBlock` subscribes — phases append as events arrive
3. `ClarificationGate` blocks on `type: clarification` events

**Phase 4 — Data wiring**
1. Connect `CohortCard` to real `extracted_cohorts.json` via `store_query.py`
2. Wire confidence from `signal_summary.json` → `ZelijHero` confidence prop
3. `CardDeck` stacking with colored edges (edge color = `--brand-vivid` at varying opacity per rank)

### Key constraints to hold
- `ZelijHero` SVG must be `overflow: hidden` — the khatem pattern tiles beyond card edges
- The zelij lattice `<pattern>` must be defined in `<defs>` — do not inline per card
- `resolveZelij` must be deterministic: same `cohortId` always produces same visual
- Never use `Math.random()` in `resolveZelij` — use the hash-based seed only
- The brand teal never appears as a large background — only in the zelij wash, interactive elements, and small accent chips

---

## 10. Inspirations Reference

| Source | What we drew from |
|---|---|
| **ara.so** | Painting-as-background technique, frosted glass nav, entrance animations, serif + sans pairing |
| **Notte Labs** | Pipeline-as-UI structure, phase blocks, dot vocabulary, thinking line with elapsed time, clarification gate, collapsible result blocks, vertical pipe spine |
| **Galilee** | Glassmorphic cards floating over landscape, nature imagery as atmosphere, metric cards |
| **Anastasis** | Abstract gradient as the "painting", two-column case study card, soft sculptural 3D objects as heroes |
| **Prologue** | Four-pointed star accent, two-tone headlines, vertical left nav, warm gradient full-bleed sections, floating detail card overlay |
| **Athos** | Stacked card deck with colored peeks, metadata left / narrative right split, dark pill tags, large stat numbers |
| **HuggingFace** | Card metadata density, `·` separators, status badges, compact scannability |
| **OpenDataBay** | Provider identity on cards, trust signals, category tags as post-run filters |
| **Pretext** | Text measurement engine — use surgically for 3 specific moments (see §11) |

---

## 11. Pretext — Surgical Use Only

**What it is:** A text measurement and line-breaking engine (`npm install @chenglou/pretext`). Calculates exactly how multiline text wraps and flows around obstacles without DOM reflows. Zero runtime dependencies. 29.9k stars.

**What it is not:** A UI library, a component kit, or a CSS replacement. It gives you line positions and widths — you still render everything yourself.

**Status:** Version 0.0.3, commits as recent as March 2026. Actively maintained but not yet battle-tested in production at scale. API may change. Do not build the core UI on it.

**Rule:** Use CSS for everything. Reach for Pretext only for these three specific moments, in phase 2 after the core layout is stable:

### Moment 1 — Inline evidence quote chips
When a quote has inline `[PMID 38291847]` `[PMC12269576]` source badges mid-sentence, CSS wrapping is unpredictable — chips can orphan or break awkwardly. Pretext calculates exact line breaks to keep chips intact. Use `layoutWithLines()` + absolutely positioned chip spans.

### Moment 2 — The ASCII/particle loading state
The Variable Typographic ASCII demo: a particle field that spells out the current phase name (`EXTRACTING`, `SEARCHING`, `RANKING`) with variable-weight glyphs. This is vCRO's signature loading moment. No CSS animation can replicate it. Canvas-rendered, driven by Pretext's glyph measurements.

### Moment 3 — Display headline routing in expanded cards
When a card is fully expanded, the cohort name as a large serif headline routes around the gradient thumbnail image — text flows around the obstacle. Pretext's `layoutNextLine()` with variable widths per line handles this. CSS `shape-outside` is an alternative but less precise.

**Integration pattern:**
```ts
// Phase 2 only — don't block the scaffold on this
import { prepareWithSegments, layoutWithLines } from '@chenglou/pretext'

const prepared = prepareWithSegments(evidenceQuote, '16px "Inter"')
const { lines } = layoutWithLines(prepared, containerWidth, 24)
// render lines with chip spans positioned per line
```
