import React from "react";
import { useNavigate } from "react-router-dom";
import Greeting from "../../../layouts/admin-student/components/AdminStudentGreeting";
import AdminStudentAction from "../../../layouts/admin-student/components/AdminStudentAction";
import ProfileCard from "../../../components/cards/ProfileCard";
import DataView from "../../../layouts/common/components/DataView";
import StudentData from "./StudentData";

const Student = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/student-detail`);
  };
  return (
    <div>
      <Greeting {...StudentData.greetingData} />
      <AdminStudentAction />
      <DataView
        CardComponent={(props) => (
          <ProfileCard {...props} onClick={handleClick} />
        )}
        {...StudentData.dataView}
      />
    </div>
  );
};

export default Student;
