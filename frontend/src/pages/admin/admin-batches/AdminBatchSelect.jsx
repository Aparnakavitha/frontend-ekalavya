import React, { useState, useEffect } from "react";
import { Greeting } from "../../../layouts/common";
import AdminBatchSearch from "../../../layouts/admin-batches/components/AdminBatchSearch";
import AdminBatchParticipants from "../../../layouts/admin-batches/components/AdminBatchParticipants";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import {
  fetchBatchParticipants,
  updateBatch,
  deleteBatch,
  postUserIds,
} from "../../../services/Batch";
import { getUserDetails } from "../../../services/User";
import image from "../../../assets/DP.png";

const loggedUserFirstName = sessionStorage.getItem("firstName");

const greeting = {
  welcome: "Welcome back",
  name: loggedUserFirstName,
  info: "Here is the information about",
  profile: "Batches",
  showButtons: false,
};

const AdminBatchSelect = () => {
  const [participantCount, setParticipantCount] = useState(0);
  const { batchId } = useParams();
  const params = useParams();
  const location = useLocation();
  const [batchName, setBatchName] = useState(location.state?.batchName || "");
  const [batchParticipantsData, setBatchParticipantsData] = useState([]);
  const [newParticipantsData, setNewParticipantsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const batchId = params.batchId;
      const participantsResponse = await fetchBatchParticipants({ batchId });
      const participantIds = participantsResponse.responseData;
      const count = participantIds.length;
      setParticipantCount(count);

      if (Array.isArray(participantIds) && participantIds.length > 0) {
        const userId = participantIds.join(",");
        const userDetailsResponse = await getUserDetails({ userId });
        const userDetails = userDetailsResponse.responseData;

        const BatchParticipantsData = userDetails.map((userDetail) => ({
          studentImage: image,
          studentName: `${userDetail?.firstName || ""} ${
            userDetail?.lastName || ""
          }`,
          studentId: userDetail.userId || "",
          studentCollege: userDetail?.college?.collegeName || "N/A",
          studentMail: userDetail?.emailId || "N/A",
          studentPhoneNumber: userDetail?.phoneNo || "N/A",
          canDelete: true,
          viewAnimation: false,
        }));

        BatchParticipantsData.sort((a, b) =>
          a.studentName.localeCompare(b.studentName)
        );
        setBatchParticipantsData(BatchParticipantsData);
        setNewParticipantsData([]);
      } else {
        setBatchParticipantsData([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setBatchParticipantsData([]);
    }
  };

  const changeBatchName = async (newBatchName) => {
    try {
      const batchId = params.batchId;
      await updateBatch({ batchId, batchName: newBatchName });
      setBatchName(newBatchName);
      toast.success("Batch name updated successfully!");
    } catch (error) {
      console.error("Error updating batch name:", error);
      toast.error("Error updating batch name!");
    }
  };

  const handleDeleteBatches = async () => {
    try {
      await deleteBatch(batchId);
      navigate(`/admin/batches`);
      toast.success("Batch deleted successfully!");
    } catch (error) {
      toast.error("Error deleting batch!");
      console.error("Error deleting batch:", error);
    }
  };

  const addParticipant = async (studentIds) => {
    try {
      const batchId = params.batchId;
      const response = await postUserIds({ batchId, userIds: studentIds });

      const newParticipantIds = studentIds.join(",");
      const newParticipantsResponse = await getUserDetails({
        userId: newParticipantIds,
      });
      const newParticipants = newParticipantsResponse.responseData;

      if (Array.isArray(batchParticipantsData)) {
        batchParticipantsData.forEach((participant) => {
          if (
            participant &&
            typeof participant === "object" &&
            participant.viewAnimation !== undefined
          ) {
            participant.viewAnimation = false;
          }
        });
      }
      const newParticipantsData = newParticipants.map((userDetail) => ({
        studentImage: image,
        studentName: `${userDetail?.firstName || ""} ${
          userDetail?.lastName || ""
        }`,
        studentId: userDetail.userId || "",
        studentCollege: userDetail?.college?.collegeName || "N/A",
        studentMail: userDetail?.emailId || "N/A",
        studentPhoneNumber: userDetail?.phoneNo || "N/A",
        canDelete: true,
        viewAnimation: true,
      }));

      setNewParticipantsData(newParticipantsData);
      setBatchParticipantsData((prevData) => [
        ...newParticipantsData,
        ...prevData,
      ]);

      if (response.statusCode === 200) {
        toast.success("Added new student successfully!");
        console.log("Participant added successfully.");
      } else {
        const errorMessage =
          response?.errorMessage?.match(/\[(.*?)\]/)?.[1] || "Unknown error";
        toast.error(errorMessage);
        console.error("Error adding participant:", errorMessage);
      }

      console.log("Response data:", response.data);
      return response.data;
    } catch (error) {
      toast.error("Error adding participant!");
      console.error("Error adding participant:", error);
      throw error;
    }
  };

  return (
    <div>
      {/* <Greeting {...greeting} /> */}
      <AdminBatchSearch
        participantCount={participantCount}
        batchDelete={handleDeleteBatches}
        addParticipant={addParticipant}
        setBatchName={setBatchName}
        batchName={batchName}
        batchId={params.batchId}
        batchParticipantsData={batchParticipantsData}
      />
      {batchParticipantsData.length > 0 ? (
        <AdminBatchParticipants
          batchParticipantsData={{
            data: batchParticipantsData,
            tableColumns: [
              { key: "studentId", displayName: "Student ID" },
              { key: "studentName", displayName: "Name" },
              { key: "studentCollege", displayName: "College" },
              { key: "studentMail", displayName: "Email ID" },
              { key: "studentPhoneNumber", displayName: "Phone Number" },
            ],
            toggle: true,
            itemsPerPage: 15,
            deleteProps: {
              title: "Delete Participant",
              message: "Are you sure you want to delete this participant?",
              buttonText: "Delete",
            },
          }}
          batchId={batchId}
          fetchData={fetchData}
        />
      ) : (
        <p style={{ color: "white", paddingLeft: "80px", paddingTop: "30px" }}>
          No participants available for this batch
        </p>
      )}
    </div>
  );
};

export default AdminBatchSelect;
