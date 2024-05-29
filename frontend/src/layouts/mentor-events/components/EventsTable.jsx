import React, { useState } from "react";
import styles from "../MentorEvents.module.css";
import Table from "../../../components/table/Table";
import AttendanceButton from "../../../components/buttons/AttendanceButton";
 
const EventsTable = (props) => {
  const { data, headings, logAttendance } = props;
 
  const [attendance, setAttendance] = useState(
    data.reduce((acc, [id, name, email]) => {
      acc[id] = null;
      return acc;
    }, {})
  );
 
  const handleAttendanceClick = (id, isPresent) => {
    setAttendance((prev) => {
      const updatedAttendance = {
        ...prev,
        [id]: isPresent,
      };
      logAttendance(updatedAttendance);
      return updatedAttendance;
    });
  };
 
  const handleGlobalAttendanceClick = (isPresent) => {
    const newAttendance = {};
    for (const id in attendance) {
      newAttendance[id] = isPresent;
    }
    setAttendance(newAttendance);
    logAttendance(newAttendance);
  };
 
  const allPresent = Object.values(attendance).every((value) => value === true);
  const allAbsent = Object.values(attendance).every((value) => value === false);
 
  const tableData = data.map(([id, name, email]) => [
    id,
    name,
    email,
    <div style={{ display: "flex", width: "50px", gap: "2px" }}>
      <AttendanceButton
        content="Present"
        IsPresent={attendance[id] === true}
        onClick={() => handleAttendanceClick(id, true)}
        disabled={attendance[id] === false}
      />
      <AttendanceButton
        content="Absent"
        IsPresent={attendance[id] === false}
        onClick={() => handleAttendanceClick(id, false)}
        disabled={attendance[id] === true}
      />
    </div>,
  ]);
 
  const globalAttendanceButtons = (
    <div style={{ display: "flex", width: "auto", gap: "4px" }}>
      <span>Status</span>
      <AttendanceButton
        content="Present"
        IsPresent={allPresent}
        onClick={() => handleGlobalAttendanceClick(true)}
        disabled={allPresent}
      />
      <AttendanceButton
        content="Absent"
        IsPresent={allAbsent}
        onClick={() => handleGlobalAttendanceClick(false)}
        disabled={allAbsent}
      />
    </div>
  );
 
  return (
    <div className={styles["EventsTable-container"]}>
      <div className={styles["EventsTable-topleft"]}>
        <h2>
          <u>Mark Attendance</u>
        </h2>
      </div>
      <div className={styles["EventsTable-table"]}>
        <Table
          data={tableData}
          headings={[...headings.slice(0, 3), globalAttendanceButtons]}
        />
      </div>
    </div>
  );
};
 
export default EventsTable;