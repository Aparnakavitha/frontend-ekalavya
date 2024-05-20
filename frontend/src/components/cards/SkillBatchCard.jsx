import React from "react";
import Styles from "./SkillBatchCard.module.css";
import { FaTrash } from "react-icons/fa6";

const SBCards = (props) => {
  const {
    miniHeading,
    mainHeading,
    Count,
    cardType,
    handleClick,
    handleDeleteClick,
  } = props;

  const transformMainHeading = (heading, cardType) => {
    let maxLength;
    if (cardType === "Skill") {
      maxLength = 30;
    } else {
      maxLength = 33;
    }

    if (heading.length > maxLength) {
      return heading.slice(0, maxLength - 2) + "...";
    }
    return heading;
  };

  const handleDeleteIconClick = (event) => {
    event.stopPropagation();
    handleDeleteClick();
  };

  let formattedCount;
  if (Count >= 0) {
    const countStr = Count.toString().slice(0, 15);
    const displayedCount = parseInt(countStr, 10);
    formattedCount =
      displayedCount === 1 ? "1 Student" : `${displayedCount} Students`;
  } else {
    formattedCount = "0 Students";
  }

  return (
    <div className="row">
      <div className={`col-lg-2 col-md-3 col-sm-4 col-xs-6 ${Styles.Cards}`}>
        <div
          className={cardType === "Skill" ? Styles.rightCard : Styles.leftCard}
          onClick={handleClick}
        >
          <div className={Styles.titleContainer}>
            <a className={Styles.cardsminiheading}>{miniHeading}</a>
            <a
              className={Styles.cardsmainheading}
              style={
                cardType === "Skill" ? { width: "90%" } : { width: "auto" }
              }
            >
              {transformMainHeading(mainHeading, cardType)}
            </a>
            <a className={Styles.cardsdiscription}>{formattedCount}</a>
          </div>
          {cardType === "Skill" && (
            <FaTrash
              className={Styles.deleteIcon}
              onClick={handleDeleteIconClick}
              title="Delete"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SBCards;
