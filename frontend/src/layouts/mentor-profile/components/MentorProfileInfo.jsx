import { React, useState } from "react";
import UserProfileInfo from "../../common/components/UserProfileInfo";
import Modal from "../../common/components/Modal";
import BasicDetails from "../../common/components/BasicDetails";
import DeleteBox from "../../common/components/DeleteBox";
import profilepic from "../../../assets/DP.png";
import { updateUserDetails } from "../../../services/User";

const MentorProfileInfo = ({ profileData, EditableData }) => {
  const sample = {
    role: "mentor",
    ...profileData,
    ...EditableData,
    hasDelete: false,
    onClickEdit: () => {
      handleOpenEditBasicDetails();
      console.log(profileData);
    },
    onClickDelete: () => {
      handleOpenDeleteBasicDetails();
    },
  };

  const [isEditDetailsOpen, setIsEditDetailsOpen] = useState(false);
  const [isDeleteDetailsIsOpen, setIsDeleteDetailsIsOpen] = useState(false);

  const handleOpenEditBasicDetails = () => {
    setIsEditDetailsOpen(true);
  };

  const handleCloseEditBasicDetails = () => {
    setIsEditDetailsOpen(false);
  };

  const handleOpenDeleteBasicDetails = () => {
    setIsDeleteDetailsIsOpen(true);
  };

  const handleCloseDeleteBasicDetails = () => {
    setIsDeleteDetailsIsOpen(false);
  };

  const handleFormSubmit = async (formData) => {
    try {
      console.log("Form Submitted with data:", formData);
      handleCloseEditBasicDetails();
      // Call the updateUserDetails API here
      const response = await updateUserDetails(formData);
      console.log("Update response:", response);
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };
  

  const editBox = {
    mainHeading: "Edit Basic Details",
    initialData: { ...EditableData },
    isEdit: true,
    onSubmit: handleFormSubmit,
  };

  const deleteBox = {
    title: "Confirm deletion",
    message: "This action will delete the user. Are you sure?",
    buttonText: "Confirm",
  };

  return (
    <div>
      <UserProfileInfo {...sample} />
      <Modal
        isOpen={isEditDetailsOpen}
        widthVariant="medium"
        onClose={handleCloseEditBasicDetails}
      >
        <BasicDetails {...editBox} />
      </Modal>

      <Modal
        isOpen={isDeleteDetailsIsOpen}
        widthVariant="medium"
        onClose={handleCloseDeleteBasicDetails}
      >
        <DeleteBox {...deleteBox} />
      </Modal>
    </div>
  );
};

export default MentorProfileInfo;
