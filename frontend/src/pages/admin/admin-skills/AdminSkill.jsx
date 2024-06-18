import React from "react";
import { useNavigate } from "react-router-dom";
import AdminSkillData from "../../../services/admin/skill/AdminSkillData";
import { CombinedSkillForm, Greeting } from "../../../layouts/common";
import AdminSkillAction from "../../../layouts/admin-skill/components/AdminSkillAction";
import AdminSkillsList from "../../../layouts/admin-skill/components/AdminSkillsList";
import { getUsersCountForSkill } from "../../../services/student/skills/StudentSkillService";
import { SkillsProvider, setParticipants } from "./AdminSkillContext";

const AdminSkill = () => {
  const navigate = useNavigate();

  const handleClick = (skillData) => {
    console.log("Data from skill card: ", skillData);
    navigate(`/admin/skills/skill-participants`);
    const skillParticipants = getUsersCountForSkill(skillData);
    console.log(skillParticipants);
  };

  return (
    <SkillsProvider>
      <div>
        <Greeting {...AdminSkillData.greeting} />
        <AdminSkillAction />
        <AdminSkillsList handleClick={handleClick} />
      </div>
    </SkillsProvider>
  );
};

export default AdminSkill;
