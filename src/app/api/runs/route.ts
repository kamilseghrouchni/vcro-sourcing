import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

function getRepoRoot(): string {
  let dir = process.cwd();
  for (let i = 0; i < 10; i++) {
    if (fs.existsSync(path.join(dir, "store"))) return dir;
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return "/Users/kamilseghrouchni/Desktop/side-projects/vcro-ui-build";
}

function deriveStatus(runStateJson: unknown): "complete" | "running" | "crashed" {
  if (!runStateJson || typeof runStateJson !== "object") return "running";
  const rs = runStateJson as Record<string, unknown>;
  const phases = rs.phases;
  if (!phases || typeof phases !== "object") return "running";

  // phases is an object keyed by phase name, each value has a { status } field
  const statuses = Object.values(phases as Record<string, { status: string }>).map((p) => p.status);
  if (statuses.some((s) => s === "failed")) return "crashed";
  if (statuses.every((s) => s === "completed" || s === "skipped")) return "complete";
  return "running";
}

function deriveOneLiner(runId: string, root: string): string {
  const runDir = path.join(root, "store", "runs", runId);

  // Try endpoint_schema.json one_liner first
  try {
    const schemaPath = path.join(runDir, "endpoint_schema.json");
    if (fs.existsSync(schemaPath)) {
      const schema = JSON.parse(fs.readFileSync(schemaPath, "utf-8"));
      if (schema.one_liner) return schema.one_liner;
    }
  } catch {
    // ignore
  }

  // Fall back to request.json.original_text
  try {
    const reqPath = path.join(runDir, "request.json");
    if (fs.existsSync(reqPath)) {
      const req = JSON.parse(fs.readFileSync(reqPath, "utf-8"));
      if (req.original_text) return req.original_text.slice(0, 80);
    }
  } catch {
    // ignore
  }

  return runId;
}

export async function GET() {
  const root = getRepoRoot();
  const runsDir = path.join(root, "store", "runs");

  if (!fs.existsSync(runsDir)) {
    return NextResponse.json([]);
  }

  const entries = fs.readdirSync(runsDir, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .reverse(); // Most recent first (date-prefixed names sort correctly)

  const runs = entries.map((runId) => {
    let status: "complete" | "running" | "crashed" = "running";
    try {
      const statePath = path.join(runsDir, runId, "run_state.json");
      if (fs.existsSync(statePath)) {
        const runState = JSON.parse(fs.readFileSync(statePath, "utf-8"));
        status = deriveStatus(runState);
      }
    } catch {
      // ignore
    }

    return {
      runId,
      oneLiner: deriveOneLiner(runId, root),
      status,
    };
  });

  return NextResponse.json(runs);
}
