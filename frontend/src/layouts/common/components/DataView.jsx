import React, { useState } from "react";
import Table from "../../../components/table/Table";
import Pagination from "../../../components/pagination/Pagination";
import styles from "../index.module.css";

import { PiCards, PiListBullets } from "react-icons/pi";

const DataView = ({
  CardComponent,
  data,
  tableColumns,
  toggle,
  itemsPerPage = 10,
}) => {
  const [isCardView, setIsCardView] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const showCardView = () => {
    setIsCardView(true);
  };

  const showTableView = () => {
    setIsCardView(false);
  };

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getComponentName = (item) => {
    let cardName = CardComponent.name.toLowerCase();
    if (cardName === "skillbatchcard") {
      if (item.cardType.toLowerCase() === "skill") {
        cardName = "skillbatchcardskill";
      } else if (item.cardType.toLowerCase() === "batch") {
        cardName = "skillbatchcardbatch";
      }
    }
    return cardName;
  };

  // Map data to table columns
  const filteredTableData = currentData.map((item) =>
    tableColumns.map((column) => item[column.key])
  );

  const tableHeadings = tableColumns.map((column) => column.displayName);

  return (
    <div>
      {toggle && (
        <div className={styles.toggleContainer}>
          <button
            className={`${styles.toggleButton} ${isCardView ? styles.selected : ""}`}
            onClick={showCardView}
          >
            <PiCards className={styles.icons} />
          </button>
          <button
            className={`${styles.toggleButton} ${!isCardView ? styles.selected : ""}`}
            onClick={showTableView}
          >
            <PiListBullets className={styles.icons} />
          </button>
        </div>
      )}

      {isCardView ? (
        <div className={styles.cardscontainer}>
          {currentData.map((item, index) => (
            <div key={index} className={`${styles[getComponentName(item)]}`}>
              <CardComponent {...item} />
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.tablecontainer}>
          <Table data={filteredTableData} headings={tableHeadings} />
        </div>
      )}

      {data.length > itemsPerPage && (
        <div className={styles.pagination}>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        </div>
      )}
    </div>
  );
};

export default DataView;
