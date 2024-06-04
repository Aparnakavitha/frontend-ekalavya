import React, { useState } from "react";
import ActionComponent from "../../common/components/Action";
import AddUser from "../../common/components/AddUser";
import Modal from "../../common/components/Modal";
import AdminMentorActionData from "./MentorData";

const AdminMentorAction = () => {
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
    ...AdminMentorActionData,
    buttonProps: {
      ...AdminMentorActionData.buttonProps,
      onClick: handleOpenModal,
    },
  };

  return (
    <div>
      <ActionComponent {...actionData} />

      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <AddUser
          {...AdminMentorActionData.adduserprops}
          onSubmit={handleFormSubmit}
        />
      </Modal>
    </div>
  );
};

export default AdminMentorAction;
