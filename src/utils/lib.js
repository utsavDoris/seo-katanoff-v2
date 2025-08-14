export const phoneRegex =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const messageType = {
  SUCCESS: "success",
  ERROR: "error",
  INFO: "info"
}
export const message = {
  SUCCESS: "success",
  INVALID_DATA: "Invalid Data!",
  DATA_NOT_FOUND: "Data not found",
  SERVER_ERROR: "something went wrong",
  EMAIL_VALIDATION: "Please enter valid E-mail",
  custom: (item = "") => {
    return item;
  },
  notFound: (item = "") => {
    return item ? `${item} not Found` : "data not found";
  },
};

export const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
