import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../DeleteBox.module.css';
import PrimaryButton from '../../../components/buttons/PrimaryButton';

const DeleteBox = ({ title, message, buttonText }) => {
  const [isVisible, setIsVisible] = useState(true);
  const handleCancel = () => {
    console.log("Cancel button clicked");
    setIsVisible(false);

  };
  const handleConfirm = () => {
    console.log("Button clicked");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.box}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.message}>
          <p>{message}</p>
        </div>
      </div>
      <div className={styles.button}>
        <PrimaryButton
          content="Cancel"
          variant="primary"
          width="full"
          onClick={handleCancel}
        />
        <PrimaryButton
          content={buttonText}
          variant="primary"
          width="full"
          onClick={handleConfirm}
        />
      </div>
    </div>
  );
};

DeleteBox.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default DeleteBox;
