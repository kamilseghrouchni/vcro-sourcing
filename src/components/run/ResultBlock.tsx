"use client";

import { useState } from "react";

interface ResultBlockProps {
  phase: string;
  count?: number;
  summary: string;
  command?: string;
  defaultExpanded?: boolean;
}

export function ResultBlock({
  phase,
  count,
  summary,
  command,
  defaultExpanded = true,
}: ResultBlockProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div
      className="px-4 py-2"
      style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", borderTop: "1px solid var(--feed-border)" }}
    >
      {/* Header row */}
      <button
        onClick={() => setExpanded((e) => !e)}
        className="flex w-full items-center justify-between gap-2 text-left"
        style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
      >
        <div className="flex items-center gap-2">
          <span style={{ color: "var(--accent-confirm)" }}>◎</span>
          <span style={{ color: "var(--feed-text)" }}>{phase}</span>
          {count !== undefined && (
            <span style={{ color: "var(--feed-secondary)" }}>{count} extracted</span>
          )}
        </div>
        <span style={{ color: "var(--feed-faint)" }}>{expanded ? "∧" : "∨"}</span>
      </button>

      {/* Body */}
      {expanded && (
        <div className="mt-2 pl-4" style={{ borderLeft: "1px solid var(--feed-border)" }}>
          <p style={{ color: "var(--feed-secondary)", lineHeight: 1.6, fontSize: "0.75rem" }}>
            {summary}
          </p>
          {command && (
            <p
              className="mt-2"
              style={{
                color: "var(--feed-faint)",
                fontSize: "0.7rem",
                whiteSpace: "pre-wrap",
                wordBreak: "break-all",
              }}
            >
              {">_"} {command}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
