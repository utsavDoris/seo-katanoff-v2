import { v4 as uuidv4 } from "uuid";

export function formatNumber(number) {
  return number.toString().padStart(2, "0");
}

export const stringReplacedWithUnderScore = (string) => {
  return string?.split(" ")?.join("_");
};

export const stringReplacedWithSpace = (string) => {
  return string?.split("_")?.join(" ");
};

export const removeTrailingSlash = (url) => {
  return url.endsWith("/") ? url.slice(0, -1) : url;
};

export const generateRandomKey = () => {
  return uuidv4();
};

export const alertseverity = (type) => {
  const severity = {
    SUCCESS: "success",
    INFO: "info",
    WARNING: "warning",
    ERROR: "error",
  };
  return severity[type] || severity.INFO;
};

export const generateCurrentTimeAndDate = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().slice(0, 19) + "+00:00";
  return formattedDate;
};
