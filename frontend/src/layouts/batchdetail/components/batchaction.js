import React from "react";
import styles from "../BatchDetail.module.css";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import Searchbar from "../../../components/searchbar/Searchbar";
import Filter from "../../../components/filter/Filter";
import NavButton from "../../../components/buttons/NavButton";
import TabButton from "../../../components/buttons/TabButton";

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
    <div className={styles.content}>
      <div className={styles.top}>
        <div className={styles.heading}>
          <NavButton {...navbuttonProps} />
        </div>
        <div className={styles.textbutton}>
          <div>
            <TabButton {...textbuttonProps} />
          </div>
          <div>
            <TabButton {...textbuttonProps2} />
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.search}>
          <Searchbar {...searchbarProps} />
        </div>
        <div className={styles.right}>
          {showFiltersAndReset && (
            <div className={styles.filter}>
              {filterProps.map((props, index) => (
                <Filter key={index} {...props} />
              ))}
            </div>
          )}
          <div className={styles.button}>
            <PrimaryButton {...buttonProps} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Action;
