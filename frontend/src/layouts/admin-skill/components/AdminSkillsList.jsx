import React, { useState } from "react";
import DataView from "../../common/components/DataView";
import SkillBatchCard from "../../../components/cards/SkillBatchCard";
import Modal from "../../common/components/Modal";
import UpdateSingleField from "../../../layouts/common/components/UpdateSingleField";
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

  const handleFormSubmit = (data) => {
    if (selectedSkill) {
      const updatedSkills = skills.map((skill) =>
        skill.miniHeading === selectedSkill.miniHeading
          ? { ...skill, mainHeading: data.inputData }
          : skill
      );
      setSkills(updatedSkills);
      console.log(
        "Updated skill:",
        selectedSkill.miniHeading,
        "to:",
        data.inputData
      );
    }
    handleCloseModal();
  };

  const skillData = {
    ...skillCardData,
    data: skills.map((skill) => ({
      ...skill,
      handleEditClick: () => handleOpenModal(skill),
    })),
  };

  return (
    <div>
      <DataView CardComponent={SkillBatchCard} {...skillData} />
      <Modal isOpen={isOpen} widthVariant="medium" onClose={handleCloseModal}>
        {selectedSkill && (
          <UpdateSingleField
            mainHeading="Edit Skill"
            labelTitle="Skill Name"
            placeHolder="Skill Name"
            buttonTitle="Save"
            initialData={{ inputData: selectedSkill.mainHeading }}
            onSubmit={handleFormSubmit}
            isEdit={true}
            message="You are updating :"
            skillId={selectedSkill.miniHeading}
          />
        )}
      </Modal>
    </div>
  );
};

export default AdminSkillsList;
