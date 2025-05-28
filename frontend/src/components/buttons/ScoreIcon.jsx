import React from "react";
import PropTypes from "prop-types";
import styles from "./ScoreIcon.module.css";
 
const ScoreIcon = ({ score, total }) => {
  return (
    <div className={styles.scoreIcon}>
      <span className={styles.scoreMain}>{score}</span>
      <span className={styles.scoreSlash}>/</span>
      <span className={styles.scoreTotal}>{total}</span>
    </div>
  );
};
 
ScoreIcon.propTypes = {
  score: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
 
export default ScoreIcon;
 