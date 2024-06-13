import React from "react";
import { useNavigate } from "react-router-dom";
import { DataView, Greeting } from "../../../layouts/common";
import SkillBatchCard from "../../../components/cards/SkillBatchCard";
import AdminBatchListData from "../../../services/admin/batch/AdminBatchListData";
import AdminBatchAction from "../../../layouts/admin-batches/components/AdminBatchAction";

const AdminBatchList = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/admin/batches/batch-details`);
  };

  return (
    <div>
      <Greeting {...AdminBatchListData.greeting} />

      <AdminBatchAction />
      <DataView
        CardComponent={(props) => (
          <SkillBatchCard
            {...props}
            handleClick={handleClick} 
          />
        )}
        {...AdminBatchListData.dataView}
      />
    </div>
  );
};

export default AdminBatchList;
