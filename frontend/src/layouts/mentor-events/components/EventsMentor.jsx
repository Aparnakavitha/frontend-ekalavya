import React from "react";
import styles from "../MentorEvents.module.css";
import NavButton from "../../../components/buttons/NavButton";
import PrimaryButton from "../../../components/buttons/PrimaryButton";

const EventsMentor = (props) => {
  const {
    heading,
    text,
    texts,
    desc,
    date,
    time,
    venue,
    address,
    speaker,
    button,
    buttons,
    small,
    medium,
    large,
    type,
    smaller,
  } = props;

  return (
    <div className={`${styles["eventsmentor-container"]}`}>
      <div className={`${styles["eventsmentor-topleft"]}`}>
        <div className={`${styles["eventsmentor-navbutton"]}`}>
          <div>
            <NavButton pageName={button} />
          </div>
          <div>
            <NavButton pageName={buttons} />
          </div>
        </div>
      </div>

      <div className={`${styles["eventsmentor-description"]}`}>
        <div className={`${styles["eventsmentor-buttondiv"]}`}>
          <div className={`${styles["eventsmentor-buttondiv2"]}`}>
            <div className={`${styles["eventsmentor-content"]}`}>
              <div>
                <h2 className={`${styles["eventsmentor-contentheading"]}`}>
                  {heading}
                </h2>
              </div>
              <div className={`${styles["eventsmentor-texted"]}`}>
                <a className={`${styles["eventsmentor-text"]}`}>
                  <b> Type : </b>
                  {text}
                </a>
                <a className={`${styles["eventsmentor-texts"]}`}>
                  Event Mode : {texts}
                </a>
              </div>
            </div>

            {type === "public" && (
              <>
                <div className={`${styles["eventsmentor-primarydiv"]}`}>
                  <div className={`${styles["eventsmentor-primarybutton"]}`}>
                    <div>
                      <PrimaryButton content={smaller} variant="secondary" />
                    </div>
                  </div>
                </div>
              </>
            )}

            {type === "mentor" && (
              <>
                <div className={`${styles["eventsmentor-primarydiv"]}`}>
                  <div className={`${styles["eventsmentor-primarybutton"]}`}>
                    <div>
                      <PrimaryButton content={small} variant="secondary" />
                    </div>
                  </div>
                </div>
              </>
            )}

            {type == "admin" && (
              <>
                <div>
                  <div className={`${styles["eventsmentor-primarydiv"]}`}>
                    <PrimaryButton content={large} variant="secondary" />
                    <PrimaryButton content={medium} variant="secondary" />
                    <PrimaryButton content={small} variant="secondary" />
                  </div>
                </div>
              </>
            )}
          </div>

          <div className={`${styles["eventsmentor-gap"]}`}>
            <div className={`${styles["eventsmentor-headingcontent"]}`}>
              <h3>Description</h3>
            </div>
            <div className={`${styles["eventsmentor-desc"]}`}>
              <p>{desc}</p>
            </div>
          </div>

          <div className={`${styles["eventsmentor-align"]}`}>
            <div className={`${styles["eventsmentor-gap"]}`}>
              <div className={`${styles["eventsmentor-headingcontent"]}`}>
                <h3>Date and Time</h3>
              </div>
              <div className={`${styles["eventsmentor-timer"]}`}>
                <a className={`${styles["eventsmentor-date"]}`}>
                  • <b>Date :</b>
                  {date}
                </a>
                <a className={`${styles["eventsmentor-time"]}`}>
                  • <b>Time :</b>
                  {time}
                </a>
              </div>
            </div>

            <div className={`${styles["eventsmentor-gap"]}`}>
              <div className={`${styles["eventsmentor-headingcontent"]}`}>
                <h3>Location</h3>
              </div>
              <div className={`${styles["eventsmentor-timer"]}`}>
                <a className={`${styles["eventsmentor-venue"]}`}>
                  • <b>Venue :</b> {venue}
                </a>
                <a className={`${styles["eventsmentor-address"]}`}>
                  • <b>Address :</b> {address}
                </a>
              </div>
            </div>
          </div>

          <div className={`${styles["eventsmentor-gap"]}`}>
            <div className={`${styles["eventsmentor-headingcontent"]}`}>
              <h3>Speakers</h3>
            </div>
            <div>
              <a className={`${styles["eventsmentor-speaker"]}`}>• {speaker}</a>
            </div>
          </div>

          {type === "public" && (
            <>
              <div>
                <div className={`${styles["eventsmentor-headingcontent"]}`}>
                  <h3>Organizer</h3>
                </div>

                <div>
                  <a className={`${styles["eventsmentor-speaker"]}`}>
                    • {speaker}
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

export default EventsMentor;
