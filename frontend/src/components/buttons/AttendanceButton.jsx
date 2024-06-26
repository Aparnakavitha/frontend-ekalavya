import React, { useState, useEffect } from "react";
import styles from "./AttendanceButton.module.css";

const AttendanceButton = (props) => {
  const [isPresent, setIsPresent] = useState(props.IsPresent);

  useEffect(() => {
    setIsPresent(props.IsPresent);
  }, [props.IsPresent]);

  const handleClick = () => {
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
      <div className={`${styles.button} ${buttonClass}`} onClick={handleClick} style={{ cursor: isPresent ? "not-allowed" : "pointer" }}>
        {props.content}
      </div>
    </div>
  );
};

export default AttendanceButton;
