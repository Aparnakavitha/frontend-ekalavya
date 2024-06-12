import React from "react";
import { RecoilRoot, useRecoilState } from "recoil";
import SideBar from "../../layouts/common/components/SideBar";
import Button from "../../components/buttons/PrimaryButton";
import Dp from "../../../src/assets/DP.png";
import edunexa from "../../../src/assets/edunexa.png";
import { MdEvent } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { MdPsychology } from "react-icons/md";
import { currentPageState } from "./MentorAtoms";
import ProfileNotificationBox from "../../components/profilenotificationbox/ProfileNotificationBox";
import Footer from "../../layouts/common/components/Footer";
import MentorProfile from "./mentor-profile/MentorProfile";
import MentorEvents from "./mentor-events/MentorEvents";
import MentorSkills from "./mentor-skills/MentorSkills";
import MentorCreateEvent from "./mentor-create-event/MentorCreateEvent";

const MentorContent = () => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);

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
    setCurrentPage(page);
  };

  const handleClick = () => {
    setCurrentPage("event-creation");
  };

  const renderContent = () => {
    switch (currentPage) {
      case "profile":
        return <MentorProfile />;
      case "events":
        return <MentorEvents onclick = {handleClick}/>;
      case "skills":
        return <MentorSkills />;
      case "event-creation":
        return <MentorCreateEvent/>  
      default:
        return <MentorProfile />;
    }
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
          <div className="statecontent">{renderContent()}</div>
        </div>
        <div className="footer">
          <Footer {...footercontent} />
        </div>
      </div>
    </div>
  );
};

const Mentor = () => (
  <RecoilRoot>
    <MentorContent />
  </RecoilRoot>
);

export default Mentor;
