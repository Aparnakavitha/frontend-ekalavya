import skillBatchCard from "./SkillBatchCard";
import { action } from "@storybook/addon-actions";
export default {
  title: "components/cards/SkillBatchCard",
  component: skillBatchCard,
};

const batch = {
  miniHeading: "B301",
  mainHeading: "Batch 1",
  Count: 28,
  cardType: "Batch",
  handleClick: action("Card clicked!"),
};
const skill = {
  miniHeading: "SKILL4785",
  mainHeading: "Java",
  Count: 53,
  cardType: "Skill",
  handleClick: action("Card clicked!"),
  handleDeleteClick: action("Delete Icon Clicked!"),
};

export const BatchCard = {
  args: {
    ...batch,
  },
};
export const skillCard = {
  args: {
    ...skill,
  },
};