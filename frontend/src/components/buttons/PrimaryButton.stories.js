import React, { Component } from "react";
import PrimaryButton from "./PrimaryButton";

export default {
  title: "Button/PrimaryButton",
  component: PrimaryButton,
};

export const Primarybutton = {
  args: {
    content: "hello",
    variant: "secondary",
    onclick: (r) => {
      console.log("nidsm");
    },
    width: "full",
  },
};
