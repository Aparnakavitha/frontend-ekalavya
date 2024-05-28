import React from "react";
import Card from "../../../components/cards/SkillCard";
import { GoPlus } from "react-icons/go";
import styles from "./../StudentSkill.module.css";

const Layout = ({ initialSkills ,onAddSkill}) => {
  
  return (
    <div className={styles['skilllayout-skillTitle']}>
      <h3>Skills </h3>
    <div className={styles['skilllayout-layoutContainer']}>
    {initialSkills.map((SkillCard, index) =>  (
        <div key={index} className={styles['skilllayout-skillContainer']}>
          <Card
            subtitle={SkillCard.Level}
            title={SkillCard.mainHeading}
            onClose={SkillCard.isTrue}
            showCloseIcon={true}
          />
        </div>
       ))}
       <div className={styles['skilllayout-addButton']}>
        <GoPlus className={styles['skilllayout-plusIcon']} onClick={onAddSkill} />
       </div>
       </div>
    </div>
  );
};

export default Layout;
