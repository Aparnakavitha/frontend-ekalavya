import skillBatchCard from "./SkillBatchCard";
import { action } from "@storybook/addon-actions";
export default {
  title: "components/cards/SkillBatchCard",
  component: skillBatchCard,
};

const courseelement = {
  miniHeading: "B301",
  mainHeading: "Batch 1",
  Count: 28,
  cardType: "Batch",
  handleClick: action("Card clicked!"),
  handleDeleteClick: action("Delete Icon Clicked!"),
};

export const SkillBatchCard = {
  args: {
    ...courseelement,
  },
};
