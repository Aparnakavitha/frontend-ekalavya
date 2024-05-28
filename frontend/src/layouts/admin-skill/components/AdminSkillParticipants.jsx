import React from "react";
import styles from "../AdminSkill.module.css";
import Table from "../../../components/table/Table";
import NavButton from "../../../components/buttons/NavButton";

const AdminSkillParticipants = ({ data, headings, onClick, pageName }) => {
    return (
        <div className={`${styles["adminskillparticipants-container"]}`}>
        <div className={`${styles["adminskillparticipants-navbuttons"]}`}>
        {" "}
        {pageName.map((name, index) => (
          <NavButton key={index} pageName={name} onClick={onClick} />
        ))}{" "}
      </div>{" "}
      <div className={`${styles["adminskillparticipants-table"]}`}>
        {" "}
        <Table data={data} headings={headings} />
      </div>
    </div>
  );
};

export default AdminSkillParticipants
