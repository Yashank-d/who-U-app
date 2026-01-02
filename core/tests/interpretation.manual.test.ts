import { calculateNumerology } from "../domains/numerology/index.ts";
import { buildInterpretationContext } from "../domains/interpretation/contextBuilder.ts";
import { buildInterpretationPrompt } from "../domains/interpretation/promptBuilder.ts";

const numerology = calculateNumerology("Yashank D", new Date("2000-03-26"));

const context = buildInterpretationContext(numerology, "current");
const prompt = buildInterpretationPrompt(context);

console.log(prompt.system);
console.log("-----");
console.log(prompt.user);
cd ..