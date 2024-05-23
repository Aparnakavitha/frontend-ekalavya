import React from "react";
import styles from ".././Home.module.css";
import PrimaryButton from "../../../components/buttons/PrimaryButton";

const Hero = (props) => {
  return (
    <div>
      <div className={styles.contentbuttondiv}>
        <div className={styles.contentColumn}>
          <div className={styles.textColumn}>
            <h1 className={styles.mainContent}>{props.mainContent[0]}</h1>
            <h1 className={styles.mainContent2}>{props.mainContent[1]}</h1>
            <h1 className={styles.mainContent}>{props.mainContent[2]}</h1>
          </div>
          <h2 className={styles.semiContent}>{props.semiContent}</h2>
        </div>
        <div className={styles.buttondiv}>
          <PrimaryButton
            content={props.buttonContent}
            variant={props.buttonVariant}
            width={props.buttonWidth}
            onclick={props.onclick}
          />
        </div>
        <div className={styles.statistics}>
          <div className={styles.statidiv}>
            {props.number.map((num, index) => (
              <div
              key={index}
              className={`${styles.statiunit} ${
                index < 2 ? styles.firstTwo : ""
              }`}
            >
                <h1 className={styles.numbers}>{num}</h1>
                <h1 className={styles.title}>{props.title[index]}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
