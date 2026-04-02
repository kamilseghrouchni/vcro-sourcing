"use client";

import { useEffect, useState } from "react";
import { CohortCard } from "./CohortCard";
import { CardExpanded } from "./CardExpanded";
import type { CohortCardData } from "@/types/cards";
import { resolveZelij } from "@/lib/layout/resolveZelij";

interface CardDeckProps {
  cards: CohortCardData[];
  rankComplete: boolean;
  rankedOrder?: string[]; // cohortId order from ranking.json — applied when rankComplete fires
}

// Derive edge color from zelij dominant hue for a cohortId
function edgeColor(cohortId: string, rank: number): string {
  const p = resolveZelij(cohortId, "high");
  if (p.ellipses.length === 0) return "var(--brand-vivid)";
  const hue = p.ellipses[0].hsl[0];
  // Fade opacity by rank position (front card full opacity, back cards dimmer)
  const opacity = Math.max(0.15, 0.7 - rank * 0.12);
  return `hsla(${hue}, 70%, 50%, ${opacity})`;
}

export function CardDeck({ cards: initialCards, rankComplete, rankedOrder }: CardDeckProps) {
  const [cards, setCards] = useState(initialCards);
  const [activeIdx, setActiveIdx] = useState(0);
  const [expandedCard, setExpandedCard] = useState<CohortCardData | null>(null);
  const [reordering, setReordering] = useState(false);

  // Update cards when prop changes (new extractions arrive)
  useEffect(() => {
    setCards(initialCards);
  }, [initialCards]);

  // Reorder when rankComplete fires
  useEffect(() => {
    if (!rankComplete || !rankedOrder || rankedOrder.length === 0) return;
    setReordering(true);
    setTimeout(() => {
      setCards((prev) => {
        const ordered: CohortCardData[] = [];
        for (const id of rankedOrder) {
          const c = prev.find((c) => c.cohortId === id);
          if (c) ordered.push(c);
        }
        // Append any cards not in rankedOrder
        for (const c of prev) {
          if (!ordered.find((o) => o.cohortId === c.cohortId)) ordered.push(c);
        }
        return ordered;
      });
      setActiveIdx(0);
      setReordering(false);
    }, 400);
  }, [rankComplete, rankedOrder]);

  if (expandedCard) {
    return (
      <CardExpanded
        data={expandedCard}
        intelligenceDimensions={["Longitudinal", "LC-MS", "Open Access", "Replicated"]}
        onBack={() => setExpandedCard(null)}
      />
    );
  }

  if (cards.length === 0) {
    return (
      <div
        className="px-6 py-8"
        style={{ color: "var(--text-faint)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}
      >
        Assembling cards...
      </div>
    );
  }

  return (
    <div className="px-6 py-4">
      {/* Active card */}
      <div
        style={{
          transition: reordering ? "opacity 400ms ease" : undefined,
          opacity: reordering ? 0.4 : 1,
        }}
      >
        <CohortCard
          data={cards[activeIdx]}
          onClick={() => setExpandedCard(cards[activeIdx])}
        />
      </div>

      {/* Stack navigation — colored edge tabs */}
      {cards.length > 1 && (
        <div className="flex gap-2 mt-3">
          {cards.map((card, i) => (
            <button
              key={card.cohortId}
              onClick={() => setActiveIdx(i)}
              style={{
                height: "4px",
                flex: 1,
                borderRadius: "2px",
                border: "none",
                background: i === activeIdx ? "var(--brand-primary)" : edgeColor(card.cohortId, i),
                cursor: "pointer",
                transition: "background 300ms ease",
              }}
              aria-label={`View ${card.cohortName}`}
            />
          ))}
        </div>
      )}

      {/* Card counter */}
      <p
        className="mt-2 text-center"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.65rem",
          color: "var(--text-faint)",
        }}
      >
        {activeIdx + 1} / {cards.length}
        {rankComplete && (
          <span style={{ color: "var(--accent-confirm)", marginLeft: "0.5rem" }}>✓ ranked</span>
        )}
      </p>
    </div>
  );
}
