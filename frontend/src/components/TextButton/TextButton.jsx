import React from "react";
import Styles from "./TextButton.module.css";


const TextButton=(props) =>{
  const { icon, text, onClick } = props;
  return (
    <div className={Styles.textbutton} onClick={onClick}>
      <div className={Styles.icon}>{icon}</div>
      <a  className={Styles.text}>
        {text}
      </a>
    </div>
  );
}

export default TextButton;