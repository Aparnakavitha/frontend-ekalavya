import React from "react";
import { Greeting } from "../../../layouts/common";
import AdminBatchSearch from "../../../layouts/admin-batches/components/AdminBatchSearch";
import AdminBatchParticipants from "../../../layouts/admin-batches/components/AdminBatchParticipants";

const greeting = {
  welcome: "Welcome Back",
  name: "John",
  info: "Here is the information about",
  profile: "Batches",
  showButtons: false,
};

const BatchSelect = () => {
  return (
    <div>
      <Greeting {...greeting} />
      <AdminBatchSearch />
      <AdminBatchParticipants />
    </div>
  );
};

export default BatchSelect;
