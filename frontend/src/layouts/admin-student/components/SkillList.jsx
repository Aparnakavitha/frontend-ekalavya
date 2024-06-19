import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import ShowCards from "../../common/components/ShowCards";
import Modal from "../../common/components/Modal";
import { CombinedSkillForm } from "../../common";
import CardRow from "./Cardrow";

const SkillList = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    cardData: [
      {
        miniHeading: "Skill 1",
        mainHeading: "Java",
        Count: 2,
        cardType: "skill",
        canEdit: true,
        canDelete: true,
      },
      {
        miniHeading: "Skill 2",
        mainHeading: "Python",
        Count: 3,
        cardType: "skill",
        canEdit: true,
        canDelete: true,
      },
    ],
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
