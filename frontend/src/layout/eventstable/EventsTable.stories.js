import EventsTable from "./EventsTable";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import AttendanceButton from "../../components/buttons/AttendanceButton";
export default {
    title : "EventsTable",
    component : EventsTable,
}


const createFlexDiv = () => (
    <div style={{ display: 'flex', width: '50px', gap:'2px' }}>
      <AttendanceButton content="Present" isPresent={true} onClick={(r) => {
      console.log("clicked");
    }}/>
      <AttendanceButton content="absent" isPresent={false} onClick={(r) => {
      console.log("clicked");
    }}/>
    </div>
  );

  const createFlexDiv2 = () => (
    <div style={{ display: 'flex', width: 'auto', gap:'4px' }}>
      <span>Status</span>
      <AttendanceButton content="Present" isPresent={true} onClick={(r) => {
      console.log("clicked");
    }}/>
      <AttendanceButton content="absent" isPresent={false} onClick={(r) => {
      console.log("clicked");
    }}/>
    
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
  
  const headings = ["Student Id", "Student Name", "emailid",createFlexDiv2("Present", "Absent")];
  

export const eventTable = {
    args :{
        data,
        headings,
       
    }
}