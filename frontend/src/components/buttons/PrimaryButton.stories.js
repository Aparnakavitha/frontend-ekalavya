import React, { Component } from "react";
import PrimaryButton from "./PrimaryButton";

export default {
  title: "Button/PrimaryButton",
  component: PrimaryButton,
};

export const PrimarybuttonFull = {
  args: {
    content: "hello",
    variant: "primary",
    onclick: (r) => {
      console.log("nidsm");
    },
    width: "full",
  },
};

export const SecondarybuttonHalf = {
  args: {
    content: "hello",
    variant: "secondary",
    onclick: (r) => {
      console.log("nidsm");
    },
    width: "half",
  },
};
