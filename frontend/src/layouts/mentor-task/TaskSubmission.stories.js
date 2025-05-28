import React from "react";
import TaskSubmission from "./TaskSubmission";

export default {
  title: "layouts/mentor-task/TaskSubmission",
  component: TaskSubmission,
};

const Template = (args) => <TaskSubmission {...args} />;

export const TaskSubmissionTable = Template.bind({});
TaskSubmissionTable.args = {
  submissions: [
    {
      studentId: "S101",
      studentName: "Alice Johnson",
      submission: "File A",
      date: "2025-05-18",
      marks: 7.5,
    },
    {
      studentId: "S102",
      studentName: "Bob Smith",
      submission: "File B",
      date: "2025-05-18",
      marks: null,
    },
  ],
};
