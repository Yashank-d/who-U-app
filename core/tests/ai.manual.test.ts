import { calculateNumerology } from "../domains/numerology/index.ts";
import { buildInterpretationContext } from "../domains/interpretation/contextBuilder.ts";
import { buildInterpretationPrompt } from "../domains/interpretation/promptBuilder.ts";
import { executeInterpretation } from "../ai/index.ts";

try {
  const numerology = calculateNumerology("Yashank D", new Date("2000-03-26"));

  const context = buildInterpretationContext(numerology);
  const prompt = buildInterpretationPrompt(context);

  const result = await executeInterpretation(prompt.system, prompt.user);

  console.log("AI RESULT:");
  console.log(JSON.stringify(result, null, 2));
} catch (err) {
  console.error("UNCAUGHT TEST ERROR:");
  console.error(err);
}
