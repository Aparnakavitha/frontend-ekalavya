import React, { useState, useEffect } from "react";
import { Greeting } from "../../../layouts/common";
import MentorProfileInfo from "../../../layouts/mentor-profile/components/MentorProfileInfo";
import AboutMe from "../../../layouts/common/components/AboutMe";
import EducationalQualification from "../../../layouts/common/components/EducationalQualification";
import profilepic from "../../../assets/DP.png";
import { getMentorDetails } from "../../../../src/services/mentor/mentor";

const MentorProfile = () => {
  const [mentorData, setMentorData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = {
          userId: "02",
        };
        const data = await getMentorDetails(params);
        setMentorData(data.responseData[0]);
        console.log(mentorData);
      } catch (error) {
        console.error("Error fetching mentor data:", error);
      }
    };

    fetchData();
  }, []);

  if (!mentorData) {
    return <div>Loading...</div>;
  }

  const greet = {
    welcome: "Welcome Back",
    name: `${mentorData.firstName} ${mentorData.lastName}`,
    info: "Here is the information about",
    profile: "Students",
    showButtons: false,
  };

  const about = {
    title: "About Me",
    description: mentorData.aboutMe || "",
  };

  const homeAddress = mentorData.addresses.find(
    (address) => address.addressType === "home"
  );

  const profileData = {
    userId: mentorData.userId,
    profilepic: profilepic,
    name: greet.name,
    college: mentorData.college.collegeName,
    dob: mentorData.dob,
    email: mentorData.emailId,
    phoneNumber: mentorData.phoneNo,
    houseName: homeAddress ? homeAddress.houseName : "",
    city: homeAddress ? homeAddress.city : "",
    pinCode: homeAddress ? homeAddress.pinCode : "",
    state: homeAddress ? homeAddress.state : "",
    country: homeAddress ? homeAddress.country : "",
    aboutMe: mentorData.aboutMe || "",

  };

  const Education = mentorData.qualifications
  // [
  //   {
  //     name: "MBAzzzzzzzzzz finCRVGHBJNKMLance",
  //     university: "Christ University",
  //     cgpa: 7.2,
  //     start: "May 2022",
  //     end: "April 2024",
  //     Specialization: "Marketing",
  //   },
  //   {
  //     name: "B.Tech",
  //     university: "PES University",
  //     cgpa: 7.2,
  //     start: "May 2022",
  //     end: "April 2024",
  //     Specialization: "Marketing",
  //   },
  // ];

  return (
    <div>
      <Greeting {...greet} />
      <MentorProfileInfo {...profileData} />
      <AboutMe {...about} />
      <EducationalQualification qualifications = {Education}/>
    </div>
  );
};

export default MentorProfile;
