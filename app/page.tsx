import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { LandingForm } from "./LandingForm";

type Curated = { id: string; role: string; label: string; text: string; bundle_id: string; expected_difficulty: string };

type OpportunitySummary = {
  id: string;
  title: string;
  program: string;
  status: string;
  totals: { grand_total: number; currency: string; estimated_data_delivery: string };
  providers: { name: string }[];
  specimens_summary: { totals: { donors_total: number } };
};

function loadCurated(): Curated[] {
  const p = path.join(process.cwd(), "data", "enriched", "curated_queries.json");
  return JSON.parse(fs.readFileSync(p, "utf-8"));
}

function loadOpportunities(): OpportunitySummary[] {
  const dir = path.join(process.cwd(), "data", "opportunities");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf-8")) as OpportunitySummary);
}

const fmtUSD = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

export default function Page() {
  const curated = loadCurated();
  const opportunities = loadOpportunities();
  return (
    <main className="landing">
      <header className="landing-hd">
        <h1 className="serif brand-row">
          <img src="/crovi-logo.svg" alt="" className="brand-logo" />
          <span>Crovi</span>
        </h1>
      </header>

      <LandingForm curated={curated} />

      {opportunities.length > 0 && (
        <section className="opp-pinned">
          <span className="opp-pinned-lbl">Audited · ready to launch</span>
          <div className="opp-cards">
            {opportunities.map((o) => (
              <Link key={o.id} href={`/opportunity/${o.id}`} className="opp-card">
                <div className="opp-card-hd">
                  <span className="pill brand">Audit complete</span>
                  <span className="opp-card-program mono">{o.program}</span>
                </div>
                <h2 className="serif opp-card-title">{o.title}</h2>
                <div className="opp-card-meta">
                  <span><b>{o.specimens_summary.totals.donors_total}</b> donors</span>
                  <span className="opp-dot" />
                  <span><b>{o.providers.length}</b> providers · {o.providers.map((p) => p.name).join(" + ")}</span>
                  <span className="opp-dot" />
                  <span>{fmtUSD(o.totals.grand_total)} {o.totals.currency}</span>
                  <span className="opp-dot" />
                  <span>data by {o.totals.estimated_data_delivery}</span>
                </div>
                <span className="opp-card-cta">Open opportunity →</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <footer style={{ display: "flex", gap: 14, color: "var(--text-3)", fontSize: 11 }}>
        <span className="mono">486,754 specimens · 161,374 donors · 18 institutes</span>
        <span style={{ marginLeft: "auto" }} className="mono">MVP · curated demo set</span>
      </footer>
    </main>
  );
}
