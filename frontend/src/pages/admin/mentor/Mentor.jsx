import React from "react";
import { DataView, Greeting } from "../../../layouts/common";
import MentorData from "./MentorData";
import BatchSearch from "../../../layouts/admin-batches/components/";
import ProfileCard from "../../../components/cards/ProfileCard";

const Mentor = () => {
  return (
    <div>
      <Greeting {...MentorData.greeting} />
      <BatchSearch />
      <DataView CardComponent={ProfileCard} {...MentorData.data} />
    </div>
  );
};

export default Mentor;
