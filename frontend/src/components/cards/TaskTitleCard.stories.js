import React from "react";
import TaskTitleCard from "./TaskTitleCard";

export default {
  title: "Components/Cards/Task Title",
  component: TaskTitleCard,
  argTypes: {
    projectName: { control: "text" }
  },
};

const Template = (args) => <TaskTitleCard {...args} />;

export const DefaultTaskTitle = Template.bind({});
DefaultTaskTitle.args = {
  projectName: "Advanced Java Programming"
};

