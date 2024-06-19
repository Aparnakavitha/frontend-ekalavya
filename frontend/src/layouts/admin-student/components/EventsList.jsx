import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import ShowCards from "../../common/components/ShowCards";
import Modal from "../../common/components/Modal";
import CardRow from "./Cardrow";
import AddEvent from "./AddEvent";
import styles from "../AdminStudent.module.css";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { DeleteBox } from "../../common";

// EventData merged into the component
const EventList = ({ handleDelete }) => {
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

  const handleFormSubmit = (formData) => {
    console.log("Form submitted with data:", formData);
    handleCloseModal();
    handleCloseDelete();
  };

  const handleClick = () => {
    navigate(`/admin/events/event-details`);
  };

  const heading = {
    heading: "Events Attended",
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

  const deleteprops = {
    title: "Confirmation Required",
    message: "Are you sure you want to delete this Student?",
    buttonText: "Confirm",
  };

  const props = {
    content: "Delete Student",
    variant: "tertiary",
    onClick: handleOpenDelete,
    width: "full",
  };

  return (
    <div>
      <ShowCards {...heading} />
      <Modal isOpen={isOpen} widthVariant="medium" onClose={handleCloseModal}>
        <AddEvent {...addevent} onSubmit={handleFormSubmit} />
      </Modal>
      <CardRow {...eventcards} handleClick={handleClick} />
      <div className="padding">
        <div className={`${styles["eventslist-container"]}`}>
          <div className={`${styles["eventslist-deletebutton"]}`}>
            <PrimaryButton {...props} />
          </div>
        </div>
      </div>
      <Modal isOpen={isDeleteOpen} widthVariant="small" onClose={handleCloseDelete}>
        <DeleteBox
          {...deleteprops}
          onCancel={handleDeleteCancel}
          onConfirm={handleDeleteConfirm}
        />
      </Modal>
    </div>
  );
};

export default EventList;
