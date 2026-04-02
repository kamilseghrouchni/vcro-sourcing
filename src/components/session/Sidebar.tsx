"use client";

import { useEffect, useState } from "react";

interface RunEntry {
  runId: string;
  oneLiner: string;
  status: "complete" | "running" | "crashed";
}

interface SidebarProps {
  activeRunId: string | null;
  onSelectRun: (runId: string) => void;
}

const STATUS_GLYPH: Record<string, string> = {
  complete: "✓",
  running: "●",
  crashed: "✗",
};

const STATUS_COLOR: Record<string, string> = {
  complete: "var(--accent-confirm)",
  running: "var(--glyph-active)",
  crashed: "var(--brand-vivid)",
};

export function Sidebar({ activeRunId, onSelectRun }: SidebarProps) {
  const [runs, setRuns] = useState<RunEntry[]>([]);

  useEffect(() => {
    fetch("/api/runs")
      .then((r) => r.ok ? r.json() : null)
      .then((data: RunEntry[] | null) => {
        if (Array.isArray(data)) setRuns(data);
      })
      .catch(() => null);
  }, []);

  if (runs.length === 0) return null;

  return (
    <div
      style={{
        width: "220px",
        flexShrink: 0,
        background: "var(--feed-surface)",
        borderRight: "1px solid var(--feed-border)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "0.875rem 1rem 0.5rem",
          fontFamily: "var(--font-mono)",
          fontSize: "0.58rem",
          color: "var(--feed-faint)",
          letterSpacing: "0.1em",
        }}
      >
        SESSIONS
      </div>

      <div style={{ flex: 1, overflowY: "auto" }}>
        {runs.map((run) => {
          const isActive = run.runId === activeRunId;
          return (
            <button
              key={run.runId}
              onClick={() => onSelectRun(run.runId)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "0.625rem 1rem",
                background: isActive ? "var(--feed-bg)" : "none",
                border: "none",
                borderLeft: isActive ? "2px solid var(--brand-primary)" : "2px solid transparent",
                cursor: "pointer",
                transition: "background 150ms",
              }}
              onMouseEnter={(e) => {
                if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.03)";
              }}
              onMouseLeave={(e) => {
                if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = "none";
              }}
            >
              <div className="flex items-center gap-1.5 mb-0.5">
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.62rem",
                    color: STATUS_COLOR[run.status],
                    animation: run.status === "running" ? "glyph-pulse 1.8s ease-in-out infinite" : undefined,
                  }}
                >
                  {STATUS_GLYPH[run.status]}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.58rem",
                    color: "var(--feed-faint)",
                    letterSpacing: "0.04em",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {run.status.toUpperCase()}
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: isActive ? "var(--feed-text)" : "var(--feed-secondary)",
                  lineHeight: 1.3,
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  margin: 0,
                }}
              >
                {run.oneLiner}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
