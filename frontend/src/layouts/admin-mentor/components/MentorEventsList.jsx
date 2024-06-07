import React, { useState } from "react";
import ShowCards from "../../common/components/ShowCards";
import EventData from "./MentorEventData";
import Modal from "../../common/components/Modal";
import CardRow from "../../admin-student/components/Cardrow";
import Addevent from "../../admin-student/components/AddEvent";

const MentorEventsList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleFormSubmit = (formData) => {
    console.log("Form submitted with data:", formData);
    handleCloseModal();
  };

  const heading = {
    ...EventData.heading,
    textbuttonprops: {
      ...EventData.heading.textbuttonprops,
      onClick: handleOpenModal,
    },
  };

  return (
    <div>
      <ShowCards {...heading} />
      <Modal isOpen={isOpen} widthVariant="medium" onClose={handleCloseModal}>
        <Addevent {...EventData.addevent} onSubmit={handleFormSubmit} />
      </Modal>
      <CardRow {...EventData.eventcards} />
    </div>
  );
};

export default MentorEventsList;
