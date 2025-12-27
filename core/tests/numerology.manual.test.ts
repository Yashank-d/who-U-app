import { calculateNumerology } from "../domains/numerology/index.ts";

const result = calculateNumerology("Yashank D", new Date("2000-03-26"));

console.log(JSON.stringify(result, null, 2));
