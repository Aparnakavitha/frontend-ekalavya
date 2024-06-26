import React, { useEffect, useState } from "react";
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
import { Userskillpost, getSkillsForUser } from "../../../services/Skills";
import { Slide, ToastContainer, toast } from "react-toastify";

const SkillList = ({ studentId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [studentSkills, setStudentSkills] = useRecoilState(
    adminStudentSkillState
  );
  const allSkills = useRecoilValue(studentSkillState);
  console.log("Student skill state", allSkills);

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
    try {
      const submitResponse = await Userskillpost({
        userId: studentId,
        skillId: formData.selectedSkills,
      });

      if (
        submitResponse.errorMessage === "User skill combination already exists"
      ) {
        toast.info("Skill already assigned to user", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        handleCloseModal();
        return;
      }

      const selectedSkillName = addSkillOptions.find(
        (option) => option.value === formData.selectedSkills
      );

      console.log("Selected skill details", selectedSkillName);

      const newSkillState = {
        miniHeading: selectedSkillName.value,
        mainHeading: selectedSkillName.label,
        skill_id: selectedSkillName.value,
        canEdit: true,
        canDelete: true,
        cardType: "skill",
      };
      setStudentSkills([...studentSkills, newSkillState]);
      console.log("student skills after adding new skill", studentSkills);
      console.log("Submission response", submitResponse);
      handleCloseModal();
    } catch (error) {
      console.error("Error submitting skill:", error);
      handleCloseModal();
      toast.error("An error occurred while adding the skill", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
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
      <CardRow {...skillcards} userId={studentId} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
    </div>
  );
};

export default SkillList;
