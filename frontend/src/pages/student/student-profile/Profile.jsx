import React from "react";
import AboutMe from "../../../layouts/common/components/AboutMe";
import Upcoming from "../../../layouts/student-profile/components/Upcoming";
import StudentProfileInfo from "../../../layouts/student-profile/components/StudentProfileInfo";
import EducationalQualification from "../../../layouts/common/components/EducationalQualification";

const Profile = () => {
  // const profile_props = {
  //   name: "Emma Watson",
  //   studentId: "STD1537",
  //   college: "Christ University",
  //   dob: "Jan 21 2001",
  //   email: "emmawatson@gmail.com",
  //   phone: "(+91) 8337254637",
  //   linkedin: "linkedin/emmawatson",
  //   github: "github.com/emmawatson153",
  //   address: "Bengaluru, 685789, Karnataka, India",
  //   qualifications: [
  //     {
  //       name: "Master of Business Administration (MBA)",
  //       university: "Christ University",
  //       cgpa: 7.2,
  //       start: "May 2022",
  //       end: "April 2024",
  //       specialization: "Marketing",
  //     },

  //     {
  //       name: "Bachelor of Technology (B.Tech)",
  //       university: "Christ University",
  //       cgpa: 7.2,
  //       start: "May 2022",
  //       end: "April 2024",
  //       specialization: "Marketing",
  //     },
  //   ],
  // };

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

export default Profile;
