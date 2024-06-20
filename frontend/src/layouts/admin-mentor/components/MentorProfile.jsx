import React, { useState } from "react";
import UserProfileInfo from "../../common/components/UserProfileInfo";
import Modal from "../../common/components/Modal";
import BasicDetails from "../../common/components/BasicDetails";
import NavButton from "../../../components/buttons/NavButton";
import AboutMe from "../../common/components/AboutMe";
import profilepic from "../../../assets/DP.png";
import EducationalQualification from "../../common/components/EducationalQualification";
import { updateUserDetails } from "../../../services/User";

const MentorProfileInfo = ({ mentorData, onSubmit,onformSubmit }) => {
  const [isEditDetailsOpen, setIsEditDetailsOpen] = useState(false);

  const navProps = { pageName: "Mentors List" };

  const handleOpenEditBasicDetails = () => setIsEditDetailsOpen(true);
  const handleCloseEditBasicDetails = () => setIsEditDetailsOpen(false);

  const handleFormSubmit = (formData) => {
    const { addresses, ...formDataWithoutAddresses } = formData;

    // Prepare addresses with addressId included
    const updatedAddresses = addresses.map((address) => ({
      ...address,
      addressId: address.addressId || "", // If addressId is not present, use empty string
    }));

    onSubmit({
      userId: mentorData.userId,
      ...formDataWithoutAddresses,
      addresses: updatedAddresses,
    });

    handleCloseEditBasicDetails();
  };
  
  const handleFormSubmit2 = async (formData) => {
    try {
      console.log("Form Sfgsdh", formData);
      const response = await updateUserDetails(formData);
      console.log("Update response:", response);
      handleCloseEditBasicDetails();
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  if (!mentorData) {
    return <div>No data found for mentor.</div>;
  }

  const homeAddress =
    mentorData.addresses &&
    mentorData.addresses.find((address) => address.addressType === "home");

  const editBox = {
    mainHeading: "Edit Basic Details",
    initialData: {
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
      aboutMe: mentorData.aboutMe,
    },
    isEdit: true,
  };

  const aboutMeProps = {
    title: "About Me",
    description: mentorData.aboutMe ? mentorData.aboutMe : "No content available for this section.",
  };

  const Education = mentorData.qualifications;

  return (
    <div>
      <div className="padding">
        <NavButton {...navProps} />
      </div>
      <UserProfileInfo
        userId={mentorData.userId}
        role={mentorData.role ? mentorData.role.roleName : ""}
        profilepic={profilepic}
        name={`${mentorData.firstName || "N/A"} ${mentorData.lastName || "N/A"}`}
        college={mentorData.college ? mentorData.college.collegeName : ""}
        dob={mentorData.dob}
        email={mentorData.emailId}
        phoneNo={mentorData.phoneNo}
        addresses={mentorData.addresses}
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
      <EducationalQualification
        qualifications={Education}
        userId={mentorData.userId}
        onFormSubmit={handleFormSubmit2}
      />
    </div>
  );
};

export default MentorProfileInfo;
