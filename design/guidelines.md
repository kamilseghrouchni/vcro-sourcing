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

### Paintings / gradients as card heroes

Every result card has a full-bleed image as its hero. Not a photo, not an illustration — an **abstract gradient field** or a **painterly nature image**. The image is atmosphere, not content.

Technique (from ara.so, confirmed by Galilee's glassmorphic cards):
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
    rgba(10, 10, 12, 0.6) 55%,
    rgba(10, 10, 12, 0.88) 100%
  );
}
```

**The gradient encodes confidence (from our concept work):**
- High confidence, large N, replicated → warm, saturated, clear
- Medium confidence → standard treatment
- Tangential / uncertain → desaturated, near grayscale, heavy blur

**Gradient tone mapped to sample type:**
| Sample type | Gradient direction |
|---|---|
| Blood / plasma | Warm — amber, ochre, rust |
| Tissue / FFPE | Deep — forest green, dark umber |
| CSF / neurological | Cool — blue-gray, silver, slate |
| Urine / metabolic | Soft — sand, pale gold |
| Multi-modal | Abstract — layered, shifting |

Gradients are generated programmatically from the sample type and cohort ID — same run always renders the same card the same way. Stable identity.

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

Two registers, used by two surfaces:

### Output panel (right) — warm light register
```
Background:     #F7F4EF  (warm off-white, not pure white)
Surface:        #EFEAE2  (slightly deeper warm)
Text primary:   #1A1814
Text secondary: #6B6560
Text faint:     #A09890
Border:         rgba(26, 24, 20, 0.08)
Accent warm:    #C4763A  (amber — access routes, open data)
Accent cool:    #4A7FA5  (steel blue — platform/provider cards)
Stat positive:  #4A7A4A  (muted green — up arrows, confirmed)
```

### Run feed (left) — dark terminal register
```
Background:     #0F0F11
Surface:        #161618
Text primary:   #E8E6E0
Text secondary: #888680
Text faint:     #555350
Border:         rgba(232, 230, 224, 0.08)
Active glyph:   #D4955A  (warm amber — the ✦ glyph when thinking)
Phase complete: #6A9A6A  (muted green — ✓ checkmarks)
Phase active:   #D4955A  (warm amber — ● filled dot)
Phase pending:  #555350  (gray — ○ hollow dot)
```

### What we are NOT doing
- Not Notte's cyan blue for active states
- Not ara.so's exact gold `#e8b84b`
- Not Prologue's bright orange
- Not pure black or pure white backgrounds
- No HuggingFace yellow

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
│   │   ├── CardGradient.tsx        ← the painting/gradient hero
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
│       └── SessionHero.tsx         ← full-bleed gradient header in output panel
├── lib/
│   └── layout/
│       ├── resolveCards.ts         ← reads endpoint_schema, picks card types
│       └── resolveGradient.ts      ← maps sample type + PMID → gradient params
```

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
