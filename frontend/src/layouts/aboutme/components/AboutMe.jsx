import React from 'react';
import PropTypes from 'prop-types';
import styles from '../AboutMe.module.css';

const AboutMe = ({ description }) => {
  return (
      <div className={styles.aboutSection}>
        <div className={styles.aboutTitle}>About Me</div>
        <div className={styles.aboutText}>{description}</div>
      </div>
  );
};

AboutMe.propTypes = {
  description: PropTypes.string.isRequired,
};

export default AboutMe;
