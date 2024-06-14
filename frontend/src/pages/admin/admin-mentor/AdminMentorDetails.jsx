import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MentorProfileInfo from "../../../layouts/admin-mentor/components/MentorProfile";
import MentorEventsList from "../../../layouts/admin-mentor/components/MentorEventsList";
import { updateUserDetails, getUserDetails } from "../../../services/User";
import profilepic from "../../../assets/DP.png";

const AdminMentorDetails = () => {
  const [mentorData, setMentorData] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    const fetchMentorData = async () => {
      try {
        const data = await getUserDetails({ userId });
        if (data && data.responseData && data.responseData.length > 0) {
          setMentorData(data.responseData[0]);
        }
      } catch (error) {
        console.error('Error fetching mentor data:', error);
      }
    };

    fetchMentorData();
  }, [userId]);

 const handleFormSubmit = async (formData) => {
  try {
    const { dob, phoneNumber, aboutMe, addresses, userId } = formData; // Destructure relevant fields from formData

    // Extract address details
    const { houseName, city, pinCode, state, country } = formData;

    // Construct the updated data payload
    const updatedData = {
      userId,
      dob,
      phoneNumber,
      aboutMe,
      addresses: [{ houseName, city, pinCode, state, country }], // Nest address details inside addresses array
    };

    await updateUserDetails(updatedData); // Update user details

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
