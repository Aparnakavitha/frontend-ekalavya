import React from "react";
import AddnewstudentComponent from "./AddNewStudent";

export default {
  title: "Layouts/AdminBatches/Components/Add New Student ",
  component: AddnewstudentComponent,
};

const Template = (args) => <AddnewstudentComponent {...args} />;

export const Addnewstudent = Template.bind({});

Addnewstudent.args = {
  mainHeading: "Add Student",
};
