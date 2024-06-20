import React from "react";
import BatchSearch from "../../common/components/BatchSearch";

const EventAction = ({ onSearchChange, onFilterChange }) => {
  const EventActionData = {
    navbuttonProps: {
      pageName: "Upcoming Events",
    },
    showTextButton: false,
    showAdd: false,
    showReset: true,
    searchbarProps: {
      variant: "custom",
      placeholder: "Event",
    },
    showFiltersAndReset: true,
    filterProps: [
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
      {
        Heading: "Mode",
        Content: ["Online", "Offline"],
        Value: ["Online", "Offline"],
      },
    ],
    resetProps: {
      variant: "secondary",
      content: "Reset",
      width: "full",
    },
  };
  return (
    <div>
      <BatchSearch
        {...EventActionData}
        onSearchChange={onSearchChange}
        onFilterChange={onFilterChange}
      />
    </div>
  );
};

export default EventAction;
