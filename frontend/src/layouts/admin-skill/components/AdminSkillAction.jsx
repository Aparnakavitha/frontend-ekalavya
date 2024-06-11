import React, { useState } from "react";
import ActionComponent from "../../common/components/Action";
import Modal from "../../common/components/Modal";
import AdminSkillActionData from "./SkillData";
import AddSkill from "./AddSkill";

const AdminSkillAction = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleFormSubmit = (skill) => {
    console.log("Form submitted with skill:", skill);
    handleCloseModal();
  };

  const actionData = {
    ...AdminSkillActionData,
    buttonProps: {
      ...AdminSkillActionData.buttonProps,
      onClick: handleOpenModal,
    },
  };

  return (
    <div>
      <ActionComponent {...actionData} />
      <Modal isOpen={isOpen} widthVariant="medium" onClose={handleCloseModal}>
        <AddSkill onSubmit={handleFormSubmit} onClose={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default AdminSkillAction;
