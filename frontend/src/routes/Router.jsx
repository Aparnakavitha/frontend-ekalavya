import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/index";
import Explore from "../pages/Explore";
import EventDescription from "../pages/EventDescription";
import Mentor from "../pages/mentor/Mentor";
import StudentProfile from "../pages/student/student-profile/StudentProfile";
import StudentEvent from "../pages/student/student-events/StudentEvents";

const RouterComponent = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/explore/description"
            element={<EventDescription />}
          />
          <Route exact path="/explore" element={<Explore />} />
          <Route exact path="/*" element={<Home />} />
          <Route exact path="/mentor" element={<Mentor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouterComponent;
