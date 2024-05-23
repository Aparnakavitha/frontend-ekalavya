import React from "react";
import styles from "./RectangleButton.module.css";

const RectangleButton = ({ status, onClick, isActive }) => {
  return (
    <div>
      <h1
        className={`${styles.EventStatus} ${isActive ? styles.active : ""}`}
        onClick={onClick}
      >
        {status}
      </h1>
    </div>
  );
};

export default RectangleButton;
