import React, { useState } from "react";
import UserProfileInfo from "../../common/components/UserProfileInfo";
import Modal from "../../common/components/Modal";
import BasicDetails from "../../common/components/BasicDetails";
import NavButton from "../../../components/buttons/NavButton";
import AboutMe from "../../common/components/AboutMe";
import profilepic from "../../../assets/DP.png";
import { updateUserDetails } from "../../../services/User";

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

  const handleFormSubmit = async (formData) => {
    try {
      await updateUserDetails({
        userId: mentorData.userId,
        ...formData,
      });
      console.log("User details updated successfully!");
      handleCloseEditBasicDetails();
    } catch (error) {
      console.error("Error updating user details:", error);
    }
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
      college: mentorData.college ? mentorData.college.collegeName : "",
      phoneNumber: mentorData.phoneNo,
      houseName: mentorData.addresses && mentorData.addresses.length > 0 ? mentorData.addresses[0].houseName : "",
      city: mentorData.addresses && mentorData.addresses.length > 0 ? mentorData.addresses[0].city : "",
      pinCode: mentorData.addresses && mentorData.addresses.length > 0 ? mentorData.addresses[0].pinCode : "",
      state: mentorData.addresses && mentorData.addresses.length > 0 ? mentorData.addresses[0].state : "",
      country: mentorData.addresses && mentorData.addresses.length > 0 ? mentorData.addresses[0].country : "",
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
        role={mentorData.role ? mentorData.role.roleName : ""}
        profilepic={mentorData.profilePicture || profilepic}
        name={`${mentorData.firstName} ${mentorData.lastName}`}
        college={mentorData.college ? mentorData.college.collegeName : ""}
        dob={mentorData.dob}
        email={mentorData.emailId}
        phoneNumber={mentorData.phoneNo}
        houseName={editBox.initialData.houseName}
        city={editBox.initialData.city}
        pinCode={editBox.initialData.pinCode}
        state={editBox.initialData.state}
        country={editBox.initialData.country}
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
