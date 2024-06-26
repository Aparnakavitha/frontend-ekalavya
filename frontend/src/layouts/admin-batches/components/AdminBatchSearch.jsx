import React, { useState ,useEffect} from "react";
import BatchSearch from "../../common/components/BatchSearch";
import Modal from "../../common/components/Modal";
import UpdateSingleField from "../../common/components/UpdateSingleField";
import DeleteBox from "../../common/components/DeleteBox";
import { GoTrash } from "react-icons/go";
import { MdEdit } from "react-icons/md";
import { getUserDetails } from "../../../services/User";

const AdminBatchSearch = ({
  batchDelete,
  addParticipant,
  changeBatchName,
  batchName,
}) => {
  const [isBatchOperationsOpen, setIsBatchOperationsOpen] = useState(false);
  const [isUpdateSingleFieldOpen, setIsUpdateSingleFieldOpen] = useState(false);
  const [isDeleteBoxOpen, setIsDeleteBoxOpen] = useState(false);
  const [userIdOptions, setUserIdOptions] = useState([]);

  useEffect(() => {
    const fetchData = async (params) => {
      try {
        var filterParams = {
          roleId: 3,
        };
       
        const data = await getUserDetails(filterParams);
        console.log(data);
        const userIds = data.responseData.map((user) => ({
          value: user.userId,
          label: user.userId,
        }));
        setUserIdOptions(userIds);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Example call to fetchData with initial params
    fetchData(); // Adjust params as needed

  }, []);

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
      onClick: () => {
        setIsUpdateSingleFieldOpen(true);
      },
    },
    textbuttonProps2: {
      icon: <GoTrash />,
      text: "Delete",
      onClick: () => {
        setIsDeleteBoxOpen(true);
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
      onClick: () => {
        setIsBatchOperationsOpen(true);
      },
    },
    newprops: {
      mainHeading: "Add Student",
      labelTitle: "Add student ID",
      placeHolder: "Student ID",
      buttonTitle: "Add",
      options:userIdOptions,
    },
    editprops: {
      mainHeading: "Edit Batch Name",
      labelTitle: "Batch Name",
      placeHolder: batchName,
      buttonTitle: "Save",
      initialData: { inputData: batchName },
    },
    deleteprops: {
      title: "Confirmation Required",
      message: "Are you sure you want to remove this batch?",
      buttonText: "Confirm",
    },
  };

  const handleFormSubmit = (formData) => {
    console.log("Form submitted with data:", formData);
    changeBatchName(formData.inputData);
    handleCloseAllModals();
  };

  const addStdFormSubmit = (formData) => {
    console.log("Add student form submitted with data:", formData);
    addParticipant(formData.inputData);
    handleCloseAllModals();
  };

  const handleDeleteConfirm = () => {
    batchDelete();
    console.log("Delete confirmed");
    handleCloseAllModals();
  };

  const handleCloseAllModals = () => {
    setIsBatchOperationsOpen(false);
    setIsUpdateSingleFieldOpen(false);
    setIsDeleteBoxOpen(false);
  };

  const handleDeleteCancel = () => {
    console.log("Delete canceled");
    setIsDeleteBoxOpen(false);
  };

  return (
    <div>
      <BatchSearch {...AdminBatchSearchData} />
      <Modal
        isOpen={isBatchOperationsOpen}
        widthVariant="medium"
        onClose={handleCloseAllModals}
      >
        <UpdateSingleField
          {...AdminBatchSearchData.newprops}
          onSubmit={addStdFormSubmit}
        />
      </Modal>
      <Modal
        isOpen={isUpdateSingleFieldOpen}
        widthVariant="medium"
        onClose={handleCloseAllModals}
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
        onClose={handleCloseAllModals}
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
