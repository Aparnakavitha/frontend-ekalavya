import React from 'react';
import { EventsDescription } from '../../common';

const StudentEventDescription = () => {
    const studentEvents= {
        heading: "Exploring Future Technologies",
        text: "Techtalks",
        texts: "Offline",
        desc: "TechTalks 2024 is a full-day event dedicated to exploring emerging technologies and their impact on various industries. Join us for insightful talks, engaging discussions, and networking opportunities with experts in the field.",
        date: "April 10th, 2024",
        time: "10:00 AM - 4:00 PM",
        venue: "Auditorium 101, Engineering Building",
        address: "123 University Ave, Cityville, State, Zip",
        speaker: "Sam Alex, Associate Software Engineer",
        button: "Events",
        buttons: "Exploring Future Technologies",
        small: "edit",
        medium: "delete",
        large: "view participants",
        type: "public",
        smaller: "Register",
      }
  return (
    <div>
        <EventsDescription {...studentEvents} />
    </div>
  )
}

export default StudentEventDescription