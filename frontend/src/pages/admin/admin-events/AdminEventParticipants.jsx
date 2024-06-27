import { React, useEffect, useState } from "react";
import EventParticipantsList from "../../../layouts/admin-event/components/EventParticipantsList";
import { enrollParticipantService } from "../../../services/Event";
import { useParams } from "react-router-dom";
import { fetchEventsService } from "../../../services/Event";



const AdminEventParticipants = () => {
  const { eventId } = useParams();
  const [enrollData, setEnrollData] = useState([]);
  const [headings, setHeadings] = useState([]);
  const [eventName,setEventName]=useState("");
  const pageNames = [`${eventName}`,"participants"];
  const handleNavButtonClick = (pageName) => {
    console.log(`Navigating to ${pageName}`);
  };

  useEffect(() => {
    fetchEnrollData();
    const fetchEventName= async () => {
      try {
        const eventDataResponse = await fetchEventsService({ eventId });
        const event = eventDataResponse[0];
        setEventName(event.eventTitle);        
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };
    fetchEventName();
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

  return (
    <EventParticipantsList
      data={edata}
      headings={["Participant ID", "Name", "Email ID"]}
      onClick={handleNavButtonClick}
      pageNames={pageNames}
    />
  );
};

export default AdminEventParticipants;
