import React, { useState } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EventsDescription } from "../../common";
import Modal from "../../common/components/Modal";
import LoginBox from "../../common/components/LoginBox";

const HomeEventDescription = ({ event }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleOpenLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleRegisterClick = () => {
    handleOpenLoginModal();
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
    onclick1: handleRegisterClick,
  };

  const loginBoxProps = {
    title: "Please Log In",
    message: "You need to log in to register for this event. Please log in",
    buttonText: "Log In with Google",
    onCancel: handleCloseLoginModal,
  };

  return (
    <div className="padding padding-top padding-bottom">
      <EventsDescription {...homeEvents} />
      <Modal
        isOpen={isLoginModalOpen}
        widthVariant="small"
        onClose={handleCloseLoginModal}
      >
        <LoginBox {...loginBoxProps} />
      </Modal>
    </div>
  );
};

export default HomeEventDescription;
