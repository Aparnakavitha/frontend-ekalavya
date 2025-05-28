import React from "react";
import PropTypes from "prop-types";
import styles from "./TaskSubTitleCard.module.css";
 
const TaskSubTitleCard = ({ number, title, dueDate }) => {
  return (
    <div className={styles.TaskSubTitleCard}>
      <p className={styles.taskNumber}>
        {number}. {title}
      </p>
      <p className={styles.taskDueDate}>Due Date: {dueDate}</p>
    </div>
  );
};
 
TaskSubTitleCard.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
};
 
export default TaskSubTitleCard;