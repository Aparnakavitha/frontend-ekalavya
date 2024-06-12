import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import SideBar from "../../layouts/common/components/SideBar";
import Button from "../../components/buttons/PrimaryButton";
import Dp from "../../../src/assets/DP.png";
import edunexa from "../../../src/assets/edunexa.png";
import { MdEvent, MdAccountCircle, MdPsychology } from "react-icons/md";
import ProfileNotificationBox from "../../components/profilenotificationbox/ProfileNotificationBox";
import Footer from "../../layouts/common/components/Footer";
import MentorProfile from "./mentor-profile/MentorProfile";
import MentorEvents from "./mentor-events/MentorEvents";
import MentorSkills from "./mentor-skills/MentorSkills";
import MentorCreateEvent from "./mentor-events/MentorCreateEvent";

const MentorContent = () => {
  const navigate = useNavigate();

  const sample = {
    content: "Logout",
    variant: "primary",
    onClick: (r) => {
      console.log("clicked");
    },
    width: "full",
  };

  const sidebarContent = {
    button: <Button {...sample} />,
    listItems: [
      {
        icon: <MdAccountCircle />,
        name: "Profile",
        viewIcon: true,
        page: "profile",
      },
      { icon: <MdEvent />, name: "Events", viewIcon: true, page: "events" },
      {
        icon: <MdPsychology />,
        name: "Skills",
        viewIcon: true,
        page: "skills",
      },
    ],
    profileBox: {
      name: "Nazeem",
      profilePic: Dp,
      gmail: "nazeem@gmail.com",
    },
  };

  const handleSidebarItemClick = (page) => {
    navigate(`/mentor/${page}`);
  };

  const footercontent = {
    Logo: edunexa,
    quoteContent: "Embark on Your Learning Journey Today!",
    copyrightContent: "All rights reserved © 2024 Tarento Group.",
    copyrightContent2: " | Privacy Policy",
    isLeftALigned: true,
  };

  return (
    <div className="flexStart">
      <SideBar
        button={sidebarContent.button}
        listItems={sidebarContent.listItems}
        profileBox={sidebarContent.profileBox}
        onItemClick={handleSidebarItemClick}
      />
      <div className="page">
        <div>
          <div className="profilenotificationbox padding">
            <ProfileNotificationBox
              name={sidebarContent.profileBox.name}
              profilePic={sidebarContent.profileBox.profilePic}
              gmail={sidebarContent.profileBox.gmail}
            />
          </div>
          <div className="statecontent">
            <Routes>
              <Route exact path="/profile" element={<MentorProfile />} />
              <Route exact path="/events" element={<MentorEvents />} />
              <Route exact path="/skills" element={<MentorSkills />} />
              <Route path="/event-creation" element={<MentorCreateEvent />} />
            </Routes>
          </div>
        </div>
        <div className="footer">
          <Footer {...footercontent} />
        </div>
      </div>
    </div>
  );
};

export default MentorContent;
