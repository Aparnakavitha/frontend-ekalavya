import React from "react";
import UserProfileInfo from "../../../layouts/common/components/UserProfileInfo";
import Education from "../../../layouts/common/components/Education";
import AboutMe from "../../../layouts/common/components/AboutMe";
import Upcoming from "../../../layouts/student-profile/components/Upcoming";
import styles from "../Student.module.css";
import profilepic from "../../../assets/profilepic.jpg"

const Profile = () => {
  const profile_props = {
    profilepicture:{profilepic},
    name: "Emma Watson",
    studentId: "STD1537",
    college: "Christ University",
    dob: "Jan 21 2001",
    email: "emmawatson@gmail.com",
    phone: "(+91) 8337254637",
    linkedin: "linkedin/emmawatson",
    github: "github.com/emmawatson153",
    address: "Bengaluru, 685789, Karnataka, India",
    qualifications: [
      {
        name: "Master of Business Administration (MBA)",
        university: "Christ University",
        cgpa: 7.2,
        start: "May 2022",
        end: "April 2024",
        specialization: "Marketing",
      },

      {
        name: "Bachelor of Technology (B.Tech)",
        university: "Christ University",
        cgpa: 7.2,
        start: "May 2022",
        end: "April 2024",
        specialization: "Marketing",
      },
    ],
  };

  return (
    <div className={`${styles["studentprofile-main"]}`}>
      <div className={`${styles["studentprofile-topdeck"]}`}>
        <div className={`${styles["studentprofile-studentinfo"]}`}>
          <UserProfileInfo />
          <Education />
        </div>
        <div className={`${styles["studentprofile-topnotification"]}`}>
         <Upcoming />
        </div>
      </div>

      <AboutMe
        title="About me"
        description="blah blah blah I am a dedicated young professional blah blah, looking to learn and innovate blah blah."
      />
    </div>
  );
};

export default Profile;
