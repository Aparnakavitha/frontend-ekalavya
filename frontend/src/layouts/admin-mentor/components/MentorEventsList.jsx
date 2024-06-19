import React, { useState } from "react";
import ShowCards from "../../common/components/ShowCards";
import EventData from "./MentorEventData";
import Modal from "../../common/components/Modal";
import CardRow from "../../admin-student/components/Cardrow";
import Addevent from "../../admin-student/components/AddEvent";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { DeleteBox } from "../../common";
import styles from "../AdminMentor.module.css";
import { useNavigate } from "react-router-dom";

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
      handleDelete(); // Call the parent component's handleDelete function
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

  const heading = {
    ...EventData.heading,
    textbuttonprops: {
      ...EventData.heading.textbuttonprops,
      onClick: handleOpenModal,
    },
  };

  return (
    <div>
      <ShowCards {...heading} />
      <Modal isOpen={isOpen} widthVariant="medium" onClose={handleCloseModal}>
        <Addevent {...EventData.addevent} onSubmit={handleFormSubmit} />
      </Modal>
      <CardRow {...EventData.eventcards} handleClick={handleClick} />
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
