import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MentorProfileInfo from "../../../layouts/admin-mentor/components/MentorProfile";
import MentorEventsList from "../../../layouts/admin-mentor/components/MentorEventsList";
import { getUserDetails, updateUserDetails } from "../../../services/User";
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
      const { dob, phoneNo, aboutMe, addresses, userId ,education} = formData;

      // Prepare addresses with addressId included
      const updatedAddresses = addresses.map(address => ({
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

  const handleFormSubmit2 = async (formData) => {
    try {
      console.log("Form Submitted with data:", formData);
      const response = await updateUserDetails(formData);
      console.log("Update response:", response);
      fetchMentorDetails(formData.userId, setMentorData);
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
      <MentorProfileInfo mentorData={mentorData} onSubmit={handleFormSubmit} onformSubmit = {handleFormSubmit2} />
      <MentorEventsList mentorId={mentorData.userId} />
    </div>
  );
};

export default AdminMentorDetails;
