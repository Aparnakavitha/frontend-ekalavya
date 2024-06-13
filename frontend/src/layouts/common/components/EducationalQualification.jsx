import React, { useState } from "react";
import Education from "./Education";
import Modal from "./Modal";
import QualificationForm from "./QualificationForm";
import DeleteBox from "./DeleteBox";

const EducationalQualification = ({qualifications}) => {
 

  const sample = {
    qualifications,
    onClickAdd: () => {
      handleOpenAddQualification();
    },
    onClickEdit: () => {
      handleOpenEditQualification();
    },
    onClickDelete: () => {
      handleOpenDeleteQualification();
    },
  };

  const [isAddQualificationOpen, setIsAddQualificationOpen] = useState(false);
  const [isEditQualificationOpen, setIsEditQualificationOpen] = useState(false);
  const [isDeleteQualificationOpen, setIsDeleteQualificationOpen] =
    useState(false);

  const handleOpenAddQualification = () => {
    setIsAddQualificationOpen(true);
  };
  const handleCloseAddQualification = () => {
    setIsAddQualificationOpen(false);
  };

  const handleOpenEditQualification = () => {
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
    onSubmit: handleCloseAddQualification,
  };

  const editsample = {
    degree: "High School",
    specialization: "Computer Science",
    university: "XYZ University",
    cgpa: "3.8",
    startDate: "2015-09-01",
    endDate: "2019-06-01",
  };

  const editQualProps = {
    heading: "Edit Education Qualification",
    options: options,
    initialValues: editsample,
    onSubmit: handleCloseEditQualification,
  };

  const deleteQualProps = {
    title: "Confirm deletion",
    message: "Remove this qualification?",
    buttonText: "Confirm",
    onConfirm: handleFormConfirm,
    onCancel: handleFormCancel,
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
