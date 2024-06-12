import React from "react";
import AdminSkillData from "../../../services/admin/skill/AdminSkillData";
import { Greeting } from "../../../layouts/common";
import AdminSkillAction from "../../../layouts/admin-skill/components/AdminSkillAction";
import AdminSkillsList from "../../../layouts/admin-skill/components/AdminSkillsList";

const AdminSkill = () => {
  return (
    <div>
      <Greeting {...AdminSkillData.greeting} />
      <AdminSkillAction />
      <AdminSkillsList />
    </div>
  );
};

export default AdminSkill;
