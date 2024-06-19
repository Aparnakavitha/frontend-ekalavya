import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MentorProfileInfo from "../../../layouts/admin-mentor/components/MentorProfile";
import MentorEventsList from "../../../layouts/admin-mentor/components/MentorEventsList";
import { getUserDetails, updateUserDetails, deleteUser } from "../../../services/User";

const fetchMentorDetails = async (userId, setMentorData) => {
  try {
    const params = { userId };
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
  const navigate = useNavigate();
  const location = useLocation();
  const { mentorData: selectedMentor } = location.state || {};

  useEffect(() => {
    if (selectedMentor) {
      setMentorData(selectedMentor);
    }
  }, [selectedMentor]);

  useEffect(() => {
    if (mentorData && mentorData.userId) {
      fetchMentorDetails(mentorData.userId, setMentorData);
    }
  }, [mentorData]);

  const handleFormSubmit = async (formData) => {
    try {
      const { dob, phoneNo, aboutMe, addresses, userId } = formData;

      const updatedAddresses = addresses.map((address) => ({
        ...address,
        addressId: address.addressId || "",
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
      fetchMentorDetails(userId, setMentorData);
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  const handleDelete = async () => {
    try {
      if (mentorData && mentorData.userId) {
        await deleteUser({ userId: mentorData.userId });
        console.log(`User with userId ${mentorData.userId} deleted successfully.`);
        navigate("/admin/mentor");
      } else {
        console.error("mentorData or mentorData.userId is not defined");
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
      <MentorEventsList handleDelete={handleDelete} />
    </div>
  );
};

export default AdminMentorDetails;
