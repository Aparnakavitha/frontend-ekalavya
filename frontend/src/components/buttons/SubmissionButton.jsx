import React from "react";
import styles from "./SubmissionButton.module.css";
 
const SubmissionButton = ({ onClick }) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={onClick}>
        Add submission
      </button>
    </div>
  );
};
 
export default SubmissionButton;