import React from "react";
import AddSkill from "./AddSkill";

export default {
  title: "layouts/AdminSkill/Components/AddSkill",
  component: AddSkill,
};

const Template = (args) => <AddSkill {...args} />;

export const addSkill = Template.bind({});
addSkill.args = {};
