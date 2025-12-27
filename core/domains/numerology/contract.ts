import type { DomainVersion } from "../shared/versions.ts";

export type NumerologyNumbers = {
  lifePath: number;
  destiny: number;
  soulUrge: number;
  personality: number;
  birthday: number;
  maturity: number;
  personalYear: {
    current: number;
    next: number;
  };
};

export type NumerologyResult = {
  version: DomainVersion;
  numbers: NumerologyNumbers;
};
