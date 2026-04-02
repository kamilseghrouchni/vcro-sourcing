/**
 * resolveZelij — deterministic zelij-aquarelle parameters
 *
 * Maps (cohortId, confidence) → ZelijParams used by ZelijHero.tsx.
 * Never uses Math.random() — all values are seeded from cohortId hash.
 * Same cohortId always produces the same visual.
 */

export type Confidence = "high" | "medium" | "low" | "tangential";

export interface ZelijEllipse {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  hsl: [number, number, number]; // hue, saturation%, lightness%
  opacity: number;
}

export interface ZelijPolygon {
  points: string;
  fill: string;
  opacity: number;
}

export interface ZelijParams {
  ellipses: ZelijEllipse[];
  flatPolygons: ZelijPolygon[];
  filterSeed: number;
  displacementScale: number;
  blurStdDev: number;
  patternRotation: 0 | 15 | 30 | 45;
  latticeOpacity: number;
  cssSaturate: number;
}

/** Simple djb2-style hash that returns a stable integer from a string */
function hashString(s: string): number {
  let h = 5381;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) + h + s.charCodeAt(i)) & 0xffffffff;
  }
  return Math.abs(h);
}

/** Linear congruential generator seeded from hash — returns 0..1 */
function lcg(seed: number) {
  let s = seed;
  return () => {
    s = (1664525 * s + 1013904223) & 0xffffffff;
    return Math.abs(s) / 0xffffffff;
  };
}

const CONFIDENCE_CONFIG: Record<
  Confidence,
  {
    cssSaturate: number;
    blurStdDev: number;
    displacementScale: number;
    latticeOpacity: number;
  }
> = {
  high:       { cssSaturate: 1.0,  blurStdDev: 13, displacementScale: 18, latticeOpacity: 0.35 },
  medium:     { cssSaturate: 0.85, blurStdDev: 15, displacementScale: 20, latticeOpacity: 0.25 },
  low:        { cssSaturate: 0.55, blurStdDev: 18, displacementScale: 22, latticeOpacity: 0.18 },
  tangential: { cssSaturate: 0.14, blurStdDev: 22, displacementScale: 24, latticeOpacity: 0.10 },
};

// Brand teal family — hue stays in 180-190 range
const TEAL_HUES = [182, 184, 186, 188, 190, 178];

export function resolveZelij(cohortId: string, confidence: Confidence): ZelijParams {
  const hash = hashString(cohortId);
  const rand = lcg(hash);
  const config = CONFIDENCE_CONFIG[confidence];

  // filterSeed for feTurbulence
  const filterSeed = hash % 97;

  // patternRotation — one of 4 values
  const ROTATIONS = [0, 15, 30, 45] as const;
  const patternRotation = ROTATIONS[hash % 4];

  // Aquarelle ellipses — 4 or 5 blobs
  const ellipseCount = 4 + (hash % 2); // 4 or 5
  const ellipses: ZelijEllipse[] = [];
  for (let i = 0; i < ellipseCount; i++) {
    const hue = TEAL_HUES[Math.floor(rand() * TEAL_HUES.length)];
    ellipses.push({
      cx: 10 + Math.floor(rand() * 80), // % of viewBox width
      cy: 10 + Math.floor(rand() * 80),
      rx: 20 + Math.floor(rand() * 35),
      ry: 15 + Math.floor(rand() * 30),
      hsl: [hue, 60 + Math.floor(rand() * 30), 45 + Math.floor(rand() * 25)],
      opacity: 0.55 + rand() * 0.3,
    });
  }

  // Flat irregular polygons (Moabtx mixed-cell technique) — 3 polygons
  const flatPolygons: ZelijPolygon[] = [];
  const polyCount = 3;
  for (let i = 0; i < polyCount; i++) {
    const bx = 5 + Math.floor(rand() * 70);
    const by = 5 + Math.floor(rand() * 70);
    const w = 15 + Math.floor(rand() * 25);
    const h = 12 + Math.floor(rand() * 20);
    const jitter = () => Math.floor((rand() - 0.5) * 8);
    // Irregular quad (slight jitter on each corner)
    const points = [
      `${bx + jitter()},${by + jitter()}`,
      `${bx + w + jitter()},${by + jitter()}`,
      `${bx + w + jitter()},${by + h + jitter()}`,
      `${bx + jitter()},${by + h + jitter()}`,
    ].join(" ");
    const hue = TEAL_HUES[Math.floor(rand() * TEAL_HUES.length)];
    const sat = 55 + Math.floor(rand() * 30);
    const lit = 40 + Math.floor(rand() * 30);
    flatPolygons.push({
      points,
      fill: `hsl(${hue}, ${sat}%, ${lit}%)`,
      opacity: 0.28 + rand() * 0.22,
    });
  }

  return {
    ellipses,
    flatPolygons,
    filterSeed,
    displacementScale: config.displacementScale,
    blurStdDev: config.blurStdDev,
    patternRotation,
    latticeOpacity: config.latticeOpacity,
    cssSaturate: config.cssSaturate,
  };
}
