import React, { useState } from "react";
import UserProfileInfo from "../../common/components/UserProfileInfo";
import Modal from "../../common/components/Modal";
import BasicDetails from "../../common/components/BasicDetails";
import DeleteBox from "../../common/components/DeleteBox";
import image from "../../../assets/pic.png";

const StudentProfileInfo = ({ profileData, EditableData, onFormSubmit }) => { // <-- Corrected here
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
    console.log(formData, "Form submitted successfully");
    await onFormSubmit(formData);
    handleCloseEditBasicDetails();
  };

  const sample = {
    role: "student",
    profilepic: image,
    ...profileData,
    ...EditableData,
    hasDelete: false,
    onClickEdit: handleOpenEditBasicDetails,
    onClickDelete: handleOpenDeleteBasicDetails,
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
    onCancel: () => {
      console.log("Action cancelled");
      handleCloseDeleteBasicDetails();
    },
    onConfirm: () => {
      console.log("Action confirmed");
      handleCloseDeleteBasicDetails();
    },
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

export default StudentProfileInfo;
