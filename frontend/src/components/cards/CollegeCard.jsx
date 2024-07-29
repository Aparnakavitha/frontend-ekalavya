import React from "react";
import styles from "./CollegeCard.module.css";
import { MdModeEdit } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import TextButton from "../buttons/TextButton";

const CollegeCard = (props) => {
  const {
    miniHeading,
    mainHeading = "",
    Count,
    cardType,
    handleClick,
    handleDeleteClick,
    handleEditClick,
    showCount,
    viewAnimation = false,
    placeHeading,
    showPlace,
  } = props;

  const transformMainHeading = (heading = "", cardType) => {
    let maxLength;

    if (cardType === "skill") {
      maxLength = 30;
    } else {
      maxLength = 35;
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
          className={
            cardType === "skill"
              ? `${styles.rightCard} ${viewAnimation ? styles.highlight : ""}`
              : `${styles.leftCard} ${viewAnimation ? styles.highlight : ""}`
          }
          onClick={handleClick}
        >
          <div className={styles.titleContainer}>
            <div className={styles.miniheadingDelete}>
              <a className={styles.cardsminiheading}>{miniHeading}</a>
            </div>
            <a className={styles.cardsmainheading}>
              {transformMainHeading(mainHeading, cardType)}
            </a>
            {showPlace && (<a className={styles.cardsplaceheading}>
              {transformMainHeading(placeHeading, cardType)}
            </a>)}
            {showCount && (
              <a className={styles.cardsdiscription}>{formattedCount}</a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
