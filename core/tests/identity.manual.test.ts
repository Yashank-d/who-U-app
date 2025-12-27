import { normalizeIdentity } from "../domains/identity/index.ts";

const identity = normalizeIdentity({
  fullName: "Yashank D",
  dateOfBirth: "2000-03-26",
  gender: "male",
});

console.log(identity);
