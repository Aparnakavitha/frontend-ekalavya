import React, { useState } from "react";
import Styles from "./skilluser.module.css";
import { ImCross } from "react-icons/im";
import { FaPlus } from "react-icons/fa6";

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

function Card(props) {
  const {
    miniHeading,
    mainHeading,
    alttext,
    profilepic,
    skills,
    handleClick,
    addSkill,
    deleteSkill,
  } = props;

  const [showAllSkills, setShowAllSkills] = useState(false);

  const cardsClass = Styles.CardOutline;

  const displayedSkills = showAllSkills ? skills : skills.slice(0, 4);

  return (
    <div className={`container ${Styles.Cards}`}>
      <div className={`row ${cardsClass} ${Styles.cardsClass}`} onClick={handleClick}>
        <div className={`col-md-6 ${Styles.profile}`}>
          <div className={`${Styles.profilepiccontainer}`}>
            <img
              src={profilepic}
              className={`${Styles.profilepicture}`}
              alt={alttext}
            />
          </div>
          <div className={`${Styles.heading}`}>
            <div className={`${Styles.cardsmainheading}`}>{transformMainHeading(mainHeading)}</div>
            <div className={`${Styles.cardsminiheading}`}>{transformMainHeading(miniHeading)}</div>
          </div>
        </div>

        <div className={`col-md-6 ${Styles.lower}`}>
          <div className={Styles.buttons}>
            <div className={`row ${Styles.buttonsContainer}`}>
              {displayedSkills.map((skill, index) => (
                <div key={index} className={`col-6 ${Styles.button}`}>
                  {transformMiniHeading(skill)}
                  <ImCross onClick={() => deleteSkill(index)}
                    style={{
                      cursor: "pointer",
                      fontSize: "10px",
                    }}
                  />
                </div>
              ))}
            </div>
            {skills.length > 4 && (
              <div className={`btn ${Styles.viewButton}`} onClick={() => setShowAllSkills(!showAllSkills)}>
                {showAllSkills ? "View Less" : "View More"}
              </div>
            )}
            <div className={`col-6 ${Styles.addButtonContainer}`}>
              <button className={`btn ${Styles.addButton}`} onClick={addSkill}>
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
}


export default Card;
