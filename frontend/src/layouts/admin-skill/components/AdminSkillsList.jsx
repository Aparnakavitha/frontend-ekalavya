import React, { useState, useEffect } from "react";
import DataView from "../../common/components/DataView";
import SkillBatchCard from "../../../components/cards/SkillBatchCard";
import Modal from "../../common/components/Modal";
import UpdateSingleField from "../../../layouts/common/components/UpdateSingleField";
import {
  SkillService,
  getUsersCountForSkill,
  updateSkill,
} from "../../../services/Skills";
import { useSkills } from "../../../pages/admin/admin-skills/AdminSkillContext";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { participantsState, studentSkillState } from "../../../states/Atoms";

const capitalizeFirstLetter = (string) => {
  return string.trim().charAt(0).toUpperCase() + string.slice(1);
};

const AdminSkillsList = ({ handleClick }) => {
  const { skills, setSkills, changed, setChanged } = useSkills();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [participants, setParticipants] = useRecoilState(participantsState);
  const [studentkills,setStudentSkills]=useRecoilState(studentSkillState);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await SkillService();
        const capitalizedSkills = response.map((skill) => ({
          ...skill,
          skillName: capitalizeFirstLetter(skill.skillName),
        }));
        setSkills(capitalizedSkills);
        setStudentSkills(capitalizedSkills);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchSkills();
    setChanged(false);
  }, [changed, setSkills, setChanged]);

  const handleOpenModal = (skill) => {
    setSelectedSkill(skill);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedSkill(null);
  };

  const handleFormSubmit = async (data) => {
    if (selectedSkill) {
      try {
        const response = await updateSkill({
          skillId: selectedSkill.id,
          skillName: data.inputData,
        });
        const updatedSkills = skills.map((skill) =>
          skill.id === selectedSkill.id
            ? { ...skill, skillName: capitalizeFirstLetter(data.inputData) }
            : skill
        );
        setSkills(updatedSkills);
      } catch (error) {
        console.error("Error updating skill: ", error);
      }
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
      handleClick: async () => {
        try {
          const response = await getUsersCountForSkill(skill.id);
          const participantData = response.users.map((user) => [
            user.userId,
            user.UserName,
            user.emailId,
          ]);

          setParticipants(participantData);
          navigate(`/admin/skills/skill-participants`);
        } catch (error) {
          console.error("Error fetching skill participants: ", error);
        }
      },
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
