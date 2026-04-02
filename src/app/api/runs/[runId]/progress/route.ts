import { NextRequest } from "next/server";
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

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ runId: string }> }
) {
  const { runId } = await params;
  const root = getRepoRoot();
  const progressPath = path.join(root, "store", "runs", runId, "progress.jsonl");

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      const send = (data: string) => {
        controller.enqueue(encoder.encode(`data: ${data}\n\n`));
      };

      if (!fs.existsSync(progressPath)) {
        send(JSON.stringify({ event: "error", message: `No progress.jsonl for run ${runId}` }));
        controller.close();
        return;
      }

      // Stream lines with a small delay to simulate real-time
      const content = fs.readFileSync(progressPath, "utf-8");
      const lines = content.split("\n").filter((l) => l.trim());

      for (const line of lines) {
        try {
          JSON.parse(line); // validate it's valid JSON
          send(line);
          // Small delay between events for realistic streaming feel
          await new Promise((r) => setTimeout(r, 120));
        } catch {
          // skip malformed lines
        }
      }

      // Send done signal
      send(JSON.stringify({ event: "done", message: "Stream complete" }));
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
