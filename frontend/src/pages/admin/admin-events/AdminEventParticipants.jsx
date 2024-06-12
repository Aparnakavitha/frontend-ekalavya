import React from "react";
import EventParticipantsList from "../../../layouts/admin-event/components/EventParticipantsList";

const data = [
  ["STD001", "John Jacob", "john123@gmail.com"],
  ["STD002", "Emy Davis", "davis211@gmail.com"],
  ["STD003", "Emy John", "john123@gmail.com"],
  ["STD004", "Jacob Davis", "davis211@gmail.com"],
  ["STD005", "John", "john123@gmail.com"],
  ["STD006", "Davis", "davis211@gmail.com"],
];

const headings = ["StudentID", "StudentName", "Email ID"];

const pageNames = ["Home", "Exploring Future", "Participants"];

const handleNavButtonClick = (pageName) => {
  console.log(`Navigating to ${pageName}`);
};

const AdminEventParticipants = () => {
  return (
    <EventParticipantsList
      data={data}
      headings={headings}
      onClick={handleNavButtonClick}
      pageNames={pageNames}
    />
  );
};

export default AdminEventParticipants;
