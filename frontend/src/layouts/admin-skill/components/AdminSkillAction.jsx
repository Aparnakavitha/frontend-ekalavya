import React, { useState } from "react";
import ActionComponent from "../../common/components/Action";
import Modal from "../../common/components/Modal";
import AddSkill from "./AddSkill";
import {
  createSkill,
  deleteSkill,
  filterSkills,
} from "../../../services/Skills";
import {
  useSkills,
  setSkills,
} from "../../../pages/admin/admin-skills/AdminSkillContext";

const AdminSkillAction = ({ setCardAnimation, count }) => {
  const { skills, setSkills, setChanged } = useSkills();
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");

  const handleOpenModal = () => {
    setIsOpen(true);
    setError("");
    setCardAnimation(false);
  };

  const handleCloseModal = () => {
    setError("");
    setIsOpen(false);
  };



  const handleFormSubmit = async (skill) => {
    try {
      const response = await createSkill({ skillName: skill });
      const newSkill = {
        skillName: response.responseData[0].skillName,
        id: response.responseData[0].id,
        count: response.responseData[0].count,
      };
      newSkill.newEntry = true;
      setCardAnimation(true);
      setSkills([newSkill, ...skills]);
      handleCloseModal();
      setError("");
    } catch (error) {
      console.error("Error adding skill:", error);
      setError("Skill name already exists");
    }
  };

 

  const handleSearchChange = async (value) => {
    try {
      const searchedSkill = await filterSkills(value);
      console.log("search response from search skills", searchedSkill);
      setSkills(searchedSkill);
    } catch (error) {
      console.error("Error occured in skill search", error);
      setSkills([]);
    }
  };

  const AdminSkillActionData = {
    heading: "Skills List",
    buttonProps: {
      variant: "tertiary",
      content: "+ Add New Skill",
      width: "full",
    },
    deleteProps: {
      variant: "tertiary",
      content: "Delete Skill",
      width: "full",
    },
    showDelete: false,
    deleteProps: {
      variant: "primary",
      content: "\u00A0Remove a Skill\u00A0",
      width: "full",
    },
    searchWidth: "large",
    searchbarProps: {
      variant: "custom",
      placeholder: "Skill",
    },
    showFiltersAndReset: false,
    searchPlaceholder: "Enter Skill Name",
  };

  const actionData = {
    ...AdminSkillActionData,
    count,
    buttonProps: {
      ...AdminSkillActionData.buttonProps,
      onClick: handleOpenModal,
    }
  };

  return (
    <div>
      <ActionComponent
        {...actionData}
        count={skills.length}
        onSearchChange={handleSearchChange}
      />
      <Modal isOpen={isOpen} widthVariant="medium" onClose={handleCloseModal}>
        <AddSkill
          onSubmit={handleFormSubmit}
          error={error}
          onCancel={handleCloseModal}
        />
      </Modal>
     
    </div>
  );
};

export default AdminSkillAction;
