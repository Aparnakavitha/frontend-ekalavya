import React, { useState } from "react";
import ActionComponent from "../../common/components/Action";
import AddUser from "../../common/components/AddUser";
import Modal from "../../common/components/Modal";
import AdminStudentActionData from "./SampleData";

const AdminStudentAction = () => {
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
    ...AdminStudentActionData,
    buttonProps: {
      ...AdminStudentActionData.buttonProps,
      onClick: handleOpenModal,
    },
  };

  return (
    <div>
      <ActionComponent {...actionData} />
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <AddUser
          {...AdminStudentActionData.adduserprops}
          onSubmit={handleFormSubmit}
        />
      </Modal>
    </div>
  );
};

export default AdminStudentAction;
