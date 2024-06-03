import React, { useState } from "react";
import ActionComponent from "../../common/components/Action";
import AddEvent from "./AddEvent";
import Modal from "../../common/components/Modal";
import AdminEventActionData from "./EventData";

const AdminEventAction = () => {
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

  const actionData = {
    ...AdminEventActionData,
    buttonProps: {
      ...AdminEventActionData.buttonProps,
      onClick: handleOpenModal,
    },
  };

  return (
    <div>
        <ActionComponent {...actionData} />
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <AddEvent 
        {...AdminEventActionData.addeventprops}
        onSubmit={handleFormSubmit}
        />
      </Modal>
    </div>
  )
}

export default AdminEventAction;