import React from "react";
import Header from "./Header";
import edunexa from "../../assets/edunexa.png";
// import Button from '../Buttons/PrimaryButton';

export default {
  title: "Layouts/Header",
  component: Header,
  args: {
    // children: 'Login',
    menuItems: ["Leaderboard", "Track", "Top performers", "Testimonials"], 
    imageSrc: edunexa, // Placeholder for imageSrc prop,
    // button : <PrimaryButton children={"Login"}/>
  },
};

export const HeaderComponent = (args) => <Header {...args} />;