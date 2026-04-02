interface PhaseLabelProps {
  name: string;
}

export function PhaseLabel({ name }: PhaseLabelProps) {
  return (
    <div
      className="flex items-center gap-2 px-4 py-1"
      style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--feed-secondary)" }}
    >
      <span>⟳</span>
      <span>phase</span>
      <span style={{ color: "var(--feed-text)" }}>{name}</span>
    </div>
  );
}
