import type { AIExecutionResult } from "./contract.ts";
import { createOpenAIClient } from "./client.ts";
import { parseAIOutput } from "./parser.ts";

export async function executeInterpretation(
  systemPrompt: string,
  userPrompt: string
): Promise<AIExecutionResult> {
  try {
    const client = createOpenAIClient();

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: userPrompt,
        },
      ],
      temperature: 0.4,
      text: {
        format: {
          type: "json_object",
        },
      },
    } as any);

    const outputText = response.output_text;

    if (!outputText || outputText.trim().length === 0) {
      return {
        success: false,
        error: "Empty AI response",
      };
    }

    const parsed = parseAIOutput(outputText);

    return {
      success: true,
      data: parsed,
    };
  } catch (err) {
    return {
      success: false,
      error:
        err instanceof Error
          ? err.message
          : "AI execution failed with non standard error",
    };
  }
}
