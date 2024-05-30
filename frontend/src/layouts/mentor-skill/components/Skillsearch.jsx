import React from "react";
import SearchBar from "../../../components/searchbar/Searchbar";
import Card from "../../../components/cards/SkillUser";
import styles from "../MentorSkill.module.css";

const Skillsearch = ({ heading, subheading, searchBarPlaceholder, skillcard, onSearch }) => {
  return (
    <div className={`${styles["skillsearch-skillssearch"]}`}>
      <h1 className={`${styles["skillsearch-skillsheading"]}`}>{heading}</h1>
      <p className={`${styles["skillsearch-subheading"]}`}>{subheading}</p>
      <div className={`${styles["skillsearch-searchbar"]}`}>
        <SearchBar
          placeholder={searchBarPlaceholder}
          onSearch={onSearch}
        />
      </div>

      <div className={`${styles["skillsearch-cardcontainer"]}`}>
        {skillcard.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Skillsearch;
