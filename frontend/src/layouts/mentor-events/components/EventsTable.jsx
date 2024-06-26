import React, { useState, useEffect } from "react";
import styles from "../MentorEvents.module.css";
import Table from "../../../components/table/Table";
import AttendanceButton from "../../../components/buttons/AttendanceButton";

const EventsTable = (props) => {
  const { data, headings, onAttendanceUpdate, disableAttendance } = props;

  const [attendance, setAttendance] = useState(
    data.reduce((acc, [id, , , attendance]) => {
      acc[id] = attendance;
      return acc;
    }, {})
  );

  useEffect(() => {
    const newAttendance = data.reduce((acc, [id, , , newAttendance]) => {
      acc[id] = newAttendance;
      return acc;
    }, {});

    setAttendance(newAttendance);
  }, [data]);

  const handleAttendanceClick = (participantId, isPresent) => {
    if (disableAttendance) {
      console.log("Attendance marking is disabled for this event");
      return;
    }

    const updatedAttendance = {
      ...attendance,
      [participantId]: isPresent,
    };

    setAttendance(updatedAttendance);

    const requestBody = {
      participantId: participantId,
      attendance: isPresent,
    };

    if (onAttendanceUpdate) {
      onAttendanceUpdate(requestBody);
    }
  };

  const handleGlobalAttendanceClick = (isPresent) => {
    if (disableAttendance) {
      console.log("Global attendance marking is disabled for this event");
      return;
    }

    const newAttendance = {};
    for (const id in attendance) {
      newAttendance[id] = isPresent;
    }

    setAttendance(newAttendance);

    const requestBody = {
      attendance: isPresent,
    };

    if (onAttendanceUpdate) {
      onAttendanceUpdate(requestBody);
    }
  };

  const allPresent = Object.values(attendance).every((value) => value === true);
  const allAbsent = Object.values(attendance).every((value) => value === false);

  const tableData = data.map(([participantId, name, userName]) => [
    participantId,
    name,
    userName,
    <div style={{ display: "flex", width: "120px", gap: "2px" }} key={participantId}>
      <AttendanceButton
        content="Present"
        IsPresent={attendance[participantId] === true}
        onClick={() => handleAttendanceClick(participantId, true)}
        disabled={attendance[participantId] === true || disableAttendance}
      />
      <AttendanceButton
        content="Absent"
        IsPresent={attendance[participantId] === false}
        onClick={() => handleAttendanceClick(participantId, false)}
        disabled={attendance[participantId] === false || disableAttendance}
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
          disabled={allPresent || disableAttendance}
        />
        <AttendanceButton
          content="Absent"
          IsPresent={allAbsent}
          onClick={() => handleGlobalAttendanceClick(false)}
          disabled={allAbsent || disableAttendance}
        />
      </div>
    </div>
  );

  return (
    <div className={`${styles["eventstable-container"]} padding padding-bottom`}>
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
