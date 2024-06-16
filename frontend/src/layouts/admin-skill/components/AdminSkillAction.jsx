import React, { useState } from "react";
import ActionComponent from "../../common/components/Action";
import Modal from "../../common/components/Modal";
import AdminSkillActionData from "./SkillData";
import AddSkill from "./AddSkill";
import DeleteSkill from "./DeleteSkill";
import {
  createSkill,
  deleteSkill,
} from "../../../services/student/skills/StudentSkillService";
import { useSkills } from "../../../pages/admin/admin-skills/AdminSkillContext";

const AdminSkillAction = () => {
  const { skills, setSkills } = useSkills();
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
        skillName: response.skill_name,
        id: response.skill_id,
        count: 0, // Assuming new skill starts with 0 count
      };
      setSkills([...skills, newSkill]); // Directly update the skills state
      handleCloseModal();
    } catch (error) {
      console.error("Error adding skill:", error);
    }
  };

  const handleDeleteSubmit = async () => {
    try {
      await deleteSkill(deleteSkillId);
      setSkills((prevSkills) =>
        prevSkills.filter((skill) => skill.id !== deleteSkillId)
      );
      handleCloseDelete();
    } catch (error) {
      console.error("Error deleting skill:", error);
    }
  };

  const actionData = {
    ...AdminSkillActionData,
    buttonProps: {
      ...AdminSkillActionData.buttonProps,
      onClick: handleOpenModal,
    },
    deleteProps: {
      ...AdminSkillActionData.deleteProps,
      onClick: () => handleOpenDelete(deleteSkillId), // Ensure deleteSkillId is set appropriately
    },
  };

  return (
    <div>
      <ActionComponent {...actionData} />
      <Modal isOpen={isOpen} widthVariant="medium" onClose={handleCloseModal}>
        <AddSkill onSubmit={handleFormSubmit} onCancel={handleCloseModal} />
      </Modal>
      <Modal
        isOpen={isDeleteOpen}
        widthVariant="medium"
        onClose={handleCloseDelete}
      >
        <DeleteSkill
          onSubmit={handleDeleteSubmit}
          onCancel={handleCloseDelete}
        />
      </Modal>
    </div>
  );
};

export default AdminSkillAction;
