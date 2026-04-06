#!/usr/bin/env python3
"""
ct_convert.py — ClinicalTrials.gov v2 API to raw/trials/{NCTID}/{source.json,trial.md,meta.json}.

Faithful conversion. No filtering, no scoring. The compiler does the
intelligence work; this script just produces clean structured artifacts.

Usage:
  python3 scripts/ct_convert.py --nct_ids NCT00676143 [NCT...] --out store/raw/trials
  python3 scripts/ct_convert.py --nct_file ncts.txt --out store/raw/trials
"""

import argparse
import json
import os
import sys
import urllib.request
from datetime import datetime, timezone

BASE = "https://clinicaltrials.gov/api/v2/studies"
HEADERS = {"Accept": "application/json", "User-Agent": "vcro-v2/1.0"}


def fetch(nct_id: str) -> dict:
    url = f"{BASE}/{nct_id}"
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.loads(r.read())


def get(d, *path, default=""):
    cur = d
    for p in path:
        if not isinstance(cur, dict) or p not in cur:
            return default
        cur = cur[p]
    return cur if cur is not None else default


def extract_meta(study: dict) -> dict:
    p = study.get("protocolSection", {})
    ident = p.get("identificationModule", {})
    status = p.get("statusModule", {})
    sponsor = p.get("sponsorCollaboratorsModule", {})
    desc = p.get("descriptionModule", {})
    cond = p.get("conditionsModule", {})
    design = p.get("designModule", {})
    arms = p.get("armsInterventionsModule", {})
    eligibility = p.get("eligibilityModule", {})
    contacts = p.get("contactsLocationsModule", {})
    outcomes = p.get("outcomesModule", {})
    ipd = p.get("ipdSharingStatementModule", {})
    oversight = p.get("oversightModule", {})

    biospec = design.get("bioSpec", {})
    enroll = design.get("enrollmentInfo", {})

    facilities = []
    for loc in contacts.get("locations", []) or []:
        facilities.append({
            "name": loc.get("facility", ""),
            "city": loc.get("city", ""),
            "state": loc.get("state", ""),
            "country": loc.get("country", ""),
            "status": loc.get("status", ""),
        })

    overall_officials = contacts.get("overallOfficials", []) or []
    lead_pi = {}
    for o in overall_officials:
        if "PRINCIPAL_INVESTIGATOR" in (o.get("role") or ""):
            lead_pi = {
                "name": o.get("name", ""),
                "affiliation": o.get("affiliation", ""),
            }
            break

    primary = []
    for om in outcomes.get("primaryOutcomes", []) or []:
        primary.append({
            "measure": om.get("measure", ""),
            "description": om.get("description", ""),
            "timeFrame": om.get("timeFrame", ""),
        })
    secondary = []
    for om in outcomes.get("secondaryOutcomes", []) or []:
        secondary.append({
            "measure": om.get("measure", ""),
            "description": om.get("description", ""),
            "timeFrame": om.get("timeFrame", ""),
        })

    meta = {
        "nct_id": ident.get("nctId", ""),
        "title": ident.get("officialTitle") or ident.get("briefTitle") or "",
        "brief_title": ident.get("briefTitle", ""),
        "status": status.get("overallStatus", ""),
        "phase": ", ".join(design.get("phases", []) or []) or "N/A",
        "study_type": design.get("studyType", ""),
        "enrollment": (enroll.get("count") if isinstance(enroll, dict) else None),
        "enrollment_type": (enroll.get("type") if isinstance(enroll, dict) else ""),
        "conditions": cond.get("conditions", []) or [],
        "keywords": cond.get("keywords", []) or [],
        "sponsor": get(sponsor, "leadSponsor", "name"),
        "sponsor_class": get(sponsor, "leadSponsor", "class"),
        "collaborators": [c.get("name", "") for c in sponsor.get("collaborators", []) or []],
        "lead_pi": lead_pi,
        "start_date": get(status, "startDateStruct", "date"),
        "completion_date": get(status, "completionDateStruct", "date"),
        "primary_completion_date": get(status, "primaryCompletionDateStruct", "date"),
        "biospecimen_retention": biospec.get("retention", ""),
        "biospecimen_description": biospec.get("description", ""),
        "ipd_sharing": ipd.get("ipdSharing", ""),
        "ipd_sharing_description": ipd.get("description", ""),
        "ipd_sharing_url": ipd.get("url", ""),
        "ipd_sharing_info_types": ipd.get("infoTypes", []) or [],
        "facilities": facilities,
        "facilities_count": len(facilities),
        "eligibility_criteria": eligibility.get("eligibilityCriteria", ""),
        "eligibility_min_age": eligibility.get("minimumAge", ""),
        "eligibility_max_age": eligibility.get("maximumAge", ""),
        "eligibility_sex": eligibility.get("sex", ""),
        "eligibility_healthy_volunteers": eligibility.get("healthyVolunteers", False),
        "primary_outcomes": primary,
        "secondary_outcomes": secondary,
        "has_results": bool(study.get("resultsSection")),
        "fda_regulated_drug": oversight.get("isFdaRegulatedDrug", False),
        "fda_regulated_device": oversight.get("isFdaRegulatedDevice", False),
        "brief_summary": desc.get("briefSummary", ""),
        "detailed_description": desc.get("detailedDescription", ""),
        "interventions": [
            {"type": i.get("type", ""), "name": i.get("name", ""), "description": i.get("description", "")}
            for i in arms.get("interventions", []) or []
        ],
        "converted_at": datetime.now(timezone.utc).isoformat(),
    }
    return meta


def yaml_value(v):
    if v is None or v == "":
        return '""'
    if isinstance(v, (int, float, bool)):
        return str(v).lower() if isinstance(v, bool) else str(v)
    s = str(v).replace("\\", "\\\\").replace('"', '\\"').replace("\n", " ")
    return f'"{s}"'


def render_trial_md(meta: dict) -> str:
    lines = ["---"]
    for k in ("nct_id", "title", "status", "phase", "enrollment", "sponsor",
              "start_date", "completion_date", "biospecimen_retention"):
        lines.append(f"{k}: {yaml_value(meta.get(k))}")
    if meta.get("lead_pi", {}).get("name"):
        lines.append(f"lead_pi: {yaml_value(meta['lead_pi']['name'])}")
    lines.append("---")
    lines.append("")
    lines.append(f"# {meta.get('nct_id', '')}: {meta.get('brief_title') or meta.get('title', '')}")
    lines.append("")

    if meta.get("brief_summary"):
        lines += ["## Purpose", "", meta["brief_summary"], ""]

    if meta.get("detailed_description"):
        lines += ["## Detailed Description", "", meta["detailed_description"], ""]

    if meta.get("conditions"):
        lines += ["## Conditions", "", ", ".join(meta["conditions"]), ""]

    if meta.get("interventions"):
        lines += ["## Interventions", ""]
        for i in meta["interventions"]:
            lines.append(f"- **{i['type']}**: {i['name']}")
            if i.get("description"):
                lines.append(f"  - {i['description']}")
        lines.append("")

    elig = []
    if meta.get("eligibility_min_age") or meta.get("eligibility_max_age"):
        elig.append(f"**Age:** {meta.get('eligibility_min_age', '')} to {meta.get('eligibility_max_age', '')}")
    if meta.get("eligibility_sex"):
        elig.append(f"**Sex:** {meta['eligibility_sex']}")
    if meta.get("eligibility_criteria"):
        elig += ["**Criteria:**", "", meta["eligibility_criteria"]]
    if elig:
        lines += ["## Eligibility", ""] + elig + [""]

    if meta.get("biospecimen_description") or meta.get("biospecimen_retention"):
        lines += ["## Biospecimen", ""]
        if meta.get("biospecimen_retention"):
            lines.append(f"**Retention:** {meta['biospecimen_retention']}")
        if meta.get("biospecimen_description"):
            lines.append("")
            lines.append(meta["biospecimen_description"])
        lines.append("")

    if meta.get("primary_outcomes") or meta.get("secondary_outcomes"):
        lines += ["## Outcomes", ""]
        if meta.get("primary_outcomes"):
            lines.append("### Primary")
            for o in meta["primary_outcomes"]:
                lines.append(f"- **{o['measure']}** ({o.get('timeFrame', '')})")
                if o.get("description"):
                    lines.append(f"  - {o['description']}")
        if meta.get("secondary_outcomes"):
            lines.append("")
            lines.append("### Secondary")
            for o in meta["secondary_outcomes"]:
                lines.append(f"- **{o['measure']}** ({o.get('timeFrame', '')})")
                if o.get("description"):
                    lines.append(f"  - {o['description']}")
        lines.append("")

    if meta.get("facilities"):
        lines += ["## Facilities", "", "| Facility | City | State | Country | Status |", "|---|---|---|---|---|"]
        for f in meta["facilities"]:
            lines.append(f"| {f['name']} | {f['city']} | {f.get('state','')} | {f['country']} | {f.get('status','')} |")
        lines.append("")

    if meta.get("ipd_sharing"):
        lines += ["## IPD Sharing", "",
                  f"**Plan:** {meta['ipd_sharing']}"]
        if meta.get("ipd_sharing_info_types"):
            lines.append(f"**Info types:** {', '.join(meta['ipd_sharing_info_types'])}")
        if meta.get("ipd_sharing_url"):
            lines.append(f"**URL:** {meta['ipd_sharing_url']}")
        if meta.get("ipd_sharing_description"):
            lines.append("")
            lines.append(meta["ipd_sharing_description"])
        lines.append("")

    lines += ["## Sponsor and Collaborators", "",
              f"**Lead:** {meta.get('sponsor', '')} ({meta.get('sponsor_class', '')})"]
    if meta.get("collaborators"):
        lines.append(f"**Collaborators:** {', '.join(meta['collaborators'])}")
    lines.append("")

    return "\n".join(lines).rstrip() + "\n"


def convert(nct_id: str, out_dir: str) -> dict:
    nct_id = nct_id.strip().upper()
    if not nct_id.startswith("NCT"):
        nct_id = "NCT" + nct_id
    trial_dir = os.path.join(out_dir, nct_id)
    os.makedirs(trial_dir, exist_ok=True)

    study = fetch(nct_id)
    with open(os.path.join(trial_dir, "source.json"), "w", encoding="utf-8") as f:
        json.dump(study, f, indent=2, ensure_ascii=False)

    meta = extract_meta(study)
    with open(os.path.join(trial_dir, "meta.json"), "w", encoding="utf-8") as f:
        json.dump(meta, f, indent=2, ensure_ascii=False)

    md = render_trial_md(meta)
    with open(os.path.join(trial_dir, "trial.md"), "w", encoding="utf-8") as f:
        f.write(md)
    return meta


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--nct_ids", nargs="*", default=[])
    ap.add_argument("--nct_file", default="")
    ap.add_argument("--out", default="store/raw/trials")
    args = ap.parse_args()

    ids = list(args.nct_ids)
    if args.nct_file:
        with open(args.nct_file) as f:
            ids.extend(line.strip() for line in f if line.strip())

    os.makedirs(args.out, exist_ok=True)
    ok = 0
    for nct in ids:
        try:
            m = convert(nct, args.out)
            print(f"OK   {nct}  status={m['status']}  enroll={m['enrollment']}  facilities={m['facilities_count']}  biospec={bool(m['biospecimen_retention'])}")
            ok += 1
        except Exception as e:
            print(f"FAIL {nct}: {e}", file=sys.stderr)
    print(f"\n{ok}/{len(ids)} converted")


if __name__ == "__main__":
    main()
