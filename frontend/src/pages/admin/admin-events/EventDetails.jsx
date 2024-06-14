import { React, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import AdminEventDescription from "../../../layouts/admin-event/components/AdminEventDescription";
import { addEventService } from "../../../services/admin/event/EventService";
import { fetchEventsService } from "../../../services/admin/event/EventService";
import { deleteEventService } from "../../../services/admin/event/EventService";

const AdminEventDetails = () => {
  const { eventId } = useParams();
  const [params, setParams] = useState({ eventId });
  const [eventData, setEventData] = useState(null);
  // const [eventId, setEventId]= useState("23");

  const fetchEventData = async () => {
    try {
      const eventDataResponse = await fetchEventsService(params);
      setEventData(eventDataResponse[0]);
      console.log(eventDataResponse);
      console.log(eventDataResponse[0]);
    } catch (error) {
      console.log("Error fetching event data:", error);
    }
  };

  useEffect(() => {
    fetchEventData();
  }, [params]);

  const formSubmit = async (data) => {
    data.contact = "7558845220";
    data.hostId = "3";
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
      console.log("Error deleting event:", error);
    }
  };

  return (
    <div className="padding">
      <AdminEventDescription
        eventId={eventId}
        onDelete={handleDeleteEvent}
        fetchedFormData={eventData}
        formSubmit={formSubmit}
      />
    </div>
  );
};

export default AdminEventDetails;
