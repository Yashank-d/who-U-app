import { DomainVersion } from "../shared/versions";
import { NumerologyNumbers } from "../numerology/contract";

export type InterpretationContext = {
  version: DomainVersion;
  numerology: NumerologyNumbers;
  pernalYearFocus: "current" | "next";
};

export type InterpretationSection =
  | "corePersonality"
  | "strengths"
  | "growthChallenges"
  | "careerGuidance"
  | "relationshipPatterns"
  | "decisionTiming"
  | "practicalAdvice";

export type InterpretationIOutput = {
  version: DomainVersion;
  section: Record<InterpretationSection, string>;
};
