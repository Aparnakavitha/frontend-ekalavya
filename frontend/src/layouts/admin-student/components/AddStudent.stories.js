import AddStudent from "./AddStudent";
import React from "react";

export default {
  title: "layouts/AdminStudent/Components/AddStudent",
  component: AddStudent,
  args:{options: [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ]}
};

export const AddstudentForm = (args) => <AddStudent{...args} />;
