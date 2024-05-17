import React from "react";
import TestimonialCard from "./TestimonialCard";

export default {
  title: "Components/TestimonialCard",
  component: TestimonialCard,
  argTypes: {
    name: { control: "text" },
    info: { control: "text" },
    place: { control: "text" },
    description: { control: "text" },
    profilePicture: { control: "text" },
  },
};

const Template = (args) => <TestimonialCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "John Doe",
  info: "Senior Software Engineer",
  place: "Sans-Francisco, USA",
  description:
    "As a marketing professional with no prior background in data science, this course provided me with a solid foundation to make a career transition. The hands-on projects and expert guidance from Dr. Rodriguez made complex concepts accessible. I now feel confident applying data science techniques to enhance my decision-making processes in marketing.",
  profilePicture: "https://via.placeholder.com/150",
};
