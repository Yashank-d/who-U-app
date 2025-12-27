import type { NumerologyResult } from "./contract.ts";
import { LETTER_VALUES, VOWELS } from "./constants.ts";
import { normalizeName, reduceNumber, sumDigits } from "./utils.ts";

export function calculateNumerology(
  fullName: string,
  dateOfBirth: Date
): NumerologyResult {
  const lifePath = calculateLifePath(dateOfBirth);
  const destiny = calculateDestiny(fullName);
  const soulUrge = calculateSoulUrge(fullName);
  const personality = calculatePersonality(fullName);
  const birthday = reduceNumber(dateOfBirth.getDate());
  const maturity = reduceNumber(lifePath + destiny);

  const currentYear = new Date().getFullYear();

  return {
    version: "v1",
    numbers: {
      lifePath,
      destiny,
      soulUrge,
      personality,
      birthday,
      maturity,
      personalYear: {
        current: calculatePersonalYear(dateOfBirth, currentYear),
        next: calculatePersonalYear(dateOfBirth, currentYear + 1),
      },
    },
  };
}

function calculateLifePath(dob: Date): number {
  const combined =
    dob.getDate().toString() +
    (dob.getMonth() + 1).toString() +
    dob.getFullYear().toString();

  return reduceNumber(sumDigits(Number(combined)));
}

function calculateDestiny(fullName: string): number {
  const name = normalizeName(fullName);
  let sum = 0;
  for (const char of name) {
    sum += LETTER_VALUES[char] || 0;
  }
  return reduceNumber(sum);
}

function calculateSoulUrge(fullName: string): number {
  const name = normalizeName(fullName);
  let sum = 0;

  for (const char of name) {
    if (VOWELS.has(char)) {
      sum += LETTER_VALUES[char] || 0;
    }
  }

  return reduceNumber(sum);
}

function calculatePersonality(fullName: string): number {
  const name = normalizeName(fullName);
  let sum = 0;

  for (const char of name) {
    if (!VOWELS.has(char)) {
      sum += LETTER_VALUES[char] || 0;
    }
  }

  return reduceNumber(sum);
}

function calculatePersonalYear(dob: Date, year: number): number {
  const sum = dob.getDate() + (dob.getMonth() + 1) + year;

  return reduceNumber(sum);
}
