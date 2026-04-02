"use client";

import { ZelijHero } from "./ZelijHero";
import type { ProviderCardData } from "@/types/cards";

const FIT_LABELS = {
  exact: { label: "EXACT FIT", color: "var(--accent-confirm)" },
  compatible: { label: "COMPATIBLE", color: "var(--brand-primary)" },
  marginal: { label: "MARGINAL", color: "var(--glyph-active)" },
};

const COST_LABELS = {
  free: "Free",
  low: "Low cost",
  mid: "Mid range",
  high: "High cost",
  "quote-only": "Quote only",
};

interface ProviderCardProps {
  data: ProviderCardData;
  onClick: () => void;
  style?: React.CSSProperties;
}

export function ProviderCard({ data, onClick, style }: ProviderCardProps) {
  const fit = FIT_LABELS[data.fit];

  return (
    <div
      onClick={onClick}
      className="card-appear"
      style={{
        background: "var(--bg-surface)",
        border: "1px solid var(--border)",
        borderRadius: "8px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "border-color 200ms",
        ...style,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "var(--brand-primary)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
      }}
    >
      <ZelijHero cohortId={data.cohortId} confidence={data.confidence} height={120} />

      <div className="px-4 pt-3 pb-1 flex items-start justify-between gap-2">
        <h3
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "1rem",
            color: "var(--text-primary)",
            fontWeight: 400,
          }}
        >
          {data.platformName}
        </h3>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.58rem",
            color: fit.color,
            letterSpacing: "0.06em",
            whiteSpace: "nowrap",
            flexShrink: 0,
            marginTop: "0.15rem",
          }}
        >
          {fit.label}
        </span>
      </div>

      <p className="px-4 pb-2" style={{ fontSize: "0.78rem", color: "var(--text-secondary)", lineHeight: 1.4 }}>
        {data.adoptionNote}
      </p>

      <div
        className="px-4 py-2 flex flex-wrap gap-1"
        style={{
          borderTop: "1px solid var(--border)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          color: "var(--text-secondary)",
        }}
      >
        {[COST_LABELS[data.costTier], data.sampleType]
          .filter(Boolean)
          .map((s, i, arr) => (
            <span key={i}>
              {s}
              {i < arr.length - 1 && <span style={{ color: "var(--text-faint)", margin: "0 0.3rem" }}>·</span>}
            </span>
          ))}
      </div>
    </div>
  );
}
