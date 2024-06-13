import React from "react";
import EventMenus from "../../../layouts/common/components/EventMenus";
import DataView from "../../../layouts/common/components/DataView";
import PrimaryCard from "../../../components/cards/PrimaryCard";
import { useNavigate } from "react-router-dom";

const StudentEvent = () => {
  const navigate = useNavigate();
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
          console.log("clicked");
          navigate(`${1}`);
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
          console.log("clicked");
          navigate(`${1}`);
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
          console.log("clicked");
          navigate(`${3}`);
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
          console.log("clicked");
          navigate(`${3}`);
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
          console.log("clicked");
          navigate(`${3}`);
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
          console.log("clicked");
          navigate(`${3}`);
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
          console.log("clicked");
          navigate(`${3}`);
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
          console.log("clicked");
          navigate(`${3}`);
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
          console.log("clicked");
          navigate(`${3}`);
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
          console.log("clicked");
          navigate(`${3}`);
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
          console.log("clicked");
          navigate(`${3}`);
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
          console.log("clicked");
          navigate(`${3}`);
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
          console.log("clicked");
          navigate(`${3}`);
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
          { name: "Upcoming", onClick: () => console.log("Upcoming clicked") },
          { name: "Enrolled", onClick: () => console.log("Enrolled clicked") },
          {
            name: "Completed",
            onClick: () => console.log("Completed clicked"),
          },
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
