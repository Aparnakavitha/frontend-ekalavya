// import inputBox from "./InputBox";

// export default {
//   title: "components/InputBox",
//   component: inputBox,
// };

// const NormalData = {
//   label: "Enter email address",
//   size: "normal",
//   placeholders: ["Email Address"],
// };

// const SmallData = {
//   label: "First Name",
//   size: "small",
//   placeholders: ["First Name"],
// };

// const TallData = {
//   label: "Enter Address",
//   size: "tall",
//   placeholders: ["Address"],
// };

// export const Normal = {
//   args: {
//     ...NormalData,
//   },
// };

// export const Small = {
//   args: {
//     ...SmallData,
//   },
// };

// export const Tall = {
//   args: {
//     ...TallData,
//   },
// };



import React, { useState } from "react";
import Input from "./InputBox";
 
export default {
  title: "Components/Input",
  component: Input,
};
 
const Template = (args) => {
  const [value, setValue] = useState("");
  return (
    <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />
  );
};
 
export const NormalSize = Template.bind({});
NormalSize.args = {
  size: "normal",
  label: "Normal Input",
  placeholders: ["Enter text"],
};
 
export const SmallSize = Template.bind({});
SmallSize.args = {
  size: "small",
  label: "Small Input",
  placeholders: ["Enter text"],
};
 
export const TallSize = Template.bind({});
TallSize.args = {
  size: "tall",
  label: "Tall Input",
  placeholders: ["Enter text"],
};
 
export const DatePicker = Template.bind({});
DatePicker.args = {
  size: "normal",
  label: "Date Picker",
  placeholders: ["Select date"],
  isDatePicker: true,
};
 
export const TimePicker = Template.bind({});
TimePicker.args = {
  size: "normal",
  label: "Time Picker",
  placeholders: ["Select time"],
  isTimePicker: true,
};
 
export const FileInput = Template.bind({});
FileInput.args = {
  size: "normal",
  label: "Select File",
  placeholders: ["Select file"],
  isFileInput: true,
};