import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import MentorProfileInfo from "../../../layouts/admin-mentor/components/MentorProfile";
import MentorEventsList from "../../../layouts/admin-mentor/components/MentorEventsList";
import {
  getUserDetails,
  updateUserDetails,
  deleteUser,
  addNewUser,
} from "../../../services/User";
import { fetchEventsService } from "../../../services/Event";
import LoadingSpinner from "../../../components/loadingspinner/LoadingSpinner";

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
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { mentorData: selectedMentor } = location.state || {};
  const { userId } = useParams();

  useEffect(() => {
    if (selectedMentor) {
      setMentorData(selectedMentor);
    }
  }, [selectedMentor]);

  useEffect(() => {
    if (userId) {
      fetchMentorDetails(userId, setMentorData);
    }
  }, [userId]);

  useEffect(() => {
    const fetchEvents = async () => {
      if (mentorData && mentorData.userId) {
        try {
          const data = await fetchEventsService({ host: mentorData.userId });
          setEvents(data);
        } catch (error) {
          console.error("Error fetching events:", error);
        }
      }
    };

    fetchEvents();
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
      await addNewUser(updatedData);
      fetchMentorDetails(userId, setMentorData);
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  const handleDelete = async () => {
    try {
      if (mentorData && mentorData.userId) {
        const params = { userId: mentorData.userId };
        await deleteUser(params);
        navigate("/admin/mentor");
      } else {
        console.error("mentorData or mentorData.userId is not defined");
      }
    } catch (error) {
      console.error(
        `Error deleting user with userId ${mentorData.userId}:`,
        error
      );
    }
  };

  if (!mentorData) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <MentorProfileInfo mentorData={mentorData} onSubmit={handleFormSubmit} />
      <MentorEventsList
        events={events}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default AdminMentorDetails;
