import React, { useState, useRef, useEffect } from "react";
import styles from "./Filter.module.css";
import { FaAngleDown } from "react-icons/fa";

const Filter = ({
  initialHeading,
  Content,
  handleDropClick,
  isOpen,
  onToggle,
  onOptionClick,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(initialHeading);
  const headingRef = useRef(null);
  const dropRef = useRef(null);

  const toggleDropdown = (newIsOpen) => {
    const toggleFn = onToggle || setInternalIsOpen;
    toggleFn(newIsOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    toggleDropdown(false);
    onOptionClick && onOptionClick(option);
    handleDropClick && handleDropClick();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropRef.current && !dropRef.current.contains(event.target)) {
        toggleDropdown(false);
      }
    };

    const currentIsOpen = isOpen !== undefined ? isOpen : internalIsOpen;

    if (currentIsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, internalIsOpen]);

  const currentIsOpen = isOpen !== undefined ? isOpen : internalIsOpen;

  const dropdownWidth = headingRef.current
    ? headingRef.current.offsetWidth
    : "auto";

  return (
    <div className={styles.filter} ref={dropRef}>
      <div
        className={styles.filterClass}
        onClick={() => toggleDropdown(!currentIsOpen)}
        ref={headingRef}
      >
        <span className={styles.selectedOption}>{selectedOption}</span>
        <div className={styles.iconAngleDown}>
          <FaAngleDown />
        </div>
      </div>
      {currentIsOpen && (
        <div className={styles.drop} style={{ minWidth: dropdownWidth }}>
          {Content.map((content, index) => (
            <div
              className={styles.dropcontent}
              key={index}
              onClick={() => handleOptionClick(content)}
            >
              <a>{content}</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
