import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "../Common.module.css";
import PrimaryButton from "../../../components/buttons/PrimaryButton";

const DeleteBox = ({ title, message, buttonText, onCancel, onConfirm }) => {
  const [isVisible, setIsVisible] = useState(true);
  const handleCancel = () => {
    console.log("Cancel button clicked");
    setIsVisible(false);
    onCancel();
  };

  const handleConfirm = () => {
    console.log("Button clicked");
    setIsVisible(false);
    onConfirm();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`${styles["deletebox-box"]}`}>
      <div className={`${styles["deletebox-content"]}`}>
        <h2 className={`${styles["deletebox-title"]}`}>{title}</h2>
        <div className={`${styles["deletebox-message"]}`}>
          <p>{message}</p>
        </div>
      </div>
      <div className={`${styles["deletebox-button"]}`}>
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
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default DeleteBox;
