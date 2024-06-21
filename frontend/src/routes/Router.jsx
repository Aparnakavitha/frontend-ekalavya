import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/index";
import Explore from "../pages/Explore";
import EventDescription from "../pages/EventDescription";
import MentorContent from "../pages/mentor/Mentor";
import AdminContent from "../pages/admin/Admin";
import StudentContent from "../pages/student/Student";
import NotFound from "../layouts/common/components/NotFound";

const RouterComponent = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/explore/description" element={<EventDescription />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/" element={<Home />} />
          <Route path="/mentor/*" element={<MentorContent />} />
          <Route path="/admin/*" element={<AdminContent />} />
          <Route exact path="/student/*" element={<StudentContent />} />
          <Route
            path="/explore/event-details/:eventId"
            element={<EventDescription />}
          />
           <Route path="/student/*" element={<StudentContent />} />
           <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouterComponent;
