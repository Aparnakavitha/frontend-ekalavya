import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EventMenus from "../../../layouts/common/components/EventMenus";
import DataView from "../../../layouts/common/components/DataView";
import PrimaryCard from "../../../components/cards/PrimaryCard";
import { fetchEvents, getEnrolledEventIds } from "../../../../src/services/eventServices";

const StudentEvent = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const participantId = 11; // Manually set participantId for testing

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchFilteredEvents("Upcoming"); // Fetch Upcoming events by default
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const fetchEnrolledEvents = async (participantId) => {
    try {
      const eventIds = await getEnrolledEventIds(participantId);
      console.log("Enrolled Event IDs:", eventIds);

      // Fetch the details of events based on the enrolled event IDs
      const allEvents = await fetchEvents({});
      const enrolledEvents = allEvents.filter(event => eventIds.includes(event.eventId));
      console.log("Enrolled Events:", enrolledEvents);
      setEvents(enrolledEvents);
    } catch (error) {
      console.error("Error fetching enrolled events:", error);
    }
  };

  const fetchFilteredEvents = async (filter) => {
    try {
      const eventIds = await getEnrolledEventIds(participantId);
      let filteredEvents = [];
      const allEvents = await fetchEvents({});
      
      if (filter === "Completed") {
        filteredEvents = allEvents.filter(event => event.completed === 1 && eventIds.includes(event.eventId));
      } else if (filter === "Upcoming") {
        filteredEvents = allEvents.filter(event => event.completed === 0 && !eventIds.includes(event.eventId));
      }
      
      console.log(`${filter} Events:`, filteredEvents);
      setEvents(filteredEvents);
    } catch (error) {
      console.error(`Error fetching ${filter.toLowerCase()} events:`, error);
    }
  };

  const handleStatusClick = (status) => {
    setLoading(true);
    if (status === "Enrolled") {
      fetchEnrolledEvents(participantId).then(() => setLoading(false));
    } else if (status === "Completed") {
      fetchFilteredEvents("Completed").then(() => setLoading(false));
    } else if (status === "Upcoming") {
      fetchFilteredEvents("Upcoming").then(() => setLoading(false));
    }
  };

  const primaryCardData = {
    data: events.map((event) => ({
      id: event.eventId,
      miniHeading: event.eventType, // Assuming event.eventType exists
      mainHeading: event.eventTitle,
      startDate: event.startDate,
      endDate: event.endDate,
      Description: event.description,
      cardType: "Course",
      handleClick: () => {
        console.log("clicked");
        navigate(`${event.eventId}`);
      },
    })),
    tableColumns: [
      { key: "miniHeading", displayName: "Type" },
      { key: "mainHeading", displayName: "Title" },
      { key: "startDate", displayName: "Start Date" },
      { key: "endDate", displayName: "End Date" },
      { key: "Description", displayName: "Description" },
    ],
    toggle: false,
    itemsPerPage: 10,
  };

  console.log("primaryCardData:", primaryCardData.data);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <EventMenus
        explore={{
          content: "Explore Events",
          variant: "secondary",
          onClick: () => {
            console.log("Explore Events clicked");
            navigate("/explore");
          },
          width: "half",
        }}
        statuses={[
          { name: "Upcoming", onClick: () => handleStatusClick("Upcoming") },
          { name: "Enrolled", onClick: () => handleStatusClick("Enrolled") },
          { name: "Completed", onClick: () => handleStatusClick("Completed") },
        ]}
        title="Events"
      />
      <DataView
        CardComponent={PrimaryCard}
        data={primaryCardData.data}
        tableColumns={primaryCardData.tableColumns}
        toggle={primaryCardData.toggle}
        itemsPerPage={primaryCardData.itemsPerPage}
      />
    </div>
  );
};

export default StudentEvent;
