import React, { Component } from "react";
import PrimaryButton from "./PrimaryButton";

export default {
  title: "PrimaryButton",
  component: PrimaryButton,
};

export const sample = {
  args: {
    content: "hello",
    variant: "secondary",
    onclick: (r) => {
      console.log("nidsm");
    },
    width: "full",
  },
};
