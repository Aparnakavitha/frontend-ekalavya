import React, { useState } from "react";
import Education from "./Education";
import Modal from "./Modal";
import QualificationForm from "./QualificationForm";
import DeleteBox from "./DeleteBox";

const EducationalQualification = ({
  qualifications = [],
  onFormSubmit,
  userId,
}) => {
  const [isAddQualificationOpen, setIsAddQualificationOpen] = useState(false);
  const [isEditQualificationOpen, setIsEditQualificationOpen] = useState(false);
  const [isDeleteQualificationOpen, setIsDeleteQualificationOpen] =
    useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleOpenAddQualification = () => {
    setIsAddQualificationOpen(true);
  };

  const handleCloseAddQualification = () => {
    setIsAddQualificationOpen(false);
  };

  const handleOpenEditQualification = (index) => {
    setEditIndex(index);
    setIsEditQualificationOpen(true);
  };

  const handleCloseEditQualification = () => {
    setIsEditQualificationOpen(false);
  };

  const handleOpenDeleteQualification = (index) => {
    setEditIndex(index); // Set the index of the item to delete
    setIsDeleteQualificationOpen(true);
  };

  const handleCloseDeleteQualification = () => {
    setIsDeleteQualificationOpen(false);
  };

  const handleFormConfirm = (formData) => {
    console.log(formData, "Action Confirmed");
    handleCloseDeleteQualification();
  };

  const handleFormCancel = (formData) => {
    console.log(formData, "Action Cancelled");
    handleCloseDeleteQualification();
  };

  const handleFormSubmit = async (formData) => {
    try {
      const formDataToSend = {
        userId: userId,
        qualifications: [formData],
      };
      await onFormSubmit(formDataToSend);
      handleCloseEditQualification();
      handleCloseDeleteQualification();
      handleCloseAddQualification();
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  const handleRemove = async () => {
    try {
      const qualification = qualifications[editIndex];

      const formData = {
        userId: userId,
        qualifications: [
          {
            qualificationId: qualification?.qualificationId,
          },
        ],
      };

      console.log("Form Data:", formData);
      console.log("Start Date:", formData.startDate);
      console.log("End Date:", formData.endDate);
      await onFormSubmit(formData);
      
      // After successful deletion, update state to reflect the change
      const updatedQualifications = [...qualifications];
      updatedQualifications.splice(editIndex, 1);
      // Assuming onFormSubmit updates state or backend correctly
      // You may need to update qualifications state in your context
      // or redux store depending on your state management system
      // For simplicity, assuming the deletion happens correctly
      
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  const options = [
    { value: "High School", label: "High School" },
    { value: "Bachelor's Degree", label: "Bachelor's Degree" },
    { value: "Master's Degree", label: "Master's Degree" },
    { value: "Ph.D.", label: "Ph.D." },
  ];

  const addQualProps = {
    heading: "Add New Education Qualification",
    options: options,
    initialValues: {},
    onSubmit: handleFormSubmit,
  };

  const editQualProps = {
    heading: "Edit Education Qualification",
    options: options,
    initialValues: qualifications[editIndex] || {},
    onSubmit: handleFormSubmit,
  };

  const deleteQualProps = {
    title: "Confirm deletion",
    message: "Remove this qualification?",
    buttonText: "Confirm",
    onConfirm: handleRemove,
    onCancel: handleFormCancel,
  };

  const educationProps = {
    qualifications,
    onClickAdd: handleOpenAddQualification,
    onClickEdit: handleOpenEditQualification,
    onClickDelete: handleOpenDeleteQualification,
  };

  return (
    <div>
      <Education {...educationProps} />
      <Modal
        isOpen={isAddQualificationOpen}
        widthVariant="medium"
        onClose={handleCloseAddQualification}
      >
        <QualificationForm {...addQualProps} />
      </Modal>

      <Modal
        isOpen={isEditQualificationOpen}
        widthVariant="medium"
        onClose={handleCloseEditQualification}
      >
        <QualificationForm {...editQualProps} />
      </Modal>

      <Modal
        isOpen={isDeleteQualificationOpen}
        widthVariant="small"
        onClose={handleCloseDeleteQualification}
      >
        <DeleteBox {...deleteQualProps} />
      </Modal>
    </div>
  );
};

export default EducationalQualification;
