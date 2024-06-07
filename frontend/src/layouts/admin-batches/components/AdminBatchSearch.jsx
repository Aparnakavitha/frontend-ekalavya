import React, { useState } from "react";
import BatchSearch from "../../common/components/BatchSearch";
import Modal from "../../common/components/Modal";
import AdminBatchSearchData from "./BatchSearchData";
import UpdateSingleField from "../../common/components/UpdateSingleField";
import DeleteBox from "../../common/components/DeleteBox";

const AdminBatchSearch = () => {
  const [isBatchOperationsOpen, setIsBatchOperationsOpen] = useState(false);
  const [isUpdateSingleFieldOpen, setIsUpdateSingleFieldOpen] = useState(false);
  const [isDeleteBoxOpen, setIsDeleteBoxOpen] = useState(false);

  const handleOpenBatchOperations = () => {
    setIsBatchOperationsOpen(true);
  };

  const handleCloseBatchOperations = () => {
    setIsBatchOperationsOpen(false);
  };

  const handleOpenUpdateSingleField = () => {
    setIsUpdateSingleFieldOpen(true);
  };

  const handleCloseUpdateSingleField = () => {
    setIsUpdateSingleFieldOpen(false);
  };

  const handleOpenDeleteBox = () => {
    setIsDeleteBoxOpen(true);
  };

  const handleCloseDeleteBox = () => {
    setIsDeleteBoxOpen(false);
  };

  const handleFormSubmit = (formData) => {
    console.log("Form submitted with data:", formData);
    handleCloseBatchOperations();
    handleCloseUpdateSingleField();
    handleCloseDeleteBox();
  };

  const handleDeleteCancel = () => {
    console.log("Delete canceled");
    handleCloseDeleteBox();
  };

  const handleDeleteConfirm = () => {
    console.log("Delete confirmed");
    handleCloseDeleteBox();
  };

  const actionData = {
    ...AdminBatchSearchData,
    addbuttonProps: {
      ...AdminBatchSearchData.addbuttonProps,
      onClick: handleOpenBatchOperations,
    },
    textbuttonProps: {
      ...AdminBatchSearchData.textbuttonProps,
      onClick: handleOpenUpdateSingleField,
    },
    textbuttonProps2: {
      ...AdminBatchSearchData.textbuttonProps2,
      onClick: handleOpenDeleteBox,
    },
  };

  return (
    <div>
      <BatchSearch {...actionData} />
      <Modal
        isOpen={isBatchOperationsOpen}
        widthVariant="medium"
        onClose={handleCloseBatchOperations}
      >
        <UpdateSingleField
          {...AdminBatchSearchData.newprops}
          onSubmit={handleFormSubmit}
        />
      </Modal>
      <Modal
        isOpen={isUpdateSingleFieldOpen}
        widthVariant="medium"
        onClose={handleCloseUpdateSingleField}
      >
        <UpdateSingleField
          {...AdminBatchSearchData.editprops}
          onSubmit={handleFormSubmit}
        />
      </Modal>
      <Modal
        isOpen={isDeleteBoxOpen}
        widthVariant="small"
        onClose={handleCloseDeleteBox}
      >
        <DeleteBox
          {...AdminBatchSearchData.deleteprops}
          onCancel={handleDeleteCancel}
          onConfirm={handleDeleteConfirm}
        />
      </Modal>
    </div>
  );
};

export default AdminBatchSearch;
