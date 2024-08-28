import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/index";
import Explore from "../pages/Explore";
import EventDescription from "../pages/EventDescription";
import MentorContent from "../pages/mentor/Mentor";
import AdminContent from "../pages/admin/Admin";
import StudentContent from "../pages/student/Student";
import NotFound from "../layouts/common/components/NotFound";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import secureLocalStorage from "react-secure-storage";
import ProjectDescription from "../pages/ProjectDescription";

const RouterComponent = () => {
  const userSession = secureLocalStorage.getItem("userSession") || {};
  const roleId = userSession.roleId;

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/explore/description" element={<EventDescription />} />
          <Route path="/project" element={<ProjectDescription />} />

          <Route path="/explore" element={<Explore />} />
          <Route path="/" element={<Home />} />
          {roleId === 2 && (
            <Route path="/mentor/*" element={<MentorContent />} />
          )}
          {roleId === 1 && <Route path="/admin/*" element={<AdminContent />} />}
          {roleId === 3 && (
            <Route path="/student/*" element={<StudentContent />} />
          )}
          <Route
            path="/explore/event-details/:eventId"
            element={<EventDescription />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position={"top-center"}
        autoClose={5000}
        hideProgressBar={true}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        progress={undefined}
        pauseOnFocusLoss
        theme={"dark"}
        transition={Slide}
      />
    </div>
  );
};

export default RouterComponent;
