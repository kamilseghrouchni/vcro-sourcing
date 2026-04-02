import path from "path";
import fs from "fs";

export type QueryType = "cohort" | "feasibility" | "provider" | "bounty";

interface EndpointSchema {
  run_id?: string;
  decision_axes?: Array<{ param: string; values: string[] }>;
  resolution?: { question?: { values: string[]; primary?: string } };
  card_type?: string;
  one_liner?: string;
}

/** Repo root — walk up from cwd to find store/ directory */
function getRepoRoot(): string {
  let dir = process.cwd();
  for (let i = 0; i < 10; i++) {
    if (fs.existsSync(path.join(dir, "store"))) return dir;
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  // Fallback: absolute path
  return "/Users/kamilseghrouchni/Desktop/side-projects/vcro-ui-build";
}

/**
 * Reads endpoint_schema.json for a run and returns the card type.
 * Falls back to "cohort" when the file is absent or axes are empty.
 */
export function resolveCards(runId: string): QueryType {
  try {
    const root = getRepoRoot();
    const schemaPath = path.join(root, "store", "runs", runId, "endpoint_schema.json");
    if (!fs.existsSync(schemaPath)) return "cohort";

    const schema: EndpointSchema = JSON.parse(fs.readFileSync(schemaPath, "utf-8"));

    // Explicit card_type field takes priority
    if (schema.card_type) {
      const ct = schema.card_type;
      if (ct === "cohort" || ct === "feasibility" || ct === "provider" || ct === "bounty") {
        return ct;
      }
    }

    // Derive from decision_axes
    const axes = schema.decision_axes ?? [];
    const questionAxis = axes.find((a) => a.param === "question");
    const values = questionAxis?.values ?? [];

    if (values.includes("bounty")) return "bounty";
    if (values.includes("proof_points") && !values.includes("sourcing")) return "feasibility";
    if (
      schema.run_id?.includes("provider") ||
      schema.run_id?.includes("platform")
    )
      return "provider";

    return "cohort";
  } catch {
    return "cohort";
  }
}

/** Read the endpoint_schema.json one_liner, falling back to request.json original_text */
export function resolveOneLiner(runId: string): string {
  try {
    const root = getRepoRoot();
    const schemaPath = path.join(root, "store", "runs", runId, "endpoint_schema.json");
    if (fs.existsSync(schemaPath)) {
      const schema: EndpointSchema = JSON.parse(fs.readFileSync(schemaPath, "utf-8"));
      if (schema.one_liner) return schema.one_liner;
    }
    // Fallback to request.json
    const requestPath = path.join(root, "store", "runs", runId, "request.json");
    if (fs.existsSync(requestPath)) {
      const req = JSON.parse(fs.readFileSync(requestPath, "utf-8"));
      if (req.original_text) return req.original_text;
    }
  } catch {
    // ignore
  }
  return runId;
}
