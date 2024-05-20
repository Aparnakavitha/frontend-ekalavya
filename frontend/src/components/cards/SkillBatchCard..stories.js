import skillBatchCard from "./SkillBatchCard";
import { action } from "@storybook/addon-actions";
export default {
  title: "components/cards/SkillBatchCard",
  component: skillBatchCard,
};

const courseelement = {
  miniHeading: "<cardId>",
  mainHeading: "<cardName>",
  Count: 0,
  cardType: "Batch",
  handleClick: action("Card clicked!"),
  handleDeleteClick: action("Delete Icon Clicked!"),
};

export const SkillBatchCard = {
  args: {
    ...courseelement,
  },
};
