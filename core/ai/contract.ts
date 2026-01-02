import type { InterpretationOutput } from "../domains/interpretation/contract.ts";

export type AIExecutionResult =
  | { success: true; data: InterpretationOutput }
  | { success: false; error: string };
