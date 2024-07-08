import React from "react";
import styles from "./TextButton.module.css";

const TextButton = (props) => {
  const { icon, text, onClick, isDelete } = props;
  return (
    <div className={styles.textbutton} onClick={onClick}>
    {isDelete ? (
      <>
        <div className={styles.dicon}>{icon}</div>
        <a className={styles.dtext}>{text}</a>
      </>
    ) : (
      <>
        <div className={styles.icon}>{icon}</div>
        <a className={styles.text}>{text}</a>
      </>
    )}
  </div>
  );
};

export default TextButton;
