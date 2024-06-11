import React from "react";
import { RecoilRoot, useRecoilState } from "recoil";
import { useNavigate, Routes, Route, useLocation } from "react-router-dom";
import SideBar from "../../layouts/common/components/SideBar";
import Button from "../../components/buttons/PrimaryButton";
import Dp from "../../../src/assets/DP.png";
import edunexa from "../../../src/assets/edunexa.png";
import { MdEvent, MdViewQuilt, MdAccountCircle, MdPsychology } from "react-icons/md";
import { RiContactsBook3Fill } from "react-icons/ri";
import { currentPageState } from "./AdminAtoms";
import ProfileNotificationBox from "../../components/profilenotificationbox/ProfileNotificationBox";
import Footer from "../../layouts/common/components/Footer";
import Student from "./student/Student";
import Mentor from "./mentor/Mentor";
import Event from "./event/Event";
import BatchList from "./batch/BatchList";
import Skill from "./skill/Skill";
import BatchSelect from "./batch/BatchSelect";

const AdminContent = () => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    switch (location.pathname) {
      case "/student":
        setCurrentPage("student");
        break;
      case "/mentor":
        setCurrentPage("mentor");
        break;
      case "/events":
        setCurrentPage("events");
        break;
      case "/batches":
        setCurrentPage("batches");
        break;
      case "/skills":
        setCurrentPage("skills");
        break;
      case "/batch-select":
        setCurrentPage("batch-select");
        break;
      default:
        setCurrentPage("student");
    }
  }, [location.pathname, setCurrentPage]);

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
        name: "Student",
        viewIcon: true,
        page: "student",
      },
      {
        icon: <RiContactsBook3Fill />,
        name: "Mentor",
        viewIcon: true,
        page: "mentor",
      },
      { icon: <MdEvent />, name: "Events", viewIcon: true, page: "events" },
      {
        icon: <MdViewQuilt />,
        name: "Batches",
        viewIcon: true,
        page: "batches",
      },
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
    switch (page) {
      case "student":
        navigate("/student");
        break;
      case "mentor":
        navigate("/mentor");
        break;
      case "events":
        navigate("/events");
        break;
      case "batches":
        navigate("/batches");
        break;
      case "skills":
        navigate("/skills");
        break;
      default:
        navigate("/student");
    }
  };

  const renderContent = () => {
    switch (currentPage) {
      case "student":
        return <Student />;
      case "mentor":
        return <Mentor />;
      case "events":
        return <Event />;
      case "batches":
        return <BatchList />;
      case "skills":
        return <Skill />;
      case "batch-select":
        return <BatchSelect />;
      default:
        return <Student />;
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

const Admin = () => (
  <RecoilRoot>
    <AdminContent />
  </RecoilRoot>
);

export default Admin;
