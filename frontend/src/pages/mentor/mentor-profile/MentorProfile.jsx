import React from "react";
import { Greeting } from "../../../layouts/common";
import MentorProfileInfo from "../../../layouts/mentor-profile/components/MentorProfileInfo";
import AboutMe from "../../../layouts/common/components/AboutMe";
import EducationalQualification from "../../../layouts/common/components/EducationalQualification";

const MentorProfile = () => {
  const greet = {
    welcome: "Welcome Back",
    name: "John",
    info: "Here is the information about",
    profile: "Students",
    showButtons: false,
  };

  const about = {
    title: "About Me",
    description:
      "Hey there! I'm Sam, a dedicated [Your Profession/Title] with [X] years of experience in [Your Industry/Field]. My journey in [Your Field] has been fueled by a profound interest in [What Motivates You], and a commitment to achieving [Your Goals/Objectives]. Hey there! I'm Sam, a dedicated [Your Profession/Title] with [X] years of experience in [Your Industry/Field]. My journey in [Your Field] has been fueled by a profound interest in [What Motivates You], and a commitment to achieving [Your Goals/Objectives]. Hey there! I'm Sam, a dedicated [Your Profession/Title] with [X] years of experience in [Your Industry/Field]. Hey there! I'm Sam, a dedicated [Your Profession/Title] with [X] years of experience in [Your Industry/Field]. Hey there! I'm Sam, a dedicated [Your Profession/Title] with [X] years of experience in [Your Industry/Field]. Hey there! I'm Sam, a dedicated [Your Profession/Title] with [X] years of experience in [Your Industry/Field]. Hey there! I'm Sam, a dedicated [Your Profession/Title] with [X] years of experience in [Your Industry/Field].",
  };
  return (
    <div>
      <Greeting {...greet} />
      <MentorProfileInfo />
      <AboutMe {...about} />
      <EducationalQualification />
    </div>
  );
};

export default MentorProfile;
