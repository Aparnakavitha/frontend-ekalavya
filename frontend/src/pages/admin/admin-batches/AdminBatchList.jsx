// AdminBatchList.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataView, Greeting } from "../../../layouts/common";
import SkillBatchCard from "../../../components/cards/SkillBatchCard";
import { fetchbatches, createBatch } from "../../../services/Batch";
import AdminBatchAction from "../../../layouts/admin-batches/components/AdminBatchAction";
import LoadingSpinner from "../../../components/loadingspinner/LoadingSpinner";

const AdminBatchList = () => {
  const navigate = useNavigate();
  const [batchData, setBatchData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [changed, setChanged] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchData();
  }, [changed]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const responseData = await fetchbatches();
      const data = responseData.responseData;

      if (Array.isArray(data)) {
        const formattedData = data.map((item) => ({
          miniHeading: `B${item.batchId}`,
          mainHeading: item.batchName || "",
          Count: item.participantCount,
          cardType: "batch",
          handleClick: () => handleClick(item.batchId, item.batchName), // Pass batchName here
        }));

        setBatchData(formattedData);
        setLoading(false);
      } else {
        throw new Error("Received data is not in expected format");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
      setLoading(false);
    }
  };

  const handleSearchChange = (data) => {
    setSearchQuery(data);
    setChanged((prev) => !prev);
  };

  const handleClick = (batchId, batchName) => {
    navigate(`/admin/batches/batch-details/${batchId}`, { state: { batchName } }); // Navigate with state
  };

  const handleFormSubmit = async (formData) => {
    try {
      const { batchName } = formData;
      const response = await createBatch({ batchName: batchName });
      setBatchData([...(batchData || []), response[0]]);
      setChanged((prev) => !prev);
    } catch (error) {
      console.error("Error adding batch:", error);
      setError(error);
    }
  };
  
  const loggedUserFirstName = sessionStorage.getItem("firstName");

  return (
    <div>
      <Greeting
        welcome="Welcome Back"
        name={loggedUserFirstName}
        info="Here is the information about"
        profile="Batches"
        showButtons={false}
      />
      <AdminBatchAction
        onSubmit={handleFormSubmit}
        onSearchChange={handleSearchChange}
      />
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <LoadingSpinner />
      ) : batchData ? (
        <DataView
          data={batchData}
          CardComponent={(props) => <SkillBatchCard {...props} />}
          tableColumns={[
            { key: "miniHeading", displayName: "Batch ID" },
            { key: "mainHeading", displayName: "Batch Name" },
            { key: "count", displayName: "Participant Count" },
          ]}
          toggle={true}
          cardType="SkillBatchCard"
          itemsPerPage={12}
        />
      ) : (
        <div>No batches found.</div>
      )}
    </div>
  );
};

export default AdminBatchList;
