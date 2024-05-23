import React from "react";
import styles from "./SkillBatchCard.module.css";
import { FaTrash } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";

const SBCards = (props) => {
  const {
    miniHeading,
    mainHeading,
    Count,
    cardType,
    handleClick,
    handleDeleteClick,
    handleEditClick,
    canEdit,
  } = props;

  const transformMainHeading = (heading, cardType) => {
    let maxLength;
    if (cardType === "skill") {
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

  const handleEditIconClick = (event) => {
    event.stopPropagation();
    handleEditClick(); 
  };
  let formattedCount;

  if (cardType === "skill" && canEdit) {
    const level = Count !== undefined ? Math.min(Math.max(Count, 1), 5) : 1;
    formattedCount = `Level ${level}`;
  } else {
    if (Count >= 0) {
      const countStr = Count.toString().slice(0, 15);
      const displayedCount = parseInt(countStr, 10);
      formattedCount =
        displayedCount === 1 ? "1 Student" : `${displayedCount} Students`;
    } else {
      formattedCount = "0 Students";
    }
  }

  return (
    <div className="row">
      <div className={`col-lg-2 col-md-3 col-sm-4 col-xs-6 ${styles.cards}`}>
        <div
          className={cardType === "skill" ? styles.rightCard : styles.leftCard}
          onClick={handleClick}
        >
          <div className={styles.titleContainer}>
            <a className={styles.cardsminiheading}>{miniHeading}</a>
            <a
              className={styles.cardsmainheading}
              style={
                cardType === "skill" ? { width: "90%" } : { width: "auto" }
              }
            >
              {transformMainHeading(mainHeading, cardType)}
            </a>
            <a className={styles.cardsdiscription}>{formattedCount}</a>
          </div>
          {cardType === "skill" && (
            <>
              <FaTrash
                className={styles.deleteIcon}
                onClick={handleDeleteIconClick}
                title="Delete"
              />
              {canEdit && (
                <MdModeEdit
                  className={styles.editIcon}
                  onClick={handleEditIconClick}
                  title="Edit"
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SBCards;
