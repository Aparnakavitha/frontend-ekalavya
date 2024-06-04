import React, { useState } from "react";
import ActionComponent from "../../common/components/Action";
import Modal from "../../common/components/Modal";
import AdminBatchActionData from "./BatchActionData";
import Batchoperations from "./BatchOperations";

const AdminBatchAction = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleFormSubmit = (formData) => {
    console.log("Form submitted with data:", formData);
    handleCloseModal();
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
        <Batchoperations
          {...AdminBatchActionData.batchprops}
          onSubmit={handleFormSubmit}
        />
      </Modal>
    </div>
  );
};

export default AdminBatchAction;
