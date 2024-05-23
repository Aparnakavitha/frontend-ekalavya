import React from "react";
import RectangleButton from "./RectangleButton";

export default {
  title: "Components/RectangleButton",
  component: RectangleButton,
  argTypes: {
    status: { control: "text" },
    onClick: { action: "clicked" },
    isActive: { control: "boolean" },
  },
};

const Template = (args) => <RectangleButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  status: "Upcoming",
  isActive: false,
  onClick: () => {
    console.log("Button clicked");
  },
};
