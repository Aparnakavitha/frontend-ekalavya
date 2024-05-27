import React, { useState } from "react";
import styles from "../Common.module.css";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import Searchbar from "../../../components/searchbar/Searchbar";
import Filter from "../../../components/filter/Filter";

const ActionComponent = ({
  buttonProps,
  heading,
  searchbarProps,
  filterProps = [],
  resetProps,
  showFiltersAndReset,
  searchWidth = "full",
}) => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleOptionClick = (index, option) => {
    console.log(`Selected option: ${option}`);
    setOpenDropdownIndex(null);
  };

  return (
    <div className={`${styles["common-content"]}`}>
      <div className={`${styles["common-top"]}`}>
        <div className={`${styles["common-heading"]}`}>{heading}</div>
        <div className={`${styles["common-buttons"]}`}>
          <PrimaryButton {...buttonProps} />
        </div>
      </div>
      <div className={`${styles["common-bottom"]}`}>
        <div className={`${styles["common-search"]} ${styles[`common-${searchWidth}`]}`}>
          <Searchbar {...searchbarProps} />
        </div>
        {showFiltersAndReset && (
          <div className={`${styles["common-right"]}`}>
            <div className={`${styles["common-filter"]}`}>
              {filterProps.map((props, index) => (
                <Filter
                  key={index}
                  initialHeading={props.Heading}
                  Content={props.Content}
                  isOpen={openDropdownIndex === index}
                  onToggle={() => handleToggle(index)}
                  onOptionClick={(option) => handleOptionClick(index, option)}
                />
              ))}
            </div>
            <div className={`${styles["common-reset"]}`}>
              <PrimaryButton {...resetProps} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActionComponent;
