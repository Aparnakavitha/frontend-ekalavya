import React from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EventsDescription } from "../../common";

const HomeEventDescription = () => {
  const handleButtonClick = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const homeEvents = {
    eventTitle: "Exploring Future Technologies",
    eventType: "Techtalks",
    eventMode: "Offline",
    description:
      "TechTalks 2024 is a full-day event dedicated to exploring emerging technologies and their impact on various industries. Join us for insightful talks, engaging discussions, and networking opportunities with experts in the field.",
    startDate: "2024-02-15",
    endDate: "2024-02-25",
    startTime: "10:00",
    endTime: "14:00",
    location: "Auditorium 101, Engineering Building",
    speaker: "Sam Alex",
    speakerDescription: "Associate Software Engineer",
    organizer: "Nazeem",
    button: "Events",
    buttons: "Exploring Future Technologies",
    small: "edit",
    medium: "delete",
    large: "view participants",
    type: "public",
    smaller: "Register",
    onclick1: () => handleButtonClick("Event registered successfully!"),
  };

  return (
    <div className="padding padding-top padding-bottom">
      <EventsDescription {...homeEvents} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
    </div>
  );
};

export default HomeEventDescription;
