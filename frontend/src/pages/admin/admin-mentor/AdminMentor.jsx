import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserDetails, updateUserDetails } from "../../../services/User";
import AdminMentorAction from "../../../layouts/admin-mentor/components/AdminMentorAction";
import ProfileCard from "../../../components/cards/ProfileCard";
import image from "../../../assets/DP.png";
import { Greeting, DataView } from "../../../layouts/common";
import LoadingSpinner from "../../../components/loadingspinner/LoadingSpinner";

const fetchMentorData = async (setMentorData, value = "") => {
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
    var sortedMentors = null;
    if (mentorsOnly) {
      sortedMentors = [...mentorsOnly].sort((a, b) => {
        const nameA = a.firstName.toLowerCase();
        const nameB = b.firstName.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
    }
    setMentorData(sortedMentors);
  } catch (error) {
    console.error("Error fetching mentor data:", error);
  }
};

const AdminMentor = () => {
  const [adminData, setAdminData] = useState(null);
  const [mentorData, setMentorData] = useState([]);
  const [cardAnimation, setCardAnimation] = useState(false);
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
    fetchMentorData(setMentorData);
  }, []);

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
    welcome: "Welcome back",
    name: loggedUserFirstName || "",
    info: "Here is the information about",
    profile: "Mentors",
    showButtons: false,
  };

  let firstTrueAnimationSet = false;

  const data = {
    data: mentorData.map((mentor) => {
      const viewAnimation =
        !firstTrueAnimationSet && cardAnimation && mentor.newEntry;
      if (viewAnimation) {
        firstTrueAnimationSet = true;
      }
      return {
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
        viewAnimation: viewAnimation,
      };
    }),
    tableColumns: [
      { key: "studentId", displayName: "Mentor ID" },
      { key: "studentName", displayName: "Name" },
      { key: "studentMail", displayName: "Email ID" },
      { key: "studentPhoneNumber", displayName: "Phone Number" },
      { key: "studentAddress", displayName: "Address" },
    ],
    toggle: true,
    itemsPerPage: 15,
  };

  const handleSearchChange = (value) => {
    fetchMentorData(setMentorData, value);
  };

  return (
    <div>
      <Greeting {...greet} />
      <AdminMentorAction
        count={mentorData.length}
        onAddSuccess={() => fetchMentorData(setMentorData)}
        onSearchChange={handleSearchChange}
        setMentorData={setMentorData}
        setCardAnimation={setCardAnimation}
      />

      {mentorData.length > 0 ? (
        <div>
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
      ) : (
        <p style={{ color: "white", paddingLeft: "80px", paddingTop: "30px" }}>
          No mentors available
        </p>
      )}
    </div>
  );
};

export default AdminMentor;
