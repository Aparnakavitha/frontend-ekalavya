import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserDetails, updateUserDetails } from "../../../services/User";
import AdminMentorAction from "../../../layouts/admin-mentor/components/AdminMentorAction";
import ProfileCard from "../../../components/cards/ProfileCard";
import image from "../../../assets/DP.png";
import { Greeting, DataView } from "../../../layouts/common";

const AdminMentor = () => {
  const [adminData, setAdminData] = useState(null);
  const [mentorData, setMentorData] = useState([]); // State for mentor data
  const navigate = useNavigate();

  // Function to fetch admin data
  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const params = {
          userId: "11", // Adjust as per your actual admin user ID retrieval logic
        };
        const data = await getUserDetails(params);
        if (data && data.responseData && data.responseData.length > 0) {
          setAdminData(data.responseData[0]);
        }
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    };

    fetchAdminData();
  }, []);

  // Function to fetch mentor data
  const fetchMentorData = async () => {
    try {
      const params = {
        roleId: 1, // Adjust as per your actual role ID for mentors
      };
      const data = await getUserDetails(params);
      setMentorData(data.responseData);
    } catch (error) {
      console.error("Error fetching mentor data:", error);
    }
  };

  // Initial fetch of mentor data on component mount
  useEffect(() => {
    fetchMentorData();
  }, []);

  // Handle form submission to update user details
  const handleFormSubmit = async (formData) => {
    try {
      await updateUserDetails(formData);
      console.log("User details updated successfully!");
      fetchMentorData(); // Refresh mentor data after update
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  // Function to handle click on profile card
  const handleClick = (userId) => {
    console.log(userId);
    navigate(`/admin/mentor/mentor-details/${userId}`);
  };

  // Render loading state if data is not yet fetched
  if (!adminData || mentorData.length === 0) {
    return (
      <div style={{ padding: "20px", fontSize: "24px", color: "white", textAlign: "center" }}>
        Loading...
      </div>
    );
  }

  // Data for greeting component
  const greet = {
    welcome: "Welcome Back",
    name: `${adminData.firstName} ${adminData.lastName}`,
    info: "Here is the information about",
    profile: "Mentors",
    showButtons: false,
  };

  // Data for DataView component
  const data = {
    data: mentorData.map((mentor) => ({
      studentImage: image,
      studentName: `${mentor.firstName || "N/A"} ${mentor.lastName || "N/A"}`,
      studentId: mentor.userId || "N/A",
      studentCollege: mentor.college?.collegeName || "N/A",
      studentMail: mentor.emailId || "N/A",
      studentPhoneNumber: mentor.phoneNo || "N/A",
      canDelete: false,
    })),
    tableColumns: [
      { key: "studentId", displayName: "Mentor ID" },
      { key: "studentName", displayName: "Name" },
      { key: "studentCollege", displayName: "College" },
      { key: "studentMail", displayName: "Email ID" },
      { key: "studentPhoneNumber", displayName: "Phone Number" },
    ],
    toggle: true,
    itemsPerPage: 18,
  };

  return (
    <div>
      <Greeting {...greet} />
      <AdminMentorAction onSubmit={handleFormSubmit} onAddSuccess={fetchMentorData} /> {/* Pass onSubmit handler and onAddSuccess callback */}
      <DataView
        CardComponent={(props) => (
          <ProfileCard {...props} onClick={() => handleClick(props.studentId)} />
        )}
        {...data}
      />
    </div>
  );
};

export default AdminMentor;
