import React, { useState, useEffect } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EventsDescription } from "../../common";
import { addEnrollment, deleteEvent } from "../../../services/eventService";
import { useNavigate } from "react-router-dom";

const StudentEventDescription = ({ eventDetails, participantId, tab, organizerName }) => {
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize the registration state based on the tab or event details
    if (tab === "Enrolled") {
      setIsRegistered(true);
    }
  }, [tab]);

  const handleRegister = async () => {
    try {
      const eventData = { participantId };

      // Call addEnrollment function
      await addEnrollment(eventDetails.eventId, eventData);

      // Show success toast
      toast.success("Event registered successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Set isRegistered to true to update the button state
      setIsRegistered(true);
    } catch (error) {
      console.error("Error registering event:", error);
      toast.error("Failed to register event. Please try again later.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleUnenroll = async () => {
    try {
      // Call deleteEvent function to unenroll from the event
      await deleteEvent(eventDetails.eventId, participantId);

      // Show success toast
      toast.success("Unregistered successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Update the registration state
      setIsRegistered(false);
    } catch (error) {
      console.error("Error unenrolling from event:", error);
      toast.error("Failed to unenroll from event. Please try again later.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleCompleted = () => {
    toast.info("Can't register for this event", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  if (!eventDetails) {
    return <div>No event details available</div>;
  }

  let smallerButtonLabel = "";
  let onClickAction = () => {}; // Default empty function
  let showButton = true; // New prop to control button visibility

  switch (tab) {
    case "Upcoming":
      smallerButtonLabel = isRegistered ? "Unenroll" : "Register";
      onClickAction = isRegistered ? handleUnenroll : handleRegister;
      break;
    case "Enrolled":
      smallerButtonLabel = isRegistered ? "Unenroll" : "Register";
      onClickAction = isRegistered ? handleUnenroll : handleRegister;
      break;
    case "Completed":
      smallerButtonLabel = "Completed";
      onClickAction = handleCompleted;
      showButton = false; // Hide button for completed events
      break;
    default:
      smallerButtonLabel = "Register"; // Default label for other cases
      onClickAction = handleRegister; // Default action for other cases
      break;
  }

  const eventData = {
    eventTitle: eventDetails.eventTitle,
    eventType: eventDetails.eventType,
    eventMode: eventDetails.eventMode,
    description: eventDetails.description,
    startDate: eventDetails.startDate,
    endDate: eventDetails.endDate,
    startTime: eventDetails.startTime,
    endTime: eventDetails.endTime,
    link: eventDetails.link,
    speaker: eventDetails.speaker,
    speakerDescription: eventDetails.speakerDescription,
    organizer: organizerName, // Pass the organizer name
    button: "Events",
    buttons: eventDetails.eventTitle,
    small: "edit",
    medium: "delete",
    large: "view participants",
    type: "public",
    smaller: smallerButtonLabel,
    onclick1: onClickAction,
    showButton, // Pass the showButton prop
  };

  return (
    <div className="padding padding-top padding-bottom">
      <EventsDescription {...eventData} />
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

export default StudentEventDescription;
