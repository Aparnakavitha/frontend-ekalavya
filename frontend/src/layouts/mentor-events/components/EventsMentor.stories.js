import EventsMentor from "./EventsMentor";

export default {
  title: "layouts/Mentor-events/components/EventsMentor",
  component: EventsMentor,
};

export const eventMentor = {
  args: {
    text: "Type: Techtalks",
    texts: "Event Mode: Offline",
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
    type: "public", // Adjust the type as needed
    smaller: "Register"
  }
};
