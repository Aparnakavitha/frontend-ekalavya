import React from "react";
import { useNavigate } from "react-router-dom";
import { DataView, Greeting } from "../../../layouts/common";
import MentorData from "./MentorData";
import AdminMentorAction from "../../../layouts/admin-mentor/components/AdminMentorAction";
import ProfileCard from "../../../components/cards/ProfileCard";

const Mentor = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/admin/mentor/mentor-details`);
  };
  return (
    <div>
      <Greeting {...MentorData.greeting} />
      <AdminMentorAction />
      <DataView  CardComponent={(props) => (
          <ProfileCard {...props} onClick={handleClick} />
        )} {...MentorData.data} />
    </div>
  );
};

export default Mentor;
