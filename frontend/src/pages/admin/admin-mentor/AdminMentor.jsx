import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserDetails, updateUserDetails } from "../../../services/User";
import AdminMentorAction from "../../../layouts/admin-mentor/components/AdminMentorAction";
import ProfileCard from "../../../components/cards/ProfileCard";
import image from "../../../assets/DP.png";
import { Greeting, DataView } from "../../../layouts/common";

const AdminMentor = () => {
  const [adminData, setAdminData] = useState(null);
  const [mentorData, setMentorData] = useState([]);
  const [formData, setFormData] = useState({
    userId: "",
    firstName: "",
    emailId: "",
    collegeId: "defaultCollegeId",
    roleId: "defaultRoleId",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const params = {
          userId: "11",
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

  useEffect(() => {
    fetchMentorData();
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const updatedFormData = {
        userId: formData.userId,
        firstName: formData.firstName,
        emailId: formData.emailId,
        collegeId: formData.collegeId,
        roleId: formData.roleId,
      };

      await updateUserDetails(updatedFormData);
      console.log("User details updated successfully!");
      fetchMentorData();
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  if (!adminData || mentorData.length === 0) {
    return <div>Loading...</div>;
  }

  const greet = {
    welcome: "Welcome Back",
    name: `${adminData.firstName} ${adminData.lastName}`,
    info: "Here is the information about",
    profile: "Mentors",
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
      { key: "studentId", displayName: "Mentor ID" },
      { key: "studentName", displayName: "Name" },
      { key: "studentMail", displayName: "Email ID" },
      { key: "studentPhoneNumber", displayName: "Phone Number" },
    ],
    toggle: true,
    itemsPerPage: 18,
  };

  return (
    <div>
      <Greeting {...greet} />
      <AdminMentorAction onSubmit={handleFormSubmit} onAddSuccess={fetchMentorData} />
      <form onSubmit={handleFormSubmit}>
        <DataView
          CardComponent={(props) => (
            <ProfileCard {...props} onClick={() => navigate(`/admin/mentor/mentor-details/${props.studentId}`)} />
          )}
          {...data}
        />
      </form>
    </div>
  );
};

export default AdminMentor;
