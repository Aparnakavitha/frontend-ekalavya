import React, { useState } from "react";
import styles from "./InputBox.module.css";

const Input = ({
  size,
  label,
  placeholders,
  value,
  onChange,
  onBlur,
  isDatePicker,
  isTimePicker,
  isFileInput,
  ...rest
}) => {
  const [clicked, setClicked] = useState(false);

  const handleFocus = () => {
    setClicked(true);
  };

  const handleBlur = (event) => {
    setClicked(false);
    if (onBlur) {
      onBlur(event);
    }
  };

  return (
    <div
      className={`${styles["input-container"]} ${clicked ? styles.clicked : ""}`}
    >
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
            <input
              type="file"
              {...rest}
              onChange={onChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={`${styles.input} ${size === "normal" ? styles["normal-size"] : ""} ${size === "small" ? styles["small-size"] : ""} ${styles.inputfile} `}
            />
          ) : size === "tall" ? (
            <textarea
              {...rest}
              value={value}
              onChange={onChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={`${styles.input} ${styles["tall-size"]}`}
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

export default Input;
