import React from "react";
import styles from "../EventsMentor.module.css";
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
    <div className={styles.container}>
      <div className={styles.topleft}>
        {/* <button className={styles.backbutton}>Back</button>
        <button className={styles.backbutton}>Back</button> */}
        <div className={styles.navbutton}>
          <div>
            <NavButton pageName={button} />
          </div>
          <div>
            <NavButton pageName={buttons} />
          </div>
        </div>
      </div>

      <div className={styles.description}>
        <div className={styles.buttondiv}>
          <div className={styles.buttondiv2}>
            <div className={styles.content}>
              <div>
                <h2>Exploring Future Technologies</h2>
              </div>
              <div className={styles.texted}>
                <a className={styles.text}> {text} </a>
                <a className={styles.texts}>{texts}</a>
              </div>
            </div>

            {type === "public" && (
              <>
                <div className={styles.primarydiv}>
                  <div className={styles.primarybutton}>
                    <div>
                      <PrimaryButton content={smaller} variant="secondary" />
                    </div>
                  </div>
                </div>
              </>
            )}

            {type === "mentor" && (
              <>
                <div className={styles.primarydiv}>
                  <div className={styles.primarybutton}>
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
                  <div className={styles.primarydiv}>
                    <PrimaryButton content={large} variant="secondary" />

                    <PrimaryButton content={medium} variant="secondary" />

                    <PrimaryButton content={small} variant="secondary" />
                  </div>
                </div>
              </>
            )}
          </div>

          <div className={styles.gap}>
            <div>
              <h3>Description</h3>
            </div>
            <div className={styles.desc}>
              <p>{desc}</p>
            </div>
          </div>

          <div className={styles.align}>
            <div className={styles.gap}>
              <div>
                <h3>Date and Time</h3>
              </div>
              <div className={styles.timer}>
                <a className={styles.date}>{date}</a>
                <a className={styles.time}>{time}</a>
              </div>
            </div>

            <div className={styles.gap}>
              <div>
                <h3>Location</h3>
              </div>
              <div className={styles.timer}>
                <a className={styles.venue}>{venue}</a>
                <a className={styles.address}>{address}</a>
              </div>
            </div>
          </div>

          <div className={styles.gap}>
            <div>
              <h3>Speakers</h3>
            </div>
            <div>
              <a className={styles.speaker}>{speaker}</a>
            </div>
          </div>

          {type === "public" && (
            <>
              <div>
                <h3>Organizer</h3>

                <div>
                  <a className={styles.speaker}>{speaker}</a>
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
