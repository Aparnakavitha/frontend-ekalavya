import UserProfileInfo from "./UserProfileInfo";

export default {
  title: "Layouts/Common/Components/UserProfileInfo",
  component: UserProfileInfo,
};

const sample1 = {
  role: "student",
  name: "Emma Watson",
  studentId: "Software engineer",
  college: "Christ University",
  dob: "Jan 21 2001",
  email: "emmawatson@gmail.com",
  phone: "(+91) 8337254637",
  bio: "Experienced software engineer with a focus on backend development and a passion for mentoring aspiring developers.",
  hasDelete: false,
};

const sample2 = {
  role: "mentor",
  name: "Emma Watson",
  studentId: "Software engineer",
  college: "Christ University",
  dob: "Jan 21 2001",
  email: "emmawatson@gmail.com",
  phone: "(+91) 8337254637",
  bio: "Experienced software engineer with a focus on backend development and a passion for mentoring aspiring developers.",
  hasDelete: true,
};

export const UserProfileUserView = {
  args: {
    ...sample1,
  },
};

export const UserProfileAdminView = {
  args: {
    ...sample2,
  },
};
