import type { IdentityInput, NormalizedIdentity } from "./contract.ts";
import { validateFullName, validateDateOfBirth } from "./validator.ts";
import { resolvePronouns } from "./pronouns.ts";

export function normalizeIdentity(input: IdentityInput): NormalizedIdentity {
  validateFullName(input.fullName);

  const dateOfBirth = validateDateOfBirth(input.dateOfBirth);

  return {
    version: "v1",
    fullName: input.fullName.trim(),
    dateOfBirth,
    pronouns: resolvePronouns(input.gender),
  };
}
