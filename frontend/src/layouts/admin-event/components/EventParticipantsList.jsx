import React from "react";
import styles from "../AdminEvent.module.css";
import Table from "../../../components/table/Table";
import NavButton from "../../../components/buttons/NavButton";

const EventParticipantsList = ({ data, headings, onClick, pageName }) => {
  return (
    <div
      className={`${styles["eventparticipantslist-container"]} ${["padding"]} ${["padding-top"]} ${["padding-bottom"]}`}
    >
      <div className={`${styles["eventparticipantslist-navbuttons"]}`}>
        {" "}
        {pageName.map((name, index) => (
          <NavButton key={index} pageName={name} onClick={onClick} />
        ))}{" "}
      </div>{" "}
      <div className={`${styles["eventparticipantslist-table"]}`}>
        {" "}
        <Table data={data} headings={headings} />
      </div>
    </div>
  );
};

export default EventParticipantsList;
