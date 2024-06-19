import { React, useEffect, useState } from "react";
import EventParticipantsList from "../../../layouts/admin-event/components/EventParticipantsList";
import { enrollParticipantService } from "../../../services/Event";
import { useParams } from "react-router-dom";

const pageNames = ["Home", "Exploring Future", "Participants"];

const handleNavButtonClick = (pageName) => {
  console.log(`Navigating to ${pageName}`);
};

const AdminEventParticipants = () => {
  const { eventId } = useParams();
  const [enrollData, setEnrollData] = useState([]);
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    fetchEnrollData();
  }, [eventId]);

  const fetchEnrollData = async () => {
    try {
      const enroll = await enrollParticipantService(eventId);
      setEnrollData(enroll.responseData);
      console.log(" successful");
      if (enroll.responseData.length > 0) {
        const firstObject = enroll.responseData[0];
        const keys = Object.keys(firstObject);
        const filteredHeadings = keys.filter((key) => key !== "attendance");
        const formattedHeadings = filteredHeadings.map((key) => {
          return key.replace(/([A-Z])/g, " $1").trim();
        });

        setHeadings(formattedHeadings);
      }
    } catch (error) {
      console.log("Error getting participants:", error);
    }
  };

  const edata = [];

  for (let i = 0; i < enrollData.length; i++) {
    const studentData = [
      enrollData[i].participantId,
      enrollData[i].name,
      enrollData[i].userName,
    ];
    edata.push(studentData);
  }

  console.log(headings);

  return (
    <EventParticipantsList
      data={edata}
      headings={headings}
      onClick={handleNavButtonClick}
      pageNames={pageNames}
    />
  );
};

export default AdminEventParticipants;
