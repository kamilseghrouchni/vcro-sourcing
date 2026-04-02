import type { Confidence } from "@/lib/layout/resolveZelij";

export type { Confidence };

export type AccessRoute =
  | "open_portal"
  | "pi_dependent"
  | "consortium_controlled"
  | "commercial_biobank"
  | "unknown";

export interface CohortCardData {
  rank: number;
  cohortId: string;
  cohortName: string;
  institution: string;
  country: string;
  accessRoute: AccessRoute;
  evidenceQuote: string;
  paperId: string;
  usableN: number;
  design: string;
  modality: string;
  estimatedCost: string;
  sampleType: string;
  confidence: Confidence;
}

export interface SignalCardData {
  cohortId: string;
  finding: string;
  sourceQuote: string;
  paperId: string;
  metric: string;
  replicationStatus: "replicated" | "single_cohort" | "failed_replication";
  replicatedIn?: string;
  implication: string;
  negativeResults: string[];
  confidence: Confidence;
}

export interface ProviderCardData {
  cohortId: string;
  platformName: string;
  adoptionNote: string;
  costTier: "free" | "low" | "mid" | "high" | "quote-only";
  topCohortsUsing: string[];
  sampleType: string;
  fit: "exact" | "compatible" | "marginal";
  confidence: Confidence;
}
