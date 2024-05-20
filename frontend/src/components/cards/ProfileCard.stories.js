import React from "react";
import { action } from "@storybook/addon-actions";
import ProfileCard from "./ProfileCard";
import image from "../../assets/DP.png"

export default {
  title: "Components/Cards/Profile Card",
  component: ProfileCard,
};

export const Profilecard = (args) => (
  <ProfileCard {...args} onClick={action("clicked")} />
);

Profilecard.args = {
  profileImage:image,
  title2: "Senior Software Engineer",
  title3: "San Francisco, USA",
  email: "johndoe@email.com",
  phone: "(555) 555-5555",
};
