import StudentCard from "./StudentCard";

export default {
  title: "Cards/Student Cards",
  component: StudentCard,
};

const studentobject = {
  studentImage: "./image.jpeg",
  studentName: "John Doe",
  studentId: "123",
  studentCollege: "sfddas",
  studentMail: "sddec",
  studentPhoneNumber: 1234,
  cardType: "student",
  handleClick: (e) => {
    console.log("clicked");
  },
};

export const Studentcards = {
  args: {
    ...studentobject,
  },
};
