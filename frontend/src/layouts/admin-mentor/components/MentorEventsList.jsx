import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import ShowCards from "../../common/components/ShowCards";
import Modal from "../../common/components/Modal";
import CardRow from "../../admin-student/components/Cardrow";
import Addevent from "../../admin-student/components/AddEvent";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { DeleteBox } from "../../common";
import styles from "../AdminMentor.module.css";
import { useNavigate } from "react-router-dom";

// EventData merged into the component
const MentorEventsList = ({ handleDelete }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenDelete = () => {
    setIsDeleteOpen(true);
  };

  const handleCloseDelete = () => {
    setIsDeleteOpen(false);
  };

  const handleFormSubmit = (formData) => {
    console.log("Form submitted with data:", formData);
    handleCloseModal();
    handleCloseDelete();
  };

  const handleDeleteCancel = () => {
    console.log("Delete canceled");
    handleCloseDelete();
  };

  const handleDeleteConfirm = () => {
    console.log("Delete confirmed");
    if (handleDelete) {
      handleDelete();
    }
    handleCloseDelete();
  };

  const handleClick = () => {
    navigate(`/admin/events/event-details`);
  };

  const props = {
    content: "Delete Mentor",
    variant: "tertiary",
    onClick: handleOpenDelete,
    width: "full",
  };

  const deleteprops = {
    title: "Confirmation Required",
    message: "Are you sure you want to delete this Mentor?",
    buttonText: "Confirm",
  };

  // EventData
  const heading = {
    heading: "Events Handled",
    textbuttonprops: {
      icon: <AiOutlinePlus />,
      text: "Add Events",
      onClick: handleOpenModal,
    },
  };

  const addevent = {
    mainHeading: "Add Event",
    options: [
      { value: "abc", label: "ABC" },
      { value: "xyz", label: "XYZ" },
      { value: "pqr", label: "PQR" },
    ],
  };

  const eventcards = {
    card: "event",
    cardData: [
      {
        miniHeading: "Capstone 1",
        mainHeading: "Health Management",
        startDate: "Jan 15, 2030",
        endDate: "Mar 15, 2030",
        Description:
          "Unlock the power of data with our comprehensive Introduction to Data",
        cardType: "Course",
      },
      {
        miniHeading: "Capstone 2",
        mainHeading: "Business Management",
        startDate: "Feb 20, 2030",
        endDate: "Apr 20, 2030",
        Description: "A comprehensive course on business management strategies",
        cardType: "Course",
      },
    ],
  };

  return (
    <div>
      <ShowCards {...heading} />
      <Modal isOpen={isOpen} widthVariant="medium" onClose={handleCloseModal}>
        <Addevent {...addevent} onSubmit={handleFormSubmit} />
      </Modal>
      <CardRow {...eventcards} handleClick={handleClick} />
      <div className="padding">
        <div className={`${styles["mentoreventslist-container"]}`}>
          <div className={`${styles["mentoreventslist-deletebutton"]}`}>
            <PrimaryButton {...props} />
          </div>
        </div>
      </div>
      <Modal isOpen={isDeleteOpen} widthVariant="small" onClose={handleCloseDelete}>
        <DeleteBox {...deleteprops} onCancel={handleDeleteCancel} onConfirm={handleDeleteConfirm} />
      </Modal>
    </div>
  );
};

export default MentorEventsList;
