import React, { useState, useEffect } from "react";
import styles from "./AttendanceButton.module.css";

const AttendanceButton = (props) => {
  const [isPresent, setIsPresent] = useState(props.IsPresent);

  useEffect(() => {
    setIsPresent(props.IsPresent);
  }, [props.IsPresent]);

  const handleClick = () => {
    if (props.disabled) {
      console.log(`Button is disabled: ${props.content}`);
      return;
    }

    if (isPresent) {
      console.log("Already Present");
      return;
    }

    setIsPresent(true);
    props.onClick();
  };

  const buttonClass = isPresent ? styles.present : styles.absent;

  return (
    <div>
      <div className={`${styles.button} ${buttonClass}`} onClick={handleClick} style={{ cursor: props.disabled ? "not-allowed" : "pointer" }}>
        {props.content}
      </div>
    </div>
  );
};

export default AttendanceButton;
