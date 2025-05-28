import React from "react";
import EditMark from "./EditMark";
 
export default {
  title: "Layouts/Common/Components/EditMark",
  component: EditMark
};
 
const Template = (args) => <EditMark {...args} />;
 
export const Default = Template.bind({});
Default.args = {
  heading: "Edit Mark",
  onSubmit: (mark) => alert(`Submitted Mark: ${mark}`),
};