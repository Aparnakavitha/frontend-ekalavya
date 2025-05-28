import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TaskTitleView from "../../common/components/TaskTitleView";
import TaskAccordion from "./TaskDetail";
import styles from "./TaskView.module.css";

const TaskView = ({ tasks = [], userRole, onEdit, onDelete }) => {
  const [expandedGroups, setExpandedGroups] = useState({});
  const navigate = useNavigate();

  
  // const groupedTasks = tasks.reduce((acc, task) => {
  //   console.log(
  //     "🧩 Task ID:", task.taskId,
  //     "Assignment Type:", task.assignmentType,
  //     "Name:", task.name,
  //     "Project Name:", task.projectName
  //   );
  //   const groupKey = task.name || "ungrouped";
  // const displayName = task.name || task.title || "Unnamed Task Group";
  //     console.log("Incoming tasks:", tasks);


  //   if (!acc[groupKey]) {
  //     acc[groupKey] = {
  //       title: displayName || "Unnamed",
  //       tasks: [],
  //     };
  //     console.log("Grouped by:", groupKey, "Title:", displayName);

  //   }

  //   acc[groupKey].tasks.push(task);
  //   return acc;
  // }, {});
  const groupedTasks = tasks.reduce((acc, task) => {
    // Optional: Skip tasks with missing taskId
    if (!task.taskId) return acc;
  
    // Derive assignment type from 'type' field
    const types = (task.type || "").split(",").map((t) => t.trim().toLowerCase());
    const assignmentType = types[0] || "unknown";
  
    // Use 'name' as the group name (can be project or batch)
    const groupName = task.name?.trim() || "Unnamed";
  
    // Log once per task
    console.log("🧩 Task ID:", task.taskId, "Derived Assignment Type:", assignmentType, "Group Name:", groupName);
  
    if (!acc[groupName]) {
      acc[groupName] = {
        title: groupName,
        tasks: [],
      };
      console.log("Grouped by:", groupName, "Title:", groupName);
    }
  
    // Prevent duplicate taskId in group
    if (!acc[groupName].tasks.find((t) => t.taskId === task.taskId)) {
      acc[groupName].tasks.push(task);
    }
  
    return acc;
  }, {});
  
  

  const toggleExpand = (groupKey) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupKey]: !prev[groupKey],
    }));
  };

  const handleView = (task) => {
    navigate(`/mentor/submissions/${task.taskId}`);
  };

  const handleEdit = (task) => {
    onEdit?.(task.taskId);
  };

  const handleDelete = (task) => {
    onDelete?.(task.taskId);
    // integrate api . delete from project
  };

  return (
    <div className={styles.taskViewContainer}>
    {Object.entries(groupedTasks).map(([groupKey, groupData]) => {
      const isExpanded = expandedGroups[groupKey];

        return (
          <div
            key={groupKey}
            className={`${styles.projectSection} ${
              isExpanded ? styles.expandedContainer : ""
            }`}
          >
            {isExpanded ? (
              <>
                <div
                  className={styles.expandedTitleHeader}
                  onClick={() => toggleExpand(groupKey)}
                >
                  {groupData.title}
                </div>
                <div className={styles.accordionContent}>
                  {groupData.tasks.map((task) => (
                    <div key={task.taskId} className={styles.taskItem}>
                      <TaskAccordion
                        number={task.number}
                        title={task.title}
                        description={task.description}
                        createdAt={task.createdAt}
                        dueDate={task.dueDate}
                        assignedTo={task.assignedTo}
                        status={task.status}
                        attachments={task.attachments}
                        taskType={task.taskType}
                        onEdit={() => handleEdit(task)}
                        onDelete={() => handleDelete(task)}
                        onView={() => handleView(task)}
                      />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className={styles.titleWrapper}>
                <div className={styles.titleCardContainer}>
                  <TaskTitleView
                    projectNames={[groupData.title]}
                    onCardClick={() => toggleExpand(groupKey)}
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TaskView;
