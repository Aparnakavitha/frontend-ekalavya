import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { DataView, Greeting } from "../../../layouts/common";
import SkillBatchCard from "../../../components/cards/SkillBatchCard";
import BatchListData from "./BatchListData";
import AdminBatchAction from "../../../layouts/admin-batches/components/AdminBatchAction";

const BatchList = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/admin/batches/batch-details`);
  };

  return (
    <div>
      <Greeting {...BatchListData.greeting} />

      <AdminBatchAction />
      <DataView
        CardComponent={(props) => (
          <SkillBatchCard
            {...props}
            handleClick={handleClick} 
          />
        )}
        {...BatchListData.dataView}
      />
    </div>
  );
};

export default BatchList;
