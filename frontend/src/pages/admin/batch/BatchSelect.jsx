import React from "react";
import { DataView, Greeting } from "../../../layouts/common";
import ProfileCard from "../../../components/cards/ProfileCard";
import BatchSelectData from "./BatchSelectData";
import AdminBatchSearch from "../../../layouts/admin-batches/components/AdminBatchSearch";
import AdminBatchParticipants from "../../../layouts/admin-batches/components/AdminBatchParticipants";

const BatchSelect = () => {
  return (
    <div>
      <Greeting {...BatchSelectData.greeting} />
      <AdminBatchSearch />
      <AdminBatchParticipants />
    </div>
  );
};

export default BatchSelect;
