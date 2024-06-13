import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Greeting, DataView } from "../../../layouts/common";
import { getUserDetails } from "../../../services/User";
import AdminMentorAction from "../../../layouts/admin-mentor/components/AdminMentorAction";
import ProfileCard from "../../../components/cards/ProfileCard";
import image from "../../../assets/DP.png";

const AdminMentor = () => {
  const [adminData, setAdminData] = useState(null);
  const [mentorData, setMentorData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const params = {
          userId: "11", // Hardcoded user ID, replace with dynamic value if needed
        };
        const data = await getUserDetails(params);
        if (data && data.responseData && data.responseData.length > 0) {
          setAdminData(data.responseData[0]);
        }
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    };

    const fetchMentorData = async () => {
      try {
        const params = {
          roleId: 1,
        };
        const data = await getUserDetails(params);
        setMentorData(data.responseData);
      } catch (error) {
        console.error("Error fetching mentor data:", error);
      }
    };

    fetchAdminData();
    fetchMentorData();
  }, []);

  if (!adminData || !mentorData.length) {
    return (
      <div style={{ padding: "20px", fontSize: "24px", color: "white", textAlign: "center" }}>
        Loading...
      </div>
    );
  }

  const greet = {
    welcome: "Welcome Back",
    name: `${adminData.firstName} ${adminData.lastName}`,
    info: "Here is the information about",
    profile: "Students",
    showButtons: false,
  };

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
      { key: "mentorId", displayName: "Mentor ID" },
      { key: "studentName", displayName: "Name" },
      { key: "studentCollege", displayName: "College" },
      { key: "studentMail", displayName: "Email ID" },
      { key: "studentPhoneNumber", displayName: "Phone Number" },
    ],
    toggle: true,
    itemsPerPage: 18,
  };

  const handleClick = (userId) => {
    console.log(userId);
    navigate(`/admin/mentor/mentor-details/${userId}`);
  };

  return (
    <div>
      <Greeting {...greet} />
      <AdminMentorAction />
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
