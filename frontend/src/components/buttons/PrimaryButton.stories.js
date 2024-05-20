import React, { Component } from "react";
import PrimaryButton from "./PrimaryButton";

export default {
  title: "Components/Button/PrimaryButton",
  component: PrimaryButton,
};

export const PrimarybuttonFull = {
  args: {
    content: "Submit",
    variant: "primary",
    onclick: (r) => {
      console.log("clicked");
    },
    width: "full",
  },
};

export const SecondarybuttonHalf = {
  args: {
    content: "Submit",
    variant: "secondary",
    onclick: (r) => {
      console.log("clicked");
    },
    width: "half",
  },
};
