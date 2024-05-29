import React from "react";
import TextButton from "../../../components/buttons/TextButton";
import { MdEdit, MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import styles from "../Common.module.css";

const Education = (props) => {
  const {
    qualifications = [
      {
        name: "Master of Business Administration (MBA)",
        university: "Christ University",
        cgpa: 7.2,
        start: "May 2022",
        end: "April 2024",
        specialization: "Marketing",
      },

      {
        name: "Bachelor of Technology (B.Tech)",
        university: "Christ University",
        cgpa: 7.2,
        start: "May 2022",
        end: "April 2024",
        specialization: "Marketing",
      },
    ],
  } = props;

  return (
    <div className={`${styles["education-container"]}`}>
      <div className={`${styles["education-qualification"]}`}>
        <div className={`${styles["education-qualification-content"]}`}>
          <div className={`${styles["education-title"]}`}>
            <h2 className={`${styles["education-title2"]}`}>
              Educational Qualification
            </h2>
          </div>
          <div className={`${"education-qualification-add-button"}`}>
            <div className={`${styles["education-qualification-button"]}`}>
              <TextButton
                icon={<IoMdAdd />}
                text="Add Educational Qualification"
              />
            </div>
          </div>
        </div>
        <div className={`${styles["education-qualifications-list"]}`}>
          <div>
            <ol type="1" className={`${styles["education-list-box"]}`}>
              {qualifications.map((qualification, index) => (
                <div
                  key={index}
                  className={`${styles["education-qualification-instance"]}`}
                >
                  <div key={index} className={`${styles["education-maindiv"]}`}>
                    <li
                      key={index}
                      className={`${styles["education-education"]}`}
                    >
                      <h3
                        className={`${styles["education-qualification-name"]}`}
                      >
                        {qualification.name}
                      </h3>

                      <p>{qualification.university}</p>
                      <p>CGPA: {qualification.cgpa}</p>
                      <p>
                        {qualification.start} - {qualification.end}
                      </p>
                      <p>Specialization: {qualification.specialization}</p>
                    </li>
                  </div>
                  <div
                    className={`${styles["education-qualification-mod-buttons"]}`}
                  >
                    <div
                      className={`${styles["education-qualification-button"]}`}
                    >
                      <TextButton icon={<MdEdit />} text="Edit" />
                    </div>
                    <div
                      className={`${styles["education-qualification-button"]}`}
                    >
                      <TextButton icon={<MdDelete />} text="Delete" />
                    </div>
                  </div>
                </div>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
