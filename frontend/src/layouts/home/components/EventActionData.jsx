const EventActionData = {
    navbuttonProps: {
        pageName: "Events",
      },
      showTextButton: false,
      searchbarProps: {
        variant: "custom",
        placeholder: "Event",
      },
      showFiltersAndReset: true,
      filterProps: [
        { Heading: "Type", Content: ["Workshop", "Hackathon", "Contest"] },
        { Heading: "Mode", Content: ["Online", "Offline"] },
      ],
      buttonProps: {
        variant: "secondary",
        content: "Reset",
        width: "full",
      },
}

export default EventActionData;