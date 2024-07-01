import React, { useState } from "react";
import ActionComponent from "../../common/components/Action";
import Modal from "../../common/components/Modal";
import AdminBatchActionData from "./BatchActionData";
import BatchOperations from "./BatchOperations";
import { createBatch } from "../../../services/Batch";
import { toast } from "react-toastify";

const AdminBatchAction = ({
  onSearchChange,
  batchData,
  setBatchData,
  setChanged,
  count,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleOpenModal = () => {
    setSubmitError("");
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setSubmitError("");
    setIsOpen(false);
  };

  const handleFormSubmit = async (formData) => {
    try {
      const { batchName } = formData;
      const response = await createBatch({ batchName: batchName });
      setBatchData([...(batchData || []), response[0]]);
      setChanged((prev) => !prev);
      setIsOpen(false);
      setSubmitError("");
      toast.success("Batch created successfully!");
    } catch (error) {
      toast.error("Error adding batch!");
      console.error("Error adding batch:", error);
      setSubmitError("Batch name already exists");
    }
  };

  const actionData = {
    ...AdminBatchActionData,
    count,
    buttonProps: {
      ...AdminBatchActionData.buttonProps,
      onClick: handleOpenModal,
    },
  };

  return (
    <div>
      <ActionComponent {...actionData} onSearchChange={onSearchChange} />
      <Modal isOpen={isOpen} widthVariant="medium" onClose={handleCloseModal}>
        <BatchOperations
          mainHeading="Create New Batch"
          onSubmit={handleFormSubmit}
          submitError={submitError}
        />
      </Modal>
    </div>
  );
};

export default AdminBatchAction;
