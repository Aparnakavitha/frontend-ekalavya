import { React, useState } from "react";
import UserProfileInfo from "../../common/components/UserProfileInfo";
import Modal from "../../common/components/Modal";
import BasicDetails from "../../common/components/BasicDetails";
import profilepic from "../../../assets/DP.png";
import NavButton from "../../../components/buttons/NavButton";
import AboutMe from "../../common/components/AboutMe";

const MentorProfileInfo = (props) => {
  const navprops = {
    pageName: "Mentors List",
  };

  const sample = {
    role: "mentor",
    profilepic: profilepic,
    name: "Emma Watson",
    college: "Christ University",
    dob: "1990-01-01",
    email: "emmawatson@gmail.com",
    phoneNumber: 8755383632,
    houseName: "Sample House",
    city: "Sample City",
    pinCode: "123456",
    state: "Sample State",
    country: "Sample Country",
    hasDelete: false,
    onClickEdit: () => {
      handleOpenEditBasicDetails();
    },
  };

  const aboutme = {
    title: "About Me",
    description:
      "Hey there! I'm Sam, a dedicated [Your Profession/Title] with [X] years of experience in [Your Industry/Field]. My journey in [Your Field] has been fueled by a profound interest in [What Motivates You], and a commitment to achieving [Your Goals/Objectives]. Hey there! I'm Sam, a dedicated [Your Profession/Title] with [X] years of experience in [Your Industry/Field]. My journey in [Your Field] has been fueled by a profound interest in [What Motivates You], and a commitment to achieving [Your Goals/Objectives]. Hey there! I'm Sam, a dedicated [Your Profession/Title] with [X] years of experience in [Your Industry/Field]. Hey there! I'm Sam, a dedicated [Your Profession/Title] with [X] years of experience in [Your Industry/Field]. Hey there! I'm Sam, a dedicated [Your Profession/Title] with [X] years of experience in [Your Industry/Field]. Hey there! I'm Sam, a dedicated [Your Profession/Title] with [X] years of experience in [Your Industry/Field]. Hey there! I'm Sam, a dedicated [Your Profession/Title] with [X] years of experience in [Your Industry/Field].",
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
        <NavButton {...navprops} />
      </div>
      <UserProfileInfo {...sample} />
      <Modal
        isOpen={isEditDetailsOpen}
        widthVariant="medium"
        onClose={handleCloseEditBasicDetails}
      >
        <BasicDetails {...editBox} onSubmit={handleFormSubmit} />
      </Modal>
      <AboutMe {...aboutme}/>
    </div>
  );
};

export default MentorProfileInfo;
