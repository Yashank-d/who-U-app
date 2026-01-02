import type { InterpretationContext } from "./contract.ts";
import type { NumerologyResult } from "../numerology/contract.ts";

export function buildInterpretationContext(
  numerology: NumerologyResult,
  focus: "current" | "next" = "current"
): InterpretationContext {
  return {
    version: "v1",
    numerology: numerology.numbers,
    personalYearFocus: focus,
  };
}
