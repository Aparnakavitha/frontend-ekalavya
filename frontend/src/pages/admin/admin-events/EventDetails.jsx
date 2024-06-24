import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminEventDescription from "../../../layouts/admin-event/components/AdminEventDescription";
import { addEventService, fetchEventsService, deleteEventService } from "../../../services/Event";
import { getUserDetails } from "../../../services/User";

const AdminEventDetails = () => {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState(null);
  const [organizerData, setOrganizerData] = useState(null);

  const fetchEventData = async () => {
    try {
      const eventDataResponse = await fetchEventsService({ eventId });
      const event = eventDataResponse[0];
      setEventData(event);
      if (event?.hostId) {
        await fetchOrganizerData(event.hostId);
      }
    } catch (error) {
      console.error("Error fetching event data:", error);
    }
  };

  const fetchOrganizerData = async (userId) => {
    try {
      const organizerDataResponse = await getUserDetails({ userId });
      if (organizerDataResponse?.responseData?.length > 0) {
        setOrganizerData(organizerDataResponse.responseData[0]);
        console.log("Organizer Data:", organizerDataResponse.responseData[0]);
      } else {
        console.log("No organizer data found");
      }
    } catch (error) {
      console.error("Error fetching organizer data:", error);
    }
  };

  useEffect(() => {
    fetchEventData();
  }, [eventId]);

  const formSubmit = async (data) => {
    data.contact = "7558845220";
    data.hostId = eventData.hostId;
    try {
      const response = await addEventService(data);
      console.log("Response from API:", response);
      fetchEventData();
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  const handleDeleteEvent = async () => {
    try {
      await deleteEventService(eventId);
      console.log("Event deleted successfully");
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <div className="padding">
      <AdminEventDescription
        organizer={organizerData ? `${organizerData.firstName} ${organizerData.lastName}` : ""}
        eventId={eventId}
        onDelete={handleDeleteEvent}
        fetchedFormData={eventData}
        formSubmit={formSubmit}
      />
    </div>
  );
};

export default AdminEventDetails;
