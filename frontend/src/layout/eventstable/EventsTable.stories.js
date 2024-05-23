import EventsTable from "./EventsTable";
import PrimaryButton from "../../components/buttons/PrimaryButton";

export default {
    title : "EventsTable",
    component : EventsTable,
}


const createFlexDiv = (presentText, absentText) => (
    <div style={{ display: 'flex', width: 'auto' }}>
      <PrimaryButton content={presentText} variant="primary" />
      <PrimaryButton content={absentText} />
    </div>
  );
  
  const data = [
    ["studentid", "Samual", "samual@gmail.com", createFlexDiv("Present", "Absent")],
    ["studentid", "Smith", "smith@gmail.com", createFlexDiv("Present", "Absent")],
    ["studentid", "Mary", "mary@gmail.com", createFlexDiv("Present", "Absent")],
    ["studentid", "Davis", "davis@gmail.com", createFlexDiv("Present", "Absent")],
    ["studentid", "Smith", "simth@gmail.com", createFlexDiv("Present", "Absent")],
    ["studentid", "Jayadev", "jayadev@gmail.com", createFlexDiv("Present", "Absent")],
    ["studentid", "Wilson", "wilson@gmail.com", createFlexDiv("Present", "Absent")],
  ];
  
  const headings = ["Student Id", "Student Name", "emailid","Status"];
  

export const eventTable = {
    args :{
        data,
        headings,
    }
}