import React from "react";
import styles from "../Common.module.css";
import ProfilePicture from "../../../components/profilepicture/ProfilePicture";
import TextButton from "../../../components/buttons/TextButton";
import { MdEdit } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

const UserProfileInfo = (props) => {
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
    <div className={`${styles["userprofile-main"]}`}>
      <div className={`${styles["userprofile-user-details"]}`}>
        <div className={`${styles["userprofile-title"]}`}>
          <h2 className={`${styles["userprofile-title1"]}`}>Details</h2>
          <TextButton icon={<MdEdit />} text="Update" />
        </div>

        <div className={`${styles["userprofile-details-section"]}`}>
          <div className={`${styles["userprofile-basic-info"]}`}>
            <div className={`${styles["userprofile-profile-picture"]}`}>
              <ProfilePicture src="https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/10/3200x2312/gallery-1457919704-gettyimages-480667731.jpg?resize=700:*" />
            </div>
            <div className={`${styles["userprofile-info-text"]}`}>
              <h3 className={`${styles["userprofile-name"]}`}>{name}</h3>
              <h4 className={`${styles["userprofile-student-id"]}`}>
                <b>Student Id:</b> {studentId}
              </h4>
              <h4 className={`${styles["userprofile-college"]}`}>{college}</h4>
              <h4 className={`${styles["userprofile-dob"]}`}>DOB: {dob}</h4>
            </div>
          </div>

          <div className={`${styles["userprofile-bio"]}`}>
            <h4 className={`${styles["userprofile-email"]}`}>
              <IoMdMail /> {email}
            </h4>
            <h4 className={`${styles["userprofile-phone"]}`}>
              <FaPhone /> {phone}
            </h4>
            <h4 className={`${styles["userprofile-linkedin"]}`}>
              <a
                className={`${styles["userprofile-social-links"]}`}
                href={`https://${linkedin}`}
              >
                <FaLinkedin /> LinkedIn
              </a>
            </h4>
            <h4 className={styles["userprofile-github"]}>
              <a
                className={`${styles["userprofile-social-links"]}`}
                href={`https://${github}`}
              >
                <FaGithub /> GitHub
              </a>
            </h4>
            <br />
            <h4 className={`${styles["userprofile-address"]}`}>
              <b>Address:</b>
            </h4>
            <h4 className={`${styles["userprofile-address"]}`}>{address}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileInfo;
