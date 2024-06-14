import React, { useState } from 'react';
import ActionComponent from '../../common/components/Action';
import AddUser from '../../common/components/AddUser';
import Modal from '../../common/components/Modal';
import AdminMentorActionData from './MentorData';
import { addNewUser } from '../../../services/User'; // Import addNewUser API

const AdminMentorAction = ({ onSubmit, onAddSuccess }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleFormSubmit = async (formData) => {
    try {
      // Provide default values for collegeId and roleId if not provided
      const userData = {
        emailId: formData.email,
        firstName: formData.firstName,
        lastName: formData.secondName,
        collegeId: formData.collegeId || 1,
        roleId: formData.roleId || 2,
      };

      await addNewUser(userData); // Use addNewUser API for submission
      console.log('New user added successfully!');
      onAddSuccess(); // Call onAddSuccess callback to refresh mentor data
      handleCloseModal(); // Close modal after form submission
    } catch (error) {
      console.error('Error adding new user:', error);
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
      />
      <Modal isOpen={isOpen} widthVariant="medium" onClose={handleCloseModal}>
        <AddUser
          {...AdminMentorActionData.adduserprops}
          onSubmit={handleFormSubmit} // Pass handleFormSubmit to AddUser
        />
      </Modal>
    </div>
  );
};

export default AdminMentorAction;
