import React from "react";
import styles from "./SkillBatchCard.module.css";
import { FaTrash } from "react-icons/fa6";

const SkillBatchCard = (props) => {
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
      <div className={`col-lg-2 col-md-3 col-sm-4 col-xs-6 ${styles.cards}`}>
        <div
          className={cardType === "Skill" ? styles.rightCard : styles.leftCard}
          onClick={handleClick}
        >
          <div className={styles.titleContainer}>
            <a className={styles.cardsminiheading}>{miniHeading}</a>
            <a
              className={styles.cardsmainheading}
              style={
                cardType === "Skill" ? { width: "90%" } : { width: "auto" }
              }
            >
              {transformMainHeading(mainHeading, cardType)}
            </a>
            <a className={styles.cardsdiscription}>{formattedCount}</a>
          </div>
          {cardType === "Skill" && (
            <FaTrash
              className={styles.deleteIcon}
              onClick={handleDeleteIconClick}
              title="Delete"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillBatchCard;
