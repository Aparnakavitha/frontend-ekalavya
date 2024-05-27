import React from "react";
import EducationForm from "./EducationForm";
import { action } from "@storybook/addon-actions";
import "./EducationForm.module.css"; // Ensure the CSS is imported

export default {
  title: "Forms/EducationForm",
  component: EducationForm,
};

const options = [
  { value: "High School", label: "High School" },
  { value: "Bachelor's Degree", label: "Bachelor's Degree" },
  { value: "Master's Degree", label: "Master's Degree" },
  { value: "Ph.D.", label: "Ph.D." },
];

const Template = (args) => <EducationForm {...args} />;

export const AddNew = Template.bind({});
AddNew.args = {
  heading: "Add New Education Qualification",
  options: options,
  initialValues: {}, // No initial values for adding new
  onSubmit: action("form-submitted"),
};

const existingData = {
  degree:{ value: "High School", label: "High School" },
  specialization: "Computer Science",
  university: "XYZ University",
  cgpa: "3.8",
  startDate: "2015-09-01",
  endDate: "2019-06-01",
};

export const EditExisting = Template.bind({});
EditExisting.args = {
  heading: "Edit Education Qualification",
  options: options,
  initialValues:{degree:"High School"}, // Pre-filled values for editing
  onSubmit: action("form-submitted"),
};
