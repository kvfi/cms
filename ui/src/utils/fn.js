import { isValid, format, parseISO } from "date-fns";

export const getReadableDate = (utcDate) => {
  if (!utcDate) {
    return "Invalid Date";
  }

  const parsedDate = parseISO(utcDate);
  const isValidDate = isValid(parsedDate);
  if (isValidDate) {
    const messageDate = format(parsedDate, "M/d/Y");
    return messageDate;
  } else {
    return "InvalidDate";
  }
};
