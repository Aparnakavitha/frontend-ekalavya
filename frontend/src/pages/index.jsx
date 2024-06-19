import { React, useRef } from "react";
import Hero from "../layouts/home/components/Hero";
import { Header } from "../layouts/home";
import Button from "../components/buttons/PrimaryButton";
import edunexa from "../../src/assets/edunexa.png";
import Partners from "../layouts/home/components/Partners";
import image1 from "../../src/assets/udemy-.png";
import image2 from "../../src/assets/linkln.png";
import image3 from "../../src/assets/tarento.png";
import image4 from "../../src/assets/Stack-over-flow.png";
import image5 from "../../src/assets/coursera.png";
import Project from "../layouts/home/components/Projects";
import StarPerformer from "../layouts/home/components/StarPerformer";
import image from "../../src/assets/DP.png";
import Testimonials from "../layouts/home/components/Testimonials";
import Footer from "../layouts/common/components/Footer";

const Home = () => {
  const starPerformerRef = useRef(null);
  const testimonialsRef = useRef(null);

  const scrollToCenter = (ref) => {
    if (ref.current) {
      const element = ref.current;
      const elementTop =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offset =
        elementTop - window.innerHeight / 2 + element.clientHeight / 2;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  const HeroContent = {
    mainContent: ["DISCOVER", "CREATE ", "INSPIRE"],
    semiContent: "Where Learning Knows No Boundaries",
    buttonContent: "Explore",
    buttonVariant: "primary",
    buttonWidth: "full",
    onclick: (e) => {
      console.log("nfsjkd");
    },
    number: ["2000", "300", "500"],
    title: ["Enrollments", "Certifications", "Projects"],
    link: "/explore",
  };

  const sample = {
    content: "Login",
    variant: "primary",
    onClick: () => {
      console.log("Button clicked");
    },
    width: "full",
  };

  const header = {
    menuItems: [
      {
        name: "Leaderboard",
        onClick: () => console.log("Leaderboard clicked"),
        type: "aTag",
        atag: "https://www.google.com",
      },
      {
        name: "Track",
        onClick: () => console.log("Track clicked"),
        type: "link",
        atag: "https://www.tarento.com",
      },
      {
        name: "Top performers",
        onClick: () => {
          scrollToCenter(starPerformerRef);
        },
        type: "link",
        link: `https://www.google.com`,
      },
      {
        name: "Testimonials",
        onClick: () => {
          scrollToCenter(testimonialsRef);
        },
      },
    ],
    imageSrc: edunexa,
    button: <Button {...sample} />,
  };

  const partners = {
    title: "Academic Partners",
    Images: [image1, image2, image3, image4, image5],
  };

  const partners2 = {
    title: "Hiring Partners",
    Images: [image1, image2, image3, image4, image5],
  };

  const projects = [
    {
      miniHeading: "Mini Heading 1",
      mainHeading: "This is the main heading 1",
      startDate: "2023-05-01T14:00:00Z",
      endDate: "2023-05-01T16:00:00Z",
      Description: "This is a description for the primary card 1",
      handleClick: () => console.log("Student clicked"),
    },
    {
      miniHeading: "Mini Heading 2",
      mainHeading: "This is the main heading 2",
      startDate: "2023-06-01T14:00:00Z",
      endDate: "2023-06-01T16:00:00Z",
      Description: "This is a description for the primary card 2",
      handleClick: () => console.log("Student clicked"),
    },
    {
      miniHeading: "Mini Heading 3",
      mainHeading: "This is the main heading 3",
      startDate: "2023-07-01T14:00:00Z",
      endDate: "2023-07-01T16:00:00Z",
      Description: "This is a description for the primary card 3",
      handleClick: () => console.log("Student clicked"),
    },
    {
      miniHeading: "Mini Heading 4",
      mainHeading: "This is the main heading 4",
      startDate: "2023-08-01T14:00:00Z",
      endDate: "2023-08-01T16:00:00Z",
      Description: "This is a description for the primary card 4",
      handleClick: () => console.log("Student clicked"),
    },
    {
      miniHeading: "Mini Heading 5",
      mainHeading: "This is the main heading 5",
      startDate: "2023-09-01T14:00:00Z",
      endDate: "2023-09-01T16:00:00Z",
      Description: "This is a description for the primary card 5",
      handleClick: () => console.log("Student clicked"),
    },
    {
      miniHeading: "Mini Heading 3",
      mainHeading: "This is the main heading 3",
      startDate: "2023-07-01T14:00:00Z",
      endDate: "2023-07-01T16:00:00Z",
      Description: "This is a description for the primary card 3",
      handleClick: () => console.log("Student clicked"),
    },
    {
      miniHeading: "Mini Heading 4",
      mainHeading: "This is the main heading 4",
      startDate: "2023-08-01T14:00:00Z",
      endDate: "2023-08-01T16:00:00Z",
      Description: "This is a description for the primary card 4",
      handleClick: () => console.log("Student clicked"),
    },
    {
      miniHeading: "Mini Heading 5",
      mainHeading: "This is the main heading 5",
      startDate: "2023-09-01T14:00:00Z",
      endDate: "2023-09-01T16:00:00Z",
      Description: "This is a description for the primary card 5",
      handleClick: () => console.log("Student clicked"),
    },
  ];

  const projectcarousel = {
    projects,
    heading2: "Equipping Budding Professionals for the future ....",
    heading1: "See What you can learn with Us",
    carouselId: "carouselId1",
  };

  const projectcarousel2 = {
    projects,
    heading1: "Gain Hands on Experience with real world Projects ",
    carouselId: "carouselId2",
  };

  const studentProfiles = [
    {
      studentImage: image,
      studentName: "John Doe",
      studentId: "12345",
      studentCollege: "XYZ University",
      studentMail: "john.doe@example.com",
      studentPhoneNumber: "123-456-7890",
      handleClick: () => console.log("Student clicked"),
    },
    {
      studentImage: image,
      studentName: "Jane Doe",
      studentId: "54321",
      studentCollege: "ABC University",
      studentMail: "jane.doe@example.com",
      studentPhoneNumber: "987-654-3210",
      handleClick: () => console.log("Student clicked"),
    },
    {
      studentImage: image,
      studentName: "John Doe",
      studentId: "12345",
      studentCollege: "XYZ University",
      studentMail: "john.doe@example.com",
      studentPhoneNumber: "123-456-7890",
      handleClick: () => console.log("Student clicked"),
    },
    {
      studentImage: image,
      studentName: "Jane Doe",
      studentId: "54321",
      studentCollege: "ABC University",
      studentMail: "jane.doe@example.com",
      studentPhoneNumber: "987-654-3210",
      handleClick: () => console.log("Student clicked"),
    },
    {
      studentImage: image,
      studentName: "John Doe",
      studentId: "12345",
      studentCollege: "XYZ University",
      studentMail: "john.doe@example.com",
      studentPhoneNumber: "123-456-7890",
      handleClick: () => console.log("Student clicked"),
    },
    {
      studentImage: image,
      studentName: "Jane Doe",
      studentId: "54321",
      studentCollege: "ABC University",
      studentMail: "jane.doe@example.com",
      studentPhoneNumber: "987-654-3210",
      handleClick: () => console.log("Student clicked"),
    },
  ];

  const starperformer = { studentProfiles, heading: "Star Performers" };

  const testimonials = [
    {
      name: "Jane Smith",
      info: "Software Engineer",
      place: "ABC Corp",
      description:
        "As a marketing professional with no prior background in data science, this course provided me with a solid foundation to make a career transition. The hands-on projects and expert guidance from Dr. Rodriguez made complex concepts accessible. I now feel confident applying data science techniques to enhance my decision-making processes in marketing.",
      profilePicture: image,
    },
    {
      name: "John Appleseed",
      info: "Product Manager",
      place: "XYZ Inc.",
      description: "John is a great team player and a dedicated professional.",
      profilePicture: image,
    },
    {
      name: "Alice Johnson",
      info: "Designer",
      place: "Creative Studio",
      description:
        "Alice has an eye for detail and brings creativity to every project.",
      profilePicture: image,
    },
    {
      name: "John Appleseed",
      info: "Product Manager",
      place: "XYZ Inc.",
      description: "John is a great team player and a dedicated professional.",
      profilePicture: image,
    },
    {
      name: "John Appleseed",
      info: "Product Manager",
      place: "XYZ Inc.",
      description: "John is a great team player and a dedicated professional.",
      profilePicture: image,
    },
  ];

  const testimonialsdata = { testimonials, heading: "Testimonials" };

  const footerdata = {
    Logo: edunexa,
    quoteContent: "Embark on Your Learning Journey Today!",
    copyrightContent: "All rights reserved © 2024 Tarento Group.",
    copyrightContent2: " | Privacy Policy",
    isLeftALigned: false,
  };
  return (
    <div>
      <Header {...header} />
      <Hero {...HeroContent} />
      <Partners {...partners} />
      <Partners {...partners2} />
      <Project {...projectcarousel} />
      <Project {...projectcarousel2} />
      <div ref={starPerformerRef}>
        <StarPerformer {...starperformer} />
      </div>
      <div ref={testimonialsRef}>
        <Testimonials {...testimonialsdata} />
      </div>

      <Footer {...footerdata} />
    </div>
  );
};

export default Home;
