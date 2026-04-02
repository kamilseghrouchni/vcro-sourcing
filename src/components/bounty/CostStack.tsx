"use client";

interface CostLeg {
  leg: number;
  label: string;
  description: string;
  cost_eur: number;
  cost_known: boolean;
  timeline_weeks: number;
  vendor: string;
  notes?: string;
}

interface CostStackData {
  legs: CostLeg[];
  total_known_eur: number;
  total_unknown_components: string[];
  total_timeline_weeks: number;
  currency_note?: string;
}

interface CostStackProps {
  data: CostStackData;
}

export function CostStack({ data }: CostStackProps) {
  return (
    <div
      style={{
        background: "var(--bg-surface)",
        borderRadius: "8px",
        overflow: "hidden",
        border: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          padding: "0.75rem 1.25rem",
          borderBottom: "1px solid var(--border)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.6rem",
          color: "var(--text-faint)",
          letterSpacing: "0.1em",
        }}
      >
        COST BREAKDOWN
      </div>

      {/* Legs */}
      {data.legs.map((leg, i) => (
        <div
          key={leg.leg}
          style={{
            padding: "0.875rem 1.25rem",
            borderBottom: i < data.legs.length - 1 ? "1px solid var(--border)" : undefined,
          }}
        >
          <div className="flex items-start justify-between gap-3 mb-1">
            <div className="flex items-center gap-2">
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.58rem",
                  color: "var(--text-faint)",
                  letterSpacing: "0.06em",
                }}
              >
                LEG {leg.leg} · {leg.label.toUpperCase()}
              </span>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: "var(--text-primary)",
                }}
              >
                €{leg.cost_eur.toLocaleString()}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  color: "var(--text-faint)",
                }}
              >
                {leg.timeline_weeks}w
              </span>
            </div>
          </div>

          <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", lineHeight: 1.4, marginBottom: "0.25rem" }}>
            {leg.description}
          </p>

          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.62rem",
              color: "var(--text-faint)",
            }}
          >
            {leg.vendor}
          </p>

          {leg.notes && (
            <p style={{ fontSize: "0.72rem", color: "var(--text-faint)", lineHeight: 1.4, marginTop: "0.35rem" }}>
              {leg.notes}
            </p>
          )}
        </div>
      ))}

      {/* Total */}
      <div
        style={{
          padding: "0.875rem 1.25rem",
          borderTop: "1px solid var(--border)",
          background: "var(--bg-warm)",
        }}
      >
        <div className="flex items-center justify-between">
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                color: "var(--text-faint)",
                letterSpacing: "0.08em",
                marginBottom: "0.2rem",
              }}
            >
              TOTAL KNOWN
            </div>
            {data.total_unknown_components.length > 0 && (
              <div style={{ fontSize: "0.72rem", color: "var(--glyph-active)" }}>
                + {data.total_unknown_components.length} unknown component{data.total_unknown_components.length > 1 ? "s" : ""}
              </div>
            )}
          </div>
          <div className="text-right">
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "1rem",
                color: "var(--text-primary)",
                fontWeight: 500,
              }}
            >
              €{data.total_known_eur.toLocaleString()}
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                color: "var(--text-faint)",
              }}
            >
              {data.total_timeline_weeks}w total
            </div>
          </div>
        </div>

        {data.total_unknown_components.length > 0 && (
          <ul style={{ marginTop: "0.5rem", listStyle: "none", padding: 0 }}>
            {data.total_unknown_components.map((item, i) => (
              <li
                key={i}
                style={{
                  fontSize: "0.72rem",
                  color: "var(--text-secondary)",
                  paddingLeft: "0.75rem",
                  borderLeft: "2px solid var(--glyph-active)",
                  marginBottom: "0.2rem",
                  lineHeight: 1.4,
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        )}

        {data.currency_note && (
          <p
            style={{
              marginTop: "0.5rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.58rem",
              color: "var(--text-faint)",
            }}
          >
            {data.currency_note}
          </p>
        )}
      </div>
    </div>
  );
}
