import React, { useState } from "react";
import styles from "../Common.module.css";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import Searchbar from "../../../components/searchbar/Searchbar";
import Filter from "../../../components/filter/Filter";
import Modal from "../../../layouts/common/components/Modal";
import AddUser from "../components/AddUser";

const ActionComponent = ({
  buttonProps,
  heading,
  searchbarProps,
  filterProps = [],
  resetProps,
  showFiltersAndReset,
  searchWidth = "full",
  adduserprops,
}) => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    setOpenDropdownIndex(null);
  };

  const handleReset = () => {
    const defaultStates = filterProps.map(
      (filter) => filter.defaultOption || ""
    );
    setFilterStates(defaultStates);
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
                    selectedOption={filterStates[index]} // Pass selected option state
                  />
                ))}
              </div>
              <div className={styles["common-reset"]}>
                <PrimaryButton {...resetProps} onClick={handleReset} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActionComponent;
