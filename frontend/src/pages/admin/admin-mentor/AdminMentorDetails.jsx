import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import MentorProfileInfo from "../../../layouts/admin-mentor/components/MentorProfile";
import MentorEventsList from "../../../layouts/admin-mentor/components/MentorEventsList";
import { getUserDetails, updateUserDetails, deleteUser } from "../../../services/User";
import profilepic from "../../../assets/DP.png";

const fetchMentorDetails = async (userId, setMentorData) => {
  try {
    const params = {
      userId,
    };
    const data = await getUserDetails(params);
    if (data && data.responseData && data.responseData.length > 0) {
      setMentorData(data.responseData[0]);
    }
  } catch (error) {
    console.error("Error fetching mentor details:", error);
  }
};

const AdminMentorDetails = () => {
  const [mentorData, setMentorData] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate
  const location = useLocation();
  const { mentorData: selectedMentor } = location.state || {};

  useEffect(() => {
    if (selectedMentor) {
      setMentorData(selectedMentor);
    }
  }, [selectedMentor]);

  useEffect(() => {
    if (mentorData) {
      fetchMentorDetails(mentorData.userId, setMentorData);
    }
  }, [mentorData]);

  const handleFormSubmit = async (formData) => {
    try {
      const { dob, phoneNo, aboutMe, addresses, userId } = formData;

      // Prepare addresses with addressId included
      const updatedAddresses = addresses.map((address) => ({
        ...address,
        addressId: address.addressId || "", // If addressId is not present, use empty string
      }));

      const updatedData = {
        userId,
        dob,
        phoneNo,
        aboutMe,
        addresses: updatedAddresses,
      };

      await updateUserDetails(updatedData);

      console.log("User details updated successfully!");
      fetchMentorDetails(userId, setMentorData); // Fetch updated mentor details after update
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  const handleDelete = async () => {
    try {
      if (mentorData) {
        await deleteUser(mentorData.userId);
        console.log(`User with userId ${mentorData.userId} deleted successfully.`);
        navigate("/admin/mentor"); // Navigate to /admin/mentor after successful deletion
      }
    } catch (error) {
      console.error(`Error deleting user with userId ${mentorData.userId}:`, error);
    }
  };

  if (!mentorData) {
    return (
      <div style={{ padding: "20px", fontSize: "24px", color: "white", textAlign: "center" }}>
        Loading...
      </div>
    );
  }

  return (
    <div>
      <MentorProfileInfo mentorData={mentorData} onSubmit={handleFormSubmit} />
      <MentorEventsList mentorId={mentorData.userId} handleDelete={handleDelete} />
    </div>
  );
};

export default AdminMentorDetails;
