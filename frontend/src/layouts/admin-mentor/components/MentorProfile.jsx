import React, { useState } from "react";
import UserProfileInfo from "../../common/components/UserProfileInfo";
import Modal from "../../common/components/Modal";
import BasicDetails from "../../common/components/BasicDetails";
import NavButton from "../../../components/buttons/NavButton";
import AboutMe from "../../common/components/AboutMe";
import profilepic from "../../../assets/DP.png";

const MentorProfileInfo = ({ mentorData }) => {
  const [isEditDetailsOpen, setIsEditDetailsOpen] = useState(false);

  const navProps = {
    pageName: "Mentors List",
  };

  const handleOpenEditBasicDetails = () => {
    setIsEditDetailsOpen(true);
  };

  const handleCloseEditBasicDetails = () => {
    setIsEditDetailsOpen(false);
  };

  const handleFormSubmit = (formData) => {
    console.log("Form Submitted with data:", formData);
    // Perform API call to update details if needed
    handleCloseEditBasicDetails();
  };

  if (!mentorData) {
    return <div>No data found for mentor.</div>;
  }

  const editBox = {
    mainHeading: "Edit Basic Details",
    initialData: {
      profilepic: mentorData.profilePicture || profilepic,
      name: `${mentorData.firstName} ${mentorData.lastName}`,
      dob: mentorData.dob,
      college: mentorData.college ? mentorData.college.collegeName : "N/A",
      phoneNumber: mentorData.phoneNo,
      houseName: mentorData.addresses.length > 0 ? mentorData.addresses[0].houseName : "N/A",
      city: mentorData.addresses.length > 0 ? mentorData.addresses[0].city : "N/A",
      pinCode: mentorData.addresses.length > 0 ? mentorData.addresses[0].pinCode : "N/A",
      state: mentorData.addresses.length > 0 ? mentorData.addresses[0].state : "N/A",
      country: mentorData.addresses.length > 0 ? mentorData.addresses[0].country : "N/A",
      aboutMe: mentorData.aboutMe,
    },
    isEdit: true,
  };

  const aboutMeProps = {
    title: "About Me",
    description: mentorData.aboutMe,
  };

  return (
    <div>
      <div className="padding">
        <NavButton {...navProps} />
      </div>
      <UserProfileInfo
        role={mentorData.role ? mentorData.role.roleName : "N/A"}
        profilepic={mentorData.profilePicture || profilepic}
        name={`${mentorData.firstName} ${mentorData.lastName}`}
        college={mentorData.college ? mentorData.college.collegeName : "N/A"}
        dob={mentorData.dob}
        email={mentorData.emailId}
        phoneNumber={mentorData.phoneNo}
        houseName={mentorData.addresses.length > 0 ? mentorData.addresses[0].houseName : "N/A"}
        city={mentorData.addresses.length > 0 ? mentorData.addresses[0].city : "N/A"}
        pinCode={mentorData.addresses.length > 0 ? mentorData.addresses[0].pinCode : "N/A"}
        state={mentorData.addresses.length > 0 ? mentorData.addresses[0].state : "N/A"}
        country={mentorData.addresses.length > 0 ? mentorData.addresses[0].country : "N/A"}
        hasDelete={false}
        onClickEdit={handleOpenEditBasicDetails}
      />
      <Modal
        isOpen={isEditDetailsOpen}
        widthVariant="medium"
        onClose={handleCloseEditBasicDetails}
      >
        <BasicDetails {...editBox} onSubmit={handleFormSubmit} />
      </Modal>
      <AboutMe {...aboutMeProps} />
    </div>
  );
};

export default MentorProfileInfo;
