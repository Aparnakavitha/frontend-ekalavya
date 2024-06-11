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
    setAttendance((prev) => {
      const newAttendance = {};
      const shouldDeselect = Object.values(prev).every(
        (value) => value === isPresent
      );
      for (const id in prev) {
        newAttendance[id] = shouldDeselect ? null : isPresent;
      }
      logAttendance(newAttendance);
      return newAttendance;
    });
  };

  const allPresent = Object.values(attendance).every((value) => value === true);

  const allAbsent = Object.values(attendance).every((value) => value === false);

  const tableData = data.map(([id, name, email]) => [
    id,
    name,
    email,
    <div style={{ display: "flex", width: "120px", gap: "2px" }} key={id}>
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
    <div className={styles["global-attendance-buttons-container"]}>
      <span className={styles["select-all-text"]}>Select All:</span>
      <div className={styles["global-attendance-buttons"]}>
        <AttendanceButton
          content="Present"
          IsPresent={allPresent}
          onClick={() => handleGlobalAttendanceClick(true)}
        />
        <AttendanceButton
          content="Absent"
          IsPresent={allAbsent}
          onClick={() => handleGlobalAttendanceClick(false)}
        />
      </div>
    </div>
  );

  return (
    <div
      className={`${styles["eventstable-container"]} padding padding-bottom`}
    >
      <div className={styles["eventstable-topleft"]}>
        <h2>Mark Attendance</h2>
      </div>
      <div className={styles["eventstable-table"]}>
        <div>{globalAttendanceButtons}</div>
        <div className={styles["eventstable-tablecontent"]}>
          <Table
            data={tableData}
            headings={headings.slice(0, 3).concat("Status")}
          />
        </div>
      </div>
    </div>
  );
};

export default EventsTable;
