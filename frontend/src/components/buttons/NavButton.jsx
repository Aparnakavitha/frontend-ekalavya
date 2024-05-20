import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import Styles from "./NavButton.module.css";

const NavButton = ({ pageName, onClick }) => {
  const goBack = () => {
    onClick();
  };

  return (
    <div className={Styles.navButton} onClick={goBack}>
      <IoIosArrowBack className={Styles.backArrow} />{" "}
      <span className={Styles.pageName}> {pageName} </span>{" "}
    </div>
  );
};

export default NavButton;
