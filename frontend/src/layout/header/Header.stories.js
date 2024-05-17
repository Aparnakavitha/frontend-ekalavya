import React from "react";
import Header from "./Header";
import edunexa from "../../edunexa.png";
import Button from "../Button/Button";

export default {
  title: "Header",
  component: Header,
  args: {
    // children: 'Login',
    menuItems: ["Leaderboard", "Track", "Top performers", "Testimonials"], // Placeholder for menuItems prop
    imageSrc: edunexa, // Placeholder for imageSrc prop,
    button: <Button children={"Login"} />,
  },
};

export const Default = (args) => <Header {...args} />;
