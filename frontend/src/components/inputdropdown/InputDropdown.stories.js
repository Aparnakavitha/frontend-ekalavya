import React, { useState } from "react";
import InputDropdown from "./InputDropdown";

export default {
  title: "components/InputDropdown",
  component: InputDropdown,
};

const Template = (args) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleInputChange = (option) => {
    setSelectedOption(option);
    if (args.handleInputChange) {
      args.handleInputChange(option);
    }
  };

  return (
    <InputDropdown
      {...args}
      value={selectedOption}
      onChange={handleInputChange}
    />
  );
};

export const InputDropDown = Template.bind({});

InputDropDown.args = {
  label: "Select Your Degree:",
  placeholder: "Select Your Degree",
  options: [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ],
  handleInputChange: (selectedOption) =>
    console.log("Selected option:", selectedOption),
};
