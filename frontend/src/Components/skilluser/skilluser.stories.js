import React from "react";
import Card from "./skilluser";

export default {
  title: "Skill User Card",
  component: Card,
};

const skillcard = {
  miniHeading: "Student",
  mainHeading: "John Doe",
  skills: ["Java", "HTML"],
  handleClick: (e) => {
    console.log("clicked");
  },
};

export const SkillsCard = {
  args: {
    ...skillcard,
  },
};
