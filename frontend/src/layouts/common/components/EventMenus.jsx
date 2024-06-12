import React, { useState } from "react";
import styles from "../Common.module.css";
import Button from "../../../components/buttons/PrimaryButton";
import TabButton from "../../../components/buttons/TabButton";

const EventMenus = ({ explore, statuses, title }) => {
  const [activeStatus, setActiveStatus] = useState(statuses[0].name);

  const handleButtonClick = (status) => {
    setActiveStatus(status);
  };

  return (
    <div className={`${styles["eventmenus-container"]} padding`}>
      <div className={`${styles["eventmenus-head"]}`}>
        <h1 className={`${styles["eventmenus-title"]}`}>{title}</h1>
        <div className={`${styles["eventmenus-explorebutton"]}`}>
          <Button {...explore} />
        </div>
      </div>
      <div className={`${styles["eventmenus-tabbutton"]}`}>
        {statuses.map((status) => (
          <TabButton
            key={status.name}
            status={status.name}
            isActive={activeStatus === status.name}
            onClick={() => {
              handleButtonClick(status.name);
              status.onClick();
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default EventMenus;
