import React, { useState } from "react";
import styles from "../Common.module.css";
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
  showTextButton,
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
      <div className={`${styles["batchsearch-content"]}`}>
        <div className={`${styles["batchsearch-top"]}`}>
          <div className={`${styles["batchsearch-heading"]}`}>
            <NavButton {...navbuttonProps} />
          </div>
          {showTextButton && (
            <div className={`${styles["batchsearch-textbutton"]}`}>
              <div>
                <TextButton {...textbuttonProps} />
              </div>
              <div>
                <TextButton {...textbuttonProps2} />
              </div>
            </div>
          )}
        </div>
        <div className={`${styles["batchsearch-bottom"]}`}>
          <div className={`${styles["batchsearch-search"]}`}>
            <Searchbar {...searchbarProps} />
          </div>
          <div className={`${styles["batchsearch-right"]}`}>
            {showFiltersAndReset && (
              <div className={`${styles["batchsearch-filter"]}`}>
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
            )}
            <div className={`${styles["batchsearch-reset"]}`}>
              <PrimaryButton {...buttonProps} onClick={handleReset} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatchSearch;
