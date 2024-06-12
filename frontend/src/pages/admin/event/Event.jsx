import React from "react";
import { useNavigate } from "react-router-dom";
import EventData from "./EventData";
import { Greeting, DataView } from "../../../layouts/common";
import AdminEventAction from "../../../layouts/admin-event/components/AdminEventAction";
import PrimaryCard from "../../../components/cards/PrimaryCard";

const Event = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/admin/events/event-details`);
  };
  const primaryCardData = {
    data: [
      {
        id: 1,
        miniHeading: "Capstone",
        mainHeading: "Health Management",
        startDate: "Jan 15, 2030",
        endDate: "Mar 15, 2030",
        description:
          "Unlock the power of data with our comprehensive Introduction to Data",
        cardType: "Course",
        handleClick: (e) => {
          handleClick();
        },
      },

      {
        id: 1,
        miniHeading: "Capstone",
        mainHeading: "Health Management",
        startDate: "Jan 15, 2030",
        endDate: "Mar 15, 2030",
        description:
          "Unlock the power of data with our comprehensive Introduction to Data",
        cardType: "Course",
        handleClick: (e) => {
          handleClick();
        },
      },
      ,
      {
        id: 3,
        miniHeading: "Capstone",
        mainHeading: "Health Management",
        startDate: "Jan 15, 2030",
        endDate: "Mar 15, 2030",
        description:
          "Unlock the power of data with our comprehensive Introduction to Data",
        cardType: "Course",
        handleClick: (e) => {
          handleClick();
        },
      },

      {
        id: 3,
        miniHeading: "Capstone",
        mainHeading: "Health Management",
        startDate: "Jan 15, 2030",
        endDate: "Mar 15, 2030",
        description:
          "Unlock the power of data with our comprehensive Introduction to Data",
        cardType: "Course",
        handleClick: (e) => {
          handleClick();
        },
      },

      {
        id: 5,
        miniHeading: "Capstone",
        mainHeading: "Health Management",
        startDate: "Jan 15, 2030",
        endDate: "Mar 15, 2030",
        description:
          "Unlock the power of data with our comprehensive Introduction to Data",
        cardType: "Course",
        handleClick: (e) => {
          handleClick();
        },
      },

      {
        id: 6,
        miniHeading: "Capstone",
        mainHeading: "Health Management",
        startDate: "Jan 15, 2030",
        endDate: "Mar 15, 2030",
        description:
          "Unlock the power of data with our comprehensive Introduction to Data",
        cardType: "Course",
        handleClick: (e) => {
          handleClick();
        },
      },

      {
        id: 7,
        miniHeading: "Capstone",
        mainHeading: "Health Management",
        startDate: "Jan 15, 2030",
        endDate: "Mar 15, 2030",
        description:
          "Unlock the power of data with our comprehensive Introduction to Data",
        cardType: "Course",
        handleClick: (e) => {
          handleClick();
        },
      },

      {
        id: 8,
        miniHeading: "Capstone",
        mainHeading: "Health Management",
        startDate: "Jan 15, 2030",
        endDate: "Mar 15, 2030",
        description:
          "Unlock the power of data with our comprehensive Introduction to Data",
        cardType: "Course",
        handleClick: (e) => {
          handleClick();
        },
      },

      {
        id: 9,
        miniHeading: "Capstone",
        mainHeading: "Health Management",
        startDate: "Jan 15, 2030",
        endDate: "Mar 15, 2030",
        description:
          "Unlock the power of data with our comprehensive Introduction to Data",
        cardType: "Course",
        handleClick: (e) => {
          handleClick();
        },
      },

      {
        id: 10,
        miniHeading: "Capstone",
        mainHeading: "Health Management",
        startDate: "Jan 15, 2030",
        endDate: "Mar 15, 2030",
        description:
          "Unlock the power of data with our comprehensive Introduction to Data",
        cardType: "Course",
        handleClick: (e) => {
          handleClick();
        },
      },

      {
        id: 11,
        miniHeading: "Capstone",
        mainHeading: "Health Management",
        startDate: "Jan 15, 2030",
        endDate: "Mar 15, 2030",
        description:
          "Unlock the power of data with our comprehensive Introduction to Data",
        cardType: "Course",
        handleClick: (e) => {
          handleClick();
        },
      },

      {
        id: 12,
        miniHeading: "Capstone",
        mainHeading: "Health Management",
        startDate: "Jan 15, 2030",
        endDate: "Mar 15, 2030",
        description:
          "Unlock the power of data with our comprehensive Introduction to Data",
        cardType: "Course",
        handleClick: (e) => {
          handleClick();
        },
      },

      {
        id: 13,
        miniHeading: "Capstone",
        mainHeading: "Health Management",
        startDate: "Jan 15, 2030",
        endDate: "Mar 15, 2030",
        description:
          "Unlock the power of data with our comprehensive Introduction to Data",
        cardType: "Course",
        handleClick: (e) => {
          handleClick();
        },
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
    itemsPerPage: 10,
  };

  return (
    <div>
      <Greeting {...EventData.greeting} />
      <AdminEventAction />
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

export default Event;