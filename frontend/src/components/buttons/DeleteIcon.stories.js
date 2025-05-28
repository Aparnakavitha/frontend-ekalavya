import React from "react";
import DeleteIcon from "./DeleteIcon";
 
export default {
  title: "Components/Buttons/DeleteIcon",
  component: DeleteIcon,
  argTypes: {
    onClick: { action: "clicked" },
  },
};
 
const Template = (args) => <DeleteIcon {...args} />;
 
export const Default = Template.bind({});
Default.args = {};