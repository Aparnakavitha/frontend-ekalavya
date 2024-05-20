import React from "react";
import NavButton from "./NavButton";

export default {
  title: "Components/Button/Nav Button",
  component: NavButton,
  argTypes: {
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <NavButton {...args} />;

export const Navbutton = Template.bind({});
Navbutton.args = {
  pageName: "Home",
};
