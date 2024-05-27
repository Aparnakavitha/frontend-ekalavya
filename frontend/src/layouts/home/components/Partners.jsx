import React from "react";
import styles from "../Home.module.css";

const Partners = (props) => {
  const { title, Images } = props;
  return (
    <div className={styles[`Partners-container`]}>
      <div className={styles[`Partners-title`]}>
        <h1>{title}</h1>
      </div>
      <div className={styles['Partners-Icons']}>
        {Images.map((image, index) => (
          <img
            src={image}
            alt={`Img${index + 1}`}
            key={index}
            className={styles['Partners-profileImage']}
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
