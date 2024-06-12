import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import SideBar from "../../layouts/common/components/SideBar";
import Button from "../../components/buttons/PrimaryButton";
import Dp from "../../../src/assets/DP.png";
import edunexa from "../../../src/assets/edunexa.png";
import {
  MdEvent,
  MdViewQuilt,
  MdAccountCircle,
  MdPsychology,
} from "react-icons/md";
import { RiContactsBook3Fill } from "react-icons/ri";
import ProfileNotificationBox from "../../components/profilenotificationbox/ProfileNotificationBox";
import Footer from "../../layouts/common/components/Footer";
import Student from "./student/Student";
import Mentor from "./mentor/Mentor";
import Event from "./event/Event";
import BatchList from "./batch/BatchList";
import Skill from "./skill/Skill";
import BatchSelect from "./batch/BatchSelect";
import StudentDetails from "./student/StudentDetails";
import MentorDetails from "./mentor/MentorDetails";
import EventDetails from "./event/EventDetails";
import EventParticipantsList from "../../layouts/admin-event/components/EventParticipantsList";
import EventParticipants from "./event/EventParticipants";

const AdminContent = () => {
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
    navigate(`/admin/${page}`);
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
              <Route path="/student" element={<Student />} />
              <Route path="/mentor" element={<Mentor />} />
              <Route path="/events" element={<Event />} />
              <Route path="/batches" element={<BatchList />} />
              <Route path="/skills" element={<Skill />} />
              <Route path="/batches/batch-details" element={<BatchSelect />} />
              <Route
                path="student/student-details"
                element={<StudentDetails />}
              />
              <Route path="mentor/mentor-details" element={<MentorDetails />} />
              <Route path="events/event-details" element={<EventDetails />} />
              <Route
                path="events/event-details/event-participants"
                element={<EventParticipants />}
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

export default AdminContent;
