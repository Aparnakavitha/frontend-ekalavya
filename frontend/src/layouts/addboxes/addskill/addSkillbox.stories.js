import React from "react";
import Addskill from "./addSkillbox";

export default {
  title: "Layouts/Add Skill ",
  component: Addskill,
};

const Template = (args) => <Addskill {...args} />;

export const AddSkill = Template.bind({});
AddSkill.args = {
  mainHeading:"Add New Skill"
};
