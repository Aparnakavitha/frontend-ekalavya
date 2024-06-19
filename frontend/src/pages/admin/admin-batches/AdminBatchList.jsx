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
  }, [changed]); // Refetch data when changed state updates

  const fetchData = async () => {
    setLoading(true); // Set loading state while fetching data
    try {
      const responseData = await fetchbatches();
      const formattedData = responseData.map((item) => ({
        miniHeading: `B${item.batchId}`,
        mainHeading: item.batchName,
        Count: item.participantCount,
        cardType: "batch",
      }));

      setBatchData(formattedData);
      setLoading(false); // Clear loading state on successful data fetch
      console.log("Data fetched successfully:", formattedData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
      setLoading(false); // Clear loading state on error
    }
  };

  const handleClick = () => {
    navigate(`/admin/batches/batch-details`);
  };

  const handleFormSubmit = async (formData) => {
    try {
      const { batchName, studentIds } = formData;
      const response = await createBatch({ batchName, studentIds });

      if (response && response.responseData && response.responseData.length > 0) {
        setChanged((prev) => !prev); // Toggle changed state to trigger refetch
        // Optionally, you can add a success message or toast notification
      } else {
        console.error("Unexpected response structure:", response);
      }
    } catch (error) {
      console.error("Error adding batch:", error);
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
          CardComponent={(props) => <SkillBatchCard {...props} handleClick={handleClick} />}
          tableColumns={[
            { key: "miniHeading", displayName: "Batch ID" },
            { key: "mainHeading", displayName: "Batch Name" },
            { key: "Count", displayName: "Participant Count" },
          ]}
          toggle={true}
          itemsPerPage={12}
        />
      ) : (
        <div>No batches found.</div>
      )}
    </div>
  );
};

export default AdminBatchList;
