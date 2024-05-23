import React, { useState, useRef, useEffect } from "react";
import styles from "./Filter.module.css";
import { FaAngleDown } from "react-icons/fa";
 
const Filter = ({ initialHeading, Content, handleDropClick, isOpen, onToggle, onOptionClick }) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(initialHeading);
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
 
  const longestOptionLength = Content.reduce((max, option) => Math.max(max, option.length), 0);
  const dropdownWidth = Math.max(styles.filterClass.minWidth, longestOptionLength * styles.characterWidth);
 
  return (
    <div className={styles.filter} ref={dropRef}>
      <div className={styles.filterClass} onClick={() => toggleDropdown(!currentIsOpen)} style={{ width: dropdownWidth }}>
        <a>{selectedOption}</a>
        <div className={styles.iconAngleDown}>
          <FaAngleDown />
        </div>
      </div>
      {currentIsOpen && (
        <div className={styles.drop}>
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
 