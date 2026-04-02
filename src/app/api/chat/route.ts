import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { execFileSync } from "child_process";

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

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "_")
    .slice(0, 40);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const userText: string = body.text ?? body.messages?.slice(-1)[0]?.text ?? "";

  if (!userText.trim()) {
    return NextResponse.json({ error: "Empty query" }, { status: 400 });
  }

  const root = getRepoRoot();
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const runId = `${date}_${slugify(userText)}`;
  const runDir = path.join(root, "store", "runs", runId);

  fs.mkdirSync(runDir, { recursive: true });

  const requestJson = {
    run_id: runId,
    original_text: userText,
    created_at: new Date().toISOString(),
  };
  fs.writeFileSync(path.join(runDir, "request.json"), JSON.stringify(requestJson, null, 2));

  // Initialise run state
  try {
    execFileSync("python3", [
      path.join(root, "scripts", "run_state.py"),
      runDir,
      "init",
      path.join(runDir, "request.json"),
    ], { cwd: root });
  } catch {
    // run_state.py may not exist in all environments — continue without it
  }

  return NextResponse.json({ runId });
}
