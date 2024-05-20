import skillUser from "./SkillUser";

export default {
  title: "components/cards/SkillUser",
  component: skillUser,
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

export const SkillUser = {
  args: {
    ...skillcard,
  },
};
