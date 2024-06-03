import ActionComponent from "./Action";
import React, { useState } from "react";
import AddUser from "./AddUser";

export default {
  title: "layouts/Common/Components/Action",
  component: ActionComponent,
};

const studentAct = {
  heading: "Students List",
  buttonProps: {
    variant: "tertiary",
    content: "+ Add new Student",
    width: "full",
  },
  searchWidth: "medium",
  searchbarProps: {
    variant: "custom",
    placeholder: "Student Name",
  },
  showFiltersAndReset: true,
  filterProps: [
    {
      Heading: "College",
      Content: ["GEC Thrissur", "RIT Kottayam", "NSS Plakkad"],
    },
    { Heading: "Batch", Content: ["Batch 1", "Batch 2", "Batch 3"] },
  ],
  resetProps: {
    variant: "secondary",
    content: "Reset",
    width: "full",
  },
  adduserprops: {
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    viewCollege: true,
    heading: "Add New Student",
  },
};

const mentorAct = {
  heading: "Mentors List",
  buttonProps: {
    variant: "tertiary",
    content: "+ Add new Mentor",
    width: "full",
  },
  searchWidth: "large",
  searchbarProps: {
    variant: "custom",
    placeholder: "Mentor Name",
  },
  showFiltersAndReset: false,
  adduserprops: {
    viewCollege: false,
    heading: "Add New Mentor",
  },
};

const eventsAct = {
  heading: "Events List",
  buttonProps: {
    variant: "tertiary",
    content: "+ Add new Student",
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

const batchesAct = {
  heading: "Batches List",
  buttonProps: {
    variant: "tertiary",
    content: "+ Add new Batch",
    width: "full",
  },
  searchWidth: "large",
  searchbarProps: {
    variant: "custom",
    placeholder: "Batch",
  },
  showFiltersAndReset: false,
};

export const studentAction = {
  args: {
    ...studentAct,
  },
};

export const mentorAction = {
  args: {
    ...mentorAct,
  },
};

export const eventsAction = {
  args: {
    ...eventsAct,
  },
};

export const batchesAction = {
  args: {
    ...batchesAct,
  },
};
