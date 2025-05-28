import React from "react";
import ViewSubmissionButton from "./ViewSubmissionButton";
 
export default {
  title: "Components/Buttons/ViewSubmissionButton",
  component: ViewSubmissionButton,
  argTypes: {
    onClick: { action: "clicked" },
  },
};
 
const Template = (args) => <ViewSubmissionButton {...args} />;
 
export const Default = Template.bind({});
Default.args = {};