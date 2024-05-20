import Footer from "./Footer";
import image from "./../../assets/Logo/Logo.png";

export default {
  title: "Footer/Footer",
  component: Footer,
};

export const FootersCentreAligned = {
  args: {
    Logo: image,
    quoteContent: "Embark on Your Learning Journey Today!",
    copyrightContent: "All rights reserved © 2024 Tarento Group.",
    copyrightContent2: " | Privacy Policy",
    isLeftALigned: false,
  },
};

export const FootersLeftAligned = {
  args: {
    Logo: image,
    quoteContent: "Embark on Your Learning Journey Today!",
    copyrightContent: "All rights reserved © 2024 Tarento Group.",
    copyrightContent2: " | Privacy Policy",
    isLeftALigned: true,
  },
};

