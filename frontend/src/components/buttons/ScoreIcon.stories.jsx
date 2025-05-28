import React from "react";
import ScoreIcon from "./ScoreIcon";
 
export default {
  title: "Components/Buttons/ScoreIcon",
  component: ScoreIcon,
  argTypes: {
    score: { control: "number" },
    total: { control: "number" },
  },
};
 
const Template = (args) => <ScoreIcon {...args} />;
 
export const Default = Template.bind({});
Default.args = {
  score: 7,
  total: 10,
};