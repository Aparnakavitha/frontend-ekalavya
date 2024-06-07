import React from "react";
import { DataView, Greeting } from "../../../layouts/common";
import MentorData from "./MentorData";
import AdminMentorAction from "../../../layouts/admin-mentor/components/AdminMentorAction";
import ProfileCard from "../../../components/cards/ProfileCard";

const Mentor = () => {
  return (
    <div>
      <Greeting {...MentorData.greeting} />
      <AdminMentorAction />
      <DataView CardComponent={ProfileCard} {...MentorData.data} />
    </div>
  );
};

export default Mentor;
