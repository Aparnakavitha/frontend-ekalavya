import React, { useState } from "react";
import Styles from "../Common.module.css";
import Button from "../../../components/buttons/PrimaryButton";
import RectangleButton from "../../../components/buttons/TabButton";

const EventMenus = ({ explore, statuses, title }) => {
  const [activeStatus, setActiveStatus] = useState(statuses[0].name);

  const handleButtonClick = (status) => {
    setActiveStatus(status);
  };

  return (
    <div className={Styles.eventContainer}>
      <div className={Styles.eventHead}>
        <h1 className={Styles.eventTitle}>{title}</h1>
        <div className={Styles.exploreButton}>
          <Button {...explore} />
        </div>
      </div>
      <div className={Styles.rectangleButtonsContainer}>
        {statuses.map((status) => (
          <RectangleButton
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
