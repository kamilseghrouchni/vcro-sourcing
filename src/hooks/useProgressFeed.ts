"use client";

import { useEffect, useRef, useState } from "react";

export type PhaseStatus = "running" | "complete";

export interface PipelinePhase {
  id: string;
  label: string;
  status: PhaseStatus;
}

export interface ClarificationEvent {
  message: string;
  options: string[];
  phase: string;
}

export interface ProgressEvent {
  ts: string;
  phase: string;
  event: "phase_start" | "finding" | "phase_complete" | "clarification_needed" | "done" | "error";
  message: string;
  options?: string[];
}

const PHASE_LABELS: Record<string, string> = {
  search: "searching literature",
  validate: "validating results",
  pmid_map: "mapping paper IDs",
  section_fetch: "fetching paper sections",
  extract: "extracting intelligence",
  signal: "synthesising signals",
  contacts: "finding contacts",
  provider: "comparing providers",
  access: "mapping access routes",
  rank: "ranking cohorts",
  bounty: "building procurement plan",
  deliver: "preparing output",
};

interface UseProgressFeedResult {
  phases: PipelinePhase[];
  findings: string[];
  rankComplete: boolean;
  clarificationEvent: ClarificationEvent | null;
  latestFinding: string;
  isDone: boolean;
  error: string | null;
}

export function useProgressFeed(runId: string | null): UseProgressFeedResult {
  const [phases, setPhases] = useState<PipelinePhase[]>([]);
  const [findings, setFindings] = useState<string[]>([]);
  const [rankComplete, setRankComplete] = useState(false);
  const [clarificationEvent, setClarificationEvent] = useState<ClarificationEvent | null>(null);
  const [latestFinding, setLatestFinding] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!runId) return;

    // Reset state on new runId
    setPhases([]);
    setFindings([]);
    setRankComplete(false);
    setClarificationEvent(null);
    setLatestFinding("");
    setIsDone(false);
    setError(null);

    abortRef.current?.abort();
    const abort = new AbortController();
    abortRef.current = abort;

    async function stream() {
      try {
        const res = await fetch(`/api/runs/${runId}/progress`, {
          signal: abort.signal,
        });

        if (!res.ok || !res.body) {
          setError(`Failed to fetch progress for run ${runId}`);
          return;
        }

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let buf = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buf += decoder.decode(value, { stream: true });
          const parts = buf.split("\n\n");
          buf = parts.pop() ?? "";

          for (const part of parts) {
            const line = part.replace(/^data: /, "").trim();
            if (!line) continue;

            let evt: ProgressEvent;
            try {
              evt = JSON.parse(line);
            } catch {
              continue;
            }

            if (evt.event === "done") {
              setIsDone(true);
              continue;
            }

            if (evt.event === "error") {
              setError(evt.message);
              continue;
            }

            if (evt.event === "phase_start") {
              setPhases((prev) => [
                ...prev,
                {
                  id: evt.phase,
                  label: PHASE_LABELS[evt.phase] ?? evt.phase,
                  status: "running",
                },
              ]);
            }

            if (evt.event === "finding") {
              setFindings((prev) => [...prev, evt.message]);
              setLatestFinding(evt.message);
            }

            if (evt.event === "phase_complete") {
              setPhases((prev) =>
                prev.map((p) =>
                  p.id === evt.phase ? { ...p, status: "complete" } : p
                )
              );
              if (evt.phase === "rank") {
                setRankComplete(true);
              }
            }

            if (evt.event === "clarification_needed") {
              setClarificationEvent({
                message: evt.message,
                options: evt.options ?? ["include", "exclude", "show me first"],
                phase: evt.phase,
              });
            }
          }
        }
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          setError(String(err));
        }
      }
    }

    stream();

    return () => {
      abort.abort();
    };
  }, [runId]);

  return {
    phases,
    findings,
    rankComplete,
    clarificationEvent,
    latestFinding,
    isDone,
    error,
  };
}
