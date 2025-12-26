import { DomainVersion } from "../shared/versions";

export type NumerologyNumbers = {
  lifepath: number;
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
  versions: DomainVersion;
  numbers: NumerologyNumbers;
};
