import React from "react";
import { MdEdit } from "react-icons/md";
import styles from "./EditButton.module.css";
 
const EditButton = ({ onClick }) => {
  return (
    <button
      type="button"
      className={styles.circleButton}
      onClick={onClick}
      aria-label="Edit"
    >
      <MdEdit className={styles.icon} />
    </button>
  );
};
 
export default EditButton;