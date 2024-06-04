import React, { useState } from "react";
import DataView from "../../common/components/DataView";
import DeleteBox from "../../common/components/DeleteBox";
import SkillBatchCard from "../../../components/cards/SkillBatchCard";
import Modal from "../../common/components/Modal";
import skillCardData from "./AdminSkillsListData";

const AdminSkillsList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [skills, setSkills] = useState(skillCardData.data);

  const handleOpenModal = (skill) => {
    setSelectedSkill(skill);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedSkill(null);
  };

  const handleFormSubmit = () => {
    if (selectedSkill) {
      const updatedSkills = skills.filter(
        (skill) => skill.miniHeading !== selectedSkill.miniHeading
      );
      setSkills(updatedSkills);
      console.log("Deleted skill ID:", selectedSkill.miniHeading);
    }
    handleCloseModal();
  };

  const skillData = {
    ...skillCardData,
    data: skills.map((skill) => ({
      ...skill,
      handleDeleteClick: () => handleOpenModal(skill),
    })),
  };

  return (
    <div>
      <DataView CardComponent={SkillBatchCard} {...skillData} />
      <Modal isOpen={isOpen} widthVariant="small" onClose={handleCloseModal}>
        <DeleteBox
          {...skillCardData.deleteProps}
          onCancel={handleCloseModal}
          onConfirm={handleFormSubmit}
        />
      </Modal>
    </div>
  );
};

export default AdminSkillsList;
