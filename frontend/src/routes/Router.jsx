import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/index";
import Explore from "../pages/Explore";
import EventDescription from "../pages/EventDescription";
import MentorContent from "../pages/mentor/Mentor";
import AdminContent from "../pages/admin/Admin";
import StudentContent from "../pages/student/Student";
import NotFound from "../layouts/common/components/NotFound";

const RouterComponent = () => {
  const [roleId, setRoleId] = useState(null);

  useEffect(() => {
    const roleIdFromSessionStorage = sessionStorage.getItem("role");
    if (roleIdFromSessionStorage !== null) {
      setRoleId(roleIdFromSessionStorage);
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/explore/description" element={<EventDescription />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/" element={<Home />} />
          {roleId === "2" && (
            <Route path="/mentor/*" element={<MentorContent />} />
          )}
          {roleId === "1" && (
            <Route path="/admin/*" element={<AdminContent />} />
          )}
          {roleId === "3" && (
            <Route path="/student/*" element={<StudentContent />} />
          )}
          <Route
            path="/explore/event-details/:eventId"
            element={<EventDescription />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouterComponent;
