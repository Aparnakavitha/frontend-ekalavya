import React from "react";
import styles from ".././Home.module.css";
import PrimaryButton from "../../../components/buttons/PrimaryButton";

const Hero = (props) => {
  return (
    <div>
      <div className={styles["hero-contentbuttondiv"]}>
        <div className={styles["hero-contentColumn"]}>
          <div className={styles["hero-textColumn"]}>
            <h1 className={styles["hero-mainContent"]}>{props.mainContent[0]}</h1>
            <h1 className={styles["hero-mainContent2"]}>{props.mainContent[1]}</h1>
            <h1 className={styles["hero-mainContent"]}>{props.mainContent[2]}</h1>
          </div>
          <h2 className={styles["hero-semiContent"]}>{props.semiContent}</h2>
        </div>
        <div className={styles["hero-buttondiv"]}>
          <PrimaryButton
            content={props.buttonContent}
            variant={props.buttonVariant}
            width={props.buttonWidth}
            onclick={props.onclick}
          />
        </div>
        <div className={styles["hero-statistics"]}>
          <div className={styles["hero-statidiv"]}>
            {props.number.map((num, index) => (
              <div
                key={index}
                className={`${styles["hero-statiunit"]} ${
                  index < 2 ? styles["hero-firstTwo"] : ""
                }`}
              >
                <h1 className={styles["hero-numbers"]}>{num}</h1>
                <h1 className={styles["hero-title"]}>{props.title[index]}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
