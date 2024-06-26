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
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // State for loading spinner

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
        data.responseData?.filter((item) => item.role && item.role.roleId === 2) || [];
      setMentorData(mentorsOnly);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching mentor data:", error);
      if (error.response && error.response.status === 500) {
        await retryFetch(value);
      } else {
        // Handle other errors accordingly
        console.error("Non-retryable error occurred:", error);
        setLoading(false); // Set loading to false if an error occurs
      }
    }
  };

  const retryFetch = async (value, retriesLeft = 3, delay = 1000) => {
    if (retriesLeft === 0) {
      console.error("Failed to fetch mentor data after multiple attempts.");
      setLoading(false); // Set loading to false after multiple failed attempts
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, delay));

    try {
      await fetchMentorData(value);
    } catch (error) {
      console.error(`Error on attempt ${4 - retriesLeft}:`, error);
      const nextDelay = delay * 2; // Exponential backoff
      await retryFetch(value, retriesLeft - 1, nextDelay);
    }
  };

  useEffect(() => {
    setLoading(true);
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

  if (loading || !mentorData) {
    return <LoadingSpinner />;
  }

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
