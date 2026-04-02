import { resolveZelij, type Confidence } from "@/lib/layout/resolveZelij";

interface ZelijHeroProps {
  cohortId: string;
  confidence?: Confidence;
  height?: number;
  fadeInto?: string;
  fullBleed?: boolean;
}

export function ZelijHero({
  cohortId,
  confidence = "high",
  height = 160,
  fadeInto = "var(--bg-warm)",
  fullBleed = false,
}: ZelijHeroProps) {
  const p = resolveZelij(cohortId, confidence);
  const filterId = `zelij-f-${cohortId.replace(/[^a-z0-9]/gi, "")}`;
  const patternId = `zelij-p-${cohortId.replace(/[^a-z0-9]/gi, "")}`;
  const gradId = `zelij-g-${cohortId.replace(/[^a-z0-9]/gi, "")}`;

  // Khatem cell size
  const cellSize = 32;
  const half = cellSize / 2;
  // Octagon points (8-pointed star base)
  const oct = (cx: number, cy: number, r: number) => {
    const a = r * 0.414; // tan(22.5°)
    return [
      [cx - a, cy - r],
      [cx + a, cy - r],
      [cx + r, cy - a],
      [cx + r, cy + a],
      [cx + a, cy + r],
      [cx - a, cy + r],
      [cx - r, cy + a],
      [cx - r, cy - a],
    ]
      .map(([x, y]) => `${x},${y}`)
      .join(" ");
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: `${height}px`,
        overflow: "hidden",
        borderRadius: fullBleed ? 0 : "4px 4px 0 0",
        filter: `saturate(${p.cssSaturate})`,
      }}
    >
      <svg
        width="100%"
        height={height}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", inset: 0 }}
      >
        <defs>
          {/* Aquarelle displacement filter */}
          <filter
            id={filterId}
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="turbulence"
              baseFrequency="0.009 0.007"
              numOctaves="5"
              seed={p.filterSeed}
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={p.displacementScale}
              xChannelSelector="R"
              yChannelSelector="G"
              result="disp"
            />
            <feGaussianBlur in="disp" stdDeviation={p.blurStdDev} />
          </filter>

          {/* Khatem lattice pattern */}
          <pattern
            id={patternId}
            x="0"
            y="0"
            width={cellSize}
            height={cellSize}
            patternUnits="userSpaceOnUse"
            patternTransform={`rotate(${p.patternRotation})`}
          >
            {/* Octagon */}
            <polygon
              points={oct(half, half, half * 0.82)}
              fill="none"
              stroke="white"
              strokeWidth="0.6"
            />
            {/* Rotated square (diamond) */}
            <rect
              x={half * 0.18}
              y={half * 0.18}
              width={half * 1.64}
              height={half * 1.64}
              fill="none"
              stroke="white"
              strokeWidth="0.4"
              transform={`rotate(45 ${half} ${half})`}
            />
          </pattern>

          {/* Bottom fade gradient */}
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={fadeInto} stopOpacity="0" />
            <stop offset="60%" stopColor={fadeInto} stopOpacity="0" />
            <stop offset="88%" stopColor={fadeInto} stopOpacity="0.85" />
            <stop offset="100%" stopColor={fadeInto} stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Layer 1 — aquarelle wash (blurred ellipses) */}
        <g filter={`url(#${filterId})`}>
          {p.ellipses.map((e, i) => (
            <ellipse
              key={i}
              cx={e.cx}
              cy={e.cy}
              rx={e.rx}
              ry={e.ry}
              fill={`hsl(${e.hsl[0]}, ${e.hsl[1]}%, ${e.hsl[2]}%)`}
              opacity={e.opacity}
            />
          ))}
        </g>

        {/* Layer 2 — flat Moabtx-style accent polygons */}
        {p.flatPolygons.map((poly, i) => (
          <polygon
            key={i}
            points={poly.points}
            fill={poly.fill}
            opacity={poly.opacity}
          />
        ))}

        {/* Layer 3 — khatem lattice */}
        <rect
          width="100"
          height="100"
          fill={`url(#${patternId})`}
          opacity={p.latticeOpacity}
        />

        {/* Layer 4 — bottom fade to card content */}
        <rect width="100" height="100" fill={`url(#${gradId})`} />
      </svg>
    </div>
  );
}
