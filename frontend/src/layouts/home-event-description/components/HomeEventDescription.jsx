import React from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EventsDescription } from "../../common";

const HomeEventDescription = ({ event }) => {
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
    eventTitle: event.eventTitle,
    eventType: event.eventType,
    eventMode: event.eventMode,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    startTime: event.startTime,
    endTime: event.endTime,
    location: event.location,
    link: event.link,
    speaker: event.speaker,
    speakerDescription: event.speakerDescription,
    organizer: event.organizer,
    button: "Events",
    buttons: event.eventTitle,
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
