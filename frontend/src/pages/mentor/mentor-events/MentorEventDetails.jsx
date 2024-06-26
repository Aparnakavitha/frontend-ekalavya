import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MentorEventDescription from "../../../layouts/mentor-events/components/MentorEventDescription";
import EventsTable from "../../../layouts/mentor-events/components/EventsTable";
import { fetchEventsService, addEventService, enrollParticipantService, addEnrollmentService } from "../../../services/Event";

const MentorEventDetails = () => {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState({});
  const [participants, setParticipants] = useState([]);
  const [completed, setCompleted] = useState(false);

  const headings = ["Participant Id", "Name", "Email", "Attendance"];

  const fetchEventData = async () => {
    try {
      const eventDataResponse = await fetchEventsService({ eventId });
      setEventData(eventDataResponse[0]);
      setCompleted(eventDataResponse[0].completed);
    } catch (error) {
      console.log("Error fetching event data:", error);
    }
  };

  const fetchParticipants = async () => {
    try {
      const response = await enrollParticipantService(eventId);
      if (response.statusMessage === "success") {
        const updatedParticipants = response.responseData.map(participant => {
          const existingParticipant = participants.find(p => p.participantId === participant.participantId);
          if (existingParticipant) {
            return {
              ...existingParticipant,
              attendance: participant.attendance
            };
          } else {
            return participant;
          }
        });
        setParticipants(updatedParticipants);
      }
    } catch (error) {
      console.error("Error fetching participants:", error);
    }
  };

  useEffect(() => {
    fetchEventData();
    fetchParticipants();
  }, [eventId]);

  const formSubmit = async (data) => {
    data.hostId = sessionStorage.getItem("user_id");
    try {
      const response = await addEventService(data);
      console.log("Response from API:", response);
      fetchEventData();
      fetchParticipants();
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  const handleAttendanceUpdate = async (attendance) => {
    try {
      const response = await addEnrollmentService(eventId, attendance);
      console.log("Enrollment response:", response);
      fetchParticipants();
    } catch (error) {
      console.error("Error updating enrollment:", error);
    }
  };

  const tableContent = {
    data: participants.map(participant => [
      participant.participantId,
      participant.name,
      participant.userName,
      participant.attendance,
    ]),
    headings,
    logAttendance: () => {},
    onAttendanceUpdate: handleAttendanceUpdate,
    disableAttendance: !completed,
  };

  return (
    <div>
      <MentorEventDescription fetchedFormData={eventData} formSubmit={formSubmit} />
      <EventsTable {...tableContent} />
    </div>
  );
};

export default MentorEventDetails;
