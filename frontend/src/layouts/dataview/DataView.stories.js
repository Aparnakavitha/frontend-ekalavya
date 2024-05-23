import React from "react";
import { action } from "@storybook/addon-actions";

import DataView from "../dataview/DataView";
import EventCard from "../../components/cards/EventCard";
import PrimaryCard from "../../components/cards/PrimaryCard";
import ProfileCard from "../../components/cards/ProfileCard";
import SkillBatchCard from "../../components/cards/SkillBatchCard";
import SkillCard from "../../components/cards/SkillCard";
import SkillUser from "../../components/cards/SkillUser";
import StudentCard from "../../components/cards/StudentCard";
import TestimonialCard from "../../components/cards/TestimonialCard";
import image from "../../assets/DP.png";

export default {
  title: "layouts/DataView",
  component: DataView,
  argTypes: {
    data: {
      control: { type: "object" },
      description: "Array of data objects to be displayed",
    },
    toggle: {
      control: { type: "boolean" },
      description: "Show or hide the view toggle buttons",
    },
    itemsPerPage: {
      control: { type: "number" },
      description: "Number of items per page for pagination",
    },
  },
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
      handleClick: (e) => {
        console.log("clicked");
      },
    },
    {
      miniHeading: "Capstone",
      mainHeading: "Health Management",
      startDate: "Jan 15, 2030",
      endDate: "Mar 15, 2030",
      description:
        "Unlock the power of data with our comprehensive Introduction to Data",
      cardType: "Course",
      handleClick: (e) => {
        console.log("clicked");
      },
    },
  ],
  toggle: true,
  itemsPerPage: 11,
};

const eventCardData = {
  data: [
    {
      main: "All hands meeting",
      sub: "http://www.zoom.com",
      start: "10:30am",
      end: "11:30am",
      status: "due",
      mode: "dark",
      date: 17,
      onclick: (e) => {
        console.log("Event card clicked!");
      },
    },
    {
      main: "All hands meeting",
      sub: "http://www.zoom.com",
      start: "10:30am",
      end: "11:30am",
      status: "due",
      mode: "dark",
      date: 17,
      onclick: (e) => {
        console.log("Event card clicked!");
      },
    },
  ],
  toggle: true,
  itemsPerPage: 11,
};

const studentCardData = {
  data: [
    {
      studentImage: image,
      studentName: "John Doe",
      studentId: "123",
      studentCollege: "IIT Bombay",
      studentMail: "johndoe@gmail.com",
      studentPhoneNumber: 9865321234,
      cardType: "student",
    },
    {
      studentImage: image,
      studentName: "Jane Doe",
      studentId: "124",
      studentCollege: "IIT Bombay",
      studentMail: "janedoe@gmail.com",
      studentPhoneNumber: 9865321235,
      cardType: "student",
    },
    {
      studentImage: image,
      studentName: "John Doe",
      studentId: "123",
      studentCollege: "IIT Bombay",
      studentMail: "johndoe@gmail.com",
      studentPhoneNumber: 9865321234,
      cardType: "student",
    },
  ],
  toggle: true,
  itemsPerPage: 11,
};

const profileCardData = {
  data: [
    {
      profileImage: image,
      title2: "Senior Software Engineer",
      title3: "San Francisco, USA",
      email: "johndoe@email.com",
      phone: "(555) 555-5555",
    },
  ],
  toggle: true,
  itemsPerPage: 11,
};

const skillCardData = {
  data: [
    {
      miniHeading: "SKILL4785",
      mainHeading: "Java",
      Count: 53,
      cardType: "Skill",
      handleClick: action("Card clicked!"),
      handleDeleteClick: action("Delete Icon Clicked!"),
    },
    {
      miniHeading: "SKILL4785",
      mainHeading: "Java",
      Count: 53,
      cardType: "Skill",
      handleClick: action("Card clicked!"),
      handleDeleteClick: action("Delete Icon Clicked!"),
    },
  ],
  toggle: true,
  itemsPerPage: 11,
};

const batchCardData = {
  data: [
    {
      miniHeading: "B301",
      mainHeading: "Batch 1",
      Count: 28,
      cardType: "Batch",
      handleClick: action("Card clicked!"),
    },
    {
      miniHeading: "B301",
      mainHeading: "Batch 1",
      Count: 28,
      cardType: "Batch",
      handleClick: action("Card clicked!"),
    },
  ],
  toggle: true,
  itemsPerPage: 11,
};

const skillsCardData = {
  data: [
    {
      title: "Java",
      subtitle: "Level 1",
      showCloseIcon: true,
      onClose: () => {
        console.log("Close button clicked");
      },
    },
  ],
  toggle: true,
  itemsPerPage: 11,
};

const testimonialCardData = {
  data: [
    {
      name: "John Doe",
      info: "Senior Software Engineer",
      place: "Sans-Francisco, USA",
      description:
        "As a marketing professional with no prior background in data science, this course provided me with a solid foundation to make a career transition. The hands-on projects and expert guidance from Dr. Rodriguez made complex concepts accessible. I now feel confident applying data science techniques to enhance my decision-making processes in marketing.",
      profilePicture: image,
    },
    {
      name: "John Doe",
      info: "Senior Software Engineer",
      place: "Sans-Francisco, USA",
      description:
        "As a marketing professional with no prior background in data science, this course provided me with a solid foundation to make a career transition. The hands-on projects and expert guidance from Dr. Rodriguez made complex concepts accessible. I now feel confident applying data science techniques to enhance my decision-making processes in marketing.",
      profilePicture: image,
    },
  ],
  toggle: true,
  itemsPerPage: 11,
};

const skillUserData = {
  data: [
    {
      miniHeading: "Student",
      mainHeading: "John Doe",
      skills: ["Java", "HTML"],
      handleClick: (e) => {
        console.log("clicked");
      },
      profilepic: image,
    },
    {
      miniHeading: "Student",
      mainHeading: "John Doe",
      skills: ["Java", "HTML"],
      handleClick: (e) => {
        console.log("clicked");
      },
      profilepic: image,
    },
    {
      miniHeading: "Student",
      mainHeading: "John Doe",
      skills: ["Java", "HTML"],
      handleClick: (e) => {
        console.log("clicked");
      },
      profilepic: image,
    },
    {
      miniHeading: "Student",
      mainHeading: "John Doe",
      skills: ["Java", "HTML"],
      handleClick: (e) => {
        console.log("clicked");
      },
      profilepic: image,
    },
    {
      miniHeading: "Student",
      mainHeading: "John Doe",
      skills: ["Java", "HTML"],
      handleClick: (e) => {
        console.log("clicked");
      },
      profilepic: image,
    },
    {
      miniHeading: "Student",
      mainHeading: "John Doe",
      skills: ["Java", "HTML"],
      handleClick: (e) => {
        console.log("clicked");
      },
      profilepic: image,
    },
    {
      miniHeading: "Student",
      mainHeading: "John Doe",
      skills: ["Java", "HTML"],
      handleClick: (e) => {
        console.log("clicked");
      },
      profilepic: image,
    },
    {
      miniHeading: "Student",
      mainHeading: "John Doe",
      skills: ["Java", "HTML"],
      handleClick: (e) => {
        console.log("clicked");
      },
      profilepic: image,
    },
    {
      miniHeading: "Student",
      mainHeading: "John Doe",
      skills: ["Java", "HTML"],
      handleClick: (e) => {
        console.log("clicked");
      },
      profilepic: image,
    },
    {
      miniHeading: "Student",
      mainHeading: "John Doe",
      skills: ["Java", "HTML"],
      handleClick: (e) => {
        console.log("clicked");
      },
      profilepic: image,
    },
    {
      miniHeading: "Student",
      mainHeading: "John Doe",
      skills: ["Java", "HTML"],
      handleClick: (e) => {
        console.log("clicked");
      },
      profilepic: image,
    },
    {
      miniHeading: "Student",
      mainHeading: "John Doe",
      skills: ["Java", "HTML"],
      handleClick: (e) => {
        console.log("clicked");
      },
      profilepic: image,
    },
    {
        miniHeading: "Student",
        mainHeading: "John Doe",
        skills: ["Java", "HTML"],
        handleClick: (e) => {
          console.log("clicked");
        },
        profilepic: image,
      },
      {
        miniHeading: "Student",
        mainHeading: "John Doe",
        skills: ["Java", "HTML"],
        handleClick: (e) => {
          console.log("clicked");
        },
        profilepic: image,
      },
      {
        miniHeading: "Student",
        mainHeading: "John Doe",
        skills: ["Java", "HTML"],
        handleClick: (e) => {
          console.log("clicked");
        },
        profilepic: image,
      },
      {
        miniHeading: "Student",
        mainHeading: "John Doe",
        skills: ["Java", "HTML"],
        handleClick: (e) => {
          console.log("clicked");
        },
        profilepic: image,
      },
      {
        miniHeading: "Student",
        mainHeading: "John Doe",
        skills: ["Java", "HTML"],
        handleClick: (e) => {
          console.log("clicked");
        },
        profilepic: image,
      },
      {
        miniHeading: "Student",
        mainHeading: "John Doe",
        skills: ["Java", "HTML"],
        handleClick: (e) => {
          console.log("clicked");
        },
        profilepic: image,
      },
      {
        miniHeading: "Student",
        mainHeading: "John Doe",
        skills: ["Java", "HTML"],
        handleClick: (e) => {
          console.log("clicked");
        },
        profilepic: image,
      },
      {
        miniHeading: "Student",
        mainHeading: "John Doe",
        skills: ["Java", "HTML"],
        handleClick: (e) => {
          console.log("clicked");
        },
        profilepic: image,
      },
      {
        miniHeading: "Student",
        mainHeading: "John Doe",
        skills: ["Java", "HTML"],
        handleClick: (e) => {
          console.log("clicked");
        },
        profilepic: image,
      },
      {
        miniHeading: "Student",
        mainHeading: "John Doe",
        skills: ["Java", "HTML"],
        handleClick: (e) => {
          console.log("clicked");
        },
        profilepic: image,
      },
      {
        miniHeading: "Student",
        mainHeading: "John Doe",
        skills: ["Java", "HTML"],
        handleClick: (e) => {
          console.log("clicked");
        },
        profilepic: image,
      },
      {
        miniHeading: "Student",
        mainHeading: "John Doe",
        skills: ["Java", "HTML"],
        handleClick: (e) => {
          console.log("clicked");
        },
        profilepic: image,
      },
  ],
  toggle: true,
  itemsPerPage: 11,
};

export const EventCardView = (args) => (
  <DataView CardComponent={EventCard} {...args} />
);
EventCardView.args = eventCardData;

export const PrimaryCardView = (args) => (
  <DataView CardComponent={PrimaryCard} {...args} />
);
PrimaryCardView.args = primaryCardData;

export const ProfileCardView = (args) => (
  <DataView CardComponent={ProfileCard} {...args} />
);
ProfileCardView.args = profileCardData;

export const SkillCardView = (args) => (
  <DataView CardComponent={SkillBatchCard} {...args} />
);
SkillCardView.args = skillCardData;

export const BatchCardView = (args) => (
  <DataView CardComponent={SkillBatchCard} {...args} />
);
BatchCardView.args = batchCardData;

export const SkillsCardView = (args) => (
  <DataView CardComponent={SkillCard} {...args} />
);
SkillsCardView.args = skillsCardData;

export const SkillUserView = (args) => (
  <DataView CardComponent={SkillUser} {...args} />
);
SkillUserView.args = skillUserData;

export const StudentCardView = (args) => (
  <DataView CardComponent={StudentCard} {...args} />
);
StudentCardView.args = studentCardData;

export const TestimonialCardView = (args) => (
  <DataView CardComponent={TestimonialCard} {...args} />
);
TestimonialCardView.args = testimonialCardData;
