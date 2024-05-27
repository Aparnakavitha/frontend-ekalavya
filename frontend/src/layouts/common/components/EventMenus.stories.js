import React from "react";
import EventMenus from "./EventMenus";
import PrimaryButton from "../../../components/buttons/PrimaryButton";

export default {
  title: "layouts/common/Components/common",
  component: EventMenus,
  argTypes: {
    statuses: { control: "object" }, // Allow the statuses prop to be controlled
    title: { control: "text" }, // Allow the title prop to be controlled
  },
};

const explore = {
  content: "Explore Events",
  variant: "secondary",
  onClick: () => {
    console.log("Explore Events clicked");
  },
  width: "half",
};

const statuses = [
  { name: "Upcoming", onClick: () => console.log("Upcoming clicked") },
  { name: "Enrolled", onClick: () => console.log("Enrolled clicked") },
  { name: "Completed", onClick: () => console.log("Completed clicked") },
];

const Template = (args) => <EventMenus {...args} />;

export const Event = Template.bind({});
Event.args = {
  explore: explore,
  statuses: statuses,
  title: "Events",
};
