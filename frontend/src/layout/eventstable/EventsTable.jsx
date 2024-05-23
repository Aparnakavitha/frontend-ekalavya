import react from "react";
import styles from "./EventsTable.module.css";
import Table from "../../components/table/Table";


const EventsTable = (props) =>{
    const {
        

    }=props;

    return (
        <div className={styles.container}>
        <div className={styles.topleft}>
            <h2>Mark Attendance</h2>

        </div>

            <Table data={props.data} headings={props.headings} />
            



        </div>
    );




    
};

export default EventsTable;

