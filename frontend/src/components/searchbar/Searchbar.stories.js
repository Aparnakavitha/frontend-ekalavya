import React from "react";
import { action } from "@storybook/addon-actions";
import SearchBar from "./Searchbar";

export default {
  title: "SearchBar",
  component: SearchBar,
};

export const sample = {
  args: {
    variant: "large",
    placeholder: "Search...",
    onSearch: action("searched"),
  },
};
