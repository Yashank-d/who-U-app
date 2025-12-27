import type { DomainVersion } from "../shared/versions.ts";

export type Gender = "male" | "female" | "neautral";

export type IdentityInput = {
  fullName: string;
  dateOfBirth: string;
  gender?: Gender;
};

export type Pronouns = {
  subject: string;
  object: string;
  possessive: string;
};

export type NormalizedIdentity = {
  version: DomainVersion;
  fullName: string;
  dateOfBirth: Date;
  pronouns: Pronouns;
};
