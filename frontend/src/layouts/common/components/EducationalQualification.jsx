import React, { useState } from "react";
import Education from "./Education";
import Modal from "./Modal";
import QualificationForm from "./QualificationForm";
import DeleteBox from "./DeleteBox";

const EducationalQualification = ({ qualifications, onFormSubmit, userId }) => {
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

  const handleOpenDeleteQualification = () => {
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

  const handleRemove = async (index) => {
    try {
      const qualification = qualifications[index];

      const formData = {
        userId: userId,
        qualifications: [
          {
            qualificationId: qualification.qualificationId,
          },
        ],
      };

      console.log("Form Data:", formData);
      console.log("Start Date:", formData.startDate);
      console.log("End Date:", formData.endDate);
      await onFormSubmit(formData);
      handleCloseEditQualification();
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
    initialValues: qualifications[editIndex],
    onSubmit: handleFormSubmit,
  };

  const deleteQualProps = {
    title: "Confirm deletion",
    message: "Remove this qualification?",
    buttonText: "Confirm",
    onConfirm: () => {
      handleFormSubmit();
      handleRemove(editIndex);
    },
    onCancel: handleFormCancel,
  };

  const sample = {
    qualifications,
    onClickAdd: handleOpenAddQualification,
    onClickEdit: handleOpenEditQualification,
    onClickDelete: handleOpenDeleteQualification,
  };

  return (
    <div>
      <Education {...sample} />
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
