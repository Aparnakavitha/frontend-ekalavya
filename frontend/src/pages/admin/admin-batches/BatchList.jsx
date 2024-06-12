import React from "react";
import { DataView, Greeting } from "../../../layouts/common";
import SkillBatchCard from "../../../components/cards/SkillBatchCard";
import BatchListData from "../../../services/admin/batch/BatchListData";
import AdminBatchAction from "../../../layouts/admin-batches/components/AdminBatchAction";

const BatchList = () => {
  return (
    <div>
      <Greeting {...BatchListData.greeting} />
      <AdminBatchAction />
      <DataView CardComponent={SkillBatchCard} {...BatchListData.dataView} />
    </div>
  );
};

export default BatchList;
