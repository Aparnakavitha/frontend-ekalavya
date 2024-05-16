import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import "./navbutton.css";

const NavButton = ({ pageName, onClick }) => {
  const goBack = () => {
    // Function to handle going back to the previous page
    onClick();
  };

  return (
    <div className="nav-button" onClick={goBack}>
      <IoIosArrowBack className="back-arrow" />
      <span className="page-name"> {pageName} </span>{" "}
    </div>
  );
};

export default NavButton;
