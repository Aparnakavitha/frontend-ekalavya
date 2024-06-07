import React from "react";
import { DataView } from "../../common";
import PrimaryCard from "../../../components/cards/PrimaryCard";
import CardLayoutData from "./CardLayoutData";
import styles from "../Home.module.css";

const CardLayout = () => {
  return (
    <div className={`${styles["cardlayout-content"]}`}>
      <div className="padding">
        <div className={`${styles["cardlayout-heading"]}`}>
          {CardLayoutData.heading}
        </div>
      </div>
      <DataView CardComponent={PrimaryCard} {...CardLayoutData.Dataview} />
    </div>
  );
};

export default CardLayout;
