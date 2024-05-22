import React, { useState } from "react";
import Styles from "../StudentEvents.module.css";
import Button from "../../../components/buttons/PrimaryButton";
import RectangleButton from "../../../components/buttons/RectangleButton";
const EventMenus = ({ explore }) => {
  const [activeStatus, setActiveStatus] = useState('Upcoming');

  const handleButtonClick = (status) => {
    setActiveStatus(status);
  };

  return (
    <div className={Styles.eventContainer}>
      <div className={Styles.eventHead}>
        <h1 className={Styles.eventTitle}>Events</h1>
        <div className={Styles.exploreButton}>
          <Button {...explore} />
        </div>
      </div>
      <div className={Styles.rectangleButtonsContainer}>
        <RectangleButton
          status="Upcoming"
          isActive={activeStatus === 'Upcoming'}
          onClick={() => handleButtonClick('Upcoming')}
        />
        <RectangleButton
          status="Enrolled"
          isActive={activeStatus === 'Enrolled'}
          onClick={() => handleButtonClick('Enrolled')}
        />
        <RectangleButton
          status="Completed"
          isActive={activeStatus === 'Completed'}
          onClick={() => handleButtonClick('Completed')}
        />
      </div>
    </div>
  );
};

export default EventMenus;
