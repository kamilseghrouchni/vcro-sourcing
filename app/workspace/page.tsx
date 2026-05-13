"use client";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { QuerySpecimensResult, InstituteEntry } from "@/lib/tools/query_specimens";
import type { FindPublicationsResult } from "@/lib/tools/find_publications";
import { EventLog } from "@/components/ChatRail/EventLog";
import { RankedList } from "@/components/Outcome/RankedList";
import { InstituteDetail } from "@/components/Outcome/InstituteDetail";
import { SecondaryStack } from "@/components/Outcome/SecondaryStack";
import { SpecimensTable } from "@/components/Outcome/SpecimensTable";
import { SpecimenDrawer } from "@/components/Outcome/SpecimenDrawer";
import { ProspectiveList } from "@/components/Outcome/ProspectiveList";
import { ProspectiveDetail } from "@/components/Outcome/ProspectiveDetail";
import type { SpecimenRow } from "@/lib/tools/query_specimens";
import type { ProspectiveCard } from "@/lib/prospective";
import type { ParseResult, ClarifierAnswer } from "@/app/api/parse/types";
import { ParsedRequest } from "@/components/Understand/ParsedRequest";
import { Clarifiers } from "@/components/Understand/Clarifiers";
import { RunningView } from "@/components/Running/RunningView";
import { HandoffModal } from "@/components/Handoff/HandoffModal";

type Step = "parse" | "clarify" | "running" | "results";

export default function WorkspacePage() {
  return (
    <Suspense fallback={null}>
      <WorkspacePageContent />
    </Suspense>
  );
}

function WorkspacePageContent() {
  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/agent" }),
  });

  const [step, setStep] = useState<Step>("parse");
  const [rawQuery, setRawQuery] = useState<string>("");
  const [parsed, setParsed] = useState<ParseResult | null>(null);
  const [parseError, setParseError] = useState<string | null>(null);
  const [answers, setAnswers] = useState<ClarifierAnswer[]>([]);
  const [runStartedAt, setRunStartedAt] = useState<number>(0);
  const startedParse = useRef(false);

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedProspectiveId, setSelectedProspectiveId] = useState<string | null>(null);
  const [autoSelected, setAutoSelected] = useState<string | null>(null);
  const [view, setView] = useState<"institute" | "table">("institute");
  const [drawerRow, setDrawerRow] = useState<SpecimenRow | null>(null);
  const [handoffOpen, setHandoffOpen] = useState(false);
  const [handoffSource, setHandoffSource] = useState<"banked" | "prospective" | null>(null);
  const [restoredQuery, setRestoredQuery] = useState<QuerySpecimensResult | null>(null);
  const [prospective, setProspective] = useState<ProspectiveCard[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryParam = searchParams.get("q");
  const tParam = searchParams.get("t"); // nonce — changes per run so the effect re-fires
  const lastRunKey = useRef<string | null>(null);

  // Step 1: read the initial query and parse it. The query is passed via the
  // ?q= URL param (with a ?t= nonce so re-clicking the same chip still re-parses).
  // If there's no ?q=, try to restore the prior session from the stashed bundle
  // ctx so back-from-bundle doesn't loop on an empty parse step.
  useEffect(() => {
    // Legacy fallback: an older flow may have stashed the query in sessionStorage.
    const stashedInitial = typeof window !== "undefined" ? sessionStorage.getItem("crovi_initial_query") : null;
    const initial = queryParam ?? stashedInitial;
    if (initial) {
      const runKey = `${initial}::${tParam ?? ""}`;
      if (lastRunKey.current === runKey) return;
      lastRunKey.current = runKey;
      if (stashedInitial) sessionStorage.removeItem("crovi_initial_query");
      startedParse.current = true;
      setRawQuery(initial);
      setParsed(null);
      setParseError(null);
      setAnswers([]);
      setRestoredQuery(null);
      setRunComplete(false);
      setStep("parse");
      parseQuery(initial)
        .then((p) => {
          setParsed(p);
          setStep("clarify");
        })
        .catch((e) => {
          setParseError(e?.message ?? String(e));
          setStep("clarify");
        });
      return;
    }
    // First mount with no q param — try restoring from bundle ctx.
    if (startedParse.current) return;
    const stashed = sessionStorage.getItem("crovi_bundle_ctx");
    if (stashed) {
      try {
        const ctx = JSON.parse(stashed) as { rawQuery?: string; parsed?: ParseResult | null; result?: QuerySpecimensResult | null };
        if (ctx.result) {
          startedParse.current = true;
          if (ctx.rawQuery) setRawQuery(ctx.rawQuery);
          if (ctx.parsed) setParsed(ctx.parsed);
          setRestoredQuery(ctx.result);
          setRunComplete(true);
          setStep("results");
          return;
        }
      } catch {
        // fall through to empty clarify
      }
    }
    setStep("clarify");
  }, [queryParam, tParam]);

  // Step 3 → 4: when first query_specimens output lands, hold the running view
  // briefly so the deliver beat is visible, then transition.
  const { latestQuery: streamedQuery, latestPubs, firstUserText } = useMemo(() => deriveState(messages), [messages]);
  const latestQuery: QuerySpecimensResult | null = streamedQuery ?? restoredQuery;
  const institutes: InstituteEntry[] = latestQuery?.institutes ?? [];
  const isStreaming = status === "streaming" || status === "submitted";
  const [runComplete, setRunComplete] = useState(false);

  useEffect(() => {
    if (step !== "running") return;
    if (!latestQuery || isStreaming) return;
    setRunComplete(true);
  }, [step, latestQuery, isStreaming]);

  // Auto-select top institute on first results
  useEffect(() => {
    if (!institutes.length) return;
    if (selectedId && institutes.find((i) => i.organization_id === selectedId)) return;
    if (autoSelected !== institutes[0].organization_id) {
      setSelectedId(institutes[0].organization_id);
      setAutoSelected(institutes[0].organization_id);
    }
  }, [institutes, selectedId, autoSelected]);

  // Fetch prospective partners once we hit the results step. Ranked against the
  // user's query so the most relevant one floats up.
  useEffect(() => {
    if (step !== "results") return;
    if (prospective.length > 0) return;
    const q = rawQuery || firstUserText || "";
    fetch(`/api/prospective?q=${encodeURIComponent(q)}`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.statusText)))
      .then((data) => setProspective(data.cards ?? []))
      .catch(() => setProspective([]));
  }, [step, prospective.length, rawQuery, firstUserText]);

  const selected = institutes.find((i) => i.organization_id === selectedId) ?? null;
  const selectedProspective = prospective.find((p) => p.id === selectedProspectiveId) ?? null;

  function selectBanked(id: string | null) {
    setSelectedId(id);
    if (id) setSelectedProspectiveId(null);
  }
  function selectProspective(id: string | null) {
    setSelectedProspectiveId(id);
    if (id) setSelectedId(null);
  }

  function launch() {
    if (!parsed) return;
    const finalText = composeFinalText(rawQuery, parsed, answers);
    setRunStartedAt(Date.now());
    setStep("running");
    sendMessage({ text: finalText }, { body: { parsedFilters: parsed.filters } });
  }

  // Reflow when running but no parsed (e.g., direct nav typing in composer post-results)
  if (step === "parse" || (step === "clarify" && !parsed && !parseError)) {
    return (
      <div className="ws">
        <header className="ws-top">
          <div className="lead">
            <div className="status-line">
              <span className="status">
                <span className="live-dot" />
                Reading your request
              </span>
              <span className="thread-id">CROVI · PARSE</span>
            </div>
            {rawQuery && <h1 className="req-title serif">{rawQuery}</h1>}
          </div>
        </header>
        <main className="step-main">
          <div className="parse-loader">
            <div className="parse-loader-bar" />
            <div className="parse-loader-text mono">Parsing — pulling out indication, specimen, format…</div>
          </div>
        </main>
      </div>
    );
  }

  if (step === "clarify") {
    return (
      <div className="ws">
        <header className="ws-top">
          <div className="lead">
            <div className="status-line">
              <span className="status">Clarify before sourcing</span>
              <span className="thread-id">CROVI · STEP 1 OF 2</span>
            </div>
            {rawQuery && <h1 className="req-title serif">{rawQuery}</h1>}
            {parseError && <div className="parse-error mono-sm">PARSE ERROR · {parseError}</div>}
          </div>
        </header>

        <main className="step-main clarify-grid">
          {parsed && (
            <>
              <section className="clarify-left">
                <ParsedRequest
                  parsed={parsed}
                  rawQuery={rawQuery}
                  onAssaysChange={(assays) => setParsed({ ...parsed, assays })}
                  action={
                    <button className="btn-o" onClick={() => history.back()}>← Edit request</button>
                  }
                />
              </section>
              <section className="clarify-right">
                <Clarifiers
                  clarifiers={parsed.clarifiers}
                  onAnswersChange={setAnswers}
                  action={
                    <button className="btn-p brand" onClick={launch}>Run search →</button>
                  }
                />
              </section>
            </>
          )}
          {!parsed && (
            <div className="parse-empty">
              <p>No request to parse. Go back to the home page and start one.</p>
            </div>
          )}
        </main>
      </div>
    );
  }

  if (step === "running" && parsed) {
    return (
      <div className="ws">
        <header className="ws-top">
          <div className="lead">
            <div className="status-line">
              <span className="status">
                {!runComplete && <span className="live-dot" />}
                {runComplete ? "Sourcing complete" : "Sourcing"}
              </span>
              <span className="thread-id">CROVI · STEP 2 OF 2</span>
            </div>
            {rawQuery && <h1 className="req-title serif">{rawQuery}</h1>}
          </div>
          {runComplete && (
            <div className="actions">
              <button className="btn-p brand" onClick={() => setStep("results")}>
                View results →
              </button>
            </div>
          )}
        </header>
        <main className="step-main">
          <RunningView
            parsed={parsed}
            messages={messages}
            startedAt={runStartedAt}
            done={runComplete}
          />
        </main>
      </div>
    );
  }

  // results step (existing layout)
  return (
    <div className="ws">
      <header className="ws-top">
        <div className="lead">
          <div className="status-line">
            <span className="status">
              {isStreaming ? <span className="live-dot" /> : null}
              {isStreaming ? "Run in progress" : "Run complete"}
            </span>
          </div>
          {(firstUserText || rawQuery) && <h1 className="req-title serif">{rawQuery || firstUserText}</h1>}
          {latestQuery && (
            <div className="meta">
              <span>
                <strong>{latestQuery.totals.institutes}</strong> from the bank
              </span>
              {prospective.length > 0 && (
                <span>
                  <strong>{prospective.length}</strong> prospective partners
                </span>
              )}
              <span className="meta-sep">·</span>
              <span>{latestQuery.totals.specimens.toLocaleString()} specimens</span>
              <span>{latestQuery.totals.donors.toLocaleString()} donors</span>
              {latestQuery.totals.longitudinal_donors > 0 && <span>{latestQuery.totals.longitudinal_donors.toLocaleString()} longitudinal</span>}
            </div>
          )}
        </div>
        {latestQuery && (
          <div className="actions">
            <div className="view-toggle">
              <button className={view === "institute" ? "on" : ""} onClick={() => setView("institute")}>By institute</button>
              <button className={view === "table" ? "on" : ""} onClick={() => setView("table")}>Table view</button>
            </div>
            <button
              className="btn-p brand handoff-cta"
              onClick={() => {
                sessionStorage.setItem(
                  "crovi_bundle_ctx",
                  JSON.stringify({
                    rawQuery: rawQuery || firstUserText,
                    parsed,
                    result: latestQuery,
                  }),
                );
                router.push("/workspace/bundle");
              }}
            >
              Build bundle →
            </button>
          </div>
        )}
      </header>

      <div className="ws-body">
        {view === "institute" && (
          <aside className="rail">
            <RailContent
              institutes={institutes}
              selectedId={selectedId}
              onSelect={selectBanked}
              prospective={prospective}
              selectedProspectiveId={selectedProspectiveId}
              onSelectProspective={selectProspective}
              messages={messages}
              error={error}
              isStreaming={isStreaming}
            />
          </aside>
        )}

        <main className="detail" style={view === "table" ? { gridColumn: "1 / span 2" } : undefined}>
          {view === "table" && latestQuery ? (
            <section className="det-section" style={{ paddingTop: 0, borderBottom: 0 }}>
              <div className="sect-lbl">Matching specimens · table</div>
              <SpecimensTable data={latestQuery} onOpen={setDrawerRow} />
            </section>
          ) : selectedProspective ? (
            <ProspectiveDetail
              card={selectedProspective}
              onAddToHandoff={() => {
                setHandoffSource("prospective");
                setHandoffOpen(true);
              }}
            />
          ) : selected ? (
            <InstituteDetail
              inst={selected}
              query={latestQuery!}
              pubs={latestPubs ?? null}
              onHandoff={() => {
                setHandoffSource("banked");
                setHandoffOpen(true);
              }}
              onOpenSpecimen={setDrawerRow}
            />
          ) : (
            <SecondaryStack messages={messages} onUserIntent={(intent) => handleIntent(intent, sendMessage)} />
          )}
        </main>
      </div>

      {drawerRow && (
        <SpecimenDrawer
          row={drawerRow}
          instituteName={institutes.find((i) => i.organization_id === drawerRow.organization_id)?.name}
          onClose={() => setDrawerRow(null)}
        />
      )}

      <HandoffModal
        open={handoffOpen}
        onClose={() => {
          setHandoffOpen(false);
          setHandoffSource(null);
        }}
        rawQuery={rawQuery || firstUserText}
        parsed={parsed}
        result={latestQuery}
        prospective={handoffSource === "prospective" ? selectedProspective : null}
        bankedInstitute={handoffSource === "banked" ? selected : null}
      />
    </div>
  );
}

async function parseQuery(query: string): Promise<ParseResult> {
  const r = await fetch("/api/parse", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ query }),
  });
  if (!r.ok) throw new Error(`parse failed: ${r.status}`);
  return r.json();
}

function composeFinalText(rawQuery: string, parsed: ParseResult, answers: ClarifierAnswer[]): string {
  const addOns: string[] = [];
  for (const a of answers) {
    const c = parsed.clarifiers.find((x) => x.id === a.id);
    if (!c) continue;
    if (a.value === null && !a.custom_text) continue; // skipped
    if (a.custom_text) {
      addOns.push(`${c.question} → ${a.custom_text}`);
      continue;
    }
    // Translate the answer into instructional text
    const v = a.value;
    if (c.target_field === "min_n" && typeof v === "number") {
      addOns.push(`Need at least ${v} samples.`);
    } else if (c.target_field === "has_contact_email" && typeof v === "boolean") {
      if (v) addOns.push("Only include institutes with a direct contact email.");
    } else if (c.target_field === "treatment_status") {
      if (v === "naive") addOns.push("Treatment-naive donors only.");
    } else if (c.target_field === "countries") {
      if (v === "USA") addOns.push("USA only.");
      else if (v === "non-USA") addOns.push("Outside USA only.");
    }
  }
  // Assays are intentionally NOT appended here — they're a downstream concern
  // (bundle step picks providers per assay). Adding them to the search prompt
  // re-feeds the LLM and shifts the institute filters, so the institute list
  // would change every time the user added or removed an assay.
  if (!addOns.length) return rawQuery;
  return `${rawQuery}\n\n${addOns.join(" ")}`;
}

function RailContent({
  institutes,
  selectedId,
  onSelect,
  prospective,
  selectedProspectiveId,
  onSelectProspective,
  messages,
  error,
  isStreaming,
}: {
  institutes: InstituteEntry[];
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  prospective: ProspectiveCard[];
  selectedProspectiveId: string | null;
  onSelectProspective: (id: string | null) => void;
  messages: UIMessage[];
  error?: Error | undefined;
  isStreaming: boolean;
}) {
  const [tab, setTab] = useState<"bank" | "prospective">("bank");
  const [eventsOpen, setEventsOpen] = useState(false);
  useEffect(() => {
    if (institutes.length > 0 && !isStreaming) setTab("bank");
  }, [isStreaming, institutes.length]);
  useEffect(() => {
    if (selectedProspectiveId) setTab("prospective");
  }, [selectedProspectiveId]);
  return (
    <>
      <div className="rail-switcher">
        <button
          className={`rs-btn ${tab === "bank" ? "on" : ""}`}
          onClick={() => setTab("bank")}
        >
          <span className="rs-label">From the bank</span>
          <span className="rs-count">{institutes.length}</span>
        </button>
        <button
          className={`rs-btn ${tab === "prospective" ? "on" : ""}`}
          onClick={() => setTab("prospective")}
        >
          <span className="rs-label">Prospective</span>
          <span className="rs-count">{prospective.length}</span>
        </button>
      </div>
      <div className="rail-body">
        {tab === "bank" ? (
          <RankedList institutes={institutes} selectedId={selectedId} onSelect={onSelect} />
        ) : (
          <ProspectiveList
            cards={prospective}
            selectedId={selectedProspectiveId}
            onSelect={onSelectProspective}
          />
        )}
      </div>
      <div className="rail-foot">
        <button className="rail-foot-link" onClick={() => setEventsOpen((o) => !o)}>
          {eventsOpen ? "Hide" : "Show"} activity log · {messages.length}
        </button>
        {eventsOpen && (
          <div className="rail-events">
            <EventLog messages={messages} error={error} streaming={isStreaming} />
          </div>
        )}
      </div>
    </>
  );
}

function handleIntent(intent: string, sendMessage: (m: { text: string }) => void) {
  if (intent.startsWith("dismiss:")) return;
  if (intent === "open_request_form:source_wider") return sendMessage({ text: "Open a request form for broader sourcing." });
  if (intent === "open_request_form:audit_deeper") return sendMessage({ text: "Open an audit-deeper request form." });
  if (intent === "filter:has_contact_email=true") return sendMessage({ text: "Drop institutes without contact emails." });
  if (intent === "find_publications") return sendMessage({ text: "Look up curated literature for this." });
}

function deriveState(messages: UIMessage[]): {
  latestQuery: QuerySpecimensResult | null;
  latestPubs: FindPublicationsResult | null;
  firstUserText: string;
} {
  let latestQuery: QuerySpecimensResult | null = null;
  let latestPubs: FindPublicationsResult | null = null;
  let firstUserText = "";
  for (const m of messages) {
    if (m.role === "user" && !firstUserText) {
      firstUserText = (m.parts ?? []).filter((p: any) => p.type === "text").map((p: any) => p.text).join(" ").trim();
    }
    if (m.role !== "assistant") continue;
    for (const p of (m.parts ?? []) as any[]) {
      if (!p.type?.startsWith("tool-") || !p.output) continue;
      const toolName = p.type.replace("tool-", "");
      if (toolName === "query_specimens") latestQuery = p.output;
      if (toolName === "find_publications") latestPubs = p.output;
    }
  }
  return { latestQuery, latestPubs, firstUserText };
}
