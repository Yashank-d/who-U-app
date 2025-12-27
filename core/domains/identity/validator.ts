export function validateFullName(name: string): void {
  if (!name || name.trim().length < 2) {
    throw new Error("Full name is required");
  }
}

export function validateDateOfBirth(value: string): Date {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    throw new Error("Invalid date of birth");
  }

  if (date > new Date()) {
    throw new Error("Date of birth cannot be in the future");
  }
  return date;
}
