import React from "react";
import SearchBar from "../../../components/searchbar/Searchbar";
import Card from "../../../components/cards/SkillUser";
import styles from "../MentorSkill.module.css";
import profilePic from "../../../assets/SkillUser.png";

const Skillsearch = () => {
  const skillcard = {
    miniHeading: "Student",
    mainHeading: "John Doe",
    skills: ["Java", "HTML"],
    handleClick: (e) => {
      console.log("clicked");
    },
    profilepic: profilePic,
  };

  return (
    <div className={`${styles["skillsearch-skillssearch"]}`}>
      <h1 className={`${styles["skillsearch-skillsheading"]}`}>Skills</h1>
      <p className={`${styles["skillsearch-subheading"]}`}>
        add skills to students
      </p>
      <div className={`${styles["skillsearch-searchbar"]}`}>
        <SearchBar
          placeholder="Student Name/Student ID"
          onSearch={(query) => console.log(query)}
        />
      </div>

      <div className={`${styles["skillsearch-cardcontainer"]}`}>
        <Card {...skillcard} />
      </div>
    </div>
  );
};

export default Skillsearch;
