import React from "react";
import DeleteBox from "./DeleteBox";

export default {
  title: "Layouts/Common/Components/DeleteBox",
  component: DeleteBox,
};

const Template = (args) => <DeleteBox {...args} />;

export const deleteBox = Template.bind({});
deleteBox.args = {
  title: "Confirmation Required",
  message: "Are you sure you want to remove this task?",
  buttonText: "Confirm",
};
