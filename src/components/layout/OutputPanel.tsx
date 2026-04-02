"use client";

import { useCallback, useEffect, useState } from "react";
import { EmptyState } from "@/components/session/EmptyState";
import { SessionHero } from "@/components/session/SessionHero";
import { CardDeck } from "@/components/cards/CardDeck";
import { BundleCard } from "@/components/bounty/BundleCard";
import { CostStack } from "@/components/bounty/CostStack";
import { BountyContract } from "@/components/bounty/BountyContract";
import { useProgressFeed } from "@/hooks/useProgressFeed";
import type { CohortCardData } from "@/types/cards";

interface OutputPanelProps {
  runId: string | null;
}

interface RunRequest {
  indication?: string;
  original_text?: string;
  sampleType?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type BundleCandidate = any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CostStackData = any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ActionMapData = any;

interface RankedCohort {
  cohort_id: string;
}

interface CohortEntry {
  id: string;
  cohorts_named: string[];
  intelligence: Array<{
    dimension: string;
    fact: string;
    source_quote?: string;
    confidence?: string;
  }>;
  intelligence_dimensions: string[];
  confidence_overall?: string;
}

function buildCohortCard(entry: CohortEntry, rank: number): CohortCardData {
  const n_dim = entry.intelligence.find((i) => i.dimension === "real_numbers");
  const quote_dim = entry.intelligence.find((i) => i.source_quote);
  const modality_dim = entry.intelligence.find((i) => i.dimension === "co_modalities");

  // Extract a usable N from the fact text
  const nMatch = n_dim?.fact.match(/(?:n=|n\s*=\s*|enrolled\s+)(\d[\d,]+)/i);
  const usableN = nMatch ? parseInt(nMatch[1].replace(/,/g, "")) : 0;

  return {
    rank,
    cohortId: entry.id,
    cohortName: entry.cohorts_named[0] ?? entry.id,
    institution: "",
    country: "USA",
    accessRoute: "open_portal",
    evidenceQuote: quote_dim?.source_quote?.slice(0, 160) ?? "",
    paperId: entry.id,
    usableN,
    design: "Longitudinal",
    modality: modality_dim?.fact.split(",")[0] ?? "LC-MS",
    estimatedCost: "Free",
    sampleType: "plasma",
    confidence: (entry.confidence_overall as CohortCardData["confidence"]) ?? "medium",
  };
}

export function OutputPanel({ runId }: OutputPanelProps) {
  const [prefilledQuery, setPrefilledQuery] = useState("");
  const [requestData, setRequestData] = useState<RunRequest | null>(null);
  const [cards, setCards] = useState<CohortCardData[]>([]);
  const [rankedOrder, setRankedOrder] = useState<string[]>([]);
  const [cardType, setCardType] = useState<"cohort" | "bounty">("cohort");
  const [bundles, setBundles] = useState<BundleCandidate[]>([]);
  const [costStack, setCostStack] = useState<CostStackData | null>(null);
  const [actionMap, setActionMap] = useState<ActionMapData | null>(null);
  const [selectedBundle, setSelectedBundle] = useState<BundleCandidate | null>(null);

  const { rankComplete } = useProgressFeed(runId);

  const handleEmptyStateSelect = useCallback((text: string) => {
    setPrefilledQuery(text);
    window.dispatchEvent(new CustomEvent("vcro:prefill", { detail: text }));
  }, []);

  // Load run data when runId changes
  useEffect(() => {
    if (!runId) {
      setRequestData(null);
      setCards([]);
      setRankedOrder([]);
      setCardType("cohort");
      setBundles([]);
      setCostStack(null);
      setActionMap(null);
      setSelectedBundle(null);
      return;
    }

    // Determine card type from endpoint_schema.json
    fetch(`/api/runs/${runId}/artifacts/endpoint_schema.json`)
      .then((r) => r.ok ? r.json() : null)
      .then((data) => {
        if (data?.decision_axes?.includes("bounty") || data?.card_type === "bounty") {
          setCardType("bounty");
        }
      })
      .catch(() => null);

    // Load request.json
    fetch(`/api/runs/${runId}/artifacts/request.json`)
      .then((r) => r.ok ? r.json() : null)
      .then((data) => data && setRequestData(data))
      .catch(() => null);

    // Load extracted_cohorts.json (cohort mode)
    fetch(`/api/runs/${runId}/artifacts/extracted_cohorts.json`)
      .then((r) => r.ok ? r.json() : null)
      .then((data: CohortEntry[] | null) => {
        if (data && Array.isArray(data)) {
          setCards(data.map((entry, i) => buildCohortCard(entry, i + 1)));
        }
      })
      .catch(() => null);

    // Load ranking.json
    fetch(`/api/runs/${runId}/artifacts/ranking.json`)
      .then((r) => r.ok ? r.json() : null)
      .then((data: { ranked_cohorts?: RankedCohort[] } | null) => {
        if (data?.ranked_cohorts) {
          setRankedOrder(data.ranked_cohorts.map((c) => c.cohort_id));
        }
      })
      .catch(() => null);

    // Load bounty artifacts
    fetch(`/api/runs/${runId}/artifacts/bundle_candidates.json`)
      .then((r) => r.ok ? r.json() : null)
      .then((data) => {
        if (Array.isArray(data)) setBundles(data);
        else if (data?.candidates) setBundles(data.candidates);
        else if (data?.bundles) setBundles(data.bundles);
      })
      .catch(() => null);

    fetch(`/api/runs/${runId}/artifacts/cost_stack.json`)
      .then((r) => r.ok ? r.json() : null)
      .then((data) => data && setCostStack(data))
      .catch(() => null);

    fetch(`/api/runs/${runId}/artifacts/action_map.json`)
      .then((r) => r.ok ? r.json() : null)
      .then((data) => data && setActionMap(data))
      .catch(() => null);
  }, [runId]);

  if (!runId) {
    return (
      <div className="flex flex-col h-full overflow-y-auto">
        <EmptyState onSelect={handleEmptyStateSelect} />
        {prefilledQuery && (
          <p className="sr-only">{prefilledQuery}</p>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full overflow-y-auto" style={{ paddingBottom: "5rem" }}>
      <SessionHero
        runId={runId}
        indication={requestData?.indication}
        queryOneLiner={requestData?.original_text?.slice(0, 100)}
      />

      {cardType === "bounty" ? (
        <div className="px-6 py-4 flex flex-col gap-4">
          {/* Bundle selection */}
          {!selectedBundle && bundles.length > 0 && (
            <>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  color: "var(--text-faint)",
                  letterSpacing: "0.1em",
                }}
              >
                SELECT BUNDLE
              </p>
              {bundles.map((bundle) => (
                <BundleCard
                  key={bundle.id}
                  bundle={bundle}
                  onClick={() => setSelectedBundle(bundle)}
                />
              ))}
            </>
          )}

          {/* Post-selection: cost stack + contract */}
          {selectedBundle && (
            <>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedBundle(null)}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: "var(--text-secondary)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--brand-primary)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--text-secondary)";
                  }}
                >
                  ← Change bundle
                </button>
              </div>
              {costStack && <CostStack data={costStack} />}
              {actionMap && <BountyContract data={actionMap} />}
            </>
          )}
        </div>
      ) : (
        <CardDeck
          cards={cards}
          rankComplete={rankComplete}
          rankedOrder={rankedOrder}
        />
      )}
    </div>
  );
}
