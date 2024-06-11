import React, { useState } from "react";
import ShowCards from "../../common/components/ShowCards";
import EventData from "./EventData";
import Modal from "../../common/components/Modal";
import CardRow from "./Cardrow";
import Addevent from "./AddEvent";

const EventList = () => {
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

export default EventList;
