import React, { useState } from "react";
import BatchSearch from "../../common/components/BatchSearch";
import Modal from "../../common/components/Modal";
// import AdminBatchSearchData from "./BatchSearchData";
import UpdateSingleField from "../../common/components/UpdateSingleField";
import DeleteBox from "../../common/components/DeleteBox";
import { GoTrash } from "react-icons/go";
import { MdEdit } from "react-icons/md";

const AdminBatchSearch = ({batchDelete, addParticipant, changeBatchName, batchName}) => {
  const [isBatchOperationsOpen, setIsBatchOperationsOpen] = useState(false);
  const [isUpdateSingleFieldOpen, setIsUpdateSingleFieldOpen] = useState(false);
  const [isDeleteBoxOpen, setIsDeleteBoxOpen] = useState(false);


  const AdminBatchSearchData = {
    navbuttonProps: {
      pageName: batchName,
    },
    showTextButton: true,
    showAdd: true,
    showReset: false,
    textbuttonProps: {
      icon: <MdEdit />,
      text: "Edit Batch Name",
      onClick: (e) => {
        console.log("Edit clicked");
      },
    },
    textbuttonProps2: {
      icon: <GoTrash />,
      text: "Delete",
      onClick: (e) => {
        console.log("Delete clicked");
      },
    },
    searchbarProps: {
      variant: "custom",
      placeholder: "Student Name",
    },
    showFiltersAndReset: false,
    addbuttonProps: {
      variant: "tertiary",
      content: "+ Add new Student",
      width: "full",
    },
    newprops: {
      mainHeading: "Add Student",
      labelTitle: "Add student ID",
      placeHolder: "Student ID",
      buttonTitle: "Add",
    },
    editprops: {
      mainHeading: "Edit Batch Name",
      labelTitle: "Batch Name",
      placeHolder: batchName,
      value: batchName,
      buttonTitle: "Save",
      initialData: { inputData: "Batch 1" },
    },
    deleteprops: {
      title: "Confirmation Required",
      message: "Are you sure you want to remove this batch?",
      buttonText: "Confirm",
    },
  };
  

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
    changeBatchName(formData);
    handleCloseBatchOperations();
    handleCloseUpdateSingleField();
    handleCloseDeleteBox();
  };

  const addStdFormSubmit=(formData)=>{
    console.log("Add student form submitted with data:", formData);
    addParticipant(formData);
    handleCloseBatchOperations();
  };

  const handleDeleteCancel = () => {
    console.log("Delete canceled");
    handleCloseDeleteBox();
  };

  const handleDeleteConfirm = () => {
    batchDelete();
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
          onSubmit={addStdFormSubmit}

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
          placeHolder={batchName}
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
