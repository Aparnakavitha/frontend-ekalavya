import React from "react";
import AddSubmission from "./AddSubmission";
 
export default {
  title: "Layouts/Common/Components/AddSubmission",
  component: AddSubmission,
};
 
const Template = (args) => <AddSubmission {...args} />;
 
export const Default = Template.bind({});
Default.args = {
  heading: "Add Submission",
  onSubmit: (file) => alert(`Submitted file: ${file.name}`),
};