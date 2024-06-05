import React, { useState } from "react";
import EventsDescription from "../../common/components/EventsDescription";
import EventDescriptionData from "./EventDescriptionData";
import Modal from "../../common/components/Modal";
import AddEvent from "../../admin-event/components/AddEvent";

const MentorEventDescription = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleFormSubmit = (formData) => {
    console.log("Form Submitted with data:", formData);
    handleCloseModal();
  };

  const actionData = {
    ...EventDescriptionData.defaultValues,
    ...EventDescriptionData.buttonProps,
    onclick1: handleOpenModal,
  };

  return (
    <div>
      <EventsDescription {...actionData} />
      <Modal isOpen={isOpen} widthVariant="large" onClose={handleCloseModal}>
        <AddEvent {...EventDescriptionData} onSubmit={handleFormSubmit} />
      </Modal>
    </div>
  );
};

export default MentorEventDescription;
