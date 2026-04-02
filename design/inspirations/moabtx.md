---
source: https://www.moabtx.bio/
category: visual_identity
relevance: card_hero, geometry, color_treatment
---

# Moab Therapeutics — Design Inspiration

## What it is

Biotech company site with a distinctive crystal/shard cluster motif as the hero treatment.
The geometry is editorial and bold — not a background element, but the subject.

## Key visual patterns

### Mixed cell treatment
The defining technique: geometric polygon cells where some are filled with photography
and others with flat solid color. The contrast between photographic and flat cells
creates depth without complexity.

- Photo cells: real imagery bleeding inside sharp polygon edges
- Flat cells: solid color fills — periwinkle, amber, off-white
- The mix reads as a mosaic or stained glass fragment

### Color palette observed
- Periwinkle / dusty blue-violet (the dominant accent)
- Warm amber / ochre (secondary accent)
- Off-white / cream (neutral cells and background)
- Deep charcoal for typography (not pure black)

### Geometry character
- Irregular polygon shards — not perfectly regular, organic-feeling tessellation
- Cells cluster toward center/focal point, sparse at edges
- No heavy outlines between cells — the color edges are the boundary
- Scale varies: some cells large and dominant, others small and recessive

### Composition
- Hero is full-bleed, asymmetric cluster (heavier left or center)
- Typography sits clean white on the composition, not competing
- No gradient fade at edges — composition just ends

## What we extracted for zelij-aquarelle

The Moab pattern directly informed the v2 zelij prototype (`/tmp/zelij-test2.html`):

1. **Mixed cell treatment** → flat solid accent polygons layered above the aquarelle wash base.
   Some cells are washed (blurred ellipses), some cells are flat fills. Creates Moab's depth.

2. **Flat-over-wash hierarchy** → aquarelle ellipses (blurred, bottom) + flat polygon fills (sharp, middle)
   + zelij lattice (white outline, top). Three distinct layers of presence.

3. **Bold geometry** → raised zelij lattice opacity from 0.14 (v1, "too shy") to 0.35 (v2).
   Moab's geometry is the hero; v1 was background noise.

4. **Irregular shard feel** → flat accent polygons use irregular coordinates (not clean rectangles)
   to approximate the organic-tessellation character of Moab's shards.

## What we did NOT take

- Photography inside cells — zelij stays fully programmatic, no images
- Irregular polygon outlines — zelij uses the canonical khatem (8-pointed star) for structural precision
- Full-bleed without fade — zelij retains the bottom fade into `--bg-warm` (#F2EFE9) to integrate with card content

## The synthesis

Moab is bold geometry with shard drama.
Zelij is precise geometry with aquarelle warmth.

The combination: zelij's Islamic geometric precision as the structural backbone,
Moab's mixed flat/washed cell treatment as the depth mechanism,
aquarelle softness as the warmth register matching the Framer template aesthetic.
