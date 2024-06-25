import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import ShowCards from "../../common/components/ShowCards";
import Modal from "../../common/components/Modal";
import { CombinedSkillForm } from "../../common";
import CardRow from "./Cardrow";
import {
  adminStudentSkillState,
  studentSkillState,
} from "../../../states/Atoms";
import { useRecoilValue, useRecoilState } from "recoil";
import { Userskillpost } from "../../../services/Skills";

const SkillList = ({ studentId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [studentSkills, setStudentSkills] = useRecoilState(
    adminStudentSkillState
  );
  const allSkills = useRecoilValue(studentSkillState);

  const addSkillOptions = allSkills.map((skill) => ({
    value: skill.id,
    label: skill.skillName,
  }));

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleFormSubmit = async (formData) => {
    const submitResponse = await Userskillpost({
      userId: studentId,
      skillId: formData.selectedSkills,
    });
    const selectedSkillName = addSkillOptions.find(
      (option) => option.value === formData.selectedSkills
    );

    const newSkillState = {
      miniHeading: formData.selectedSkills,
      mainHeading: selectedSkillName.label,
      canEdit: true,
      canDelete: true,
      cardType: "skill",
    };
    setStudentSkills([...studentSkills, newSkillState]);
    handleCloseModal();
  };

  const heading = {
    heading: "Skills",
    textbuttonprops: {
      icon: <AiOutlinePlus />,
      text: "Add new Skill",
      onClick: handleOpenModal,
    },
  };

  const addSkill = {
    mainHeading: "Add New Skill",
    isSelect: false,
    isEditlevel: false,
    buttonTitle: "Add Skill",
    options: [...addSkillOptions],
  };

  const skillcards = {
    card: "skill",
    cardData: [...studentSkills],
  };

  return (
    <div>
      <ShowCards {...heading} />
      <Modal isOpen={isOpen} widthVariant="medium" onClose={handleCloseModal}>
        <CombinedSkillForm {...addSkill} onSubmit={handleFormSubmit} />
      </Modal>
      {studentSkills.length === 0 ? (
        <div
          style={{
            textAlign: "left",
            color: "var(--neutral600)",
            marginTop: "-40px",
          }}
          className="padding"
        >
          &nbsp;&nbsp;No skills to display
        </div>
      ) : (
        <CardRow {...skillcards} />
      )}
    </div>
  );
};

export default SkillList;
