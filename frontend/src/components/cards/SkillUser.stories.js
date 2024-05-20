import Card from "./SkillUser";

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
  profilepic: "image",
};

export const SkillsCard = {
  args: {
    ...skillcard,
  },
};
