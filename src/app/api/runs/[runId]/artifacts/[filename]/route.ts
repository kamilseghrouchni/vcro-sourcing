import { NextRequest, NextResponse } from "next/server";
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

const ALLOWED_FILES = new Set([
  "request.json",
  "run_state.json",
  "extracted_cohorts.json",
  "signal_summary.json",
  "access_summary.json",
  "ranking.json",
  "endpoint_schema.json",
  "contacts.json",
  "bundle_candidates.json",
  "cost_stack.json",
  "action_map.json",
]);

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ runId: string; filename: string }> }
) {
  const { runId, filename } = await params;

  if (!ALLOWED_FILES.has(filename)) {
    return NextResponse.json({ error: "Not allowed" }, { status: 403 });
  }

  // Guard against path traversal
  if (runId.includes("..") || filename.includes("..")) {
    return NextResponse.json({ error: "Invalid path" }, { status: 400 });
  }

  const root = getRepoRoot();
  const filePath = path.join(root, "store", "runs", runId, filename);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const content = fs.readFileSync(filePath, "utf-8");
  return new NextResponse(content, {
    headers: { "Content-Type": "application/json" },
  });
}
