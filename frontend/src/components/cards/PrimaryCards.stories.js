import PrimaryCards from "./PrimaryCards";

export default {
  title: "Cards/PrimaryCards",
  component: PrimaryCards,
};

const courseelement = {
  miniHeading: "Capstone",
  mainHeading: "Health Management",
  startDate: "Jan 15, 2030  ",
  endDate: "Mar 15, 2030",
  Desicription:
    "Unlock the power of data with our comprehensive Introduction to Data ",
  cardType: "Course",
  handleClick: (e) => {
    console.log("clicked");
  },
};

export const Primarycards = {
  args: {
    ...courseelement,
  },
};
