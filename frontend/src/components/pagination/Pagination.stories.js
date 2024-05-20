import pagination from "./Pagination";

export default {
  title: "components/Pagination",
  component: pagination,
};

const pageData = {
  currentPage: 7,
  totalPages: 10,
  onPageChange: (e) => {
    console.log("Page Changed");
  },
};

export const Pagination = {
  args: {
    ...pageData,
  },
};
