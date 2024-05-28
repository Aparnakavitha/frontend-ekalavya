import React from "react";
import styles from "../AdminBatches.module.css";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import Searchbar from "../../../components/searchbar/Searchbar";
import Filter from "../../../components/filter/Filter";
import NavButton from "../../../components/buttons/NavButton";
import TextButton from "../../../components/buttons/TextButton";

const BatchSearch = ({
  textbuttonProps,
  textbuttonProps2,
  navbuttonProps,
  searchbarProps,
  filterProps = [],
  buttonProps,
  showFiltersAndReset,
}) => {
  return (
    <div className={`${styles["batchsearch-content"]}`}>
      <div className={`${styles["batchsearch-top"]}`}>
        <div className={`${styles["batchsearch-heading"]}`}>
          <NavButton {...navbuttonProps} />
        </div>
        <div className={`${styles["batchsearch-textbutton"]}`}>
          <div>
            <TextButton {...textbuttonProps} />
          </div>
          <div>
            <TextButton {...textbuttonProps2} />
          </div>
        </div>
      </div>
      <div className={`${styles["batchsearch-bottom"]}`}>
        <div className={`${styles["batchsearch-search"]}`}>
          <Searchbar {...searchbarProps} />
        </div>
        <div className={`${styles["batchsearch-right"]}`}>
          {showFiltersAndReset && (
            <div className={`${styles["batchsearch-filter"]}`}>
              {filterProps.map((props, index) => (
                <Filter key={index} {...props} />
              ))}
            </div>
          )}
          <div className={`${styles["batchsearch-button"]}`}>
            <PrimaryButton {...buttonProps} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatchSearch;
