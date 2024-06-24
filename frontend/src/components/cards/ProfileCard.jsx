import React from "react";
import styles from "./ProfileCard.module.css";
import { MdDelete } from "react-icons/md";

const ProfileCard = (props) => {
  const {
    studentImage,
    studentName,
    studentId,
    studentCollege,
    studentMail,
    studentPhoneNumber,
    onClick,
    canDelete,
    handleDelete,
    viewAnimation = false,
  } = props;

  const transformMainMail = (studentMail) => {
    if (studentMail.length > 20) {
      return studentMail.slice(0, 20) + "...";
    }
    return studentMail;
  };

  const transformName = (studentMail) => {
    if (studentMail.length > 15) {
      return studentMail.slice(0, 15) + "...";
    }
    return studentMail;
  };

  const transformCollege = (studentMail) => {
    if (studentMail.length > 26) {
      return studentMail.slice(0, 26) + "...";
    }
    return studentMail;
  };

  const handleDeleteIcon = (event) => {
    event.stopPropagation();
    handleDelete();
  };

  return (
    <div
      className={`${styles.card} ${viewAnimation ? styles.highlight : ""}`}
      onClick={onClick}
    >
      <div className={styles["card-content"]}>
        <div className={styles["image-icon"]}>
          <img
            src={studentImage}
            alt="Profile"
            className={styles["student-image"]}
          />
          {canDelete && (
            <MdDelete
              className={styles["delete-icon"]}
              title="Delete"
              onClick={handleDeleteIcon}
            />
          )}
        </div>
        <div className={styles["titles-wrapper"]}>
          <h1 className={styles.title1} title={studentName}>{transformName(studentName)}</h1>
          <h2 className={styles.title2} title={studentId}>{transformName(studentId)}</h2>
          <h3 className={styles.title3} title={studentCollege}>{transformCollege(studentCollege)}</h3>
        </div>

        <div className={styles["contact-info"]}>
          <div className={styles.email} title={studentMail}>{transformMainMail(studentMail)}</div>
          <div className={styles.phone} title={studentPhoneNumber}>
            {transformMainMail(studentPhoneNumber)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
