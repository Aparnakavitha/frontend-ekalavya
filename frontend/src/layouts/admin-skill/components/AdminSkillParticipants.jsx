import React from "react";
import styles from "../AdminSkill.module.css";
import Table from "../../../components/table/Table";
import NavButton from "../../../components/buttons/NavButton";
import { useRecoilValue } from "recoil";
import { participantsState } from "../../../states/Atoms";

const AdminSkillParticipants = ({ data, headings, onClick, pageName }) => {
  const participants = useRecoilValue(participantsState);
  return (
    <div
      className={`${styles["adminskillparticipants-container"]} ${["padding"]} ${["padding-top"]} ${["padding-bottom"]}`}
    >
      <div className={`${styles["adminskillparticipants-navbuttons"]}`}>
        {pageName.map((name, index) => (
          <NavButton key={index} pageName={name} onClick={onClick} />
        ))}
      </div>
      <div className={`${styles["adminskillparticipants-table"]}`}>
        <Table data={participants} headings={headings} />
      </div>
    </div>
  );
};

export default AdminSkillParticipants;
