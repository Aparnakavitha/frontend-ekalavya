import React from "react";
import { useNavigate } from "react-router-dom";
import AdminSkillData from "../../../services/admin/skill/AdminSkillData";
import { CombinedSkillForm, Greeting } from "../../../layouts/common";
import AdminSkillAction from "../../../layouts/admin-skill/components/AdminSkillAction";
import AdminSkillsList from "../../../layouts/admin-skill/components/AdminSkillsList";
import { getUsersCountForSkill } from "../../../services/Skills";
import { SkillsProvider, setParticipants } from "./AdminSkillContext";

const AdminSkill = () => {
  const navigate = useNavigate();

  const handleClick = (skillData) => {
    console.log("Data from skill card: ", skillData);
    const skillParticipants = getUsersCountForSkill(skillData);
    console.log(skillParticipants);
    navigate(`/admin/skills/skill-participants`);
  };

  const loggedUserFirstName = sessionStorage.getItem("firstName");

  const greet = {
    welcome: "Welcome Back",
    name: loggedUserFirstName || "",
    info: "Here is the information about",
    profile: "skills",
    showButtons: false,
  };

  return (
    <SkillsProvider>
      <div>
        <Greeting {...greet} />
        <AdminSkillAction />
        <AdminSkillsList handleClick={handleClick} />
      </div>
    </SkillsProvider>
  );
};

export default AdminSkill;
