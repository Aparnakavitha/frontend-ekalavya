import React, { useState, useEffect } from "react";
import SearchBar from "../../../components/searchbar/Searchbar";
import SkillUser from "../../../components/cards/SkillUser";
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
    searchBarPlaceholder: "Enter Student Name",
  };

  const options = [
    { value: "abc", label: "ABC" },
    { value: "xyz", label: "XYZ" },
    { value: "pqr", label: "PQR" },
  ];

  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchInitialSkills() {
      try {
        setError(null);
        const skillsData = await getSkillsForUser("");
        const results = skillsData.responseData || skillsData;
        setSearchResults(results && results.length > 0 ? results : []);
      } catch (error) {
        setSearchResults([]);
        setError("Failed to fetch student skills.");
      }
    }

    fetchInitialSkills();
  }, []);

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

  const handleSearch = async () => {};

  const clearSearch = () => {
    setSearchResults([]);
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
        {searchResults.map((user, index) => (
          <div key={index}>
            {user.firstName && user.lastName && (
              <SkillUser
                mainHeading={`${user.firstName} ${user.lastName}`}
                miniHeading="Student"
                profilepic={profilePic}
                skills={(user.skills || []).map((skill) => ({
                  id: skill.id,
                  skillName: skill.skillName,
                  level: skill.skillLevel,
                }))}
                deleteSkill={() => openModal("delete", index)}
                addSkill={() => openModal("add")}
              />
            )}
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
