import Education from "./Education";

export default {
  title: "Layouts/Education",
  component: Education,
};

const sample = {
  name: "Bachelor of Technology (B.Tech)",
  university: "Christ University",
  cgpa: 7.2,
  start: "May 2022",
  end: "April 2024",
  specialization: "Marketing",
};

export const EducationDark = {
  args: {
    ...sample,
  },
};
