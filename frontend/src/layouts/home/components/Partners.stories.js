import React from "react";
import Partners from "./Partners";
import image1 from "../../../assets/udemy-.png";
import image2 from "../../../assets/linkln.png";
import image3 from "../../../assets/tarenton_-removebg-preview.png";
import image4 from "../../../assets/Stack-over-flow-dark-mode-by-night-eye-1200x480__1_-removebg-preview.png";
import image5 from "../../../assets/coursera__1_-removebg-preview.png";

export default {
  title: "layouts/home/Home",
  component: Partners,
};

export const HomeIcons = (args) => <Partners {...args} />;

HomeIcons.args = {
  title: "Academic Partners",
  Images: [image1, image2, image3, image4, image5],
};
