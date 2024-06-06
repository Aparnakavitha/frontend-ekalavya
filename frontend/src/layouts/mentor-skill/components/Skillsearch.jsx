import React, { useState } from "react";
import SearchBar from "../../../components/searchbar/Searchbar";
import Card from "../../../components/cards/SkillUser";
import styles from "../MentorSkill.module.css";
import Modal from "../../common/components/Modal";
import CombinedSkillForm from "../../common/components/CombinedSkillForm";
import DeleteBox from "../../common/components/DeleteBox";
import { skillData } from "./skillData";

const Skillsearch = () => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: "",
    selectedIndex: null,
  });

  const openModal = (type, index = null) =>
    setModalState({ isOpen: true, type, selectedIndex: index });
  const closeModal = () =>
    setModalState({ isOpen: false, type: "", selectedIndex: null });

  const handleAddSkill = () => {
    closeModal();
  };

  const handleDeleteSkill = () => {
    console.log("Delete Skill");
    closeModal();
  };

  return (
    <div className={`${styles["skillsearch-skillssearch"]}`}>
      <h1 className={`${styles["skillsearch-skillsheading"]}`}>{skillData.heading}</h1>
      <p className={`${styles["skillsearch-subheading"]}`}>{skillData.subheading}</p>
      <div className={`${styles["skillsearch-searchbar"]}`}>
        <SearchBar placeholder={skillData.searchBarPlaceholder} onSearch={skillData.onSearch} />
      </div>

      <div className={`${styles["skillsearch-cardcontainer"]}`}>
        {skillData.skillcard.map((card, index) => (
          <div key={index}>
            <Card
              {...card}
              deleteSkill={() => openModal("delete", index)}
              addSkill={() => openModal("add")}
            />
          </div>
        ))}
      </div>

      {modalState.isOpen && (
        <Modal
          isOpen={modalState.isOpen}
          widthVariant={modalState.type === "add" ? "medium" : "small"}
          onClose={closeModal}
        >
          {modalState.type === "add" ? (
            <CombinedSkillForm
              mainHeading="Add New Skill"
              isSelect={true}
              isEditlevel={false}
              displaytext="This skill is only to be placed at level 1"
              buttonTitle="Add Skill"
              options={skillData.options}
              onSubmit={handleAddSkill}
            />
          ) : (
            <DeleteBox
              title="Delete Skill"
              message="Are you sure you want to delete this skill?"
              buttonText="Delete"
              onCancel={closeModal}
              onConfirm={handleDeleteSkill}
            />
          )}
        </Modal>
      )}
    </div>
  );
};

export default Skillsearch;
