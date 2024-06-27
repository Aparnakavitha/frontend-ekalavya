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
  const [initialLoad, setInitialLoad] = useState(true);
 
  useEffect(() => {
    if (initialLoad) {
      fetchData();
      setInitialLoad(false);
    } else if (searchQuery) {
      fetchData({ batchName: searchQuery });
    } else {
      fetchData();
    }
  }, [changed, searchQuery]);
 
  const fetchData = async (params) => {
    setLoading(true);
    setError(null);
    try {
      const responseData = await fetchbatches(params || {});
      const data = responseData.responseData;
 
      if (Array.isArray(data)) {
        const formattedData = data.map((item) => ({
          miniHeading: `B${item.batchId}`,
          mainHeading: item.batchName || "",
          Count: item.participantCount,
          cardType: "batch",
          handleClick: () => handleClick(item.batchId, item.batchName),
        }));
 
        setBatchData(formattedData);
      } else {
        throw new Error("Received data is not in expected format");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("No batches available");
    } finally {
      setLoading(false);
    }
  };
 
  const handleSearchChange = (data) => {
    setSearchQuery(data);
    setChanged((prev) => !prev);
  };
 
  const handleClick = (batchId, batchName) => {
    navigate(`/admin/batches/batch-details/${batchId}`, {
      state: { batchName },
    });
  };
 
  const handleFormSubmit = async (formData) => {
    try {
      const { batchName } = formData;
      const response = await createBatch({ batchName: batchName });
      setBatchData([...(batchData || []), response[0]]);
      setChanged((prev) => !prev);
    } catch (error) {
      console.error("Error adding batch:", error);
      setError("Error adding batch. Please try again later.");
    }
  };
 
  const loggedUserFirstName = sessionStorage.getItem("firstName");
 
  return (
    <div>
      <Greeting
        welcome="Welcome back"
        name={loggedUserFirstName}
        info="Here is the information about"
        profile="Batches"
        showButtons={false}
      />
      <AdminBatchAction
        onSearchChange={handleSearchChange}
        setBatchData={setBatchData}
        setChanged={setChanged}
        batchData={batchData}
      />
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <p style={{ color: "white", paddingLeft: "80px", paddingTop: "30px" }}>
          {error}
        </p>
      ) : batchData && batchData.length > 0 ? (
        <DataView
          data={batchData}
          CardComponent={(props) => <SkillBatchCard {...props} />}
          tableColumns={[
            { key: "miniHeading", displayName: "Batch ID" },
            { key: "mainHeading", displayName: "Batch Name" },
            { key: "Count", displayName: "Participant Count" },
          ]}
          toggle={true}
          cardType="skillbatchcardbatch"
          itemsPerPage={12}
          showCount={true}
        />
      ) : (
        <p style={{ color: "white", paddingLeft: "80px", paddingTop: "30px" }}>
          No batches available
        </p>
      )}
    </div>
  );
};
 
export default AdminBatchList;
 