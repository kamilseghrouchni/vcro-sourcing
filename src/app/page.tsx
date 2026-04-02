"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useCallback } from "react";
import { RunFeed } from "@/components/layout/RunFeed";
import { OutputPanel } from "@/components/layout/OutputPanel";
import { QueryBar } from "@/components/layout/QueryBar";
import { Sidebar } from "@/components/session/Sidebar";

function AppShell() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const runId = searchParams.get("run") ?? null;

  const handleSelectRun = useCallback((id: string) => {
    router.push(`/?run=${id}`);
  }, [router]);

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: "var(--bg-warm)" }}>
      {/* Left — Run Feed + Sidebar (dark terminal, 38%) */}
      <div
        className="flex-none w-[38%] flex overflow-hidden"
        style={{ background: "var(--feed-bg)" }}
      >
        <Sidebar activeRunId={runId} onSelectRun={handleSelectRun} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <RunFeed runId={runId} />
        </div>
      </div>

      {/* Right — Output Panel (warm light, 62%) */}
      <div
        className="flex-1 flex flex-col overflow-hidden"
        style={{ background: "var(--bg-warm)", borderLeft: "1px solid var(--border)" }}
      >
        <OutputPanel runId={runId} />
      </div>

      {/* QueryBar — fixed bottom, full width */}
      <QueryBar />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense>
      <AppShell />
    </Suspense>
  );
}
