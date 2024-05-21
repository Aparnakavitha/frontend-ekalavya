import React from "react";
import Header from "./Header";
import edunexa from "../../assets/edunexa.png";
import Button from "../../components/buttons/PrimaryButton"


const sample = {
  content: "Login",
  variant: "primary",
  onclick: (r) => {
    console.log("clicked");
  },
  width: "full",

}
export default {
  title: "Layouts/Header",
  component: Header,
  args: {
    // children: 'Login',
    menuItems: ["Leaderboard", "Track", "Top performers", "Testimonials"], 
    imageSrc: edunexa, // Placeholder for imageSrc prop,
    // button : <PrimaryButton children={"Login"}/>
    button: <Button {...sample}/>
  },
};

export const HeaderComponent = (args) => <Header {...args} />;