import react from "react";
import styles from "../EventsMentor.module.css";
import Table from "../../../components/table/Table";

const EventsTable = (props) => {
  const {} = props;

  return (
    <div className={styles.container}>
      <div className={styles.topleft}>
        <h2><u>Mark Attendance</u></h2>
      </div>
      <div className={styles.table}>
        <Table data={props.data} headings={props.headings} />
      </div>
    </div>
  );
};

export default EventsTable;
