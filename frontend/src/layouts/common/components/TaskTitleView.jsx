import React from "react";
import TaskTitleCard from "../../../components/cards/TaskTitleCard.jsx";
import styles from "../Common.module.css";
import PropTypes from "prop-types";
 
const TaskTitleView = ({ projectNames, onCardClick }) => {
  return (
    <div className={styles.TaskTitleView}>
      {projectNames.map((project, index) => (
        <div key={index} onClick={() => onCardClick(index)}>
          <TaskTitleCard projectName={project} />
        </div>
      ))}
    </div>
  );
};
 
TaskTitleView.propTypes =
{
  projectNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCardClick: PropTypes.func.isRequired,
};
 
export default TaskTitleView;
 
 