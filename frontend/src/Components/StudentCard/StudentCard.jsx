import React, { useState } from "react";
import Styles from "./StudentCard.module.css";
import { GoArrowUpRight } from "react-icons/go";

const StudentCard=(props)=> {
  const {
    studentImage = "./image.jpeg",
    studentName,
    studentId,
    studentCollege,
    studentMail,
    studentPhoneNumber,
    cardType,
    handleClick,
  } = props;

  const transformMainName = (studentName) => {
    if (studentName.length > 16) {
      return studentName.slice(0, 15) + '...';
    }
    return studentName;
  };

  const transformMainMail = (studentMail) => {
    if (studentMail.length > 19) {
      return studentMail.slice(0, 19) + '...';
    }
    return studentMail;
  };



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
      className={Styles.Cards}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={cardsClass} onClick={handleClick}>
        <img
          src={studentImage}
          alt="profile Picture"
          className={Styles.studentImage}
        />
        <div className={Styles.maincontent}>
          <a className={Styles.studentname}>{transformMainName(studentName)}</a>
          <a className={Styles.studentid}>{studentId}</a>
          <a className={Styles.studentcollege}>{studentCollege}</a>
        </div>
        <div className={Styles.maincontent}>
          <a className={Styles.studentmail}>{transformMainMail(studentMail)}</a>
          <a className={Styles.studentphonenumber}>{studentPhoneNumber}</a>
        </div>
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

export default StudentCard;
