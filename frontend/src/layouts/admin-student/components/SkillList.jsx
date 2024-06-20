import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import ShowCards from "../../common/components/ShowCards";
import Modal from "../../common/components/Modal";
import { CombinedSkillForm } from "../../common";
import CardRow from "./Cardrow";
import { adminStudentSkillState } from "../../../states/Atoms";
import { useRecoilValue } from "recoil";
const SkillList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const studentSkills=useRecoilValue(adminStudentSkillState);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleFormSubmit = (formData) => {
    console.log("Form submitted with data:", formData);
    handleCloseModal();
  };

  // SkillData
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
    options: [
      { value: "abc", label: "ABC" },
      { value: "xyz", label: "XYZ" },
      { value: "pqr", label: "PQR" },
    ],
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
      <CardRow {...skillcards} />
    </div>
  );
};

export default SkillList;
