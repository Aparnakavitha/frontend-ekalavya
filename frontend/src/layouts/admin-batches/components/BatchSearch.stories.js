import BatchSearch from "./BatchSearch";
import { GoTrash } from "react-icons/go";
import { MdEdit } from "react-icons/md";

export default {
  title: "Layouts/AdminBatches/Components/BatchSearch",
  component: BatchSearch,
};

const batchDetails = {
  navbuttonProps: {
    pageName: "Batch Name",
  },
  textbuttonProps: {
    icon: <MdEdit />,
    text: "Edit Batch Name",
    onClick: (e) => {
      console.log("clicked");
    },
  },
  textbuttonProps2: {
    icon: <GoTrash />,
    text: "Delete",
    onClick: (e) => {
      console.log("clicked");
    },
  },
  searchbarProps: {
    variant: "custom",
    placeholder: "Student Name",
  },
  showFiltersAndReset: false,
  buttonProps: {
    variant: "tertiary",
    content: "+ Add new Student",
    width: "full",
  },
};

export const Batchsearch = {
  args: {
    ...batchDetails,
  },
};
