"use client";

import { ZelijHero } from "./ZelijHero";
import type { CohortCardData } from "@/types/cards";

const ACCESS_LABELS: Record<string, string> = {
  open_portal: "OPEN ACCESS",
  pi_dependent: "PI CONTACT",
  consortium_controlled: "CONSORTIUM",
  commercial_biobank: "COMMERCIAL",
  unknown: "UNKNOWN",
};

const ACCESS_COLORS: Record<string, string> = {
  open_portal: "var(--accent-confirm)",
  pi_dependent: "var(--glyph-active)",
  consortium_controlled: "var(--brand-primary)",
  commercial_biobank: "var(--brand-mid)",
  unknown: "var(--text-faint)",
};

interface CohortCardProps {
  data: CohortCardData;
  onClick: () => void;
  style?: React.CSSProperties;
}

export function CohortCard({ data, onClick, style }: CohortCardProps) {
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
        width: "100%",
        ...style,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "var(--brand-primary)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
      }}
    >
      {/* Hero */}
      <ZelijHero cohortId={data.cohortId} confidence={data.confidence} height={160} />

      {/* Cohort name + access badge */}
      <div className="px-4 pt-3 pb-1 flex items-start justify-between gap-2">
        <h3
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "1.1rem",
            color: "var(--text-primary)",
            fontWeight: 400,
            lineHeight: 1.2,
          }}
        >
          {data.cohortName}
        </h3>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.6rem",
            color: ACCESS_COLORS[data.accessRoute] ?? "var(--text-faint)",
            letterSpacing: "0.08em",
            whiteSpace: "nowrap",
            marginTop: "0.2rem",
            flexShrink: 0,
          }}
        >
          [{ACCESS_LABELS[data.accessRoute] ?? data.accessRoute.toUpperCase()}]
        </span>
      </div>

      {/* Institution strip */}
      <p className="px-4 pb-2" style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>
        {data.institution}
        {data.country ? ` · ${data.country}` : ""}
      </p>

      {/* Evidence quote */}
      {data.evidenceQuote && (
        <div className="px-4 pb-2" style={{ borderTop: "1px solid var(--border)", paddingTop: "0.625rem" }}>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "0.82rem",
              color: "var(--text-secondary)",
              lineHeight: 1.5,
            }}
          >
            &ldquo;{data.evidenceQuote}&rdquo;
          </p>
          {data.paperId && (
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                color: "var(--text-faint)",
                marginTop: "0.25rem",
              }}
            >
              — {data.paperId}
            </p>
          )}
        </div>
      )}

      {/* Stat footer */}
      <div
        className="px-4 py-2 flex flex-wrap gap-1"
        style={{
          borderTop: "1px solid var(--border)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          color: "var(--text-secondary)",
        }}
      >
        {[
          data.usableN ? `N=${data.usableN.toLocaleString()}` : null,
          data.design || null,
          data.modality || null,
          data.estimatedCost || null,
        ]
          .filter(Boolean)
          .map((stat, i, arr) => (
            <span key={i}>
              {stat}
              {i < arr.length - 1 && (
                <span style={{ color: "var(--text-faint)", margin: "0 0.3rem" }}>·</span>
              )}
            </span>
          ))}
      </div>
    </div>
  );
}
