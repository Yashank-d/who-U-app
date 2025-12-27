import { MASTER_NUMBERS } from "./constants.ts";

export function normalizeName(name: string): string {
  return name.toUpperCase().replace(/[^A-Z]/g, "");
}

export function sumDigits(value: number): number {
  return value
    .toString()
    .split("")
    .reduce((sum, n) => sum + Number(n), 0);
}

export function reduceNumber(value: number): number {
  while (value > 9 && !MASTER_NUMBERS.has(value)) {
    value = sumDigits(value);
  }
  return value;
}
