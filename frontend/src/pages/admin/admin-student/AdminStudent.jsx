import React from "react";
import { useNavigate } from "react-router-dom";
import Greeting from "../../../layouts/admin-student/components/AdminStudentGreeting";
import AdminStudentAction from "../../../layouts/admin-student/components/AdminStudentAction";
import ProfileCard from "../../../components/cards/ProfileCard";
import DataView from "../../../layouts/common/components/DataView";
import AdminStudentData from "../../../services/admin/student/AdminStudentData";

const AdminStudent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/admin/student/student-details`);
  };
  return (
    <div>
      <Greeting {...AdminStudentData.greetingData} />
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
