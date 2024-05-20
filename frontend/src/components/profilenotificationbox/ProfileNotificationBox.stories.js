import React from "react";
import ProfileNotificationBox from "./ProfileNotificationBox";

export default {
  title: "ProfileNotificationBox/ProfileNotificationBox",
  component: ProfileNotificationBox,
};

const Template = (args) => <ProfileNotificationBox {...args} />;

export const ProfileNotificationbox = Template.bind({});
ProfileNotificationbox.args = {
  name: "Godwin George U",
  profilePic: "https://example.com/profile.jpg",
  gmail: "godwingeorgeu0805@gmail.com",
};
