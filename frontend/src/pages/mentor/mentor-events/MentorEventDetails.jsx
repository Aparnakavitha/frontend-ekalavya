import React from 'react'
import MentorEventDescription from '../../../layouts/mentor-events/components/MentorEventDescription'
import EventsTable from '../../../layouts/mentor-events/components/EventsTable'

const MentorEventDetails = () => {

const headings = ["Student Id", "Student Name", "Email", "Status"];

const data = [
  ["studentid1", "Samuel", "samuel@gmail.com"],
  ["studentid2", "Smith", "smith@gmail.com"],
  ["studentid3", "Mary", "mary@gmail.com"],
  ["studentid4", "Davis", "davis@gmail.com"],
  ["studentid5", "Smith", "smith@gmail.com"],
  ["studentid6", "Jayadev", "jayadev@gmail.com"],
  ["studentid7", "Wilson", "wilson@gmail.com"],
];

const tablecontent ={
    data,
    headings,
    logAttendance: (attendance) => console.log("Attendance:", attendance),
  }
  return (
    <div>
        <MentorEventDescription/>
        <EventsTable {...tablecontent}/>
    </div>
  )
}

export default MentorEventDetails