import React, { useState, useRef, useEffect } from "react";
import Styles from "./Filter.module.css";
import { FaAngleDown } from "react-icons/fa";

function Filter(props) {
  const { Heading, Content, handleDropClick } = props;
  const [dropContent, setDropContent] = useState(false);
  const dropRef = useRef(null);

  const handleDrop = () => {
    setDropContent(!dropContent);
  };

  return (
    <div className={Styles.filter}>
      <div className={Styles.filterClass} onClick={handleDrop}>
        <a>{Heading}</a>
        <div className={Styles.iconAngleDown}>
          <FaAngleDown />
        </div>
      </div>
      {dropContent && (
        <div ref={dropRef} className={Styles.drop}>
          {Content.map((content, index) => (
            <div
              className={Styles.dropcontent}
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
}

export default Filter;
