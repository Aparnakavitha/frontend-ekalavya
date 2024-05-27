import React from "react";
import Editskill from "./editSkill";

export default {
  title: "Layouts/Edit Skill ",
  component: Editskill,
};

const Template = (args) => <Editskill {...args} />;

export const EditSkill = Template.bind({});

EditSkill.args = { 
  mainHeading:"Edit Skill Level",
  message: "Please update your skill level.",
  skillName: "JavaScript",
};
