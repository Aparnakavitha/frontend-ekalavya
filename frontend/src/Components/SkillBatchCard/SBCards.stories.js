import SBCards from "./SBCards";
import { action } from '@storybook/addon-actions';
export default {
  title: "Skill Batch Card",
  component: SBCards,
};

const courseelement = {
  miniHeading: "<cardId>",
  mainHeading: "<cardName>",
  Count:0,
  cardType: "Batch",
  handleClick: action("Card clicked!"),
  handleDeleteClick: action("Delete Icon Clicked!"),

};


export const SBCard = {
    args: {
        ...courseelement
    }
}

