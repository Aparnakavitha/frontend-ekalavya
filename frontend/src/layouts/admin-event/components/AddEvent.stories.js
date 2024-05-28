import AddEvent from "./AddEvent";
import React from "react";

export default {
  title: "layouts/AdminEvent/Components/AddEvent",
  component: AddEvent,
};
const AddeventForm = (args) => <AddEvent {...args} />;

export const EventCreateForm = AddeventForm.bind({});
EventCreateForm.args = {};

export const EventEditForm = AddeventForm.bind({});
EventEditForm.args = {
  defaultValues: {
    eventTitle: "Mock Event Title",
    eventMode: "Online",
    eventType: "Mock Event Type",
    description: "This is a mock description for the event.",
    startDate: "2024-05-24",
    endDate: "2024-05-25",
    startTime: "10:00",
    endTime: "12:00",
    link: "https://mockevent.com",
    speaker: "Mock Speaker",
    organizer: "Mock Organizer",
    location: "wqdwdfrefer",
  },
};
