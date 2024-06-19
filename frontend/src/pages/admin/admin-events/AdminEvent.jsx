import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Greeting, DataView } from "../../../layouts/common";
import AdminEventAction from "../../../layouts/admin-event/components/AdminEventAction";
import PrimaryCard from "../../../components/cards/PrimaryCard";
import { addEventService } from "../../../services/Event";
import { fetchEventsService } from "../../../services/Event";

const AdminEvent = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  const [params, setParams] = useState({
    eventTitle: "",
    eventType: "",
    eventMode: "",
  });

  const  greeting = {
    welcome: "Welcome Back",
    name: "John",
    info: "Here is the information about",
    profile: "Mentors",
    showButtons: false,
  };

  useEffect(() => {
    const getEvents = async () => {
      try {
        const filterParams = {
          eventTitle: params.eventTitle || "",
          eventType: params.Type || "",
          eventMode: params.Mode || "",
        };
        const filteredParams = Object.fromEntries(
          Object.entries(filterParams).filter(([key, value]) => value !== "")
        );
        console.log("Fetching events with params:", filteredParams);
        const response = await fetchEventsService(filteredParams);
        setEvents(response || []);
        console.log("Fetched events:", response);
      } catch (error) {
        console.log("Error fetching events:", error);
      }
    };

    getEvents();
  }, [params]);

  const handleClick = (event) => {
    console.log(`Clicked on event ${event.eventId}`);
    navigate(`/admin/events/event-details/${event.eventId}`);
  };

  const primaryCardData = {
    data: events.map((event) => ({
      miniHeading: event.eventType,
      mainHeading: event.eventTitle,
      startDate: event.startDate,
      endDate: event.endDate,
      description: event.description,
      cardType: "Course",
      handleClick: () => handleClick(event),
    })),
    tableColumns: [
      { key: "miniHeading", displayName: "Type" },
      { key: "mainHeading", displayName: "Title" },
      { key: "startDate", displayName: "Start Date" },
      { key: "endDate", displayName: "End Date" },
      { key: "description", displayName: "Description" },
    ],
    toggle: false,
    itemsPerPage: 8,
  };

  console.log("primaryCardData:", primaryCardData);

  const formSubmit = async (data) => {
    data.contact = "7558845220";
    data.hostId = "3";
    try {
      const response = await addEventService(data);
      console.log("Response from API:", response);
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };
  const handleFilterChange = (filters) => {
    setParams((prevParams) => ({
      ...prevParams,
      ...filters,
    }));
  };

  const handleSearchChange = (value) => {
    setParams((prevParams) => ({
      ...prevParams,
      eventTitle: value,
    }));
  };

  const AdminEventActionData = {
    heading: "Events List",
    buttonProps: {
      variant: "tertiary",
      content: "+ Add new Event",
      width: "full",
    },
    showDelete: false,
    searchWidth: "small",
    searchbarProps: {
      variant: "custom",
      placeholder: "Events",
    },
    showFiltersAndReset: true,
    filterProps: [
      {
        Heading: "Mode",
        Content: ["Online", "Offline"],
        Value: ["Online", "Offline"],
      },
      {
        Heading: "Type",
        Content: [
          "Workshop",
          "Hackathon",
          "Contest",
          "Conference",
          "Webinar",
          "Session",
        ],
        Value: [
          "Workshop",
          "Hackathon",
          "Contest",
          "Conference",
          "Webinar",
          "Session",
        ],
      },
    ],
    resetProps: {
      variant: "secondary",
      content: "Reset",
      width: "full",
    },
    addeventprops: {
      organizeroptions: [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
        { value: "option4", label: "Option 4" },
      ],
    },
    searchPlaceholder:"Search events",
  };

  return (
    <div>
      <Greeting {...greeting} />
      <AdminEventAction
        formSubmit={formSubmit}
        AdminEventActionData={AdminEventActionData}
        onFilterChange={handleFilterChange}
        onSearchChange={handleSearchChange}
      />
      {events.length > 0 ? (
        <DataView CardComponent={PrimaryCard} {...primaryCardData} />
      ) : (
        <p style={{ color: "white", paddingLeft: "80px", paddingTop: "30px" }}>
          No events available
        </p>
      )}
    </div>
  );
};

export default AdminEvent;
