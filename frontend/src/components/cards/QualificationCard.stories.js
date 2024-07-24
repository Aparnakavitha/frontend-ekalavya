import QualificationCard from "./QualificationCard";
import { action } from "@storybook/addon-actions";

export default {
  title: "components/cards/Qualification Card",
  component: QualificationCard,
};

const qualification = {
  degree: "Master's Degree ",
  institution: "Rajive Gandhi Institute of Technology",
  percentage: 28,
  startDate: "24-09-2023",
  endDate: "24-09-2023",
  specialization: "CSE",
  handleClick: action("Card clicked!"),
  handleEditClick: action("Edit button clicked!"),
  handleDeleteClick: action("Delete Icon Clicked!"),
  showCount: true,
  viewAnimation: false,
};

export const QualificationCardStory = {
  args: {
    ...qualification,
    startDate: 1719858600000,
    endDate: 1721586600000,
    showCount: false
  },
};
