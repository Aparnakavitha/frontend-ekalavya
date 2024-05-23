import React from 'react'
import TextButton from "../../../components/buttons/TextButton";
import { MdEdit, MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import styles from '../StudentProfile.module.css'



const Education = (props) => {
  const {qualifications = [
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
  ]}=props;

  return (
    <div className={`${styles["education-container"]}`}>
          <div className={styles["qualification"]}>
            <div className={`${styles["qualification-content"]}`}>
              <div className={`${styles["title"]}`}>
                <h2 className={styles["title2"]}>Educational Qualification</h2>
              </div>
              <div className={`${"qualification-add-button"}`}>
                <div className={`${styles["qualification-button"]}`}>
                  <TextButton
                    icon={<IoMdAdd />}
                    text="Add Educational Qualification"
                  />
                </div>
              </div>
            </div>
            <div className={styles["qualifications-list"]}>
                <div>
                <ol type="1">
                {qualifications.map((qualification, index) => (
                  <div key={index} className={`${styles["qualification-instance"]}`}>
                    <div key={index}vclassName={styles.maindiv}>
                      <li key={index} className={`${styles["education"]}`}>
                        <h3 className={styles["qualification-name"]}>
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
                    <div className={`${styles["qualification-mod-buttons"]}`}>
                      <div className={`${styles["qualification-button"]}`}>
                      <TextButton icon={<MdEdit />} text="Edit" />
                      </div>
                      <div className={`${styles["qualification-button"]}`}>
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
  )
}

export default Education