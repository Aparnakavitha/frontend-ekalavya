import React from "react";
import styles from "../Common.module.css";
import ProfilePicture from "../../../components/profilepicture/ProfilePicture";
import TextButton from "../../../components/buttons/TextButton";
import { MdEdit, MdDelete } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

const UserProfileInfo = (props) => {
  const {
    role,
    profilepic,
    name,
    userId,
    college,
    dob,
    email,
    phoneNumber,
    linkedin,
    github,
    houseName,
    city,
    pinCode,
    state,
    country,
    aboutMe,
    hasDelete,
    onClickEdit,
    onClickDelete,
    ...rest
  } = props;

  return (
    <div className={`${styles["userprofile-main"]} padding-top padding`}>
      <div className={`${styles["userprofile-user-details"]}`}>
        <div className={`${styles["userprofile-title"]}`}>
          <h2 className={`${styles["userprofile-title1"]}`}>Details</h2>
          <div className={`${styles["userprofile-controlbuttons"]}`}>
            <div className={`${styles["userprofile-controlbutton"]}`}>
              <TextButton
                icon={<MdEdit />}
                text="Update"
                onClick={onClickEdit}
              />
            </div>
            {hasDelete && (
              <div className={`${styles["userprofile-controlbutton"]}`}>
                <TextButton
                  icon={<MdDelete />}
                  text="Delete"
                  onClick={onClickDelete}
                />
              </div>
            )}
          </div>
        </div>

        <div className={`${styles["userprofile-details-section"]}`}>
          <div className={`${styles["userprofile-basic-info"]}`}>
            <div className={`${styles["userprofile-profile-picture"]}`}>
              <ProfilePicture src={profilepic} />
            </div>
            <div className={`${styles["userprofile-info-text"]}`}>
              <h3 className={`${styles["userprofile-name"]}`}>{name}</h3>
              <h4 className={`${styles["userprofile-student-id"]}`}>
                <b>{role.charAt(0).toUpperCase() + role.slice(1)} Id:</b>{" "}
                {userId}
              </h4>
              {role === "student" && (
                <h4 className={`${styles["userprofile-college"]}`}>
                  {college}
                </h4>
              )}
              <h4 className={`${styles["userprofile-dob"]}`}>DOB: {dob}</h4>
            </div>
          </div>

          <div className={`${styles["userprofile-bio"]}`}>
            <h4 className={`${styles["userprofile-email"]}`}>
              <IoMdMail /> {email}
            </h4>
            <h4 className={`${styles["userprofile-phone"]}`}>
              <FaPhone /> {phoneNumber}
            </h4>
            {linkedin && (
              <h4 className={`${styles["userprofile-linkedin"]}`}>
                <a
                  className={`${styles["userprofile-social-links"]}`}
                  href={`https://${linkedin}`}
                >
                  <FaLinkedin /> LinkedIn :{linkedin}
                </a>
              </h4>
            )}
            {github && (
              <h4 className={styles["userprofile-github"]}>
                <a
                  className={`${styles["userprofile-social-links"]}`}
                  href={`https://${github}`}
                >
                  <FaGithub /> GitHub : {github}
                </a>
              </h4>
            )}
            <br />
            <h4 className={`${styles["userprofile-address"]}`}>
              <b>Address:</b>
            </h4>
            <div className={`${styles["userprofile-address-details"]}`}>
              <div className={`${styles["userprofile-address-line"]}`}>
                <span><b>House Name:</b> {houseName}</span>
              </div>
              <div className={`${styles["userprofile-address-line"]}`}>
                <span><b>City:</b> {city}</span>
              </div>
              <div className={`${styles["userprofile-address-line"]}`}>
                <span><b>Pin Code:</b> {pinCode}</span>
              </div>
              <div className={`${styles["userprofile-address-line"]}`}>
                <span><b>State:</b> {state}</span>
              </div>
              <div className={`${styles["userprofile-address-line"]}`}>
                <span><b>Country:</b> {country}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileInfo;
