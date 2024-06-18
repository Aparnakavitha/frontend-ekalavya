import React, { useState, useEffect } from "react";
import DataView from "../../common/components/DataView";
import SkillBatchCard from "../../../components/cards/SkillBatchCard";
import Modal from "../../common/components/Modal";
import UpdateSingleField from "../../../layouts/common/components/UpdateSingleField";
import {
  SkillService,
  updateSkill,
} from "../../../services/student/skills/StudentSkillService";
import { useSkills } from "../../../pages/admin/admin-skills/AdminSkillContext";

const capitalizeFirstLetter = (string) => {
  return string.trim().charAt(0).toUpperCase() + string.slice(1);
};

const AdminSkillsList = ({ handleClick }) => {
  const { skills, setSkills, changed, setChanged } = useSkills();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await SkillService();
        const capitalizedSkills = response.map((skill) => ({
          ...skill,
          skillName: capitalizeFirstLetter(skill.skillName),
        }));
        setSkills(capitalizedSkills);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchSkills();
    setChanged(false);
  }, [changed]);

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
      const response = updateSkill({
        skillId: selectedSkill.id,
        skillName: data.inputData,
      });
      console.log("Update response: ", response);
      const updatedSkills = skills.map((skill) =>
        skill.id === selectedSkill.id
          ? { ...skill, skillName: capitalizeFirstLetter(data.inputData) }
          : skill
      );
      setSkills(updatedSkills);
    }
    handleCloseModal();
  };

  const skillData = {
    data: skills.map((skill) => ({
      ...skill,
      mainHeading: capitalizeFirstLetter(skill.skillName),
      miniHeading: skill.id,
      Count: skill.count,
      canEdit: true,
      cardType: "skill",
      handleClick: handleClick,
      handleEditClick: () => handleOpenModal(skill),
    })),
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
            initialData={{ inputData: selectedSkill.skillName }}
            onSubmit={handleFormSubmit}
            isEdit={true}
            message="You are updating :"
            skillId={selectedSkill.skillName}
          />
        )}
      </Modal>
    </div>
  );
};

export default AdminSkillsList;
