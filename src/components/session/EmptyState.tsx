"use client";

interface EmptyStateProps {
  onSelect: (text: string) => void;
}

const PROMPTS = [
  {
    label: "Cohort Intelligence",
    text: "What cohorts exist for AD plasma metabolomics?",
  },
  {
    label: "Pricing Estimate",
    text: "How much would 200 plasma samples cost for metabolomics?",
  },
  {
    label: "Procurement Bounty",
    text: "I have €50K and need 150 FFPE samples for multiple sclerosis CSF metabolomics.",
  },
];

export function EmptyState({ onSelect }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8">
      <h1
        className="mb-2 text-center"
        style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
          color: "var(--text-primary)",
          fontWeight: 400,
        }}
      >
        Cohort Intelligence
      </h1>
      <p
        className="mb-10 text-center"
        style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}
      >
        Life sciences cohort sourcing, feasibility, and procurement.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        {PROMPTS.map((p) => (
          <button
            key={p.label}
            onClick={() => onSelect(p.text)}
            className="text-left"
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              padding: "1rem 1.25rem",
              maxWidth: "220px",
              cursor: "pointer",
              transition: "border-color 200ms, background 200ms",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--brand-primary)";
              (e.currentTarget as HTMLButtonElement).style.background = "var(--bg-warm)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLButtonElement).style.background = "var(--bg-surface)";
            }}
          >
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                color: "var(--brand-primary)",
                letterSpacing: "0.06em",
                marginBottom: "0.5rem",
              }}
            >
              {p.label.toUpperCase()}
            </p>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
              &ldquo;{p.text}&rdquo;
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
