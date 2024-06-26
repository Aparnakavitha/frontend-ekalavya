import React, { useState } from "react";
import styles from "./SkillUser.module.css";
import { ImCross } from "react-icons/im";
import { FaPlus } from "react-icons/fa";

const SkillUser = ({
  miniHeading,
  mainHeading,
  alttext,
  profilepic,
  skills,
  handleClick,
  addSkill,
  deleteSkill,
}) => {
  const transformMainHeading = (heading) => {
    if (heading.length > 12) {
      return heading.slice(0, 10) + "...";
    }
    return heading;
  };

  const transformMiniHeading = (heading) => {
    if (heading.length > 17) {
      return heading.slice(0, 15) + "...";
    }
    return heading;
  };

  const [showAllSkills, setShowAllSkills] = useState(false);
  const displayedSkills = showAllSkills ? skills : skills.slice(0, 4);

  return (
    <div className={`container ${styles.cards}`}>
      <div className={`row ${styles.cardsClass}`} onClick={handleClick}>
        <div className={`col-md-6 ${styles.profile}`}>
          <div className={`${styles.profilepiccontainer}`}>
            <img
              src={profilepic}
              className={`${styles.profilepicture}`}
              alt={alttext}
            />
          </div>
          <div className={`${styles.heading}`}>
            <div
              className={`${styles.cardsmainheading}`}
              title={mainHeading}
            >
              {transformMainHeading(mainHeading)}
            </div>
            <div
              className={`${styles.cardsminiheading}`}
              title={miniHeading}
            >
              {transformMiniHeading(miniHeading)}
            </div>
          </div>
        </div>

        <div className={`col-md-6 ${styles.lower}`}>
          <div className={styles.buttons}>
            <div className={`row ${styles.buttonsContainer}`}>
              {displayedSkills.map((skill, index) => (
                <div key={index} className={`col-6 ${styles.button}`}>
                  {transformMiniHeading(skill.skillName)}
                  <ImCross
                    onClick={() => deleteSkill(index)}
                    style={{
                      cursor: "pointer",
                      fontSize: "10px",
                    }}
                  />
                </div>
              ))}
            </div>
            {skills.length > 4 && (
              <div
                className={`btn ${styles.viewButton}`}
                onClick={() => setShowAllSkills(!showAllSkills)}
              >
                {showAllSkills ? "View Less" : "View More"}
              </div>
            )}
            <div className={`col-6 ${styles.addButtonContainer}`}>
              <button
                className={`btn ${styles.addButton}`}
                onClick={addSkill}
              >
                <FaPlus
                  style={{
                    cursor: "pointer",
                    fontSize: "26px",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillUser;
