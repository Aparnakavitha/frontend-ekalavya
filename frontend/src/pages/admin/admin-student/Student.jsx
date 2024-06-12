import React from "react";
import Greeting from "../../../layouts/admin-student/components/AdminStudentGreeting";
import AdminStudentAction from "../../../layouts/admin-student/components/AdminStudentAction";
import ProfileCard from "../../../components/cards/ProfileCard";
import DataView from "../../../layouts/common/components/DataView";
import StudentData from "../../../services/admin/student/StudentData";

const Student = () => {
  return (
    <div>
      <Greeting {...StudentData.greetingData} />
      <AdminStudentAction />
      <DataView CardComponent={ProfileCard} {...StudentData.dataView} />
    </div>
  );
};

export default Student;
