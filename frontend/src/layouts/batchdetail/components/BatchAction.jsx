import React from "react";
import styles from "../BatchDetail.module.css";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import Searchbar from "../../../components/searchbar/Searchbar";
import Filter from "../../../components/filter/Filter";
import NavButton from "../../../components/buttons/NavButton";
import TextButton from "../../../components/buttons/TextButton";

const Action = ({
  textbuttonProps,
  textbuttonProps2,
  navbuttonProps,
  searchbarProps,
  filterProps = [],
  buttonProps,
  showFiltersAndReset,
}) => {
  return (
    <div className={`${styles["batchdetail-content"]}`}>
      <div className={`${styles["batchdetail-top"]}`}>
        <div className={`${styles["batchdetail-heading"]}`}>
          <NavButton {...navbuttonProps} />
        </div>
        <div className={`${styles["batchdetail-textbutton"]}`}>
          <div>
            <TextButton {...textbuttonProps} />
          </div>
          <div>
            <TextButton {...textbuttonProps2} />
          </div>
        </div>
      </div>
      <div className={`${styles["batchdetail-bottom"]}`}>
        <div className={`${styles["batchdetail-search"]}`}>
          <Searchbar {...searchbarProps} />
        </div>
        <div className={`${styles["batchdetail-right"]}`}>
          {showFiltersAndReset && (
            <div className={`${styles["batchdetail-filter"]}`}>
              {filterProps.map((props, index) => (
                <Filter key={index} {...props} />
              ))}
            </div>
          )}
          <div className={`${styles["batchdetail-button"]}`}>
            <PrimaryButton {...buttonProps} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Action;
