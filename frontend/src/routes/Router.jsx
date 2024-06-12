import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/index";
import Explore from "../pages/Explore";
import EventDescription from "../pages/EventDescription";
import MentorContent from "../pages/mentor/Mentor";
import AdminContent from "../pages/admin/Admin";
import StudentContent from "../pages/student/Student";

const RouterComponent = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/explore/description" element={<EventDescription />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/*" element={<Home />} />
          <Route path="/mentor/*" element={<MentorContent />} />
          <Route path="/admin/*" element={<AdminContent />} />
          <Route
            exact
            path="/explore/description"
            element={<EventDescription />}
          />
          <Route exact path="/explore" element={<Explore />} />
          <Route exact path="/*" element={<Home />} />
          <Route exact path="/mentor/*" element={<MentorContent />} />
          <Route exact path="/student/*" element={<StudentContent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouterComponent;
