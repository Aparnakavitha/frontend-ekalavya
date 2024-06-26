import React, { useState, useEffect } from "react";
import { Greeting } from "../../../layouts/common";
import MentorProfileInfo from "../../../layouts/mentor-profile/components/MentorProfileInfo";
import AboutMe from "../../../layouts/common/components/AboutMe";
import EducationalQualification from "../../../layouts/common/components/EducationalQualification";
import profilepic from "../../../assets/DP.png";
import LoadingSpinner from "../../../components/loadingspinner/LoadingSpinner";
import { getUserDetails, updateUserDetails } from "../../../services/User";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; 

const MentorProfile = () => {
  const [mentorData, setMentorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const userId = sessionStorage.getItem("user_id");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const params = { userId };
      const data = await getUserDetails(params);
      if (data.responseData.length === 0) {
        navigate('/notFound'); // Navigate to NotFound page if mentor data is not found
        return;
      }
      setMentorData(data.responseData[0]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching mentor data:", error);
      setLoading(false);
      if (error.response && error.response.status === 404) {
        navigate('/notFound'); // Navigate to NotFound page on 404 error
      }
    }
  };

  const handleFormSubmit = async (formData) => {
    try {
      console.log("Form Submitted with data:", formData);
      const response = await updateUserDetails(formData);
      console.log("Update response:", response);
      fetchData();
      toast.success("Details updated successfully!");
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };
  
  if (loading) {
    return <LoadingSpinner />;
  }

  if (!mentorData) {
    return <div>Error fetching mentor data. Please try again later.</div>;
  }

  const greet = {
    welcome: "Welcome Back",
    name: `${mentorData.firstName}`,
    showButtons: false,
  };

  const about = {
    title: "About Me",
    description: mentorData.aboutMe || "",
  };

  const homeAddress = mentorData.addresses.find(
    (address) => address.addressType === "home"
  );

  const EditableData = {
    userId: mentorData.userId,
    dob: mentorData.dob,
    phoneNo: mentorData.phoneNo,
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
    aboutMe: mentorData.aboutMe || "",
  };

  const profileData = {
    profilepic: profilepic,
    name: `${mentorData.firstName} ${mentorData.lastName}`,
    college: mentorData.college?.collegeName || "",
    email: mentorData.emailId,
  };

  const Education = mentorData.qualifications || "";

  return (
    <div>
      <Greeting {...greet} />
      <MentorProfileInfo
        profileData={profileData}
        EditableData={EditableData}
        onFormSubmit={handleFormSubmit}
      />
      <AboutMe {...about} />
      <EducationalQualification
        qualifications={Education}
        userId={mentorData.userId}
        onFormSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default MentorProfile;
