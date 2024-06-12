import React from "react";
import HomeEventDescription from "../layouts/home-event-description/components/HomeEventDescription";
import Header from "../layouts/home/components/Header";
import Button from "../components/buttons/PrimaryButton";
import edunexa from "../assets/edunexa.png";
import Footer from "../layouts/common/components/Footer";

const EventDescription = () => {
  const sample = {
    content: "Login",
    variant: "primary",
    onClick: () => {
      console.log("Button clicked");
    },
    width: "full",
  };

  const headdata = {
    menuItems: [],
    imageSrc: edunexa,
    button: <Button {...sample} />,
  };
  const footerdata = {
    Logo: edunexa,
    quoteContent: "Embark on Your Learning Journey Today!",
    copyrightContent: "All rights reserved © 2024 Tarento Group.",
    copyrightContent2: " | Privacy Policy",
    isLeftALigned: false,
  };
  return (
    <div>
      <Header {...headdata} />
      <div className="spacebtw">
        <div className="padding public common">
          <HomeEventDescription />
        </div>
        <Footer {...footerdata} />
      </div>
    </div>
  );
};

export default EventDescription;
