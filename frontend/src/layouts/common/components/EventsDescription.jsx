import React from "react";
import styles from "../Common.module.css";
import NavButton from "../../../components/buttons/NavButton";
import PrimaryButton from "../../../components/buttons/PrimaryButton";

const EventsDescription = (props) => {
  const {
    eventTitle,
    eventType,
    eventMode,
    description,
    startDate,
    endDate,
    startTime,
    endTime,
    location,
    link,
    speaker,
    speakerDescription,
    organizer,
    button,
    small,
    medium,
    large,
    type,
    smaller,
    onclick1,
    onclick2,
    onclick3,
  } = props;

  function formatDate(dateString) {
    const date = new Date(dateString);
    const month = date.toLocaleDateString("en-US", { month: "short" });
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  }

  function formatTime(timeString) {
    const [hours, minutes] = timeString.split(":");
    const convertedHours = hours % 12 || 12;
    const amPm = hours < 12 ? "AM" : "PM";
    return `${convertedHours.toString().padStart(2, "0")}:${minutes} ${amPm}`;
  }

  const locationLabel = eventMode === "Offline" ? "Location" : "Link";
  const locationValue = eventMode === "Offline" ? location : link;

  return (
    <div className={`${styles["eventsdescription-container"]}`}>
      <div className={`${styles["eventsdescription-topleft"]}`}>
        <div className={`${styles["eventsdescription-navbutton"]}`}>
          <div>
            <NavButton pageName={eventTitle} onClick={onclick1} />
          </div>
        </div>
      </div>

      <div className={`${styles["eventsdescription-description"]}`}>
        <div className={`${styles["eventsdescription-buttondiv"]}`}>
          <div className={`${styles["eventsdescription-buttondiv2"]}`}>
            <div className={`${styles["eventsdescription-content"]}`}>
              <div>
                <h2 className={`${styles["eventsdescription-contentheading"]}`}>
                  {eventTitle}
                </h2>
              </div>
              <div className={`${styles["eventsdescription-texted"]}`}>
                <a className={`${styles["eventsdescription-text"]}`}>
                  <b> Type : </b>
                  {eventType}
                </a>
                <a className={`${styles["eventsdescription-texts"]}`}>
                  Event Mode : {eventMode}
                </a>
              </div>
            </div>

            {type === "public" && (
              <>
                <div className={`${styles["eventsdescription-primarydiv"]}`}>
                  <div
                    className={`${styles["eventsdescription-primarybutton"]}`}
                  >
                    <div>
                      <PrimaryButton
                        content={smaller}
                        variant="secondary"
                        onClick={onclick1}
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            {type === "mentor" && (
              <>
                <div className={`${styles["eventsdescription-primarydiv"]}`}>
                  <div
                    className={`${styles["eventsdescription-primarybutton"]}`}
                  >
                    <div>
                      <PrimaryButton
                        content={small}
                        variant="secondary"
                        onClick={onclick1}
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            {type === "admin" && (
              <>
                <div>
                  <div className={`${styles["eventsdescription-primarydiv"]}`}>
                    <PrimaryButton
                      content={large}
                      variant="secondary"
                      onClick={onclick1}
                    />
                    <PrimaryButton
                      content={medium}
                      variant="secondary"
                      onClick={onclick2}
                    />
                    <PrimaryButton
                      content={small}
                      variant="secondary"
                      onClick={onclick3}
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          <div className={`${styles["eventsdescription-gap"]}`}>
            <div className={`${styles["eventsdescription-headingcontent"]}`}>
              <h3>Description</h3>
            </div>
            <div className={`${styles["eventsdescription-desc"]}`}>
              <p>{description}</p>
            </div>
          </div>

          <div className={`${styles["eventsdescription-align"]}`}>
            <div className={`${styles["eventsdescription-gap"]}`}>
              <div className={`${styles["eventsdescription-headingcontent"]}`}>
                <h3>Date and Time</h3>
              </div>
              <div className={`${styles["eventsdescription-timer"]}`}>
                <a className={`${styles["eventsdescription-date"]}`}>
                  • <b>Date : </b>
                  {formatDate(startDate)} - {formatDate(endDate)}
                </a>
                <a className={`${styles["eventsdescription-time"]}`}>
                  • <b>Time : </b>
                  {formatTime(startTime)} - {formatTime(endTime)}
                </a>
              </div>
            </div>

            <div className={`${styles["eventsdescription-gap"]}`}>
              <div className={`${styles["eventsdescription-headingcontent"]}`}>
                <h3>{locationLabel}</h3>
              </div>
              <div className={`${styles["eventsdescription-timer"]}`}>
                <a className={`${styles["eventsdescription-venue"]}`}>
                  • <b>{locationLabel} :</b> {locationValue}
                </a>
              </div>
            </div>
          </div>

          <div className={`${styles["eventsdescription-gap"]}`}>
            <div className={`${styles["eventsdescription-headingcontent"]}`}>
              <h3>Speakers</h3>
            </div>
            <div>
              <a className={`${styles["eventsdescription-speaker"]}`}>
                • <b>{speaker} </b>, {speakerDescription}
              </a>
            </div>
          </div>

          {(type === "public" || type === "admin") && (
            <>
              <div>
                <div
                  className={`${styles["eventsdescription-headingcontent"]}`}
                >
                  <h3>Organizer</h3>
                </div>

                <div>
                  <a className={`${styles["eventsdescription-speaker"]}`}>
                    • {organizer}
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsDescription;
