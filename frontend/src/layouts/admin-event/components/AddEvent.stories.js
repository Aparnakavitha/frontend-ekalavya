import AddEvent from "./AddEvent";
import React from "react";

export default {
  title: "layouts/admin-event/components/AddEvent",
  component: AddEvent,
};
const Template = (args) => <AddEvent {...args} />;

export const EventCreateForm = Template.bind({});
EventCreateForm.args = {};

export const EventEditForm = Template.bind({});
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
