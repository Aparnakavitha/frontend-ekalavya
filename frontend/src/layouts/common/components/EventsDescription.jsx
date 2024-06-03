import React from "react";
import styles from "../Common.module.css";
import NavButton from "../../../components/buttons/NavButton";
import PrimaryButton from "../../../components/buttons/PrimaryButton";

const EventsDescription = (props) => {
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
    onclick1,
    onclick2,
    onclick3
  } = props;

  return (
    <div className={`${styles["eventsdescription-container"]}`}>
      <div className={`${styles["eventsdescription-topleft"]}`}>
        <div className={`${styles["eventsdescription-navbutton"]}`}>
          <div className={`${styles["eventsdescription-hiddenbutton"]}`}>
            <NavButton pageName={button} />
          </div>
          <div>
            <NavButton pageName={buttons} onClick={onclick1}/>
          </div>
        </div>
      </div>

      <div className={`${styles["eventsdescription-description"]}`}>
        <div className={`${styles["eventsdescription-buttondiv"]}`}>
          <div className={`${styles["eventsdescription-buttondiv2"]}`}>
            <div className={`${styles["eventsdescription-content"]}`}>
              <div>
                <h2 className={`${styles["eventsdescription-contentheading"]}`}>
                  {heading}
                </h2>
              </div>
              <div className={`${styles["eventsdescription-texted"]}`}>
                <a className={`${styles["eventsdescription-text"]}`}>
                  <b> Type : </b>
                  {text}
                </a>
                <a className={`${styles["eventsdescription-texts"]}`}>
                  Event Mode : {texts}
                </a>
              </div>
            </div>

            {type === "public" && (
              <>
                <div className={`${styles["eventsdescription-primarydiv"]}`}>
                  <div className={`${styles["eventsdescription-primarybutton"]}`}>
                    <div>
                      <PrimaryButton content={smaller} variant="secondary" onClick={onclick1}/>
                    </div>
                  </div>
                </div>
              </>
            )}

            {type === "mentor" && (
              <>
                <div className={`${styles["eventsdescription-primarydiv"]}`}>
                  <div className={`${styles["eventsdescription-primarybutton"]}`}>
                    <div>
                      <PrimaryButton content={small} variant="secondary" onClick={onclick1}/>
                    </div>
                  </div>
                </div>
              </>
            )}

            {type == "admin" && (
              <>
                <div>
                  <div className={`${styles["eventsdescription-primarydiv"]}`}>
                    <PrimaryButton content={large} variant="secondary" onClick={onclick1} />
                    <PrimaryButton content={medium} variant="secondary" onClick={onclick2}/>
                    <PrimaryButton content={small} variant="secondary" onClick={onclick3}/>
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
              <p>{desc}</p>
            </div>
          </div>

          <div className={`${styles["eventsdescription-align"]}`}>
            <div className={`${styles["eventsdescription-gap"]}`}>
              <div className={`${styles["eventsdescription-headingcontent"]}`}>
                <h3>Date and Time</h3>
              </div>
              <div className={`${styles["eventsdescription-timer"]}`}>
                <a className={`${styles["eventsdescription-date"]}`}>
                  • <b>Date :</b>
                  {date}
                </a>
                <a className={`${styles["eventsdescription-time"]}`}>
                  • <b>Time :</b>
                  {time}
                </a>
              </div>
            </div>

            <div className={`${styles["eventsdescription-gap"]}`}>
              <div className={`${styles["eventsdescription-headingcontent"]}`}>
                <h3>Location</h3>
              </div>
              <div className={`${styles["eventsdescription-timer"]}`}>
                <a className={`${styles["eventsdescription-venue"]}`}>
                  • <b>Venue :</b> {venue}
                </a>
                <a className={`${styles["eventsdescription-address"]}`}>
                  • <b>Address :</b> {address}
                </a>
              </div>
            </div>
          </div>

          <div className={`${styles["eventsdescription-gap"]}`}>
            <div className={`${styles["eventsdescription-headingcontent"]}`}>
              <h3>Speakers</h3>
            </div>
            <div>
              <a className={`${styles["eventsdescription-speaker"]}`}>• {speaker}</a>
            </div>
          </div>

          {(type === "public" || type === "admin") && (
            <>
              <div>
                <div className={`${styles["eventsdescription-headingcontent"]}`}>
                  <h3>Organizer</h3>
                </div>

                <div>
                  <a className={`${styles["eventsdescription-speaker"]}`}>
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

export default EventsDescription;
