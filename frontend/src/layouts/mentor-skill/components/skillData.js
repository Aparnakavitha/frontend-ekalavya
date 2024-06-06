import profilePic from "../../../assets/SkillUser.png";

export const skillcard = [
  {
    miniHeading: "Student",
    mainHeading: "John Doe",
    skills: ["Java", "HTML"],
    handleClick: (e) => {
      console.log("clicked");
    },
    profilepic: profilePic,
  },
];

export const options = [
  { value: "abc", label: "ABC" },
  { value: "xyz", label: "XYZ" },
  { value: "pqr", label: "PQR" },
];
