import React from "react";
import Table from "../../components/table/Table";
import styles from "./TaskSubmission.module.css";
import { MdEdit } from "react-icons/md"; 

const TaskSubmission = ({ submissions }) => {
  const headings = ["Student Id", "Student Name", "Submissions", "Date", "Marks"];

  const data = submissions.map((item) => [
    item.studentId,
    item.studentName,
    item.submission,
    item.date,
    item.marks !== null ? (
    
        <span className={styles.markWithIcon}>
        <MdEdit className={styles.editIcon} /> {item.marks}
      </span>
    )  : (
      <span className={styles.addMark}>add mark</span>
    ),
  ]);

  return (
    <div className={styles.taskSubmission}>
      <Table data={data} headings={headings} noData="No submissions available." />
    </div>
  );
};

export default TaskSubmission;
