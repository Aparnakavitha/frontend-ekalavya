import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserDetails } from "../../../services/User";
import AdminMentorAction from "../../../layouts/admin-mentor/components/AdminMentorAction";
import ProfileCard from "../../../components/cards/ProfileCard";
import image from "../../../assets/DP.png";
import { Greeting, DataView } from "../../../layouts/common";
import LoadingSpinner from "../../../components/loadingspinner/LoadingSpinner";

const AdminMentor = () => {
  const [mentorData, setMentorData] = useState([]);
  const [cardAnimation, setCardAnimation] = useState(false);
  const [loading, setLoading] = useState(true); // State for loading spinner
  const navigate = useNavigate();

  const fetchMentorData = async (value = "") => {
    try {
      var params = {
        roleId: 2,
      };

      if (value && Number.isInteger(Number(value))) {
        params = {
          userId: Number(value),
        };
      } else if (value && typeof value === "string") {
        params = {
          name: value,
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
    } finally {
      setLoading(false); // Hide loading spinner regardless of success or failure
    }
  };

  useEffect(() => {
    fetchMentorData();
  }, []); // Fetch data on component mount

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

  const loggedUserFirstName = sessionStorage.getItem("firstName");

  const greet = {
    welcome: "Welcome Back",
    name: loggedUserFirstName || "",
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
      studentPhoneNumber: mentor.phoneNo || "\u00A0",
      studentAddress:
        mentor.addresses && mentor.addresses.length > 0
          ? `${mentor.addresses[0].houseName}, ${mentor.addresses[0].city} - ${mentor.addresses[0].pinCode}, ${mentor.addresses[0].state}, ${mentor.addresses[0].country}`
          : "",
      canDelete: false,
      viewAnimation: (cardAnimation && mentor.newEntry) || false,
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
    setLoading(true); // Show loading spinner on search
    fetchMentorData(value);
  };

  return (
    <div>
      <Greeting {...greet} />
      <AdminMentorAction
        onAddSuccess={() => fetchMentorData()}
        onSearchChange={handleSearchChange}
        setMentorData={setMentorData}
        setCardAnimation={setCardAnimation}
      />

      {loading ? ( // Display loading spinner when data is being fetched
        <LoadingSpinner />
      ) : mentorData.length > 0 ? (
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
