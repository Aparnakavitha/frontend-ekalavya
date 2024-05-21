import React, { useState } from "react";
import styles from "./InputBox.module.css";

const Input = ({ size, label, placeholders, ...rest }) => {
  const [clicked, setClicked] = useState(false);

  const handleFocus = () => {
    setClicked(true);
  };

  const handleBlur = () => {
    setClicked(false);
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
          {size === "tall" ? (
            <textarea
              className={`${styles.input} ${styles["tall-size"]}`}
              placeholder={placeholder}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          ) : (
            <input
              className={`${styles.input} ${
                size === "normal" ? styles["normal-size"] : ""
              } ${size === "small" ? styles["small-size"] : ""}`}
              placeholder={placeholder}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Input;
