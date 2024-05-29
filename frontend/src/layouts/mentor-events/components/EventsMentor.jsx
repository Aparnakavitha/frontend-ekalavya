import React from "react";
import styles from "../MentorEvents.module.css";
import NavButton from "../../../components/buttons/NavButton";
import PrimaryButton from "../../../components/buttons/PrimaryButton";

const EventsMentor = (props) => {
  const {
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
    <div className={`${styles["EventsMentor-container"]}`}>
      <div className={`${styles["EventsMentor-topleft"]}`}>
        <div className={`${styles["EventsMentor-navbutton"]}`}>
          <div>
            <NavButton pageName={button} />
          </div>
          <div>
            <NavButton pageName={buttons} />
          </div>
        </div>
      </div>

      <div className={`${styles["EventsMentor-description"]}`}>
        <div className={`${styles["EventsMentor-buttondiv"]}`}>
          <div className={`${styles["EventsMentor-buttondiv2"]}`}>
            <div className={`${styles["EventsMentor-content"]}`}>
              <div>
                <h2>Exploring Future Technologies</h2>
              </div>
              <div className={`${styles["EventsMentor-texted"]}`}>
                <a className={`${styles["EventsMentor-text"]}`}> {text} </a>
                <a className={`${styles["EventsMentor-texts"]}`}>{texts}</a>
              </div>
            </div>

            {type === "public" && (
              <>
                <div className={`${styles["EventsMentor-primarydiv"]}`}>
                  <div className={`${styles["EventsMentor-primarybutton"]}`}>
                    <div>
                      <PrimaryButton content={smaller} variant="secondary" />
                    </div>
                  </div>
                </div>
              </>
            )}

            {type === "mentor" && (
              <>
                <div className={`${styles["EventsMentor-primarydiv"]}`}>
                  <div className={`${styles["EventsMentor-primarybutton"]}`}>
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
                  <div className={`${styles["EventsMentor-primarydiv"]}`}>
                    <PrimaryButton content={large} variant="secondary" />
                    <PrimaryButton content={medium} variant="secondary" />
                    <PrimaryButton content={small} variant="secondary" />
                  </div>
                </div>
              </>
            )}
          </div>

          <div className={`${styles["EventsMentor-gap"]}`}>
            <div>
              <h3>Description</h3>
            </div>
            <div className={`${styles["EventsMentor-desc"]}`}>
              <p>{desc}</p>
            </div>
          </div>

          <div className={`${styles["EventsMentor-align"]}`}>
            <div className={`${styles["EventsMentor-gap"]}`}>
              <div>
                <h3>Date and Time</h3>
              </div>
              <div className={`${styles["EventsMentor-timer"]}`}>
                <a className={`${styles["EventsMentor-date"]}`}>• <b>Date :</b>{date}</a>
                <a className={`${styles["EventsMentor-time"]}`}>• <b>Time :</b>{time}</a>
              </div>
            </div>

            <div className={`${styles["EventsMentor-gap"]}`}>
              <div>
                <h3>Location</h3>
              </div>
              <div className={`${styles["EventsMentor-timer"]}`}>
                <a className={`${styles["EventsMentor-venue"]}`}>• <b>Venue :</b> {venue}</a>
                <a className={`${styles["EventsMentor-address"]}`}>• <b>Address :</b> {address}</a>
              </div>
            </div>
          </div>

          <div className={`${styles["EventsMentor-gap"]}`}>
            <div>
              <h3>Speakers</h3>
            </div>
            <div>
              <a className={`${styles["EventsMentor-speaker"]}`}>• {speaker}</a>
            </div>
          </div>

          {type === "public" && (
            <>
              <div>
                <h3>Organizer</h3>
                <div>
                  <a className={`${styles["EventsMentor-speaker"]}`}>• {speaker}</a>
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
