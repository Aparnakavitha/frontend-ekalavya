import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from 'react'
import Student from "../pages/student/Student";
import StudentEventDescription from "../layouts/student-event-description/components/StudentEventDescription";

const Navigate = () => {
  return (
   <Router>
    <Routes>
        <Route path="/student" element={<Student />} />
        <Route path="/student/events/:eventId" element={<StudentEventDescription />} />
    </Routes>
   </Router>
  )
}

export default Navigate
