import type { Gender, Pronouns } from "./contract.ts";

export function resolvePronouns(gender?: Gender): Pronouns {
  if (gender === "male") {
    return {
      subject: "he",
      object: "him",
      possessive: "his",
    };
  }
  if (gender === "female") {
    return {
      subject: "she",
      object: "her",
      possessive: "her",
    };
  }
  return {
    subject: "they",
    object: "them",
    possessive: "their",
  };
}
