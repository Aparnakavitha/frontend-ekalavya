import React from "react";
import NavButton from "./NavButton";

export default {
  title: "NavButton",
  component: NavButton,
  argTypes: {
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <NavButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  pageName: "Home",
};
