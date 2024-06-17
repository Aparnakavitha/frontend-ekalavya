import React, { useState } from "react";
import styles from "../Common.module.css";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import Searchbar from "../../../components/searchbar/Searchbar";
import Filter from "../../../components/filter/Filter";

const ActionComponent = ({
  buttonProps,
  showDelete,
  deleteProps,
  heading,
  searchbarProps,
  filterProps = [],
  resetProps,
  showFiltersAndReset,
  searchWidth = "full",
  onFilterChange,
}) => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [filterStates, setFilterStates] = useState(
    filterProps.map((filter) => filter.defaultOption || "")
  );

  const handleToggle = (index) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleOptionClick = (index, option) => {
    const newFilterStates = [...filterStates];
    newFilterStates[index] = option;
    setFilterStates(newFilterStates);
    const filtersObject = {};
    newFilterStates.forEach((filter) => {
      filtersObject[filter.heading] = filter.selectedOption;
    });
    onFilterChange(filtersObject);
    setOpenDropdownIndex(null);
  };

  const handleReset = () => {
    const defaultStates = filterProps.map(
      (filter) => filter.defaultOption || ""
    );
    setFilterStates(defaultStates);
    const filtersObject = {};
    defaultStates.forEach((filter) => {
      filtersObject[filter.heading] = filter.selectedOption;
    });
    onFilterChange(filtersObject);
  };

  return (
    <div className="padding">
      <div className={styles["common-content"]}>
        <div className={styles["common-top"]}>
          <div className={styles["common-heading"]}>{heading}</div>
          <div className={styles["common-buttons"]}>
            <PrimaryButton {...buttonProps} />
          </div>
        </div>
        <div className={styles["common-bottom"]}>
          <div
            className={`${styles["common-search"]} ${styles[`common-${searchWidth}`]}`}
          >
            <Searchbar {...searchbarProps} />
          </div>
          {showFiltersAndReset && (
            <div className={styles["common-right"]}>
              <div className={styles["common-filter"]}>
                {filterProps.map((props, index) => (
                  <Filter
                    key={index}
                    initialHeading={props.Heading}
                    Content={props.Content}
                    isOpen={openDropdownIndex === index}
                    onToggle={() => handleToggle(index)}
                    onOptionClick={(option) => handleOptionClick(index, option)}
                    selectedOption={filterStates[index]}
                  />
                ))}
              </div>
              <div className={styles["common-reset"]}>
                <PrimaryButton {...resetProps} onClick={handleReset} />
              </div>
            </div>
          )}
          {showDelete && (
            <div className={styles["common-deletebutton"]}>
              <PrimaryButton {...deleteProps} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActionComponent;
