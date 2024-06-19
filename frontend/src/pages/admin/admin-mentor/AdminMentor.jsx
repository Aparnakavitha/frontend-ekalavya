import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserDetails, updateUserDetails } from "../../../services/User";
import AdminMentorAction from "../../../layouts/admin-mentor/components/AdminMentorAction";
import ProfileCard from "../../../components/cards/ProfileCard";
import image from "../../../assets/DP.png";
import { Greeting, DataView } from "../../../layouts/common";
import LoadingSpinner from "../../../components/loadingspinner/LoadingSpinner";

const fetchMentorData = async (setMentorData) => {
  try {
    const params = {
      roleId: 2,
    };
    const data = await getUserDetails(params);
    setMentorData(data.responseData);
  } catch (error) {
    console.error("Error fetching mentor data:", error);
  }
};

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

  const fetchData = async (Data) => {
    try {
      const params = {
        userId: Data,
      };
      const data = await getUserDetails(params);
      setMentorData(data.responseData);
    } catch (error) {
      console.error("Error fetching mentor data:", error);
    }
  };

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

  useEffect(() => {
    fetchMentorData(setMentorData);
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
        addresses: formData.addresses,
      };

      await updateUserDetails(updatedFormData);
      console.log("User details updated successfully!");
      fetchMentorData(setMentorData);
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  const handleCardClick = (userId) => {
    const selectedMentor = mentorData.find(
      (mentor) => mentor.userId === userId
    );
    if (selectedMentor) {
      navigate(`/admin/mentor/mentor-details/${userId}`, {
        state: { mentorData: selectedMentor },
      });
    } else {
      console.error(`Mentor with userId ${userId} not found.`);
    }
  };

  if (!adminData || mentorData.length === 0) {
    return <LoadingSpinner />;
  }

  const greet = {
    welcome: "Welcome Back",
    name: `${adminData.firstName}`,
    info: "Here is the information about",
    profile: "Mentors",
    showButtons: false,
  };

  const data = {
    data: mentorData.map((mentor) => ({
      studentImage: image,
      studentName: `${mentor.firstName || "N/A"} ${mentor.lastName || "N/A"}`,
      studentId: mentor.userId || "N/A",
      studentCollege: "",
      studentMail: mentor.emailId || "N/A",
      studentPhoneNumber: mentor.phoneNo || "N/A",
      studentAddress:
        mentor.addresses && mentor.addresses.length > 0
          ? `${mentor.addresses[0].houseName}, ${mentor.addresses[0].city} - ${mentor.addresses[0].pinCode}, ${mentor.addresses[0].state}, ${mentor.addresses[0].country}`
          : "N/A",
      canDelete: false,
    })),
    tableColumns: [
      { key: "studentId", displayName: "Mentor ID" },
      { key: "studentName", displayName: "Name" },
      { key: "studentMail", displayName: "Email ID" },
      { key: "studentPhoneNumber", displayName: "Phone Number" },
      { key: "studentAddress", displayName: "Address" },
    ],
    toggle: true,
    itemsPerPage: 18,
  };

  return (
    <div>
      <Greeting {...greet} />
      <AdminMentorAction
        onSubmit={handleFormSubmit}
        onAddSuccess={() => fetchMentorData(setMentorData)}
      />
      <DataView
        CardComponent={(props) => (
          <ProfileCard
            {...props}
            onClick={() => handleCardClick(props.studentId)}
          />
        )}
        {...data}
      />
    </div>
  );
};

export default AdminMentor;
