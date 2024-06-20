import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { DataView, Greeting } from "../../../layouts/common";
import SkillBatchCard from "../../../components/cards/SkillBatchCard";
import AdminBatchListData from "../../../services/admin/batch/AdminBatchListData";
import AdminBatchAction from "../../../layouts/admin-batches/components/AdminBatchAction";
import { fetchbatches } from "../../../services/admin/batch/AdminBatchListData";

const AdminBatchList = () => {
  const [batchesData, setBatchesData] = useState([]);
  
  const loadBatches = async () => {
      try {
        const params = {
          batchId: "2",

        };
        const data = await fetchbatches(params);
        setBatchesData(data.responseData[0]);
        console.log("dsssss",batchesData);
      } catch (err) {
        console.error("Error fetching batches:", err);
      } 
    };

    useEffect(() => {
      loadBatches();
    }, []);


  const batchData = {
  
    batchName: batchesData.batchName,
    participantCount: batchesData.participantCount,
    batchId: batchesData.batchId,
  };


  // const handleClick = () => {
  //   navigate(`/admin/batches/batch-details`);
  // };

  return (
    <div>
      <Greeting {...AdminBatchListData.greeting} />
      <AdminBatchListData {...batchData} />

      <AdminBatchAction />
      {/* <DataView
        CardComponent={(props) => (
          <SkillBatchCard
            {...props}
            handleClick={handleClick} 
          />
        )}
        {...AdminBatchListData.dataView}
      /> */}
    </div>
  );
};

export default AdminBatchList;
