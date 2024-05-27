import react from "react";
import styles from "../MentorEvents.module.css";
import Table from "../../../components/table/Table";

const EventsTable = (props) => {
  const {} = props;

  return (
    <div className={`${styles["EventsTable-container"]}`}>
      <div className={`${styles["EventsTable-topleft"]}`}>
        <h2>
          <u>Mark Attendance</u>
        </h2>
      </div>
      <div className={`${styles["EventsTable-table"]}`}>
        <Table data={props.data} headings={props.headings} />
      </div>
    </div>
  );
};

export default EventsTable;
