import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import ShowCards from "../../common/components/ShowCards";
import Modal from "../../common/components/Modal";
import { CombinedSkillForm } from "../../common";
import CardRow from "./Cardrow";
import { adminStudentSkillState, studentSkillState } from "../../../states/Atoms";
import { useRecoilValue } from "recoil";
import { Userskillpost } from "../../../services/Skills";
const SkillList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const studentSkills=useRecoilValue(adminStudentSkillState);
  const allSkills=useRecoilValue(studentSkillState);
 
 
  const addSkillOptions=allSkills.map((skill)=>({
    value:skill.id,
    label:skill.skillName,
  }))
 
  console.log("All defined skills:",addSkillOptions);
  const handleOpenModal = () => {
    setIsOpen(true);
  };
 
  const handleCloseModal = () => {
    setIsOpen(false);
  };
 
  const handleFormSubmit = async(formData) => {
    console.log("Form submitted with data:", formData);
    const submitResponse=await Userskillpost({})
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
    options: [
      ...addSkillOptions
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
 