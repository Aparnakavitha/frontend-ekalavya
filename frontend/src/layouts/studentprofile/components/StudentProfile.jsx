import React from "react";
import styles from "../StudentProfile.module.css";
import ProfilePicture from "../../../components/profilepicture/ProfilePicture";
import TextButton from "../../../components/buttons/TextButton";
import { FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

const StudentProfile = (props) => {
  const {
    name = "Emma Watson",
    studentId = "STD1537",
    college = "Christ University",
    dob = "Jan 21 2001",
    email = "emmawatson@gmail.com",
    phone = "(+91) 8337254637",
    linkedin = "linkedin/emmawatson",
    github = "github.com/emmawatson153",
    address = "Bengaluru, 685789, Karnataka, India",
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
    ...rest
  } = props;

  return (
    <div className={styles.main}>
      <div className={styles["user-details"]}>
        <div className={`${styles["title"]}`}>
          <h2 className={styles.title1}>Details</h2>
          <TextButton icon={<MdEdit />} text="Update" />
        </div>

        <div className={styles["details-section"]}>
          <div className={styles["basic-info"]}>
            <div className={styles["profile-picture"]}>
              <ProfilePicture src="https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/10/3200x2312/gallery-1457919704-gettyimages-480667731.jpg?resize=700:*" />
            </div>
            <div className={styles["info-text"]}>
              <h3 className={styles["name"]}>{name}</h3>
              <h4 className={styles["student-id"]}>
                <b>Student Id:</b> {studentId}
              </h4>
              <h4 className={styles["college"]}>{college}</h4>
              <h4 className={styles["dob"]}>DOB: {dob}</h4>
            </div>
          </div>

          <div className={styles["bio"]}>
            <h4 className={styles["email"]}>{email}</h4>
            <h4 className={styles["phone"]}>
              <FaPhone /> {phone}
            </h4>
            <h4 className={styles["linkedin"]}>
              <a
                className={`${styles["social-links"]}`}
                href={`https://${linkedin}`}
              >
                <FaLinkedin /> LinkedIn
              </a>
            </h4>
            <h4 className={styles["github"]}>
              <a
                className={`${styles["social-links"]}`}
                href={`https://${github}`}
              >
                <FaGithub /> GitHub
              </a>
            </h4>
            <br />
            <h4 className={`${styles["address"]}`}>
              <b>Address:</b>
            </h4>
            <h4 className={styles["address"]}>{address}</h4>
          </div>
        </div>

        <div className={`${styles["lower"]}`}>
          <div className={styles["qualification"]}>
            <div className={`${styles["qualification-content"]}`}>
              <div className={`${styles["title"]}`}>
                <h2 className={styles["title2"]}>Educational Qualification</h2>
              </div>
              <div className={styles["qualifications-list"]}>
                <ol type="1">
                  {qualifications.map((qualification, index) => (
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
                  ))}
                </ol>
              </div>
            </div>

            <div className={`${styles["qualification-buttons"]}`}>
              <div className={`${"qualification-add-button"}`}>
                <div className={`${styles["qualification-button"]}`}>
                  <TextButton
                    icon={<IoMdAdd />}
                    text="Add Educational Qualification"
                  />
                </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
