"use client";

import { useState } from "react";

interface ActionItem {
  action_id: string;
  type: string;
  target: string;
  contact: string;
  subject: string;
  outreach_angle: string;
  priority: "high" | "medium" | "low";
  done: boolean;
}

interface ContractLeg {
  leg: number;
  label: string;
  status: "pending" | "in_progress" | "complete";
  actions: ActionItem[];
}

interface BountyContractData {
  selected_bundle: string;
  legs: ContractLeg[];
}

interface BountyContractProps {
  data: BountyContractData;
}

const STATUS_GLYPH: Record<string, string> = {
  pending: "○",
  in_progress: "●",
  complete: "✓",
};

const STATUS_COLOR: Record<string, string> = {
  pending: "var(--text-faint)",
  in_progress: "var(--glyph-active)",
  complete: "var(--accent-confirm)",
};

const PRIORITY_COLOR: Record<string, string> = {
  high: "var(--brand-primary)",
  medium: "var(--glyph-active)",
  low: "var(--text-faint)",
};

function ActionRow({ action }: { action: ActionItem }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        borderTop: "1px solid var(--border)",
        paddingTop: "0.5rem",
        marginTop: "0.5rem",
      }}
    >
      <button
        onClick={() => setExpanded((v) => !v)}
        style={{
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
          width: "100%",
          textAlign: "left",
          display: "flex",
          alignItems: "flex-start",
          gap: "0.5rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.58rem",
            color: PRIORITY_COLOR[action.priority],
            letterSpacing: "0.06em",
            flexShrink: 0,
            marginTop: "0.1rem",
          }}
        >
          {action.priority.toUpperCase()}
        </span>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: "0.78rem", color: "var(--text-primary)", lineHeight: 1.3 }}>
            {action.subject}
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              color: "var(--text-faint)",
              marginTop: "0.15rem",
            }}
          >
            {action.target} · {action.contact}
          </p>
        </div>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            color: "var(--text-faint)",
            flexShrink: 0,
          }}
        >
          {expanded ? "∧" : "∨"}
        </span>
      </button>

      {expanded && (
        <div
          style={{
            marginTop: "0.5rem",
            paddingLeft: "0.75rem",
            borderLeft: "2px solid var(--brand-faint)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.58rem",
              color: "var(--text-faint)",
              letterSpacing: "0.06em",
              marginBottom: "0.25rem",
            }}
          >
            OUTREACH ANGLE
          </p>
          <p style={{ fontSize: "0.75rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
            {action.outreach_angle}
          </p>
        </div>
      )}
    </div>
  );
}

export function BountyContract({ data }: BountyContractProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.6rem",
          color: "var(--text-faint)",
          letterSpacing: "0.1em",
        }}
      >
        CONTRACT · {data.selected_bundle.replace(/_/g, " ").toUpperCase()}
      </div>

      {data.legs.map((leg) => (
        <div
          key={leg.leg}
          style={{
            background: "var(--bg-surface)",
            borderRadius: "8px",
            border: "1px solid var(--border)",
            overflow: "hidden",
          }}
        >
          {/* Leg header */}
          <div
            style={{
              padding: "0.75rem 1.25rem",
              borderBottom: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: STATUS_COLOR[leg.status],
              }}
            >
              {STATUS_GLYPH[leg.status]}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.62rem",
                color: "var(--text-secondary)",
                letterSpacing: "0.06em",
              }}
            >
              LEG {leg.leg} · {leg.label.toUpperCase()}
            </span>
            <span
              style={{
                marginLeft: "auto",
                fontFamily: "var(--font-mono)",
                fontSize: "0.58rem",
                color: STATUS_COLOR[leg.status],
                letterSpacing: "0.06em",
              }}
            >
              {leg.status.replace(/_/g, " ").toUpperCase()}
            </span>
          </div>

          {/* Actions */}
          <div style={{ padding: "0.75rem 1.25rem" }}>
            {leg.actions.length === 0 ? (
              <p style={{ fontSize: "0.75rem", color: "var(--text-faint)" }}>No actions required</p>
            ) : (
              leg.actions.map((action) => (
                <ActionRow key={action.action_id} action={action} />
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
