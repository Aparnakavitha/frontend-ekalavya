import React from "react";
import { action } from "@storybook/addon-actions";
import skillTag from "./SkillTag";
export default {
  title: "Components/SkillTag",
  component: skillTag,
};

export const Default = {
  args: {
    title: "Java",
  },
};
