"use client";

import { useEffect, useState } from "react";
import "./ThinkingSpinner.css";

const VERBS = [
  "Frolicking",
  "Undulating",
  "Ruminating",
  "Cogitating",
  "Percolating",
  "Meandering",
  "Oscillating",
  "Deliberating",
  "Contemplating",
  "Marinating",
  "Germinating",
  "Unfurling",
  "Simmering",
  "Wandering",
  "Synthesizing",
  "Triangulating",
];

const GLYPHS = ["✻", "◆", "⬡", "✦", "◈", "⟳"];

export function ThinkingSpinner({ label }: { label?: string }) {
  const [verbIndex, setVerbIndex] = useState(0);
  const [glyphIndex, setGlyphIndex] = useState(0);
  const [dots, setDots] = useState(1);

  useEffect(() => {
    const verbTimer = setInterval(() => {
      setVerbIndex((i) => (i + 1) % VERBS.length);
    }, 2000);

    const glyphTimer = setInterval(() => {
      setGlyphIndex((i) => (i + 1) % GLYPHS.length);
    }, 150);

    const dotTimer = setInterval(() => {
      setDots((d) => (d % 3) + 1);
    }, 400);

    return () => {
      clearInterval(verbTimer);
      clearInterval(glyphTimer);
      clearInterval(dotTimer);
    };
  }, []);

  const verb = label ?? VERBS[verbIndex];
  const glyph = GLYPHS[glyphIndex];
  const ellipsis = ".".repeat(dots);

  return (
    <span className="thinking-spinner">
      <span className="glyph">{glyph}</span>{" "}
      <span className="verb">{verb}</span>
      <span className="dots">{ellipsis}</span>
    </span>
  );
}
