import React, { useState, useEffect } from "react";
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
    viewAnimation = false,
  } = props;
  const [viewAnimations, setViewAnimation] = useState(viewAnimation);
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
  const [animationTimeoutId, setAnimationTimeoutId] = useState(null);

  useEffect(() => {
    if (viewAnimations) {
      const timeoutId = setTimeout(() => {
        setViewAnimation(false);
      }, 2000);

      setAnimationTimeoutId(timeoutId);
    }

    return () => {
      if (animationTimeoutId) {
        clearTimeout(animationTimeoutId);
      }
    };
  }, [viewAnimations]);
  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const leftCardClass = viewAnimations
    ? `${styles.leftCardHover}`
    : isHover
      ? styles.leftCardHover
      : styles.leftCard;
  const rightCardClass = viewAnimations
    ? `${styles.rightCardHover}`
    : isHover
      ? styles.rightCardHover
      : styles.rightCard;
  const maskClass = viewAnimations
    ? `${styles.maskHover}`
    : isHover
      ? styles.maskHover
      : styles.mask;
  const mask2Class = viewAnimations
    ? `${styles.mask2Hover}`
    : isHover
      ? styles.mask2Hover
      : styles.mask2;
  const mask3Class = viewAnimations
    ? `${styles.mask3Hover}`
    : isHover
      ? styles.mask3Hover
      : styles.mask3;
  const mask4Class = viewAnimations
    ? `${styles.mask4Hover}`
    : isHover
      ? styles.mask4Hover
      : styles.mask4;
  const mask5Class = viewAnimations
    ? `${styles.mask5Hover}`
    : isHover
      ? styles.mask5Hover
      : styles.mask5;
  const arrowClass = viewAnimations
    ? `${styles.arrowHover}`
    : isHover
      ? styles.arrowHover
      : styles.arrow;
  const cardsClass = viewAnimations
    ? `${styles.cardOutlineHover}`
    : isHover
      ? styles.cardOutlineHover
      : styles.cardOutline;

  const cardClass = viewAnimations ? `${styles.highlight}` : styles.cards;

  return (
    <div
      className={cardClass}
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
