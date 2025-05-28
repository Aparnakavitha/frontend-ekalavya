import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
 
import MentorTaskMenu from "../../../layouts/mentor-task/MentorTaskMenu.jsx";
import DataView from "../../../layouts/common/components/DataView";
import PrimaryCard from "../../../components/cards/PrimaryCard";
import LoadingSpinner from "../../../components/loadingspinner/LoadingSpinner";
import NoData from "../../../components/nodata/NoData";
import secureLocalStorage from "react-secure-storage";
 
import {
  getEnrolledEventIds,
  fetchEventsService,
} from "../../../services/Event";
 
const MentorTask = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("Upcoming");
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("Projects");
 
  const userSession = secureLocalStorage.getItem("userSession") || {};
  const participantId = userSession.userId;
 
  const fetchEnrolledEvents = useCallback(async () => {
    setLoading(true);
    try {
      const eventIds = await getEnrolledEventIds(participantId);
      let fetchedEvents = [];
 
      if (filter === "Upcoming") {
        fetchedEvents = eventIds.data.responseData.upcoming || [];
      } else if (filter === "Enrolled") {
        fetchedEvents = eventIds.data.responseData.enrolled || [];
      } else if (filter === "Completed") {
        fetchedEvents = eventIds.data.responseData.completed || [];
      }
 
      setEvents(fetchedEvents);
      applySearchFilter(fetchedEvents);
    } catch (error) {
      console.error("Error fetching enrolled events:", error);
      const eventdata = await fetchEventsService({ completed: 0 });
      let fetchedEvents = [];
 
      if (filter === "Upcoming") {
        fetchedEvents = eventdata || [];
      }
 
      setEvents(fetchedEvents);
      applySearchFilter(fetchedEvents);
    } finally {
      setLoading(false);
    }
  }, [participantId, filter]);
 
  const applySearchFilter = (eventsToFilter) => {
    let filtered = [...eventsToFilter];
 
    if (searchTerm) {
      filtered = filtered.filter((event) =>
        event.eventTitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
 
    if (typeFilter) {
      filtered = filtered.filter((event) => event.eventType === typeFilter);
    }
 
    setFilteredEvents(filtered);
  };
 
  useEffect(() => {
    fetchEnrolledEvents();
  }, [filter, fetchEnrolledEvents]);
 
  useEffect(() => {
    applySearchFilter(events);
  }, [searchTerm, events, typeFilter]);
 
  const primaryCardData = {
    data: filteredEvents.map((event) => ({
      id: event.eventId,
      miniHeading: event.eventType,
      mainHeading: event.eventTitle,
      startDate: event.startDate,
      endDate: event.endDate,
      Description: event.description,
      cardType: "Events",
      handleClick: () => {
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
      { key: "Description", displayName: "Description" },
    ],
    toggle: false,
    itemsPerPage: 10,
  };
 
  return (
    <div>
      <MentorTaskMenu
        explore={{
          content: "Explore Events",
          variant: "secondary",
          onClick: () => {
            navigate("/explore");
          },
          width: "half",
        }}
        statuses={[
          { name: "Ongoing", onClick: () => setFilter("Ongoing") },
          { name: "To Review", onClick: () => setFilter("To Review") },
          { name: "Completed", onClick: () => setFilter("Completed") },
        ]}
        title="Tasks"
        buttonVisible={false}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
      />
 
      {loading ? (
        <LoadingSpinner />
      ) : filteredEvents.length > 0 ? (
        <DataView
          CardComponent={PrimaryCard}
          data={primaryCardData.data}
          tableColumns={primaryCardData.tableColumns}
          toggle={primaryCardData.toggle}
          itemsPerPage={primaryCardData.itemsPerPage}
        />
      ) : (
        <NoData title="Tasks" />
      )}
    </div>
  );
};
 
export default MentorTask;