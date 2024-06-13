import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MentorProfileInfo from "../../../layouts/admin-mentor/components/MentorProfile";
import MentorEventsList from "../../../layouts/admin-mentor/components/MentorEventsList";
import { getUserDetails } from "../../../services/User";
import profilepic from "../../../assets/DP.png";

const AdminMentorDetails = () => {
  const [mentorData, setMentorData] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    const fetchMentorData = async () => {
      try {
        const params = {
          userId: userId,
        };
        const data = await getUserDetails(params);
        if (data && data.responseData && data.responseData.length > 0) {
          setMentorData(data.responseData[0]);
        }
      } catch (error) {
        console.error('Error fetching mentor data:', error);
      }
    };

    fetchMentorData();
  }, [userId]);

  if (!mentorData) {
    return (
      <div style={{ padding: '20px', fontSize: '24px', color: 'white', textAlign: 'center' }}>
        Loading...
      </div>
    );
  }

  return (
    <div>
      <MentorProfileInfo mentorData={mentorData} />
      <MentorEventsList mentorId={mentorData.userId} />
    </div>
  );
};

export default AdminMentorDetails;
