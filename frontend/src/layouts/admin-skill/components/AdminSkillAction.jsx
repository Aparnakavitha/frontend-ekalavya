import React, { useState } from "react";
import ActionComponent from "../../common/components/Action";
import Modal from "../../common/components/Modal";
import AdminSkillActionData from "./SkillData";
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
import { toast } from "react-toastify";

const AdminSkillAction = () => {
  const { skills, setSkills, setChanged } = useSkills();
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [deleteSkillId, setDeleteSkillId] = useState(null);
  const [error, setError] = useState("");

  const handleOpenModal = () => {
    setIsOpen(true);
    setError("");
  };

  const handleCloseModal = () => {
    setError("");
    setIsOpen(false);
  };

  const handleOpenDelete = (skillId) => {
    setDeleteSkillId(skillId);
    setIsDeleteOpen(true);
    setError("");
  };

  const handleCloseDelete = () => {
    setIsDeleteOpen(false);
    setDeleteSkillId(null);
    setError("");
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
      toast.success("Skill created successfully!");
    } catch (error) {
      console.error("Error adding skill:", error);
      toast.error("Error adding skill!");
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
      toast.success("Skill removed successfully!");
    } catch (error) {
      toast.error("Error removing skill!");
      console.error("Error deleting skill:", error);
    }
  };

  const handleSearchChange = async (value) => {
    try {
      const searchedSkill = await filterSkills(value);
      console.log("search response from search skills", searchedSkill);
      setSkills(searchedSkill);
    } catch (error) {
      console.error("Error occured in skill search",error);
      toast.info("No match found");
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
      onClick: () => handleOpenDelete(deleteSkillId),
    },
  };

  return (
    <div>
      <ActionComponent {...actionData} onSearchChange={handleSearchChange} />
      <Modal isOpen={isOpen} widthVariant="medium" onClose={handleCloseModal}>
        <AddSkill
          onSubmit={handleFormSubmit}
          error={error}
          onCancel={handleCloseModal}
        />
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
