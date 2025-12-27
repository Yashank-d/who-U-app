import type { DomainVersion } from "../shared/versions.ts";

export type Gender = "male" | "female" | "neautral";

export type IndetityInput = {
  fullName: string;
  dateOfBirth: string;
  gender?: Gender;
};

export type NormalizedIdentity = {
  version: DomainVersion;
  fullName: string;
  dateOfBirth: Date;
  prompt: {
    subject: string;
    object: string;
    possessive: string;
  };
};
