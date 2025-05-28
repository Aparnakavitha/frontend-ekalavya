import React from "react";
import styles from "./ViewSubmissionButton.module.css";
 
const ViewSubmissionButton = ({ onClick }) => {
  return (
    <span className={styles.link} onClick={onClick} role="button" tabIndex={0} onKeyPress={e => e.key === 'Enter' && onClick()}>
      View submissions
    </span>
  );
};
 
export default ViewSubmissionButton;