import React from 'react';
import SearchBar from '../../../components/searchbar/Searchbar';
import Card from '../../../components/cards/SkillUser';
import styles from '../MentorSkill.module.css';
import profilePic from '../../../assets/SkillUser.png';

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
        <div className={styles.skillsSearch}>
            <h1 className={styles.skillsHeading}>Skills</h1>
            <p className={styles.subHeading}>add skills to students</p>
            <div className={styles.searchbar}><SearchBar placeholder="Student Name/Student ID" onSearch={(query) => console.log(query)} /></div>

            <div className={styles.cardContainer}>
                <Card {...skillcard} />
            </div>
        </div>
    );
};

export default Skillsearch;
