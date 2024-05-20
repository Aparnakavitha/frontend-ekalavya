import React from "react";
import EventCard from "./EventCard";

export default {
  title: "components/cards/Event card",
  component: EventCard,
};

const sample ={
  main : "All hands meeting",
  sub : "http:// www.zoom.com",
  start : "10:30am",
  end : "11:30am",
  status : "due",
  mode : "dark",
  date : 17,
  onclick: (e)=>{console.log("Event card clicked!")}
}


export const EventCardDark = {
  args: {
    ...sample
  },
};
