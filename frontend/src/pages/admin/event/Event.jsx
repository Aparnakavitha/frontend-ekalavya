import React from "react";
import Greeting from "../../../layouts/admin-student/components/AdminStudentGreeting";
import PrimaryCard from "../../../components/cards/PrimaryCard";
import DataView from "../../../layouts/common/components/DataView";
import EventData from "./EventData";

const Event = () => {
  return (
    <div>
      <Greeting {...EventData.greetingData} />
      <DataView CardComponent={PrimaryCard} {...EventData.dataView} />
    </div>
  );
};

export default Event;
