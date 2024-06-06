import React, { useState } from "react";
import DataView from "../../common/components/DataView";
import DeleteBox from "../../common/components/DeleteBox";
import ProfileCard from "../../../components/cards/ProfileCard";
import Modal from "../../common/components/Modal";
import batchParticipantsData from "./AdminBatchParticipantsData";

const AdminBatchParticipants = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState(batchParticipantsData.data);

  const handleOpenModal = (user) => {
    setSelectedUser(user);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedUser(null);
  };

  const handleFormSubmit = () => {
    if (selectedUser) {
      const updatedUsers = users.filter(
        (user) => user.studentId !== selectedUser.studentId
      );
      setUsers(updatedUsers);
      console.log("Deleted batch ID:", selectedUser.studentId);
    }
    handleCloseModal();
  };

  const usersData = {
    ...batchParticipantsData,
    data: users.map((user) => ({
      ...user,
      handleDelete: () => handleOpenModal(user),
    })),
  };

  return (
    <div>
      <DataView CardComponent={ProfileCard} {...usersData} />
      <Modal isOpen={isOpen} widthVariant="small" onClose={handleCloseModal}>
        <DeleteBox
          {...batchParticipantsData.deleteProps}
          onCancel={handleCloseModal}
          onConfirm={handleFormSubmit}
        />
      </Modal>
    </div>
  );
};

export default AdminBatchParticipants;
