import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EventsDescription from "../../common/components/EventsDescription";
import Modal from "../../common/components/Modal";
import DeleteBox from "../../common/components/DeleteBox";
import AddEvent from "../../admin-event/components/AddEvent";
import EventsDescriptionData from "./EventDescriptionData";

const AdminEventDescription = ({formSubmit, fetchedFormData ,onDelete, enrollData,eventId}) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const handleClick = () => {
    navigate(`/admin/events/event-details/event-participants/${eventId}`);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenDeleteModal = () => {
    setIsDeleteOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteOpen(false);
  };

  const handleFormSubmit = (formData) => {
    console.log(formData);
    handleCloseModal();
    formSubmit(formData);
  };

  const handleDeleteCancel = () => {
    console.log("Delete canceled");
    handleCloseDeleteModal();
  };

  const handleDeleteConfirm = () => {
    console.log("Delete confirmed");
    handleCloseDeleteModal();
    onDelete();
    navigate(`/admin/events`);
  };

  const actionData = {
    ...fetchedFormData,
    ...EventsDescriptionData.buttonProps,
    onclick3: handleOpenModal,
    onclick2: handleOpenDeleteModal,
    onclick1: handleClick
  };
  
  const organizeroptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
  ];

  const isOrganizer = false;

  return (
    <div>
      <EventsDescription {...actionData} />
      <Modal isOpen={isOpen} widthVariant="large" onClose={handleCloseModal}>
        <AddEvent defaultValues={EventsDescriptionData.defaultValues}
          organizeroptions={organizeroptions}
          isOrganizer={true}
          onSubmit={handleFormSubmit} 
          fetchedFormData={fetchedFormData}/>
      </Modal>
      <Modal
        isOpen={isDeleteOpen}
        widthVariant="small"
        onClose={handleCloseDeleteModal}
      >
        <DeleteBox
          {...EventsDescriptionData.deleteeventprops}
          onCancel={handleDeleteCancel}
          onConfirm={handleDeleteConfirm}
        />
      </Modal>
    </div>
  );
};

export default AdminEventDescription;
