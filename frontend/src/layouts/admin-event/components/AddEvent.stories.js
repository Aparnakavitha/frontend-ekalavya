import AddEvent from "./AddEvent";
import React from "react";

export default {
  title: "layouts/Admin-event/Components/AddEvent",
  component: AddEvent,
};
const organizeroptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "option4", label: "Option 4" },
];

const isOrganizer = false;
const AddeventForm = (args) => <AddEvent {...args} />;

export const EventCreateForm = AddeventForm.bind({});
EventCreateForm.args = {
  organizeroptions: organizeroptions,
  isOrganizer: isOrganizer,
};

export const EventEditForm = AddeventForm.bind({});
EventEditForm.args = {
  organizeroptions: organizeroptions,
  isOrganizer: isOrganizer,
  defaultValues: {
    eventTitle: "Mock Event Title",
    eventMode: "Online",
    eventType: "Hackathon",
    description: "This is a mock description for the event.",
    startDate: "2024-05-24",
    endDate: "2024-05-25",
    startTime: "10:00",
    endTime: "12:00",
    link: "https://mockevent.com",
    speaker: "Mock Speaker",
    speakerDescrition: "Mock Speaker Description",
    organizer: "option1",
    location: "wqdwdfrefer",
  },
};
