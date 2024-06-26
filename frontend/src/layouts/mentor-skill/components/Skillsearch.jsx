import React, { useState } from "react";
import SearchBar from "../../../components/searchbar/Searchbar";
import Card from "../../../components/cards/SkillUser";
import styles from "../MentorSkill.module.css";
import Modal from "../../common/components/Modal";
import CombinedSkillForm from "../../common/components/CombinedSkillForm";
import DeleteBox from "../../common/components/DeleteBox";
import profilePic from "../../../assets/SkillUser.png";
import { getSkillsForUser } from "../../../services/Skills";

const Skillsearch = () => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: "",
    selectedIndex: null,
  });

  const skillData = {
    heading: "Skills",
    subheading: "View skills of students",
    searchBarPlaceholder: "Enter Student ID",
  };

  const options = [
    { value: "abc", label: "ABC" },
    { value: "xyz", label: "XYZ" },
    { value: "pqr", label: "PQR" },
  ];

  const [searchResults, setSearchResults] = useState(null);
  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState(null);

  const openModal = (type, index = null) =>
    setModalState({ isOpen: true, type, selectedIndex: index });
  const closeModal = () =>
    setModalState({ isOpen: false, type: "", selectedIndex: null });

  const handleAddSkill = (data) => {
    console.log("Form submitted with data:", data);
    closeModal();
  };

  const handleDeleteSkill = () => {
    console.log("Delete Skill");
    closeModal();
  };

  const handleSearch = async (userId) => {
    try {
      setError(null);
      const skillsData = await getSkillsForUser(userId);
      setSearchResults(skillsData[0].skills);
      setSearchResult(skillsData[0].user_details);
    } catch (error) {
      console.error("Error fetching skills for user:", error.message);
      setSearchResults(null);
      setSearchResult(null);
      setError(error.message || "User not found or an error occurred.");
    }
  };

  const clearSearch = () => {
    setSearchResults(null);
    setSearchResult(null);
    setError(null);
  };

  return (
    <div
      className={`${styles["skillsearch-skillssearch"]} padding padding-top padding-bottom`}
    >
      <h1 className={`${styles["skillsearch-skillsheading"]}`}>
        {skillData.heading}
      </h1>
      <p className={`${styles["skillsearch-subheading"]}`}>
        {skillData.subheading}
      </p>
      <div className={`${styles["skillsearch-searchbar"]}`}>
        <SearchBar
          placeholder={skillData.searchBarPlaceholder}
          onSearch={handleSearch}
          onClear={clearSearch}
        />
      </div>

      <div className={`${styles["skillsearch-cardcontainer"]}`}>
        {error && <p className={`${styles["error-message"]}`}>{error}</p>}
        {searchResults && searchResults.length > 0 && (
          <Card
            mainHeading={searchResult.user_name}
            miniHeading="Student"
            profilepic={profilePic}
            skills={searchResults.map((skill) => skill.skillName)}
            deleteSkill={() => openModal("delete")}
            addSkill={() => openModal("add")}
          />
        )}
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
              options={options}
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
