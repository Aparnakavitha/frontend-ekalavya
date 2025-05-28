import React from "react";
import CreateTask from "./CreateTask";
 
export default {
  title: "Layouts/Common/Components/CreateTask",
  component: CreateTask,
};
 
const Template = (args) => <CreateTask {...args} />;
 
export const Default = Template.bind({});
Default.args = {};
 