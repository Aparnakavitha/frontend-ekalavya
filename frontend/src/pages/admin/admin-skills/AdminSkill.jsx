import React from "react";
import { useNavigate } from "react-router-dom";
import AdminSkillData from "../../../services/admin/skill/AdminSkillData";
import { Greeting } from "../../../layouts/common";
import AdminSkillAction from "../../../layouts/admin-skill/components/AdminSkillAction";
import AdminSkillsList from "../../../layouts/admin-skill/components/AdminSkillsList";
import { SkillsProvider } from './AdminSkillContext'; // Adjust the import path as necessary

const AdminSkill = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/admin/skills/skill-participants`);
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
