import type {
  InterpretationOutput,
  InterpretationSection,
} from "../domains/interpretation/contract.js";

const REQUIRED_SECTIONS: InterpretationSection[] = [
  "corePersonality",
  "strengths",
  "growthChallenges",
  "careerGuidance",
  "relationshipPatterns",
  "decisionTiming",
  "practicalAdvice",
];

export function parseAIOutput(raw: string): InterpretationOutput {
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new Error("AI response is not valid JSON");
  }

  if (
    typeof parsed !== "object" ||
    parsed === null ||
    !("sections" in parsed)
  ) {
    throw new Error("AI response structure is invalid");
  }

  const sections = (parsed as any).sections;

  for (const key of REQUIRED_SECTIONS) {
    if (typeof sections[key] !== "string") {
      throw new Error(`Missing or invalid section: ${key}`);
    }
  }
  return {
    version: "v1",
    sections,
  };
}
