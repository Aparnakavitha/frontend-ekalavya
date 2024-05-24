import React from "react";
import Addevent from "./addEvent";

export default {
  title: "Layouts/Add Event ",
  component: Addevent,
};

const Template = (args) => <Addevent {...args} />;

export const AddEvent = Template.bind({});
AddEvent.args = {};
