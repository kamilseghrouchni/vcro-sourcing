import { ZelijHero } from "@/components/cards/ZelijHero";

interface SessionHeroProps {
  runId: string;
  indication?: string;
  queryOneLiner?: string;
}

export function SessionHero({ runId, indication, queryOneLiner }: SessionHeroProps) {
  return (
    <div style={{ position: "relative", flexShrink: 0 }}>
      <ZelijHero cohortId={runId} confidence="high" height={280} fullBleed fadeInto="var(--bg-warm)" />

      {/* Text overlay */}
      <div
        style={{
          position: "absolute",
          bottom: "1.5rem",
          left: "2rem",
          right: "2rem",
        }}
      >
        {indication && (
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              color: "var(--brand-primary)",
              letterSpacing: "0.1em",
              marginBottom: "0.25rem",
            }}
          >
            {indication.replace(/_/g, " ").toUpperCase()}
          </p>
        )}
        {queryOneLiner && (
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "1.25rem",
              color: "var(--text-primary)",
              lineHeight: 1.3,
            }}
          >
            {queryOneLiner}
          </p>
        )}
      </div>
    </div>
  );
}
