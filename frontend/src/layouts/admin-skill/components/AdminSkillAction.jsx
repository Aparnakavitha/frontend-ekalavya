import React, { useState } from "react";
import ActionComponent from "../../common/components/Action";
import Modal from "../../common/components/Modal";
import AddSkill from "./AddSkill";
import DeleteSkill from "./DeleteSkill";
import {
  createSkill,
  deleteSkill,
  filterSkills,
} from "../../../services/Skills";
import {
  useSkills,
  setSkills,
} from "../../../pages/admin/admin-skills/AdminSkillContext";

const AdminSkillAction = () => {
  const { skills, setSkills, setChanged } = useSkills();
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [deleteSkillId, setDeleteSkillId] = useState(null);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenDelete = (skillId) => {
    setDeleteSkillId(skillId);
    setIsDeleteOpen(true);
  };

  const handleCloseDelete = () => {
    setIsDeleteOpen(false);
    setDeleteSkillId(null);
  };

  const handleFormSubmit = async (skill) => {
    try {
      const response = await createSkill({ skillName: skill });
      const newSkill = {
        skillName: response.responseData[0].skillName,
        id: response.responseData[0].id,
        count: response.responseData[0].count,
      };
      setSkills([...skills, newSkill]);
      setChanged(true);
      handleCloseModal();
    } catch (error) {
      console.error("Error adding skill:", error);
    }
  };

  const handleDeleteSubmit = async (deleteSkillId) => {
    try {
      await deleteSkill(deleteSkillId);
      setSkills((prevSkills) =>
        prevSkills.filter((skill) => skill.id !== deleteSkillId)
      );
      setChanged(true);
      handleCloseDelete();
    } catch (error) {
      console.error("Error deleting skill:", error);
    }
  };

  const handleSearchChange = async (value) => {
    const searchedSkill = await filterSkills(value);
    setSkills(searchedSkill);
  };

  const AdminSkillActionData = {
    heading: "Skills List",
    buttonProps: {
      variant: "tertiary",
      content: "+ Add New Skill",
      width: "full",
      onClick: handleOpenModal,
    },
    deleteProps: {
      variant: "primary",
      content: "\u00A0Remove a Skill\u00A0",
      width: "full",
      onClick: () => handleOpenDelete(deleteSkillId),
    },
    showDelete: true,
    searchWidth: "large",
    searchbarProps: {
      variant: "custom",
      placeholder: "Skill",
      onSearchChange: handleSearchChange,
    },
    showFiltersAndReset: false,
    searchPlaceholder: "Enter Skill Name",
  };

  return (
    <div>
      <ActionComponent {...AdminSkillActionData} />
      <Modal isOpen={isOpen} widthVariant="medium" onClose={handleCloseModal}>
        <AddSkill onSubmit={handleFormSubmit} onCancel={handleCloseModal} />
      </Modal>
      <Modal isOpen={isDeleteOpen} widthVariant="medium" onClose={handleCloseDelete}>
        <DeleteSkill onSubmit={handleDeleteSubmit} onCancel={handleCloseDelete} />
      </Modal>
    </div>
  );
};

export default AdminSkillAction;
