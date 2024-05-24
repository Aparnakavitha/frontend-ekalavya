import React from "react";
import Addnewstudent from "./addNewstudent";

export default {
  title: "Layouts/Add New Student ",
  component: Addnewstudent,
};

const Template = (args) => <Addnewstudent {...args} />;

export const AddNewStudent = Template.bind({});
AddNewStudent.args = {};
