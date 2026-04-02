"use client";

import { useState } from "react";
import type { ClarificationEvent } from "@/hooks/useProgressFeed";

type Choice = "include" | "exclude" | "show me first";

interface ClarificationGateProps {
  event: ClarificationEvent;
  onChoice: (choice: Choice) => void;
}

const OPTION_LABELS: Record<string, string> = {
  include: "Yes — include and flag as tangential",
  exclude: "No — exclude, continue with core results",
  "show me first": "Show me first",
};

export function ClarificationGate({ event, onChoice }: ClarificationGateProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const options = event.options.length > 0 ? event.options : ["include", "exclude", "show me first"];

  return (
    <div
      className="mx-4 my-3 rounded p-4"
      style={{
        background: "var(--feed-surface)",
        border: "1px solid var(--feed-border)",
        fontFamily: "var(--font-mono)",
        fontSize: "0.78rem",
      }}
    >
      <div
        className="mb-3"
        style={{ color: "var(--feed-text)", fontWeight: 600, letterSpacing: "0.06em", fontSize: "0.7rem" }}
      >
        CLARIFICATION
      </div>

      <p className="mb-3" style={{ color: "var(--feed-secondary)", lineHeight: 1.6 }}>
        {event.message}
      </p>

      <div className="flex flex-col gap-2 mb-4">
        {options.map((opt) => (
          <label
            key={opt}
            className="flex items-start gap-2 cursor-pointer"
            style={{ color: selected === opt ? "var(--feed-text)" : "var(--feed-secondary)" }}
          >
            <span style={{ marginTop: "0.1em", color: selected === opt ? "var(--glyph-active)" : "var(--feed-faint)" }}>
              {selected === opt ? "◉" : "○"}
            </span>
            <span
              onClick={() => setSelected(opt)}
              style={{ flex: 1 }}
            >
              {OPTION_LABELS[opt] ?? opt}
            </span>
            <input
              type="radio"
              name="clarification"
              value={opt}
              checked={selected === opt}
              onChange={() => setSelected(opt)}
              className="sr-only"
            />
          </label>
        ))}
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => selected && onChoice(selected as Choice)}
          disabled={!selected}
          style={{
            background: selected ? "var(--glyph-active)" : "var(--feed-faint)",
            color: selected ? "#fff" : "var(--feed-bg)",
            border: "none",
            borderRadius: "2px",
            padding: "0.4rem 1rem",
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            cursor: selected ? "pointer" : "not-allowed",
            letterSpacing: "0.04em",
          }}
        >
          Continue →
        </button>
      </div>
    </div>
  );
}
