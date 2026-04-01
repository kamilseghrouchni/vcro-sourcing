# vCRO UI Design Concepts

## Paintings as Card Identity & Confidence Signal

Each result card (cohort, signal, provider) uses a painting as its background hero. The painting does semantic work, not just decorative work.

### The technique (from ara.so)
```css
background-size: cover;
transform: scale(1.08);
filter: blur(2px) saturate(0.85);
background: linear-gradient(180deg, transparent 0%, #111318c2 60%, #0d0f14d1 100%);
```
Painting shows through at the top, fades into dark at the bottom where text sits.

### Painting blur/saturation = epistemic confidence
- High confidence (replicated, large N, multiple papers) → clearer, more saturated
- Medium confidence (single study, moderate N) → standard blur + desaturate
- Tangential / uncertain → heavy blur, near grayscale, painting almost disappears

The user reads confidence before they read the text.

### Painting tone mapped to sample type
| Signal | Painting direction |
|---|---|
| Blood / plasma | Warm — reds, ochres, skin tones |
| Tissue / FFPE | Deep — forest greens, dark browns |
| CSF / neurological | Cool — blue-grays, silver |
| Large N (>500) | High contrast, bold composition |
| Small pilot study | Soft, impressionistic, less defined |
| Longitudinal design | Paintings with depth, perspective, time |
| Cross-sectional | Flatter, portraiture |

### Session hero
The right panel gets a full-bleed painting at the top as a chapter opener for the whole query session. Stays constant while cards populate below it.

### Card reveal sequence
1. Card appears with painting + title only
2. Intelligence dimensions populate one by one as extracted
3. Metadata line fills in (N, design, sample type, access)
4. Evidence quote appears at bottom with source badge

### Expanded card state
When clicked open: painting scales up, less blur, more visible. Gradient pulls back from top. Feels like opening a file in a gallery.

### Selection logic
Deterministic by cohort ID / PMID — same run always renders same painting per cohort. Stable identity across sessions.

### Mental model
The right panel is a gallery. Each card is a work on the wall with a painting, a label, and a dossier behind it. Ranking phase reorders the gallery. Tangential results are dimmed.

---

## Layout — Two Surfaces

**Left — run feed:** chat input, pipeline steps, thinking indicators, PLAN block, agent reasoning. Ephemeral. Collapses to summary when run ends.

**Right panel — output surface:** cards appear as pipeline produces them, not at the end. Interactive — click to expand, click source quote to see paper section, cards reorder when rank phase completes. This IS the deliverable. When run ends, user hits "Send to Notion".

## Adaptive Card Types

Card type is determined by query's `decision_axes` and `question` parameter from `endpoint_schema.json`:

| Query type | Card rendered |
|---|---|
| Cohort sourcing | CohortCard — N, sample type, design, PI, access |
| Feasibility | SignalCard — what worked, what failed, replicated or not |
| Platform comparison | ProviderCard — platform vs platform, adoption, cost |
| Pricing | BountyCard — what to get, from where, timeline, cost |

## Inspirations Collected

- **ara.so** — paintings as card backgrounds, frosted glass nav, entrance animations, Instrument Serif + Inter type pairing
- **Notte Labs** — pipeline-as-UI (PLAN block, dot vocabulary, vertical pipe spine, QUESTION gate, thinking line with elapsed time, collapsible result blocks, live browser side panel)
- **HuggingFace datasets** — card metadata density, `•` separators, status badges, relative timestamps, compact scannability
- **OpenDataBay** — provider identity on cards, trust signals, category tags as post-run filters
