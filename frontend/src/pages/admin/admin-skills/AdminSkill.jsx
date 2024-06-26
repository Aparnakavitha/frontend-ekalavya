import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSkillData from "../../../services/admin/skill/AdminSkillData";
import { CombinedSkillForm, Greeting } from "../../../layouts/common";
import AdminSkillAction from "../../../layouts/admin-skill/components/AdminSkillAction";
import AdminSkillsList from "../../../layouts/admin-skill/components/AdminSkillsList";
import { getUsersCountForSkill } from "../../../services/Skills";
import { SkillsProvider, setParticipants } from "./AdminSkillContext";

const AdminSkill = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = (skillData) => {
    console.log("Data from skill card: ", skillData);
    if (!isValidSkill(skillData)) {
      setErrorMessage("Skill already exists.");
      console.log("Error message set:", errorMessage); // Check if errorMessage is set
      return;
    }

    const skillParticipants = getUsersCountForSkill(skillData);
    console.log(skillParticipants);
    navigate(`/admin/skills/skill-participants`);
  };

  const isValidSkill = (skillData) => {
    // Example function to validate skill data (e.g., check if skill already exists)
    return !AdminSkillData.skillExists(skillData); // Replace with actual check
  };

  const loggedUserFirstName = sessionStorage.getItem("firstName");

  const greet = {
    welcome: "Welcome Back",
    name: loggedUserFirstName || "",
    info: "Here is the information about",
    profile: "skills",
    showButtons: false,
  };

  console.log("Rendering with errorMessage:", errorMessage); // Check if component renders with errorMessage

  return (
    <SkillsProvider>
      <div>
        <Greeting {...greet} />
        <AdminSkillAction />
        
        <AdminSkillsList handleClick={handleClick} />
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </SkillsProvider>
  );
};

export default AdminSkill;
