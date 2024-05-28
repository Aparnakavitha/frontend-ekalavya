import React from "react";
// import styles from "./CollegeList.module.css";
import styles from "../AdminStudent.module.css";
import Table from "../../../components/table/Table";

const CollegeList = ({ data, headings }) => {

  return (
    <div className={`${styles['collegeList-container']}`}>
      <div className={`${styles['collegeList-college']}`}>College List</div>
      <div className={`${styles['collegeList-table']}`}>
        <Table data={data} headings={headings} />
      </div>
    </div>
  );
};

export default CollegeList;
