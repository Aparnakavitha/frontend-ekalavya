import { isEmail, isURL, isMobilePhone } from "validator";

export const validateEmail = (value) => {
  return (
    !value ||
    isEmail(value) ||
    "Invalid email address. Please enter a valid email."
  );
};

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

export const validateURL = (value) => {
  return !value || isURL(value) || "Invalid URL. Please enter a valid URL.";
};

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
