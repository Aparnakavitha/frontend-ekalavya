import React, { useState, useEffect } from "react";
import { Greeting } from "../../../layouts/common";
import AdminBatchSearch from "../../../layouts/admin-batches/components/AdminBatchSearch";
import AdminBatchParticipants from "../../../layouts/admin-batches/components/AdminBatchParticipants";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { fetchBatchParticipants } from "../../../services/Batch";
import { getUserDetails } from "../../../services/User";
import image from "../../../assets/DP.png";

const greeting = {
  welcome: "Welcome Back",
  name: "John", // Replace with actual logged-in user's name
  info: "Here is the information about",
  profile: "Batches",
  showButtons: false,
};

const AdminBatchSelect = () => {
  const params = useParams();
  const location = useLocation();
  const [batchName, setBatchName] = useState(location.state?.batchName || "");
  const [batchParticipantsData, setBatchParticipantsData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const batchId = params.batchId;
      const participantsResponse = await fetchBatchParticipants({ batchId });
      const participantIds = participantsResponse.responseData;

      if (Array.isArray(participantIds) && participantIds.length > 0) {
        const userId = participantIds.join(","); // Convert array to comma-separated string
        const userDetailsResponse = await getUserDetails({ userId });
        const userDetails = userDetailsResponse.responseData;

        console.log("userDetails:", userDetails);

        const BatchParticipantsData = userDetails.map((userDetail) => ({
          studentImage: userDetail?.profilePicture || image,
          studentName: `${userDetail?.firstName || ""} ${userDetail?.lastName || ""}`,
          studentId: userDetail.userId || "",
          studentCollege: userDetail?.college?.collegeName || "N/A",
          studentMail: userDetail?.emailId || "N/A",
          studentPhoneNumber: userDetail?.phoneNo || "N/A",
          canDelete: true,
          viewAnimation: false,
        }));

        setBatchParticipantsData(BatchParticipantsData);
      } else {
        setBatchParticipantsData([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setBatchParticipantsData([]);
    }
  };

  return (
    <div>
      <Greeting {...greeting} />
      <AdminBatchSearch
        batchDelete={() => {}}
        addParticipant={() => {}}
        changeBatchName={() => {}}
        batchName={batchName}
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
              title: "Confirmation Required",
              message: "Are you sure you want to remove this user?",
              buttonText: "Confirm",
            },
          }}
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
