import React from "react";
import Deletebox from "./DeleteBox";

export default {
  title: "Layouts/Common/Components/DeleteBox",
  component: Deletebox,
};

const Template = (args) => <Deletebox {...args} />;

export const DeleteBox = Template.bind({});
DeleteBox.args = {
  title: "Confirmation Required",
  message: "Are you sure you want to remove this skill?",
  buttonText: "Confirm",
};
