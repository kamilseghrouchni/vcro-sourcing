interface RunSummaryProps {
  topCohorts: string[];
  papersScreened: number;
  papersRelevant: number;
  rankedCount: number;
  durationLabel?: string;
}

export function RunSummary({
  topCohorts,
  papersScreened,
  papersRelevant,
  rankedCount,
  durationLabel,
}: RunSummaryProps) {
  return (
    <div
      className="px-4 py-4"
      style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem" }}
    >
      <div
        className="mb-2 flex items-center gap-2"
        style={{ color: "var(--accent-confirm)", fontWeight: 600, fontSize: "0.7rem", letterSpacing: "0.08em" }}
      >
        <span>✓</span>
        <span>RUN COMPLETE</span>
        {durationLabel && (
          <>
            <span style={{ color: "var(--feed-faint)" }}>·</span>
            <span style={{ color: "var(--feed-secondary)" }}>{durationLabel}</span>
          </>
        )}
      </div>

      {topCohorts.length > 0 && (
        <p className="mb-1" style={{ color: "var(--feed-secondary)" }}>
          Top cohorts:{" "}
          <span style={{ color: "var(--feed-text)" }}>{topCohorts.join(" · ")}</span>
        </p>
      )}

      <p style={{ color: "var(--feed-faint)" }}>
        {papersScreened} papers screened · {papersRelevant} relevant · {rankedCount} ranked
      </p>

      <p className="mt-2" style={{ color: "var(--brand-vivid)", fontSize: "0.72rem" }}>
        → Full recommendation in the output panel
      </p>
    </div>
  );
}
