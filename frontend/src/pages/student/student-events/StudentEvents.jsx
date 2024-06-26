import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import EventMenus from "../../../layouts/common/components/EventMenus";
import DataView from "../../../layouts/common/components/DataView";
import PrimaryCard from "../../../components/cards/PrimaryCard";
import { getEnrolledEventIds, fetchEventsService } from "../../../services/Event";
import LoadingSpinner from "../../../components/loadingspinner/LoadingSpinner";

const StudentEvent = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("Upcoming");
  const [searchTerm, setSearchTerm] = useState("");
  const participantId = sessionStorage.getItem("user_id");

  useEffect(() => {
    fetchEnrolledEvents();
  }, [filter, searchTerm]);

  const fetchEnrolledEvents = useCallback(async () => {
    setLoading(true);
    try {
      const eventIds = await getEnrolledEventIds(participantId);
      console.log("Enrolled Event IDs:", eventIds);

      let filteredEvents = [];
      if (filter === "Upcoming") {
        filteredEvents = eventIds.data.responseData.upcoming || [];
      } else if (filter === "Enrolled") {
        filteredEvents = eventIds.data.responseData.enrolled || [];
      } else if (filter === "Completed") {
        filteredEvents = eventIds.data.responseData.completed || [];
      }

      if (searchTerm) {
        filteredEvents = filteredEvents.filter(event =>
          event.eventTitle.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      setEvents(filteredEvents);
    } catch (error) {
      console.error("Error fetching enrolled events:", error);
      const eventdata = await fetchEventsService({ completed: 0 });
      console.log("Fetched Event Data:", eventdata);

      let filteredEvents = [];
      if (filter === "Upcoming") {
        filteredEvents = eventdata || [];
      } else if (filter === "Enrolled") {
        filteredEvents = [];
      } else if (filter === "Completed") {
        filteredEvents = [];
      }

      if (searchTerm) {
        filteredEvents = filteredEvents.filter(event =>
          event.eventTitle.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      setEvents(filteredEvents);
    } finally {
      setLoading(false);
    }
  }, [participantId, filter, searchTerm]);

  const primaryCardData = {
    data: events.map((event) => ({
      id: event.eventId,
      miniHeading: event.eventType,
      mainHeading: event.eventTitle,
      startDate: event.startDate,
      endDate: event.endDate,
      Description: event.description,
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
        activeFilter={filter}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        buttonVisible={false}
      />
      {loading ? (
        <LoadingSpinner />
      ) : events.length > 0 ? (
        <DataView
          CardComponent={PrimaryCard}
          data={primaryCardData.data}
          tableColumns={primaryCardData.tableColumns}
          toggle={primaryCardData.toggle}
          itemsPerPage={primaryCardData.itemsPerPage}
        />
      ) : (
        <div
          style={{
            textAlign: "left",
            color: "var(--neutral600)",
            marginTop: "-19px",
          }}
          className="padding"
        >
          &nbsp;&nbsp;No events to display
        </div>
      )}
    </div>
  );
};

export default StudentEvent;
