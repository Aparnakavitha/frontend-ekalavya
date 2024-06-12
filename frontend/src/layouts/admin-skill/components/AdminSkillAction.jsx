import React, { useState } from "react";
import ActionComponent from "../../common/components/Action";
import Modal from "../../common/components/Modal";
import AdminSkillActionData from "./SkillData";
import AddSkill from "./AddSkill";
import DeleteSkill from "./DeleteSkill";

const AdminSkillAction = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenDelete = () => {
    setIsDeleteOpen(true);
  };

  const handleCloseDelete = () => {
    setIsDeleteOpen(false);
  };

  const handleFormSubmit = (skill) => {
    console.log("Form submitted with skill:", skill);
    handleCloseModal();
  };

  const handleDeleteSubmit = (skill) => {
    console.log("Skill deleted:", skill);
    handleCloseDelete();
  };

  const actionData = {
    ...AdminSkillActionData,
    buttonProps: {
      ...AdminSkillActionData.buttonProps,
      onClick: handleOpenModal,
    },
    deleteProps: {
      ...AdminSkillActionData.deleteProps,
      onClick: handleOpenDelete,
    }
  };

  return (
    <div>
      <ActionComponent {...actionData} />
      <Modal isOpen={isOpen} widthVariant="medium" onClose={handleCloseModal}>
        <AddSkill 
          onSubmit={handleFormSubmit} 
          onCancel={handleCloseModal} 
        />
      </Modal>
      <Modal isOpen={isDeleteOpen} widthVariant="medium" onClose={handleCloseDelete}>
        <DeleteSkill 
          onSubmit={handleDeleteSubmit} 
          onCancel={handleCloseDelete} 
        />
      </Modal>
    </div>
  );
};

export default AdminSkillAction;
