import React from "react";
import TaskSubTitleCard from "./TaskSubTitleCard";
 
export default {
  title: "Components/Cards/TaskSubTitleCard",
  component: TaskSubTitleCard,
  argTypes: {
    number: { control: "number" },
    title: { control: "text" },
    dueDate: { control: "text" },
  },
};
 
const Template = (args) => <TaskSubTitleCard {...args} />;
 
export const DefaultTaskSubTitleCard = Template.bind({});
DefaultTaskSubTitleCard.args = {
  number: 1,
  title: "Analyze competitor websites and identify industry trends.",
  dueDate: "02-Jan-2024",
};