import DOMPurify from "isomorphic-dompurify";
import { fileSettings } from "@/_utils/fileSettings";

export const sanitizeValue = (value) => {
  if (typeof value !== "string") return value;
  try {
    return DOMPurify.sanitize(value);
  } catch (error) {
    console.error("Sanitization failed:", error);
    return value;
  }
};

export const sanitizeObject = (obj) => {
  try {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => {
        if (typeof value === "string") {
          return [key, sanitizeValue(value)];
        } else if (Array.isArray(value)) {
          return [
            key,
            value.map((item) => {
              if (typeof item === "string") {
                return sanitizeValue(item);
              } else if (
                typeof item === "object" &&
                item !== null &&
                !isSupportedFile(item)
              ) {
                return sanitizeObject(item);
              } else {
                return item;
              }
            }),
          ];
        } else if (
          typeof value === "object" &&
          value !== null &&
          !isSupportedFile(value)
        ) {
          return [key, sanitizeObject(value)];
        } else {
          return [key, value];
        }
      })
    );
  } catch (error) {
    console.error("Error during sanitization:", error);
    return {};
  }
};

const isSupportedFile = (value) => {
  return (
    value instanceof File &&
    fileSettings.OTHER_ALLOW_MIME_TYPE.some((type) =>
      value.type.startsWith(type)
    )
  );
};


