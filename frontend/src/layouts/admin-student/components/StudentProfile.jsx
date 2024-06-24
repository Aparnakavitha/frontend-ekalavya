import React, { useState } from "react";
import UserProfileInfo from "../../common/components/UserProfileInfo";
import Modal from "../../common/components/Modal";
import BasicDetails from "../../common/components/BasicDetails";
import profilepic from "../../../assets/DP.png";
import NavButton from "../../../components/buttons/NavButton";
import AboutMe from "../../common/components/AboutMe";
import EducationalQualification from "../../common/components/EducationalQualification";
import { addNewUser } from "../../../services/User";

const StudentProfileInfo = ({ studentsData, onSubmit, onformSubmit }) => {
  const navProps = {
    pageName: "Students List",
  };
  const [isEditDetailsOpen, setIsEditDetailsOpen] = useState(false);

  const handleOpenEditBasicDetails = () => {
    setIsEditDetailsOpen(true);
  };

  const handleCloseEditBasicDetails = () => {
    setIsEditDetailsOpen(false);
  };

  const handleFormSubmit = (formData) => {
    const { addresses, ...formDataWithoutAddresses } = formData;

    // Prepare addresses with addressId included
    const updatedAddresses = addresses.map((address) => ({
      ...address,
      addressId: address.addressId || "", // If addressId is not present, use empty string
    }));

    onSubmit({
      userId: studentsData.userId,
      ...formDataWithoutAddresses,
      addresses: updatedAddresses,
    });

    handleCloseEditBasicDetails();
  };

  const handleFormSubmit2 = async (formData) => {
    try {
      console.log("Form Sfgsdh", formData);
      const response = await addNewUser(formData);
      console.log("Update response:", response);
      handleCloseEditBasicDetails();
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  const homeAddress =
  studentsData.addresses &&
  studentsData.addresses.find((address) => address.addressType === "home");


  const editBox = {
    mainHeading: "Edit Basic Details",
    initialData: {
      dob:studentsData.dob,
      phoneNo: studentsData.phoneNo,
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
      aboutMe: studentsData.aboutMe ,
    },
    isEdit: true,
  };

  const aboutMeProps = {
    title: "About Me",
    description: studentsData.aboutMe ? studentsData.aboutMe: "No content available for this section.",
  };

  const Education = studentsData.qualifications;


  return (
    <div>
      <div className="padding">
        <NavButton {...navProps} />
      </div>
      <UserProfileInfo
        userId={studentsData.userId}
        role={studentsData.role ? studentsData.role.roleName : ""}
        profilepic={profilepic}
        name={`${studentsData.firstName || "N/A"} ${studentsData.lastName || "N/A"}`}
        college={studentsData.college ? studentsData.college.collegeName : ""}
        dob={studentsData.dob}
        email={studentsData.emailId}
        phoneNo={studentsData.phoneNo}
        addresses={studentsData.addresses}
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
        userId={studentsData.userId}
        onFormSubmit={handleFormSubmit2}
      />
    </div>
  );
};

export default StudentProfileInfo;
