"use client";

import { ZelijHero } from "./ZelijHero";
import type { SignalCardData } from "@/types/cards";

const REPLICATION_LABELS = {
  replicated: { label: "REPLICATED ✓", color: "var(--accent-confirm)" },
  single_cohort: { label: "SINGLE COHORT", color: "var(--glyph-active)" },
  failed_replication: { label: "FAILED REPLICATION", color: "#c0392b" },
};

interface SignalCardProps {
  data: SignalCardData;
  onClick: () => void;
  style?: React.CSSProperties;
}

export function SignalCard({ data, onClick, style }: SignalCardProps) {
  const rep = REPLICATION_LABELS[data.replicationStatus];

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
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "0.9rem",
            color: "var(--text-primary)",
            lineHeight: 1.4,
            flex: 1,
          }}
        >
          {data.finding}
        </p>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.58rem",
            color: rep.color,
            letterSpacing: "0.06em",
            whiteSpace: "nowrap",
            flexShrink: 0,
            marginTop: "0.1rem",
          }}
        >
          {rep.label}
        </span>
      </div>

      <div className="px-4 pb-2">
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            color: "var(--brand-primary)",
            letterSpacing: "0.04em",
          }}
        >
          {data.metric}
        </p>
        {data.replicatedIn && (
          <p style={{ fontSize: "0.7rem", color: "var(--text-secondary)", marginTop: "0.2rem" }}>
            Replicated in {data.replicatedIn}
          </p>
        )}
      </div>

      {data.implication && (
        <div
          className="px-4 pb-3"
          style={{ borderTop: "1px solid var(--border)", paddingTop: "0.5rem" }}
        >
          <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
            {data.implication}
          </p>
        </div>
      )}
    </div>
  );
}
