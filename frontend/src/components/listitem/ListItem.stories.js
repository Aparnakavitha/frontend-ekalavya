import React from "react";
import ListItem from "./ListItem";
import { BsHouse } from "react-icons/bs";

export default {
  title: "components/ListItem",
  component: ListItem,
};

const Template = (args) => <ListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <BsHouse />,
  name: "Home",
  viewIcon: true
};

export const iconless = Template.bind({});
iconless.args = {
  icon: <BsHouse />,
  name: "Home",
  viewIcon: false
};
