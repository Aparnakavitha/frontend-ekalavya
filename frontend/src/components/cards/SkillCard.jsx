import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import styles from "./SkillCard.module.css"; // Import CSS module

const Card = ({ title, subtitle, showCloseIcon, onClose }) => {
  const handleClose = () => {
    // Call the onClose function passed from the parent component
    if (typeof onClose === "function") {
      onClose();
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.innerBox}>
        <div className={styles.content}>
          {" "}
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        <div>
          {" "}
          {showCloseIcon && (
            <IoIosCloseCircle
              className={styles.closeIcon}
              onClick={handleClose}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
