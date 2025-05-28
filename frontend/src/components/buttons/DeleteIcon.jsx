import React from "react";
import { MdDelete } from "react-icons/md";
import styles from "./DeleteIcon.module.css";
 
const DeleteIcon = ({ onClick }) => {
  return (
    <button
      type="button"
      className={styles.circleButton}
      onClick={onClick}
      aria-label="Delete"
    >
      <MdDelete className={styles.icon} />
    </button>
  );
};
 
export default DeleteIcon;
 
 