import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataView, Greeting } from "../../../layouts/common";
import SkillBatchCard from "../../../components/cards/SkillBatchCard";
import { fetchbatches, createBatch } from "../../../services/Batch";
import AdminBatchAction from "../../../layouts/admin-batches/components/AdminBatchAction";

const AdminBatchList = () => {
  const navigate = useNavigate();
  const [batchData, setBatchData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    fetchData();
  }, [changed]); 

  const fetchData = async () => {
    setLoading(true); 
    try {
      const responseData = await fetchbatches();
      const data = responseData.responseData;
      console.log(data);

      
      if (Array.isArray(data)) {
        const formattedData = data.map((item) => ({
          miniHeading: `B${item.batchId}`,
          mainHeading: item.batchName,
          Count: item.participantCount,
          cardType: "batch",
        }));

        console.log("Formatted batchData is : ", formattedData);
        setBatchData(formattedData);
        setLoading(false); 
        console.log("Data fetched successfully:", formattedData);
      } else {
        throw new Error("Received data is not in expected format");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
      setLoading(false); 
    }
  };

  const handleClick = () => {
    navigate(`/admin/batches/batch-details`);
  };

  const handleFormSubmit = async (formData) => {
    try {
      const { batchName } = formData;
      const response = await createBatch({ batchName: batchName });

      console.log("Create batch response:", response);
      setBatchData([...batchData,response[0]]);
      setChanged((prev) => !prev); 
    } catch (error) {
      console.error("Error adding batch:", error);
      setError(error);
    }
  };

  return (
    <div>
      <Greeting
        welcome="Welcome Back"
        name="John"
        info="Here is the information about"
        profile="Batches"
        showButtons={false}
      />
      <AdminBatchAction onSubmit={handleFormSubmit} />

      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : batchData ? (
        <DataView
          data={batchData}
          CardComponent={(props) => <SkillBatchCard {...props} />}
          tableColumns={[
            { key: "miniHeading", displayName: "Batch ID" },
            { key: "mainHeading", displayName: "Batch Name" },
            { key: "Count", displayName: "Participant Count" },
          ]}
          toggle={true}
          cardType="SkillBatchCardbatch"
          itemsPerPage={12}
        />
      ) : (
        <div>No batches found.</div>
      )}
    </div>
  );
};

export default AdminBatchList;
