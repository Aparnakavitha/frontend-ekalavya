import React, { useState } from "react";
import ShowCards from "../../common/components/ShowCards";
import SkillData from "./SkillData";
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

  const heading = {
    ...SkillData.heading,
    textbuttonprops: {
      ...SkillData.heading.textbuttonprops,
      onClick: handleOpenModal,
    },
  };

  return (
    <div>
      <ShowCards {...heading} />
      <Modal isOpen={isOpen} widthVariant="medium" onClose={handleCloseModal}>
        <CombinedSkillForm
          {...SkillData.addSkill}
          onSubmit={handleFormSubmit}
        />
      </Modal>
      <CardRow {...SkillData.skillcards} />
    </div>
  );
};

export default SkillList;
