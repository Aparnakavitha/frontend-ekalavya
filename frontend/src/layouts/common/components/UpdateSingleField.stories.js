import React from "react";
import UpdateSingleFieldComponent from "./UpdateSingleField";

export default {
  title: "Layouts/Common/Components/Single Filed",
  component: UpdateSingleFieldComponent,
};

const Template = (args) => <UpdateSingleFieldComponent {...args} />;

export const Addnewstudent = Template.bind({});

Addnewstudent.args = {
  mainHeading: "Add Student",
  labelTitle: "Add student ID",
  placeHolder: "Student ID",
  buttonTitle: "Add"
};

export const Editbatchname = Template.bind({});

Editbatchname.args = {
  mainHeading: "Edit Batch Name",
  labelTitle: "Batch Name",
  placeHolder: "Batch Name",
  buttonTitle: "Save",
  initialData:{inputData: "Batch 1"}
};
