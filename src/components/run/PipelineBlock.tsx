import type { PipelinePhase } from "@/hooks/useProgressFeed";

interface PipelineBlockProps {
  phases: PipelinePhase[];
  findings: string[];
  isDone: boolean;
}

export function PipelineBlock({ phases, findings, isDone }: PipelineBlockProps) {
  const completed = phases.filter((p) => p.status === "complete").length;
  const total = phases.length;

  // Interleave findings after every completed phase for display
  const items: Array<{ type: "phase"; phase: PipelinePhase } | { type: "finding"; text: string }> = [];
  let findingIdx = 0;
  for (const phase of phases) {
    items.push({ type: "phase", phase });
    if (phase.status === "complete" && findingIdx < findings.length) {
      // Show up to 2 findings per completed phase
      const end = Math.min(findingIdx + 2, findings.length);
      for (let i = findingIdx; i < end; i++) {
        items.push({ type: "finding", text: findings[i] });
      }
      findingIdx = end;
    }
  }
  // Any remaining findings
  while (findingIdx < findings.length) {
    items.push({ type: "finding", text: findings[findingIdx++] });
  }

  const statusLabel = isDone ? "complete" : total > 0 ? "running" : "idle";

  return (
    <div
      className="px-4 py-4"
      style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}
    >
      {/* Header */}
      <div
        className="mb-3 flex items-center gap-2"
        style={{ color: "var(--feed-secondary)", fontSize: "0.7rem", letterSpacing: "0.08em" }}
      >
        <span style={{ color: "var(--feed-text)", fontWeight: 600 }}>PIPELINE</span>
        {total > 0 && (
          <>
            <span>{completed} / {total}</span>
            <span>·</span>
            <span
              style={{
                color: isDone ? "var(--accent-confirm)" : "var(--glyph-active)",
              }}
            >
              {statusLabel}
            </span>
          </>
        )}
      </div>

      {/* Phase + finding list */}
      <div className="flex flex-col gap-1">
        {items.map((item, i) => {
          if (item.type === "phase") {
            const { phase } = item;
            const isActive = phase.status === "running";
            const isComplete = phase.status === "complete";
            return (
              <div key={`phase-${phase.id}-${i}`} className="flex items-center gap-2">
                <span
                  style={{
                    color: isActive
                      ? "var(--glyph-active)"
                      : isComplete
                      ? "var(--accent-confirm)"
                      : "var(--feed-faint)",
                    minWidth: "1ch",
                  }}
                  className={isActive ? "glyph-pulse" : ""}
                >
                  {isActive ? "●" : isComplete ? "✓" : "○"}
                </span>
                <span
                  style={{
                    color: isActive
                      ? "var(--feed-text)"
                      : isComplete
                      ? "var(--feed-secondary)"
                      : "var(--feed-faint)",
                  }}
                >
                  {phase.label}
                </span>
              </div>
            );
          }

          // Finding
          return (
            <div
              key={`finding-${i}`}
              className="flex gap-2 pl-3"
              style={{ color: "var(--feed-secondary)", lineHeight: 1.5 }}
            >
              <span style={{ color: "var(--brand-vivid)", flexShrink: 0 }}>→</span>
              <span style={{ fontSize: "0.75rem" }}>{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
