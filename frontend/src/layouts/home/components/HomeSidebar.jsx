import React from "react";
import SideBar from "../../common/components/SideBar";
import Dp from "../../../assets/DP.png";
import {
  BsFillCheckCircleFill,
  BsFillCalendarCheckFill,
  BsFillMotherboardFill,
} from "react-icons/bs";

const HomeSidebar = () => {
  return (
    <SideBar
      listItems={[
        { icon: <BsFillCheckCircleFill />, name: "Courses" },
        { icon: <BsFillMotherboardFill />, name: "Projects" },
        { icon: <BsFillCalendarCheckFill />, name: "Events" },
      ]}
      profileBox={{
        name: "Sana Parvin",
        profilePic: Dp,
        gmail: "sanaparvin@gmail.com",
      }}
    />
  );
};

export default HomeSidebar;
