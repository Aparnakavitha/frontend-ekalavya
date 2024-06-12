import React from "react";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import { EventMenus } from "../../../layouts/common";
import DataView from "../../../layouts/common/components/DataView";
import PrimaryCard from "../../../components/cards/PrimaryCard";

const MentorEvents = () => {

  const navigate = useNavigate();

  const createEvent = {
    content: "Create Event",
    variant: "secondary",
    width: "half",
    onClick: () => {
      navigate("/mentor/event-creation")
    },
  };

  const EventAction = {
    explore: createEvent,
    statuses: [
      { name: "Upcoming", onClick: () => console.log("Upcoming clicked") },
      { name: "Completed", onClick: () => console.log("Completed clicked") },
    ],
    title: "Events",
  };

  const handleClick = (e) => {
    console.log("Card clicked");
    navigate("/mentor/event-details")
  };
  
  const primaryCardData = {
    data: [
      {
        miniHeading: "Capstone",
        mainHeading: "Health Management",
        startDate: "Jan 15, 2030",
        endDate: "Mar 15, 2030",
        description:
          "Unlock the power of data with our comprehensive Introduction to Data",
        cardType: "Course",
        handleClick: handleClick,
      },
      {
        miniHeading: "Capstone",
        mainHeading: "Health Management",
        startDate: "Jan 15, 2030",
        endDate: "Mar 15, 2030",
        description:
          "Unlock the power of data with our comprehensive Introduction to Data",
        cardType: "Course",
        handleClick: handleClick,
      },
      {
        miniHeading: "Capstone",
        mainHeading: "Health Management",
        startDate: "Jan 15, 2030",
        endDate: "Mar 15, 2030",
        description:
          "Unlock the power of data with our comprehensive Introduction to Data",
        cardType: "Course",
        handleClick: handleClick,
      },
      {
        miniHeading: "Capstone",
        mainHeading: "Health Management",
        startDate: "Jan 15, 2030",
        endDate: "Mar 15, 2030",
        description:
          "Unlock the power of data with our comprehensive Introduction to Data",
        cardType: "Course",
        handleClick: handleClick,
      },
      {
        miniHeading: "Capstone",
        mainHeading: "Health Management",
        startDate: "Jan 15, 2030",
        endDate: "Mar 15, 2030",
        description:
          "Unlock the power of data with our comprehensive Introduction to Data",
        cardType: "Course",
        handleClick: handleClick,
      },
      {
        miniHeading: "Capstone",
        mainHeading: "Health Management",
        startDate: "Jan 15, 2030",
        endDate: "Mar 15, 2030",
        description:
          "Unlock the power of data with our comprehensive Introduction to Data",
        cardType: "Course",
        handleClick: handleClick,
      },
      {
        miniHeading: "Capstone",
        mainHeading: "Health Management",
        startDate: "Jan 15, 2030",
        endDate: "Mar 15, 2030",
        description:
          "Unlock the power of data with our comprehensive Introduction to Data",
        cardType: "Course",
        handleClick: handleClick,
      },
      {
        miniHeading: "Capstone",
        mainHeading: "Health Management",
        startDate: "Jan 15, 2030",
        endDate: "Mar 15, 2030",
        description:
          "Unlock the power of data with our comprehensive Introduction to Data",
        cardType: "Course",
        handleClick: handleClick,
      },
    ],
    tableColumns: [
      { key: "miniHeading", displayName: "Type" },
      { key: "mainHeading", displayName: "Title" },
      { key: "startDate", displayName: "Start Date" },
      { key: "endDate", displayName: "End Date" },
      { key: "description", displayName: "Description" },
    ],
    toggle: false,
    itemsPerPage: 9,
  };

  return (
    <div>
      <EventMenus {...EventAction} />
      <DataView CardComponent={PrimaryCard} {...primaryCardData} />
    </div>
  );
};

export default MentorEvents;
