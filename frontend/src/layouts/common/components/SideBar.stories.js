import React from "react";
import SideBar from "./SideBar";
import Dp from "../../../assets/DP.png";
import {
  BsHouseFill,
  BsPersonCircle,
  BsFileEarmarkTextFill,
  BsFillCheckCircleFill,
  BsLayoutTextSidebar,
  BsFillCalendarCheckFill,
  BsFillMotherboardFill,
  BsBookmarkCheckFill,
} from "react-icons/bs";
import Button from "../../../components/buttons/PrimaryButton";

const sample = {
  content: "Submit",
  variant: "primary",
  onclick: (r) => {
    console.log("clicked");
  },
  width: "full",
};

export default {
  title: "layouts/Common/Components/SideBar",
  component: SideBar,
  args: {
    button: <Button {...sample} />,
    listItems: [
      { icon: <BsHouseFill />, name: "Home", viewIcon: false },
      { name: "Profile" },
      { name: "Task" },
      { icon: <BsFillCheckCircleFill />, name: "Skills", viewIcon: true },
      { icon: <BsFillCalendarCheckFill />, name: "Events", viewIcon: true },
      { icon: <BsBookmarkCheckFill />, name: "Wishlist", viewIcon: true },
    ],
    profileBox: {
      name: "Sana Parvin",
      profilePic: Dp,
      gmail: "sanaparvin@gmail.com",
    },
  },
};
export const Default = (args) => <SideBar {...args} />;
