import React, { useState } from "react";
import styles from "./PrimaryCard.module.css";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";
import { format } from "date-fns";
 
const PrimaryCard = (props) => {
  const {
    miniHeading,
    mainHeading,
    startDate,
    endDate,
    Description,
    handleClick,
  } = props;
 
  const transformMainHeading = (heading) => {
    if (heading && heading.length > 17) {
      return heading.slice(0, 17) + "...";
    }
    return heading;
  };
 
  const transformMainDescription = (description) => {
    if (description && description.length > 34) {
      return description.slice(0, 70) + "...";
    }
    return description;
  };
 
  const formattedStartDate = format(new Date(startDate), "MMM dd, yyyy");
  const formattedEndDate = format(new Date(endDate), "MMM dd, yyyy");
 
  const [isHover, setIsHover] = useState(false);
 
  const handleMouseEnter = () => {
    setIsHover(true);
  };
 
  const handleMouseLeave = () => {
    setIsHover(false);
  };
 
  const leftCardClass = isHover ? styles.leftCardHover : styles.leftCard;
  const rightCardClass = isHover ? styles.rightCardHover : styles.rightCard;
  const maskClass = isHover ? styles.maskHover : styles.mask;
  const mask2Class = isHover ? styles.mask2Hover : styles.mask2;
  const mask3Class = isHover ? styles.mask3Hover : styles.mask3;
  const mask4Class = isHover ? styles.mask4Hover : styles.mask4;
  const mask5Class = isHover ? styles.mask5Hover : styles.mask5;
  const arrowClass = isHover ? styles.arrowHover : styles.arrow;
  const cardsClass = isHover ? styles.cardOutlineHover : styles.cardOutline;
 
  return (
    <div
      className={`${styles.cards}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={cardsClass} onClick={handleClick}>
        <a className={styles.cardsminiheading}>{miniHeading}</a>
        <a className={styles.cardsmainheading} title={mainHeading}>
          {transformMainHeading(mainHeading)}
        </a>
        <div className={styles.dateRow}>
          <a className={styles.cardsdate}>{formattedStartDate}</a>
          <div>
            <GoArrowRight />
          </div>
          <a className={styles.cardsdate}>{formattedEndDate}</a>
        </div>
        <a className={styles.cardsdiscription} title={Description}>
          {transformMainDescription(Description)}
        </a>
      </div>
      <div className={styles.CardsOutline}>
        <div className={leftCardClass}></div>
        <div className={rightCardClass}></div>
        <div className={maskClass}></div>
        <div className={mask5Class}></div>
        <div className={mask4Class}></div>
        <div className={mask2Class}></div>
        <div className={mask3Class}></div>
      </div>
      <div className={arrowClass}>
        <GoArrowUpRight />
      </div>
    </div>
  );
};
 
export default PrimaryCard;
 