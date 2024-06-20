import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EventMenus from "../../../layouts/common/components/EventMenus";
import DataView from "../../../layouts/common/components/DataView";
import PrimaryCard from "../../../components/cards/PrimaryCard";
import { getEnrolledEventIds } from "../../../../src/services/eventService";

const StudentEvent = () => {
  const navigate = useNavigate();
  const [event, setEvents] = useState([]);
  const [loading, setLoading] = useState(true); // Default to true to show loading initially
  const [filter, setFilter] = useState("Upcoming");
  const participantId = 3; 

  useEffect(() => {
    fetchEnrolledEvents();
  }, [filter]);

  const fetchEnrolledEvents = async () => {
    setLoading(true); // Start loading
    try {
      const eventIds = await getEnrolledEventIds(participantId);
      console.log("Enrolled Event IDs:", eventIds);
      
      if (filter === "Upcoming") {
        setEvents(eventIds.upcoming);
      } else if (filter === "Enrolled") {
        setEvents(eventIds.enrolled);
      } else if (filter === "Completed") {
        setEvents(eventIds.completed);
      }
    } catch (error) {
      console.error("Error fetching enrolled events:", error);
    }
    setLoading(false); // Stop loading
  };

  const primaryCardData = {
    data: event.map((event) => ({
      id: event.eventId,
      miniHeading: event.eventType,
      mainHeading: event.eventTitle,
      startDate: event.startDate,
      endDate: event.endDate,
      description: event.description,
      cardType: "Course",
      handleClick: () => {
        console.log("clicked");
        navigate(`${event.eventId}`, {
          state: { eventId: event.eventId, tab: filter },
        });
      },
    })),
    tableColumns: [
      { key: "miniHeading", displayName: "Type" },
      { key: "mainHeading", displayName: "Title" },
      { key: "startDate", displayName: "Start Date" },
      { key: "endDate", displayName: "End Date" },
      { key: "description", displayName: "Description" },
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
          { name: "Upcoming", onClick: () => setFilter("Upcoming") },
          { name: "Enrolled", onClick: () => setFilter("Enrolled") },
          { name: "Completed", onClick: () => setFilter("Completed") },
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
