import React, { useState } from "react";
import ActionComponent from "../../common/components/Action";
import AddEvent from "./AddEvent";
import Modal from "../../common/components/Modal";

const AdminEventAction = ({formSubmit, AdminEventActionData, onFilterChange, onSearchChange}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleFormSubmit = async (data) => {
    console.log("Form submitted with data:", data);
    handleCloseModal();
    formSubmit(data);
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
      <ActionComponent {...actionData} onFilterChange={onFilterChange} onSearchChange={onSearchChange}/>
      <Modal isOpen={isOpen} widthVariant="large" onClose={handleCloseModal}>
        <AddEvent
          {...AdminEventActionData.addeventprops}
          onSubmit={handleFormSubmit}
        />
      </Modal>
    </div>
  );
};

export default AdminEventAction;
