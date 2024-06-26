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
  setMentorData,
  setCardAnimation,
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

      const response = await addNewUser(userData);
      const newMentor = response.responseData;
      console.log("New user added successfully!");

      newMentor.newEntry = true;
      setCardAnimation(true);
      setMentorData((prevMentorsData) => [newMentor, ...prevMentorsData]);
      // onAddSuccess();

      console.log("mentorr-----", response, "---------", newMentor);
      handleCloseModal();
    } catch (error) {
      console.error("Error adding new user:", error);
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
