import type { DomainVersion } from "../shared/versions.ts";
import { NumerologyNumbers } from "../numerology/contract.ts";

export type InterpretationContext = {
  version: DomainVersion;
  numerology: NumerologyNumbers;
  personalYearFocus: "current" | "next";
};

export type InterpretationSection =
  | "corePersonality"
  | "strengths"
  | "growthChallenges"
  | "careerGuidance"
  | "relationshipPatterns"
  | "decisionTiming"
  | "practicalAdvice";

export type InterpretationOutput = {
  version: DomainVersion;
  section: Record<InterpretationSection, string>;
};
