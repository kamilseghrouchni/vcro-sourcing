"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const PLACEHOLDERS = [
  "What cohorts exist for [indication] [modality]?",
  "How much would [N] [sample type] samples cost?",
  "I have €[budget] and need [N] [sample] samples for [outcome]",
];

const BOUNTY_KEYWORDS = [/€\d/, /\$\d+[kK]/, /£\d/, /budget/, /i have .*(eur|usd|gbp|\$|€|£)/i];

function isBountyQuery(text: string): boolean {
  return BOUNTY_KEYWORDS.some((re) => re.test(text));
}

export function QueryBar() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [placeholderIdx, setPlaceholderIdx] = useState(0);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Rotate placeholder
  useEffect(() => {
    const t = setInterval(() => {
      setPlaceholderIdx((i) => (i + 1) % PLACEHOLDERS.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  // Listen for EmptyState prefill events
  useEffect(() => {
    const handler = (e: CustomEvent<string>) => {
      setValue(e.detail);
      inputRef.current?.focus();
    };
    window.addEventListener("vcro:prefill", handler as EventListener);
    return () => window.removeEventListener("vcro:prefill", handler as EventListener);
  }, []);

  const handleSubmit = useCallback(async () => {
    const query = value.trim();
    if (!query) return;
    setValue("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: query }),
      });
      if (res.ok) {
        const { runId } = await res.json();
        router.push(`/?run=${runId}`);
      }
    } catch {
      // Fallback: derive runId client-side
      const slug = query
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .trim()
        .replace(/\s+/g, "_")
        .slice(0, 40);
      const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
      router.push(`/?run=${date}_${slug}`);
    }
  }, [value, router]);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const bounty = isBountyQuery(value);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 flex items-end gap-0"
      style={{
        background: "var(--bg-warm)",
        borderTop: "1px solid var(--border)",
        zIndex: 50,
        padding: "0.75rem 1rem",
      }}
    >
      <div
        className="flex flex-1 items-end rounded"
        style={{
          background: "var(--bg-surface)",
          border: `1px solid ${bounty ? "var(--glyph-active)" : "var(--border)"}`,
          transition: "border-color 200ms",
        }}
      >
        <textarea
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKey}
          rows={1}
          placeholder={PLACEHOLDERS[placeholderIdx]}
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            outline: "none",
            resize: "none",
            padding: "0.625rem 0.75rem",
            fontFamily: "var(--font-sans)",
            fontSize: "0.9rem",
            color: "var(--text-primary)",
            lineHeight: 1.5,
            maxHeight: "120px",
            overflowY: "auto",
          }}
        />
        {bounty && (
          <span
            className="px-2 self-center"
            style={{
              fontSize: "0.65rem",
              color: "var(--glyph-active)",
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.06em",
              whiteSpace: "nowrap",
            }}
          >
            BOUNTY
          </span>
        )}
      </div>

      <button
        onClick={handleSubmit}
        disabled={!value.trim()}
        style={{
          marginLeft: "0.5rem",
          background: value.trim() ? "var(--brand-primary)" : "var(--bg-surface)",
          color: value.trim() ? "#fff" : "var(--text-faint)",
          border: "1px solid var(--border)",
          borderRadius: "4px",
          padding: "0.625rem 1rem",
          fontFamily: "var(--font-sans)",
          fontSize: "0.875rem",
          fontWeight: 500,
          cursor: value.trim() ? "pointer" : "not-allowed",
          whiteSpace: "nowrap",
          transition: "background 150ms, color 150ms",
        }}
      >
        Run ↗
      </button>
    </div>
  );
}
