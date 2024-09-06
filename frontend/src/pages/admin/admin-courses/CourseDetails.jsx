import React from "react";
import { AdminCourseDetails } from "../../../layouts/admin-courses";
import image from "../../../assets/DP.png";

const CourseDetails = () => {
  const json = {
    heading: "Advanced JavaScript Course",
    objective:
      "Enhance your JavaScript skills to build complex and scalable web applications Enhance your JavaScript skills to build complex and scalable web applicationsEnhance your JavaScript skills to build complex and scalable web applicationsEnhance your JavaScript skills to build complex and scalable web applicationsEnhance your JavaScript skills to build complex and scalable web applications.",
    buttonContent: "Start Learning",
    skills: [
      "JavaScript",
      "ES6+",
      "Asynchronous Programming",
      "Web APIs",
      "Frontend Development",
    ],
    description:
      "This course covers advanced JavaScript concepts, including ES6+, asynchronous programming, and working with modern web APIs. It is designed for developers who want to deepen their understanding of JavaScript and apply these skills to create efficient and scalable applications.This course covers advanced JavaScript concepts, including ES6+, asynchronous programming, and working with modern web APIs. It is designed for developers who want to deepen their understanding of JavaScript and apply these skills to create efficient and scalable applications.This course covers advanced JavaScript concepts, including ES6+, asynchronous programming, and working with modern web APIs. It is designed for developers who want to deepen their understanding of JavaScript and apply these skills to create efficient and scalable applications.This course covers advanced JavaScript concepts, including ES6+, asynchronous programming, and working with modern web APIs. It is designed for developers who want to deepen their understanding of JavaScript and apply these skills to create efficient and scalable applications.This course covers advanced JavaScript concepts, including ES6+, asynchronous programming, and working with modern web APIs. It is designed for developers who want to deepen their understanding of JavaScript and apply these skills to create efficient and scalable applications.This course covers advanced JavaScript concepts, including ES6+, asynchronous programming, and working with modern web APIs. It is designed for developers who want to deepen their understanding of JavaScript and apply these skills to create efficient and scalable applications.This course covers advanced JavaScript concepts, including ES6+, asynchronous programming, and working with modern web APIs. It is designed for developers who want to deepen their understanding of JavaScript and apply these skills to create efficient and scalable applications.This course covers advanced JavaScript concepts, including ES6+, asynchronous programming, and working with modern web APIs. It is designed for developers who want to deepen their understanding of JavaScript and apply these skills to create efficient and scalable applications.This course covers advanced JavaScript concepts, including ES6+, asynchronous programming, and working with modern web APIs. It is designed for developers who want to deepen their understanding of JavaScript and apply these skills to create efficient and scalable applications.This course covers advanced JavaScript concepts, including ES6+, asynchronous programming, and working with modern web APIs. It is designed for developers who want to deepen their understanding of JavaScript and apply these skills to create efficient and scalable applications.This course covers advanced JavaScript concepts, including ES6+, asynchronous programming, and working with modern web APIs. It is designed for developers who want to deepen their understanding of JavaScript and apply these skills to create efficient and scalable applications.This course covers advanced JavaScript concepts, including ES6+, asynchronous programming, and working with modern web APIs. It is designed for developers who want to deepen their understanding of JavaScript and apply these skills to create efficient and scalable applications.This course covers advanced JavaScript concepts, including ES6+, asynchronous programming, and working with modern web APIs. I",
    level: "Beginner",
    lessons: 20,
    enrollment: 300,
    rate: 5,
    modules: [
      {
        module: "JavaScript Fundamentals",
        submodules: [
          "Variables and Data Types",
          "Functions and Scope",
          "Control Flow",
        ],
      },
      {
        module: "Advanced Concepts",
        submodules: [
          "Closures and Scope",
          "Promises and Async/Await",
          "Modules and Tooling",
        ],
      },
      {
        module: "Frontend Integration",
        submodules: [
          "DOM Manipulation",
          "Event Handling",
          "Web APIs Integration",
        ],
      },
      {
        module: "Testing and Debugging",
        submodules: ["Unit Testing", "Debugging Techniques", "Error Handling"],
      },
    ],
    mentorData: [
      {
        id: 1,
        name: "John Doe",
        title: "Software Engineer",
        imageUrl: image,
        studentId: "STDID3456",
        studentCollege: "St Christ College",
        studentMail: "johndoe@email.com",
        studentPhoneNumber: "(555) 555-5555",
      },
      {
        id: 2,
        name: "Jane Smith",
        title: "Data Scientist",
        imageUrl:image,
        studentId: "STDID5678",
        studentCollege: "Northwest University",
        studentMail: "janesmith@email.com",
        studentPhoneNumber: "(555) 123-4567",
      },
    ],
  };
  return (
    <div>
      <AdminCourseDetails {...json} />
    </div>
  );
};

export default CourseDetails;
