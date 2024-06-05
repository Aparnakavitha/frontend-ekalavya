const AdminBatchActionData = {
  heading: "Batches List",
  buttonProps: {
    variant: "tertiary",
    content: "+ Add new Batch",
    width: "full",
  },
  searchWidth: "large",
  searchbarProps: {
    variant: "custom",
    placeholder: "Batch",
  },
  showFiltersAndReset: false,
  batchprops: {
    mainHeading: "Create Batch",
    options :[
      { value: "abc", label: "ABC" },
      { value: "xyz", label: "XYZ" },
      { value: "pqr", label: "PQR" },
    ],
  },
};

export default AdminBatchActionData;
