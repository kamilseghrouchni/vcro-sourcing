"use client";

import { ZelijHero } from "./ZelijHero";
import type { CohortCardData } from "@/types/cards";

interface CardExpandedProps {
  data: CohortCardData;
  signalNarrative?: string;
  negativeResults?: string[];
  intelligenceDimensions?: string[];
  onBack: () => void;
}

const ACCESS_COLORS: Record<string, string> = {
  open_portal: "var(--accent-confirm)",
  pi_dependent: "var(--glyph-active)",
  consortium_controlled: "var(--brand-primary)",
  commercial_biobank: "var(--brand-mid)",
  unknown: "var(--text-faint)",
};

export function CardExpanded({
  data,
  signalNarrative,
  negativeResults = [],
  intelligenceDimensions = [],
  onBack,
}: CardExpandedProps) {
  return (
    <div className="flex flex-col h-full overflow-y-auto" style={{ background: "var(--bg-warm)" }}>
      {/* Back button */}
      <button
        onClick={onBack}
        style={{
          background: "none",
          border: "none",
          padding: "1rem 1.5rem 0.5rem",
          cursor: "pointer",
          fontFamily: "var(--font-mono)",
          fontSize: "0.75rem",
          color: "var(--text-secondary)",
          textAlign: "left",
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.color = "var(--brand-primary)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.color = "var(--text-secondary)";
        }}
      >
        ← Back to results
      </button>

      {/* Hero — scaled up, less blur */}
      <div style={{ filter: "saturate(1.05) blur(0.2px)" }}>
        <ZelijHero cohortId={data.cohortId} confidence="high" height={240} fullBleed />
      </div>

      {/* Title */}
      <div className="px-6 pt-4 pb-2 flex items-start justify-between gap-4">
        <div>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "1.6rem",
              color: "var(--text-primary)",
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            {data.cohortName}
          </h2>
          {data.institution && (
            <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginTop: "0.25rem" }}>
              {data.institution} · {data.country}
            </p>
          )}
        </div>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            color: ACCESS_COLORS[data.accessRoute] ?? "var(--text-faint)",
            letterSpacing: "0.08em",
            whiteSpace: "nowrap",
            marginTop: "0.4rem",
            flexShrink: 0,
          }}
        >
          {data.accessRoute.replace(/_/g, " ").toUpperCase()}
        </span>
      </div>

      {/* Two-column body */}
      <div className="px-6 pb-4 grid gap-6" style={{ gridTemplateColumns: "1fr 1fr" }}>
        {/* Left — metadata */}
        <div>
          <h4
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              color: "var(--text-faint)",
              letterSpacing: "0.1em",
              marginBottom: "0.75rem",
            }}
          >
            METADATA
          </h4>
          <table style={{ fontSize: "0.78rem", borderCollapse: "collapse", width: "100%" }}>
            <tbody>
              {[
                ["N (usable)", data.usableN ? data.usableN.toLocaleString() : "—"],
                ["Design", data.design || "—"],
                ["Sample type", data.sampleType || "—"],
                ["Modality", data.modality || "—"],
                ["Access", data.accessRoute.replace(/_/g, " ") || "—"],
                ["Cost", data.estimatedCost || "—"],
              ].map(([label, value]) => (
                <tr key={label} style={{ borderBottom: "1px solid var(--border)" }}>
                  <td
                    style={{
                      padding: "0.35rem 0",
                      color: "var(--text-secondary)",
                      paddingRight: "1rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {label}
                  </td>
                  <td style={{ padding: "0.35rem 0", color: "var(--text-primary)" }}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right — signal narrative */}
        <div>
          <h4
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              color: "var(--text-faint)",
              letterSpacing: "0.1em",
              marginBottom: "0.75rem",
            }}
          >
            SIGNAL NARRATIVE
          </h4>

          {data.evidenceQuote && (
            <blockquote
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "0.88rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                borderLeft: "2px solid var(--brand-faint)",
                paddingLeft: "0.75rem",
                marginBottom: "0.75rem",
              }}
            >
              &ldquo;{data.evidenceQuote}&rdquo;
              {data.paperId && (
                <cite
                  style={{
                    display: "block",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    color: "var(--text-faint)",
                    fontStyle: "normal",
                    marginTop: "0.25rem",
                  }}
                >
                  — {data.paperId}
                </cite>
              )}
            </blockquote>
          )}

          {signalNarrative && (
            <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
              {signalNarrative}
            </p>
          )}

          {negativeResults.length > 0 && (
            <div className="mt-3">
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  color: "var(--text-faint)",
                  letterSpacing: "0.08em",
                  marginBottom: "0.35rem",
                }}
              >
                NEGATIVE RESULTS
              </p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {negativeResults.map((neg, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      paddingLeft: "0.75rem",
                      borderLeft: "2px solid var(--border)",
                      marginBottom: "0.25rem",
                      lineHeight: 1.4,
                    }}
                  >
                    {neg}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Intelligence dimension pills */}
      {intelligenceDimensions.length > 0 && (
        <div className="px-6 pb-4 flex flex-wrap gap-2">
          {intelligenceDimensions.map((dim) => (
            <span
              key={dim}
              style={{
                background: "var(--text-primary)",
                color: "var(--bg-warm)",
                borderRadius: "100px",
                padding: "0.2rem 0.7rem",
                fontSize: "0.65rem",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.04em",
              }}
            >
              {dim.replace(/_/g, " ")}
            </span>
          ))}
        </div>
      )}

      {/* Stat strip */}
      <div
        className="px-6 py-3 flex flex-wrap gap-1"
        style={{
          borderTop: "1px solid var(--border)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.72rem",
          color: "var(--text-secondary)",
        }}
      >
        {[
          data.usableN ? `N=${data.usableN.toLocaleString()}` : null,
          data.modality || null,
          data.accessRoute.replace(/_/g, " ") || null,
          data.estimatedCost || null,
        ]
          .filter(Boolean)
          .map((s, i, arr) => (
            <span key={i}>
              {s}
              {i < arr.length - 1 && (
                <span style={{ color: "var(--text-faint)", margin: "0 0.4rem" }}>·</span>
              )}
            </span>
          ))}
      </div>
    </div>
  );
}
