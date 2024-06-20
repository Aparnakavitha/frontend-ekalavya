import React, { useEffect, useState } from "react";
import { Greeting } from "../../../layouts/common";
import AdminBatchSearch from "../../../layouts/admin-batches/components/AdminBatchSearch";
import AdminBatchParticipants from "../../../layouts/admin-batches/components/AdminBatchParticipants";
import { useNavigate } from "react-router-dom";
import { fetchBatchParticipants, deleteBatch } from "../../../services/Batch";
import { getUserDetails } from "../../../services/User";
import image from "../../../assets/DP.png";
import { postUserIds } from "../../../services/Batch";
import { updateBatch, fetchbatches } from "../../../services/Batch";

const greeting = {
  welcome: "Welcome Back",
  name: "John",
  info: "Here is the information about",
  profile: "Batches",
  showButtons: false,
};

const AdminBatchSelect = () => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/admin/student/student-details`);
  };

  const [participantIdData, setParticipantIdData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [batchName, setBatchName] = useState("");

  const batchId = "21";

  const viewBatchParticipants = async () => {
    try {
      const response = await fetchBatchParticipants({ batchId });
      const ids = response.responseData;
      console.log("participant list", ids);

      setParticipantIdData(ids);

      if (Array.isArray(ids) && ids.length > 0) {
        const userIds = ids.join(",");
        console.log("participant list", userIds);
        await fetchParticipantsDetails(userIds);
      }
    } catch (error) {
      console.error("Error fetching batch participants:", error);
    }
  };

  const fetchParticipantsDetails = async (userIds) => {
    try {
      const participantResponse = await getUserDetails({ userIds });
      setUserData(participantResponse.responseData);
      console.log(userData);
      const batchParticipantsData = {
        data:
          //  [{
          //   studentImage: image,
          //     studentName: "aleena",
          //     studentId: 1,
          //     studentCollege: "alaksnjw",
          //     studentMail: "aleena@gmail.com",
          //     studentPhoneNumber: 9745241897,
          //     canDelete: true,
          // }],
          participantResponse.responseData.map((participant) => ({
            studentImage: image,
            studentName: participant.firstName + " " + participant.lastName,
            studentId: participant.userId,
            studentCollege: participant.college.collegeName,
            studentMail: participant.emailId,
            studentPhoneNumber: participant.phoneNo,
            canDelete: true,
          })),
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
      };

      console.log("userdata list", participantResponse.responseData);
      console.log("cardata list", batchParticipantsData.data);
    } catch (error) {
      console.error("Error fetching participant data:", error);
    }
  };

  const batchDelete = async () => {
    try {
      await deleteBatch(batchId);
      console.log("Batch deleted successfully");
    } catch (error) {
      console.error("Error deleting batch:", error);
    }
  };

  const addParticipant = async (data) => {
    try {
      const userId = {
        batchId: batchId,
        userId: data.inputData,
      };
      const response = await postUserIds(userId);
      console.log("Response from API:", response);
    } catch (error) {
      console.error("Error adding participant data:", error);
    }
  };

  const changeBatchName = async (data) => {
    try {
      const userId = {
        batchId: batchId,
        batchName: data.inputData,
      };
      const response = await updateBatch(userId);
      console.log("Response from API:", response);
      viewBatchName();
      viewBatchParticipants();
    } catch (error) {
      console.error("Error adding participant data:", error);
    }
  };

  const viewBatchName = async () => {
    try {
      const response = await fetchbatches({ batchId });
      const data = response.responseData;
      setBatchName(data[0].batchName);
      console.log("batchname", batchName);
    } catch (error) {
      console.error("Error adding participant data:", error);
    }
  };
  useEffect(() => {
    viewBatchName();
    viewBatchParticipants();
  }, [batchId]);

  const batchParticipantsData = {
    data: [
      {
        studentImage: image,
        studentName: "aleena",
        studentId: 1,
        studentCollege: "alaksnjw",
        studentMail: "aleena@gmail.com",
        studentPhoneNumber: 9745241897,
        canDelete: true,
      },
    ],
    // userData.map((participant) => ({
    //   studentImage: image,
    //   studentName: participant.firstName + " " + participant.lastName,
    //   studentId: participant.userId,
    //   studentCollege: participant.college.collegeName,
    //   studentMail: participant.emailId,
    //   studentPhoneNumber: participant.phoneNo,
    //   canDelete: true,
    // })),
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
  };

  return (
    <div>
      <Greeting {...greeting} />
      <AdminBatchSearch
        batchDelete={batchDelete}
        addParticipant={addParticipant}
        changeBatchName={changeBatchName}
        batchName={batchName}
      />
      <AdminBatchParticipants
        onCardClick={handleCardClick}
        batchParticipantsData={batchParticipantsData}
      />
    </div>
  );
};

export default AdminBatchSelect;
