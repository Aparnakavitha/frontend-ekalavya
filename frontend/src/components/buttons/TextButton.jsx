import React from "react";
import styles from "./TextButton.module.css";

const TextButton = (props) => {
  const { icon, text, onClick } = props;
  return (
    <div className={styles.textbutton} onClick={onClick}>
      <div className={styles.icon}>{icon}</div>
      <a className={styles.text}>{text}</a>
    </div>
  );
};

export default TextButton;
