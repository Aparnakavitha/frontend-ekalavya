import React from "react";
import PropTypes from "prop-types";
import styles from "../AboutMe.module.css";

const AboutMe = ({ title, description }) => {
  return (
    <div className={`${styles["aboutme-aboutSection"]}`}>
      <div className={`${styles["aboutme-aboutTitle"]}`}>{title}</div>
      <div className={`${styles["aboutme-aboutText"]}`}>{description}</div>
    </div>
  );
};

AboutMe.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AboutMe;
