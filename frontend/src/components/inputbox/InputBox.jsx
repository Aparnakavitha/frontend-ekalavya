// src/InputBox.jsx
import React, { useState } from "react";
import { FaRegImage } from "react-icons/fa";
import styles from "./InputBox.module.css";

const InputBox = ({
  size,
  label,
  placeholders,
  value,
  onChange,
  onBlur,
  isDatePicker,
  isTimePicker,
  isFileInput,
  isDropdown,
  options,
  ...rest
}) => {
  const [clicked, setClicked] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleFocus = () => {
    setClicked(true);
  };

  const handleBlur = (event) => {
    setClicked(false);
    if (onBlur) {
      onBlur(event);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
    if (onChange) {
      onChange(event);
    }
  };

  const handleSelectChange = (event) => {
    onChange(event);
    setClicked(false);
    if (onBlur) {
      onBlur(event);
    }
  };
 
  return (
    <div className={`${styles["input-container"]} ${clicked ? styles.clicked : ""}`}>
      <label htmlFor={rest.id} className={styles["input-label"]}>
        {label}
      </label>
      {placeholders.map((placeholder, index) => (
        <React.Fragment key={index}>
          {isDatePicker ? (
            <input
              type="date"
              {...rest}
              value={value}
              onChange={onChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={`${styles.input} ${size === "normal" ? styles["normal-size"] : ""} ${size === "small" ? styles["small-size"] : ""}`}
              placeholder={placeholder}
            />
          ) : isTimePicker ? (
            <input
              type="time"
              {...rest}
              value={value}
              onChange={onChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={`${styles.input} ${size === "normal" ? styles["normal-size"] : ""} ${size === "small" ? styles["small-size"] : ""}`}
              placeholder={placeholder}
            />
          ) : isFileInput ? (
            <div className={styles["file-input-wrapper"]}>
              <FaRegImage
                className={`${styles["file-input-icon"]} ${fileName ? styles["file-input-icon-uploaded"] : ""}`}
              />
              <span className={styles["file-input-label"]}>
                {fileName || placeholder}
              </span>
              <input
                type="file"
                {...rest}
                onChange={handleFileChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={`${styles.input} ${styles["large-size"]} ${styles["file-input"]}`}
              />
            </div>
          ) : isDropdown ? (
            <select
              {...rest}
              value={value}
              onChange={handleSelectChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={`${styles.input} ${size === "normal" ? styles["normal-size"] : ""} ${size === "small" ? styles["small-size"] : ""}`}
            >
              {options.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : size === "large" ? (
            <textarea
              {...rest}
              value={value}
              onChange={onChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={`${styles.input} ${styles["large-size"]}`}
              placeholder={placeholder}
            />
          ) : (
            <input
              {...rest}
              value={value}
              onChange={onChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={`${styles.input} ${size === "normal" ? styles["normal-size"] : ""} ${size === "small" ? styles["small-size"] : ""}`}
              placeholder={placeholder}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default InputBox;
