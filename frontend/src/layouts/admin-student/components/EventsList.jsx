import React, { useState } from "react";
import ShowCards from "../../common/components/ShowCards";
import EventData from "./EventData";
import Modal from "../../common/components/Modal";
import CardRow from "./Cardrow";
import AddEvent from "./AddEvent";
import styles from "../AdminStudent.module.css";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { DeleteBox } from "../../common";
import { useNavigate } from "react-router-dom";

const EventList = () => {
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

  const props = {
    content: "Delete Student",
    variant: "tertiary",
    onClick: handleOpenDelete,
    width: "full",
  };

  const deleteprops = {
    title: "Confirmation Required",
    message: "Are you sure you want to delete this Student?",
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
        <AddEvent {...EventData.addevent} onSubmit={handleFormSubmit} />
      </Modal>
      <CardRow {...EventData.eventcards} handleClick={handleClick} />
      <div className="padding">
        <div className={`${styles["eventslist-container"]}`}>
          <div className={`${styles["eventslist-deletebutton"]}`}>
            <PrimaryButton {...props} />
          </div>
        </div>
      </div>
      <Modal
        isOpen={isDeleteOpen}
        widthVariant="small"
        onClose={handleCloseDelete}
      >
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
