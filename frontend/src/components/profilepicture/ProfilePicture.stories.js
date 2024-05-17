import React from "react";
import ProfilePicture from "./ProfilePicture"; // Assuming you have a ProfilePicture component

export default {
  title: "ProfilePicture",
  component: ProfilePicture,
  argTypes: {
    size: {
      control: { type: "radio", options: ["big", "small"] },
    },
  },
};

export const sample = (args) => <ProfilePicture {...args} />;
sample.args = {
  src: "https://via.placeholder.com/150",
  size: "small",
};
