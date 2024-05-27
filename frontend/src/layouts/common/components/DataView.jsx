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
    let cardName = String(CardComponent.name).toLowerCase();
    if (cardName === "skillbatchcard") {
      if (String(item.cardType).toLowerCase() === "skill") {
        cardName = "dataview-skillbatchcardskill";
      } else if (String(item.cardType).toLowerCase() === "batch") {
        cardName = "dataview-skillbatchcardbatch";
      }
    } else {
      cardName = "dataview-" + cardName;
      console.log(cardName);
    }
    return cardName;
  };

  const filteredTableData = currentData.map((item) =>
    tableColumns.map((column) => item[column.key])
  );

  const tableHeadings = tableColumns.map((column) => column.displayName);

  return (
    <div>
      {toggle && (
        <div className={`${styles["dataview-toggleContainer"]}`}>
          <button
            className={`${styles["dataview-toggleButton"]} ${isCardView ? styles.selected : ""}`}
            onClick={showCardView}
          >
            <PiCards className={`${styles["dataview-icons"]}`} />
          </button>
          <button
            className={`${styles["dataview-toggleButton"]} ${!isCardView ? styles.selected : ""}`}
            onClick={showTableView}
          >
            <PiListBullets className={`${styles["dataview-icons"]}`} />
          </button>
        </div>
      )}

      {isCardView ? (
        <div className={`${styles["dataview-cardscontainer"]}`}>
          {currentData.map((item, index) => (
            <div key={index} className={`${styles[getComponentName(item)]}`}>
              <CardComponent {...item} />
            </div>
          ))}
        </div>
      ) : (
        <div className={`${styles["dataview-tablecontainer"]}`}>
          <Table data={filteredTableData} headings={tableHeadings} />
        </div>
      )}

      {data.length > itemsPerPage && (
        <div className={`${styles["dataview-pagination"]}`}>
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
