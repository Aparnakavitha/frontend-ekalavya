import EventsTable from "./EventsTable";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import AttendenceButton from "../../components/buttons/AttendenceButton";

export default {
    title : "EventsTable",
    component : EventsTable,
}


const createFlexDiv = (present,absent,clicked) => (
    <div style={{ display: 'flex', width: 'auto' }}>
      <AttendenceButton content="Present" isPresent={true} onClick={clicked} />
      <AttendenceButton content="absent" isPresent={false}  onClick={clicked}/>
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