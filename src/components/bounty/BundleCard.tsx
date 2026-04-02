"use client";

interface BundleCandidate {
  id: string;
  label: "max_coverage" | "fastest" | "cheapest_bypass";
  recommended: boolean;
  title: string;
  leg1_source: string;
  leg2_qa: string;
  leg3_assay: string;
  n_samples: number;
  known_cost_eur: number;
  unknown_cost_note: string;
  timeline_weeks: number;
  fit: string;
}

const LABEL_DISPLAY = {
  max_coverage: "MAX COVERAGE",
  fastest: "FASTEST",
  cheapest_bypass: "CHEAPEST BYPASS",
};

interface BundleCardProps {
  bundle: BundleCandidate;
  onClick: () => void;
}

export function BundleCard({ bundle, onClick }: BundleCardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        background: bundle.recommended ? "var(--bg-surface)" : "var(--bg-warm)",
        border: `1px solid ${bundle.recommended ? "var(--brand-primary)" : "var(--border)"}`,
        borderRadius: "8px",
        padding: "1.25rem",
        cursor: "pointer",
        transition: "border-color 200ms",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "var(--brand-primary)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = bundle.recommended
          ? "var(--brand-primary)"
          : "var(--border)";
      }}
    >
      {bundle.recommended && (
        <span
          style={{
            position: "absolute",
            top: "-0.6rem",
            right: "1rem",
            background: "var(--brand-primary)",
            color: "#fff",
            fontFamily: "var(--font-mono)",
            fontSize: "0.58rem",
            letterSpacing: "0.08em",
            padding: "0.15rem 0.5rem",
            borderRadius: "100px",
          }}
        >
          RECOMMENDED
        </span>
      )}

      <div className="flex items-start justify-between gap-3 mb-2">
        <h3
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "1rem",
            color: "var(--text-primary)",
            fontWeight: 400,
          }}
        >
          {bundle.title}
        </h3>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.6rem",
            color: "var(--brand-primary)",
            letterSpacing: "0.08em",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          {LABEL_DISPLAY[bundle.label]}
        </span>
      </div>

      {/* Three legs */}
      <div className="flex flex-col gap-1 mb-3">
        {[
          { label: "Source", text: bundle.leg1_source },
          { label: "QA", text: bundle.leg2_qa },
          { label: "Assay", text: bundle.leg3_assay },
        ].map((leg) => (
          <div key={leg.label} className="flex gap-2">
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.62rem",
                color: "var(--text-faint)",
                minWidth: "3.5rem",
              }}
            >
              {leg.label}
            </span>
            <span style={{ fontSize: "0.78rem", color: "var(--text-secondary)", lineHeight: 1.4 }}>
              {leg.text}
            </span>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div
        className="flex flex-wrap gap-1"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          color: "var(--text-secondary)",
          borderTop: "1px solid var(--border)",
          paddingTop: "0.625rem",
        }}
      >
        {[
          `€${bundle.known_cost_eur.toLocaleString()}`,
          `${bundle.timeline_weeks}w`,
          `n=${bundle.n_samples}`,
        ].map((s, i, arr) => (
          <span key={i}>
            {s}
            {i < arr.length - 1 && <span style={{ color: "var(--text-faint)", margin: "0 0.3rem" }}>·</span>}
          </span>
        ))}
        {bundle.unknown_cost_note && (
          <span style={{ color: "var(--glyph-active)", marginLeft: "0.25rem" }}>
            + unknowns
          </span>
        )}
      </div>

      {bundle.fit && (
        <p className="mt-2" style={{ fontSize: "0.74rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
          {bundle.fit}
        </p>
      )}
    </div>
  );
}
