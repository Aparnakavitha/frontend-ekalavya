import React from "react";
import Greeting from "../../../layouts/admin-student/components/AdminStudentGreeting";
import Action from "../../../layouts/common/components/Action";
import ProfileCard from "../../../components/cards/ProfileCard";
import DataView from "../../../layouts/common/components/DataView";
import StudentData from "./StudentData";

const Student = () => {
  return (
    <div>
      <Greeting {...StudentData.greetingData} />
      <DataView CardComponent={ProfileCard} {...StudentData.dataView} />
    </div>
  );
};

export default Student;
