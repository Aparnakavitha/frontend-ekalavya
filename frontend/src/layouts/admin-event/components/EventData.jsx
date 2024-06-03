const AdminEventActionData = {

    heading: "Events List",
    buttonProps: {
      variant: "tertiary",
      content: "+ Add new Event",
      width: "full",
    },
    searchWidth: "small",
    searchbarProps: {
      variant: "custom",
      placeholder: "Events",
    },
    showFiltersAndReset: true,
    filterProps: [
      { Heading: "Mode", Content: ["Online", "Offline"] },
      { Heading: "Type", Content: ["Workshop", "Hackathon", "Contest"] },
      { Heading: "Status", Content: ["Upcoming", "Ongoing", "Completed"] },
    ],
    resetProps: {
      variant: "secondary",
      content: "Reset",
      width: "full",
    },
};

export default AdminEventActionData;