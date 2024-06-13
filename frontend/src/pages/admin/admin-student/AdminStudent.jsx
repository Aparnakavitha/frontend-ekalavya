import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Greeting from "../../../layouts/common/components/Greeting";
import AdminStudentAction from "../../../layouts/admin-student/components/AdminStudentAction";
import ProfileCard from "../../../components/cards/ProfileCard";
import DataView from "../../../layouts/common/components/DataView";
import AdminStudentData from "../../../services/admin/student/AdminStudentData";

const AdminStudent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const greetData = location.state?.greetData;
  greetData.profile = "Students";
  greetData.showButtons = true;

  const AdminStudentData = {
    greetingData: {
      viewprops: {
        data: [
          ["CLG002", "Stanford University", "Stanford", "California", "USA"],
        ],
        headings: ["ClgID", "CollegeName", "Place", "State", "Country"],
      },
      addprops: {},
    },
    dataView: {
      data: [
        {
          studentImage: "image",
          studentName: "John Doe",
          studentId: "STDID3456",
          studentCollege: "St Christ College",
          studentMail: "johndoe@email.com",
          studentPhoneNumber: "(555) 555-5555",
          canDelete: false,
        },
      ],
      tableColumns: [
        { key: "studentId", displayName: "Student ID" },
        { key: "studentName", displayName: "Name" },
        { key: "studentCollege", displayName: "College" },
        { key: "studentMail", displayName: "Email ID" },
        { key: "studentPhoneNumber", displayName: "Phone Number" },
      ],
      toggle: true,
      itemsPerPage: 15,
    },
  };

  const handleClick = () => {
    navigate(`/admin/student/student-details`);
  };
  return (
    <div>
      <Greeting {...greetData} />
      <AdminStudentAction />
      <DataView
        CardComponent={(props) => (
          <ProfileCard {...props} onClick={handleClick} />
        )}
        {...AdminStudentData.dataView}
      />
    </div>
  );
};

export default AdminStudent;
