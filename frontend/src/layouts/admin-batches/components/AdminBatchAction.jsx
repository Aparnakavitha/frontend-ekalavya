import React, { useState } from "react";
import ActionComponent from "../../common/components/Action";
import Modal from "../../common/components/Modal";
import AdminBatchActionData from "./BatchActionData";
import BatchOperations from "./BatchOperations";

const AdminBatchAction = ({ onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleFormSubmit = async (formData) => {
    try {
      await onSubmit(formData); // Pass formData to parent component onSubmit function
      setIsOpen(false); // Close modal on successful submission
    } catch (error) {
      console.error("Error submitting batch:", error);
      // Handle error if needed
    }
  };

  const actionData = {
    ...AdminBatchActionData,
    buttonProps: {
      ...AdminBatchActionData.buttonProps,
      onClick: handleOpenModal,
    },
  };

  return (
    <div>
      <ActionComponent {...actionData} />
      <Modal isOpen={isOpen} widthVariant="medium" onClose={handleCloseModal}>
        <BatchOperations
          mainHeading="Create New Batch"
          onSubmit={handleFormSubmit}
          />
      </Modal>
    </div>
  );
};

export default AdminBatchAction;
