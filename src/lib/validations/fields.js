import { z } from "zod";

const SECURITY_PATTERNS = {
  xssPattern: /<[^>]*>?|javascript:|on\w+\s*=/gi,
  sqlInjectionPattern: /('|`|;|--|"|\b(DROP|DELETE|INSERT|UPDATE|SELECT|UNION|CREATE|ALTER|EXEC|EXECUTE)\b)/gi,
  scriptPattern: /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
  templateInjectionPattern: /\{\{.*?\}\}/g,
};

const validateSecurity = (value) => {
  if (typeof value !== "string") return true;

  return (
    !SECURITY_PATTERNS.xssPattern.test(value) &&
    !SECURITY_PATTERNS.sqlInjectionPattern.test(value) &&
    !SECURITY_PATTERNS.scriptPattern.test(value) &&
    !SECURITY_PATTERNS.templateInjectionPattern.test(value)
  );
};

const validateNotOnlySpecialChars = (value) => {
  if (typeof value !== "string") return true;
  return !/^[^a-zA-Z0-9\s]+$/.test(value.trim());
};

const validateNotEmpty = (value) => {
  if (typeof value !== "string") return false;
  return value.trim().length > 0;
};

const validateNotOnlyWhitespace = (value) => {
  if (typeof value !== "string") return false;
  return /\S/.test(value);
};

export const fieldSchemas = {
  name: z
    .string()
    .transform((val) => val?.trim() || "")
    .refine(validateNotEmpty, "Name is required")
    .refine(validateNotOnlyWhitespace, "Name cannot be only whitespace")
    .refine((val) => val.length >= 2, "Name must be at least 2 characters")
    .refine((val) => val.length <= 255, "Name is too long")
    .refine(validateSecurity, "Invalid characters detected")
    .refine(validateNotOnlySpecialChars, "Name cannot contain only special characters")
    .refine((val) => !/\d/.test(val), "Name cannot contain numbers")
    .refine(
      (val) => /^[a-zA-Z\u00C0-\u017F\u0100-\u024F\u1E00-\u1EFF\s'\-]+$/u.test(val),
      "Name can only contain letters, spaces, hyphens, and apostrophes"
    ),

  phone_number: z
    .string()
    .transform((val) => val?.trim() || "")
    .refine(validateNotEmpty, "Phone number is required")
    .refine(validateNotOnlyWhitespace, "Phone number cannot be only whitespace")
    .refine(validateSecurity, "Invalid characters detected")
    .refine((val) => {
      const cleaned = val.replace(/[\s\(\)\-\+]/g, "");
      return cleaned.length >= 5 && cleaned.length <= 15;
    }, "Phone number must be between 5-15 digits")
    .refine((val) => {
      const cleaned = val.replace(/[\s\(\)\-\+]/g, "");
      return /^\d+$/.test(cleaned) && !/^0+$/.test(cleaned);
    }, "Phone number must contain valid digits and cannot be all zeros")
    .refine((val) => /^[\d\s\(\)\-\+]+$/.test(val), "Phone number contains invalid characters"),

  email: z
    .string()
    .email("Please enter a valid email address")
    .transform((val) => val?.trim().toLowerCase() || "")
    .refine(validateNotEmpty, "Email is required")
    .refine(validateNotOnlyWhitespace, "Email cannot be only whitespace")
    .refine(validateSecurity, "Invalid characters detected")
    .refine((val) => val.length <= 256, "Email is too long")
    .refine((val) => val.includes("@"), "Email must contain @ symbol")
    .refine((val) => {
      const parts = val.split("@");
      return parts.length === 2 && parts[1].length > 0;
    }, "Email must have a valid domain"),
};
