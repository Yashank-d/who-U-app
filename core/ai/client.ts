import OpenAi from "openai";

export function createOpenAIClient() {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error("OPEN_API_KEY is not set");
  }
  return new OpenAi({ apiKey });
}
