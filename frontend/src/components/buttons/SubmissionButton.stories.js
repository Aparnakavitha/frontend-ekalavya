import React from "react";
import SubmissionButton from "./SubmissionButton";
 
export default {
  title: "Components/buttons/SubmissionButton",
  component: SubmissionButton,
  argTypes: {
    onClick: { action: "clicked" },
  },
};
 
const Template = (args) => <SubmissionButton {...args} />;
 
export const Default = Template.bind({});
Default.args = {};