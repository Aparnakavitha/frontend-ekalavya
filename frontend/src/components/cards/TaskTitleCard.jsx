import React from "react";
import styles from "./TaskTitleCard.module.css";
import PropTypes from "prop-types";

const TaskTitleCard = ({ projectName }) => {
  return (
    <div className={styles.TaskTitleCard}>
      <h3 className={styles.projectName}>{projectName}</h3>
    </div>
  );
};

TaskTitleCard.propTypes = {
  projectName: PropTypes.string.isRequired
};

export default TaskTitleCard;