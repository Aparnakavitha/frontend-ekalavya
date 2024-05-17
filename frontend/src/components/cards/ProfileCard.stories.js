// Card.stories.js
import React from "react";
import { action } from "@storybook/addon-actions";
import ProfileCard from "./ProfileCard";

export default {
  title: "Components/ProfileCard",
  component: ProfileCard,
};

export const Default = (args) => (
  <ProfileCard {...args} onClick={action("clicked")} />
);

Default.args = {
  profileImage:
    "http://codeskulptor-demos.commondatastorage.googleapis.com/descent/red_stone_23_23.png",
  title1: "John Doe",
  title2: "Senior Software Engineer",
  title3: "San Francisco, USA",
  email: "johndoe@email.com",
  phone: "(555) 555-5555",
};
