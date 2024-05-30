import React from "react";
import styles from "./EventCard.module.css";

const EventCard = (props) => {
  const {
    main = "All hands meeting",
    sub = "http:// www.zoom.com",
    start = "10:30am",
    end = "11:30am",
    status = "due",
    mode = "dark",
    date = 17,
    handleClick=()=>{alert("event card clicked!")},
  } = props;

  const formatText = (text) => {
    if (text.length > 17) {
      text = text.slice(0, 17) + "... ";
    }
    return text;
  };

  return (
    <div
      className={`${styles["event-card"]} ${styles[mode]}`}
      onClick={handleClick}
    >
      <div className={`${styles["card-contents"]}`}>
        <div className={`${styles["event-date"]}`}>
          <h3 className={`${styles.date}`}>{date}</h3>
        </div>
        <div className={`${styles["event-details"]}`}>
          <div className={`${styles["details-left"]}`}>
            <h1 className={`${styles.main}`}>{formatText(main)}</h1>

            <h4 className={`${styles.sub}`}>
              <u>
                <a href={`${sub}`} onClick={(e)=>{e.stopPropagation();}}>{formatText(sub)}</a>
              </u>
            </h4>
          </div>

          <div className={`${styles["details-right"]}`}>
            <ul>
              <li className={styles.hello}>
                <span
                  className={`${styles.duration}`}
                >{`${start} - ${end}`}</span>
              </li>
            </ul>

            <h4 className={`${styles.status} ${styles[status]}`}>
              {status === "upcoming"
                ? "Upcoming"
                : status === "due"
                  ? "Due soon"
                  : status === "happening"
                    ? "Happening now"
                    : "TBA"}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
