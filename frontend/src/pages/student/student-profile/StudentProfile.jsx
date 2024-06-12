import React from "react";
import AboutMe from "../../../layouts/common/components/AboutMe";
import Upcoming from "../../../layouts/student-profile/components/Upcoming";
import StudentProfileInfo from "../../../layouts/student-profile/components/StudentProfileInfo";
import EducationalQualification from "../../../layouts/common/components/EducationalQualification";

const StudentProfile = () => {
  return (
    <div>
      <StudentProfileInfo />
      <EducationalQualification />
      <AboutMe
        title="About me"
        description="blah blah blah I am a dedicated young professional blah blah, looking to learn and innovate blah blah."
      />
      <Upcoming />
    </div>
  );
};

export default StudentProfile;
