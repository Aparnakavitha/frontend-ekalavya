import React from "react";
import styles from "./ProfileCard.module.css";
import { MdDelete } from "react-icons/md";

const ProfileCard = (props) => {
  const { studentImage, studentName, studentId, studentCollege, studentMail, studentPhoneNumber, onClick, canDelete,handleDelete } = props;
  const transformMainMail = (studentMail) => {
    if (studentMail.length > 17) {
      return studentMail.slice(0, 17) + "...";
    }
    return studentMail;
  };
  const handleDeleteIcon = (event)=>{
    event.stopPropagation();
    handleDelete()
  }
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.cardContent} >
        <div className={styles.imageIcon}>
          <img
            src={studentImage}
            alt="Profile"
            className={styles.studentImage}
          />
          {canDelete && (
            // <div >
              <MdDelete className={styles.deleteIcon} title="Delete" onClick={handleDeleteIcon} />
            // </div>
          )}
        </div>
        <div className={styles.titlesWrapper}>
          <h1 className={styles.title1}>{transformMainMail(studentName)}</h1>
          <h2 className={styles.title2}>{transformMainMail(studentId)}</h2>
          <h3 className={styles.title3}>{transformMainMail(studentCollege)}</h3>
        </div>
        <div className={styles.contactInfo}>
          <div className={styles.email}>{transformMainMail(studentMail)}</div>
          <div className={styles.phone}>{transformMainMail(studentPhoneNumber)}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
