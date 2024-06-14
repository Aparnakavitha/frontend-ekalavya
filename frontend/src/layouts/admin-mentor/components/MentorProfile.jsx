import React, { useState } from "react";
import UserProfileInfo from "../../common/components/UserProfileInfo";
import Modal from "../../common/components/Modal";
import BasicDetails from "../../common/components/BasicDetails";
import NavButton from "../../../components/buttons/NavButton";
import AboutMe from "../../common/components/AboutMe";
import profilepic from "../../../assets/DP.png";
import EducationalQualification from "../../common/components/EducationalQualification";

const MentorProfileInfo = ({ mentorData, onSubmit }) => {
  const [isEditDetailsOpen, setIsEditDetailsOpen] = useState(false);

  const navProps = { pageName: "Mentors List" };

  const handleOpenEditBasicDetails = () => setIsEditDetailsOpen(true);
  const handleCloseEditBasicDetails = () => setIsEditDetailsOpen(false);

  const handleFormSubmit = (formData) => {
    const { addresses, ...formDataWithoutAddresses } = formData; // Destructure addresses from formData
    const { houseName, city, pinCode, state, country } = addresses[0]; // Destructure address details
    onSubmit({
      userId: mentorData.userId,
      ...formDataWithoutAddresses,
      addresses: [{ houseName, city, pinCode, state, country }], // Nest address details inside addresses array
    });
    handleCloseEditBasicDetails();
  };

  if (!mentorData) {
    return <div>No data found for mentor.</div>;
  }

  const homeAddress = mentorData.addresses.find(
    (address) => address.addressType === "home"
  );

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
    description: mentorData.aboutMe,
  };

  const Education = mentorData.qualifications;

  return (
    <div>
      <div className="padding">
        <NavButton {...navProps} />
      </div>
      <UserProfileInfo
        role={mentorData.role ? mentorData.role.roleName : ""}
        profilepic={profilepic}
        name={`${mentorData.firstName} ${mentorData.lastName}`}
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
        onFormSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default MentorProfileInfo;
