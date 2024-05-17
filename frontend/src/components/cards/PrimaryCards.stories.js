import PrimaryCards from "./PrimaryCards";

export default {
  title: "PrimaryCards",
  component: PrimaryCards,
};

const courseelement = {
  miniHeading: "Capstone",
  mainHeading: "Health Management",
  startDate: "Jan 15, 2030  ",
  endDate: "Mar 15, 2030",
  Desicription:
    "Unlock the power of data with our comprehensive Introduction to Data ",
  //   isHover: false,
  cardType: "Course",
  handleClick: (e) => {
    console.log("clicked");
  },
};

export const CourseCard = {
  args: {
    ...courseelement,
  },
};
