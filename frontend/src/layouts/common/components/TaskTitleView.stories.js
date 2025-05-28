import React from "react";
import TaskTitleView from "./TaskTitleView";
 
export default {
  title: "Layouts/Common/Components/Task Title View",
  component: TaskTitleView,
};
 
const Template = (args) => <TaskTitleView {...args} />;
 
export const DefaultView = Template.bind({});
DefaultView.args = {
  projectNames: [
    "Advanced Java Programming",
    "Exploring Future Technologies",
    "Online Restaurant Table Booking"
  ]
};