import React from "react";
import styles from "../Common.module.css";

const Greeting = (props) => {
  const { welcome, name, info, profile, showButtons, handleClick } = props;

  return (
    <div className={`${styles["common-content"]}`}>
      <div className={`${styles["common-body"]}`}>
        <div className={`${styles["common-welcome"]}`}>
          {welcome} {name}
        </div>
        <div className={`${styles["common-header"]}`}>
          <div className={`${styles["common-info"]}`}>
            {info} {profile}
          </div>
          {showButtons ? (
            <div className={`${styles["common-greenlink"]}`}>
              <a href="#" onClick={handleClick}>
                View Colleges
              </a>
              <a href="#" onClick={handleClick}>
                +Add New College
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Greeting;
