import React from "react";
import styles from "./ProfileCard.module.css";

const ProfileCard = (props) => {
  const { profileImage, title1, title2, title3, email, phone, onClick } = props;

  const transformMainMail = (studentMail) => {
    if (studentMail.length > 24) {
      return studentMail.slice(0, 24) + "...";
    }
    return studentMail;
  };

  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.cardContent}>
        <div className={styles.profile}>
          <img
            src={profileImage}
            alt="Profile"
            className={styles.profileImage}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.titlesWrapper}>
            <h2 className={`${styles.title} ${styles.title1}`}>{title1}</h2>
            <h3 className={`${styles.title} ${styles.title2}`}>{title2}</h3>
            <h4 className={`${styles.title} ${styles.title3}`}>{title3}</h4>
          </div>
          <div className={styles.contactInfo}>
            <p>{transformMainMail(email)}</p>
            <p>{phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
