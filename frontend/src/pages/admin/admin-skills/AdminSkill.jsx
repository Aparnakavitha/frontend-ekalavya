import React from "react";
import { useNavigate } from "react-router-dom";

import AdminSkillData from "../../../services/admin/skill/AdminSkillData";
import { Greeting } from "../../../layouts/common";
import AdminSkillAction from "../../../layouts/admin-skill/components/AdminSkillAction";
import AdminSkillsList from "../../../layouts/admin-skill/components/AdminSkillsList";

const AdminSkill = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/admin/skills/skill-participants`);
  };

  return (
    <div>
      <Greeting {...AdminSkillData.greeting} />
      <AdminSkillAction />
      <AdminSkillsList handleClick={handleClick} />
    </div>
  );
};

export default AdminSkill;
