import React, { useState } from "react";
import UserProfileInfo from "../../common/components/UserProfileInfo";
import Modal from "../../common/components/Modal";
import BasicDetails from "../../common/components/BasicDetails";
import profilepic from "../../../assets/DP.png";
import NavButton from "../../../components/buttons/NavButton";
import AboutMe from "../../common/components/AboutMe";

const StudentProfileInfo = () => {
  const navProps = {
    pageName: "Students List",
  };

  const sample = {
    role: "student",
    profilepic: profilepic,
    name: "Emma Watson",
    college: "Christ University",
    dob: "1990-01-01",
    email: "emmawatson@gmail.com",
    phoneNumber: "8755383632",
    houseName: "Sample House",
    city: "Sample City",
    pinCode: "123456",
    state: "Sample State",
    country: "Sample Country",
    hasDelete: false,
  };

  const aboutMeData = {
    title: "About Me",
    description:
      "Hey there! I'm Emma Watson, a dedicated student with a passion for learning and growing. My journey in education has been fueled by a profound interest in literature and arts, and a commitment to achieving excellence in academics. I believe in the power of education to transform lives and create positive change in the world.",
  };

  const [isEditDetailsOpen, setIsEditDetailsOpen] = useState(false);

  const handleOpenEditBasicDetails = () => {
    setIsEditDetailsOpen(true);
  };

  const handleCloseEditBasicDetails = () => {
    setIsEditDetailsOpen(false);
  };

  const handleFormSubmit = (formData) => {
    console.log("Form Submitted with data:", formData);
    handleCloseEditBasicDetails();
  };

  const editBox = {
    mainHeading: "Edit Basic Details",
    initialData: {
      profilepic: sample.profilepic,
      name: sample.name,
      dob: sample.dob,
      college: sample.college,
      phoneNumber: sample.phoneNumber,
      houseName: "Skyline villa",
      city: "Bengaluru",
      pinCode: "795432",
      state: "Karnataka",
      country: "India",
      aboutMe: "Mumble mumble mumble",
    },
    isEdit: true,
  };

  return (
    <div>
      <div className="padding">
        <NavButton {...navProps} />
      </div>
      <UserProfileInfo
        {...sample}
        onClickEdit={handleOpenEditBasicDetails}
        aboutMe={aboutMeData}
      />
      <Modal
        isOpen={isEditDetailsOpen}
        widthVariant="medium"
        onClose={handleCloseEditBasicDetails}
      >
        <BasicDetails {...editBox} onSubmit={handleFormSubmit} />
      </Modal>
      <AboutMe {...aboutMeData} />
    </div>
  );
};

export default StudentProfileInfo;
