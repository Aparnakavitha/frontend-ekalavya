import React from "react";
import EventData from "./EventData";
import { Greeting, DataView } from "../../../layouts/common";
import AdminEventAction from "../../../layouts/admin-event/components/AdminEventAction";
import PrimaryCard from "../../../components/cards/PrimaryCard";

const Event = () => {
  return (
    <div>
      <Greeting {...EventData.greeting} />
      <AdminEventAction />
      <DataView CardComponent={PrimaryCard} {...EventData.Dataview} />
    </div>
  );
};

export default Event;
