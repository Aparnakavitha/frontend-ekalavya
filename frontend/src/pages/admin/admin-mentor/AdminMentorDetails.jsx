import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MentorProfileInfo from "../../../layouts/admin-mentor/components/MentorProfile";
import MentorEventsList from "../../../layouts/admin-mentor/components/MentorEventsList";
import { updateUserDetails } from "../../../services/User";
import profilepic from "../../../assets/DP.png";

const AdminMentorDetails = () => {
  const [mentorData, setMentorData] = useState(null);
  const location = useLocation();
  const { mentorData: selectedMentor } = location.state || {};

  useEffect(() => {
    if (selectedMentor) {
      setMentorData(selectedMentor);
    }
  }, [selectedMentor]);

  const handleFormSubmit = async (formData) => {
    try {
      const { dob, phoneNumber, aboutMe, addresses, userId, houseName, city, pinCode, state, country } = formData;

      const updatedData = {
        userId,
        dob,
        phoneNumber,
        aboutMe,
        addresses: [{ houseName, city, pinCode, state, country }],
      };

      await updateUserDetails(updatedData);

      console.log("User details updated successfully!");
      setMentorData(updatedData); // Optionally update local state with updated data
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  if (!mentorData) {
    return (
      <div style={{ padding: '20px', fontSize: '24px', color: 'white', textAlign: 'center' }}>
        Loading...
      </div>
    );
  }

  return (
    <div>
      <MentorProfileInfo mentorData={mentorData} onSubmit={handleFormSubmit} />
      <MentorEventsList mentorId={mentorData.userId} />
    </div>
  );
};

export default AdminMentorDetails;
