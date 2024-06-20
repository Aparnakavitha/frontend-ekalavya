import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserDetails, updateUserDetails } from "../../../services/User";
import AdminMentorAction from "../../../layouts/admin-mentor/components/AdminMentorAction";
import ProfileCard from "../../../components/cards/ProfileCard";
import image from "../../../assets/DP.png";
import { Greeting, DataView } from "../../../layouts/common";
import LoadingSpinner from "../../../components/loadingspinner/LoadingSpinner";

const fetchMentorData = async (setMentorData, value = 0) => {
  try {
    var params = {
      roleId: 2,
    };
    if (value) {
      params = {
        userId: value,
      };
    }

    const data = await getUserDetails(params);
    const mentorsOnly =
      data.responseData?.filter(
        (item) => item.role && item.role.roleId === 2
      ) || [];
    setMentorData(mentorsOnly);
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
          userId: "1",
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

  if (!adminData) {
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
      studentName: `${mentor.firstName || "N/A"} ${mentor.lastName || ""}`,
      studentId: mentor.userId || "",
      studentCollege: "",
      studentMail: mentor.emailId || "",
      studentPhoneNumber: mentor.phoneNo || "",
      studentAddress:
        mentor.addresses && mentor.addresses.length > 0
          ? `${mentor.addresses[0].houseName}, ${mentor.addresses[0].city} - ${mentor.addresses[0].pinCode}, ${mentor.addresses[0].state}, ${mentor.addresses[0].country}`
          : "",
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

  const handleSearchChange = (value) => {
    fetchMentorData(setMentorData, value);
  };

  return (
    <div>
      <Greeting {...greet} />
      <AdminMentorAction
        onSubmit={handleFormSubmit}
        onAddSuccess={() => fetchMentorData(setMentorData)}
        onSearchChange={handleSearchChange}
      />

      {mentorData.length > 0 ? (
        <DataView
          CardComponent={(props) => (
            <ProfileCard
              {...props}
              onClick={() => handleCardClick(props.studentId)}
            />
          )}
          {...data}
        />
      ) : (
        <p style={{ color: "white", paddingLeft: "80px", paddingTop: "30px" }}>
          No mentors available
        </p>
      )}
    </div>
  );
};

export default AdminMentor;
