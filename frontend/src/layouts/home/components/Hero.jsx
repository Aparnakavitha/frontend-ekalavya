import React from "react";
import styles from ".././Home.module.css";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import star from "../../../assets/Star 2.svg";
import star2 from "../../../assets/Star 6.svg";
import star3 from "../../../assets/Star 3.svg";
import star4 from "../../../assets/Star 1.svg";
import colorfilter from "../../../assets/colorfilter.svg";

const Hero = (props) => {
  return (
    <div className={styles["hero-container"]}>
      <div className={styles["hero-contentbuttondiv"]}>
        <div className={styles["hero-content-column"]}>
          <div className={styles["hero-text-column"]}>
            <div className={styles["hero-container-section"]}>
              <div className={styles["hero-image1"]}>
                <img src={star} alt="" />
              </div>
              <h1 className={styles["hero-main-content"]}>
                {props.mainContent[0]}
              </h1>
            </div>
            <div className={styles["hero-container-section"]}>
              <div className={styles["hero-image2"]}>
                <img src={star2} alt="" />
              </div>
              <h1 className={styles["hero-main-content2"]}>
                {props.mainContent[1]}
              </h1>
            </div>
            <div className={styles["hero-container-section"]}>
              <div className={styles["hero-image3"]}>
                <img src={star3} alt="" />
              </div>
              <div className={styles["hero-image4"]}>
                <img src={colorfilter} alt="" />
              </div>
              <div className={styles["hero-image5"]}>
                <img src={star4} alt="" />
              </div>
              <h1 className={styles["hero-main-content"]}>
                {props.mainContent[2]}
              </h1>
            </div>
          </div>
          <h2 className={styles["hero-semi-content"]}>{props.semiContent}</h2>
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
                  index < 2 ? styles["hero-first-two"] : ""
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