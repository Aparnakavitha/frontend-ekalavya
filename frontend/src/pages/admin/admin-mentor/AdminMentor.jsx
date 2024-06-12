import React from "react";
import { useNavigate } from "react-router-dom";
import { DataView, Greeting } from "../../../layouts/common";
import AdminMentorData from "../../../services/admin/mentor/AdminMentorData";
import AdminMentorAction from "../../../layouts/admin-mentor/components/AdminMentorAction";
import ProfileCard from "../../../components/cards/ProfileCard";

const AdminMentor = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/admin/mentor/mentor-details`);
  };
  return (
    <div>
      <Greeting {...AdminMentorData.greeting} />
      <AdminMentorAction />
      <DataView  CardComponent={(props) => (
          <ProfileCard {...props} onClick={handleClick} />
        )} {...AdminMentorData.data} />
    </div>
  );
};

export default AdminMentor;
