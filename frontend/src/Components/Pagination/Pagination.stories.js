// Pagination.stories.js

import Pagination from './Pagination';

export default {
    title: 'Pagination',
    component: Pagination,
};

const pageData = {
    currentPage:7,
    totalPages:10,
    onPageChange: (e) => {
        console.log("Page Changed");
      },
  };
  
  
  export const BasicPagination = {
      args: {
          ...pageData
      }
  }