import React from "react";
import { Greeting } from "../../../layouts/common";
import AdminBatchSearch from "../../../layouts/admin-batches/components/AdminBatchSearch";
import AdminBatchParticipants from "../../../layouts/admin-batches/components/AdminBatchParticipants";
import { useNavigate } from "react-router-dom";

const greeting = {
  welcome: "Welcome Back",
  name: "John",
  info: "Here is the information about",
  profile: "Batches",
  showButtons: false,
};

const AdminBatchSelect = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/admin/student/student-details`);
  };

  return (
    <div>
      <Greeting {...greeting} />
      <AdminBatchSearch />
      <AdminBatchParticipants onCardClick={handleCardClick} />
    </div>
  );
};

export default AdminBatchSelect;
