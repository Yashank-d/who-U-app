import type { InterpretationContext } from "./contract.ts";
import { SYSTEM_PROMPT } from "./systemPrompt.ts";

export function buildInterpretationPrompt(context: InterpretationContext): {
  system: string;
  user: string;
} {
  const { numerology, personalYearFocus } = context;

  const userPrompt = `
Here is a numerology profile with pre calculated values.

Life Path: ${numerology.lifePath}
Destiny: ${numerology.destiny}
Soul Urge: ${numerology.soulUrge}
Personality: ${numerology.personality}
Birthday: ${numerology.birthday}
Maturity: ${numerology.maturity}

Personal Year (${personalYearFocus}):
${numerology.personalYear[personalYearFocus]}

Based on this profile, provide a grounded life analysis using the following sections only:

1. corePersonality
2. strengths
3. growthChallenges
4. careerGuidance
5. relationshipPatterns
6. decisionTiming
7. practicalAdvice

Each section must be concise, specific, and practical.
Avoid generic advice.
Avoid repetition.
`.trim();

  return {
    system: SYSTEM_PROMPT,
    user: userPrompt,
  };
}
