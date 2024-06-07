import { isEmail, isURL, isMobilePhone, isNumeric, isBefore } from "validator";

//Email Validation
export const validateEmail = (value) => {
  return (
    !value ||
    isEmail(value) ||
    "Invalid email address. Please enter a valid email."
  );
};

//Phone Number Validation
export const validatePhone = (value) => {
  if (!value) {
    return true;
  }

  if (!/^\d+$/.test(value)) {
    return "Invalid phone number. The phone number must contain only digits.";
  }

  if (value.length !== 10) {
    return "Invalid phone number. The phone number must contain exactly 10 digits.";
  }

  if (!isMobilePhone(value)) {
    return "Invalid phone number. Please enter a valid phone number.";
  }

  return true;
};

//URL Validation
export const validateURL = (value) => {
  return !value || isURL(value) || "Invalid URL. Please enter a valid URL.";
};

//Image File Validation
export const validateImageFile = (file, setFileError, setError) => {
  if (file && !file.type.startsWith("image/")) {
    const errorMessage = "Invalid file type. Please upload an image file.";
    setFileError(errorMessage);
    setError("profilePhoto", {
      type: "manual",
      message: errorMessage,
    });
    return false;
  }
  setFileError("");
  return true;
};

//Number Validation
export const validateNumber = (type) => (value) => {
  if (type === "others") {
    return (
      !value || isNumeric(value) || "This field should contain only digits."
    );
  }
  if (type === "postalCode") {
    return (
      !value ||
      (isNumeric(value) && value.length === 6) ||
      "This field should contain only digits and have a length of 6."
    );
  }
  return true;
};

//Start Date Validation
export const validateStartDate = (value, allValues) => {
  const currentDate = new Date();
  const startDate = new Date(value);

  if (isNaN(startDate.getTime())) {
    return "Start date is required.";
  }

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  const startYear = startDate.getFullYear();
  const startMonth = startDate.getMonth();
  const startDay = startDate.getDate();
  if (
    startYear > currentYear ||
    (startYear === currentYear && startMonth > currentMonth) ||
    (startYear === currentYear &&
      startMonth === currentMonth &&
      startDay > currentDay) ||
    (startYear === currentYear &&
      startMonth === currentMonth &&
      startDay === currentDay)
  ) {
    return true;
  }

  return "Start date must be on or after the current date.";
};

//End Date Validation
export const validateEndDate = (value, allValues) => {
  const startDate = allValues.startDate;
  if (value === undefined) {
    return "End date is required.";
  }
  if (startDate && isBefore(value, startDate)) {
    return "End date must be after start date.";
  }
  return true;
};

//Input Entry Validation
export const validateAndCleanInput = (value) => {
  if (/^[\s\W_]/.test(value)) {
    return "Invalid entry: the field should not start with white spaces or symbols.";
  }
  return true;
};
