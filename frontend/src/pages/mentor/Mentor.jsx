import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Routes, Route } from "react-router-dom";
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
import MentorEventDetails from "./mentor-events/MentorEventDetails";
import { getUserDetails } from "../../services/User";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../../components/loadingspinner/LoadingSpinner";

const MentorContent = () => {
  const [Data, setData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const location = useLocation();

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const userId = sessionStorage.getItem("user_id");
      const params = {
        userId: userId,
      };
      const data = await getUserDetails(params);
      setData(data.responseData[0]);
      console.log("mentor data:", Data);
    } catch (error) {
      console.error("Error fetching mentor data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!Data) {
    return <LoadingSpinner />;
  }

  const primaryData = {
    name: `${Data.firstName} ${Data.lastName}`,
    email: Data.emailId,
  };

  const sample = {
    content: "Logout",
    variant: "primary",
    onClick: (r) => {
      sessionStorage.clear();
      navigate("/");
      toast.success("LogOut Successful", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
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
      name: primaryData.name,
      profilePic: Dp,
      gmail: primaryData.email,
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
        location={location}
        user="mentor"
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
              <Route path="/profile" element={<MentorProfile />} />
              <Route path="/events" element={<MentorEvents />} />
              <Route path="/skills" element={<MentorSkills />} />
              <Route path="/event-creation" element={<MentorCreateEvent />} />
              <Route
                path="/event-details/:eventId"
                element={<MentorEventDetails />}
              />
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
