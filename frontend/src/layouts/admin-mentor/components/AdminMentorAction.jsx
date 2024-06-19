import React, { useState } from "react";
import ActionComponent from "../../common/components/Action";
import AddUser from "../../common/components/AddUser";
import Modal from "../../common/components/Modal";
import AdminMentorActionData from "./MentorData";
import { addNewUser } from "../../../services/User";

const AdminMentorAction = ({
  onSubmit,
  onAddSuccess,
  fetchData,
  onSearchChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleFormSubmit = async (formData) => {
    try {
      const userData = {
        emailId: formData.emailId,
        firstName: formData.firstName,
        lastName: formData.lastName,
        collegeId: formData.collegeId || 1,
        roleId: formData.roleId || 2,
      };

      await addNewUser(userData);
      console.log("New user added successfully!");
      onAddSuccess();
      handleCloseModal();
    } catch (error) {
      console.error("Error adding new user:", error);
      // Add UI feedback or notification for the user
    }
  };

  return (
    <div>
      <ActionComponent
        {...AdminMentorActionData}
        buttonProps={{
          ...AdminMentorActionData.buttonProps,
          onClick: handleOpenModal,
        }}
        searchbarProps={fetchData}
        onSearchChange={onSearchChange}
      />
      <Modal isOpen={isOpen} widthVariant="medium" onClose={handleCloseModal}>
        <AddUser
          {...AdminMentorActionData.adduserprops}
          onSubmit={handleFormSubmit}
        />
      </Modal>
    </div>
  );
};

export default AdminMentorAction;
