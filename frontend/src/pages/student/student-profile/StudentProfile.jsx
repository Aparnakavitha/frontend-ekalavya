import React, { useState, useEffect } from "react";
import AboutMe from "../../../layouts/common/components/AboutMe";
import Upcoming from "../../../layouts/student-profile/components/Upcoming";
import StudentProfileInfo from "../../../layouts/student-profile/components/StudentProfileInfo";
import EducationalQualification from "../../../layouts/common/components/EducationalQualification";
import { getUserDetails, updateUserDetails } from "../../../services/User";
import profilepic from "../../../assets/DP.png";

const StudentProfile = () => {
  const [studentData, setStudentData] = useState(null);

  const fetchData = async () => {
    try {
      const params = {
        userId: "02",
      };
      const data = await getUserDetails(params);
      setStudentData(data.responseData[0]);
      console.log("dsssss", data);
    } catch (error) {
      console.error("Error fetching mentor data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFormSubmit = async (formData) => {
    try {
      console.log("Form Submitted with data:", formData);
      const response = await updateUserDetails(formData);
      console.log("Update response:", response);
      fetchData();
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  if (!studentData) {
    return <div>Loading...</div>;
  }

  const about = {
    title: "About Me",
    description: studentData.aboutMe || "",
  };
  const homeAddress = studentData.addresses.find(
    (address) => address.addressType === "home"
  );

  const EditableData = {
    userId: studentData.userId,
    dob: studentData.dob,
    phoneNo: studentData.phoneNo,
    addresses: [
      {
        addressId: homeAddress ? homeAddress.addressId : "",
        houseName: homeAddress ? homeAddress.houseName : "",
        city: homeAddress ? homeAddress.city : "",
        pinCode: homeAddress ? homeAddress.pinCode : "",
        state: homeAddress ? homeAddress.state : "",
        country: homeAddress ? homeAddress.country : "",
      },
    ],
    aboutMe: studentData.aboutMe || "",
  };

  const profileData = {
    profilepic: profilepic,
    name: `${studentData.firstName} ${studentData.lastName}`,
    college: studentData.college.collegeName,
    email: studentData.emailId,
  };

  const Education = studentData.qualifications;

  return (
    <div>
      <StudentProfileInfo
        profileData={profileData}
        EditableData={EditableData}
        onFormSubmit={handleFormSubmit}
      />
      <EducationalQualification
        qualifications={Education}
        userId={studentData.userId}
        onFormSubmit={handleFormSubmit}
      />
      <AboutMe {...about} />
      <Upcoming />
    </div>
  );
};

export default StudentProfile;
