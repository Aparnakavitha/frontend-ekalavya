import React from "react";
import EditButton from "./EditButton";
 
export default {
  title: "Components/Buttons/EditButton",
  component: EditButton,
  argTypes: {
    onClick: { action: "clicked" },
  },
};
 
const Template = (args) => <EditButton {...args} />;
 
export const Default = Template.bind({});
Default.args = {};