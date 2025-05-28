import React from "react";
import AddMark from "./AddMark";
 
export default {
  title: "Layouts/Common/Components/AddMark",
  component: AddMark,
};
 
const Template = (args) => <AddMark {...args} />;
 
export const Default = Template.bind({});
Default.args = {
  heading: "Add Mark",
  onSubmit: (mark) => alert(`Submitted Mark: ${mark}`),
};