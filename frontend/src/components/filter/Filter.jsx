import React, { useState, useRef, useEffect } from "react";
import styles from "./Filter.module.css";
import { FaAngleDown } from "react-icons/fa";

const Filter = (props) => {
  const { Heading, Content, handleDropClick } = props;
  const [dropContent, setDropContent] = useState(false);
  const dropRef = useRef(null);

  const handleDrop = () => {
    setDropContent(!dropContent);
  };

  return (
    <div className={styles.filter}>
      <div className={styles.filterClass} onClick={handleDrop}>
        <a>{Heading}</a>
        <div className={styles.iconAngleDown}>
          <FaAngleDown />
        </div>
      </div>
      {dropContent && (
        <div ref={dropRef} className={styles.drop}>
          {Content.map((content, index) => (
            <div
              className={styles.dropcontent}
              key={index}
              onClick={handleDropClick}
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
