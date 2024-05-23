import React from "react";
import styles from "./TabButton.module.css";

const TabButton = ({ status, onClick, isActive }) => {
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

export default TabButton;
