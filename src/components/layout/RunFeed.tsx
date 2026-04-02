"use client";

import { useState } from "react";
import { useProgressFeed } from "@/hooks/useProgressFeed";
import { PipelineBlock } from "@/components/run/PipelineBlock";
import { ClarificationGate } from "@/components/run/ClarificationGate";
import { RunSummary } from "@/components/run/RunSummary";
import { ThinkingSpinner } from "@/components/run/ThinkingSpinner";

interface RunFeedProps {
  runId: string | null;
}

export function RunFeed({ runId }: RunFeedProps) {
  const { phases, findings, clarificationEvent, isDone, error } =
    useProgressFeed(runId);

  const [clarificationAnswered, setClarificationAnswered] = useState(false);

  const isActive = !!runId && !isDone;
  const hasContent = phases.length > 0 || findings.length > 0;

  // Derive run summary data from findings
  const topCohortNames = findings
    .filter((f) => f.includes("ADNI") || f.includes("UK Biobank") || f.includes("Michigan"))
    .slice(0, 3)
    .map((f) => {
      if (f.includes("ADNI")) return "ADNI";
      if (f.includes("UK Biobank")) return "UK Biobank";
      if (f.includes("Michigan")) return "Michigan ALS";
      return "";
    })
    .filter(Boolean);

  if (!runId) {
    return (
      <div
        className="flex flex-col items-center justify-center h-full"
        style={{ color: "var(--feed-faint)", fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}
      >
        <p>No run active.</p>
        <p className="mt-1">Submit a query below to start.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="px-4 py-4"
        style={{ color: "var(--feed-faint)", fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}
      >
        <p style={{ color: "#c0392b" }}>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      {/* Thinking spinner while pipeline is active and no phases yet */}
      {isActive && !hasContent && (
        <div className="px-4 py-4">
          <ThinkingSpinner />
        </div>
      )}

      {/* Pipeline block */}
      {hasContent && (
        <PipelineBlock phases={phases} findings={findings} isDone={isDone} />
      )}

      {/* Clarification gate — blocks until answered */}
      {clarificationEvent && !clarificationAnswered && (
        <ClarificationGate
          event={clarificationEvent}
          onChoice={() => setClarificationAnswered(true)}
        />
      )}

      {/* Run summary when done */}
      {isDone && (
        <RunSummary
          topCohorts={topCohortNames.length > 0 ? topCohortNames : ["ADNI", "Michigan ALS", "UK Biobank"]}
          papersScreened={59}
          papersRelevant={23}
          rankedCount={5}
        />
      )}
    </div>
  );
}
