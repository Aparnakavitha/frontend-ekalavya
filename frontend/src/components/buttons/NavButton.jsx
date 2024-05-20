import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import styles from "./NavButton.module.css";

const NavButton = ({ pageName, onClick }) => {
  const goBack = () => {
    onClick();
  };

  return (
    <div className={styles.navButton} onClick={goBack}>
      <IoIosArrowBack className={styles.backArrow} />{" "}
      <span className={styles.pageName}> {pageName} </span>{" "}
    </div>
  );
};

export default NavButton;
