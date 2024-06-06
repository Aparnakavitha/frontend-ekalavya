import React from "react";
import styles from "../StudentProfile.module.css";
import EventCard from "../../../components/cards/EventCard";

const Upcoming = (props) => {
  const { mode = "dark" } = props;

  const handleClick=()=>{alert("View all events")}

  const events = [
    {
      main: "All hands meeting",
      sub: "http://www.zoom.com",
      start: "10am",
      end: "11am",
      status: "upcoming",
      date: 31,
    },
    {
      main: "Team brainstorming session",
      sub: "http://www.zoom.com",
      start: "2pm",
      end: "3pm",
      status: "due",
      date: 16,
    },
    {
      main: "Ted Talk: Microservices Architecture",
      sub: "http://www.zoom.com",
      start: "10:30am",
      end: "12:30pm",
      status: "happening",
      date: 21,
    },
    {
      main: "UI Design Workshop",
      sub: "https://www.google.com",
      start: "4pm",
      end: "6pm",
      status: "tba",
      date: 7,
    },
  ];

  return (
    <div className={`${styles["upcoming-outer"]} ${styles[mode]}`}>
      <div className={`${styles["upcoming-head-container"]}`}>
        <h1 className={`${styles["upcoming-head"]}`}>Upcoming events</h1>
        <h1 className={`${styles["upcoming-link"]}`}>
          <a onClick={handleClick}>See all</a>
        </h1>
      </div>
      <div className={`${styles["upcoming-event-cards-container"]}`}>
        {events.map((event, index) => (
          <EventCard key={index} {...event} mode={mode} />
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
