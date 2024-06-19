import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import SideBar from "../../layouts/common/components/SideBar";
import Button from "../../components/buttons/PrimaryButton";
import Dp from "../../../src/assets/DP.png";
import edunexa from "../../../src/assets/edunexa.png";
import { MdEvent, MdAccountCircle, MdPsychology } from "react-icons/md";
import ProfileNotificationBox from "../../components/profilenotificationbox/ProfileNotificationBox";
import Footer from "../../layouts/common/components/Footer";
import StudentProfile from "./student-profile/StudentProfile";
import StudentEvent from "./student-events/StudentEvents";
import SkillLayout from "../../layouts/student-skill/components/SkillLayout";
import StudentEventDescription from "../../layouts/student-event-description/components/StudentEventDescription";
import LoadingSpinner from "../../components/loadingspinner/LoadingSpinner";
import { getUserDetails } from "../../services/User";
import { toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 

const StudentContent = () => {
  const [userData, setUserData] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = {
          userId: "3",
        };
        const data = await getUserDetails(params);
        setUserData(data.responseData[0]);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  if (!userData) {
    return <LoadingSpinner />;
  }


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
      name: "Nazeem",
      profilePic: Dp,
      gmail: "nazeem@gmail.com",
    },
  };

  const handleSidebarItemClick = (page) => {
    navigate(`/student/${page}`);
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
        user="student"
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
              <Route exact path="/profile" element={<StudentProfile />} />
              <Route exact path="/events" element={<StudentEvent />} />
              <Route
                path="events/:eventId"
                element={<StudentEventDescription />}
              />
              <Route exact path="skills" element={<SkillLayout />} />
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

export default StudentContent;
