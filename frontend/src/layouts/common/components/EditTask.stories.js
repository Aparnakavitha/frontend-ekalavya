import React from "react";
import EditTask from "./EditTask";
 
export default {
  title: "Layouts/Common/Components/EditTask",
  component: EditTask,
};
 
const Template = (args) => <EditTask {...args} />;
 
export const Default = Template.bind({});
Default.args = {};
 