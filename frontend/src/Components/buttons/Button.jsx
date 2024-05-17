import React from "react";
import styles from "./Button.module.css"; // Import CSS module

const Button = (props) => {
  const { variant, content, onClick, width } = props;

  let widthSize;
  if (width === "full") {
    widthSize = styles.full;
  } else if (width === "half") {
    widthSize = styles.half;
  } else {
    widthSize = ""; // Default to no additional width style if not full or half
  }

  return (
    <button
      className={`${styles.button} ${styles[variant]} ${widthSize}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
