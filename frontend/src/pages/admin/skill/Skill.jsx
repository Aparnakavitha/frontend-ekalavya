import React from "react";
import SkillData from "./SkillData";
import { Greeting } from "../../../layouts/common";
import AdminSkillAction from "../../../layouts/admin-skill/components/AdminSkillAction";
import AdminSkillsList from "../../../layouts/admin-skill/components/AdminSkillsList";

const Skill = () => {
  return (
    <div>
      <Greeting {...SkillData.greeting} />
      <AdminSkillAction />
      <AdminSkillsList />
    </div>
  );
};

export default Skill;
