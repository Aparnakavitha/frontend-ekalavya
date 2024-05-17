import React, { useState } from "react";
import Styles from "./Cards.module.css";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";
import { format } from 'date-fns';

const Cards=(props) =>{
  const {
    miniHeading,
    mainHeading,
    startDate,
    endDate,
    Desicription,
    handleClick,
  } = props;

  const transformMainHeading = (heading) => {
    if (heading && heading.length > 24) {
      return heading.slice(0, 20) + '...';
    }
    return heading;
  };

  const transformMainDescription = (description) => {
    if (description && description.length > 34) {
      return description.slice(0, 70) + '...';
    }
    return description;
  };

  // Format the dates and times using date-fns
  const formattedStartDate = format(new Date(startDate), 'MM/dd/yyyy hh:mm a'); // e.g., "05/16/2024 03:24 PM"
  const formattedEndDate = format(new Date(endDate), 'MM/dd/yyyy hh:mm a'); // e.g., "05/17/2024 04:30 PM"

  // State to track hover state
  const [isHover, setIsHover] = useState(false);

  // Function to handle mouse enter event
  const handleMouseEnter = () => {
    setIsHover(true);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const leftCardClass = isHover ? Styles.leftCardHover : Styles.leftCard;
  const rightCardClass = isHover ? Styles.rightCardHover : Styles.rightCard;
  const maskClass = isHover ? Styles.maskHover : Styles.mask;
  const mask2Class = isHover ? Styles.mask2Hover : Styles.mask2;
  const mask3Class = isHover ? Styles.mask3Hover : Styles.mask3;
  const mask4Class = isHover ? Styles.mask4Hover : Styles.mask4;
  const arrowClass = isHover ? Styles.arrowHover : Styles.arrow;
  const cardsClass = isHover ? Styles.CardOutlineHover : Styles.CardOutline;

  return (
    <div
      className={`${Styles.Cards}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={cardsClass} onClick={handleClick}>
        <a className={Styles.cardsminiheading}>{miniHeading}</a>
        <a className={Styles.cardsmainheading}>{transformMainHeading(mainHeading)}</a>
        <div className={Styles.dateRow}>
          <a className={Styles.cardsdate}>{formattedStartDate}</a>
          <div>
            <GoArrowRight />
          </div>
          <a className={Styles.cardsdate}>{formattedEndDate}</a>
        </div>
        <a className={Styles.cardsdiscription}>{transformMainDescription(Desicription)}</a>
      </div>
      <div className={Styles.CardsOutline}>
        <div className={leftCardClass}></div>
        <div className={rightCardClass}></div>
        <div className={maskClass}></div>
        <div className={mask4Class}></div>
        <div className={mask2Class}></div>
        <div className={mask3Class}></div>
      </div>
      <div className={arrowClass}>
        <GoArrowUpRight />
      </div>
    </div>
  );
}

export default Cards;
